import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import PricingPage from "./pages/PricingPage";
import ServicePage from "./pages/ServicePage";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services/seo-services" element={<ServicePage slug="seo-services" iconName="Search" />} />
        <Route
          path="/services/web-design-development"
          element={<ServicePage slug="web-design-development" iconName="Code2" />}
        />
        <Route
          path="/services/whatsapp-marketing"
          element={<ServicePage slug="whatsapp-marketing" iconName="MessageCircle" />}
        />
        <Route
          path="/services/linkedin-marketing"
          element={<ServicePage slug="linkedin-marketing" iconName="Linkedin" />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<ServicePage slug="social-media-marketing" iconName="Share2" />}
        />
        <Route path="/services/email-marketing" element={<ServicePage slug="email-marketing" iconName="Mail" />} />
      </Routes>
    </BrowserRouter>
  );
}
