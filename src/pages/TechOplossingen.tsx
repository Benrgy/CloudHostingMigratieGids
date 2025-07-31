import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, CheckCircle, Cpu } from "lucide-react";

const TechOplossingen = () => {
  const solutions = [
    {
      icon: Code,
      title: "Web Development",
      description: "Moderne websites en web applicaties gebouwd met de nieuwste technologieën."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native en cross-platform mobile applicaties voor iOS en Android."
    },
    {
      icon: Globe,
      title: "API Integraties",
      description: "Naadloze integraties tussen verschillende systemen en platforms."
    },
    {
      icon: Zap,
      title: "Performance Optimalisatie",
      description: "Verbeter de snelheid en prestaties van uw bestaande applicaties."
    },
    {
      icon: Cpu,
      title: "Cloud Infrastructure",
      description: "Schaalbare en betrouwbare cloud infrastructuur oplossingen."
    }
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "AWS & Azure",
    "Docker & Kubernetes",
    "PostgreSQL & MongoDB"
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Tech Expert
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Tech Oplossingen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovatieve technische oplossingen voor moderne bedrijven. 
            Van web development tot cloud infrastructure, wij realiseren uw digitale ambities.
          </p>
        </div>

        {/* Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Tech Oplossingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <solution.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Onze Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Waarom Kiezen voor Moderne Tech?</h2>
          <p>
            In het huidige digitale landschap is het cruciaal om de juiste technologieën te kiezen. 
            Wij helpen bedrijven bij het selecteren en implementeren van technische oplossingen die 
            niet alleen vandaag werken, maar ook toekomstbestendig zijn.
          </p>
          
          <h2>Onze Aanpak</h2>
          <p>
            Elk project begint met een grondige analyse van uw behoeften en doelstellingen. 
            Vervolgens ontwerpen wij een technische architectuur die schaalbaarheid, beveiliging 
            en prestaties combineert. Onze agile development aanpak zorgt voor snelle iteraties 
            en continue feedback.
          </p>

          <h2>Van Concept tot Productie</h2>
          <p>
            Wij begeleiden u door het hele development proces, van initieel concept tot 
            productie deployment. Met ervaring in diverse industrieën kunnen wij complexe 
            technische uitdagingen omzetten in elegante, werkende oplossingen.
          </p>

          <h2>Onderhoud en Support</h2>
          <p>
            Een goede technische oplossing vereist ook goede ondersteuning. Wij bieden 
            24/7 monitoring, regelmatige updates en proactief onderhoud om ervoor te zorgen 
            dat uw systemen optimaal blijven presteren.
          </p>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default TechOplossingen;