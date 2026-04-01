import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const blogPosts = [
    {
      title: "SEO Gids voor Cloud Hosting 2026: Complete Handleiding",
      excerpt: "Ontdek de krachtigste SEO strategieën voor cloud-gehoste websites in 2026. Technische optimalisatie, AI Overview targeting en content strategie voor hogere rankings.",
      date: "1 april 2026",
      category: "SEO Strategieën",
      href: "/blog/seo-gids-2024",
      featured: true,
    },
    {
      title: "Cloud Migratie Best Practices 2026: Stappenplan & Checklist",
      excerpt: "Bewezen best practices voor cloud hosting migratie. Complete stappenplan met security, compliance en kostenoptimalisatie voor Nederlandse bedrijven.",
      date: "28 maart 2026",
      category: "Cloud Migratie",
      href: "/blog/cloud-migratie-best-practices",
      featured: true,
    },
    {
      title: "Website Performance Optimalisatie: Van Traag naar Razendsnel",
      excerpt: "Verbeter uw website snelheid met geavanceerde performance optimalisatie technieken voor cloud hosting. Core Web Vitals en CDN strategieën.",
      date: "25 maart 2026",
      category: "Performance Tips",
      href: "/blog/performance-optimalisatie",
      featured: true,
    },
    {
      title: "Cloud Hosting Vergelijking 2026: AWS vs Azure vs Google Cloud",
      excerpt: "Complete vergelijking van de beste cloud hosting oplossingen. Kosten, features en performance van AWS, Azure, Google Cloud en DigitalOcean.",
      date: "20 maart 2026",
      category: "Tech Oplossingen",
      href: "/blog/moderne-hosting-oplossingen",
      featured: false,
    },
    {
      title: "SEO Analytics voor Cloud Websites: Meten is Weten",
      excerpt: "Leer SEO performance meten met Google Analytics 4 en Search Console. Datagedreven optimalisatie voor cloud-gehoste websites.",
      date: "15 maart 2026",
      category: "SEO Tools",
      href: "/blog/seo-analytics-cloud",
      featured: false,
    },
    {
      title: "Cloud Security Best Practices 2026: Beveiliging & Compliance",
      excerpt: "Bescherm uw cloud infrastructuur met bewezen security best practices. Encryptie, zero-trust architectuur en ISO27001 compliance.",
      date: "10 maart 2026",
      category: "Tech Oplossingen",
      href: "/blog/beveiliging-cloud-omgevingen",
      featured: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Laatste <span className="bg-gradient-primary bg-clip-text text-transparent">Artikelen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert inzichten over cloud hosting migratie, SEO optimalisatie en moderne web technologieën voor Nederlandse bedrijven in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              href={post.href}
              featured={post.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
