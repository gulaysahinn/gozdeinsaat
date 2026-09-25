import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import References from "./pages/References";
import TenisKortu from "./pages/TenisKortu";
import TartanTenisKortu from "./pages/TartanTenisKortu";
import SentetikCimTenisKortu from "./pages/SentetikCimTenisKortu";
import BasketbolSahasi from "./pages/BasketbolSahasi";
import VoleybolSahasi from "./pages/VoleybolSahasi";
import CokAmacliSaha from "./pages/CokAmacliSaha";
import HaliSaha from "./pages/HaliSaha";
import GizlilikPolitikasi from "./pages/GizlilikPolitikasi";

import FloatingContact from "./components/FloatingContact";

export default function App() {
  return (
    <div className="app-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <Nav />
      <main className="main-content" style={{ flex: "1 0 auto", width: "100%", position: "relative" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/referanslar" element={<References />} />
          {/* Hizmet alt sayfaları */}
          <Route path="/hizmetler/tenis-kortu-yapimi" element={<TenisKortu />} />
          <Route path="/hizmetler/tartan-zemin-tenis-kortu-yapimi" element={<TartanTenisKortu />} />
          <Route path="/hizmetler/sentetik-cim-tenis-kortu-yapimi" element={<SentetikCimTenisKortu />} />
          <Route path="/hizmetler/basketbol-sahasi-yapimi" element={<BasketbolSahasi />} />
          <Route path="/hizmetler/voleybol-sahasi-yapimi" element={<VoleybolSahasi />} />
          <Route path="/hizmetler/cok-amacli-saha-yapimi" element={<CokAmacliSaha />} />
          <Route path="/hizmetler/hali-saha-yapimi" element={<HaliSaha />} />
          <Route path="/hizmetler/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
        </Routes>
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}
