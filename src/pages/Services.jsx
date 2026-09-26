import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Ruler,
  Clock,
  Buildings,
  Trophy,
  GraduationCap,
  PhoneCall,
  SealCheck,
  Users,
} from "@phosphor-icons/react";
import ScrollReveal from "../components/ScrollReveal";

export default function Services() {
  return (
    <div className="services-page" style={{ background: "var(--color-bg)", color: "var(--color-line)" }}>
      <Helmet>
        <title>Hizmetlerimiz — Spor Sahası ve Kort İnşaatı | Gözde İnşaat</title>
        <meta
          name="description"
          content="1988'den beri tenis kortu, basketbol sahası, voleybol sahası, çok amaçlı saha ve halı saha yapımında uluslararası standartlarda anahtar teslim çözümler sunuyoruz."
        />
        <meta
          name="keywords"
          content="tenis kortu yapımı, basketbol sahası yapımı, voleybol sahası yapımı, halı saha yapımı, akrilik zemin, tartan zemin, suni çim, spor sahası inşaatı"
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/hizmetler" />
      </Helmet>

      {/* ── 1. HERO BÖLÜMÜ ──────────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          paddingTop: "clamp(80px, 10vw, 130px)",
          paddingBottom: "clamp(60px, 8vw, 100px)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg)",
          overflow: "hidden",
        }}
      >
        {/* Mimari Kort Çizgileri Arka Plan Dokusu (Hafif Blueprint Deseni) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.45,
            backgroundImage: `
              radial-gradient(circle at 100% 50%, rgba(31, 107, 74, 0.08) 0%, transparent 60%),
              linear-gradient(to right, rgba(222, 218, 209, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(222, 218, 209, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          }}
        />

        {/* Gerçek Saha Görseli - Arka Planda Zarif Fade Mask ile */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "clamp(320px, 45vw, 680px)",
            height: "100%",
            opacity: 0.18,
            pointerEvents: "none",
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 15%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 15%, transparent 90%)",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hizmetler/sahalar.jpg`}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(115%) grayscale(25%)" }}
          />
        </div>

        <div className="page-wrap" style={{ position: "relative", zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ maxWidth: 840 }}>
              {/* Kurumsal Miras Etiketi */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "6px 16px",
                  background: "var(--color-bg-soft)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 2,
                  marginBottom: 24,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--color-accent)",
                }}
              >
                <SealCheck size={18} weight="fill" color="var(--color-accent)" />
                <span>1988'DEN BUGÜNE • 38 Yıllık Mühendislik & Saha Yapım Tecrübesi</span>
              </div>

              {/* Ana Başlık */}
              <h1
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(34px, 5.2vw, 58px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "var(--color-line)",
                  margin: "0 0 24px",
                }}
              >
                Uluslararası Standartlarda <br className="hidden-mobile" />
                Anahtar Teslim Spor Sahası İnşaatı
              </h1>

              {/* Alt Metin */}
              <p
                style={{
                  fontSize: "clamp(16px, 1.8vw, 19px)",
                  lineHeight: 1.65,
                  color: "var(--color-line-dim)",
                  margin: "0 0 36px",
                  maxWidth: "64ch",
                }}
              >
                Altyapı hafriyatından beton ve asfalt dökümüne, akrilik ve EPDM zemin kaplamasından
                çevre çit ve aydınlatma sistemlerine kadar tüm süreci kendi mühendis kadromuzla yönetiyoruz.
              </p>

              {/* Aksiyon Alanı */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                <Link to="/iletisim" className="btn-primary" style={{ gap: 10 }}>
                  Ücretsiz Keşif & Teklif Talep Et
                  <ArrowRight size={16} weight="bold" />
                </Link>

                <a
                  href="tel:+902163110994"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--color-line)",
                    padding: "12px 18px",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-line)";
                  }}
                >
                  <PhoneCall size={18} weight="bold" color="var(--color-accent)" />
                  <span>0 (216) 311 09 94</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ── BİRLEŞİK İSTATİSTİK PANOSU (MONOLİTİK MİMARİ PANEL) ────────── */}
          <div style={{ marginTop: "clamp(48px, 6vw, 72px)" }}>
            <ScrollReveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  style={{
                    padding: "26px 28px",
                    borderRight: "1px solid var(--color-border)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(32px, 3.5vw, 42px)",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      marginBottom: 8,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    5 Branş
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-line)", marginBottom: 4 }}>
                    Ana Spor Sahası Kategorisi
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)", lineHeight: 1.4 }}>
                    Tenis, basketbol, voleybol, halı saha ve çok amaçlı sahalar
                  </div>
                </div>

                <div
                  style={{
                    padding: "26px 28px",
                    borderRight: "1px solid var(--color-border)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(32px, 3.5vw, 42px)",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      marginBottom: 8,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    16 Zemin Seçeneği
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-line)", marginBottom: 4 }}>
                    Sertifikalı Zemin Sistemi
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)", lineHeight: 1.4 }}>
                    Akrilik, EPDM tartan, sentetik çim, ahşap parke, poliüretan ve toprak zemin
                  </div>
                </div>

                <div
                  style={{
                    padding: "26px 28px",
                    borderRight: "1px solid var(--color-border)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(32px, 3.5vw, 42px)",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      marginBottom: 8,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Yüzlerce Saha
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-line)", marginBottom: 4 }}>
                    Eksiksiz Teslimat
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)", lineHeight: 1.4 }}>
                    İstanbul başta olmak üzere Türkiye genelinde tamamlanan proje
                  </div>
                </div>

                <div
                  style={{
                    padding: "26px 28px",
                    borderBottom: "1px solid var(--color-border)",
                    background: "rgba(31, 107, 74, 0.03)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(32px, 3.5vw, 42px)",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      marginBottom: 8,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    1988
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-line)", marginBottom: 4 }}>
                    Kuruluş Yılı
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)", lineHeight: 1.4 }}>
                    Aynı kurumsal adres ve kesintisiz müteahhitlik güvencesi
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ── 2. TENİS KORTU YAPIMI (ASİMETRİK EDİTORYAL DÜZEN) ────────────── */}
      <section
        id="tenis-kortu"
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
          background: "var(--color-card)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(36px, 5vw, 64px)",
                alignItems: "center",
                marginBottom: 56,
              }}
            >
              {/* Sol: Metin & Kurumsal Kimlik */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 14,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)" }} />
                  <span>Tenis Kortu İnşaatı</span>
                </div>

                <h2
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "var(--color-line)",
                    margin: "0 0 20px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Uluslararası ITF Standartlarında <br /> Profesyonel Tenis Kortları
                </h2>

                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-line-dim)", margin: "0 0 24px" }}>
                  Tenis kortu zeminleri temel olarak Doğal Tenis Kortu Zemini (toprak ve doğal çim) ile Suni Tenis Kortu Zemini (akrilik, tartan EPDM ve suni çim) olarak ikiye ayrılır. Açık kortlarda asgari 4m tel örgü çevrelemesi, kapalı kortlarda ise 10–11m toplam çelik konstrüksiyon yüksekliğiyle ITF normlarında anahtar teslim tesisler inşa ediyoruz.
                </p>

                {/* Hedef Kitle Cümlesi & Süre */}
                <div
                  style={{
                    padding: "18px 20px",
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    marginBottom: 32,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--color-line)" }}>
                    <Trophy size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>
                      <strong>Kullanım Alanları:</strong> Tenis kulüpleri, spor akademileri, butik oteller ve prestijli konut siteleri için özel projelendirilir.
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, color: "var(--color-line-dim)", borderTop: "1px solid var(--color-border)", paddingTop: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Ruler size={16} color="var(--color-accent)" />
                      <span>Standart Ölçü: <strong>18 × 36 m (648 m²)</strong></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Clock size={16} color="var(--color-accent)" />
                      <span>Teslimat Süresi: <strong>3–4 Hafta</strong></span>
                    </div>
                  </div>
                </div>

                {/* Butonlar: Güçlü Birincil CTA + Sade İkincil Link */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                  <Link to="/iletisim" className="btn-primary" style={{ gap: 8 }}>
                    Tenis Kortu Teklifi Al
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                  <Link
                    to="/hizmetler/tenis-kortu-yapimi"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      borderBottom: "1.5px solid var(--color-accent)",
                      paddingBottom: 2,
                      transition: "opacity 0.2s",
                    }}
                  >
                    Kort yapım aşamalarını incele
                  </Link>
                </div>
              </div>

              {/* Sağ: Büyük Mimari Saha Görseli */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    border: "1px solid var(--color-border)",
                    overflow: "hidden",
                    background: "var(--color-bg-soft)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/hizmetler/tenisKortuYapimi.jpg`}
                    alt="İstanbul profesyonel tenis kortu yapımı — Gözde İnşaat"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "rgba(26, 29, 32, 0.85)",
                      backdropFilter: "blur(6px)",
                      color: "#FFFFFF",
                      padding: "8px 16px",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Açık & Kapalı Çelik Konstrüksiyon Kort Uygulaması
                  </div>
                </div>
              </div>
            </div>
            {/* Zemin Seçenekleri Özeti ve Link */}
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-line-dim)" }}>
                Tenis kortu için <strong style={{color: "var(--color-line)"}}> 5 farklı sertifikalı zemin seçeneği </strong> mevcuttur.
              </div>
              <Link
                to="/hizmetler/tenis-kortu-yapimi"
                className="btn-primary"
                style={{ padding: "10px 20px", fontSize: 14, gap: 8 }}
              >
                Zemin Seçeneklerini İncele
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. BASKETBOL SAHASI YAPIMI (TERS YERLEŞİMLİ DİNAMİK DÜZEN) ─────── */}
      <section
        id="basketbol-sahasi"
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(36px, 5vw, 64px)",
                alignItems: "center",
                marginBottom: 56,
              }}
            >
              {/* Sol: Büyük Basketbol Sahası Görseli */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    border: "1px solid var(--color-border)",
                    overflow: "hidden",
                    background: "var(--color-bg-soft)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/hizmetler/basketbolSahasi.jpg`}
                    alt="Açık ve kapalı basketbol sahası yapımı — Gözde İnşaat"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "rgba(26, 29, 32, 0.85)",
                      backdropFilter: "blur(6px)",
                      color: "#FFFFFF",
                      padding: "8px 16px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    FIBA Normlarında 28 × 15 m Saha Uygulaması
                  </div>
                </div>
              </div>

              {/* Sağ: Metin & Detaylar */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 14,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)" }} />
                  <span>Basketbol Sahası İnşaatı</span>
                </div>

                <h2
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "var(--color-line)",
                    margin: "0 0 20px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Açık Hava ve Kapalı Spor Salonu <br /> Basketbol Sahaları
                </h2>

                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-line-dim)", margin: "0 0 24px" }}>
                  Gözde İnşaat tarafından profesyonel şartlarda sunulan basketbol sahası yapımı ve yenileme hizmetleri siz basketbol severlere maksimum performans sunmaktadır. Sahalar amaca göre <strong>Açık Basketbol Sahası (tel örgü ile çevrili)</strong> ve <strong>Kapalı Basketbol Sahası (beton veya çelik konstrüksiyon)</strong> olarak ikiye ayrılır. Mükemmel top sekme performansı, kaymaz yüzey yapısı ve dayanıklı altyapısıyla FIBA standartlarında açık ve kapalı sahalar inşa ediyoruz.
                </p>

                {/* Kullanım Alanı ve Metrikler */}
                <div
                  style={{
                    padding: "18px 20px",
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    marginBottom: 32,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--color-line)" }}>
                    <GraduationCap size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>
                      <strong>Kullanım Alanları:</strong> Okul kampüsleri, belediye spor kompleksleri, site yönetimleri ve profesyonel basketbol kulüpleri.
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, color: "var(--color-line-dim)", borderTop: "1px solid var(--color-border)", paddingTop: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Ruler size={16} color="var(--color-accent)" />
                      <span>Standart Ölçü: <strong>28 × 15 m (420 m²)</strong></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Clock size={16} color="var(--color-accent)" />
                      <span>Teslimat Süresi: <strong>2–4 Hafta</strong></span>
                    </div>
                  </div>
                </div>

                {/* Aksiyonlar */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                  <Link to="/iletisim" className="btn-primary" style={{ gap: 8 }}>
                    Basketbol Sahası Keşfi İste
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                  <Link
                    to="/hizmetler/basketbol-sahasi-yapimi"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      borderBottom: "1.5px solid var(--color-accent)",
                      paddingBottom: 2,
                    }}
                  >
                    Teknik detayları ve pota sistemlerini gör
                  </Link>
                </div>
              </div>
            </div>
            {/* Zemin Seçenekleri Özeti ve Link */}
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-line-dim)" }}>
                Basketbol sahası için <strong style={{color: "var(--color-line)"}}> 4 farklı zemin sistemi (Akrilik, Tartan, Parke, Poliüretan) </strong> mevcuttur.
              </div>
              <Link
                to="/hizmetler/basketbol-sahasi-yapimi"
                className="btn-primary"
                style={{ padding: "10px 20px", fontSize: 14, gap: 8 }}
              >
                Zemin Seçeneklerini İncele
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. ÇOK AMAÇLI SAHA YAPIMI (MODERN BENTO GRID DÜZENİ) ───────────── */}
      <section
        id="cok-amacli-saha"
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
          background: "var(--color-card)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div style={{ maxWidth: 760, marginBottom: 44 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--color-accent)",
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)" }} />
                <span>Kombine Spor Alanları</span>
              </div>

              <h2
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "var(--color-line)",
                  margin: "0 0 16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Tek Sahada Çoklu Spor: Çok Amaçlı Spor Sahaları
              </h2>

              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-line-dim)", margin: 0 }}>
                Okullar, toplu konutlar ve siteler için halı saha, basketbol, tenis ve voleybol gibi farklı spor dallarının bir arada icra edilmesine olanak sağlayan çok amaçlı sahalar inşa ediyoruz. 11mm–30mm hav boyunda sentetik çim ve EPDM tartan zemin üzerine özel renk kodlu kombine çizgiler uyguluyoruz.
              </p>
            </div>

            {/* BENTO GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: 24,
                marginBottom: 40,
              }}
              className="bento-grid-container"
            >
              {/* Bento Kart 1: Büyük Görsel & Özellik (8 Sütun) */}
              <div
                style={{
                  gridColumn: "span 8",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="bento-card-large"
              >
                <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/hizmetler/cokAmacliSaha.jpg`}
                    alt="Çok amaçlı spor sahası yapımı — Gözde İnşaat"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(26,29,32,0.85) 0%, transparent 60%)",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 20, left: 24, right: 24, color: "#FFFFFF" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#A7F3D0", marginBottom: 4 }}>
                      Kombine Çizgi Teknolojisi
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700 }}>
                      Tenis (Beyaz), Basketbol (Sarı) ve Voleybol (Mavi) Çizgileri
                    </div>
                  </div>
                </div>

                <div style={{ padding: 28 }}>
                  <p style={{ fontSize: 15, color: "var(--color-line-dim)", lineHeight: 1.65, margin: "0 0 20px" }}>
                    Özel reçeteli UV dayanıklı zemin boyaları ile uygulanan çizgiler, oyuncuların branşları karıştırmadan
                    kolayca odaklanmasını sağlar. Hem sentetik çim hem de EPDM zemin üzerine profesyonelce tatbik edilir.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 13 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-line)" }}>
                      <CheckCircle size={18} color="var(--color-accent)" weight="fill" />
                      <span>Çok Fonksiyonlu File ve Direkler</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-line)" }}>
                      <CheckCircle size={18} color="var(--color-accent)" weight="fill" />
                      <span>Kombine Pota ve Mini Kale Sistemleri</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-line)" }}>
                      <CheckCircle size={18} color="var(--color-accent)" weight="fill" />
                      <span>Gece Kullanımı İçin LED Aydınlatma</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bento Kart 2: Alan Tasarrufu & Fayda (4 Sütun) */}
              <div
                style={{
                  gridColumn: "span 4",
                  background: "var(--color-accent)",
                  color: "#FFFFFF",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                className="bento-card-small"
              >
                <div>
                  <Buildings size={32} color="#A7F3D0" style={{ marginBottom: 20 }} />
                  <h3 style={{ fontFamily: "'General Sans', sans-serif", fontSize: 22, fontWeight: 700, margin: "0 0 14px", color: "#FFFFFF" }}>
                    Maksimum Alan Verimliliği
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255, 255, 255, 0.85)", margin: "0 0 24px" }}>
                    Ayrı ayrı 3 saha kurmak için yaklaşık 1.500 m² alan gerekirken, tek bir 18×36 m çok amaçlı sahada tüm bu sporlar 648 m² alana sığdırılır.
                  </p>

                  <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", paddingTop: 16 }}>
                    <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)", marginBottom: 4 }}>İdeal Kullanıcılar:</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>
                      Site yönetimleri, özel okullar, belediye parkları ve tatil köyleri
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/iletisim"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#FFFFFF",
                      color: "var(--color-accent)",
                      padding: "12px 20px",
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    Keşif & Fiyat Teklifi Al
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Zemin Seçenekleri Özeti ve Link */}
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-line-dim)" }}>
                Çok amaçlı sahalar için <strong style={{color: "var(--color-line)"}}> farklı branşlara uygun esnek zemin seçenekleri </strong> mevcuttur.
              </div>
              <Link
                to="/hizmetler/cok-amacli-saha-yapimi"
                className="btn-primary"
                style={{ padding: "10px 20px", fontSize: 14, gap: 8 }}
              >
                Zemin Seçeneklerini İncele
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. HALI SAHA YAPIMI (GENİŞ FORMATLI TİCARİ & TESİS DÜZENİ) ─────── */}
      <section
        id="hali-saha"
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(36px, 5vw, 64px)",
                alignItems: "center",
                marginBottom: 56,
              }}
            >
              {/* Sol: Halı Saha Açıklama */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 14,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)" }} />
                  <span>Futbol & Halı Saha Tesisleri</span>
                </div>

                <h2
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "var(--color-line)",
                    margin: "0 0 20px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  FIFA Standartlarında Açık ve <br /> Kapalı Halı Saha İnşaatı
                </h2>

                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--color-line-dim)", margin: "0 0 24px" }}>
                  Sipariş edilen sentetik çim maksimum 2 hafta içinde teslim edilir. 55 mm ve 60 mm monofilament sentetik çim teknolojisi, silis kumu ve SBR/EPDM granül dolgusuyla profesyonel maç konforu sunuyoruz. Çelik konstrüksiyon kapalı halı saha çözümlerimizle kış şartlarında dahi kesintisiz ticari işletme imkânı sağlıyoruz.
                </p>

                {/* Bilgi Kutusu */}
                <div
                  style={{
                    padding: "18px 20px",
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    marginBottom: 32,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--color-line)" }}>
                    <Buildings size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>
                      <strong>Kullanım Alanları:</strong> Ticari halı saha işletmeleri, spor kulüpleri tesisleri, belediye spor merkezleri ve kurumsal kampüsler.
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, color: "var(--color-line-dim)", borderTop: "1px solid var(--color-border)", paddingTop: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Ruler size={16} color="var(--color-accent)" />
                      <span>Formatlar: <strong>5'e 5, 7'ye 7 veya 11'e 11 Nizami</strong></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Clock size={16} color="var(--color-accent)" />
                      <span>Teslimat Süresi: <strong>4–6 Hafta</strong></span>
                    </div>
                  </div>
                </div>

                {/* Aksiyonlar */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                  <Link to="/iletisim" className="btn-primary" style={{ gap: 8 }}>
                    Halı Saha Projesi İçin Teklif Al
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                  <Link
                    to="/hizmetler/hali-saha-yapimi"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      borderBottom: "1.5px solid var(--color-accent)",
                      paddingBottom: 2,
                    }}
                  >
                    Halı saha sentetik çim modellerini gör
                  </Link>
                </div>
              </div>

              {/* Sağ: Halı Saha Görseli */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    border: "1px solid var(--color-border)",
                    overflow: "hidden",
                    background: "var(--color-bg-soft)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/hizmetler/haliSaha.jpg`}
                    alt="Anahtar teslim halı saha yapımı sentetik çim — Gözde İnşaat"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "rgba(26, 29, 32, 0.85)",
                      backdropFilter: "blur(6px)",
                      color: "#FFFFFF",
                      padding: "8px 16px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    Açık & Kapalı Çelik Konstrüksiyon Halı Saha
                  </div>
                </div>
              </div>
            </div>

            {/* Halı Saha Yapı Çeşitleri (Açık vs Kapalı vs EPDM Granüllü) */}
            {/* Zemin Seçenekleri Özeti ve Link */}
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-line-dim)" }}>
                Halı saha için <strong style={{color: "var(--color-line)"}}> FIFA standartlarında sentetik çim alternatifleri </strong> mevcuttur.
              </div>
              <Link
                to="/hizmetler/hali-saha-yapimi"
                className="btn-primary"
                style={{ padding: "10px 20px", fontSize: 14, gap: 8 }}
              >
                Zemin Seçeneklerini İncele
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. VOLEYBOL SAHASI VE EK HİZMETLER (ZARİF ŞERİT DÜZENİ) ───────── */}
      <section
        id="voleybol-sahasi"
        style={{
          paddingTop: "clamp(70px, 9vw, 110px)",
          paddingBottom: "clamp(70px, 9vw, 110px)",
          background: "var(--color-card)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(36px, 5vw, 64px)",
                alignItems: "center",
              }}
            >
              {/* Sol: Görsel */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/10",
                    border: "1px solid var(--color-border)",
                    overflow: "hidden",
                    background: "var(--color-bg-soft)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/projeler/ankaraincekdogakoleji.jpg`}
                    alt="Voleybol sahası yapımı Ankara Doğa Koleji — Gözde İnşaat"
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "rgba(26, 29, 32, 0.85)",
                      backdropFilter: "blur(6px)",
                      color: "#FFFFFF",
                      padding: "8px 16px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    18 × 9 m Nizami Voleybol Ölçüsü
                  </div>
                </div>
              </div>

              {/* Sağ: Açıklama */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 14,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)" }} />
                  <span>Voleybol Sahası İnşaatı</span>
                </div>

                <h2
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(26px, 3.2vw, 38px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "var(--color-line)",
                    margin: "0 0 16px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Turnuva Standartlarında Voleybol Sahaları
                </h2>

                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-line-dim)", margin: "0 0 20px" }}>
                  Açık hava ve kapalı spor salonları için uluslararası federasyon normlarında teleskopik file direkleri,
                  hakem kulesi ve kaymaz zemin kaplamalarıyla anahtar teslim voleybol sahaları kuruyoruz.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                    marginBottom: 28,
                    fontSize: 14,
                    color: "var(--color-line)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-line)" }}>
                    <CheckCircle size={16} color="var(--color-accent)" weight="fill" />
                    <span>Akrilik veya EPDM Tartan Zemin</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-line)" }}>
                    <CheckCircle size={16} color="var(--color-accent)" weight="fill" />
                    <span>Yüksekliği Ayarlanabilir Direkler</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-line)" }}>
                    <CheckCircle size={16} color="var(--color-accent)" weight="fill" />
                    <span>Nizami Çizgi ve Çevre Filesi</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-line)" }}>
                    <CheckCircle size={16} color="var(--color-accent)" weight="fill" />
                    <span>2–3 Hafta Teslimat Süresi</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <Link to="/iletisim" className="btn-primary" style={{ gap: 8 }}>
                    Keşif & Fiyat Teklifi İste
                    <ArrowRight size={15} weight="bold" />
                  </Link>
                  <Link
                    to="/hizmetler/voleybol-sahasi-yapimi"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      borderBottom: "1.5px solid var(--color-accent)",
                      paddingBottom: 2,
                    }}
                  >
                    Voleybol sahası detayları
                  </Link>
                </div>
              </div>
            </div>
          
            {/* Zemin Seçenekleri Özeti ve Link */}
            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-line-dim)" }}>
                Voleybol sahası için <strong style={{color: "var(--color-line)"}}> özel şok emici zemin alternatifleri </strong> mevcuttur.
              </div>
              <Link
                to="/hizmetler/voleybol-sahasi-yapimi"
                className="btn-primary"
                style={{ padding: "10px 20px", fontSize: 14, gap: 8 }}
              >
                Zemin Seçeneklerini İncele
                <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 7. ÇOCUK OYUN PARKI (TAMAMLAYICI HİZMET) ──────────────────────── */}
      <section
        id="cocuk-parki"
        style={{
          paddingTop: "clamp(60px, 8vw, 90px)",
          paddingBottom: "clamp(60px, 8vw, 90px)",
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "clamp(30px, 4vw, 56px)",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "16/10", border: "1px solid var(--color-border)", overflow: "hidden" }}>
                <img
                  src={`${import.meta.env.BASE_URL}images/hizmetler/cocukparki1.jpg`}
                  alt="Çocuk oyun parkı dökme kauçuk zemin kaplama — Gözde İnşaat"
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-line-dim)", marginBottom: 8 }}>
                  Tamamlayıcı Çevre Hizmetimiz
                </div>
                <h3
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: 700,
                    margin: "0 0 14px",
                    color: "var(--color-line)",
                  }}
                >
                  Güvenli EPDM Kauçuk Zeminli Çocuk Oyun Parkları
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--color-line-dim)", margin: "0 0 20px" }}>
                  Siteler, okullar ve belediye parkları için çocuk sağlığına zararsız, darbe sönümleyici EPDM dökme kauçuk
                  ve karo kauçuk zemin kaplamaları ile oyun grubu montajlarını anahtar teslim gerçekleştiriyoruz.
                </p>

                <Link
                  to="/iletisim"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    borderBottom: "1.5px solid var(--color-accent)",
                    paddingBottom: 2,
                  }}
                >
                  Oyun parkı zemin seçenekleri ve fiyat bilgisi al
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 8. KURUMSAL GÜVEN & BİRİNCİL İLETİŞİM ÇAĞRISI (CTA) ───────────── */}
      <section
        style={{
          background: "var(--color-accent-dark, #154D35)",
          color: "#FFFFFF",
          paddingTop: "clamp(80px, 10vw, 110px)",
          paddingBottom: "clamp(80px, 10vw, 110px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #FFFFFF 0%, transparent 60%),
              linear-gradient(to right, #FFFFFF 1px, transparent 1px),
              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          }}
        />

        <div className="page-wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <ScrollReveal>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  background: "rgba(255, 255, 255, 0.12)",
                  borderRadius: 2,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#A7F3D0",
                  marginBottom: 24,
                }}
              >
                <ShieldCheck size={18} weight="fill" />
                <span>Gözde İnşaat Taahhüt ve Kalite Güvencesi</span>
              </div>

              <h2
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(30px, 4.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  margin: "0 0 20px",
                }}
              >
                Projeniz İçin Doğru Zemini ve <br /> Maliyet Planını Birlikte Belirleyelim
              </h2>

              <p
                style={{
                  fontSize: "clamp(16px, 1.8vw, 18px)",
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, 0.85)",
                  margin: "0 auto 36px",
                  maxWidth: "58ch",
                }}
              >
                Arsanızın kot ve drenaj durumunu ücretsiz yerinde inceleyelim. İhtiyacınıza en uygun zemin türünü,
                çevre tel çit sistemini ve aydınlatma projesini 24 saat içinde tekliflendirelim.
              </p>

              {/* 3 Güven Maddesi */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 20,
                  margin: "0 auto 40px",
                  textAlign: "left",
                }}
              >
                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: 20, border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#FFFFFF", marginBottom: 6 }}>Ücretsiz Yerinde Keşif</div>
                  <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.5 }}>
                    Mühendislerimiz arsanızı yerinde inceleyerek zemin etüdü yapar.
                  </div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: 20, border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#FFFFFF", marginBottom: 6 }}>24 Saat İçinde Teklif</div>
                  <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.5 }}>
                    Metraj, malzeme ve teslim takvimini içeren net maliyet tablosu.
                  </div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: 20, border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#FFFFFF", marginBottom: 6 }}>Kurumsal Garanti</div>
                  <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.5 }}>
                    Tüm zemin katmanları, boyalar ve çelik sistemlerde yazılı garanti.
                  </div>
                </div>
              </div>

              {/* Ana Buton */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <Link
                  to="/iletisim"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#FFFFFF",
                    color: "var(--color-accent-dark, #154D35)",
                    padding: "16px 36px",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#F0EDE6")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
                >
                  Ücretsiz Keşif Talep Et
                  <ArrowRight size={16} weight="bold" />
                </Link>

                <a
                  href="tel:+902163110994"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    color: "#FFFFFF",
                    padding: "14px 24px",
                    fontWeight: 600,
                    fontSize: 15,
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    textDecoration: "none",
                  }}
                >
                  <PhoneCall size={18} weight="bold" color="#A7F3D0" />
                  <span>0 (216) 311 09 94</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Responsive Stiller */}
      <style>{`
        @media (max-width: 900px) {
          .bento-grid-container {
            grid-template-columns: 1fr !important;
          }
          .bento-card-large {
            grid-column: span 12 !important;
          }
          .bento-card-small {
            grid-column: span 12 !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}