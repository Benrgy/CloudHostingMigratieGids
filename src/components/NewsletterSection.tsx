import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const NewsletterSection = () => {
  const benefits = [
    "Weekly expert insights",
    "Exclusive migration guides", 
    "Early access to new content",
    "Industry trend updates"
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card/90 backdrop-blur-sm border-border/50 shadow-premium">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay <span className="bg-gradient-primary bg-clip-text text-transparent">Informed</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of professionals who rely on our newsletter for the latest insights in cloud migration and SEO optimization.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 px-8"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            No spam. Unsubscribe at any time. Your privacy is protected.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;