import { bloomReachChannelIds } from "lib/utils/constants";
import { setPaginatedSitemapXML } from "lib/utils/sitemap-utils";
import { GetServerSideProps } from "next";
import React from "react";

const Sitemap: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({
  res: response,
  resolvedUrl: path,
  locale,
  query,
  req: request,
}) => {
  const { pageNumber } = query;
  const endpoint = `https://lazurde.bloomreach.io/delivery/site/v1/channels/${bloomReachChannelIds?.[locale]}/pages`;
  await setPaginatedSitemapXML(
    response,
    endpoint,
    `sitemap.xml`,
    "r3_r1",
    pageNumber as string,
    request
  );
  return {
    props: {},
  };
};

export default Sitemap;
