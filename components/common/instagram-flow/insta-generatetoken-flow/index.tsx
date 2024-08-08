import React, { useState } from "react";
import styles from "./style.module.scss";
import { Formik } from "formik";
import Input from "components/common/ui/Input";
import {
  getAccessToken,
  getLongLiveAccessToken,
  fetchInstaData,
  fetchSinglePostInstaData,
} from "lib/api/instagram";
import {
  INSTAGRAM_APP_ID,
  INSTAGRAM_APP_SECRET,
  REDIRECT_URI,
} from "general-config";
import Button from "components/common/ui/button";
import Label from "components/common/ui/label";

const InstaTokenFlow = (): JSX.Element => {
  const [longLiveAuthToken, setLongLiveAuthToken] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const getAuthToken = async (testerCode: string) => {
    let formData: any = new FormData();
    formData.append("client_id", INSTAGRAM_APP_ID);
    formData.append("client_secret", INSTAGRAM_APP_SECRET);
    formData.append("grant_type", "authorization_code");
    formData.append("redirect_uri", REDIRECT_URI);
    formData.append("code", testerCode);
    const response = await getAccessToken(formData);
    response && getLongLiveAuthToken(response?.data);
  };

  const getLongLiveAuthToken = async (accessToken: any) => {
    const response = await getLongLiveAccessToken(
      accessToken?.user_id,
      accessToken?.access_token
    );
    response && setLongLiveAuthToken(response?.data?.access_token);
  };

  const handleTextCopy = () => {
    var copyText = document.getElementById("myInput") as HTMLInputElement;
    copyText?.select();
    navigator.clipboard.writeText(copyText?.value);
    copyText?.value && setCopiedText("text copied to clipboard");
  };

  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["tester-code"]}>
          <Formik
            initialValues={{
              testerCode: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (values?.testerCode !== "") {
                getAuthToken(values?.testerCode);
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
            }: any) => (
              <form onSubmit={handleSubmit}>
                <div className={styles["form-wrapper"]}>
                  <Label className={styles["note"]} role="note">
                    <>
                      <b>Note:</b> Remove the <span>#_</span> from end and paste
                      that code below
                    </>
                  </Label>
                  <div className={styles["input-wrapper"]}>
                    <Input
                    divInputClass={styles["token-input-div"]}
                      className={styles["token-input"]}
                      showLabel={false}
                      type="text"
                      name="testerCode"
                      placeHolder="Paste your code here"
                      value={values.testerCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      role="textInput"
                    />

                    <div className={styles["submit-btn"]}>
                      <button type="submit" disabled={isSubmitting}>
                        {!isSubmitting ? "generate token" : "Generating..."}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className={styles["auth-token"]}>
          <Label className={styles["note"]} role="roleTwo">
            {"Copy the follwoing code and paste in (XM, Instagram component)"}
          </Label>
          <textarea
            id="myInput"
            value={longLiveAuthToken}
            readOnly={true}
            data-testid="copy-input"
          />
          {copiedText ? (
            <label className={styles["copied-text"]}>{copiedText}</label>
          ) : null}
          <div className={styles["copy-btn"]}>
            <Button
              buttonSize="md"
              buttonText={"copy token"}
              onClick={() => handleTextCopy()}
              style={{
                height: "51px",
              }}
              testId="copy-btn"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InstaTokenFlow;
