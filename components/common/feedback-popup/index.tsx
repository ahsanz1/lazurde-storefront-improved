import React, { FC, useContext } from "react";
import { Formik } from "formik";
import Modal from "components/common/ui/modal";
import Label from "components/common/ui/label";
import Button from "components/common/ui/button/index";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { AppContext } from "lib/context";
import * as Yup from "yup";
import { feedBackForm } from "lib/middleware-apis/feedback-form";
import Input from "../ui/Input";
import { getPhoneLimit, getPhoneNumberPrefix } from "lib/utils/common";
import { useRouter } from "next/router";
interface FeedbackPopUpProps {
  open?: boolean;
  heading?: string;
  onClose?: Function;
}

const FeedbackPopUp: FC<FeedbackPopUpProps> = ({
  heading = "",
  open = false,
  onClose,
}) => {
  const ZERO_VALIDATION = /^.{0}[^0].*$/;
  const { t } = useTranslation("common");
  const { appState, toast } = useContext(AppContext);
  const router = useRouter();
  const currentRegion = router?.locale?.split("-")?.[1] || appState?.region;
  const phoneNumberLimit = getPhoneLimit(currentRegion);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required(t("Enter first name")),
    lastName: Yup.string().required(t("Enter last name")),
    feedback: Yup.string().required(t("Enter feedback")),
    email: Yup.string()
      .email(t("Invalid email"))
      .required(t("Enter valid email")),
    phoneNumber: Yup.string()
      .min(phoneNumberLimit, t("Phone number is not valid"))
      .max(phoneNumberLimit, t("Phone number is not valid"))
      .matches(ZERO_VALIDATION, t("Phone number is not valid")),
  });

  return (
    <Modal
      modalBodyClassName={styles["feedback-modalBody"]}
      divModalRight={styles["div-rightModal"]}
      divModalBody={styles["div-feedbackBody"]}
      divTopBar={styles["div-topBar"]}
      bgBluryModal={false}
      modalWidth="562px"
      modalHeight="622px"
      isOpened={open}
      onClose={() => {
        onClose && onClose();
      }}
      className={styles["feedback-modal"]}
    >
      <div className={styles["feedback-container"]}>
        <Label className={styles["heading"]}>{heading}</Label>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            feedback: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            const payload = {
              username: `${values?.firstName} ${values?.lastName}`,
              email: values?.email,
              message: values?.feedback,
              phoneNumber: values?.phoneNumber
                ? `${getPhoneNumberPrefix(
                    currentRegion
                  )}${values?.phoneNumber?.trim()}`
                : "",
              subject: `${appState?.brandEN} Feedback`,
            };

            const resp = await feedBackForm(payload);
            if (resp?.message) {
              toast(t("feedbackSubmitSuccess"));
              onClose();
            } else if (resp?.message === false) {
              toast(t("somethingWentWrong"));
            }
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
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles["name-section"]}>
                <div className={styles["first-name"]}>
                  <Input
                    label={t("firstName")}
                    className={styles["input"]}
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    role="firstName"
                    error={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                  />
                </div>
                <div className={styles["last-name"]}>
                  <Input
                    label={t("lastName")}
                    className={styles["input"]}
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    role="lastName"
                    error={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                  />
                </div>
              </div>
              <div className={styles["input-field"]}>
                <Input
                  label={t("Email")}
                  className={styles["input"]}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  role="email"
                  error={errors.email && touched.email && errors.email}
                />
              </div>
              <div className={styles["input-field"]}>
                <Input
                  label={t("mobilePhone")}
                  className={styles["phone-input"]}
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  role="phoneNumber"
                  error={
                    errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber
                  }
                />
              </div>
              <div
                className={`${styles["input-field"]} ${styles["input-field-last"]}`}
              >
                <Label className={styles["title"]}>{t("feedback")}</Label>
                <textarea
                  className={`${styles["feedback-input"]} ${styles["input-textarea"]}`}
                  name="feedback"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.feedback}
                  maxLength={500}
                  data-textarea-error={
                    errors.feedback && touched.feedback ? true : false
                  }
                />
                <div className={styles["error-msg"]}>
                  {errors.feedback && touched.feedback && errors.feedback}
                </div>
              </div>
              <div className={styles.submit_btn}>
                <Button
                  className={styles["button"]}
                  type="submit"
                  buttonSize="lr"
                  buttonText={t("send")}
                  testId="submit-btn"
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default FeedbackPopUp;
