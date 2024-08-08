export const generateFacets: any = (
  filtersList: any,
  complexFilter: any = []
) => {
  const formatedFacetsObject: any = {};
  for (const key in filtersList) {
    const filterArray = filtersList[key];
    for (let index = 0; index < filterArray?.length; index++) {
      const filterName = filterArray[index];

      const result: any = completeFilterList?.[key]?.find(
        (storedFilter: any) => storedFilter?.filter === filterName
      );
      if (result) {
        if (
          formatedFacetsObject?.[result?.facetKey]?.selectionValues?.length > 0
        ) {
          formatedFacetsObject[result.facetKey] = {
            selectionValues: [
              ...formatedFacetsObject?.[result?.facetKey]?.selectionValues,
              { label: result?.value },
            ],
          };
        } else {
          formatedFacetsObject[result.facetKey] = {
            selectionValues: [{ label: result?.value }],
          };
        }
      }
    }
  }

  let complexFilterString = "";
  complexFilter?.map((levelOne: any) => {
    let andString = "";
    for (const levelOneKey in levelOne) {
      const levelTwo = levelOne[levelOneKey];
      let facetValues = "";
      for (const option of levelTwo) {
        const result: any = completeFilterList?.[levelOneKey]?.find(
          (storedFilter: any) => storedFilter?.filter === option
        );
        if (levelOneKey === "category") {
          facetValues = facetValues
            ? `${facetValues} OR "${option}"`
            : `"${option}"`;
          continue;
        }
        if (levelOneKey === "price") {
          facetValues = facetValues
            ? `${facetValues} OR ${result?.value}`
            : `${result?.value}`;
          continue;
        }
        facetValues = facetValues
          ? `${facetValues} OR "${result?.value}"`
          : `"${result?.value}"`;
      }
      if (levelOneKey === "price") {
        andString = andString
          ? `${andString} AND ${levelOneKey}:${facetValues}`
          : `${levelOneKey}:${facetValues}`;
        continue;
      }

      andString = andString
        ? `${andString} AND ${levelOneKey}:(${facetValues})`
        : `${levelOneKey}:(${facetValues})`;
    }
    complexFilterString = complexFilterString
      ? `${complexFilterString} OR (${andString})`
      : `${andString}`;
  });

  return { filters: formatedFacetsObject, string: complexFilterString };
};

const generateNewIn = () => {
  const dateObj = new Date();
  const todaysDate = new Date(Date.now())
    .toISOString()
    .slice(0, 16)
    .replace(/[-:T]/g, "");
  const date45daysAgo = new Date(dateObj.setDate(dateObj.getDate() - 45))
    .toISOString()
    .slice(0, 16)
    .replace(/[-:T]/g, "");
  return `[${date45daysAgo} TO ${todaysDate}]`;
};

