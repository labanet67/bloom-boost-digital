import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SocialGrowth from "./pages/services/SocialGrowth";
import PaidAds from "./pages/services/PaidAds";
import ContentStudio from "./pages/services/ContentStudio";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/social-growth" element={<SocialGrowth />} />
          <Route path="/services/paid-ads" element={<PaidAds />} />
          <Route path="/services/content-studio" element={<ContentStudio />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
