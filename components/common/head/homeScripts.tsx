import { RegionType } from "lib/types/common";
import Script from "next/script";

const HomePageScripts = ({
  scriptPageType,
  description,
  locale,
}: {
  scriptPageType: string;
  description: string;
  locale: string;
}) => {
  if (scriptPageType != "home") return null;

  const lang = locale?.split("-")[0];
  const region = locale?.split("-")[1] as RegionType;
  const schemaDatabyRegion = {
    sa: {
      name: lang === "en" ? "L’azurde" : "لازوردي",
      streetAddress:
        lang === "en"
          ? "L‘azurde Jewelry, Al Masaref Street 198, Banks District Riyadh, 11521 Saudi Arabia"
          : "مجوهرات لازوردي، شارع المصارف 198، حي البنوك، الرياض، 11521 المملكة العربية السعودية",
      addressLocality: lang === "en" ? "Riyadh" : "الرياض",
      addressRegion: lang === "en" ? "Riyadh" : "الرياض",
      addressCountry: lang === "en" ? "Saudi Arabia" : "السعودية",
      postalCode: "11521",
      telephone: "+966 55 356 1501",
    },
    ae: {
      name: lang === "en" ? "L’azurde" : "لازوردي",
      streetAddress:
        lang === "en"
          ? "Dubai, Deira, Gold Souk, Gold Land Building, Office No 313"
          : "دبي، ديرة، سوق الذهب، مبنى أرض الذهب، مكتب رقم 313",
      addressLocality: lang === "en" ? "Dubai" : "دبي",
      addressRegion: lang === "en" ? "Dubai" : "دبي",
      addressCountry:
        lang === "en" ? "United Arab Emirates" : "الإمارات العربية المتحدة",
      postalCode: "60843",
      telephone: "+97180064775",
    },
    eg: {
      name: lang === "en" ? "L’azurde" : "لازوردي",
      streetAddress:
        lang === "en"
          ? "1st Industrial Zone - Al Obour City - Cairo, Egypt"
          : "المنطقة الصناعية الأولى - مدينة العبور - القاهرة، مصر",
      addressLocality: lang === "en" ? "Cairo" : "القاهرة",
      addressRegion: lang === "en" ? "Cairo" : "القاهرة",
      addressCountry: lang === "en" ? "Egypt" : "مصر",
      postalCode: "",
      telephone: "+16802",
    },
  };

  return (
    <>
      <Script
        id="organization-schema-script"
        strategy="lazyOnload"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "${schemaDatabyRegion[region]?.name}",
          "url": "https://www.lazurde.com/${locale}",
          "logo": "https://lazurde.bloomreach.io/delivery/resources/content/gallery/channel-templates/lazurde/brands/lazurde-logo.svg",
          "description": "${description}",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "${schemaDatabyRegion[region]?.streetAddress}",
            "addressLocality": "${schemaDatabyRegion[region]?.addressLocality}",
            "addressRegion": "${schemaDatabyRegion[region]?.addressRegion}",
            "postalCode": "${schemaDatabyRegion[region]?.postalCode}",
            "addressCountry": "${schemaDatabyRegion[region]?.addressCountry}"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "${schemaDatabyRegion[region]?.telephone}",
              "contactType": "customer support",
              "availableLanguage": ["English", "Arabic"]
            }
          ],
          "sameAs": [
            "https://www.facebook.com/lazurde",
            "https://www.instagram.com/lazurde/",
            "https://twitter.com/lazurde",
            "https://www.youtube.com/user/LazurdeJewelry"
          ]
        }`,
        }}
      />

      <Script
        id="website-schema-script"
        strategy="lazyOnload"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context" : "https://schema.org",
          "@type" : "WebSite",
          "name" : "${schemaDatabyRegion[region]?.name}",
          "url" : "https://www.lazurde.com/${locale}"
        }`,
        }}
      />
    </>
  );
};

export default HomePageScripts;
