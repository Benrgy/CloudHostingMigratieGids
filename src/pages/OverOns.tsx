import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const OverOns = () => {
  const values = [
    {
      icon: Target,
      title: "Expertise",
      description: "Jarenlange ervaring in cloud migratie, SEO en webdevelopment"
    },
    {
      icon: Users,
      title: "Klanttevredenheid",
      description: "Wij zetten de behoeften van onze klanten altijd centraal"
    },
    {
      icon: Lightbulb,
      title: "Innovatie",
      description: "Wij blijven voorop lopen met de nieuwste technologieën en trends"
    },
    {
      icon: Award,
      title: "Kwaliteit",
      description: "Hoge standaarden en bewezen resultaten voor elke klant"
    }
  ];

  const stats = [
    { number: "500+", label: "Succesvolle Migraties" },
    { number: "10+", label: "Jaar Ervaring" },
    { number: "98%", label: "Klanttevredenheid" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Over Ons
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Ons Verhaal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Al meer dan 10 jaar helpen wij bedrijven met hun digitale transformatie. 
            Van cloud migratie tot SEO optimalisatie, wij zijn uw vertrouwde partner.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Our Mission */}
        <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Wij geloven dat elke organisatie recht heeft op een moderne, veilige en schaalbare 
              digitale infrastructuur. Onze missie is om bedrijven te begeleiden bij hun digitale 
              transformatie met de juiste technologie, strategieën en expertise.
            </p>
          </div>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Waarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Waarom Cloud Hosting Migratie?</h2>
          <p>
            Sinds onze oprichting hebben wij ons gespecialiseerd in het helpen van bedrijven 
            bij hun overstap naar moderne, cloud-gebaseerde infrastructuren. Wij begrijpen 
            dat elke migratie uniek is en benaderen elk project met de aandacht en expertise 
            die het verdient.
          </p>
          
          <h2>Onze Expertise</h2>
          <p>
            Ons team bestaat uit ervaren professionals met diepgaande kennis van cloud platforms, 
            SEO best practices en moderne webdevelopment technieken. Wij blijven continu leren 
            en ons ontwikkelen om onze klanten de beste service te kunnen bieden.
          </p>

          <h2>Samenwerking & Partnerschap</h2>
          <p>
            Wij geloven in langdurige partnerships met onze klanten. Na een succesvolle migratie 
            of implementatie blijven wij beschikbaar voor ondersteuning, optimalisatie en verdere 
            ontwikkeling van uw digitale infrastructuur.
          </p>

          <h2>De Toekomst</h2>
          <p>
            De digitale wereld evolueert snel en wij evolueren mee. Of het nu gaat om nieuwe 
            cloud technologieën, AI-integraties of emerging web standards, wij zorgen ervoor 
            dat onze klanten altijd voorop lopen in hun sector.
          </p>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default OverOns;