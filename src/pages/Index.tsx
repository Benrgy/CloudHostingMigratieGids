import BlogHeader from "@/components/BlogHeader";
import HeroSection from "@/components/HeroSection";
import BlogGrid from "@/components/BlogGrid";
import NewsletterSection from "@/components/NewsletterSection";
import BlogFooter from "@/components/BlogFooter";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main>
        <HeroSection />
        <BlogGrid />
        <FAQSection />
        <NewsletterSection />
      </main>
      <BlogFooter />
    </div>
  );
};

export default Index;
