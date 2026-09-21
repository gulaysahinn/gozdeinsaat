import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin, Ruler, Buildings, GraduationCap, Bank } from "@phosphor-icons/react";
import { SERVICES, PROCESS, PROJECTS } from "../data/content";
import ContactForm from "../components/ContactForm";
import CourtLineDrawing from "../components/CourtLineDrawing";
import { REFERENCES } from "../data/references";
import { useInView } from "../hooks/useInView";

// Custom Crosshair component for industrial detailing
const Crosshair = ({ position }) => {
  const isTopLeft = position === "tl";
  const isTopRight = position === "tr";
  const isBottomLeft = position === "bl";
  const isBottomRight = position === "br";
  
  return (
    <div style={{
      position: "absolute",
      top: isTopLeft || isTopRight ? -5 : "auto",
      bottom: isBottomLeft || isBottomRight ? -5 : "auto",
      left: isTopLeft || isBottomLeft ? -5 : "auto",
      right: isTopRight || isBottomRight ? -5 : "auto",
      width: 10,
      height: 10,
      pointerEvents: "none",
      zIndex: 10
    }}>
      <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "var(--color-accent)" }} />
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "var(--color-accent)" }} />
    </div>
  );
};

// Kompakt hizmet kartı — ana sayfa grid için
const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={service.to || "/hizmetler"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: hovered ? "var(--color-accent)" : "var(--color-border)",
        background: "var(--color-card)",
        textDecoration: "none",
        overflow: "hidden",
        transition: "border-color 0.22s, box-shadow 0.22s, transform 0.22s",
        boxShadow: hovered ? "0 4px 20px rgba(26,107,76,0.13)" : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-3px)" : "none",
        position: "relative",
      }}
    >
      {/* Görsel */}
      <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "var(--color-bg-soft)", flexShrink: 0 }}>
        <img
          src={service.image}
          alt={service.imageAlt || service.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            display: "block",
          }}
        />
        {/* Numara etiketi */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          fontWeight: 700,
          color: "#fff",
          background: "var(--color-accent)",
          padding: "4px 9px",
          letterSpacing: "0.08em",
        }}>
          0{index + 1}
        </div>
        {/* Hover overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(26,107,76,0.88)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            İncele <ArrowRight size={12} weight="bold" />
          </span>
        </div>
        {/* Zemin sayısı — görsel üzerinde alt kısım */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          padding: "20px 10px 8px",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "0.06em",
        }}>
          {service.floors?.length || 0} zemin seçeneği
        </div>
      </div>

      {/* İçerik */}
      <div style={{ padding: "14px 16px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 6, background: "var(--color-card)" }}>
        {/* Tag */}
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
        }}>
          {service.tag}
        </span>
        {/* Başlık */}
        <h3 style={{
          fontSize: 13,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.01em",
          color: "var(--color-line)",
          margin: 0,
          lineHeight: 1.2,
        }}>
          {service.title}
        </h3>
        {/* Ölçü */}
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--color-line-dim)",
          letterSpacing: "0.04em",
        }}>
          {service.spec}
        </span>
      </div>
    </Link>
  );
};


