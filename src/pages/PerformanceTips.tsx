import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Image, Code, Database, Gauge, CheckCircle } from "lucide-react";

const PerformanceTips = () => {
  const tips = [
    {
      icon: Zap,
      category: "Core Web Vitals",
      title: "Largest Contentful Paint (LCP) Optimaliseren",
      description: "Verbeter de laadtijd van uw grootste content element",
      techniques: [
        "Optimaliseer afbeeldingen met moderne formaten (WebP, AVIF)",
        "Gebruik een Content Delivery Network (CDN)",
        "Implementeer lazy loading voor images",
        "Minimaliseer render-blocking CSS en JavaScript"
      ],
      impact: "Tot 40% snellere eerste render"
    },
    {
      icon: Gauge,
      category: "Core Web Vitals", 
      title: "Cumulative Layout Shift (CLS) Verminderen",
      description: "Voorkom onverwachte layout verschuivingen",
      techniques: [
        "Specificeer altijd width en height voor afbeeldingen",
        "Reserveer ruimte voor dynamische content",
        "Gebruik transform i.p.v. layout properties voor animaties",
        "Preload belangrijke fonts om FOIT/FOUT te voorkomen"
      ],
      impact: "Stabiele layout en betere UX"
    },
    {
      icon: Image,
      category: "Afbeelding Optimalisatie",
      title: "Moderne Afbeelding Formaten",
      description: "Reduceer bestandsgrootte zonder kwaliteitsverlies",
      techniques: [
        "Gebruik WebP voor moderne browsers",
        "Implementeer AVIF voor de beste compressie",
        "Stel responsive images in met srcset",
        "Comprimeer afbeeldingen met tools zoals TinyPNG"
      ],
      impact: "50-80% kleinere bestandsgroottes"
    },
    {
      icon: Code,
      category: "JavaScript Optimalisatie",
      title: "Code Splitting en Tree Shaking",
      description: "Laad alleen de code die nodig is",
      techniques: [
        "Implementeer route-based code splitting",
        "Gebruik dynamic imports voor grote libraries",
        "Configureer tree shaking in uw bundler",
        "Analyseer bundle size met webpack-bundle-analyzer"
      ],
      impact: "30-60% kleinere JavaScript bundles"
    },
    {
      icon: Database,
      category: "Backend Optimalisatie",
      title: "Database Performance",
      description: "Optimaliseer database queries en caching",
      techniques: [
        "Implementeer database indexing strategisch",
        "Gebruik query caching voor vaak opgevraagde data",
        "Optimaliseer N+1 query problemen",
        "Implementeer connection pooling"
      ],
      impact: "Tot 90% snellere database responses"
    }
  ];

  const tools = [
    {
      name: "Google PageSpeed Insights",
      description: "Gratis tool voor het meten van Core Web Vitals",
      url: "https://pagespeed.web.dev/"
    },
    {
      name: "GTmetrix",
      description: "Uitgebreide performance analyse met waterfall charts",
      url: "https://gtmetrix.com/"
    },
    {
      name: "WebPageTest",
      description: "Geavanceerde testing met verschillende browsers en locaties",
      url: "https://www.webpagetest.org/"
    },
    {
      name: "Lighthouse",
      description: "Chrome DevTools geïntegreerde audit tool",
      url: "https://developers.google.com/web/tools/lighthouse"
    }
  ];

  const quickWins = [
    "Comprimeer alle afbeeldingen voordat u ze uploadt",
    "Activeer GZIP compressie op uw server",
    "Minimaliseer CSS en JavaScript bestanden",
    "Gebruik browser caching voor statische assets",
    "Optimaliseer uw database queries",
    "Implementeer een CDN voor globale distributie",
    "Verwijder ongebruikte plugins en code",
    "Gebruik moderne afbeelding formaten (WebP/AVIF)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Performance Tips
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Website Performance Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Verbeter de snelheid en prestaties van uw website met deze praktische tips en technieken. 
            Van Core Web Vitals tot backend optimalisatie.
          </p>
        </div>

        {/* Quick Wins */}
        <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Performance Wins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickWins.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Detailed Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Gedetailleerde Performance Optimalisaties</h2>
          <div className="space-y-8">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-8">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow flex-shrink-0">
                    <tip.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {tip.category}
                      </Badge>
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {tip.impact}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{tip.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">{tip.description}</p>

                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Implementatie Technieken:</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {tip.techniques.map((technique, techIndex) => (
                          <div key={techIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{technique}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Aanbevolen Performance Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-6">
                <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    Tool Bezoeken
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Web Vitals Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">≤ 2.5s</div>
              <h3 className="text-lg font-semibold mb-2">Largest Contentful Paint</h3>
              <p className="text-muted-foreground">Tijd tot grootste element geladen is</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">≤ 100ms</div>
              <h3 className="text-lg font-semibold mb-2">First Input Delay</h3>
              <p className="text-muted-foreground">Reactietijd op eerste interactie</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">≤ 0.1</div>
              <h3 className="text-lg font-semibold mb-2">Cumulative Layout Shift</h3>
              <p className="text-muted-foreground">Visuele stabiliteit score</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-primary p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Performance Audit Nodig?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-6">
            Laat onze experts een complete performance audit uitvoeren en krijg een 
            gedetailleerd rapport met concrete verbeteringsvoorstellen.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Vraag Performance Audit Aan
          </Button>
        </Card>
      </main>
      <BlogFooter />
    </div>
  );
};

export default PerformanceTips;