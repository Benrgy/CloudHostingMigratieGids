import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "./components/SEOWrapper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CloudMigratie from "./pages/CloudMigratie";
import SeoStrategieen from "./pages/SeoStrategieen";
import TechOplossingen from "./pages/TechOplossingen";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";
import CaseStudies from "./pages/CaseStudies";
import SeoTools from "./pages/SeoTools";
import MigratieGidsen from "./pages/MigratieGidsen";
import PerformanceTips from "./pages/PerformanceTips";
import Privacy from "./pages/Privacy";
import Voorwaarden from "./pages/Voorwaarden";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOWrapper>
            <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cloud-migratie" element={<CloudMigratie />} />
          <Route path="/seo-strategieen" element={<SeoStrategieen />} />
          <Route path="/tech-oplossingen" element={<TechOplossingen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/seo-tools" element={<SeoTools />} />
          <Route path="/migratie-gidsen" element={<MigratieGidsen />} />
          <Route path="/performance-tips" element={<PerformanceTips />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/voorwaarden" element={<Voorwaarden />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          </SEOWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
