import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import ReviewForm from "components/common/reviews/write-review/review-form/review-form";
import Modal from "components/common/ui/modal";

interface WriteAReviewProps {
  isOpened?: boolean;
  onClose?: Function;
  productData?: any;
  setIsRatingError?: Function;
  isRatingError?: string;
  reviewImagesRef?: any;
}

const WriteAReview = ({
  isOpened = false,
  onClose = () => {},
  productData = {},
  reviewImagesRef,
}: WriteAReviewProps): JSX.Element => {
  const [ratingIndex, setRatingIndex] = useState(-1);
  const [isRatingError, setIsRatingError] = useState("");

  const onCloseModal = () => {
    onClose();
    setIsRatingError("");
    setRatingIndex(-1);
  };
  return (
    <Modal
      className={styles["review-modal_wrapper"]}
      divTopBar={styles["write-reviewmodal-topbar"]}
      onClose={() => {
        onCloseModal();
      }}
      data-testid="review-modal"
      modalWidth={"562px"}
      modalHeight={"622px"}
      isOpened={isOpened}
      bgBluryModal={true}
      modalBodyClassName={styles["write-review-modal"]}
    >
      <div id="rating-stars" className={styles["review-sec"]}>
        <ReviewForm
          rating={ratingIndex + 1}
          productData={productData}
          onClose={onCloseModal}
          setIsRatingError={setIsRatingError}
          reviewImagesRef={reviewImagesRef}
          isRatingError={isRatingError}
          setRatingIndex={setRatingIndex}
        />
      </div>
    </Modal>
  );
};
export default WriteAReview;
