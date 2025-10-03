import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const blogPosts = [
    {
      title: "Ultieme SEO Gids 2024: Complete Handleiding voor Cloud Hosting",
      excerpt: "Ontdek de krachtigste SEO strategieën voor cloud-gehoste websites. Van technische optimalisatie tot AI-gedreven content marketing.",
      date: "15 januari 2024",
      category: "SEO Strategieën",
      href: "/blog/seo-gids-2024",
      featured: true,
    },
    {
      title: "Cloud Migratie Best Practices: Complete Stappenplan",
      excerpt: "Leer de beste praktijken voor een succesvolle cloud migratie. Van planning tot uitvoering, inclusief security en compliance.",
      date: "10 januari 2024",
      category: "Cloud Migratie",
      href: "/blog/cloud-migratie-best-practices",
      featured: true,
    },
    {
      title: "Website Performance Optimalisatie: Van Traag naar Razendsnel",
      excerpt: "Verbeter je website snelheid met deze geavanceerde performance optimalisatie technieken voor cloud hosting omgevingen.",
      date: "8 januari 2024",
      category: "Performance Tips",
      href: "/blog/performance-optimalisatie",
      featured: true,
    },
    {
      title: "Moderne Cloud Hosting Oplossingen: Complete Vergelijking",
      excerpt: "Vergelijk de beste cloud hosting oplossingen van 2024. AWS, Azure, Google Cloud en meer - ontdek wat het beste past.",
      date: "5 januari 2024",
      category: "Tech Oplossingen",
      href: "/blog/moderne-hosting-oplossingen",
      featured: false,
    },
    {
      title: "SEO Analytics voor Cloud Websites: Meten is Weten",
      excerpt: "Leer hoe je SEO performance meet en optimaliseert voor cloud-gehoste websites met Google Analytics en Search Console.",
      date: "3 januari 2024",
      category: "SEO Tools",
      href: "/blog/seo-analytics-cloud",
      featured: false,
    },
    {
      title: "Security Best Practices voor Cloud Omgevingen",
      excerpt: "Bescherm je cloud infrastructuur met deze beveiliging best practices. Van encryption tot compliance.",
      date: "1 januari 2024",
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
            Blijf vooroplopen met onze expert inzichten over cloud migratie, SEO optimalisatie en moderne web technologieën.
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