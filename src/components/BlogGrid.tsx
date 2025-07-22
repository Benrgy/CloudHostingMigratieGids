import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const blogPosts = [
    {
      title: "Technical SEO Guide 2024",
      excerpt: "Master the latest technical SEO strategies to boost your website's performance and search rankings with our comprehensive guide.",
      date: "22 Jul 2024",
      category: "SEO",
      href: "./post/seo-guide/index.html",
      featured: true
    },
    {
      title: "Cloud Migration Best Practices",
      excerpt: "Learn proven strategies for seamless cloud migration without downtime or data loss.",
      date: "18 Jul 2024", 
      category: "Cloud Hosting",
      href: "#"
    },
    {
      title: "Performance Optimization Techniques",
      excerpt: "Boost your website speed with advanced optimization techniques and tools.",
      date: "15 Jul 2024",
      category: "Tech",
      href: "#"
    },
    {
      title: "Modern Hosting Solutions Compared",
      excerpt: "A detailed comparison of the latest hosting solutions for businesses in 2024.",
      date: "12 Jul 2024",
      category: "Hosting",
      href: "#"
    },
    {
      title: "SEO Analytics & Tracking",
      excerpt: "Set up comprehensive SEO tracking to measure and improve your organic growth.",
      date: "8 Jul 2024",
      category: "SEO",
      href: "#"
    },
    {
      title: "Security in Cloud Environments",
      excerpt: "Essential security practices for protecting your cloud infrastructure and data.",
      date: "5 Jul 2024",
      category: "Security",
      href: "#"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with our expert insights on cloud migration, SEO optimization, and modern web technologies.
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