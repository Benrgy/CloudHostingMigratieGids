import { Cloud, Mail, Github, Twitter, Linkedin } from "lucide-react";

const BlogFooter = () => {
  const footerLinks = {
    resources: [
      { label: "SEO Tools", href: "/seo-tools" },
      { label: "Migratie Gidsen", href: "/migratie-gidsen" },
      { label: "Performance Tips", href: "/performance-tips" },
      { label: "Case Studies", href: "/case-studies" }
    ],
    company: [
      { label: "Over Ons", href: "/over-ons" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Beleid", href: "/privacy" },
      { label: "Algemene Voorwaarden", href: "/voorwaarden" }
    ],
    social: [
      { icon: Twitter, label: "Twitter", href: "#" },
      { icon: Linkedin, label: "LinkedIn", href: "#" },
      { icon: Github, label: "GitHub", href: "#" }
    ]
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Cloud className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Cloud Hosting Migratie
                </h3>
                <p className="text-xs text-muted-foreground">Expert Blog</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Jouw vertrouwde bron voor cloud migratie inzichten, SEO strategieën en moderne web technologie oplossingen. 
              Wij helpen bedrijven om met vertrouwen over te stappen naar de cloud.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Bronnen</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Cloud Hosting Migratie Blog. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-4 md:mt-0">
            <span>Gemaakt met</span>
            <span className="text-red-500">♥</span>
            <span>voor de cloud community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;