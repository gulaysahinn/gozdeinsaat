import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  CaretRight,
  CaretDown,
  CaretUp,
  PhoneCall,
  ShieldCheck,
  MapPin,
  Stack,
  Drop,
  Lightbulb,
  Trophy,
  ArrowRight,
  SealCheck,
  Clock
} from "@phosphor-icons/react";
import QuoteForm from "./QuoteForm";
import FloorComparisonCards from "./FloorComparisonCards";
import SportCourtDiagram from "./SportCourtDiagram";
import ScrollReveal from "./ScrollReveal";

function ProcessTimeline({ items, color }) {
  if (!items || items.length === 0) return null;

  const effectiveSteps = items.map((it, idx) => ({
    stage: `0${idx + 1}. Aşama`,
    title: it.title,
    desc: it.desc,
  }));

  return (
    <div style={{ position: "relative", paddingLeft: "clamp(24px, 4vw, 40px)" }}>
      {/* Sol Dikey Zaman Çizgisi Hattı */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 11,
          top: 10,
          bottom: 10,
          width: 2,
          background: "var(--color-border)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {effectiveSteps.map((step, i) => (
          <div key={i} style={{ position: "relative" }}>
            {/* Zaman Noktası */}
            <div
              style={{
                position: "absolute",
                left: "clamp(-35px, -4vw, -51px)",
                top: 4,
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "var(--color-card)",
                border: `3px solid ${color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 4px var(--color-bg)",
              }}
            />

            <div
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                padding: "20px 24px",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: color,
                  letterSpacing: "0.04em",
                  marginBottom: 6,
                }}
              >
                {step.stage}
              </div>
              <h4
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--color-line)",
                  margin: "0 0 8px",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "var(--color-line-dim)",
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicePage({
  service,
  relatedServices = [],
  detailedSections = [],
  costFactors = [],
  buildSteps = [],
  comparisonTable = null,
  faq = [],
}) {
  const [openFaq, setOpenFaq] = useState(-1);

  if (!service) return null;
  const cAccent = service.color || "var(--color-accent)";

  // Branş ve Federasyon Tespiti
  const tag = (service.tag || "").toLowerCase();
  const title = (service.title || "").toLowerCase();

  let federation = "ITF";
  let diagramIntro = "Uluslararası Tenis Federasyonu (ITF) kurallarına göre bir tenis kortunun sadece oyun alanı değil, yan ve arka kaçış alanlarının da eksiksiz projelendirilmesi gerekir.";

  if (tag.includes("basketbol") || title.includes("basketbol")) {
    federation = "FIBA";
    diagramIntro = "Uluslararası Basketbol Federasyonu (FIBA) standartlarına göre nizami bir basketbol sahası 28×15 m oyun alanı ve en az 2.00 m çevre güvenlik koridoru gerektirir.";
  } else if (tag.includes("voleybol") || title.includes("voleybol")) {
    federation = "FIVB";
    diagramIntro = "Uluslararası Voleybol Federasyonu (FIVB) standartlarına göre nizami voleybol sahası 18×9 m oyun alanı ve çevre serbest güvenlik bölgesiyle inşa edilir.";
  } else if (tag.includes("halı") || title.includes("halı")) {
    federation = "FIFA";
    diagramIntro = "FIFA kalite standartlarına göre ticari halı sahalar 5'e 5 (20×40 m) veya 7'ye 7 (30×50 m) formatlarında, oyuncu konforunu sağlayan kaçış alanlarıyla projelendirilir.";
  } else if (tag.includes("çok") || title.includes("çok")) {
    federation = "Çoklu Branş";
    diagramIntro = "Tek bir alanda tenis, basketbol ve voleybol sporlarının oynanabilmesi için 18×36 m ebadında, renk kodlu nizami çizgilerle projelendirilir.";
  }

  // Doğal hedef kitle cümlesi (noktalı dizilimden temizlenmiş)
  const naturalForWho = service.forWho
    ? service.forWho.replace(/\s*·\s*/g, ", ")
    : "Spor kulüpleri, butik oteller, eğitim kurumları ve prestijli site projeleri";

  // Yalnızca props'dan gelen costFactors'ı kullanacağız.

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-line)" }}>
      <Helmet>
        <title>{service.title} Yapımı ve Fiyatları | Gözde İnşaat</title>
        <meta
          name="description"
          content={`${service.title} yapımında 1988'den beri anahtar teslim mühendislik. ${service.desc}`}
        />
      </Helmet>

      {/* ── 1. HERO BÖLÜMÜ ──────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          paddingTop: "clamp(80px, 9vw, 110px)",
          paddingBottom: "clamp(50px, 7vw, 80px)",
          background: "var(--color-bg-soft)",
          borderBottom: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
      >
        {/* Arka Plan Mimari Blueprint Deseni */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.35,
            pointerEvents: "none",
            backgroundImage: `
              radial-gradient(circle at 80% 20%, rgba(31, 107, 74, 0.08) 0%, transparent 50%),
              linear-gradient(to right, rgba(222, 218, 209, 0.6) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(222, 218, 209, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          }}
        />

        <div className="page-wrap" style={{ position: "relative", zIndex: 2 }}>
          <ScrollReveal>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, fontSize: 13 }}>
              <Link to="/" style={{ color: "var(--color-line-dim)", textDecoration: "none" }}>Ana Sayfa</Link>
              <CaretRight size={12} color="var(--color-line-dim)" />
              <Link to="/hizmetler" style={{ color: "var(--color-line-dim)", textDecoration: "none" }}>Hizmetlerimiz</Link>
              <CaretRight size={12} color="var(--color-line-dim)" />
              <span style={{ color: cAccent, fontWeight: 700 }}>{service.title}</span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(32px, 5vw, 64px)",
                alignItems: "center",
              }}
            >
              {/* Sol: Metinler & Aksiyonlar */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 12px",
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    marginBottom: 16,
                    fontSize: 12,
                    fontWeight: 700,
                    color: cAccent,
                  }}
                >
                  <SealCheck size={16} weight="fill" />
                  <span>1988'DEN BUGÜNE • {federation} Standartlarında Uygulama</span>
                </div>

                <h1
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(32px, 4.5vw, 54px)",
                    fontWeight: 700,
                    color: "var(--color-line)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    margin: "0 0 20px",
                  }}
                >
                  {service.title} Yapımı ve Anahtar Teslim Çözümler
                </h1>

                <p style={{ fontSize: "1.05rem", color: "var(--color-line-dim)", lineHeight: 1.7, margin: "0 0 20px" }}>
                  {service.desc} {service.detail}
                </p>

                {/* Açık / Kapalı Saha Tipleri Ayrımı */}
                {service.courtTypes && service.courtTypes.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                    {service.courtTypes.map((ct, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "6px 12px",
                          background: "var(--color-card)",
                          border: "1px solid var(--color-border)",
                          fontSize: 13,
                          fontWeight: 600,
                          color: "var(--color-line)",
                          borderRadius: 2,
                        }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: cAccent }} />
                        {ct}
                      </span>
                    ))}
                  </div>
                )}

                {/* Hedef Kitle Cümlesi */}
                <div
                  style={{
                    padding: "12px 16px",
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    marginBottom: 32,
                    fontSize: 14,
                    color: "var(--color-line-dim)",
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: "var(--color-line)" }}>İdeal Projeler: </strong>
                  {naturalForWho} için zemin etüdünden ekipman montajına kadar anahtar teslim inşa edilir.
                </div>

                {/* Aksiyon Butonları */}
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <button
                    onClick={() => document.getElementById("teklif-formu")?.scrollIntoView({ behavior: "smooth" })}
                    className="btn-primary"
                    style={{ gap: 8 }}
                  >
                    Ücretsiz Keşif & Fiyat Teklifi Al
                    <ArrowRight size={15} weight="bold" />
                  </button>

                  <a
                    href="tel:+902163110994"
                    style={{
                      background: "var(--color-card)",
                      color: "var(--color-line)",
                      border: "1px solid var(--color-border)",
                      padding: "14px 24px",
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <PhoneCall size={18} color={cAccent} weight="fill" />
                    0 (216) 311 09 94
                  </a>
                </div>
              </div>

              {/* Sağ: Gerçek Saha Görseli */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 14,
                      left: 14,
                      background: "rgba(26, 29, 32, 0.88)",
                      backdropFilter: "blur(6px)",
                      color: "#FFFFFF",
                      padding: "8px 14px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    Nizami {service.spec} • Açık & Kapalı Çelik Konstrüksiyon Saha
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. STANDART ÖLÇÜLER & TEKNİK ŞEMA (BRANŞA ÖZEL ÖLÇEKLİ ÇİZİM) ───── */}
      <section style={{ padding: "clamp(60px, 8vw, 90px) 0", background: "var(--color-bg)" }}>
        <div className="page-wrap">
          <ScrollReveal>
            <div style={{ maxWidth: 740, marginBottom: 36 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: cAccent, marginBottom: 8 }}>
                Mühendislik & Şartname Normları
              </div>
              <h2
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 700,
                  margin: "0 0 14px",
                  color: "var(--color-line)",
                }}
              >
                Standart {service.title} Ölçüleri ve Altyapı Bileşenleri
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-line-dim)", margin: 0 }}>
                {diagramIntro}
              </p>
            </div>

            {/* Branşa Özel Ölçekli Saha Çizimi */}
            <SportCourtDiagram service={service} />

            {/* Dahil Olan Hizmetler (Kapsam) */}
            {service.includes && service.includes.length > 0 && (
              <div
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  padding: "clamp(20px, 3vw, 32px)",
                  marginTop: 32,
                }}
              >
                <h4
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--color-line)",
                    margin: "0 0 18px",
                  }}
                >
                  Anahtar Teslim Hizmet Kapsamına Dahil Olanlar
                </h4>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 14,
                  }}
                >
                  {service.includes.map((inc, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <CheckCircle size={18} color={cAccent} weight="fill" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "var(--color-line)", fontWeight: 500 }}>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. ZEMİN SEÇENEKLERİ (HİYERARŞİK SUNUM) ───────────────────────── */}
      {service.floors && service.floors.length > 0 && (
        <section
          style={{
            padding: "clamp(60px, 8vw, 90px) 0",
            background: "var(--color-card)",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="page-wrap">
            <ScrollReveal>
              <div style={{ maxWidth: 740, marginBottom: 40 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: cAccent, marginBottom: 8 }}>
                  Zemin Mühendisliği
                </div>
                <h2
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(26px, 3.2vw, 38px)",
                    fontWeight: 700,
                    margin: "0 0 14px",
                    color: "var(--color-line)",
                  }}
                >
                  Kullanım Amacına Göre Zemin Seçenekleri
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-line-dim)", margin: 0 }}>
                  Top sekme performansı, oyuncu güvenliği ve bütçenize göre sertifikalı zemin sistemlerimizi
                  uluslararası federasyon normlarında uyguluyoruz.
                </p>
              </div>

              {/* Zemin Kartları */}
              <FloorComparisonCards floors={service.floors} color={cAccent} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── AÇIK / KAPALI TEKNİK ÖZELLİK TABLOSU ─────────────────────────── */}
      {comparisonTable && (
        <section
          style={{
            padding: "clamp(60px, 8vw, 90px) 0",
            background: "var(--color-bg)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div className="page-wrap">
            <ScrollReveal>
              <div style={{ maxWidth: 740, marginBottom: 36 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: cAccent, marginBottom: 8 }}>
                  {comparisonTable.badge || "Mühendislik & Şartname Karşılaştırması"}
                </div>
                <h2
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(26px, 3.2vw, 38px)",
                    fontWeight: 700,
                    margin: "0 0 14px",
                    color: "var(--color-line)",
                  }}
                >
                  {comparisonTable.title || "Açık ve Kapalı Kort Teknik Karşılaştırması"}
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-line-dim)", margin: 0 }}>
                  {comparisonTable.subtitle ||
                    "Kullanım amacı, iklim şartları ve bütçenize göre açık tel örgülü veya kapalı çelik konstrüksiyon kort teknik spesifikasyonları."}
                </p>
              </div>

              {/* Tablo Konteyneri */}
              <div
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                  overflowX: "auto",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    textAlign: "left",
                    minWidth: 640,
                  }}
                >
                  <thead>
                    <tr style={{ background: "var(--color-bg-soft)", borderBottom: "2px solid var(--color-border)" }}>
                      <th
                        style={{
                          padding: "18px 24px",
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--color-line)",
                          width: "22%",
                          borderRight: "1px solid var(--color-border)",
                        }}
                      >
                        Teknik Kriter
                      </th>
                      <th
                        style={{
                          padding: "18px 24px",
                          fontSize: 14,
                          fontWeight: 700,
                          color: cAccent,
                          width: "39%",
                          borderRight: "1px solid var(--color-border)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span>Açık Tenis Kortu</span>
                          <span
                            style={{
                              fontSize: 11,
                              padding: "2px 8px",
                              background: "var(--color-bg)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-line-dim)",
                              borderRadius: 2,
                            }}
                          >
                            Tel Örgülü Açık Saha
                          </span>
                        </div>
                      </th>
                      <th
                        style={{
                          padding: "18px 24px",
                          fontSize: 14,
                          fontWeight: 700,
                          color: cAccent,
                          width: "39%",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span>Kapalı Tenis Kortu</span>
                          <span
                            style={{
                              fontSize: 11,
                              padding: "2px 8px",
                              background: "var(--color-bg)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-line-dim)",
                              borderRadius: 2,
                            }}
                          >
                            Çelik Konstrüksiyon
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: idx === comparisonTable.rows.length - 1 ? "none" : "1px solid var(--color-border)",
                          background: idx % 2 === 0 ? "transparent" : "var(--color-bg-soft)",
                          transition: "background 0.15s ease",
                        }}
                      >
                        <td
                          style={{
                            padding: "18px 24px",
                            fontSize: 14,
                            fontWeight: 700,
                            color: "var(--color-line)",
                            verticalAlign: "top",
                            borderRight: "1px solid var(--color-border)",
                          }}
                        >
                          {row.feature}
                        </td>
                        <td
                          style={{
                            padding: "18px 24px",
                            fontSize: 14,
                            color: "var(--color-line)",
                            lineHeight: 1.6,
                            verticalAlign: "top",
                            borderRight: "1px solid var(--color-border)",
                          }}
                        >
                          {row.openCourt}
                        </td>
                        <td
                          style={{
                            padding: "18px 24px",
                            fontSize: 14,
                            color: "var(--color-line)",
                            lineHeight: 1.6,
                            verticalAlign: "top",
                          }}
                        >
                          {row.indoorCourt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── 4. SAHA YAPIM AŞAMALARI (GERÇEK ZAMAN ÇİZELGESİ) ───────────────── */}
      <section style={{ padding: "clamp(60px, 8vw, 90px) 0", background: comparisonTable ? "var(--color-card)" : "var(--color-bg)" }}>
        <div className="page-wrap">
          <ScrollReveal>
            <div style={{ maxWidth: 740, marginBottom: 44 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: cAccent, marginBottom: 8 }}>
                İş Akışı & Proje Takvimi
              </div>
              <h2
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 700,
                  margin: "0 0 14px",
                  color: "var(--color-line)",
                }}
              >
                Saha Yapım Süreci ve Katman Aşamaları
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-line-dim)", margin: 0 }}>
                Hafriyattan anahtar teslim devreye almaya kadar her aşama inşaat mühendislerimiz ve şantiye şeflerimizin
                kontrolünde yürütülür.
              </p>
            </div>

            <ProcessTimeline
              items={buildSteps}
              color={cAccent}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. MALİYET VE KALİTE FAKTÖRLERİ (FARKLILAŞMIŞ GÖRSEL DİL) ──────── */}
      <section
        style={{
          padding: "clamp(60px, 8vw, 90px) 0",
          background: "var(--color-card)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div style={{ maxWidth: 740, marginBottom: 40 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: cAccent, marginBottom: 8 }}>
                Fiyatlandırma & Dayanıklılık Kriterleri
              </div>
              <h2
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 700,
                  margin: "0 0 14px",
                  color: "var(--color-line)",
                }}
              >
                Maliyet ve Kaliteyi Belirleyen 5 Temel Unsur
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-line-dim)", margin: 0 }}>
                Bir spor sahasının uzun yıllar çatlamadan ve su tutmadan hizmet vermesini sağlayan kritik teknik kriterler:
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {costFactors.map((f, i) => {
                const IconComponent = f.Icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: "var(--color-bg)",
                      padding: 24,
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          background: "var(--color-card)",
                          border: "1px solid var(--color-border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 16,
                          color: cAccent,
                        }}
                      >
                        <IconComponent size={22} weight="bold" />
                      </div>
                      <h4
                        style={{
                          fontFamily: "'General Sans', sans-serif",
                          fontSize: 17,
                          fontWeight: 700,
                          color: "var(--color-line)",
                          margin: "0 0 8px",
                        }}
                      >
                        {f.title}
                      </h4>
                      <p style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.6, margin: 0 }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. SSS (NUMARASIZ, SADE VE ŞIK ACCORDION) ──────────────────────── */}
      {faq && faq.length > 0 && (
        <section style={{ padding: "clamp(60px, 8vw, 90px) 0", background: "var(--color-bg)" }}>
          <div className="page-wrap" style={{ maxWidth: 860 }}>
            <ScrollReveal>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: cAccent, marginBottom: 8 }}>
                  Merak Edilenler
                </div>
                <h2
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(26px, 3.2vw, 36px)",
                    fontWeight: 700,
                    margin: 0,
                    color: "var(--color-line)",
                  }}
                >
                  Sıkça Sorulan Sorular
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {faq.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      style={{
                        border: `1px solid ${isOpen ? cAccent : "var(--color-border)"}`,
                        background: "var(--color-card)",
                        overflow: "hidden",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : i)}
                        style={{
                          width: "100%",
                          padding: "20px 24px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          background: isOpen ? "var(--color-bg-soft)" : "transparent",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          gap: 16,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'General Sans', sans-serif",
                            fontSize: "1.05rem",
                            fontWeight: 600,
                            color: isOpen ? cAccent : "var(--color-line)",
                          }}
                        >
                          {item.q}
                        </span>
                        {isOpen ? (
                          <CaretUp size={18} color={cAccent} weight="bold" />
                        ) : (
                          <CaretDown size={18} color="var(--color-line-dim)" weight="bold" />
                        )}
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: "16px 24px 24px",
                            color: "var(--color-line-dim)",
                            fontSize: 15,
                            lineHeight: 1.7,
                            borderTop: "1px solid var(--color-border)",
                          }}
                        >
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── 7. TEKLİF FORMU & GÜVEN (KOYU YEŞİL ZEMİN ÜZERİNE GÜÇLENDİRİLMİŞ) ── */}
      <section
        id="teklif-formu"
        style={{
          background: "var(--color-accent-dark, #154D35)",
          color: "#FFFFFF",
          padding: "clamp(70px, 9vw, 100px) 0",
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
              radial-gradient(circle at 10% 30%, #FFFFFF 0%, transparent 60%),
              linear-gradient(to right, #FFFFFF 1px, transparent 1px),
              linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 36px 36px, 36px 36px",
          }}
        />

        <div className="page-wrap" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(40px, 6vw, 70px)",
              alignItems: "center",
            }}
          >
            {/* Sol: Güven Maddeleri ve Keşif Mesajı */}
            <ScrollReveal>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 14px",
                  background: "rgba(255, 255, 255, 0.12)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#A7F3D0",
                  marginBottom: 20,
                }}
              >
                <ShieldCheck size={16} weight="fill" />
                <span>38 Yıllık Taahhüt Güvencesi</span>
              </div>

              <h2
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  margin: "0 0 20px",
                }}
              >
                {service.title} Projeniz İçin <br /> Ücretsiz Keşif ve Teklif Alın
              </h2>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  margin: "0 0 32px",
                  maxWidth: 520,
                }}
              >
                Saha alanınızın ölçülerini, konumunu ve tercih ettiğiniz zemin tipini iletin; mühendislerimiz
                24 saat içinde detaylı maliyet analizini ve yapım takvimini hazırlasın.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <MapPin size={24} weight="fill" color="#A7F3D0" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>Ücretsiz Yerinde Keşif</div>
                    <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)" }}>
                      İstanbul ve çevre illerde teknik ekibimizle kot ve drenaj analizi.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <Clock size={24} weight="fill" color="#A7F3D0" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>24 Saat İçinde Fiyat Teklifi</div>
                    <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)" }}>
                      Malzeme cinsi, katman detayları ve teslimat takvimi net olarak sunulur.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <ShieldCheck size={24} weight="fill" color="#A7F3D0" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>Yazılı Garanti Taahhüdü</div>
                    <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)" }}>
                      Zemin kaplama, çit ve aydınlatma montajında kurumsal garanti.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Sağ: Beyaz Form Kartı (Öne Çıkarılmış) */}
            <ScrollReveal delay={0.15}>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "clamp(28px, 4vw, 44px)",
                  borderRadius: 2,
                  boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
                  color: "var(--color-line)",
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <h3
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      margin: "0 0 6px",
                    }}
                  >
                    Hemen Teklif İsteyin
                  </h3>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                    {service.title} projeniz için bilgilerinizi bırakın, hemen arayalım.
                  </div>
                </div>
                <QuoteForm serviceName={service.title} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 8. DİĞER HİZMETLER (GÖRSELLİ YÖNLENDİRİCİ KARTLAR) ─────────────── */}
      {relatedServices && relatedServices.length > 0 && (
        <section
          style={{
            padding: "clamp(60px, 8vw, 90px) 0",
            background: "var(--color-card)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <div className="page-wrap">
            <ScrollReveal>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: 32,
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: cAccent, marginBottom: 6 }}>
                    Diğer Spor Branşları
                  </div>
                  <h3
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(22px, 2.8vw, 30px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    İnceleyebileceğiniz Diğer Saha Çözümlerimiz
                  </h3>
                </div>

                <Link
                  to="/hizmetler"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: cAccent,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Tüm Hizmetlerimizi Gör
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>

              {/* Görselli Yönlendirici Kartlar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 24,
                }}
              >
                {relatedServices.map((rs, idx) => (
                  <Link
                    key={idx}
                    to={rs.to}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.borderColor = cAccent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "var(--color-border)";
                    }}
                  >
                    {/* Görsel */}
                    <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "var(--color-bg-soft)" }}>
                      <img
                        src={rs.image || `${import.meta.env.BASE_URL}images/hizmetler/sahalar.jpg`}
                        alt={rs.name}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: cAccent, marginBottom: 4 }}>
                        {rs.spec || "Anahtar Teslim"}
                      </div>
                      <h4
                        style={{
                          fontFamily: "'General Sans', sans-serif",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--color-line)",
                          margin: "0 0 8px",
                        }}
                      >
                        {rs.name}
                      </h4>
                      <p
                        style={{
                          fontSize: 13,
                          color: "var(--color-line-dim)",
                          lineHeight: 1.5,
                          margin: "0 0 16px",
                          flexGrow: 1,
                        }}
                      >
                        {rs.desc || "Açık ve kapalı saha altyapısı, zemin kaplama ve aydınlatma montajı."}
                      </p>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: cAccent,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        Saha Detaylarını İncele
                        <ArrowRight size={13} weight="bold" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </div>
  );
}