const completeFilterList: any = {
  brand: [
    {
      filter: "missl",
      value: "Miss L'",
      facetKey: "brandFacet",
    },
    {
      filter: "lazurde",
      value: "L'azurde",
      facetKey: "brandFacet",
    },
    {
      filter: "instyle",
      value: "Instyle",
      facetKey: "brandFacet",
    },
    {
      filter: "waves",
      value: "Waves",
      facetKey: "brandFacet",
    },
    {
      filter: "misslAr",
      value: "مس أل",
      facetKey: "brandFacet",
    },
    {
      filter: "lazurdeAr",
      value: "لازوردي",
      facetKey: "brandFacet",
    },
    {
      filter: "instyleAr",
      value: "انستايل",
      facetKey: "brandFacet",
    },
    {
      filter: "wavesAr",
      value: "ويفز",
      facetKey: "brandFacet",
    },
  ],

  category: [
    { filter: "root", value: "root", facetKey: "categoryFacet" },
    { filter: "necklace", value: "necklace", facetKey: "categoryFacet" },
    { filter: "rings", value: "rings", facetKey: "categoryFacet" },
    { filter: "earrings", value: "earrings", facetKey: "categoryFacet" },
    { filter: "bracelets", value: "bracelets", facetKey: "categoryFacet" },
    { filter: "sets", value: "sets", facetKey: "categoryFacet" },
    { filter: "gold", value: "gold", facetKey: "categoryFacet" },
    { filter: "jewelrySets", value: "sets", facetKey: "categoryFacet" },
  ],
  type: [
    { filter: "statement", value: "Statement", facetKey: "typeFacet" },
    {
      filter: "pendantChain",
      value: "Pendant with chain",
      facetKey: "typeFacet",
    },
    { filter: "chainNecklace", value: "Chain", facetKey: "typeFacet" },
    { filter: "chainBracelet", value: "Chain", facetKey: "typeFacet" },
    { filter: "weddingBand", value: "Wedding Band", facetKey: "typeFacet" },
    { filter: "twoHeaded", value: "Two-headed", facetKey: "typeFacet" },
    { filter: "eternity", value: "Eternity", facetKey: "typeFacet" },
    { filter: "charmsNecklace", value: "Charms", facetKey: "typeFacet" },
    { filter: "charmsBracelets", value: "Charms", facetKey: "typeFacet" },
    { filter: "stud", value: "Stud", facetKey: "typeFacet" },
    { filter: "drop", value: "Drop", facetKey: "typeFacet" },
    { filter: "pendant", value: "Pendant", facetKey: "typeFacet" },
    { filter: "layered", value: "Layered", facetKey: "typeFacet" },
    { filter: "cuff", value: "Cuff", facetKey: "typeFacet" },
    { filter: "bangle", value: "Bangle", facetKey: "typeFacet" },
    { filter: "hoop", value: "Hoop", facetKey: "typeFacet" },
    { filter: "chandelier", value: "Chandelier", facetKey: "typeFacet" },
    { filter: "choker", value: "Choker", facetKey: "typeFacet" },
    { filter: "jewelySets", value: "Jewelry Sets", facetKey: "typeFacet" },
    { filter: "solitaire", value: "Solitaire", facetKey: "typeFacet" },
    { filter: "tennis", value: "Tennis", facetKey: "typeFacet" },
    { filter: "clipOn", value: "Clip-on", facetKey: "typeFacet" },
    { filter: "goldBar", value: "Gold Bar", facetKey: "typeFacet" },
    { filter: "band", value: "Band", facetKey: "typeFacet" },
    { filter: "goldCoin", value: "Gold Coin", facetKey: "typeFacet" },
    { filter: "halfSets", value: "Half Sets", facetKey: "typeFacet" },
    { filter: "twins", value: "Twins", facetKey: "typeFacet" },
    { filter: "bracelets", value: "Bracelets", facetKey: "typeFacet" },
    { filter: "anklets", value: "Anklets", facetKey: "typeFacet" },

    { filter: "halfSetsAr", value: "نصف طقم", facetKey: "typeFacet" },
    { filter: "jewelySetsAr", value: "اطقم مجوهرات", facetKey: "typeFacet" },
    { filter: "ankletsAr", value: "خلاخل", facetKey: "typeFacet" },
    { filter: "braceletsAr", value: "اساور", facetKey: "typeFacet" },
    { filter: "twinsAr", value: "توينز", facetKey: "typeFacet" },
    { filter: "statementAr", value: "ستيتمنت", facetKey: "typeFacet" },
    {
      filter: "pendantChainAr",
      value: "دلاية مع سلسلة",
      facetKey: "typeFacet",
    },
    { filter: "chainBraceletAr", value: "بسلسلة", facetKey: "typeFacet" },
    { filter: "chainNecklaceAr", value: "سلسلة", facetKey: "typeFacet" },
    { filter: "weddingBandAr", value: "دبلة زفاف", facetKey: "typeFacet" },
    { filter: "twoHeadedAr", value: "برأس مزدوجة", facetKey: "typeFacet" },
    { filter: "eternityAr", value: "إتيرنتى", facetKey: "typeFacet" },
    { filter: "charmsNecklaceAr", value: "دلاية أشكال", facetKey: "typeFacet" },
    { filter: "charmsBraceletsAr", value: "تشارم", facetKey: "typeFacet" },
    { filter: "studAr", value: "صغير", facetKey: "typeFacet" },
    { filter: "dropAr", value: "متدلى", facetKey: "typeFacet" },
    { filter: "pendantAr", value: "دلاية", facetKey: "typeFacet" },
    { filter: "layeredAr", value: "طبقات", facetKey: "typeFacet" },
    { filter: "cuffAr", value: "مفتوح", facetKey: "typeFacet" },
    { filter: "bangleAr", value: "أسورة", facetKey: "typeFacet" },
    { filter: "hoopAr", value: "دائرى", facetKey: "typeFacet" },
    { filter: "chandelierAr", value: "متدلى طويل", facetKey: "typeFacet" },
    { filter: "chokerAr", value: "تشوكر", facetKey: "typeFacet" },
    { filter: "jewerlySetsAr", value: "اطقم ذهب", facetKey: "typeFacet" },
    { filter: "solitaireAr", value: "سوليتير", facetKey: "typeFacet" },
    { filter: "tennisAr", value: "تنس", facetKey: "typeFacet" },
    { filter: "clipOnAr", value: "كليب", facetKey: "typeFacet" },
    { filter: "goldBarAr", value: "سبيكة ذهب", facetKey: "typeFacet" },
    { filter: "bandAr", value: "عريض", facetKey: "typeFacet" },
    { filter: "goldCoinAr", value: "عملة ذهب", facetKey: "typeFacet" },
  ],
  metal: [
    {
      filter: "18YellowGold",
      value: "18K Yellow Gold",
      facetKey: "metalFacet",
    },
    {
      filter: "18YellowWhiteGold",
      value: "18K Yellow & White Gold",
      facetKey: "metalFacet",
    },
    { filter: "18WhiteGold", value: "18K White Gold", facetKey: "metalFacet" },
    { filter: "18RoseGold", value: "18K Rose Gold", facetKey: "metalFacet" },
    {
      filter: "14YellowGold",
      value: "14K Yellow Gold",
      facetKey: "metalFacet",
    },
    {
      filter: "18WhiteRoseGold",
      value: "18K White & Rose Gold",
      facetKey: "metalFacet",
    },
    {
      filter: "18YellowWhiteRoseGold",
      value: "18K Yellow White & Rose Gold",
      facetKey: "metalFacet",
    },
    {
      filter: "18YellowRoseGold",
      value: "18K Yellow & Rose Gold",
      facetKey: "metalFacet",
    },
    {
      filter: "21YellowGold",
      value: "21K Yellow Gold",
      facetKey: "metalFacet",
    },
    {
      filter: "24YellowGold",
      value: "24K Yellow Gold",
      facetKey: "metalFacet",
    },

    {
      filter: "18YellowGoldAr",
      value: "ذهب أصفر 18 قيراط",
      facetKey: "metalFacet",
    },
    {
      filter: "18YellowWhiteGoldAr",
      value: "ذهب أصفر وأبيض 18 قيراط ",
      facetKey: "metalFacet",
    },
    {
      filter: "18WhiteGoldAr",
      value: "ذهب أبيض 18 قيراط",
      facetKey: "metalFacet",
    },
    {
      filter: "18RoseGoldAr",
      value: "ذهب وردى 18 قيراط",
      facetKey: "metalFacet",
    },
    {
      filter: "14YellowGoldAr",
      value: "ذهب أصفر 14 قيراط",
      facetKey: "metalFacet",
    },
    {
      filter: "18WhiteRoseGoldAr",
      value: "ذهب أبيض ووردى 18 قيراط ",
      facetKey: "metalFacet",
    },
    {
      filter: "18YellowWhiteRoseGoldAr",
      value: "ذهب أصفر أبيض ووردى 18 قيراط ",
      facetKey: "metalFacet",
    },
    {
      filter: "18YellowRoseGoldAr",
      value: "ذهب أصفر ووردى 18 قيراط ",
      facetKey: "metalFacet",
    },
    {
      filter: "21YellowGoldAr",
      value: "ذهب أصفر 21 قيراط",
      facetKey: "metalFacet",
    },
    {
      filter: "24YellowGoldAr",
      value: "ذهب أصفر 24 قيراط",
      facetKey: "metalFacet",
    },
  ],

  metalKarat: [
    { filter: "18k", value: "18K", facetKey: "metalKaratFacet" },
    { filter: "14k", value: "14K", facetKey: "metalKaratFacet" },
    { filter: "21k", value: "21K", facetKey: "metalKaratFacet" },
    { filter: "24k", value: "24K", facetKey: "metalKaratFacet" },
    { filter: "18kAr", value: "18 قيراط", facetKey: "metalKaratFacet" },
    { filter: "14kAr", value: "14 قيراط", facetKey: "metalKaratFacet" },
    { filter: "21kAr", value: "21 قيراط", facetKey: "metalKaratFacet" },
    { filter: "24kAr", value: "24 قيراط", facetKey: "metalKaratFacet" },
  ],
  metalColor: [
    { filter: "yellowGold", value: "Yellow Gold", facetKey: "metalColorFacet" },
    {
      filter: "yellowWhiteGold",
      value: "Yellow & White Gold",
      facetKey: "metalColorFacet",
    },
    { filter: "whiteGold", value: "White Gold", facetKey: "metalColorFacet" },
    { filter: "roseGold", value: "Rose Gold", facetKey: "metalColorFacet" },
    {
      filter: "whiteRoseGold",
      value: "White & Rose Gold",
      facetKey: "metalColorFacet",
    },
    {
      filter: "yellowWhiteRoseGold",
      value: "Yellow White & Rose Gold",
      facetKey: "metalColorFacet",
    },
    {
      filter: "yellowRoseGold",
      value: "Yellow & Rose Gold",
      facetKey: "metalColorFacet",
    },
    {
      filter: "sterlingSilver",
      value: "Sterling Silver",
      facetKey: "metalColorFacet",
    },
    {
      filter: "goldPlated",
      value: "Yellow Gold Plated",
      facetKey: "metalColorFacet",
    },

    {
      filter: "sterlingSilverAr",
      value: "فضة استرليني",
      facetKey: "metalColorFacet",
    },
    {
      filter: "goldPlatedAr",
      value: "مطلي ذهب اصفر",
      facetKey: "metalColorFacet",
    },

    { filter: "yellowGoldAr", value: "ذهب أصفر", facetKey: "metalColorFacet" },
    {
      filter: "yellowWhiteGoldAr",
      value: "ذهب أصفر وأبيض",
      facetKey: "metalColorFacet",
    },
    { filter: "whiteGoldAr", value: "ذهب أبيض", facetKey: "metalColorFacet" },
    { filter: "roseGoldAr", value: "ذهب وردى", facetKey: "metalColorFacet" },
    {
      filter: "whiteRoseGoldAr",
      value: "ذهب أبيض ووردى",
      facetKey: "metalColorFacet",
    },
    {
      filter: "yellowWhiteRoseGoldAr",
      value: "ذهب أصفر أبيض ووردى",
      facetKey: "metalColorFacet",
    },
    {
      filter: "yellowRoseGoldAr",
      value: "ذهب أصفر ووردى",
      facetKey: "metalColorFacet",
    },
  ],
  diamonds: [
    {
      filter: "diamonds",
      value: "Diamonds",
      facetKey: "diamondFacet",
    },
    {
      filter: "diamondsAr",
      value: "ألماس",
      facetKey: "diamondFacet",
    },
  ],
  stone: [
    {
      filter: "coloredStones",
      value: "Colored Stones",
      facetKey: "stoneFacet",
    },
    {
      filter: "cubicZirconia",
      value: "Cubic Zirconia",
      facetKey: "stoneFacet",
    },
    { filter: "pearls", value: "Pearls", facetKey: "stoneFacet" },
    { filter: "sapphire", value: "Sapphire", facetKey: "stoneFacet" },
    { filter: "ruby", value: "Ruby", facetKey: "stoneFacet" },
    { filter: "emerald", value: "Emerald", facetKey: "stoneFacet" },

    {
      filter: "coloredStonesAr",
      value: "أحجار ملونة",
      facetKey: "stoneFacet",
    },
    {
      filter: "cubicZirconiaAr",
      value: "حجر الزركون",
      facetKey: "stoneFacet",
    },
    { filter: "pearlsAr", value: "لؤلؤ", facetKey: "stoneFacet" },
    { filter: "sapphireAr", value: "الياقوت", facetKey: "stoneFacet" },
    { filter: "rubyAr", value: "روبى", facetKey: "stoneFacet" },
    { filter: "emeraldAr", value: "إميرلد", facetKey: "stoneFacet" },
  ],
  collection: [
    {
      filter: "essentials",
      value: "Essentials",
      facetKey: "collectionFacet",
    },
    {
      filter: "lazurdeDiamonds",
      value: "L'azurde Diamonds",
      facetKey: "collectionFacet",
    },
    {
      filter: "lazurdeGold",
      value: "L'azurde Gold",
      facetKey: "collectionFacet",
    },
    {
      filter: "shineYourColors",
      value: "Shine Your Colours",
      facetKey: "collectionFacet",
    },
    {
      filter: "shiningTreasures",
      value: "Shining Treasures",
      facetKey: "collectionFacet",
    },
    { filter: "jardin", value: "Jardin", facetKey: "collectionFacet" },
    { filter: "eterna", value: "Eterna", facetKey: "collectionFacet" },
    {
      filter: "celebrateLife",
      value: "Celebrate Your Life",
      facetKey: "collectionFacet",
    },
    { filter: "velvet", value: "Velvet", facetKey: "collectionFacet" },
    { filter: "solitaire", value: "Solitaire", facetKey: "collectionFacet" },
    { filter: "kids", value: "Kids", facetKey: "collectionFacet" },
    { filter: "mens", value: "Mens", facetKey: "collectionFacet" },
    { filter: "unisex", value: "Unisex", facetKey: "collectionFacet" },

    { filter: "kidsAr", value: "للأطفال", facetKey: "collectionFacet" },
    { filter: "mensAr", value: "للرجال", facetKey: "collectionFacet" },
    { filter: "unisexAr", value: "للجنسين", facetKey: "collectionFacet" },
    { filter: "eternaAr", value: "إتيرنا", facetKey: "collectionFacet" },
    {
      filter: "essentialsAr",
      value: "مجوهراتي الأساسية",
      facetKey: "collectionFacet",
    },
    {
      filter: "lazurdeDiamondsAr",
      value: "مجوهرات لازوردي",
      facetKey: "collectionFacet",
    },
    {
      filter: "lazurdeGoldAr",
      value: "ذهب لازوردي",
      facetKey: "collectionFacet",
    },
    {
      filter: "shineYourColorsAr",
      value: "أشرقي بالألوان",
      facetKey: "collectionFacet",
    },
    {
      filter: "shiningTreasuresAr",
      value: "كنوز براقة",
      facetKey: "collectionFacet",
    },
    { filter: "jardinAr", value: "جاردان", facetKey: "collectionFacet" },
    {
      filter: "celebrateLife",
      value: "Celebrate Your Life",
      facetKey: "collectionFacet",
    },
    { filter: "velvetAr", value: "فلفيت", facetKey: "collectionFacet" },
    { filter: "solitaireAr", value: "سوليتير", facetKey: "collectionFacet" },
  ],
  price: [
    { filter: "under500", value: "[* TO 500]", facetKey: "priceFacet" },
    { filter: "500to1000", value: "[500 TO 1000]", facetKey: "priceFacet" },
    { filter: "under1000", value: "[* TO 1000]", facetKey: "priceFacet" },
    { filter: "1000to2000", value: "[1000 TO 2000]", facetKey: "priceFacet" },
    { filter: "under2000", value: "[* TO 2000]", facetKey: "priceFacet" },
    { filter: "2000to4000", value: "[2000 TO 4000]", facetKey: "priceFacet" },
    { filter: "under4000", value: "[* TO 4000]", facetKey: "priceFacet" },
    { filter: "4000above", value: "[4000 TO *]", facetKey: "priceFacet" },
    { filter: "4000to6000", value: "[4000 TO 6000]", facetKey: "priceFacet" },
    { filter: "4000to8000", value: "[4000 TO 8000]", facetKey: "priceFacet" },
    { filter: "6000to8000", value: "[6000 TO 8000]", facetKey: "priceFacet" },
    { filter: "under6000", value: "[* TO 6000]", facetKey: "priceFacet" },
    { filter: "6000to10000", value: "[6000 TO 10000]", facetKey: "priceFacet" },
    { filter: "8000to10000", value: "[8000 TO 10000]", facetKey: "priceFacet" },
    { filter: "10000above", value: "[10000 TO *]", facetKey: "priceFacet" },
    { filter: "under30000", value: "[* TO 30000]", facetKey: "priceFacet" },
    { filter: "30000to50000", value: "[30000 TO 50000]", facetKey: "priceFacet" },
    { filter: "50000above", value: "[50000 TO *]", facetKey: "priceFacet" },
  ],
  newIn: [
    {
      filter: "newIn",
      value: generateNewIn(),
      facetKey: "newInFacet",
    },
  ],
};
