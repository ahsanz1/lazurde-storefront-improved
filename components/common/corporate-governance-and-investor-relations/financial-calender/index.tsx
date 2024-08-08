import React, { FC, useContext, useEffect, useRef } from "react";
import { AppContext } from "lib/context";
import { IframeScript } from "components/common/iframe-script";

const FinancialCalender = (currentObj: any): JSX.Element => {
  const refId = "euroland_frame_id";

  const getEuroLandLink = currentObj && currentObj?.currentObject?.linkExternal;

  return (
    <>
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
      {IframeScript(refId)}
    </>
  );
};

export default FinancialCalender;
