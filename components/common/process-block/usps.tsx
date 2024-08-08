import React, { useContext } from "react";
import styles from "./style.module.scss";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import UspsSingle from "./uspsSingle";
import { useRouter } from "next/router";

const USPSBlock = (): JSX.Element => {
  const date = new Date();
  const { appState } = useContext(AppContext);
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentRegion = router?.locale?.split("-")?.[1] || appState?.region;

  const processIcons_BaseURL =
    "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/process-icons";

  const paymentOpt: any = {
    sa: `<b>${t("TamaraTabby")}</b>`,
    ae: `<b>${t("TamaraTabby")}</b>`,
    eg: `<b>valu</b>`,
  };

  const paymentOptHeading: any = {
    sa: t("TamaraTabby"),
    ae: t("TamaraTabby"),
    eg: `ValU`,
  };

  const regionCity: any = {
    sa: t("Riyadh"),
    ae: t("UAEregion"),
    eg: t("Cairo"),
  };

  const returnDays: any = {
    sa: `${t("Free")} 15-${t("daysReturn")}`,
    ae: `${t("Free")} 15-${t("daysReturn")}`,
    eg: `${t("Free")} 30-${t("daysReturn")}`,
  };

  const returnDaysAR: any = {
    sa: `${t("daysReturn")} 15 ${t("Free")}`,
    ae: `${t("daysReturn")} 15 ${t("Free")}`,
    eg: `${t("daysReturn")} 30 ${t("Free")}`,
  };

  const saudiaArabia: any = {
    one: `${t("BuyNowPayLaterTabby")}<br><br>`,
    two: `${t("BuyNowPayLaterTamara")}`,
  };

  const egypt: any = {
    one: `${t("valUNotificationOne")}<br><br>`,
    two: `${t("valUNotificationTwo")}<br><br>`,
    three: `${t("valUNotificationThree")}<br><br>`,
    four: `${t("valUNotificationFour")}<br><br>`,
  };

  const uspsData = [
    {
      imgUrl: `${processIcons_BaseURL}/${"process-one.png"}`,
      label: t("FreeDelivery"),
      modalHeading: t("FreeDelivery"),
      modalDatapoints: {
        sa: [
          t("RandomOrdersDeliveryNotification"),
          t("StandardOrdersDeliveryNotification"),
          t("OrdersWeekendNotification"),
        ],
        ae: [
          t("RandomOrdersDeliveryNotification"),
          t("StandardOrdersDeliveryNotification"),
          t("OrdersWeekendNotification"),
        ],
        eg: [
          t("RandomOrdersDeliveryNotification"),
          t("StandardOrdersDeliveryNotification"),
          t("OrdersWeekendNotification"),
        ],
      },

      infoIcon: `${processIcons_BaseURL}/${"shopicon.svg"}`,
    },
    {
      imgUrl: `${processIcons_BaseURL}/${"process-two.svg"}`,
      label:
        appState?.lang === "en"
          ? returnDays?.[currentRegion]
          : returnDaysAR?.[currentRegion],
      modalHeading: returnDays?.[currentRegion],
      modalDatapoints: {
        sa: [
          t("returnNotificationOneSA"),
          t("retrunNotificationTwo"),
          t("retrunNotificationThree"),
          t("retrunNotificationFour"),
          t("retrunNotificationFive"),
        ],
        ae: [
          t("returnNotificationOneSA"),
          t("retrunNotificationTwo"),
          t("retrunNotificationThree"),
          t("retrunNotificationFour"),
          t("retrunNotificationFive"),
        ],
        eg: [
          t("returnNotificanOneEG"),
          t("retrunNotificationTwo"),
          t("retrunNotificationThree"),
          t("retrunNotificationFour"),
          t("retrunNotificationFive"),
        ],
      },

      infoIcon: `${processIcons_BaseURL}/${"shopicon.svg"}`,
    },
    {
      imgUrl: `${processIcons_BaseURL}/${"process-third.svg"}`,
      label: `${t("BuyNowPayLater")} ${paymentOpt?.[currentRegion]}`,
      modalHeading: `${t("BuyNowPayLater")} ${
        paymentOptHeading?.[currentRegion]
      }`,
      modalDatapoints: {
        sa: [saudiaArabia?.one, saudiaArabia?.two],
        ae: [saudiaArabia?.one, saudiaArabia?.two],
        eg: [egypt?.one, egypt?.two, egypt?.three, egypt?.four],
      },
      infoIcon: `${processIcons_BaseURL}/${"shopicon.svg"}`,
    },
    {
      imgUrl: `${processIcons_BaseURL}/${"process-four.svg"}`,
      label:
        appState?.region === "ae"
          ? `${t("NextDayFreeDeliveryae")}
      ${regionCity?.[currentRegion]}`
          : `${t("NextDayFreeDelivery")}
    ${regionCity?.[currentRegion]}`,
      modalHeading:
        appState?.region === "ae"
          ? `${t("NextDayFreeDelivery")}
  ${regionCity?.[currentRegion]}`
          : `${t("NextDayFreeDelivery")}
    ${regionCity?.[currentRegion]}`,
      modalDatapoints: {
        sa: [t("NextDeliveryRiyadh"), t("DeliveryWeekendNotification")],
        ae: [t("NextDeliveryUAE"), t("DeliveryWeekendNotification")],
        eg: [t("NextDeliveryCairo"), t("DeliveryWeekendNotification")],
      },
      infoIcon: `${processIcons_BaseURL}/${"shopicon.svg"}`,
    },
  ];

  return (
    <>
      {uspsData && uspsData?.length > 0 ? (
        <>
          {uspsData?.map((item, index) => {
            return (
              <UspsSingle
                key={index}
                imgSrc={item?.imgUrl}
                label={item?.label}
                infoIconUrl={item?.infoIcon}
                modalHeading={item?.modalHeading}
                modalText={item?.modalDatapoints}
              />
            );
          })}
        </>
      ) : null}
    </>
  );
};
export default USPSBlock;
