import React, { FC, useContext, useEffect, useRef } from "react";
import styles from "../cgir.module.scss";
import { IframeScript } from "components/common/iframe-script";

const EmailSubscription = (currentObj: any): JSX.Element => {

  const refId = "euroland_frame_id";

  const getEuroLandLink = currentObj && currentObj?.currentObject?.linkExternal;

  return (
    <>
      <div className={styles["subscription-iframe"]}>
        <iframe
          id={refId}
          className="EurolandTool"
          src={getEuroLandLink}
          style={{
            width: "100%",
            height: "500",
          }}
          frameBorder="0"
          scrolling="no"
        >
          <br />
        </iframe>
      </div>
      {IframeScript(refId)}
    </>
  );
};

export default EmailSubscription;
