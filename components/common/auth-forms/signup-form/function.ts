import { getCurrency } from "lib/utils/common";
import {
  createBigCommerceCoupon,
  createBigCommercePromotion,
} from "lib/api/createCoupon";
import { sendKlaviyoEmail } from "lib/identity/cutomer";
import { categoryIdByRegion } from "general-config";

export const welcomeEmailApi = async (details: any, region: any, lang: any) => {
  let idArr = [];
  if (region === "sa") {
    idArr.push(
      (categoryIdByRegion as any)?.[region]?.goldcoinsbars,
      (categoryIdByRegion as any)?.[region]?.goldbar,
      (categoryIdByRegion as any)?.[region]?.goldcoin,
      (categoryIdByRegion as any)?.[region]?.sets
    );
  }
  if (region === "ae") {
    idArr.push(
      (categoryIdByRegion as any)?.[region]?.goldcoinsbars,
      (categoryIdByRegion as any)?.[region]?.goldbar,
      (categoryIdByRegion as any)?.[region]?.goldcoin,
      (categoryIdByRegion as any)?.[region]?.sets
    );
  }
  if (region === "eg") {
    idArr.push(
      (categoryIdByRegion as any)?.[region]?.goldcoinsbars,
      (categoryIdByRegion as any)?.[region]?.goldbar,
      (categoryIdByRegion as any)?.[region]?.goldcoin,
      (categoryIdByRegion as any)?.[region]?.sets,
      (categoryIdByRegion as any)?.[region]?.goldbyweight,
      (categoryIdByRegion as any)?.[region]?.weddingband
    );
  }

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const isoStringWithOffset = currentDate
    .toISOString()
    .replace(/\.\d{3}Z$/, "+00:00");
  const createPromotionPayload = {
    redemption_type: "COUPON",
    name: `New Customer Coupon - ${details?.first_name} - Email - ${details?.email}`,
    channels: [
      {
        id: 1,
      },
    ],
    rules: [
      {
        action: {
          cart_items: {
            discount: {
              percentage_amount: "10",
            },
            items: {
              not: {
                categories: idArr,
              },
            },
          },
        },
        apply_once: true,
        stop: false,
      },
    ],
    current_uses: 0,
    max_uses: 1,
    status: "ENABLED",
    start_date: isoStringWithOffset || "2023-11-12T01:02:03+00:00",
    stop: false,
    can_be_used_with_other_promotions: true,
    currency_code: getCurrency(region),
  };

  await createBigCommercePromotion(createPromotionPayload, region)
    .then((promotionCreated) => {
      const promotionID = promotionCreated?.data?.id;
      if (promotionID) {
        const createCouponPayload = {
          code: Array.from(Array(11), () =>
            Math.floor(Math.random() * 36).toString(36)
          )
            .join("")
            .toUpperCase(),
          max_uses: 1,
          max_uses_per_customer: 1,
        };

        createBigCommerceCoupon(promotionID, region, createCouponPayload)
          .then((couponCreated) => {
            const couponCode = couponCreated?.data?.code;
            if (couponCode) {
              const welcomeEmailPayload = {
                "data": {
                  "type": "event",
                  "attributes": {
                    "properties": {
                      "action": "Welcome To Lazurde",
                      "couponCode": couponCode,
                      "lang|lookup": lang,
                      "region": region
                    },
                    "metric": {
                      "data": {
                        "type": "metric",
                        "attributes": {
                          "name": "Welcome To Lazurde"
                        }
                      }
                    },
                    "profile": {
                      "data": {
                        "type": "profile",
                        "attributes": {
                          "properties": {},
                          "email": details?.email,
                          "first_name": details?.name
                        }
                      }
                    },
                    "time": new Date().toISOString(),
                    "unique_id": new Date().getTime().toString(),
                  }
                }
              };
              sendKlaviyoEmail(welcomeEmailPayload)
                .then((emailStatus) => {
                  if (emailStatus === 202) {
                    console.log(
                      "Welcome email sent successfully: ",
                      JSON.stringify(welcomeEmailPayload)
                    );
                  } else {
                    console.error(
                      "Welcome email sending failed with status code:",
                      emailStatus,
                      JSON.stringify(welcomeEmailPayload)
                    );
                  }
                })
                .catch((error) => {
                  console.error(
                    "Error sending welcome email:",
                    error,
                    JSON.stringify(welcomeEmailPayload)
                  );
                });
            }
          })
          .catch((error) => {
            console.error("Error creating coupon:", error);
          });
      }
    })
    .catch((error) => {
      console.error("Error creating promotion:", error);
    });
};
