import { bloomReachChannelIds } from "lib/utils/constants";
import { setSitemapXML } from "lib/utils/sitemap-utils";
import { GetServerSideProps } from "next";
import React from "react";

const Sitemap = () => {
  
}

export const getServerSideProps: GetServerSideProps = async ({
  res: response,
  resolvedUrl: path,
  locale,
  req: request
}) => {
  const endpoint = `https://lazurde.bloomreach.io/delivery/site/v1/channels/${bloomReachChannelIds?.[locale]}/pages`;
  await setSitemapXML(response, endpoint, path, "", locale || "en-sa", request);
  return {
    props: {},
  };
};

export default Sitemap;
