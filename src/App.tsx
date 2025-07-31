import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CloudMigratie from "./pages/CloudMigratie";
import SeoStrategieen from "./pages/SeoStrategieen";
import TechOplossingen from "./pages/TechOplossingen";
import Contact from "./pages/Contact";
import OverOns from "./pages/OverOns";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cloud-migratie" element={<CloudMigratie />} />
          <Route path="/seo-strategieen" element={<SeoStrategieen />} />
          <Route path="/tech-oplossingen" element={<TechOplossingen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/over-ons" element={<OverOns />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
