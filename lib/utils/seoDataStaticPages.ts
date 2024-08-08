import { getRegionName } from "./common";

type SeoObjectType = {
  [locale: string]: {
    title: string;
    seometadescription: string;
  };
};

export const seoForStaticPages = (locale: string) => {
  const region = getRegionName(locale);

  const contactUs: SeoObjectType = {
    en: {
      title: `Contact Us | L'azurde ${region}`,
      seometadescription: `Contact L'azurde ${region}. Get in touch with our customer support team to inquire about our products or any other queries you may have.`,
    },
    ar: {
      title: `اتصل بنا | لازوردي ${region}`,
      seometadescription: `تواصل مع لازوردي ${region}. اتصل بفريق خدمة العملاء لدينا للاستفسار عن منتجاتنا أو أي استفسارات أخرى قد تكون لديك.`,
    },
  };

  const faq: SeoObjectType = {
    en: {
      title: `Frequently Asked Questions | L'azurde ${region}`,
      seometadescription: `Find answers to frequently asked questions about your orders, shipping, delivery, payments, returms & refunds. Read more here at L'azurde ${region}.`,
    },
    ar: {
      title: `الأسئلة المتكررة | لازوردي ${region}`,
      seometadescription: `اعثر على إجابات على الأسئلة المتكررة حول طلباتك، الشحن، التوصيل، الدفع، الإرجاع والاسترداد. اقرأ المزيد هنا في لازوردي ${region}.`,
    },
  };

  const aboutUs: SeoObjectType = {
    en: {
      title: `About Us - The Story | L'azurde ${region}`,
      seometadescription: `With a vision of continuous progress in crafting jewelry, L’azurde is a signature name at the highest level, both regionally and globally. Read more here at L'azurde ${region}.`,
    },
    ar: {
      title: `حول لازوردي - القصة | لازوردي ${region}`,
      seometadescription: `بتطلعنا إلى التقدم المستمر في صناعة المجوهرات، تعد لازوردي اسمًا مميزًا على أعلى مستوى، سواء على الصعيد الإقليمي أو العالمي. لمزيد من المعلومات، يرجى قراءة المزيد هنا على موقع لازوردي ${region}.`,
    },
  };

  const investorRelation: SeoObjectType = {
    en: {
      title: `Corporate Governance and Investors Relations | L'azurde ${region}`,
      seometadescription: `Governance and Investor Relations Department aims to achieve effective communication between the company and investors. Read more here at L'azurde ${region}.`,
    },
    ar: {
      title: `الحوكمة الشركات وعلاقات المستثمرين | لازوردي ${region}`,
      seometadescription: `يهدف قسم الحوكمة وعلاقات المستثمرين إلى تحقيق التواصل الفعال بين الشركة والمستثمرين. لمزيد من المعلومات، يرجى قراءة المزيد هنا على موقع لازوردي ${region}.`,
    },
  };

  const returnRefundExchange: SeoObjectType = {
    en: {
      title: `Returns, Exchanges & Refund policy | L'azurde ${region}`,
      seometadescription: `Find all the information you need about the returns, exchanges, and refund policy at L'azurde ${region}. Visit now.`,
    },
    ar: {
      title: `سياسة الإرجاع والاستبدال والاسترداد | لازوردي ${region}`,
      seometadescription: `احصل على جميع المعلومات التي تحتاجها حول سياسة الإرجاع والاستبدال واسترداد الأموال في لازوردي ${region}. Visit now.`,
    },
  };

  const warrentyTermCondition: SeoObjectType = {
    en: {
      title: `Warranty, Terms & Conditions | L'azurde ${region}`,
      seometadescription: `L’azurde is pleased to offer our customers with a one year warranty on jewelry purchased through our website. Understand the terms & conditions here, at L'azurde ${region}.`,
    },
    ar: {
      title: `الضمان والشروط والأحكام | لازوردي ${region}`,
      seometadescription: `يسر لازوردي أن يقدم لعملائه ضمانًا لمدة عام واحد على المجوهرات المشتراة من خلال موقعنا الإلكتروني. للإطلاع على الشروط والأحكام، يرجى زيارة الرابط التالي على موقع لازوردي ${region}.`,
    },
  };

  return {
    contactUs,
    faq,
    aboutUs,
    investorRelation,
    returnRefundExchange,
    warrentyTermCondition,
  };
};
