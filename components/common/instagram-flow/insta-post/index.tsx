import Image from "next/image";
import React from "react";

const InstagramSinglePost = ({ src = "" }) => {
  return (
    <>
      <Image
        src={src || "/"}
        alt={"instagram post image"}
        width={"100%"}
        height={"100%"}
        layout="responsive"
      />
    </>
  );
};
export default InstagramSinglePost;
