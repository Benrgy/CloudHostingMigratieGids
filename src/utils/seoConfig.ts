export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Cloud Hosting Migratie Nederland - Expert Begeleiding & Ondersteuning',
    description: 'Professionele cloud migratie services in Nederland. Bespaar tot 40% op hosting kosten met onze bewezen migratiestrategieën. Gratis consultatie beschikbaar.',
    keywords: 'cloud migratie, hosting migratie, cloud hosting nederland, server migratie, cloud transitie',
    ogTitle: 'Cloud Hosting Migratie Nederland - Expert Begeleiding',
    ogDescription: 'Bespaar tot 40% op hosting kosten met onze professionele cloud migratie services. Gratis consultatie beschikbaar.',
    twitterTitle: 'Cloud Hosting Migratie Nederland',
    twitterDescription: 'Professionele cloud migratie services. Bespaar tot 40% op hosting kosten.'
  },
  '/cloud-migratie': {
    title: 'Cloud Migratie Gids 2024 - Stap-voor-Stap Migratieplan Nederland',
    description: 'Complete cloud migratie gids met stap-voor-stap plan. Ontdek hoe u veilig en kosteneffectief naar de cloud migreert. Bewezen methodes van Nederlandse experts.',
    keywords: 'cloud migratie gids, migratieplan, cloud transitie nederland, server naar cloud',
    ogTitle: 'Complete Cloud Migratie Gids 2024 Nederland',
    ogDescription: 'Stap-voor-stap cloud migratieplan van Nederlandse experts. Veilig en kosteneffectief naar de cloud.',
    twitterTitle: 'Cloud Migratie Gids 2024 Nederland',
    twitterDescription: 'Complete gids voor veilige en kosteneffectieve cloud migratie.'
  },
  '/seo-strategieen': {
    title: 'SEO Strategieën 2024 - Verhoog Uw Online Zichtbaarheid Nederland',
    description: 'Bewezen SEO strategieën om uw website hoger te laten ranken in Google. Van technische SEO tot content marketing - alles wat u nodig heeft in één gids.',
    keywords: 'seo strategieën, online marketing, website optimalisatie, google rankings nederland',
    ogTitle: 'SEO Strategieën 2024 Nederland - Verhoog Uw Rankings',
    ogDescription: 'Bewezen SEO strategieën voor hogere Google rankings. Complete gids van Nederlandse SEO experts.',
    twitterTitle: 'SEO Strategieën 2024 Nederland',
    twitterDescription: 'Bewezen SEO strategieën voor hogere Google rankings en meer traffic.'
  },
  '/tech-oplossingen': {
    title: 'Technische IT Oplossingen - Cloud & Hosting Expertise Nederland',
    description: 'Professionele IT oplossingen voor bedrijven. Van cloud architectuur tot hosting optimalisatie. Nederlandse IT experts met 10+ jaar ervaring.',
    keywords: 'it oplossingen, cloud architectuur, hosting optimalisatie, technische ondersteuning nederland',
    ogTitle: 'Technische IT Oplossingen Nederland',
    ogDescription: 'Professionele IT oplossingen van Nederlandse experts. Cloud, hosting en infrastructuur specialisten.',
    twitterTitle: 'Technische IT Oplossingen Nederland',
    twitterDescription: 'Professionele IT oplossingen voor cloud, hosting en infrastructuur.'
  },
  '/seo-tools': {
    title: 'Gratis SEO Tools 2024 - Complete Toolkit voor Website Optimalisatie',
    description: 'Ontdek de beste gratis en betaalde SEO tools voor 2024. Van keyword research tot technical audits - alles wat u nodig heeft voor betere rankings.',
    keywords: 'seo tools, gratis seo software, keyword research tools, website analyse nederland',
    ogTitle: 'Beste SEO Tools 2024 - Gratis & Premium Toolkit',
    ogDescription: 'Complete overzicht van de beste SEO tools voor keyword research, audits en optimalisatie.',
    twitterTitle: 'Beste SEO Tools 2024',
    twitterDescription: 'Ontdek de beste gratis en betaalde SEO tools voor website optimalisatie.'
  },
  '/case-studies': {
    title: 'Cloud Migratie Case Studies - Succesvolle Projecten Nederland',
    description: 'Lees hoe Nederlandse bedrijven succesvol naar de cloud zijn gemigreerd. Echte resultaten: tot 60% kostenbesparing en 99.9% uptime.',
    keywords: 'cloud migratie case studies, klant succesverhalen, cloud projecten nederland',
    ogTitle: 'Cloud Migratie Case Studies Nederland',
    ogDescription: 'Succesverhalen van Nederlandse bedrijven die naar de cloud zijn gemigreerd. Tot 60% kostenbesparing.',
    twitterTitle: 'Cloud Migratie Case Studies',
    twitterDescription: 'Succesverhalen van cloud migraties in Nederland. Tot 60% kostenbesparing.'
  },
  '/migratie-gidsen': {
    title: 'Cloud Migratie Gidsen - Stap-voor-Stap Handleidingen Nederland',
    description: 'Uitgebreide migratie gidsen voor elke situatie. Van kleine websites tot enterprise applicaties. Gratis downloadbare checklists included.',
    keywords: 'migratie gidsen, cloud migratie handleiding, migratieplan template nederland',
    ogTitle: 'Cloud Migratie Gidsen Nederland',
    ogDescription: 'Uitgebreide stap-voor-stap gidsen voor succesvolle cloud migraties. Gratis checklists.',
    twitterTitle: 'Cloud Migratie Gidsen',
    twitterDescription: 'Stap-voor-stap gidsen voor succesvolle cloud migraties met gratis checklists.'
  },
  '/performance-tips': {
    title: 'Website Performance Tips 2024 - Verhoog Snelheid & Rankings',
    description: 'Bewezen tips om uw website 3x sneller te maken. Verbeter Core Web Vitals en verhoog uw Google rankings met onze expert methodes.',
    keywords: 'website snelheid, performance optimalisatie, core web vitals, pagina snelheid nederland',
    ogTitle: 'Website Performance Tips 2024 - 3x Sneller',
    ogDescription: 'Maak uw website 3x sneller met bewezen performance tips. Verbeter rankings en gebruikerservaring.',
    twitterTitle: 'Website Performance Tips 2024',
    twitterDescription: 'Bewezen tips om uw website 3x sneller te maken en rankings te verbeteren.'
  },
  '/contact': {
    title: 'Contact - Gratis Cloud Migratie Consultatie Nederland',
    description: 'Neem contact op voor een gratis cloud migratie consultatie. Nederlandse experts staan klaar om uw vragen te beantwoorden binnen 24 uur.',
    keywords: 'cloud migratie contact, gratis consultatie, cloud expert nederland',
    ogTitle: 'Contact - Gratis Cloud Migratie Consultatie',
    ogDescription: 'Gratis cloud migratie consultatie van Nederlandse experts. Antwoord binnen 24 uur gegarandeerd.',
    twitterTitle: 'Contact Cloud Migratie Expert',
    twitterDescription: 'Gratis consultatie voor cloud migratie. Nederlandse experts, antwoord binnen 24 uur.'
  },
  '/over-ons': {
    title: 'Over Ons - Nederlandse Cloud Migratie Experts met 10+ Jaar Ervaring',
    description: 'Ontmoet ons team van cloud migratie experts. 10+ jaar ervaring, 500+ succesvolle migraties, en een bewezen track record in Nederland.',
    keywords: 'cloud migratie experts, over ons, bedrijfsinfo cloud hosting nederland',
    ogTitle: 'Over Ons - Cloud Migratie Experts Nederland',
    ogDescription: '10+ jaar ervaring, 500+ succesvolle migraties. Ontmoet de Nederlandse cloud experts.',
    twitterTitle: 'Cloud Migratie Experts Nederland',
    twitterDescription: 'Nederlandse cloud experts met 10+ jaar ervaring en 500+ succesvolle migraties.'
  },
  '/privacy': {
    title: 'Privacy Beleid - Uw Gegevens Veilig bij Cloud Migratie Nederland',
    description: 'Ons privacy beleid volgens AVG wetgeving. Lees hoe wij uw persoonlijke gegevens beschermen tijdens cloud migratie projecten.',
    keywords: 'privacy beleid, avg, gegevensbescherming cloud migratie nederland',
    ogTitle: 'Privacy Beleid Cloud Migratie Nederland',
    ogDescription: 'Privacy beleid volgens AVG wetgeving. Uw gegevens zijn veilig bij onze cloud experts.',
    twitterTitle: 'Privacy Beleid',
    twitterDescription: 'Privacy beleid volgens AVG wetgeving voor cloud migratie services.'
  },
  '/voorwaarden': {
    title: 'Algemene Voorwaarden - Cloud Migratie Services Nederland',
    description: 'Algemene voorwaarden voor onze cloud migratie services. Transparante afspraken en duidelijke voorwaarden voor alle projecten.',
    keywords: 'algemene voorwaarden, cloud migratie voorwaarden nederland',
    ogTitle: 'Algemene Voorwaarden Cloud Migratie',
    ogDescription: 'Transparante algemene voorwaarden voor cloud migratie services in Nederland.',
    twitterTitle: 'Algemene Voorwaarden',
    twitterDescription: 'Algemene voorwaarden voor cloud migratie services in Nederland.'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];