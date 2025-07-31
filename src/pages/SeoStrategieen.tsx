import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Target, BarChart3, CheckCircle } from "lucide-react";

const SeoStrategieen = () => {
  const strategies = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Ontdek de zoekwoorden die uw doelgroep gebruikt en optimaliseer uw content daarop."
    },
    {
      icon: TrendingUp,
      title: "Technical SEO",
      description: "Verbeter de technische aspecten van uw website voor betere zoekresultaten."
    },
    {
      icon: Target,
      title: "Content Strategy",
      description: "Creëer waardevolle content die aansluit bij uw doelgroep en zoekmachines."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor en analyseer uw SEO prestaties met geavanceerde tools en metrics."
    }
  ];

  const tips = [
    "Optimaliseer uw pagina snelheid voor betere rankings",
    "Gebruik semantische HTML structuur",
    "Creëer kwalitatieve backlinks",
    "Optimaliseer voor mobile-first indexing",
    "Implementeer structured data markup",
    "Focus op user experience en Core Web Vitals"
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            SEO Expert
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            SEO Strategieën
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Verhoog uw online zichtbaarheid met bewezen SEO strategieën. 
            Van technische optimalisatie tot content marketing, wij delen onze expertise.
          </p>
        </div>

        {/* Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze SEO Strategieën</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <strategy.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{strategy.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SEO Tips */}
        <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Praktische SEO Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-0.5" />
                <span className="text-lg">{tip}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>De Kracht van SEO</h2>
          <p>
            SEO is een langetermijn investering die uw online zichtbaarheid drastisch kan verbeteren. 
            Door de juiste strategieën toe te passen, kunt u organisch verkeer aantrekken en uw 
            doelgroep bereiken op het moment dat zij naar uw diensten zoeken.
          </p>
          
          <h2>Moderne SEO Trends</h2>
          <p>
            De SEO wereld evolueert constant. Van AI-gestuurde zoekalgorithmes tot voice search 
            optimalisatie, wij blijven op de hoogte van de laatste trends om uw website relevant 
            te houden in de zoekresultaten.
          </p>

          <h2>Meetbare Resultaten</h2>
          <p>
            Onze SEO strategieën zijn gebaseerd op data en gericht op meetbare resultaten. 
            Wij helpen u niet alleen met het implementeren van SEO best practices, maar ook 
            met het monitoren en optimaliseren van uw prestaties.
          </p>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default SeoStrategieen;