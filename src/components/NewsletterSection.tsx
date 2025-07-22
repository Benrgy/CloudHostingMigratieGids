import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const NewsletterSection = () => {
  const benefits = [
    "Wekelijkse expert inzichten",
    "Exclusieve migratie gidsen", 
    "Vroege toegang tot nieuwe content",
    "Industrie trend updates"
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
              Blijf <span className="bg-gradient-primary bg-clip-text text-transparent">Geïnformeerd</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Word onderdeel van duizenden professionals die vertrouwen op onze nieuwsbrief voor de laatste inzichten in cloud migratie en SEO optimalisatie.
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
              placeholder="Voer je e-mailadres in"
              className="flex-1 h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 px-8"
            >
              Abonneren
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Geen spam. Uitschrijven kan altijd. Jouw privacy is beschermd.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;