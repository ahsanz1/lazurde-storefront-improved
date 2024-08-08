import axios from "axios";
import { tokens as token } from "general-config";
import ENDPOINTS from "lib/api/endpoints";
import {
  getAllCustomerAttributes,
  getAttributesByCustomerId,
  getCustomerByEmail,
} from "lib/identity/cutomer";
import { getCartByCartIdApi } from "lib/utils/cart";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email = "" } = req.body;
    if (!email) res.status(400).send({ message: "customer email is required" });
    const emailsWithRegions = [
      { customerEmail: email, region: "sa" },
      { customerEmail: email, region: "ae" },
      { customerEmail: email, region: "eg" },
    ];
    const customerPromises = emailsWithRegions.map((customer) =>
      getCustomerByEmail(customer.customerEmail, customer.region)
    );

    const customerPromisesResult = await Promise.allSettled(customerPromises);
    let customerWithRegions = customerPromisesResult.map((cpr: any, idx) => {
      if (cpr?.value?.response && cpr?.value?.response.length > 0) {
        switch (idx) {
          case 0: {
            return { ...cpr.value.response[0], region: "sa" };
          }
          case 1: {
            return { ...cpr.value.response[0], region: "ae" };
          }
          case 2: {
            return { ...cpr.value.response[0], region: "eg" };
          }
          default: {
            return { ...cpr.value.response[0], region: "" };
          }
        }
      }
      return {};
    });

    customerWithRegions = customerWithRegions.filter((c) => c.region);

    const customerCarts = [];

    for (let i = 0; i < customerWithRegions.length; i++) {
      let allAttributes = [];
      let customerAttributes = [];
      const attributesRes = await getAllCustomerAttributes(
        customerWithRegions[i].region
      );

      if (attributesRes.response && attributesRes.response.length > 0)
        allAttributes = attributesRes.response;

      const cartAttr = allAttributes.find(
        (attr: any) => attr.name.toLowerCase() === "cart id"
      );

      const customerAttributesRes = await getAttributesByCustomerId(
        customerWithRegions[i].id,
        customerWithRegions[i].region
      );

      if (
        customerAttributesRes.response &&
        customerAttributesRes.response.length > 0
      )
        customerAttributes = customerAttributesRes.response;

      const customerCartAttr = customerAttributes.find(
        (ca: any) => ca.attribute_id === cartAttr.id
      );

      if (!customerCartAttr) break;

      const customerCartRes = await getCartByCartIdApi(
        customerCartAttr.attribute_value,
        customerWithRegions[i].region
      );

      if (customerCartRes.response)
        customerCarts.push(customerCartRes.response);
    }

    const cartsTrackingData = [];

    for (let i = 0; i < customerCarts.length; i++) {
      const {
        locale = "",
        line_items = {},
        cart_amount = 0,
        discount_amount = 0,
        currency = {},
      } = customerCarts[i];

      const region = locale?.split("-")[1] || "sa";
      const language = locale?.split("-")[0] || "";
      const { physical_items = [] } = line_items;

      let ids = "";
      physical_items.forEach((item: any, idx: number) => {
        ids = ids + item.product_id;
        if (idx < physical_items.length - 1) ids = ids + ",";
      });

      const cartProductsRes = await axios.get(
        `${
          //@ts-ignore
          token[region.toLowerCase()].BC_API_DOMAIN
        }${
          ENDPOINTS.BC.PRODUCTS.GET_ALL_PRODUCTS
        }?id:in=${ids}&include=custom_fields,images`,
        {
          headers: {
            "Content-Type": "application/json",
            //@ts-ignore
            "X-Auth-Token": token[region.toLowerCase()].BC_API_ACCESS_TOKEN,
          },
        }
      );

      const { data: cartProducts = [] } = cartProductsRes.data;

      const trackingData = {
        region,
        boutique: "",
        language,
        total_quantity: line_items?.physical_items.length || 0,
        total_price: cart_amount || 0,
        total_discount_value: discount_amount || 0,
        currency: currency?.code || "",
        item_ids: physical_items.map((item: any) => item.product_id),
        item_details: cartProducts.map((product: any) => {
          const { images = [], custom_fields = [] } = product;
          let quantity = 0;
          const itemInPhysicalItems = physical_items.find(
            (item: any) => item.product_id === product.id
          );
          if (itemInPhysicalItems) quantity = itemInPhysicalItems.quantity || 0;
          let titleAR = "";
          if (language === "ar") {
            const titleAttr = custom_fields.find(
              (cf: any) => cf.name.toLowerCase() === "new title ar"
            );
            if (titleAttr) titleAR = titleAttr.value;
          }
          let productNameTokens = [];
          let productNameForUrl = "";
          const productName = product?.name?.split(" - ")[1] || "";
          if (productName) {
            productNameTokens = productName.split(" ");
            productNameTokens.forEach((t: string, idx: number) => {
              productNameForUrl = productNameForUrl + t;
              if (idx < productNameTokens.length - 1) {
                productNameForUrl = productNameForUrl + "-";
              }
            });
          }

          const itemTrackingData = {
            item_id: product.id || null,
            item_title: language === "ar" ? titleAR : product.name,
            item_original_price: product.price || 0,
            item_sale_price: product.sale_price || 0,
            item_discount:
              product.sale_price > 0 ? product.price - product.sale_price : 0,
            item_price: product.price,
            item_url: `${
              process.env.NODE_ENV === "development"
                ? "https://qa-lazurde.vercel.app"
                : "https://www.lazurde.com"
            }/p/${productNameForUrl}-sku-${product.sku}`,
            item_image: images.length > 0 ? images[0].url_standard : "",
            total_price: product.price || 0,
            discount_value:
              product.sale_price > 0 ? product.price - product.sale_price : 0,
            quantity,
          };
          return itemTrackingData;
        }),
      };

      cartsTrackingData.push(trackingData);
    }

    if (customerCarts.length === 0)
      res.status(404).send({ message: "No cart found!" });
    else res.status(200).send({ cartsTrackingData });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send({ message: (error as any).message });
  }
}
