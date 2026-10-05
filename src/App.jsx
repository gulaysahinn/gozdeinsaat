import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";
import PrivacyNotice from "./components/PrivacyNotice";
import { initAnalytics, trackPageView } from "./services/siteMetrics";

// Sayfa bazlı code-splitting (Lazy loading)
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const References = lazy(() => import("./pages/References"));
const TenisKortu = lazy(() => import("./pages/TenisKortu"));
const TartanTenisKortu = lazy(() => import("./pages/TartanTenisKortu"));
const SentetikCimTenisKortu = lazy(() => import("./pages/SentetikCimTenisKortu"));
const BasketbolSahasi = lazy(() => import("./pages/BasketbolSahasi"));
const VoleybolSahasi = lazy(() => import("./pages/VoleybolSahasi"));
const CokAmacliSaha = lazy(() => import("./pages/CokAmacliSaha"));
const HaliSaha = lazy(() => import("./pages/HaliSaha"));
const GizlilikPolitikasi = lazy(() => import("./pages/GizlilikPolitikasi"));
const KullanimSartlari = lazy(() => import("./pages/KullanimSartlari"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: 28,
          height: 28,
          border: "2px solid var(--color-border)",
          borderTopColor: "var(--color-accent)",
          borderRadius: "50%",
          animation: "spin 0.6s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <div className="app-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Erişilebilirlik (A11y) Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana İçeriğe Atla
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main-content" className="main-content" style={{ flex: "1 0 auto", width: "100%", position: "relative" }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/projeler" element={<Projects />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/referanslar" element={<References />} />

            {/* Hizmet detay sayfaları */}
            <Route path="/hizmetler/tenis-kortu-yapimi" element={<TenisKortu />} />
            <Route path="/hizmetler/tartan-zemin-tenis-kortu-yapimi" element={<TartanTenisKortu />} />
            <Route path="/hizmetler/sentetik-cim-tenis-kortu-yapimi" element={<SentetikCimTenisKortu />} />
            <Route path="/hizmetler/basketbol-sahasi-yapimi" element={<BasketbolSahasi />} />
            <Route path="/hizmetler/voleybol-sahasi-yapimi" element={<VoleybolSahasi />} />
            <Route path="/hizmetler/cok-amacli-saha-yapimi" element={<CokAmacliSaha />} />
            <Route path="/hizmetler/hali-saha-yapimi" element={<HaliSaha />} />

            {/* URL Yönlendirmeleri (Eski sitemap ve dış bağlantı koruması) */}
            <Route path="/tenis-kortu-yapimi" element={<Navigate to="/hizmetler/tenis-kortu-yapimi" replace />} />
            <Route path="/basketbol-sahasi-yapimi" element={<Navigate to="/hizmetler/basketbol-sahasi-yapimi" replace />} />
            <Route path="/voleybol-sahasi-yapimi" element={<Navigate to="/hizmetler/voleybol-sahasi-yapimi" replace />} />
            <Route path="/cok-amacli-saha-yapimi" element={<Navigate to="/hizmetler/cok-amacli-saha-yapimi" replace />} />
            <Route path="/hali-saha-yapimi" element={<Navigate to="/hizmetler/hali-saha-yapimi" replace />} />
            <Route path="/tartan-zemin-tenis-kortu-yapimi" element={<Navigate to="/hizmetler/tartan-zemin-tenis-kortu-yapimi" replace />} />
            <Route path="/sentetik-cim-tenis-kortu-yapimi" element={<Navigate to="/hizmetler/sentetik-cim-tenis-kortu-yapimi" replace />} />

            {/* Yasal Sayfalar */}
            <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
            <Route path="/hizmetler/gizlilik-politikasi" element={<Navigate to="/gizlilik-politikasi" replace />} />
            <Route path="/kullanim-sartlari" element={<KullanimSartlari />} />
            <Route path="/hizmetler/kullanim-sartlari" element={<Navigate to="/kullanim-sartlari" replace />} />

            {/* Özel 404 Sayfası */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <FloatingContact />
      <Footer />
      <PrivacyNotice />
    </div>
  );
}
