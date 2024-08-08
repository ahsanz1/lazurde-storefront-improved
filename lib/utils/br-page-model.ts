const IMAGE_SET = "imageset";
const DOCUMENT = "document";
const ASSET = "asset";

export const filterByHref = (brPageModel: any, hrefs: string[] = []) => {
  const pageWithoutHrefs: any = {};
  const { page = {} } = brPageModel;
  const pageModelKeys = Object.keys(page);

  const pageModelKeysWithoutHrefs = pageModelKeys.filter((pmKey) => {
    if (page[pmKey].type === DOCUMENT) {
      const { site = {} } = page[pmKey].links || {};
      return !hrefs.includes(site.href);
    }
    return true;
  });

  for (let idx = 0; idx < pageModelKeysWithoutHrefs.length; idx++) {
    pageWithoutHrefs[pageModelKeysWithoutHrefs[idx]] =
      page[pageModelKeysWithoutHrefs[idx]];
  }

  const filteredBrPageModel = { ...brPageModel, page: pageWithoutHrefs };
  return filteredBrPageModel;
};

export const filterByDocuments = (
  brPageModel: any,
  documentNames: string[] = []
) => {
  const pageWithoutDocuments: any = {};
  const { page = {} } = brPageModel;
  const pageModelKeys = Object.keys(page);

  /**
   * NOTE: Filtering unwanted documents based on documentNames array
   */
  const pageModelKeysWithoutDocuments = pageModelKeys.filter((pmKey) => {
    if (page[pmKey].type === DOCUMENT) {
      const { data = {} } = page[pmKey];
      return !documentNames.includes(data.name);
    }
    return true;
  });

  /**
   * NOTE: Create a new page object without the unwanted documents
   */
  for (let idx = 0; idx < pageModelKeysWithoutDocuments.length; idx++) {
    pageWithoutDocuments[pageModelKeysWithoutDocuments[idx]] =
      page[pageModelKeysWithoutDocuments[idx]];
  }

  /**
   * NOTE: Merge the new filtered object to the page model & return.
   */

  const filteredBrPageModel = { ...brPageModel, page: pageWithoutDocuments };
  return filteredBrPageModel;
};

export const filterByImageSets = (
  brPageModel: any,
  imageFileNames: string[] = []
) => {
  const pageWithoutImageSets: any = {};
  const { page = {} } = brPageModel;
  const pageModelKeys = Object.keys(page);

  /**
   * NOTE: Removing unwanted imageset & asset content items.
   */

  const pageModelKeysWithoutImageSets = pageModelKeys.filter((pmKey) => {
    if (page[pmKey].type === IMAGE_SET) {
      const { data = {} } = page[pmKey];
      return !imageFileNames.includes(data.fileName);
    } else if (page[pmKey].type === ASSET) {
      const { data = {} } = page[pmKey];
      const { asset = {} } = data;
      return !imageFileNames.includes(asset.filename);
    }
    return true;
  });

  for (let idx = 0; idx < pageModelKeysWithoutImageSets.length; idx++) {
    pageWithoutImageSets[pageModelKeysWithoutImageSets[idx]] =
      page[pageModelKeysWithoutImageSets[idx]];
  }

  const filteredBrPageModel = { ...brPageModel, page: pageWithoutImageSets };
  return filteredBrPageModel;
};

export const removeRedundantSizesFromImageSets = (brPageModel: any) => {
  const { page = {} } = brPageModel;
  const copyOfBrPageModel = { ...page };
  const pageModelKeys = Object.keys(copyOfBrPageModel);

  const pageModelKeysWithImageSets = pageModelKeys.filter(
    (pmKey) => copyOfBrPageModel[pmKey].type === IMAGE_SET
  );

  /**
   * NOTE: Removing unnecessary file details from imageset content item. Only extracting the
   * necessary information from main image file.
   */

  for (let idx = 0; idx < pageModelKeysWithImageSets.length; idx++) {
    const { data = {} } = copyOfBrPageModel[pageModelKeysWithImageSets[idx]];
    const {
      fileName = "",
      description = null,
      original = {},
      name = "",
      displayName = "",
      contentType = "",
      localeString = null,
      id = "",
    } = data;

    copyOfBrPageModel[pageModelKeysWithImageSets[idx]].data = {
      fileName,
      description,
      original,
      name,
      displayName,
      contentType,
      localeString,
      id,
    };
  }
  const reducedBrPageModel = { ...brPageModel, page: copyOfBrPageModel };
  return reducedBrPageModel;
};

/**
 * NOTE: Redundant translation namespaces removal is paused for now as it requires
 * careful removal of translation namespaces, creation of new namespaces with relevant content
 * only & loading those specific namespaces in across all pages in different components
 */

// const filterNamespaces = (pageProps: any, unwantedKeys: string[]) => {
//   const { __namespaces = {} } = pageProps;
//   const { common = {} } = __namespaces;
//   const commonObjectKeys = Object.keys(common);
//   const withoutUnwantedKeys: any = {};

//   const commonObjectKeysWithoutUnwantedKeys = commonObjectKeys.filter(
//     (key) => !unwantedKeys.includes(key)
//   );

//   for (let idx = 0; idx < commonObjectKeysWithoutUnwantedKeys.length; idx++) {
//     withoutUnwantedKeys[commonObjectKeysWithoutUnwantedKeys[idx]] =
//       common[commonObjectKeysWithoutUnwantedKeys[idx]];
//   }
// };
