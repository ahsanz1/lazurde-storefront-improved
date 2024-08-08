import { getRegionBasedEnvVariables } from "general-config";

const BC_API_ACCESS_TOKEN = getRegionBasedEnvVariables().BC_API_ACCESS_TOKEN;
const HEADERS = {
  bcRestApis: {
    "Content-Type": "application/json",
    "X-Auth-Token": BC_API_ACCESS_TOKEN,
  },
};

export default HEADERS;
