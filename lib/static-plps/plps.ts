import { StaticPlpsObject } from "lib/types/common";

import { enSA } from "./plps/en-sa";
import { arSa } from "./plps/ar-sa";
import { arAe } from "./plps/ar-ae";
import { enEg } from "./plps/en-eg";
import { enAe } from "./plps/en-ae";
import { arEg } from "./plps/ar-eg";

export const plpList: StaticPlpsObject = {
  "en-sa": enSA,
  "ar-sa": arSa,
  "en-ae": enAe,
  "ar-ae": arAe,
  "en-eg": enEg,
  "ar-eg": arEg,
};
