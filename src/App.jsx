import React from "react";
import { Routes, Route } from "react-router-dom";
import { COLORS, FONT } from "./theme";
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

export default function App() {
  return (
    <div className="app-wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/referanslar" element={<References />} />
        {/* Hizmet alt sayfaları */}
        <Route path="/tenis-kortu-yapimi" element={<TenisKortu />} />
        <Route path="/tartan-zemin-tenis-kortu-yapimi" element={<TartanTenisKortu />} />
        <Route path="/sentetik-cim-tenis-kortu-yapimi" element={<SentetikCimTenisKortu />} />
        <Route path="/basketbol-sahasi-yapimi" element={<BasketbolSahasi />} />
        <Route path="/voleybol-sahasi-yapimi" element={<VoleybolSahasi />} />
        <Route path="/cok-amacli-saha-yapimi" element={<CokAmacliSaha />} />
        <Route path="/hali-saha-yapimi" element={<HaliSaha />} />
      </Routes>
      <Footer />
    </div>
  );
}
