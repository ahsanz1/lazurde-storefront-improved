import axios from "axios";
import { BR_CMS_DOMAIN } from "general-config";
import { bloomReachChannelIds } from "lib/utils/constants";

export const fetchBrPage = async (locale = "en-sa", url = "/") => {
  try {
    const response = await axios.get(
      `${BR_CMS_DOMAIN}/${bloomReachChannelIds[locale]}/pages${url}`
    );
    const { data = {} } = response;
    return data;
  } catch (error) {
    console.log("Error fetching BR page: ", error, "URL: ", `/${locale}${url}`);
  }
};
