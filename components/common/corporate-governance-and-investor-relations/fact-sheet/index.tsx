import React, { useContext } from "react";
import { IframeScript } from "components/common/iframe-script";

const FactSheet = (currentObject: any): JSX.Element => {
  const refId = "euroland_frame_id";
  return (
    <>
      <iframe
        id={refId}
        className="EurolandTool fact-sheet-iframe"
        src={currentObject?.currentObject?.linkExternal}
        style={{
          width: "100%",
          height: "500",
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>

      {IframeScript(refId)}
    </>
  );
};

export default FactSheet;
