import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO } from "@/utils/seoConfig";
import { useEffect } from "react";

export const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const seoConfig = seoConfigs[location.pathname] || getDefaultSEO();

  // Update document title immediately for better UX
  useEffect(() => {
    document.title = seoConfig.title;
  }, [seoConfig.title]);

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="nl" />
        <meta name="geo.region" content="NL" />
        <meta name="geo.country" content="Netherlands" />
        <link rel="canonical" href={`https://cloudmigratienederland.nl${location.pathname}`} />
        
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`https://cloudmigratienederland.nl${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cloudmigratienederland.nl/og-image.jpg" />
        <meta property="og:locale" content="nl_NL" />
        
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CloudMigratieNL" />
        <meta name="twitter:image" content="https://cloudmigratienederland.nl/twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cloud Migratie Nederland",
            "url": "https://cloudmigratienederland.nl",
            "logo": "https://cloudmigratienederland.nl/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+31-20-123-4567",
              "contactType": "customer service",
              "areaServed": "NL",
              "availableLanguage": "Dutch"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NL",
              "addressRegion": "Noord-Holland",
              "addressLocality": "Amsterdam"
            },
            "sameAs": [
              "https://linkedin.com/company/cloudmigratienederland",
              "https://twitter.com/CloudMigratieNL"
            ]
          })}
        </script>
      </Helmet>
      {children}
    </>
  );
};