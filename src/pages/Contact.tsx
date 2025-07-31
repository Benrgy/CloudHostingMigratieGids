import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@cloudhostingmigratie.nl",
      description: "Stuur ons een email voor vragen"
    },
    {
      icon: Phone,
      title: "Telefoon",
      value: "+31 (0)20 123 4567",
      description: "Bel ons voor directe hulp"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Amsterdam, Nederland",
      description: "Centraal gelegen voor persoonlijke afspraken"
    },
    {
      icon: Clock,
      title: "Openingstijden",
      value: "Ma-Vr 9:00-17:00",
      description: "Wij zijn er voor u"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Contact
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Neem Contact Op
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Heeft u vragen over cloud migratie, SEO of technische oplossingen? 
            Wij staan klaar om u te helpen met uw digitale uitdagingen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-premium p-8">
            <h2 className="text-2xl font-bold mb-6">Stuur ons een bericht</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Voornaam</label>
                  <Input placeholder="Uw voornaam" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Achternaam</label>
                  <Input placeholder="Uw achternaam" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="uw.email@voorbeeld.nl" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Onderwerp</label>
                <Input placeholder="Waar kunnen wij u mee helpen?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Bericht</label>
                <Textarea 
                  placeholder="Vertel ons meer over uw project of vraag..."
                  className="min-h-32"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-premium">
                Verstuur Bericht
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Contact Informatie</h2>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.value}</p>
                    <p className="text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Call to Action */}
            <Card className="bg-gradient-primary p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                Klaar voor de volgende stap?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Plan een gratis consultatie en ontdek hoe wij uw bedrijf kunnen helpen.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Plan Gratis Consultatie
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default Contact;