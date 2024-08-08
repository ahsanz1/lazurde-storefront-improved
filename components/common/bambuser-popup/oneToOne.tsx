import React, { useContext } from "react";
import Script from "next/script";
import { ArrowRight } from "components/icons";
import { fetchProduct } from "lib/utils/product";
import { useCart } from "lib/utils/cart";
import { ATCPayload, ATCUpdatePayload, CartObject } from "lib/types/cart";
import { BC_CHANNEL_ID } from "general-config";
import { useQueryClient } from "@tanstack/react-query";
import Button from "../ui/button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { AppContext } from "lib/context";

interface PopupProps {
  bId?: string;
  btnText?: string;
  scriptId?: string;
  className?: string;
  videoPlayBtn?: boolean;
  queueID?: string;
  pdpBtn?: boolean;
}

const BambuserOneToOne = ({
  bId = "",
  btnText = "",
  scriptId = "start-one-to-one",
  className = "",
  videoPlayBtn = false,
  pdpBtn = false,
  queueID = "",
}: PopupProps): JSX.Element => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { appState } = useContext(AppContext);
  const { addOrCreateCartMutation, updateCartMutation, removeCartMutation } =
    useCart();
  const queryClient = useQueryClient();
  const customerData: any = queryClient.getQueryData(["customerData"]);
  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));

  const storeApi: any = {};
  storeApi.getProduct = async (productIdentifier: string) => {
    const products = await fetchProduct(productIdentifier, appState?.region);
    const newObj = {
      sku: products?.sku,
      productId: products?.id,
      title: products?.name,
      description: products?.plainTextDescription,
      brand: products?.brand?.name || "Lazurde",
      price: products?.prices?.price?.value,
      details: [
        products?.name,
        products?.plainTextDescription,
        products?.customFields?.edges?.[0]?.node?.value || "Lazurde",
      ],
      slug: `/p/${products?.name}-${products?.sku}`,
      collection: products?.name,
      original_price: products?.prices?.basePrice?.value,
      rating: {
        averageRating: products?.reviewSummary?.numberOfReviews || 4,
        maxValue: 5,
        numberOfRatings: products?.reviewSummary?.summationOfRatings || 20,
      },
      options: [
        {
          name: "",
          optionId: 1,
          values: [products?.name],
        },
      ],
      variants: [
        {
          variationId: products?.id,
          title: products?.name,
          slug: `/p/${products?.name}-${products?.sku}`,
          option1: products?.name,
          available: true,
          price: products?.prices?.price?.value,
          original_price: products?.prices?.basePrice?.value,
          currency: products?.prices?.price?.currencyCode || "SAR",
          images: [
            products?.defaultImage?.url320wide,
            products?.defaultImage?.url640wide,
            products?.defaultImage?.url960wide,
            products?.defaultImage?.url1280wide,
          ],
        },
      ],
    };
    return Promise.resolve(newObj);
  };

  storeApi.addToCart = async (sku: string) => {
    const product = await fetchProduct(sku, appState?.region);
    const payload: ATCPayload = {
      customer_id: customer?.entityId,
      line_items: [
        {
          quantity: 1,
          product_id: product?.entityId,
        },
      ],
      channel_id: BC_CHANNEL_ID,
      locale: appState?.lang === "en" ? "en-US" : appState?.currentLocale,
    };
    product &&
      addOrCreateCartMutation.mutate(
        { payload,  item: product },
        {
          onSuccess: () => {},
          onError: () => {},
        }
      );
    return Promise.resolve({ success: true });
  };

  storeApi.updateItemInCart = async ({ sku, quantity }: any) => {
    const cartData: CartObject = queryClient.getQueryData(["cartData"]);
    const items = cartData?.line_items?.physical_items;
    const skuMatched = items?.find((item: any) => {
      return item?.sku === sku;
    });
    const payload: ATCUpdatePayload = {
      line_item: {
        quantity: quantity,
        product_id: skuMatched?.product_id,
      },
      channel_id: BC_CHANNEL_ID,
    };
    skuMatched &&
      updateCartMutation.mutate(
        { payload, itemId: skuMatched?.id, item: skuMatched },

        {
          onSuccess: () => {},
          onError: () => {},
        }
      );
    return Promise.resolve({ success: true });
  };

  storeApi.removeItemFromCart = async (sku: string) => {
    const cartData: CartObject = queryClient.getQueryData(["cartData"]);
    const items = cartData?.line_items?.physical_items;
    const skuMatched = items?.find((item: any) => {
      return item?.sku === sku;
    });
    skuMatched &&
      removeCartMutation.mutate(
        { itemId: skuMatched?.id, item: skuMatched },
        {
          onError: () => {},
        }
      );
    return Promise.resolve({ success: true });
  };

  typeof window !== "undefined"
    ? ((window as any).onBambuserOneToOneReady = function (
        BambuserOneToOneEmbed: any
      ) {
        let oneToOneEmbed = new BambuserOneToOneEmbed({
          orgId: bId,
          queue: queueID,

          smartVariantOverride: "Video", // Other options are 'Avatar' and 'Side dock'
          data: {
            firstName: customerData?.firstName,
            lastName: customerData?.lastName,
          },
          locale: appState?.lang === "en" ? "en-US" : appState?.currentLocale,
          allowFirstPartyCookies: true,
          enableScanning: true,
        });

        let buttons = document.querySelectorAll("#start-one-to-one");
        buttons.forEach((button) => {
          if (button.getAttribute("listener") !== "true") {
            button.addEventListener("click", () => {
              button.setAttribute("listener", "true");
              oneToOneEmbed.show();
            });
          }
        });
        oneToOneEmbed.on("provide-product-data", (event: any) => {
          event.products.forEach(({ ref, type, id: bambuserId }: any) => {
            let sku;
            if (type === "product-reference") {
              sku = ref;
            }

            storeApi.getProduct(ref).then((yourProduct: any) => {
              oneToOneEmbed.updateProduct(bambuserId, (productFactory: any) => {
                return productFactory
                  .currency(yourProduct.price)
                  .locale(appState?.lang === "en" ? "en-US" : appState)
                  .product((detailFactory: any) =>
                    detailFactory
                      .name(yourProduct.title)
                      .sku(yourProduct.productId)
                      .description(yourProduct.description)
                      .url(window.location.origin + yourProduct.slug)
                      .attributes((attribute: any) => {
                        return yourProduct?.options?.map((attr: any) =>
                          attribute(attr.optionId)
                            .name(attr.name)
                            .options((option: any) =>
                              attr.values.map((optionName: any) =>
                                option(optionName).name(optionName)
                              )
                            )
                        );
                      })
                      .variations((variationFactory: any) =>
                        yourProduct?.variants?.map((variation: any) =>
                          variationFactory()
                            .name(variation.title)
                            .url(window.location.origin + variation.slug)
                            .subtitle(yourProduct.brand)
                            .sku(yourProduct.sku)
                            .inStock(variation.available)
                            .imageUrls(variation.images)
                            .price((priceFactory: any) =>
                              priceFactory
                                .currency(variation.currency)
                                .current(variation.price)
                            )
                            .attributes((attribute: any) =>
                              yourProduct.options.map((attr: any) =>
                                attribute(
                                  attr.optionId,
                                  variation["option" + attr.optionId]
                                )
                              )
                            )
                            .details((detail: any) => [
                              detail(
                                "BULLETS",
                                yourProduct.details.map(
                                  (details: any) => details
                                )
                              ),
                            ])
                            .rating((ratingFactory: any) =>
                              ratingFactory
                                .maxValue(yourProduct.rating.maxValue)
                                .rating(yourProduct.rating.averageRating)
                                .numberOfRatings(
                                  yourProduct.rating.numberOfRatings
                                )
                            )
                        )
                      )
                  );
              });
            });
          });
        });

        oneToOneEmbed.on(
          "should-add-item-to-cart",
          (addedItem: any, callback: any) => {
            storeApi
              .addToCart(addedItem.sku)
              .then(() => callback(true))
              .catch((error: any) => {
                if (error.message === "Item Out of Stock") {
                  callback({
                    success: false,
                    reason: "out-of-stock",
                  });
                } else {
                  callback(false);
                }
              });
          }
        );

        oneToOneEmbed.on(
          "should-update-item-in-cart",
          (updatedItem: any, callback: any) => {
            if (updatedItem.quantity > 0) {
              storeApi
                .updateItemInCart({
                  sku: updatedItem.sku,
                  quantity: updatedItem.quantity,
                })
                .then(() => {
                  callback(true);
                })
                .catch((error: any) => {
                  if (error.message === "Item Out od Stock") {
                    callback({
                      success: false,
                      reason: "out-of-stock",
                    });
                  } else {
                    callback(false);
                  }
                });
            }

            if (updatedItem.quantity === 0) {
              storeApi
                .removeItemFromCart(updatedItem.sku)
                .then(() => {
                  callback(true);
                })
                .catch(() => {
                  callback(false);
                });
            }
          }
        );
        oneToOneEmbed.on("goto-checkout", (event: any) => {
          oneToOneEmbed.floatAbove(
            window.location.origin + `/${router?.locale}/cart`
          );
        });
      })
    : null;

  return (
    <>
      {pdpBtn ? (
        <>
          {" "}
          <Button
            className={className}
            buttonSize={"fill"}
            buttonStyle={"white"}
            id={`start-one-to-one`}
          >
            {t("bookAppointment")}
          </Button>
        </>
      ) : (
        <>
          <div className={className} id={`start-one-to-one`}>
            {videoPlayBtn ? (
              <ArrowRight fill="#ffffff" width="20" height="35" />
            ) : (
              <div>{btnText}</div>
            )}
          </div>
        </>
      )}

      <Script
        id={`${scriptId}`}
        strategy="lazyOnload"
        src="https://one-to-one.bambuser.com/embed.js"
      ></Script>
    </>
  );
};

export default BambuserOneToOne;