export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [processRef, processInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    // Trigger hero animation shortly after mount
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Spor Sahası ve Kort İnşaatı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası, voleybol sahası ve çok amaçlı saha yapımında anahtar teslim çözümler. 1988'den beri İstanbul ve Türkiye genelinde 500+ tamamlanmış proje."
        />
        <meta name="keywords" content="tenis kortu yapımı, basketbol sahası yapımı, voleybol sahası yapımı, spor sahası yapımı, kort inşaatı, İstanbul spor sahası" />
        <link rel="canonical" href="https://www.gozdeinsaat.com/" />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="page-wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          paddingTop: 120,
          paddingBottom: 120,
        }}
      >
        <div style={{ maxWidth: 540 }}>
          <h1
            className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
            style={{
              fontSize: "clamp(48px, 6vw, 64px)",
              lineHeight: 1.05,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--color-line)",
              transitionDelay: "100ms"
            }}
          >
            <span style={{ fontWeight: 400, display: "block" }}>ENDÜSTRİYEL</span>
            <span style={{ fontWeight: 400, display: "block" }}>STANDARTTA</span>
            <span style={{ fontWeight: 800, display: "block" }}>SAHA İNŞASI</span>
          </h1>
          <p 
            className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
            style={{ color: "var(--color-line-dim)", fontSize: 18, lineHeight: 1.6, marginBottom: 40, maxWidth: "45ch", transitionDelay: "220ms" }}
          >
            Tenis kortu, basketbol ve voleybol sahası yapımında; zemin hazırlığından 
            milimetrik çizgi çalışmasına kadar mühendislik kalitesiyle anahtar teslim hizmet. 1988'den beri.
          </p>
          <div 
            className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", transitionDelay: "340ms" }}
          >
            <Link to="/iletisim" className="btn-primary">
              Ücretsiz Keşif <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
            <Link to="/projeler" className="btn-secondary">
              Projeleri Gör
            </Link>
          </div>
        </div>

        <div
          className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
          style={{
            position: "relative",
            aspectRatio: "4/3",
            border: "1px solid var(--color-border)",
            padding: 8,
            background: "var(--color-bg-soft)",
            transitionDelay: "460ms"
          }}
        >
          <Crosshair position="tl" />
          <Crosshair position="tr" />
          <Crosshair position="bl" />
          <Crosshair position="br" />
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <CourtLineDrawing loaded={heroLoaded} />
          </div>
          {/* Technical overlay text */}
          <div style={{ position: "absolute", bottom: 20, right: 20, background: "var(--color-bg)", padding: "4px 8px", fontFamily: "var(--font-mono)", fontSize: 12, border: "1px solid var(--color-border)", color: "var(--color-line)" }}>
            ÖLÇEK: 1:100 / REFERANS
          </div>
        </div>
      </section>

      {/* ── HİZMETLERİMİZ (Kompakt Kart Grid) ────────────────────────── */}
      <section style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid var(--color-border)", background: "var(--color-bg-soft)" }}>
        <div className="page-wrap">
          {/* Başlık + link */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", textTransform: "uppercase", margin: 0, lineHeight: 1, letterSpacing: "-0.01em" }}>
                HİZMETLERİMİZ
              </h2>
              <p style={{ color: "var(--color-line-dim)", fontSize: 14, marginTop: 8, marginBottom: 0, lineHeight: 1.5 }}>
                Anahtar teslim spor sahası yapımında beş ana kategori.
              </p>
            </div>
            <Link to="/hizmetler" className="btn-secondary" style={{ whiteSpace: "nowrap" }}>
              Tüm Hizmetler
            </Link>
          </div>

          {/* 5 kart grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 16,
            }}
            className="services-home-grid"
          >
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SÜREÇ (Timeline Flow) ─────────────────────────────────────── */}
      <section ref={processRef} style={{ padding: "120px 0", background: "var(--color-bg-soft)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", overflow: "hidden" }}>
        <div className="page-wrap">
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 80, textTransform: "uppercase" }}>ÇALIŞMA YAKLAŞIMIMIZ</h2>
          
          <div style={{ display: "flex", flexDirection: window.innerWidth < 768 ? "column" : "row", gap: 32, position: "relative" }}>
            {/* SVG Line Connector for Desktop */}
            <div className="hide-mobile" style={{
              position: "absolute",
              top: 24,
              left: 24,
              right: 24,
              height: 2,
              zIndex: 0
            }}>
              <svg 
                className={`process-line ${processInView ? "draw-active" : ""}`}
                width="100%" 
                height="2" 
                preserveAspectRatio="none"
              >
                <path d="M0,1 L10000,1" />
              </svg>
            </div>
            
            {PROCESS.map((p, i) => (
              <div key={p.title} style={{ flex: 1, position: "relative", zIndex: 1, paddingTop: window.innerWidth < 768 ? 0 : 50 }}>
                {/* Node Box */}
                <div className="hide-mobile" style={{
                  position: "absolute",
                  top: 20,
                  left: 0,
                  width: 9,
                  height: 9,
                  background: "var(--color-accent)",
                }} />
                
                {/* Step Number */}
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 40, color: "var(--color-line)", opacity: 0.1, fontWeight: 700, marginBottom: 16, lineHeight: 1 }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 20, marginBottom: 12, textTransform: "uppercase", fontWeight: 700 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-line-dim)", margin: 0, maxWidth: "30ch" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJELER ────────────────────────────────────────────────── */}
      <section className="page-wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", margin: 0, textTransform: "uppercase" }}>TAMAMLANAN PROJELER</h2>
          <Link to="/projeler" className="btn-secondary">
            Tümünü Gör
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {PROJECTS.slice(0, 3).map((p, i) => (
            <div key={p.name} style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
              position: "relative"
            }}>
              <Crosshair position="tl" />
              <Crosshair position="tr" />
              <div style={{
                height: 220,
                borderBottom: "1px solid var(--color-border)",
                position: "relative",
                overflow: "hidden",
                padding: 4
              }}>
                <img 
                  src={p.image} 
                  alt={`${p.name} projesi sahadan bir kesit`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(15%)" }} 
                />
                {/* Technical overlay text */}
                <div style={{ position: "absolute", bottom: 12, right: 12, background: "var(--color-bg)", padding: "2px 6px", fontFamily: "var(--font-mono)", fontSize: 10, border: "1px solid var(--color-border)", color: "var(--color-line)" }}>
                  PL-0{i + 1} / {p.city.toUpperCase()}
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, marginBottom: 16, textTransform: "uppercase", fontWeight: 600 }}>{p.name}</h3>
                <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--color-line-dim)", fontFamily: "var(--font-mono)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <MapPin size={14} aria-hidden="true" /> {p.city}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Ruler size={14} aria-hidden="true" /> {p.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REFERANSLAR (Sharp Rectangles) ───────────────────────────── */}
      <section style={{ background: "var(--color-bg-soft)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "120px 0" }}>
        <div className="page-wrap">
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 16, textTransform: "uppercase" }}>REFERANSLARIMIZ</h2>
          <p style={{ fontSize: 16, color: "var(--color-line-dim)", marginBottom: 40, maxWidth: 600 }}>
            Türkiye genelinde {REFERENCES.length}+ kurum ve projeye hizmet verdik.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {REFERENCES.filter((r) =>
              [
                "Fenerbahçe Ordu Evi",
                "İ.T.Ü. Gümüşsuyu Kampüsü",
                "TED Koleji",
                "Richmond Ephesus Hotel",
                "Kocaeli Büyükşehir Belediyesi",
                "Doğa Koleji",
                "Şeyh Edebali Üniversitesi",
                "Emay İnşaat - Brandium",
              ].includes(r.name)
            ).map((ref) => {
              let Icon = Buildings;
              if (ref.name.includes("Kolej") || ref.name.includes("Üniversite") || ref.name.includes("İ.T.Ü.")) {
                Icon = GraduationCap;
              } else if (ref.name.includes("Belediyesi") || ref.name.includes("Ordu Evi")) {
                Icon = Bank;
              }

              return (
                <Link
                  key={ref.name}
                  to="/referanslar"
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    padding: "10px 20px",
                    fontSize: 14,
                    color: "var(--color-line)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <Icon size={16} color="var(--color-line-dim)" aria-hidden="true" />
                  {ref.name}
                </Link>
              );
            })}
            <Link
              to="/referanslar"
              style={{
                background: "transparent",
                border: "1px solid var(--color-accent)",
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--color-accent)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              Tümünü Gör
            </Link>
          </div>
        </div>
      </section>

      {/* ── TEKLİF FORMU ─────────────────────────────────────────────── */}
      <section className="page-wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "flex-start",
        }} className="grid-responsive">
          <div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 56px)", margin: "24px 0 24px", lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              PROJENİZ İÇİN<br />FİYAT ALIN
            </h2>
            <p style={{ color: "var(--color-line-dim)", fontSize: 18, lineHeight: 1.6, maxWidth: "40ch" }}>
              Formu doldurun, uzman ekibimiz saha ölçümleri ve ücretsiz keşif için en geç 24 saat içinde sizinle iletişime geçsin.
            </p>
          </div>

          <div style={{
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            padding: 40,
            position: "relative"
          }}>
            <Crosshair position="tl" />
            <Crosshair position="tr" />
            <Crosshair position="bl" />
            <Crosshair position="br" />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}