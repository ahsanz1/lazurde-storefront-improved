/*
 * Copyright 2022-2023 Bloomreach
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Configuration, extractSearchParams } from "@bloomreach/spa-sdk";
import { bloomReachChannelIds } from "./constants";
import { BR_CMS_DOMAIN } from "general-config";
// import {
//   NEXT_PUBLIC_BR_MULTI_TENANT_SUPPORT,
//   BRXM_ENDPOINT,
// } from "./constants";

type BuildConfigurationOptions = {
  endpoint: string | (string | null)[];
  baseUrl: string;
  locale: string;
};

type ConfigurationBuilder = Omit<
  Configuration & Partial<BuildConfigurationOptions>,
  "httpClient"
>;

// const BRXM_ENDPOINT =
//   "https://lazurde.bloomreach.io/delivery/site/v1/channels/lazurde-ksa---en/pages";

export function buildConfiguration(
  path: string,
  locale: string = "en-sa"
): ConfigurationBuilder {
  const configuration: ConfigurationBuilder = {
    path,
    endpoint: `${BR_CMS_DOMAIN}/${bloomReachChannelIds?.[locale] || 'lazurde-ksa---en'}/pages`,
    NBRMode: true,
  };
  return configuration;
}
