import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Hoeveel kan ik besparen met cloud migratie?",
      answer: "Onze klanten besparen gemiddeld 40% op hun hosting kosten na migratie naar de cloud. Dit komt door betere resource-optimalisatie, automatische scaling en het wegvallen van server onderhoud."
    },
    {
      question: "Hoelang duurt een cloud migratie en krijg ik downtime?",
      answer: "Gemiddelde migratietijd is 2-5 werkdagen. Wij plannen migraties buiten kantooruren en gebruiken zero-downtime technieken. 99% van onze migraties hebben minder dan 1 uur downtime."
    },
    {
      question: "Wat gebeurt er als iets misgaat tijdens de migratie?",
      answer: "Wij maken altijd volledige backups vooraf en hebben een rollback plan klaarstaan. In 10+ jaar ervaring hebben wij nog nooit data verloren. U krijgt ook 24/7 ondersteuning tijdens de migratie."
    },
    {
      question: "Welke cloud providers gebruiken jullie voor migratie?",
      answer: "Wij werken met alle grote cloud providers: AWS, Google Cloud, Microsoft Azure en Digital Ocean. Wij adviseren de beste keuze op basis van uw specifieke behoeften en budget."
    },
    {
      question: "Kan ik mijn huidige domeinnaam en email behouden?",
      answer: "Ja, absoluut. Uw domeinnaam en alle email accounts blijven exact hetzelfde werken. Voor bezoekers is de migratie volledig onzichtbaar."
    },
    {
      question: "Krijg ik ondersteuning na de migratie?",
      answer: "Ja, alle migraties komen met 30 dagen gratis ondersteuning. Daarna bieden wij optionele onderhoudscontracten vanaf €99/maand voor complete peace of mind."
    },
    {
      question: "Hoeveel kost een cloud migratie?",
      answer: "Kosten variëren van €500 voor eenvoudige websites tot €5000+ voor complexe applicaties. Wij bieden altijd een gratis analyse en offerte zonder verplichtingen."
    },
    {
      question: "Is cloud hosting veilig voor mijn bedrijfsdata?",
      answer: "Cloud hosting is vaak veiliger dan traditionele servers. Grote cloud providers investeren miljarden in beveiliging, hebben 24/7 monitoring en voldoen aan strenge certificeringen zoals ISO27001 en SOC2."
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Veelgestelde Vragen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alles wat u wilt weten over Cloud Migratie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De meest gestelde vragen over cloud migratie door Nederlandse bedrijven, 
            beantwoord door onze experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card p-6 hover:shadow-premium transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;