import type { Context } from "https://edge.netlify.com";

// Blog metadata mapping - update this when adding new blog posts
const blogMetadata: Record<string, {
  title: string;
  description: string;
  keywords: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
  image: string;
  category: string;
}> = {
  "seo-gids-2024": {
    title: "Ultieme SEO Gids 2024: Complete Handleiding voor Cloud Hosting",
    description: "Leer alles over SEO optimalisatie voor cloud hosting websites. Van technische SEO tot content strategie, inclusief AI-gedreven tips voor betere rankings.",
    keywords: "seo gids, cloud hosting seo, technische seo, seo optimalisatie, website ranking, zoekmachine optimalisatie",
    author: "Cloud Hosting Migratie Expert Team",
    publishedDate: "2024-01-15",
    modifiedDate: "2024-01-15",
    image: "/images/seo-guide-og.jpg",
    category: "SEO Strategieën"
  },
  "cloud-migratie-best-practices": {
    title: "Cloud Migratie Best Practices: Complete Stappenplan voor 2024",
    description: "Ontdek de beste praktijken voor een succesvolle cloud migratie. Van planning tot uitvoering, inclusief security, compliance en kostenoptimalisatie.",
    keywords: "cloud migratie, migratie best practices, cloud transitie, cloud hosting, migratie planning, cloud strategie",
    author: "Cloud Hosting Migratie Expert Team",
    publishedDate: "2024-01-10",
    modifiedDate: "2024-01-10",
    image: "/images/cloud-migration-og.jpg",
    category: "Cloud Migratie"
  },
  "performance-optimalisatie": {
    title: "Website Performance Optimalisatie: Van Traag naar Razendsnel",
    description: "Verbeter je website snelheid met deze geavanceerde performance optimalisatie technieken. Inclusief praktische tips voor cloud hosting omgevingen.",
    keywords: "performance optimalisatie, website snelheid, pagina snelheid, core web vitals, website performance, snelheid verbeteren",
    author: "Cloud Hosting Migratie Expert Team",
    publishedDate: "2024-01-08",
    modifiedDate: "2024-01-08",
    image: "/images/performance-og.jpg",
    category: "Performance Tips"
  },
  "moderne-hosting-oplossingen": {
    title: "Moderne Cloud Hosting Oplossingen: Complete Vergelijking 2024",
    description: "Vergelijk de beste cloud hosting oplossingen van 2024. AWS, Azure, Google Cloud en meer - ontdek welke het beste bij jouw bedrijf past.",
    keywords: "cloud hosting, hosting oplossingen, aws, azure, google cloud, hosting vergelijking, cloud providers",
    author: "Cloud Hosting Migratie Expert Team",
    publishedDate: "2024-01-05",
    modifiedDate: "2024-01-05",
    image: "/images/hosting-solutions-og.jpg",
    category: "Tech Oplossingen"
  },
  "seo-analytics-cloud": {
    title: "SEO Analytics voor Cloud Websites: Meten is Weten",
    description: "Leer hoe je SEO performance meet en optimaliseert voor cloud-gehoste websites. Google Analytics, Search Console en geavanceerde tracking.",
    keywords: "seo analytics, google analytics, search console, seo tracking, website analytics, seo rapportage",
    author: "Cloud Hosting Migratie Expert Team",
    publishedDate: "2024-01-03",
    modifiedDate: "2024-01-03",
    image: "/images/seo-analytics-og.jpg",
    category: "SEO Tools"
  },
  "beveiliging-cloud-omgevingen": {
    title: "Security Best Practices voor Cloud Omgevingen: Complete Gids",
    description: "Bescherm je cloud infrastructuur met deze beveiliging best practices. Van encryption tot compliance, alles wat je moet weten.",
    keywords: "cloud security, beveiliging, cloud beveiliging, security best practices, cybersecurity, data beveiliging",
    author: "Cloud Hosting Migratie Expert Team",
    publishedDate: "2024-01-01",
    modifiedDate: "2024-01-01",
    image: "/images/security-og.jpg",
    category: "Tech Oplossingen"
  }
};

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Only process blog post pages
  if (!pathname.startsWith("/blog/")) {
    return;
  }

  // Extract blog slug from URL
  const slug = pathname.replace("/blog/", "").replace(/\/$/, "");
  
  // Get metadata for this blog post
  const metadata = blogMetadata[slug];
  
  if (!metadata) {
    // If no metadata found, let the normal SPA handle it
    return;
  }

  // Fetch the original HTML
  const response = await context.next();
  const html = await response.text();

  // Generate canonical URL
  const canonicalUrl = `${url.origin}${pathname}`;

  // Generate structured data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": metadata.title,
    "description": metadata.description,
    "image": `${url.origin}${metadata.image}`,
    "datePublished": metadata.publishedDate,
    "dateModified": metadata.modifiedDate,
    "author": {
      "@type": "Organization",
      "name": metadata.author,
      "url": url.origin
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cloud Hosting Migratie",
      "logo": {
        "@type": "ImageObject",
        "url": `${url.origin}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "articleSection": metadata.category,
    "keywords": metadata.keywords
  };

  // Create enhanced meta tags
  const enhancedMetaTags = `
    <!-- Enhanced SEO Meta Tags -->
    <title>${metadata.title}</title>
    <meta name="description" content="${metadata.description}">
    <meta name="keywords" content="${metadata.keywords}">
    <meta name="author" content="${metadata.author}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${metadata.title}">
    <meta property="og:description" content="${metadata.description}">
    <meta property="og:image" content="${url.origin}${metadata.image}">
    <meta property="og:site_name" content="Cloud Hosting Migratie">
    <meta property="article:published_time" content="${metadata.publishedDate}">
    <meta property="article:modified_time" content="${metadata.modifiedDate}">
    <meta property="article:section" content="${metadata.category}">
    <meta property="article:tag" content="${metadata.keywords.split(',')[0].trim()}">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${metadata.title}">
    <meta name="twitter:description" content="${metadata.description}">
    <meta name="twitter:image" content="${url.origin}${metadata.image}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(structuredData, null, 2)}
    </script>
  `;

  // Inject enhanced meta tags into HTML head
  const enhancedHtml = html.replace(
    "</head>",
    `${enhancedMetaTags}\n  </head>`
  );

  // Return enhanced HTML with proper headers
  return new Response(enhancedHtml, {
    status: 200,
    headers: {
      ...response.headers,
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400"
    }
  });
};
