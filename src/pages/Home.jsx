import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  MapPin,
  Buildings,
  GraduationCap,
  Bank,
  TennisBall,
  Basketball,
  Volleyball,
  SoccerBall,
  SquaresFour,
  ShieldCheck,
  CheckCircle,
  Tree,
  PhoneCall,
  Compass,
  Trophy,
} from "@phosphor-icons/react";
import { SERVICES, PROCESS, PROJECTS } from "../data/content";
import ContactForm from "../components/ContactForm";
import { REFERENCES } from "../data/references";
import { useInView } from "../hooks/useInView";

/* ─── Spor Branşı İkon Eşleştirmesi ────────────────────────────────────────── */
const SPORT_ICONS = {
  Tenis: TennisBall,
  Basketbol: Basketball,
  Voleybol: Volleyball,
  "Halı Saha": SoccerBall,
  "Çok Amaçlı": SquaresFour,
};

/* ─── Ana Sayfada Gösterilecek 6 Öncü Kurumsal Referans ───────────────────── */
const HOME_FEATURED_REFS = [
  {
    name: "İstanbul Teknik Üniversitesi (İ.T.Ü.)",
    type: "Üniversite & Akademik Tesis",
    location: "Taksim & Beşiktaş / İSTANBUL",
    Icon: GraduationCap,
    category: "Eğitim",
    fields: ["Tenis Kortu", "Basketbol Sahası", "Voleybol Sahası"],
    highlight: "ITF & FIBA Standartlarında Kampüs Tesisleri",
  },
  {
    name: "Doğa Koleji Kampüsleri",
    type: "Özel Eğitim Kurumu",
    location: "Ankara İncek & Tekirdağ",
    Icon: GraduationCap,
    category: "Eğitim",
    fields: ["Çok Amaçlı Saha", "Halı Saha", "Tenis Kortu"],
    highlight: "Darbe Emici EPDM & Sentetik Çim Zeminler",
  },
  {
    name: "Akkoza İnşaat — Eyüpsultan Bld.",
    type: "Kamu & Belediye Rekreasyon Tesisi",
    location: "Eyüpsultan / İSTANBUL",
    Icon: Bank,
    category: "Kamu",
    fields: ["Halı Saha", "Tenis Kortu", "Basketbol Sahası"],
    highlight: "4 Branşlı Açık Spor Kompleksi",
  },
  {
    name: "Emay İnşaat — Brandium & Centrium",
    type: "Prestijli Konut & Yaşam Projesi",
    location: "Ataşehir & Kadıköy / İSTANBUL",
    Icon: Buildings,
    category: "Konut & Yaşam",
    fields: ["Tenis Kortu", "Basketbol Sahası"],
    highlight: "Cushion Akrilik Zeminli Özel Alanlar",
  },
  {
    name: "Richmond Ephesus Resort & Grand Yazıcı",
    type: "Turizm & Konaklama Tesisi",
    location: "Selçuk / İZMİR & Marmaris / MUĞLA",
    Icon: Tree,
    category: "Turizm",
    fields: ["Tenis Kortu"],
    highlight: "Uluslararası Turnuva Standartlarında Kortlar",
  },
  {
    name: "Fenerbahçe Ordu Evi",
    type: "Kamu & Tesis Hizmetleri",
    location: "Kadıköy / İSTANBUL",
    Icon: Bank,
    category: "Kamu",
    fields: ["Tenis Kortu"],
    highlight: "38 Yıllık Kurumsal Bakım ve Altyapı Garantisi",
  },
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [processRef, processInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  // Hizmetleri ayrıştır: Tenis Kortu öne çıkan hizmet, diğer 4 hizmet tamamlayıcı
  const featuredService = SERVICES[0]; // Tenis Kortu
  const otherServices = SERVICES.slice(1); // Basketbol, Voleybol, Çok Amaçlı, Halı Saha

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-line)" }}>
      <Helmet>
        <title>Spor Sahası ve Kort İnşaatı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası, voleybol sahası ve halı saha yapımında anahtar teslim mühendislik çözümleri. 1988'den beri İstanbul ve Türkiye genelinde yüzlerce tamamlanmış proje."
        />
        <meta
          name="keywords"
          content="tenis kortu yapımı, basketbol sahası yapımı, voleybol sahası yapımı, spor sahası yapımı, halı saha yapımı, kort inşaatı, İstanbul spor sahası"
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/" />
      </Helmet>

      {/* ── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section
        className="page-wrap"
        style={{
          paddingTop: "clamp(60px, 8vw, 100px)",
          paddingBottom: "clamp(60px, 8vw, 96px)",
        }}
      >
        <div className="home-hero-grid">
          {/* Sol Kolon: Başlık, Açıklama ve Eylemler */}
          <div style={{ maxWidth: 580 }}>
            <div
              className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                background: "var(--color-bg-soft)",
                border: "1px solid var(--color-border)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--color-accent)",
                marginBottom: 24,
                letterSpacing: "0.04em",
                transitionDelay: "60ms",
              }}
            >
              <ShieldCheck size={16} weight="fill" />
              <span>1988'DEN BUGÜNE · 38 YILLIK MÜHENDİSLİK MİRASI</span>
            </div>

            <h1
              className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
              style={{
                fontSize: "clamp(42px, 5.2vw, 62px)",
                lineHeight: 1.05,
                margin: "0 0 24px",
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
                color: "var(--color-line)",
                transitionDelay: "140ms",
              }}
            >
              <span style={{ fontWeight: 400, display: "block" }}>ENDÜSTRİYEL</span>
              <span style={{ fontWeight: 400, display: "block" }}>STANDARTTA</span>
              <span style={{ fontWeight: 800, display: "block", color: "var(--color-accent)" }}>
                SAHA İNŞASI
              </span>
            </h1>

            <p
              className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
              style={{
                color: "var(--color-line-dim)",
                fontSize: "clamp(16px, 1.9vw, 18px)",
                lineHeight: 1.65,
                marginBottom: 36,
                maxWidth: "46ch",
                transitionDelay: "240ms",
              }}
            >
              Tenis kortu, basketbol, voleybol ve halı saha yapımında; zemin etüdünden milimetrik çizgi uygulamasına kadar anahtar teslim mühendislik kalitesi sunuyoruz.
            </p>

            <div
              className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 40,
                transitionDelay: "340ms",
              }}
            >
              <Link to="/iletisim" className="btn-primary">
                Ücretsiz Keşif Al <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </Link>
              <Link to="/projeler" className="btn-secondary">
                Tamamlanan Projeler
              </Link>
            </div>

            {/* Hızlı Güven Rozetleri */}
            <div
              className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px 24px",
                borderTop: "1px solid var(--color-border)",
                paddingTop: 20,
                fontSize: 13,
                color: "var(--color-line-dim)",
                fontWeight: 600,
                transitionDelay: "420ms",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                Yüzlerce Tamamlanmış Saha
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                110+ Referans
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                Resmi Federasyon Normları (ITF · FIBA · FIFA)
              </span>
            </div>
          </div>

          {/* Sağ Kolon: Gerçek Proje Görseli + Teknik Mühendislik Çerçevesi */}
          <div
            className={`hero-stagger ${heroLoaded ? "animate-in" : ""}`}
            style={{
              position: "relative",
              border: "1px solid var(--color-border)",
              background: "var(--color-card)",
              boxShadow: "var(--shadow-md)",
              transitionDelay: "460ms",
            }}
          >
            {/* Üst Teknik Başlık Şeridi */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 16px",
                borderBottom: "1px solid var(--color-border)",
                background: "var(--color-bg-soft)",
                fontSize: 11,
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                color: "var(--color-line)",
                letterSpacing: "0.06em",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Compass size={14} color="var(--color-accent)" />
                ÖLÇÜMLENDİRİLMİŞ SAHA PROJESİ
              </span>
              <span style={{ color: "var(--color-accent)" }}>ITF / FIBA NORMLARI</span>
            </div>

            {/* Gerçek Proje Fotoğrafı */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <img
                src={`${import.meta.env.BASE_URL}images/hizmetler/tenisKortuYapimi.jpg`}
                alt="Gözde İnşaat tamamlanmış açık tenis kortu inşaatı projesi"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Sol Alt Teknik Parametre Kartı */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 14,
                  background: "rgba(26, 29, 32, 0.9)",
                  backdropFilter: "blur(6px)",
                  padding: "10px 14px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#FFFFFF",
                  maxWidth: "80%",
                }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>
                  RESMİ KORT EBATLARI
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}>
                  18 × 36 m · Cushion Akrilik Zemin
                </div>
              </div>

              {/* Sağ Üst 38 Yıl Mührü */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "var(--color-accent)",
                  color: "#FFFFFF",
                  padding: "6px 12px",
                  fontSize: 11,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                }}
              >
                <ShieldCheck size={14} weight="fill" />
                <span>38 YILLIK TECRÜBE</span>
              </div>
            </div>

            {/* Alt Teknik Bilgi Şeridi */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                borderTop: "1px solid var(--color-border)",
                background: "var(--color-card)",
                textAlign: "center",
                divideX: "1px solid var(--color-border)",
              }}
            >
              <div style={{ padding: "10px 6px", borderRight: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: 10, color: "var(--color-line-dim)", fontFamily: "var(--font-mono)" }}>ALTYAPI</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-line)", marginTop: 2 }}>Hatıl Beton & Asfalt</div>
              </div>
              <div style={{ padding: "10px 6px", borderRight: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: 10, color: "var(--color-line-dim)", fontFamily: "var(--font-mono)" }}>ÇEVRELEME</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-line)", marginTop: 2 }}>4m Galvaniz Tel Çit</div>
              </div>
              <div style={{ padding: "10px 6px" }}>
                <div style={{ fontSize: 10, color: "var(--color-line-dim)", fontFamily: "var(--font-mono)" }}>AYDINLATMA</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-line)", marginTop: 2 }}>LED Projektör Sistemi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. HİZMETLERİMİZ (ASİMETRİK BENTO LAYOUT) ────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(60px, 8vw, 96px)",
          paddingBottom: "clamp(60px, 8vw, 96px)",
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-bg-soft)",
        }}
      >
        <div className="page-wrap">
          {/* Başlık ve Bağlantı */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "clamp(32px, 5vw, 48px)",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                }}
              >
                UZMANLIK ALANLARIMIZ
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4.2vw, 42px)",
                  textTransform: "uppercase",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                }}
              >
                Hizmet Verdiğimiz Spor Branşları
              </h2>
            </div>
            <Link to="/hizmetler" className="btn-secondary" style={{ whiteSpace: "nowrap" }}>
              Tüm Hizmetler Detayı <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          {/* Asimetrik Bento Izgarası */}
          <div className="services-bento-layout">
            {/* Sol: Büyük Öne Çıkan Kart (Tenis Kortu Yapımı) */}
            <div
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "var(--shadow-card)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Büyük Görsel */}
              <div style={{ position: "relative", height: 280, overflow: "hidden", background: "var(--color-bg)" }}>
                <img
                  src={featuredService.image}
                  alt={featuredService.imageAlt || featuredService.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: "var(--color-accent)",
                    color: "#FFFFFF",
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Öne Çıkan Branş · ITF Normları
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(26,29,32,0.85) 0%, transparent 100%)",
                    padding: "32px 20px 12px",
                    color: "#FFFFFF",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
                    Standart: {featuredService.spec}
                  </span>
                  <span style={{ fontSize: 12, opacity: 0.9 }}>
                    3 Farklı Zemin Teknolojisi
                  </span>
                </div>
              </div>

              {/* İçerik ve Detaylar */}
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <TennisBall size={20} color="var(--color-accent)" weight="fill" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase" }}>
                      Tenis Kortu İnşaatı
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--color-line)",
                      margin: "0 0 12px",
                      lineHeight: 1.25,
                    }}
                  >
                    Uluslararası Standartlarda Açık & Kapalı Tenis Kortları
                  </h3>

                  <p style={{ fontSize: 15, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 20px" }}>
                    Akrilik kaplama, poliüretan ve sentetik çim alternatifleriyle; hatıl betonundan galvaniz tel çite, LED aydınlatmadan milimetrik çizgiye kadar eksiksiz anahtar teslim kurulum.
                  </p>

                  {/* Kapsam Maddeleri */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "8px 16px",
                      padding: "16px 0",
                      borderTop: "1px solid var(--color-border)",
                      borderBottom: "1px solid var(--color-border)",
                      marginBottom: 24,
                      fontSize: 13,
                      color: "var(--color-line)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                      <span>Lazerli zemin eğim kontrolü</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                      <span>4.00 m tel çit & tavan filesi</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                      <span>Profesyonel LED projektörler</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                      <span>Resmi ITF çizgi ve file seti</span>
                    </div>
                  </div>
                </div>

                <Link
                  to={featuredService.to}
                  className="btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Tenis Kortu Çözümlerini İncele <ArrowRight size={15} weight="bold" />
                </Link>
              </div>
            </div>

            {/* Sağ: 4 Tamamlayıcı Branş (2x2 Alt Izgara) */}
            <div className="services-subgrid">
              {otherServices.map((s) => {
                const IconComponent = SPORT_ICONS[s.tag] || Trophy;

                return (
                  <Link
                    key={s.title}
                    to={s.to || "/hizmetler"}
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "var(--shadow-card)",
                      textDecoration: "none",
                      overflow: "hidden",
                      transition: "transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,107,76,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "var(--shadow-card)";
                    }}
                  >
                    {/* Görsel */}
                    <div style={{ position: "relative", height: 140, overflow: "hidden", background: "var(--color-bg)" }}>
                      <img
                        src={s.image}
                        alt={s.imageAlt || s.title}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: "linear-gradient(to top, rgba(26,29,32,0.8) 0%, transparent 100%)",
                          padding: "16px 12px 6px",
                          color: "#FFFFFF",
                          fontSize: 11,
                          fontFamily: "var(--font-mono)",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{s.spec}</span>
                        <span>{s.floors?.length || 0} Zemin Tipi</span>
                      </div>
                    </div>

                    {/* İçerik */}
                    <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                          <IconComponent size={16} color="var(--color-accent)" weight="bold" />
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "var(--color-accent)",
                            }}
                          >
                            {s.tag}
                          </span>
                        </div>

                        <h4
                          style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: "var(--color-line)",
                            margin: "0 0 6px",
                            lineHeight: 1.3,
                          }}
                        >
                          {s.title} Yapımı
                        </h4>

                        <p
                          style={{
                            fontSize: 13,
                            color: "var(--color-line-dim)",
                            lineHeight: 1.5,
                            margin: 0,
                          }}
                        >
                          {s.desc}
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: 14,
                          paddingTop: 10,
                          borderTop: "1px solid var(--color-border)",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "var(--color-accent)",
                        }}
                      >
                        <span>Detaylı Bilgi</span>
                        <ArrowRight size={14} weight="bold" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ÇALIŞMA YAKLAŞIMIMIZ (DİKEY EDİTORYAL ZAMAN ÇİZGİSİ) ──────── */}
      <section
        ref={processRef}
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-bg)",
        }}
      >
        <div className="page-wrap">
          <div className="process-timeline-layout">
            {/* Sol Kolon: Başlık ve Mühendislik Taahhüdü */}
            <div style={{ position: "sticky", top: 100 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                }}
              >
                MÜHENDİSLİK PROTOKOLÜ
              </div>

              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  margin: "0 0 18px",
                  letterSpacing: "-0.015em",
                }}
              >
                Çalışma Yaklaşımımız
              </h2>

              <p style={{ fontSize: 15, color: "var(--color-line-dim)", lineHeight: 1.7, marginBottom: 28 }}>
                İlk keşiften anahtar teslim tesise kadar tavizsiz 4 aşamalı inşaat disiplini. 1988'den bugüne her aşama yazılı kalite kontrol protokolleriyle yönetilir.
              </p>

              {/* Vurgu Kartı */}
              <div
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderLeft: "4px solid var(--color-accent)",
                  padding: "20px 22px",
                  boxShadow: "var(--shadow-sm)",
                  marginBottom: 28,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <Compass size={18} color="var(--color-accent)" />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>
                    Sıfır Hata Toleransı
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "var(--color-line-dim)", lineHeight: 1.6, margin: 0 }}>
                  Zemin eğimi lazerli nivo cihazlarıyla sıfırlanır, su göllenmesi engellenir ve uluslararası federasyon normlarında milimetrik çizgi çekilir.
                </p>
              </div>

              <Link to="/iletisim" className="btn-primary">
                Keşif Talebi Oluştur <ArrowRight size={15} weight="bold" />
              </Link>
            </div>

            {/* Sağ Kolon: Numaralı Dikey Zaman Çizgisi Akışı */}
            <div style={{ position: "relative" }}>
              {/* Dikey Çizgi */}
              <div
                style={{
                  position: "absolute",
                  left: 23,
                  top: 24,
                  bottom: 40,
                  width: 2,
                  background: "var(--color-border)",
                  zIndex: 0,
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 36, position: "relative", zIndex: 1 }}>
                {/* Adım 01 */}
                <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      background: "var(--color-card)",
                      border: "2px solid var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    01
                  </div>
                  <div
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      padding: "24px 28px",
                      flexGrow: 1,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "var(--color-line)" }}>
                        Keşif, Kot & Lazerli Zemin Analizi
                      </h3>
                      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontWeight: 700, background: "var(--color-bg)", padding: "2px 8px", border: "1px solid var(--color-border)" }}>
                        AŞAMA 1
                      </span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 12px" }}>
                      Arazi yapısı, drenaj eğimleri, rüzgar koridoru ve zemin mukavemeti sahada uzman mühendislerce test edilir; ölçümler lazerli cihazlarla kayıt altına alınır.
                    </p>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-line)" }}>
                      📌 Çıktı: <span style={{ color: "var(--color-line-dim)" }}>Lazerli Kot Analizi & Ayrıntılı Keşif Raporu</span>
                    </div>
                  </div>
                </div>

                {/* Adım 02 */}
                <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      background: "var(--color-card)",
                      border: "2px solid var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    02
                  </div>
                  <div
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      padding: "24px 28px",
                      flexGrow: 1,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "var(--color-line)" }}>
                        Altyapı, Hatıl Beton & Asfalt Sıkıştırma
                      </h3>
                      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontWeight: 700, background: "var(--color-bg)", padding: "2px 8px", border: "1px solid var(--color-border)" }}>
                        AŞAMA 2
                      </span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 12px" }}>
                      Çevre hatıl betonu dökülür, kırma taş mıcır dolgusu silindirle sıkıştırılır ve eğimli sıcak asfalt serilerek çatlamayan pürüzsüz taşıyıcı gövde inşa edilir.
                    </p>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-line)" }}>
                      📌 Çıktı: <span style={{ color: "var(--color-line-dim)" }}>Drenaj Kanallı & Çatlamaz Taşıyıcı Gövde</span>
                    </div>
                  </div>
                </div>

                {/* Adım 03 */}
                <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      background: "var(--color-card)",
                      border: "2px solid var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    03
                  </div>
                  <div
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      padding: "24px 28px",
                      flexGrow: 1,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "var(--color-line)" }}>
                        Zemin Kaplama & Milimetrik Çizgi Uygulaması
                      </h3>
                      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontWeight: 700, background: "var(--color-bg)", padding: "2px 8px", border: "1px solid var(--color-border)" }}>
                        AŞAMA 3
                      </span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 12px" }}>
                      Seçilen zemin (akrilik, EPDM tartan veya sentetik çim) katman katman uygulanır; uluslararası federasyon normlarında hatasız ve milimetrik saha çizgileri çekilir.
                    </p>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-line)" }}>
                      📌 Çıktı: <span style={{ color: "var(--color-line-dim)" }}>ITF / FIBA / FIFA Onaylı Kaymaz Spor Yüzeyi</span>
                    </div>
                  </div>
                </div>

                {/* Adım 04 */}
                <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      background: "var(--color-card)",
                      border: "2px solid var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    04
                  </div>
                  <div
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      padding: "24px 28px",
                      flexGrow: 1,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "var(--color-line)" }}>
                        Çevre Çit, Donatı Montajı & Garantili Teslim
                      </h3>
                      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontWeight: 700, background: "var(--color-bg)", padding: "2px 8px", border: "1px solid var(--color-border)" }}>
                        AŞAMA 4
                      </span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 12px" }}>
                      4–6m galvaniz tel örgü, tavan filesi, LED projektörler, direk, pota veya kale montajları tamamlanır; saha test edilerek resmi garanti belgesiyle teslim edilir.
                    </p>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-line)" }}>
                      📌 Çıktı: <span style={{ color: "var(--color-line-dim)" }}>Kullanıma Hazır Anahtar Teslim Saha & Kurumsal Garanti</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TAMAMLANAN PROJELER (ÖZGÜN VE ANLAMLI METRİK KARTLARI) ────── */}
      <section
        className="page-wrap"
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "clamp(32px, 5vw, 48px)",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "var(--color-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 8,
              }}
            >
              SAHA UYGULAMALARIMIZ
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4.2vw, 42px)",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
              }}
            >
              Tamamlanan Projeler
            </h2>
          </div>
          <Link to="/projeler" className="btn-secondary">
            Tüm Projeler Kataloğu <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
          {PROJECTS.slice(0, 3).map((p, idx) => {
            // Anlamlı projeye özgü etiketler
            const meaningfulTags = [
              { label: "Sentetik Çim · 1.500 m²", badge: "FIFA Normu" },
              { label: "Sentetik Çim · 800 m²", badge: "Tel Örgü & LED" },
              { label: "Cushion Akrilik · 420 m²", badge: "FIBA Normu" },
            ][idx] || { label: "Profesyonel Saha", badge: "Standart Norm" };

            return (
              <div
                key={p.name}
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                {/* Görsel Çerçevesi */}
                <div style={{ height: 230, position: "relative", overflow: "hidden", background: "var(--color-bg-soft)" }}>
                  <img
                    src={p.image}
                    alt={`${p.name} projesi sahadan uygulama görüntüsü`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* Projeye Özgü Anlamlı Etiket (PL-01 yerine gerçek teknik bilgi) */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      background: "rgba(26,29,32,0.85)",
                      backdropFilter: "blur(4px)",
                      padding: "4px 10px",
                      fontSize: 11,
                      fontFamily: "var(--font-mono)",
                      color: "#FFFFFF",
                    }}
                  >
                    {meaningfulTags.label}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "var(--color-accent)",
                      color: "#FFFFFF",
                      padding: "3px 8px",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {meaningfulTags.badge}
                  </div>
                </div>

                {/* İçerik */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ fontSize: 18, marginBottom: 12, textTransform: "uppercase", fontWeight: 700, color: "var(--color-line)" }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 13, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 16px" }}>
                      {p.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 14,
                      borderTop: "1px solid var(--color-border)",
                      fontSize: 12,
                      color: "var(--color-line-dim)",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <MapPin size={14} color="var(--color-accent)" /> {p.city}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} /> {p.surfaceType || p.type}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. REFERANSLARIMIZ (KURUMSAL REFERANS VİTRİNİ) ───────────────── */}
      <section
        style={{
          background: "var(--color-bg-soft)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "clamp(70px, 9vw, 100px)",
          paddingBottom: "clamp(70px, 9vw, 100px)",
        }}
      >
        <div className="page-wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 8,
                }}
              >
                GÜVENİLEN KURUMSAL MARKA
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: "-0.015em",
                }}
              >
                Referanslarımızdan Seçmeler
              </h2>
            </div>
            <Link to="/referanslar" className="btn-secondary">
              110+ Referansın Tümünü İncele <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          {/* 6 Öncü Kurumsal Kart (Logo/İkon + Branş Göstergeli) */}
          <div className="references-home-grid" style={{ marginBottom: 36 }}>
            {HOME_FEATURED_REFS.map((ref) => {
              const Icon = ref.Icon;

              return (
                <Link
                  key={ref.name}
                  to="/referanslar"
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "var(--shadow-card)",
                    textDecoration: "none",
                    transition: "transform 0.22s ease, border-color 0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <div>
                    {/* Üst Kategori Rozeti */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 11,
                          fontWeight: 700,
                          color: "var(--color-accent)",
                          background: "var(--color-bg)",
                          padding: "3px 8px",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        <Icon size={14} weight="bold" />
                        <span>{ref.type}</span>
                      </div>
                      <span style={{ fontSize: 11, color: "var(--color-line-dim)", display: "flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={12} color="var(--color-accent)" />
                        {ref.location.split("/")[1] || ref.location.split("&")[0]}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "var(--color-line)",
                        margin: "0 0 8px",
                        lineHeight: 1.35,
                      }}
                    >
                      {ref.name}
                    </h4>

                    <p style={{ fontSize: 13, color: "var(--color-line-dim)", margin: "0 0 16px", lineHeight: 1.5 }}>
                      {ref.highlight}
                    </p>
                  </div>

                  {/* İnşa Edilen Branş Çipleri */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: 12 }}>
                    {ref.fields.map((f) => (
                      <span
                        key={f}
                        style={{
                          fontSize: 11,
                          padding: "2px 8px",
                          background: "var(--color-bg)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-line)",
                          fontWeight: 500,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Diğer Tanınmış Referanslar Şeridi */}
          <div
            style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase" }}>
                Diğer Kurumlar:
              </span>
              <span style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                TED Koleji · Kocaeli Büyükşehir Bld. · Boytem Unica · Gülerçin Koleji · Sapanca Villaları · Hazro Kaymakamlığı · Alagöz İnşaat · DSI Spor Kulübü
              </span>
            </div>
            <Link
              to="/referanslar"
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--color-accent)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                whiteSpace: "nowrap",
              }}
            >
              110 Kurumun Listesi <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. TEKLİF FORMU & İLETİŞİM (ŞIK VE GÜVEN VEREN DÜZEN) ────────── */}
      <section
        className="page-wrap"
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "clamp(40px, 6vw, 72px)",
            alignItems: "flex-start",
          }}
          className="grid-responsive"
        >
          {/* Sol: Başlık, Açıklama ve Güven Maddeleri */}
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "var(--color-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 8,
              }}
            >
              ÜCRETSİZ TEKNİK DESTEK & KEŞİF
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 4.8vw, 50px)",
                margin: "0 0 20px",
                lineHeight: 1.05,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              Projeniz İçin<br />
              <span style={{ color: "var(--color-accent)" }}>Fiyat Teklifi Alın</span>
            </h2>

            <p style={{ color: "var(--color-line-dim)", fontSize: 16, lineHeight: 1.7, maxWidth: "42ch", marginBottom: 32 }}>
              Saha ölçümleri, zemin analizleri ve projenize özel anahtar teslim maliyet planı için uzman mühendis ekibimiz en geç 24 saat içinde sizinle iletişime geçer.
            </p>

            {/* Güven Güvenceleri */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--color-line)" }}>
                <CheckCircle size={18} color="var(--color-accent)" weight="fill" />
                <span>Ücretsiz Yerinde Keşif & Lazerli Kot Ölçümü</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--color-line)" }}>
                <CheckCircle size={18} color="var(--color-accent)" weight="fill" />
                <span>24 Saat İçinde Kapsamlı & Şeffaf Teklif Raporu</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--color-line)" }}>
                <CheckCircle size={18} color="var(--color-accent)" weight="fill" />
                <span>1988'den Beri Aynı Adreste Kesintisiz Kurumsal Garanti</span>
              </div>
            </div>

            {/* Doğrudan İletişim Kutusu */}
            <div
              style={{
                padding: "18px 20px",
                background: "var(--color-bg-soft)",
                border: "1px solid var(--color-border)",
                display: "inline-flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 12, color: "var(--color-line-dim)", fontWeight: 600 }}>
                Doğrudan Mühendislik Hattı
              </span>
              <a
                href="tel:02163998770"
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <PhoneCall size={18} weight="bold" />
                +90 (216) 399 87 70
              </a>
            </div>
          </div>

          {/* Sağ: İletişim & Teklif Formu */}
          <div
            style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
              padding: "clamp(24px, 4vw, 40px)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--color-line)", marginBottom: 4 }}>
                Hızlı Keşif Formu
              </div>
              <div style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                İletişim ve saha detaylarınızı iletin, projenizi birlikte planlayalım.
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}