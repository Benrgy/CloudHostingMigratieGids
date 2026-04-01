import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO } from "@/utils/seoConfig";
import { useEffect } from "react";

export const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const seoConfig = seoConfigs[location.pathname] || getDefaultSEO();

  useEffect(() => {
    document.title = seoConfig.title;
  }, [seoConfig.title]);

  const faqSchema = location.pathname === '/' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoeveel kan ik besparen met cloud hosting migratie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze klanten besparen gemiddeld 40% op hosting kosten na cloud migratie. Dit komt door betere resource-optimalisatie, automatische scaling en het wegvallen van fysiek server onderhoud."
        }
      },
      {
        "@type": "Question",
        "name": "Hoelang duurt een cloud migratie en krijg ik downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gemiddelde migratietijd is 2-5 werkdagen. Wij gebruiken zero-downtime technieken en plannen migraties buiten kantooruren. 99% van onze migraties hebben minder dan 1 uur downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Welke cloud providers worden ondersteund voor migratie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij ondersteunen alle grote cloud providers: AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform en DigitalOcean. Wij adviseren de beste keuze op basis van uw specifieke behoeften, budget en compliance-eisen."
        }
      },
      {
        "@type": "Question",
        "name": "Is cloud hosting veilig voor bedrijfsdata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud hosting is doorgaans veiliger dan traditionele servers. Grote providers investeren miljarden in beveiliging, bieden 24/7 monitoring en voldoen aan certificeringen zoals ISO27001, SOC2 en AVG/GDPR compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Hoeveel kost een cloud migratie in Nederland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kosten variëren van €500 voor eenvoudige websites tot €5000+ voor complexe enterprise applicaties. Wij bieden altijd een gratis analyse en vrijblijvende offerte. De investering verdient zich doorgaans binnen 6-12 maanden terug door lagere hosting kosten."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik mijn domeinnaam en e-mail behouden bij cloud migratie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, uw domeinnaam en alle e-mailaccounts blijven exact hetzelfde werken na cloud migratie. De migratie is volledig transparant voor bezoekers en gebruikers."
        }
      },
      {
        "@type": "Question",
        "name": "Wat gebeurt er als iets misgaat tijdens de cloud migratie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij maken altijd volledige backups vooraf en hebben een rollback plan klaarstaan. In 10+ jaar ervaring hebben wij nog nooit data verloren. U krijgt 24/7 ondersteuning tijdens het gehele migratieproces."
        }
      },
      {
        "@type": "Question",
        "name": "Krijg ik ondersteuning na de cloud migratie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, alle cloud migraties komen met 30 dagen gratis ondersteuning. Daarna bieden wij optionele onderhoudscontracten vanaf €99/maand voor monitoring, updates en optimalisatie."
        }
      }
    ]
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cloudmigratienederland.nl/"
      },
      ...(location.pathname !== '/' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": seoConfig.title.split('|')[0].split('-')[0].trim(),
        "item": `https://cloudmigratienederland.nl${location.pathname}`
      }] : [])
    ]
  };

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="nl" />
        <meta name="geo.region" content="NL" />
        <meta name="geo.country" content="Netherlands" />
        <meta name="geo.placename" content="Amsterdam" />
        <link rel="canonical" href={`https://cloudmigratienederland.nl${location.pathname}`} />
        
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`https://cloudmigratienederland.nl${location.pathname}`} />
        <meta property="og:type" content={location.pathname.startsWith('/blog/') ? 'article' : 'website'} />
        <meta property="og:image" content="https://cloudmigratienederland.nl/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Cloud Hosting Migratie Nederland" />
        
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CloudMigratieNL" />
        <meta name="twitter:image" content="https://cloudmigratienederland.nl/twitter-image.jpg" />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {/* FAQ Schema on homepage */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};
