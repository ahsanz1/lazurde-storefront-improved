import React, { useContext, useState } from "react";
import Script from "next/script";
import { ArrowRight } from "components/icons";
import { fetchProduct } from "lib/utils/product";
import { useCart } from "lib/utils/cart";
import { ATCPayload, ATCUpdatePayload, CartObject } from "lib/types/cart";
import { BC_CHANNEL_ID } from "general-config";
import { useQueryClient } from "@tanstack/react-query";
import { getCartByCustomer } from "lib/middleware-apis/cart";
import { AppContext } from "lib/context";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { changeLocaleFormat } from "lib/utils/common";

interface PopupProps {
  bId?: string;
  btnText?: string;
  scriptId?: string;
  className?: string;
  videoPlayBtn?: boolean;
  pdpBtn?: boolean;
}

const BambuserPopup = ({
  bId = "34vfkSGTIydQauc1U8Xq",
  btnText = "see live products",
  scriptId = "0",
  className = "",
  videoPlayBtn = false,
  pdpBtn = false,
}: PopupProps): JSX.Element => {
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const [counter, setCounter] = useState(Math.random());
  const { addOrCreateCartMutation, updateCartMutation, removeCartMutation } =
    useCart();
  const queryClient = useQueryClient();
  const router = useRouter();
  const customer =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("customer"));

  const storeApi: any = {};

  storeApi.getProduct = async (productIdentifier: string) => {
    const products = await fetchProduct(productIdentifier, appState?.region);
    const newObj = {
      sku: products?.sku,
      productId: products?.id,
      name: products?.name,
      brand: products?.brand?.name || "Lazurde",
      shortDescription: products?.plainTextDescription,
      defaultVariationIndex: 0,
      price: products?.prices?.price?.value,
      price_discount: true,
      colors: [
        {
          variationId: products?.name,
          name: products?.name,
          colorName: "black",
          colorHexCode: "#000000",
          images: [
            products?.defaultImage?.url320wide,
            products?.defaultImage?.url640wide,
            products?.defaultImage?.url960wide,
            products?.defaultImage?.url1280wide,
          ],
          sizes: [
            {
              sizeId: products?.name,
              currency: products?.prices?.price?.currencyCode,
              current:
                products?.prices?.basePrice?.value ||
                products?.prices?.price?.value,
              original: products?.prices?.basePrice?.value,
              name: "Default",
              quantityInStock: products?.inventory?.isInStock,
            },
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
      locale:  changeLocaleFormat(appState?.currentLocale),
    };
    product &&
      addOrCreateCartMutation.mutate(
        { payload, item: product },
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

  storeApi.getCartState = async () => {
    const cartData: CartObject = queryClient.getQueryData(["cartData"]);
    const cartId = cartData?.id;
    const data = await getCartByCustomer(cartId, appState?.region);
    return data && Promise.resolve(0);
  };

  if (typeof window !== "undefined") {
    (window as any).onBambuserLiveShoppingReady = (player: any) => {
      const cartData: CartObject = queryClient.getQueryData(["cartData"]);
      player.configure({
        checkoutOnCartClick: true,
      });
      player.configure({
        currency: cartData?.currency?.code || "SAR",
        locale: appState?.lang,
        buttons: {
          checkout: player.BUTTON.MINIMIZE, // Minimize the player when checkout button is clicked
        },
        floatingPlayer: {
          navigationMode: player.FLOATING_PLAYER_NAVIGATION_MODE.MANUAL,
        },
      });

      player.on(player.EVENT.PROVIDE_PRODUCT_DATA, (event: any) => {
        event.products.forEach(({ ref: sku, url, id: bambuserId }: any) => {
          storeApi.getProduct(sku).then((yourProduct: any) => {
            player.updateProduct(bambuserId, (productFactory: any) =>
              productFactory.product((productDetailFactory: any) =>
                productDetailFactory
                  .name(yourProduct.name)
                  .brandName(yourProduct.brand)
                  .introduction(yourProduct.shortDescription)
                  .description(yourProduct.description)
                  .sku(yourProduct.productId)
                  .defaultVariationIndex(yourProduct.defaultVariationIndex)
                  .variations((variationFactory: any) =>
                    yourProduct.colors.map((variation: any) =>
                      variationFactory()
                        .imageUrls(variation.images)
                        .name(variation.name)
                        .sku(variation.variationId)
                        .sizes((sizeFactory: any) =>
                          variation.sizes.map((size: any) =>
                            sizeFactory()
                              .name(size.name)
                              .inStock(size.quantityInStock === true)
                              .sku(yourProduct.sku)
                              .price((priceFactory: any) =>
                                priceFactory
                                  .current(size.current)
                                  .original(size.original)
                                  .currency(size.currency)
                              )
                          )
                        )
                    )
                  )
              )
            );
          });
        });
      });

      player.on(player.EVENT.ADD_TO_CART, (addedItem: any, callback: any) => {
        storeApi
          .addToCart(addedItem.sku)
          .then(() => callback(true))
          .catch((error: any) => {
            if (error.message === "Item out of stock") {
              callback({
                success: false,
                reason: "out-of-stock",
              });
            } else {
              callback(false);
            }
          });
      });

      player.on(
        player.EVENT.UPDATE_ITEM_IN_CART,
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
              .catch(function (error: any) {
                if (error.type === "out-of-stock") {
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

      player.on(player.EVENT.CHECKOUT, () => {
        player.close();
        router.push(`/cart`);
      });

      player.on(player.EVENT.SYNC_CART_STATE, () => {
        storeApi.getCartState().then((response: any) => {
          if (response.item_count == 0) {
            player.updateCart({
              items: [],
            });
          }
        });
      });
    };
  }

  return (
    <>
      <div className={className} id={`liveshopping-${scriptId}`}>
        {videoPlayBtn ? (
          <ArrowRight fill="#ffffff" width="20" height="35" />
        ) : pdpBtn ? (
          <div
            className={className}
            key={counter}
            id={`liveshopping-${scriptId}`}
            onClick={(e) => {
              e.preventDefault();
              setCounter(Math.random() * (1000000 - 1) + 1);
            }}
          >
            {t("joinTheShow")}
          </div>
        ) : (
          { btnText }
        )}
      </div>

      <Script
        key={counter}
        id={counter?.toString()}
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            // ------------------------------------ Initialize the script ----------------------------------------
            if (!window.initBambuserLiveShopping){
              window.initBambuserLiveShopping = function(item) { window.initBambuserLiveShopping.queue.push(item) }; window.initBambuserLiveShopping.queue = [];
              var scriptNode = document.createElement('script');
              scriptNode['src'] = 'https://lcx-embed.bambuser.com/default/embed.js';
              document.documentElement.appendChild(scriptNode);
            }
          
            window.initBambuserLiveShopping({
              showId: '${bId}',
              node: document.getElementById('liveshopping-${scriptId}'),
              type: "overlay",
            })
          })();`,
        }}
      ></Script>
    </>
  );
};

export default BambuserPopup;
