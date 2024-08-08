import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import Modal from "components/common/ui/modal";
import Heading from "components/common/ui/heading";
import Label from "components/common/ui/label";
import CourierCollection from "./courier-collection";
import StoreDropOff from "./store-drop-off";
import Button from "components/common/ui/button";
import { CrossSmall } from "components/icons";
import ReturnOrderStaticModals from "../static-content-modals";
import { returnOrderModalTypes } from "lib/types/common";
import ImageWithBrandTag from "components/common/ui/image-with-brandtag";
import useTranslation from "next-translate/useTranslation";
import { LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "general-config";
import ClickAndCollect from "components/common/storeLocator/clickAndCollect";
import { Libraries, StoreLocatorXMProps } from "lib/types/common";
import ExitShipmentModal from "./exit-modal";
interface ShipmentTypeModalProps {
  isOpen?: boolean;
  onClose?: Function;
  onSubmit?: Function;
  orderId?: string;
  selectedOrderData?: any;
  setIsStaticContentModal?: Function;
  setCurrentCompActive?: Function;
  setMyReturnComponentActive?: Function;
  isStaticContentModal?: returnOrderModalTypes;
  setIsModalOpen?: Function;
  storeLocatorProps?: StoreLocatorXMProps[];
  setIsReturnOrderActive?: Function;
  courierDate?: any;
  setCourierDate?: Function;
  storeDropOffDate?: any;
  setStoreDropOffDate?: Function;
  selectedStoreData?: any;
  setSelectedStoreData?: Function;
  radioBtnValue?: { courierCollection: boolean; storeDropOff: boolean };
  setRadioBtnValue?: Function;
  isReturning?: boolean;
  returnAmount?: { price: number | string; currency: string };
  paymentDetail?: any;
}

const ShipmentTypeModal = ({
  isOpen = false,
  onClose = () => {},
  onSubmit = () => {},
  radioBtnValue,
  setRadioBtnValue = () => {},
  orderId,
  selectedOrderData = [],
  setIsStaticContentModal,
  isStaticContentModal,
  setCurrentCompActive,
  setMyReturnComponentActive,
  setIsModalOpen,
  storeLocatorProps = [],
  setIsReturnOrderActive = () => {},
  courierDate,
  setCourierDate = () => {},
  storeDropOffDate,
  setStoreDropOffDate = () => {},
  selectedStoreData,
  setSelectedStoreData = () => {},
  isReturning = false,
  returnAmount,
  paymentDetail = {},
}: ShipmentTypeModalProps): JSX.Element => {
  const { t } = useTranslation("common");
  const [isExitModalActive, setIsExitModalActive] = useState(false);
  const gMapLibs = useRef<Libraries>(["places"]);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState();
  const [viewStoreDetails, setViewStoreDetails] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const onExitClick = () => {
    onClose && onClose();
    setIsExitModalActive(false);
    setCurrentCompActive && setCurrentCompActive(false);
    setIsReturnOrderActive && setIsReturnOrderActive(false);
  };
  useEffect(() => {
    return () => {
      setCourierDate({
        date: "",
        isSetDate: false,
      });
      setStoreDropOffDate({
        date: "",
        isSetDate: false,
      });
    };
  }, []);
  return (
    <>
      <Modal
        modalBodyClassName={
          styles[!isExitModalActive ? "select-modal" : "exit-modal"]
        }
        divModalBody={styles["select-modal-body"]}
        divTopBar={styles["select-top-bar"]}
        isOpened={isOpen}
        bgBluryModal={true}
        modalWidth="562px"
        modalHeight={!isExitModalActive ? "668px" : "254px"}
        crossBtn={false}
        onClose={() => {
          onClose && onClose();
        }}
      >
        <>
          <div
            className={`${styles["cross-btn"]} ${
              styles[isExitModalActive ? "mb-8" : ""]
            }`}
          >
            <CrossSmall
              width={"12px"}
              height={"12px"}
              onClick={() => {
                setIsExitModalActive(!isExitModalActive);
              }}
              role="cross-click"
              className={styles["cros-icon"]}
            />
          </div>
          {!isExitModalActive ? (
            <div className={styles["modal-content"]}>
              <Heading
                element="h3"
                className={styles["order-id-heading"]}
              >{`${t("order")} #${orderId}`}</Heading>
              {selectedOrderData &&
              Object.keys(selectedOrderData).length > 0 ? (
                <div className={`${styles["item-images"]}`}>
                  {Object.keys(selectedOrderData)?.map((itemId: any) => {
                    return (
                      selectedOrderData[itemId]?.imageSrc && (
                        <div key={itemId} className={styles["img"]}>
                          <ImageWithBrandTag
                            imageSrc={
                              selectedOrderData[itemId]?.imageSrc || "/"
                            }
                            alt={"order-img"}
                            width={100}
                            height={100}
                            brand={selectedOrderData[itemId]?.brand}
                          />
                        </div>
                      )
                    );
                  })}
                </div>
              ) : null}
              <div className={styles["radio-content-wrapper"]}>
                <Label className={styles["heading"]}>
                  {t("How do you want to return this item?")}
                </Label>
                <div className={styles["courier-collection"]}>
                  <label className={styles["radio-label"]}>
                    <input
                      type="radio"
                      name="radio-group"
                      value={radioBtnValue?.courierCollection.toString()}
                      checked={radioBtnValue?.courierCollection}
                      onChange={() => {
                        setRadioBtnValue({
                          courierCollection: true,
                          storeDropOff: false,
                        });

                        setStoreDropOffDate({
                          date: "",
                          isSetDate: false,
                        });
                      }}
                    />
                    <span className={styles["radio-label-heading"]}>
                      {t("Courier Collection")}
                    </span>
                  </label>
                  <div className={styles["content"]}>
                    {/* <Label className={styles["text"]}>
                      {t("CourierSubPara")}
                    </Label>
                    {radioBtnValue?.courierCollection ? (
                      <div>
                        <CourierCollection
                          isCalendarOpen={isCalendarOpen}
                          setIsCalendarOpen={setIsCalendarOpen}
                          courierDate={courierDate}
                          radioBtnValue={radioBtnValue}
                          setCourierDate={setCourierDate}
                          // storeDropOffDate={storeDropOffDate}
                        />
                      </div>
                    ) : null} */}
                  </div>
                </div>

                {/* DISPLAY NONE, FOR NOW TICKET:LZD-726 */}
                <div className={styles["store-drop-off"]}>
                  <label className={styles["radio-label"]}>
                    <input
                      type="radio"
                      name="radio-group"
                      value={radioBtnValue?.storeDropOff.toString()}
                      checked={radioBtnValue?.storeDropOff}
                      onChange={() => {
                        setRadioBtnValue({
                          courierCollection: false,
                          storeDropOff: true,
                        });

                        setCourierDate({
                          date: "",
                          isSetDate: false,
                        });
                      }}
                    />
                    <span className={styles["radio-label-heading"]}>
                      {t("Store Drop-Off")}
                    </span>
                  </label>
                  <div className={styles["content"]}>
                    {/* <Label className={styles["text"]}>
                      {t("storedropoffSubPara")}
                    </Label> */}
                    {/* {radioBtnValue?.storeDropOff ? (
                      <div>
                        <CourierCollection
                          isCalendarOpen={isCalendarOpen}
                          setIsCalendarOpen={setIsCalendarOpen}
                          courierDate={courierDate}
                          radioBtnValue={radioBtnValue}
                          setCourierDate={setCourierDate}
                          label={t("dropOfDate")}
                          // storeDropOffDate={storeDropOffDate}
                        />
                      </div>
                    ) : null} */}
                  </div>
                </div>
              </div>
              <div className={styles["submit-btn"]}>
                <Button
                  buttonText={t("submit")}
                  buttonSize="xl"
                  onClick={() => {
                    onSubmit && onSubmit();
                    // onClose && onClose();
                    // setIsStaticContentModal({
                    //   isCourierCollection: radioBtnValue?.courierCollection
                    //     ? true
                    //     : false,
                    //   isStoreDropOff: radioBtnValue?.storeDropOff
                    //     ? true
                    //     : false,
                    // });
                  }}
                  isLoading={isReturning}
                  testId="submit-btn"
                />
              </div>
            </div>
          ) : (
            <ExitShipmentModal
              onExitClick={() => {
                onExitClick();
              }}
            />
          )}
        </>
      </Modal>

      <ReturnOrderStaticModals
        isStaticContentModal={isStaticContentModal}
        setIsStaticContentModal={setIsStaticContentModal}
        setMyReturnComponentActive={setMyReturnComponentActive}
        setIsModalOpen={setIsModalOpen}
        returnAmount={returnAmount}
        paymentDetail={paymentDetail}
      />
      <Modal
        className={`${styles["store-locator-modal-main"]} ${
          styles[viewStoreDetails ? "details-modal" : ""]
        }`}
        overlayClass={styles["store-locator-overlay"]}
        modalBodyClassName={styles["store-locator-modal-body"]}
        isOpened={mapModalOpen}
        bgBluryModal={true}
        divModalBody={styles["store-locator-inner-body"]}
        onClose={() => {
          setMapModalOpen(false);
        }}
      >
        <>
          {/* <LoadScript
          googleMapsApiKey={GOOGLE_MAPS_API_KEY}
          // libraries={gMapLibs.current}
        >
          <ClickAndCollect
            storeLocatorData={storeLocatorProps}
            searchInputValue={searchInputValue}
            setSelectedStoreData={setSelectedStoreData}
            viewStoreDetails={viewStoreDetails}
            mapModalOpen={mapModalOpen}
            setMapModalOpen={setMapModalOpen}
          ></ClickAndCollect>
        </LoadScript> */}
        </>
      </Modal>
    </>
  );
};

export default ShipmentTypeModal;
