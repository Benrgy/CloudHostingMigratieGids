import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Database, Shield, CheckCircle } from "lucide-react";

const CloudMigratie = () => {
  const benefits = [
    "Verhoogde schaalbaarheid en flexibiliteit",
    "Kostenbesparingen op infrastructuur",
    "Verbeterde beveiliging en compliance",
    "24/7 beschikbaarheid en uptime"
  ];

  const steps = [
    { icon: Database, title: "Assessment", description: "Analyse van huidige infrastructuur" },
    { icon: Cloud, title: "Planning", description: "Strategische migratie roadmap" },
    { icon: Server, title: "Migratie", description: "Gefaseerde overstap naar cloud" },
    { icon: Shield, title: "Optimalisatie", description: "Performance en beveiliging optimaliseren" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Cloud Migratie Expert
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Cloud Hosting Migratie
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Maak een naadloze overstap naar de cloud met onze expertbegeleiding. 
            Van planning tot implementatie, wij zorgen voor een succesvolle migratie.
          </p>
        </div>

        {/* Benefits */}
        <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Voordelen van Cloud Migratie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Migration Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Ons Migratie Proces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Waarom Cloud Migratie?</h2>
          <p>
            Cloud migratie is essentieel voor moderne bedrijven die willen concurreren in het digitale tijdperk. 
            Door over te stappen naar cloud hosting profiteert u van de nieuwste technologieën, verbeterde beveiliging 
            en aanzienlijke kostenbesparingen.
          </p>
          
          <h2>Onze Expertise</h2>
          <p>
            Met jarenlange ervaring in cloud migraties hebben wij honderden bedrijven succesvol geholpen bij hun 
            overstap naar de cloud. Van kleine startups tot grote enterprises, wij hebben de kennis en ervaring 
            om uw migratie tot een succes te maken.
          </p>

          <h2>Begin Vandaag</h2>
          <p>
            Klaar om de overstap te maken? Neem contact met ons op voor een gratis consultatie en ontdek hoe 
            cloud migratie uw bedrijf kan transformeren.
          </p>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default CloudMigratie;