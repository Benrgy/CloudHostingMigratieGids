import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, AlertTriangle, Download, Clock } from "lucide-react";

const MigratieGidsen = () => {
  const guides = [
    {
      title: "AWS Cloud Migratie Gids",
      description: "Complete stap-voor-stap handleiding voor migratie naar Amazon Web Services",
      level: "Beginner tot Gevorderd",
      duration: "6-12 weken",
      chapters: [
        "Pre-migratie assessment",
        "AWS account setup en beveiliging",
        "Netwerk architectuur planning",
        "Database migratie strategieën",
        "Applicatie deployment",
        "Monitoring en optimalisatie"
      ],
      featured: true
    },
    {
      title: "Microsoft Azure Migratie",
      description: "Uitgebreide gids voor bedrijven die overstappen naar Microsoft Azure cloud",
      level: "Intermediate",
      duration: "8-14 weken",
      chapters: [
        "Azure fundamentals en setup",
        "Identity en access management",
        "Virtual machine migratie",
        "Azure SQL Database transitie",
        "Backup en disaster recovery",
        "Cost optimization"
      ]
    },
    {
      title: "Google Cloud Platform Migratie",
      description: "Praktische handleiding voor GCP migratie met focus op Kubernetes",
      level: "Gevorderd",
      duration: "10-16 weken",
      chapters: [
        "GCP project structuur",
        "Containerization strategy",
        "Kubernetes cluster setup",
        "CI/CD pipeline implementatie",
        "Monitoring met Stackdriver",
        "Security best practices"
      ]
    },
    {
      title: "Hybrid Cloud Strategie",
      description: "Gids voor het opzetten van een hybride cloud omgeving",
      level: "Expert",
      duration: "12-20 weken",
      chapters: [
        "Hybrid architecture design",
        "On-premise integratie",
        "Data synchronisatie",
        "Network connectivity",
        "Governance en compliance",
        "Performance monitoring"
      ]
    }
  ];

  const migrationPhases = [
    {
      phase: "1. Assessment",
      description: "Evaluatie van huidige infrastructuur en applicaties",
      duration: "2-4 weken",
      tasks: [
        "Inventarisatie van bestaande systemen",
        "Performance baseline meting",
        "Security audit",
        "Afhankelijkheden in kaart brengen"
      ]
    },
    {
      phase: "2. Planning",
      description: "Detailplanning van de migratie strategie",
      duration: "3-6 weken", 
      tasks: [
        "Cloud provider selectie",
        "Architectuur ontwerp",
        "Timeline en milestones",
        "Risk assessment en mitigation"
      ]
    },
    {
      phase: "3. Migratie",
      description: "Gefaseerde uitvoering van de migratie",
      duration: "6-12 weken",
      tasks: [
        "Test omgeving setup",
        "Data migratie",
        "Applicatie deployment",
        "User acceptance testing"
      ]
    },
    {
      phase: "4. Optimalisatie",
      description: "Fine-tuning en continue verbetering",
      duration: "Ongoing",
      tasks: [
        "Performance monitoring",
        "Cost optimization",
        "Security hardening",
        "Team training en documentatie"
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
            Migratie Gidsen
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Cloud Migratie Gidsen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete handleidingen voor een succesvolle cloud migratie. 
            Van planning tot implementatie, onze gidsen begeleiden u door elke stap.
          </p>
        </div>

        {/* Migration Phases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Migratie Proces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationPhases.map((phase, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg">{phase.phase}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{phase.description}</p>
                
                <div className="flex items-center text-sm text-primary mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {phase.duration}
                </div>

                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{task}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Migration Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Onze Migratie Gidsen</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-card border-0 shadow-card hover:shadow-premium transition-all duration-300 p-8 ${
                  guide.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-primary" />
                    {guide.featured && (
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        Populair
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary">{guide.level}</Badge>
                </div>

                <h3 className="text-2xl font-bold mb-3">{guide.title}</h3>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                
                <div className="flex items-center text-sm text-primary mb-6">
                  <Clock className="w-4 h-4 mr-1" />
                  Geschatte duur: {guide.duration}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Hoofdstukken:</h4>
                  <ul className="space-y-2">
                    {guide.chapters.map((chapter, chapterIndex) => (
                      <li key={chapterIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                        <span className="text-muted-foreground">{chapter}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-primary text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Download Gids
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Warning Box */}
        <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 p-6 mb-16">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-0.5" />
            <div>
              <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">
                Belangrijk: Backup en Testing
              </h3>
              <p className="text-orange-700 dark:text-orange-300">
                Voordat u begint met een migratie, zorg er altijd voor dat u complete backups heeft 
                en test het migratieproces eerst in een geïsoleerde omgeving. Een goede voorbereiding 
                voorkomt data verlies en downtime.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-primary p-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Professionele Migratieondersteuning Nodig?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-6">
            Onze experts kunnen u begeleiden bij elke stap van uw cloud migratie. 
            Van planning tot implementatie en optimalisatie.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Vraag Migratie Consultatie Aan
          </Button>
        </Card>
      </main>
      <BlogFooter />
    </div>
  );
};

export default MigratieGidsen;