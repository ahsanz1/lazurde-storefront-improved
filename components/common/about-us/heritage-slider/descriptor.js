const { Types } = require("@teamfabric/xpm");

exports.default = Types.Component({
  id: "AboutUs",
  label: "About Us",
  description: ``,

  attributes: {
    backgroundImage: Types.Image({
      label: "About Us Banner Image",
      url: Types.String({ label: "URL" }),
      altText: Types.String({ label: "Alt text" }),
    }),
    bannerText: Types.String({ label: "About Us Banner Heading" }),
    sectionOneImage: Types.Image({
      label: "History Section One Image",
      url: Types.String({ label: "URL" }),
      altText: Types.String({ label: "Alt text" }),
    }),
    sectionOneContent: Types.RichText({ label: "History Section One Content" }),
    midSectionImage: Types.Image({
      label: "History Section Two Image One",
      url: Types.String({ label: "URL" }),
      altText: Types.String({ label: "Alt text" }),
    }),
    midSectionContent: Types.RichText({ label: "History Section Two Content" }),
    midSectionImageOne: Types.Image({
      label: "History Section Two Image Two",
      url: Types.String({ label: "URL" }),
      altText: Types.String({ label: "Alt text" }),
    }),
    sectionTwoImage: Types.Image({
      label: "Renowned Products Section three Image",
      url: Types.String({ label: "URL" }),
      altText: Types.String({ label: "Alt text" }),
    }),
    sectionTwoContent: Types.RichText({ label: "Renowned Products Section three Content" }),
    mainHeading: Types.String({ label: "Heritage Main Heading" }),
    heritage: Types.Array({
      label: "Our Heritage",
      children: Types.Shape({
        children: {
          upperHeading: Types.String({ label: "Year Heritage Heading" }),
          heading: Types.String({ label: "Heritage Slide Heading" }),
          description: Types.String({ label: "Heritage Slide Description" }),
          image: Types.Image({
            label: "Heritage Slide Image",
            url: Types.String({ label: "URL" }),
            altText: Types.String({ label: "Alt text" }),
          }),
        },
      }),
    }),
  },
});
