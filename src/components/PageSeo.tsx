import { useEffect } from "react";
import { SOCIAL_IMAGE_URL } from "@/lib/seo";

interface PageSeoProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  robots?: string;
  structuredData?: object;
}

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const PageSeo = ({
  title,
  description,
  canonical,
  ogTitle = title,
  ogDescription = description,
  ogType = "website",
  robots = "index, follow",
  structuredData,
}: PageSeoProps) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "en";

    setMeta("name", "description", description);
    setMeta("name", "robots", robots);
    setMeta("property", "og:title", ogTitle);
    setMeta("property", "og:description", ogDescription);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", SOCIAL_IMAGE_URL);
    setMeta("property", "og:image:width", "1154");
    setMeta("property", "og:image:height", "1430");
    setMeta("property", "og:image:alt", "Osama Orabi, founder and business builder");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", ogTitle);
    setMeta("name", "twitter:description", ogDescription);
    setMeta("name", "twitter:image", SOCIAL_IMAGE_URL);
    setMeta("name", "twitter:image:alt", "Osama Orabi, founder and business builder");

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonical;

    const scriptId = "page-structured-data";
    let structuredDataElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (structuredData) {
      if (!structuredDataElement) {
        structuredDataElement = document.createElement("script");
        structuredDataElement.id = scriptId;
        structuredDataElement.type = "application/ld+json";
        document.head.appendChild(structuredDataElement);
      }
      structuredDataElement.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataElement?.remove();
    }
  }, [canonical, description, ogDescription, ogTitle, ogType, robots, structuredData, title]);

  return null;
};

export default PageSeo;
