export const getPageProps = ({ header = null }) => {
  return {
    host: header?.host
      ? `https://${header?.host}`
      : "https://www.lazurde.com",
    referer: header?.referer || "",
  };
};
