import BlogHeader from "@/components/BlogHeader";
import HeroSection from "@/components/HeroSection";
import BlogGrid from "@/components/BlogGrid";
import NewsletterSection from "@/components/NewsletterSection";
import BlogFooter from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <HeroSection />
        <BlogGrid />
        <NewsletterSection />
      </main>
      <BlogFooter />
    </div>
  );
};

export default Index;
