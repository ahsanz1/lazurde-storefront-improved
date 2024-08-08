import { TYPE_CONTAINER_BOX } from "@bloomreach/spa-sdk";
import CustomContainerBox from "components/common/ui/customContainerBox";
import dynamic from "next/dynamic";
const SellerCardSlider = dynamic(
  () => import("components/common/best-seller-card-slider")
);
const Footer = dynamic(() => import("components/common/footer"));
const AccordionContent = dynamic(
  () => import("components/common/accordion-content")
);
const Banner = dynamic(() => import("components/common/banner"));
const CardSlider = dynamic(() => import("components/common/card-slider"));
const PromoBar = dynamic(() => import("components/common/header/promo-bar"));
const UserNavbarContainer = dynamic(
  () => import("components/common/header/userNavContainer")
);
const PLPCategory = dynamic(() => import("components/common/plp-category"));
const ProductListing = dynamic(
  () => import("components/common/product-listing")
);
const PlpCollection = dynamic(() => import("components/common/plp-collection"));
const CollectionCard = dynamic(
  () => import("components/common/collection-card")
);
const LazurdeHeroBanner = dynamic(
  () => import("components/common/hero-banner")
);
const TermCondtion = dynamic(() => import("components/common/terms-condition"));
const CustomerService = dynamic(
  () => import("components/common/customer-service")
);
const PageNotFoundContent = dynamic(
  () => import("components/common/404-content")
);
const AboutUs = dynamic(() => import("components/common/about-us"));
const CelebrityChoice = dynamic(
  () => import("components/common/celebrity-choice")
);
const BambuserCardSlider = dynamic(
  () => import("components/common/bambuser-card-slider")
);
const BrandCards = dynamic(() => import("components/common/brand-cards"));
const CategoryCards = dynamic(() => import("components/common/category-cards"));
// const Instagram = dynamic(() => import( "react-content-loader"), {
//   ssr: false,
// });
const NewsletterSignup = dynamic(
  () => import("components/common/newsletter-signup")
);
const ProcessBlock = dynamic(() => import("components/common/process-block"));
const PromotionCard = dynamic(() => import("components/common/promotion-card"));
const StoreLocator = dynamic(() => import("components/common/storeLocator"));
const ReverseContentBlock = dynamic(
  () => import("components/common/content-reverse")
);
const FaqsWithBackground = dynamic(() => import("components/common/faqs"));
const SiteNavContainer = dynamic(
  () => import("components/common/header/siteNavContainer")
);
const PlpSchema = dynamic(() => import("components/common/plp-schema"));

export const brComponentMapping: any = {
  // [TYPE_CONTAINER_BOX]: CustomContainerBox,
  Accordion: AccordionContent,
  "PLP Card Banner": PLPCategory,
  "PLP Banner": Banner,
  "Product Grid": ProductListing,
  "Site Navigation": SiteNavContainer,
  "slider card": CardSlider,
  "Promo Bar": PromoBar,
  "User Navbar": UserNavbarContainer,
  Footer: Footer,
  Collection: PlpCollection,
  "explore card": CollectionCard,
  "USPs Section": ProcessBlock,
  "Promotion Blocks": PromotionCard,
  "Engagement Recommendation": SellerCardSlider,
  banner: LazurdeHeroBanner,
  "Ancillary Data": TermCondtion,
  "Ancillary Cards": CustomerService,
  "Page Not Found": PageNotFoundContent,
  "Heritage Section": AboutUs,
  Celebrities: CelebrityChoice,
  "Bambuser Card": BambuserCardSlider,
  "brand card": BrandCards,
  // instagram: Instagram,
  ContentPage: NewsletterSignup,
  Content: NewsletterSignup,
  "Store Locator": StoreLocator,
  "Content With Reverse Image": ReverseContentBlock,
  "FAQs Block": FaqsWithBackground,
  "Faq Section": PlpSchema,
  "Blog Content": CategoryCards,
};
