import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, BarChart3, Zap, Target, ExternalLink, Download } from "lucide-react";

const SeoTools = () => {
  const tools = [
    {
      icon: Search,
      name: "Google Search Console",
      description: "Gratis tool van Google voor het monitoren van uw website prestaties in zoekresultaten",
      category: "Gratis",
      features: ["Indexatie monitoring", "Zoekprestaties", "Technical issues"],
      link: "https://search.google.com/search-console"
    },
    {
      icon: BarChart3,
      name: "Google Analytics 4",
      description: "Uitgebreide website analytics voor het meten van gebruikersgedrag en conversies",
      category: "Gratis",
      features: ["Traffic analyse", "Conversie tracking", "Audience insights"],
      link: "https://analytics.google.com"
    },
    {
      icon: Target,
      name: "Google Keyword Planner",
      description: "Keyword research tool voor het vinden van relevante zoekwoorden en zoekvolumes",
      category: "Gratis",
      features: ["Keyword research", "Zoekvolume data", "Competitie analyse"],
      link: "https://ads.google.com/home/tools/keyword-planner/"
    },
    {
      icon: Zap,
      name: "PageSpeed Insights",
      description: "Test de snelheid van uw website en krijg concrete verbeteringsvoorstellen",
      category: "Gratis",
      features: ["Core Web Vitals", "Performance score", "Optimalisatie tips"],
      link: "https://pagespeed.web.dev/"
    }
  ];

  const premiumTools = [
    {
      name: "SEMrush",
      description: "All-in-one SEO suite voor professionals met uitgebreide competitor analyse",
      price: "Vanaf €119/maand",
      features: ["Competitor research", "Keyword tracking", "Backlink analyse", "Site audit"]
    },
    {
      name: "Ahrefs",
      description: "Krachtige backlink en keyword research tool met grootste link database",
      price: "Vanaf €99/maand",
      features: ["Backlink analyse", "Keyword explorer", "Content gap analyse", "Site audit"]
    },
    {
      name: "Screaming Frog",
      description: "Technical SEO crawler voor uitgebreide website analyse",
      price: "Gratis/£149 per jaar",
      features: ["Site crawling", "Technical SEO audit", "XML sitemaps", "Redirect chains"]
    }
  ];

  const checklists = [
    {
      title: "Technical SEO Checklist",
      items: [
        "Website snelheid optimalisatie",
        "Mobile-first indexering",
        "SSL certificaat implementatie",
        "XML sitemap aanmaken",
        "Robots.txt optimalisatie",
        "Schema markup implementeren"
      ]
    },
    {
      title: "On-Page SEO Checklist",
      items: [
        "Title tags optimaliseren",
        "Meta descriptions schrijven",
        "Header structuur (H1-H6)",
        "Internal linking strategie",
        "Alt-tags voor afbeeldingen",
        "URL structuur optimaliseren"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            SEO Tools
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            SEO Tools & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De beste gratis en betaalde SEO tools om uw website prestaties te verbeteren. 
            Van keyword research tot technical audits, hier vindt u alles wat u nodig heeft.
          </p>
        </div>

        {/* Free Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Gratis SEO Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <tool.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{tool.name}</h3>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {tool.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full bg-gradient-primary text-primary-foreground">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    Open Tool
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Premium SEO Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {premiumTools.map((tool, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <div className="text-lg font-semibold text-primary mb-3">{tool.price}</div>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  Meer Informatie
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* SEO Checklists */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">SEO Checklists</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {checklists.map((checklist, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-premium p-8">
                <h3 className="text-2xl font-bold mb-6">{checklist.title}</h3>
                <ul className="space-y-3 mb-6">
                  {checklist.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-primary rounded"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-primary p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Hulp Nodig met SEO?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-6">
            Laat onze SEO experts u helpen met een complete audit en strategie voor uw website.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Vraag SEO Audit Aan
          </Button>
        </Card>
      </main>
      <BlogFooter />
    </div>
  );
};

export default SeoTools;