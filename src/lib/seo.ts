export const SITE_URL = "https://o3rabi.com";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/social-share.jpg`;

export const HOME_SEO = {
  title: "Osama Orabi | Founder of Wahib & Business Builder",
  description:
    "Osama Orabi, also known as Osama Alorabi, is a Yemeni entrepreneur, founder of Wahib, business builder, product builder, and content creator.",
  canonical: `${SITE_URL}/`,
  ogTitle: "Osama Orabi | Founder & Business Builder",
  ogDescription: "Founder, entrepreneur, and content creator building ventures, brands, and business ideas.",
  ogType: "profile",
};

export const BUSINESS_REPRESENTATION_SEO = {
  title: "Business Representation System | Osama Orabi",
  description:
    "Business Representation helps selected companies align their positioning, trust, and digital presence with the strength of their actual operations.",
  canonical: `${SITE_URL}/business-representation/`,
  ogTitle: "Business Representation System | Osama Orabi",
  ogDescription:
    "Align your positioning, trust, and digital presence with the strength of your actual business.",
  ogType: "website",
};

const socialProfiles = [
  "https://www.linkedin.com/in/osama-alorabi-b32479271/",
  "https://www.instagram.com/o3rabi/",
  "https://www.youtube.com/@o3rabi",
  "https://www.facebook.com/o3rabi",
  "https://www.tiktok.com/@o3rabi",
  "https://x.com/o3rabii",
];

const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Osama Orabi",
  alternateName: ["Osama Alorabi", "o3rabi"],
  url: `${SITE_URL}/`,
  image: SOCIAL_IMAGE_URL,
  jobTitle: ["Entrepreneur", "Founder", "Business Builder", "Content Creator", "Product Builder"],
  nationality: {
    "@type": "Country",
    name: "Yemen",
  },
  knowsAbout: [
    "Entrepreneurship",
    "Startup building",
    "Product development",
    "Business strategy",
    "Business content",
    "Media production",
    "Wahib social gifting platform",
    "Ajjad brand",
  ],
  sameAs: socialProfiles,
};

export const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Osama Orabi",
      alternateName: "o3rabi",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile-page`,
      url: `${SITE_URL}/`,
      name: HOME_SEO.title,
      description: HOME_SEO.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: SOCIAL_IMAGE_URL,
        width: 1154,
        height: 1430,
      },
      inLanguage: "en",
    },
    personSchema,
    {
      "@type": "Organization",
      "@id": "https://getwahib.com/#organization",
      name: "Wahib",
      alternateName: "واهب",
      url: "https://getwahib.com/",
      description: "A social gifting platform being developed for the GCC market.",
      founder: { "@id": `${SITE_URL}/#person` },
      sameAs: ["https://play.google.com/store/apps/details?id=co.median.android.nmdozba"],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#ajjad-brand`,
      name: "Ajjad",
      alternateName: "اجاد",
      description: "An e-commerce fashion brand built across product, marketing, content, and operations.",
      founder: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export const BUSINESS_REPRESENTATION_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/business-representation/#webpage`,
      url: `${SITE_URL}/business-representation/`,
      name: BUSINESS_REPRESENTATION_SEO.title,
      description: BUSINESS_REPRESENTATION_SEO.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/business-representation/#service` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/business-representation/#service`,
      name: "Business Representation",
      description: BUSINESS_REPRESENTATION_SEO.description,
      provider: { "@id": `${SITE_URL}/#person` },
      url: `${SITE_URL}/business-representation/`,
    },
    personSchema,
  ],
};
