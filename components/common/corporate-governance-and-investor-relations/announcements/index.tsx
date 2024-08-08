import React, { useContext } from "react";
import { IframeScript } from "components/common/iframe-script";

const Announcements = (currentObj: any): JSX.Element => {
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

export default Announcements;
