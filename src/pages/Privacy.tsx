import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
            Privacy Beleid
          </h1>
          
          <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-8">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Laatst bijgewerkt: December 2024
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Introductie</h2>
              <p>
                Cloud Hosting Migratie Blog ("wij", "ons", "onze") respecteert uw privacy en 
                is toegewijd aan het beschermen van uw persoonlijke gegevens. Dit privacy beleid 
                legt uit hoe wij uw informatie verzamelen, gebruiken en beschermen.
              </p>

              <h2>2. Welke Informatie Verzamelen Wij</h2>
              <h3>Persoonlijke Informatie</h3>
              <ul>
                <li>Naam en contactgegevens wanneer u contact met ons opneemt</li>
                <li>Email adres voor onze nieuwsbrief (alleen met uw toestemming)</li>
                <li>Bedrijfsinformatie wanneer u onze diensten aanvraagt</li>
              </ul>

              <h3>Automatisch Verzamelde Informatie</h3>
              <ul>
                <li>Website gebruiksstatistieken via Google Analytics</li>
                <li>IP-adres en browser informatie</li>
                <li>Cookies voor website functionaliteit</li>
              </ul>

              <h2>3. Hoe Wij Uw Informatie Gebruiken</h2>
              <p>Wij gebruiken uw informatie voor:</p>
              <ul>
                <li>Het leveren van onze diensten en support</li>
                <li>Communicatie over uw projecten en vragen</li>
                <li>Verbetering van onze website en diensten</li>
                <li>Verzending van nieuwsbrieven (alleen met toestemming)</li>
              </ul>

              <h2>4. Cookies</h2>
              <p>
                Onze website gebruikt cookies om de functionaliteit te verbeteren en 
                gebruiksstatistieken te verzamelen. U kunt cookies uitschakelen in uw 
                browser instellingen, maar dit kan de functionaliteit beïnvloeden.
              </p>

              <h2>5. Delen van Informatie</h2>
              <p>
                Wij verkopen, verhuren of delen uw persoonlijke gegevens niet met derden, 
                behalve wanneer dit noodzakelijk is voor:
              </p>
              <ul>
                <li>Het leveren van onze diensten</li>
                <li>Naleving van wettelijke verplichtingen</li>
                <li>Bescherming van onze rechten en eigendom</li>
              </ul>

              <h2>6. Gegevensbeveiliging</h2>
              <p>
                Wij implementeren passende technische en organisatorische maatregelen 
                om uw persoonlijke gegevens te beschermen tegen ongeautoriseerde toegang, 
                wijziging, openbaarmaking of vernietiging.
              </p>

              <h2>7. Uw Rechten</h2>
              <p>Onder de AVG heeft u het recht om:</p>
              <ul>
                <li>Toegang te vragen tot uw persoonlijke gegevens</li>
                <li>Correctie van onjuiste gegevens te vragen</li>
                <li>Verwijdering van uw gegevens te vragen</li>
                <li>Bezwaar te maken tegen verwerking</li>
                <li>Uw toestemming in te trekken</li>
              </ul>

              <h2>8. Bewaartermijnen</h2>
              <p>
                Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk voor 
                de doeleinden waarvoor zij zijn verzameld, of zoals vereist door de wet.
              </p>

              <h2>9. Wijzigingen in Dit Beleid</h2>
              <p>
                Wij kunnen dit privacy beleid van tijd tot tijd bijwerken. 
                Significante wijzigingen zullen worden gecommuniceerd via onze website.
              </p>

              <h2>10. Contact</h2>
              <p>
                Voor vragen over dit privacy beleid of uw persoonlijke gegevens, 
                kunt u contact met ons opnemen via:
              </p>
              <ul>
                <li>Email: privacy@cloudhostingmigratie.nl</li>
                <li>Telefoon: +31 (0)20 123 4567</li>
                <li>Adres: Amsterdam, Nederland</li>
              </ul>
            </div>
          </Card>
        </div>
      </main>
      <BlogFooter />
    </div>
  );
};

export default Privacy;