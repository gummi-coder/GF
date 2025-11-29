import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "/images/DSC02226 copy.JPG",
  ogType = "website",
  canonical 
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = "https://gftraining.is";
  const fullUrl = canonical || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update description
    if (description) {
      updateMetaTag("description", description);
      updateMetaTag("og:description", description, true);
      updateMetaTag("twitter:description", description);
    }

    // Update title
    if (title) {
      updateMetaTag("og:title", title, true);
      updateMetaTag("twitter:title", title);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Update OG tags
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:image", `${siteUrl}${ogImage}`, true);
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:image", `${siteUrl}${ogImage}`);

    // Update canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullUrl);

    // Update language
    document.documentElement.setAttribute("lang", "is");
  }, [title, description, keywords, ogImage, ogType, fullUrl]);

  return null;
};

export default SEO;

