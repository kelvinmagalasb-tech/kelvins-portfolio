
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { SecurityProvider } from "@/components/SecurityProvider";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import { LiveChat } from "@/components/LiveChat";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Templates from "./pages/Templates";
import LearnPhotoshop from "./pages/LearnPhotoshop";
import LearnIndesign from "./pages/LearnIndesign";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import GraphicsDesign from "./pages/GraphicsDesign";
import OnlineCardInvitations from "./pages/OnlineCardInvitations";
import PosterDesign from "./pages/PosterDesign";
import AdobeXDDesigns from "./pages/AdobeXDDesigns";
import SocialMedia from "./pages/SocialMedia";
import Branding from "./pages/Branding";
import WebDevelopment from "./pages/WebDevelopment";
import SystemDevelopment from "./pages/SystemDevelopment";
import AdminDashboard from "./pages/AdminDashboard";
import MyOrders from "./pages/MyOrders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SecurityProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/my-designs" element={<Portfolio />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/learn/photoshop" element={<LearnPhotoshop />} />
                  <Route path="/learn/indesign" element={<LearnIndesign />} />
                  <Route path="/videos" element={<Videos />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/services/graphics-design" element={<GraphicsDesign />} />
                  <Route path="/services/graphics-design/invitations" element={<OnlineCardInvitations />} />
                  <Route path="/services/graphics-design/posters" element={<PosterDesign />} />
                  <Route path="/services/graphics-design/adobe-xd" element={<AdobeXDDesigns />} />
                  <Route path="/services/social-media" element={<SocialMedia />} />
                  <Route path="/services/branding" element={<Branding />} />
                  <Route path="/services/web-development" element={<WebDevelopment />} />
                  <Route path="/services/system-development" element={<SystemDevelopment />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/my-orders" element={<MyOrders />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <LiveChat />
              <ScrollToTop />
            </div>
          </BrowserRouter>
        </AuthProvider>
      </SecurityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
