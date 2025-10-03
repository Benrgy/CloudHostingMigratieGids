import { Context } from "https://edge.netlify.com";

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  featured_image_alt?: string;
  category?: string;
  slug: string;
  status: string;
  published_at?: string;
  updated_at: string;
  created_at: string;
}

const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  if (!SUPABASE_SERVICE_KEY || !SUPABASE_URL) {
    console.error('Missing SUPABASE environment variables');
    return null;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?slug=eq.${slug}&status=eq.published&select=*`,
      {
        headers: {
          'apikey': SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
      }
    );

    if (!response.ok) {
      console.error(`Supabase request failed: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateFAQSchema(content: string): string {
  // Match FAQ patterns like: ### 1. **Question?**
  const faqRegex = /### \d+\.\s+\*\*(.*?)\*\*\n(.*?)(?=\n### \d+\.|$)/gs;
  const faqs = [];
  let match;
  
  while ((match = faqRegex.exec(content)) !== null) {
    const question = match[1].trim();
    let answerText = match[2].trim();
    
    // Clean answer text
    answerText = answerText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    
    if (question && answerText && question.includes('?')) {
      faqs.push({
        question: escapeHtml(question),
        answer: escapeHtml(answerText.substring(0, 500))
      });
    }
  }
  
  if (faqs.length === 0) return '';
  
  return `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${faqs.map(faq => `{
          "@type": "Question",
          "name": "${faq.question}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${faq.answer}"
          }
        }`).join(',')}
      ]
    }
    </script>
  `;
}

function generateSEOTags(post: BlogPost, url: URL): string {
  const title = post.meta_title || `${post.title} - Cloud Hosting Migratie`;
  const description = post.meta_description || post.excerpt || `Lees "${post.title}" op Cloud Hosting Migratie - expert inzichten over cloud migratie en hosting.`;
  const canonicalUrl = `${url.origin}/blog/${post.slug}`;
  
  // Check for FAQ content
  const hasFAQ = post.content && (
    post.content.includes('## Veelgestelde Vragen') || 
    post.content.includes('## FAQ') ||
    post.content.includes('## Frequently Asked Questions')
  );
  const faqSchema = hasFAQ ? generateFAQSchema(post.content) : '';
  
  return `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="Cloud Hosting Migratie Expert Team">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:locale" content="nl_NL">
    <meta property="og:site_name" content="Cloud Hosting Migratie">
    ${post.featured_image ? `<meta property="og:image" content="${escapeHtml(post.featured_image)}">` : ''}
    ${post.featured_image_alt ? `<meta property="og:image:alt" content="${escapeHtml(post.featured_image_alt)}">` : ''}
    
    <!-- Article Metadata -->
    <meta property="article:published_time" content="${post.published_at || post.created_at}">
    <meta property="article:modified_time" content="${post.updated_at}">
    ${post.category ? `<meta property="article:section" content="${escapeHtml(post.category)}">` : ''}
    <meta property="article:author" content="Cloud Hosting Migratie">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    ${post.featured_image ? `<meta name="twitter:image" content="${escapeHtml(post.featured_image)}">` : ''}
    ${post.featured_image_alt ? `<meta name="twitter:image:alt" content="${escapeHtml(post.featured_image_alt)}">` : ''}
    
    <!-- Structured Data - BlogPosting -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${escapeHtml(post.title)}",
      "description": "${escapeHtml(post.excerpt || '')}",
      ${post.featured_image ? `"image": {
        "@type": "ImageObject",
        "url": "${escapeHtml(post.featured_image)}",
        ${post.featured_image_alt ? `"caption": "${escapeHtml(post.featured_image_alt)}"` : ''}
      },` : ''}
      "url": "${canonicalUrl}",
      "datePublished": "${post.published_at || post.created_at}",
      "dateModified": "${post.updated_at}",
      "author": {
        "@type": "Organization",
        "name": "Cloud Hosting Migratie",
        "url": "${url.origin}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cloud Hosting Migratie",
        "logo": {
          "@type": "ImageObject",
          "url": "${url.origin}/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${canonicalUrl}"
      },
      ${post.category ? `"articleSection": "${escapeHtml(post.category)}",` : ''}
      "inLanguage": "nl-NL"
    }
    </script>
    ${faqSchema}
  `;
}

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only process blog post pages, skip blog index
  if (!pathname.startsWith('/blog/') || pathname === '/blog' || pathname === '/blog/') {
    return;
  }

  // Extract slug from URL
  const slug = pathname.replace('/blog/', '').replace(/\/$/, '');
  
  // Fetch blog post from Supabase
  const post = await fetchBlogPost(slug);
  
  if (!post) {
    console.log(`No published post found for slug: ${slug}`);
    return; // Let the SPA handle 404
  }

  // Fetch original HTML
  const response = await context.next();
  const html = await response.text();
  
  // Generate SEO tags with Supabase data
  const seoTags = generateSEOTags(post, url);
  
  // Replace existing title tag and inject all SEO tags
  const modifiedHtml = html.replace(
    /<title>\s*.*?\s*<\/title>/i,
    seoTags
  );

  return new Response(modifiedHtml, {
    status: response.status,
    headers: {
      ...response.headers,
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400'
    },
  });
};
