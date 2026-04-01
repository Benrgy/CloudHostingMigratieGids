import { ArrowRight, BookOpen, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const stats = [
    { icon: BookOpen, label: "Succesvolle Cloud Migraties", value: "500+" },
    { icon: Users, label: "Gemiddelde Kostenbesparing", value: "40%" },
    { icon: TrendingUp, label: "Uptime Garantie", value: "99.9%" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Signal */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Gecertificeerde AWS, Azure & Google Cloud Partners</span>
          </div>

          {/* Main Heading - H1 with primary keyword */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Cloud Hosting Migratie
            </span>
            <br />
            <span className="text-foreground">Bespaar 40% op Hosting Kosten</span>
          </h1>

          {/* Subtitle with longtail keywords */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            <strong>500+ succesvolle cloud migraties in Nederland.</strong> Professionele begeleiding bij server migratie naar AWS, Azure of Google Cloud. 
            Verhoog prestaties met 300% én krijg 99.9% uptime gegarandeerd.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-premium transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="/contact">
                Gratis Migratie Consultatie
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
              asChild
            >
              <a href="/case-studies">Bekijk Resultaten</a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
