import React, { useContext, useState } from "react";
import styles from "../style.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import Label from "components/common/ui/label";
import { writeReview } from "lib/utils/reviews";
import ImageUploader from "components/common/reviews/write-review/image-uploader/image-uploader";
import { AppContext } from "lib/context";
import useTranslation from "next-translate/useTranslation";
import StarRating from "components/common/ui/star-ratings";
import Heading from "components/common/ui/heading";
import Button from "components/common/ui/button";
import Notification from "components/common/ui/alert";
import Input from "components/common/ui/Input";
interface arabicLabelTypes {
  reviewLabel?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  submitBtnText?: string;
  reviewImagesRef?: any;
}

const ReviewForm = ({
  rating,
  productData = {},
  onClose,
  reviewImagesRef,
  isRatingError,
  setIsRatingError = () => {},
  setRatingIndex = () => {},
}: any): JSX.Element => {
  const { t } = useTranslation("common");
  const { appState } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState([]);
  const [fileUpload, setFileUpload] = useState<any>([{ fileArray: {} }]);
  const [fileName, setFileName] = useState<any>([]);
  const [isPostingReview, setIsPostingReview] = useState(false);
  const reviewsFormLabel: arabicLabelTypes = t(
    "reviewFormData",
    {},
    { returnObjects: true }
  );

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const SignupSchema = Yup.object().shape({
    review: Yup.string().required(t("Enter reviews")),
    firstName: Yup.string().required(t("Enter first name")),
    lastName: Yup.string().required(t("Enter last name")),
    email: Yup.string()
      .email(t("Invalid email"))
      .required(t("Enter valid email")),
    phoneNumber: Yup.string(),
    // .required(t("Enter phone #"))
    // .matches(phoneRegExp, t("Phone number is not valid")),
  });

  const renderReviewApi = async (values: any) => {
    let formData: any = new FormData();
    formData.append("productId", productData && productData?.entityId);
    formData.append("author", `${values?.firstName} ${values?.lastName}`);
    formData.append("email", values?.email);
    formData.append("location", appState?.region);
    formData.append("reviewRating", rating ? rating : null);
    formData.append("reviewTitle", values?.review);
    formData.append("reviewMessage", values?.review);
    formData.append("reviewRecommendProduct", false);
    formData.append("productName", productData && productData?.["name"]);
    formData.append("productSKU", productData && productData?.["sku"]);
    formData.append(
      "productImageUrl",
      (productData && productData?.defaultImage?.url320wide) || "/"
    );
    formData.append(
      "productUrl",
      productData && productData?.defaultImage?.url320wide
    );
    formData.append("reviewSource", "api");
    fileName.forEach((fileName: any, index: number) => {
      formData.append(`photo${index}`, fileName);
    });
    formData.append("video0", null);

    if (rating === 0) {
      setIsRatingError && setIsRatingError(t("Please Add Rating"));
      document
        ?.getElementById("rating-stars")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsRatingError && setIsRatingError("");
      setIsPostingReview(true);
      const response = await writeReview(formData, appState?.region);
      if (response?.hasError === false) {
        setIsRatingError && setIsRatingError("");
        setTimeout(() => {
          onClose && onClose();
        }, 1000);
        setIsPostingReview(false);
      } else {
        setErrorMessage([
          ...errorMessage,
          {
            title: "Something Went Wrong",
            description: "Please try again",
            backgroundColor: "#fff",
          },
        ]);
        setIsPostingReview(false);
      }
      setIsPostingReview(false);
    }
  };

  return (
    <>
      <div className={styles["form-wrapper"]}>
        <Formik
          initialValues={{
            review: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            renderReviewApi(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }: any) => (
            <form onSubmit={handleSubmit}>
              <div className={styles["form-header"]}>
                <div className={styles["review-modal_header"]}>
                  <Heading element="h3" className={styles["heading"]}>
                    {t("write a review")}
                  </Heading>
                </div>
                <div className={styles["rating-wrapper"]}>
                  <Label className={styles["rating-label"]}>
                    {t("Overall rating")}
                  </Label>
                  <div className={styles["stars-div"]}>
                    <StarRating
                      rating={rating}
                      count={5}
                      starWidth={24}
                      starHeight={24}
                      onClick={(rate: number) => {
                        setRatingIndex(rate);
                        setIsRatingError("");
                      }}
                    />
                    <Label className={styles["rating-error"]}>
                      {isRatingError}
                    </Label>
                  </div>
                </div>
              </div>
              <div className={styles["form-inner-wrapper"]}>
                <div className={styles["div-top"]}>
                  <div
                    className={`${styles["field"]} ${styles["review-field"]}  ${
                      errors.review && touched.review && styles["errors"]
                    }`}
                  >
                    <Label className={styles["field-label"]}>
                      {reviewsFormLabel?.reviewLabel}
                    </Label>
                    <textarea
                      name="review"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.review}
                      role="review"
                    />
                    <div className={`${styles["error-msg"]}`}>
                      {errors.review && touched.review && errors.review}
                    </div>
                  </div>
                  <div className={styles["flex"]}>
                    <Input
                      label={reviewsFormLabel?.firstName}
                      name={"firstName"}
                      role={"firstName"}
                      value={values.firstName}
                      className={styles["address-input"]}
                      error={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Input
                      label={reviewsFormLabel?.lastName}
                      name={"lastName"}
                      role={"lastName"}
                      value={values.lastName}
                      className={styles["address-input"]}
                      error={
                        errors.lastName && touched.lastName && errors.lastName
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <Input
                    label={reviewsFormLabel?.email}
                    name={"email"}
                    role={"email"}
                    value={values.email}
                    className={styles["address-input"]}
                    error={errors.email && touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputContainerClass={styles["mb-24"]}
                  />
                  <Input
                    type="number"
                    label={reviewsFormLabel?.phoneNumber}
                    name={"phoneNumber"}
                    role={"phoneNumber"}
                    value={values.phoneNumber}
                    className={styles["address-input"]}
                    error={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputContainerClass={styles["mb-24"]}
                  />
                  <ImageUploader
                    file={fileUpload?.fileArray}
                    setFileUpload={setFileUpload}
                    setFileName={setFileName}
                    uploadedFiles={fileName}
                    imageUploadRef={reviewImagesRef}
                  />
                </div>
                <div className={styles["div-bottom"]}>
                  <div className={styles["submit-btn"]}>
                    <Button
                      type="submit"
                      buttonText={reviewsFormLabel?.submitBtnText}
                      buttonSize="lr"
                      isDisabled={isPostingReview}
                      isLoading={isPostingReview}
                      spinnerText={t("Posting")}
                      spinnerSize={16}
                      spinnerWidth={6}
                      spinnerColor={"#fff"}
                    />
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>

      {errorMessage && errorMessage?.length > 0 ? (
        <Notification
          autoDelete={true}
          toastList={errorMessage}
          position={"top-right"}
          autoDeleteTime={5000}
        />
      ) : null}
    </>
  );
};
export default ReviewForm;
