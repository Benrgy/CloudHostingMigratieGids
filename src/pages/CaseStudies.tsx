import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, CheckCircle, ArrowRight, Calendar } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Migratie",
      company: "TechRetail B.V.",
      category: "Cloud Migratie",
      challenge: "Verouderde on-premise infrastructuur die niet kon schalen tijdens piekverkoop",
      solution: "Volledige migratie naar AWS met auto-scaling en CDN implementatie",
      results: [
        "99.9% uptime tijdens Black Friday",
        "50% snellere laadtijden",
        "40% kostenreductie infrastructuur"
      ],
      duration: "8 weken",
      featured: true
    },
    {
      title: "SEO Transformatie Manufacturing",
      company: "IndustriePro Nederland",
      category: "SEO Strategie",
      challenge: "Lage online zichtbaarheid in competitieve B2B markt",
      solution: "Complete technical SEO overhaul en content marketing strategie",
      results: [
        "300% toename organisch verkeer",
        "Top 3 rankings voor hoofdzoekwoorden",
        "150% meer B2B leads"
      ],
      duration: "6 maanden"
    },
    {
      title: "Startup Tech Stack Implementatie",
      company: "FinTech Innovations",
      category: "Tech Oplossingen",
      challenge: "Snelle ontwikkeling van MVP met beperkte resources",
      solution: "Modern tech stack met React, Node.js en cloud-native architectuur",
      results: [
        "6 weken van concept naar MVP",
        "Schaalbare architectuur voor 100k+ gebruikers",
        "€2M funding opgehaald"
      ],
      duration: "12 weken"
    },
    {
      title: "Legacy System Modernisering",
      company: "TransportGigant",
      category: "Cloud Migratie",
      challenge: "25+ jaar oude systemen die bedrijfsgroei belemmeren",
      solution: "Gefaseerde migratie naar microservices architectuur",
      results: [
        "Zero downtime migratie",
        "60% snellere transactieverwerking",
        "Moderne API voor partners"
      ],
      duration: "16 weken"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Case Studies
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Succesverhalen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ontdek hoe wij bedrijven hebben geholpen bij hun digitale transformatie. 
            Van cloud migraties tot SEO optimalisaties, hier zijn onze succesverhalen.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 overflow-hidden ${
                study.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {study.category}
                      </Badge>
                      {study.featured && (
                        <Badge className="bg-gradient-primary text-primary-foreground">
                          Uitgelicht
                        </Badge>
                      )}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">{study.title}</h2>
                    <div className="flex items-center text-lg text-muted-foreground mb-6">
                      <Building2 className="w-5 h-5 mr-2" />
                      {study.company}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
                            Uitdaging
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                            Oplossing
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">
                          Resultaten
                        </h3>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                              <span className="text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground">
                      Wilt u ook zulke resultaten behalen?
                    </p>
                    <Button className="bg-gradient-primary text-primary-foreground hover:shadow-premium">
                      Start Uw Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary p-8 text-center mt-16">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Klaar voor Uw Succesverhaal?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
            Laat ons u helpen bij uw volgende digitale transformatie. 
            Samen maken we van uw uitdaging een succesverhaal.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Plan Gratis Consultatie
          </Button>
        </Card>
      </main>
      <BlogFooter />
    </div>
  );
};

export default CaseStudies;