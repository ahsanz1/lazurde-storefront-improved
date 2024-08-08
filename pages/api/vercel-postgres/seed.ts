import type { NextApiRequest, NextApiResponse } from "next";
// import { sql } from "@vercel/postgres";
// import neatCsv from "neat-csv";
// import fs from "fs";

// const convertCSVtoJSON = async (filePath: string) => {
//   try {
//     const file = fs.readFileSync(filePath);
//     const results = await neatCsv(file);
//     return results;
//   } catch (error) {
//     throw error;
//   }
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    /**
     * NOTE: This section has been commented out as seeding the @vercel/postgres DB was a one time activity.
     * Please DO NOT uncomment this unless absolutely necessary. This logic should be kept in code until
     * all the new URLs have been indexed by google properly & we have a greenlight from Incubeta to purge
     * this logic.
     */

    /**
     * NOTE: Create locale tables
     */

    // const result = await sql`CREATE TABLE AE_EN (
    //     id serial primary key,
    //     store text,
    //     urlType text,
    //     oldUrl text,
    //     urlMarker_SKU text,
    //     recommendedStatusCode int,
    //     newUrl text,
    //     stagingUrl text,
    //     statusCode int,
    //     createdAt timestamptz);
    // `;

    /**
     * NOTE: Read redirects .csv files & convert to JSON
     */

    //Lazurde

    // const jsonMappings = await convertCSVtoJSON(
    //   "redirect-mappings/ShopDev_Lazurde redirection mapping check - EG EN.csv"
    // );
    // console.log("JSON Mappings: ", jsonMappings);

    // const jsonMappings = await convertCSVtoJSON(
    //   "redirect-mappings/Miss L Redirect Mapping - v2 - EG AR - 200 OK.csv"
    // );
    // console.log("JSON Mappings: ", jsonMappings);

    // let i = 0;

    // console.log("Start Time: ", new Date().getTime());

    /**
     * NOTE: Insert the URL mappings to relevant table at 1 second interval
     */

    // const dbInterval = setInterval(async () => {
    //   if (i >= jsonMappings.length) return;
    //   const redirectMapping = {
    //     store: jsonMappings[i]["Store"],
    //     urlType: jsonMappings[i]["URL Type"] || "-",
    //     oldUrl:
    //       jsonMappings[i]["Old URL"] || jsonMappings[i]["Old Magento URL"],
    //     urlMarker_SKU: jsonMappings[i]["URL Marker/SKU"] || "-",
    //     recommendedStatusCode:
    //       Number(
    //         jsonMappings[i][
    //           "Redirection" ||
    //             "Recommended Status Code" ||
    //             "Recommended Redirect Type Code" ||
    //             "Recommended Redirect Type"
    //         ]
    //       ) || 301,
    //     newUrl:
    //       jsonMappings[i]["New URL"] ||
    //       jsonMappings[i]["Recommended Redirection URL"],
    //     stagingUrl: jsonMappings[i]["Staging URL" || "Staging URLs"] || "-",
    //     statusCode:
    //       Number(jsonMappings[i]["Status Codes"]) ||
    //       Number(jsonMappings[i]["Status"]) ||
    //       200,
    //     createdAt: new Date().toISOString(),
    //   };

    /**
     * NOTE: Following is the query for lazurde.com
     */

    // const result = await sql`INSERT INTO EG_EN (
    //     store,
    //     urlType,
    //     oldUrl,
    //     urlMarker_SKU,
    //     recommendedStatusCode,
    //     newUrl,
    //     stagingUrl,
    //     statusCode,
    //     createdAt
    //     ) VALUES (${redirectMapping.store}, ${redirectMapping.urlType}, ${
    //   redirectMapping.oldUrl
    // }, ${redirectMapping.urlMarker_SKU}, ${
    //   redirectMapping.recommendedStatusCode
    // }, ${redirectMapping.newUrl}, ${redirectMapping.stagingUrl}, ${
    //   redirectMapping.statusCode
    // }, ${new Date().toISOString()})`;

    //   const result = await sql`INSERT INTO MISSL_URLS (
    //         urlType,
    //         oldUrl,
    //         recommendedStatusCode,
    //         newUrl,
    //         statusCode,
    //         createdAt
    //         ) VALUES (${redirectMapping.urlType}, ${redirectMapping.oldUrl}, ${
    //     redirectMapping.recommendedStatusCode
    //   }, ${redirectMapping.newUrl}, ${
    //     redirectMapping.statusCode
    //   }, ${new Date().toISOString()})`;

    //   console.log(`Result ${i}: `, result, redirectMapping);
    //   i++;
    //   if (i === jsonMappings.length) {
    //     console.log("End Time: ", new Date().getTime());
    //     clearInterval(dbInterval);
    //   }
    // }, 1000);

    return res.status(200).json({ message: "DB SEED STARTED" });
  } catch (error) {
    console.log("Error seeding DB: ", error);
    return res.status(500).json({ error });
  }
}
