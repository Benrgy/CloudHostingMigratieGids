import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card } from "@/components/ui/card";

const Voorwaarden = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
            Algemene Voorwaarden
          </h1>
          
          <Card className="bg-gradient-card border-0 shadow-premium p-8 mb-8">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Laatst bijgewerkt: December 2024
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Definities</h2>
              <ul>
                <li><strong>Cloud Hosting Migratie Blog</strong>: De website en diensten aangeboden door ons bedrijf</li>
                <li><strong>Klant</strong>: De natuurlijke of rechtspersoon die gebruik maakt van onze diensten</li>
                <li><strong>Diensten</strong>: Alle door ons aangeboden cloud migratie, SEO en technische oplossingen</li>
              </ul>

              <h2>2. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, 
                overeenkomsten en dienstverlening van Cloud Hosting Migratie Blog. 
                Afwijkende voorwaarden van de klant worden uitdrukkelijk uitgesloten.
              </p>

              <h2>3. Totstandkoming Overeenkomst</h2>
              <p>
                Een overeenkomst komt tot stand door:
              </p>
              <ul>
                <li>Ondertekening van een projectvoorstel of contract</li>
                <li>Schriftelijke bevestiging van opdracht via email</li>
                <li>Aanvang van werkzaamheden na mondelinge overeenstemming</li>
              </ul>

              <h2>4. Dienstverlening</h2>
              <p>
                Wij verbinden ons tot het leveren van diensten conform de overeengekomen 
                specificaties. Alle werkzaamheden worden uitgevoerd naar beste kunnen 
                en overeenkomstig de eisen van goed vakmanschap.
              </p>

              <h3>Cloud Migratie Diensten</h3>
              <ul>
                <li>Assessment van bestaande infrastructuur</li>
                <li>Migratie planning en uitvoering</li>
                <li>Post-migratie optimalisatie en support</li>
              </ul>

              <h3>SEO Diensten</h3>
              <ul>
                <li>Website audit en analyse</li>
                <li>On-page en technical SEO optimalisatie</li>
                <li>Content strategie en implementatie</li>
              </ul>

              <h2>5. Verplichtingen Klant</h2>
              <p>De klant verplicht zich tot:</p>
              <ul>
                <li>Tijdige aanlevering van benodigde informatie en toegang</li>
                <li>Medewerking aan de uitvoering van de opdracht</li>
                <li>Tijdige betaling volgens overeengekomen betalingstermijnen</li>
                <li>Backup van kritieke data voorafgaand aan migraties</li>
              </ul>

              <h2>6. Prijzen en Betaling</h2>
              <h3>Tarieven</h3>
              <p>
                Alle prijzen zijn exclusief BTW tenzij anders vermeld. 
                Prijswijzigingen worden 30 dagen van tevoren gecommuniceerd.
              </p>

              <h3>Betalingsvoorwaarden</h3>
              <ul>
                <li>Facturen zijn betaalbaar binnen 30 dagen na factuurdatum</li>
                <li>Bij projecten &gt; €10.000 geldt een vooruitbetaling van 50%</li>
                <li>Bij niet-tijdige betaling worden wettelijke rente en incassokosten berekend</li>
              </ul>

              <h2>7. Intellectueel Eigendom</h2>
              <p>
                Alle intellectuele eigendomsrechten op door ons ontwikkelde oplossingen 
                blijven bij ons, tenzij schriftelijk anders overeengekomen. 
                De klant krijgt een gebruiksrecht voor de overeengekomen doeleinden.
              </p>

              <h2>8. Aansprakelijkheid</h2>
              <p>
                Onze aansprakelijkheid is beperkt tot het factuurbedrag van de 
                betreffende opdracht, met een maximum van €25.000 per incident. 
                Wij zijn niet aansprakelijk voor indirecte schade of gevolgschade.
              </p>

              <h3>Uitsluitingen</h3>
              <p>Wij zijn niet aansprakelijk voor schade door:</p>
              <ul>
                <li>Handelingen of nalatigheden van de klant</li>
                <li>Storingen bij externe dienstverleners</li>
                <li>Overmacht situaties</li>
                <li>Dataverlies bij ontbreken van adequate backups</li>
              </ul>

              <h2>9. Vertrouwelijkheid</h2>
              <p>
                Wij behandelen alle klantinformatie strikt vertrouwelijk en zullen 
                deze niet aan derden verstrekken zonder schriftelijke toestemming, 
                behoudens wettelijke verplichtingen.
              </p>

              <h2>10. Overmacht</h2>
              <p>
                Bij overmacht worden onze verplichtingen opgeschort. 
                Overmacht omvat onder andere: natuurrampen, oorlog, stakingen, 
                overheidsmaatregelen en storingen bij externe dienstverleners.
              </p>

              <h2>11. Beëindiging</h2>
              <p>
                Beide partijen kunnen de overeenkomst beëindigen met inachtneming 
                van een opzegtermijn van 30 dagen. Bij materiële wanprestatie 
                kan de overeenkomst onmiddellijk worden ontbonden.
              </p>

              <h2>12. Wijzigingen</h2>
              <p>
                Wijzigingen in deze voorwaarden worden 30 dagen van tevoren 
                gecommuniceerd en treden in werking na deze periode, 
                tenzij de klant schriftelijk bezwaar maakt.
              </p>

              <h2>13. Toepasselijk Recht</h2>
              <p>
                Op alle overeenkomsten is Nederlands recht van toepassing. 
                Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam.
              </p>

              <h2>14. Contact</h2>
              <p>
                Voor vragen over deze voorwaarden kunt u contact opnemen via:
              </p>
              <ul>
                <li>Email: info@cloudhostingmigratie.nl</li>
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

export default Voorwaarden;