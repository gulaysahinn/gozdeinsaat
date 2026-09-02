import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, ChevronRight, Ruler, ChevronDown, ChevronUp, BookOpen, List, Info, Wrench, Layers } from "lucide-react";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";
import QuoteForm from "../components/QuoteForm";
import { PROCESS } from "../data/content";
import { useState } from "react";

/* ── ICON MAP ────────────────────────────────────────────────────────────── */
const SECTION_ICONS = { intro: Info, steps: Wrench, grid: Layers, highlight: List };

/**
 * DetailSection — renders a single section of detailedSections based on its type.
 *   'intro'    → title + body paragraph with left accent bar
 *   'steps'    → numbered step cards in a single column
 *   'grid'     → items rendered as compact icon-cards in a 2-col grid
 *   'highlight'→ items in pill/tag chips row
 */
function DetailSection({ sec, color }) {
  const Icon = SECTION_ICONS[sec.type] ?? Info;

  return (
    <div
      style={{
        background: COLORS.card,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          borderLeft: `4px solid ${color}`,
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: `1px solid ${COLORS.border}`,
          background: color + "0A",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: color + "22",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={15} color={color} />
        </div>
        <h3
          style={{
            fontFamily: FONT.display,
            fontSize: 18,
            margin: 0,
            color: COLORS.line,
            letterSpacing: 0.5,
          }}
        >
          {sec.title}
        </h3>
      </div>

      {/* Body */}
      <div style={{ padding: "22px 24px" }}>
        {/* Optional prose */}
        {sec.body && (
          <p
            style={{
              fontSize: 14,
              color: COLORS.lineDim,
              lineHeight: 1.85,
              marginBottom: sec.items?.length ? 20 : 0,
              borderLeft: `2px solid ${color}44`,
              paddingLeft: 14,
            }}
          >
            {sec.body}
          </p>
        )}

        {/* Items — steps */}
        {sec.type === "steps" && sec.items && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {sec.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  background: COLORS.bgSoft,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  padding: "12px 16px",
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 6,
                    background: color + "22",
                    border: `1px solid ${color}44`,
                    color: color,
                    fontSize: 12,
                    fontFamily: FONT.mono,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span style={{ fontSize: 14, color: COLORS.lineDim, lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Items — grid (2-col icon chips) */}
        {sec.type === "grid" && sec.items && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${sec.cols ?? 2}, 1fr)`,
              gap: 10,
            }}
          >
            {sec.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  background: COLORS.bgSoft,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  padding: "12px 14px",
                }}
              >
                <CheckCircle2 size={14} color={color} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: COLORS.lineDim, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Items — highlight (pill chips) */}
        {sec.type === "highlight" && sec.items && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {sec.items.map((item, i) => (
              <span
                key={i}
                style={{
                  background: color + "14",
                  border: `1px solid ${color}33`,
                  borderRadius: 20,
                  padding: "6px 14px",
                  fontSize: 13,
                  color: color,
                  fontFamily: FONT.body,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


/**
 * Ortak hizmet sayfası bileşeni — tüm hizmet alt sayfaları bu bileşeni kullanır.
 *
 * Props:
 *  meta      : { title, description, canonical }
 *  badge     : string
 *  badgeColor: string
 *  h1        : string
 *  intro     : string          – kısa tanım paragrafı
 *  forWhom   : string[]        – kimin için (okul, site, belediye…)
 *  dimensions: { label, value }[]  – ölçü tablosu satırları
 *  floors    : { name, pros, cons }[]  – zemin seçenekleri
 *  factors   : string[]        – fiyatı etkileyen faktörler
 *  faqs      : { q, a }[]     – SSS
 *  relatedServices: { label, to }[]  – ilgili hizmet linkleri
 *  detailedSections: { type, title, body?, items? }[]  – Modern SEO içerik blokları
 *    type: 'intro' | 'steps' | 'grid' | 'highlight'
 *    title: string
 *    body?: string           – açıklama paragrafı
 *    items?: string[]        – adım veya madde listesi
 *    cols?: number           – grid için sütun sayısı (varsayılan 2)
 */
export default function ServicePage({
  meta,
  badge,
  badgeColor,
  h1,
  intro,
  forWhom,
  dimensions,
  floors,
  factors,
  faqs,
  relatedServices,
  detailedSections,
}) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          ...pageWrap,
          paddingTop: 64,
          paddingBottom: 60,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <Badge color={badgeColor}>{badge}</Badge>
        <h1
          style={{
            fontFamily: FONT.display,
            fontSize: 52,
            margin: "14px 0 18px",
            lineHeight: 1.02,
          }}
        >
          {h1}
        </h1>
        <p
          style={{
            color: COLORS.lineDim,
            fontSize: 15,
            lineHeight: 1.85,
            maxWidth: 680,
            marginBottom: 32,
          }}
        >
          {intro}
        </p>

        {/* Kimin için */}
        {forWhom?.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {forWhom.map((f) => (
              <span
                key={f}
                style={{
                  background: badgeColor + "18",
                  color: badgeColor,
                  border: `1px solid ${badgeColor}33`,
                  borderRadius: 6,
                  padding: "5px 12px",
                  fontSize: 13,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ÖLÇÜLER + ZEMİN SEÇENEKLERİ */}
      <section
        style={{
          background: COLORS.bgSoft,
          padding: "56px 32px",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: 48,
          }}
        >
          {/* Ölçüler */}
          <div>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 26,
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Ruler size={20} color={badgeColor} /> STANDART ÖLÇÜLER
            </h2>
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              {dimensions.map((d, i) => (
                <div
                  key={d.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    padding: "12px 16px",
                    background: i % 2 === 0 ? COLORS.card : "transparent",
                    borderBottom:
                      i < dimensions.length - 1
                        ? `1px solid ${COLORS.border}`
                        : "none",
                  }}
                >
                  <span style={{ fontSize: 13, color: COLORS.lineDim }}>{d.label}</span>
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: FONT.mono,
                      color: COLORS.line,
                      fontWeight: 600,
                    }}
                  >
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Zemin Seçenekleri */}
          <div>
            <h2
              style={{ fontFamily: FONT.display, fontSize: 26, marginBottom: 20 }}
            >
              ZEMİN SEÇENEKLERİ
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {floors.map((f) => (
                <div
                  key={f.name}
                  style={{
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 10,
                    padding: "16px 20px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      marginBottom: 8,
                      color: badgeColor,
                    }}
                  >
                    {f.name}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                      fontSize: 13,
                      color: COLORS.lineDim,
                    }}
                  >
                    <div>
                      <div style={{ color: COLORS.success, fontSize: 11, marginBottom: 4, fontFamily: FONT.mono }}>
                        ARTILARI
                      </div>
                      {f.pros}
                    </div>
                    <div>
                      <div style={{ color: COLORS.danger, fontSize: 11, marginBottom: 4, fontFamily: FONT.mono }}>
                        EKSİLERİ
                      </div>
                      {f.cons}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YAPIM AŞAMALARI */}
      <section style={pageWrap}>
        <h2
          style={{ fontFamily: FONT.display, fontSize: 30, marginBottom: 28 }}
        >
          YAPIM AŞAMALARI
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {PROCESS.map((p) => (
            <div key={p.n}>
              <div
                style={{
                  fontFamily: FONT.mono,
                  color: badgeColor,
                  fontSize: 13,
                  marginBottom: 8,
                }}
              >
                {p.n}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: COLORS.lineDim, lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DETAYLI İÇERİK (SEO) */}
      {detailedSections?.length > 0 && (
        <section
          style={{
            background: COLORS.bg,
            borderTop: `1px solid ${COLORS.border}`,
            borderBottom: `1px solid ${COLORS.border}`,
            padding: "72px 32px",
          }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            {/* Section header */}
            <div style={{ marginBottom: 52, display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: badgeColor + "18",
                  border: `1px solid ${badgeColor}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BookOpen size={18} color={badgeColor} />
              </div>
              <div>
                <div style={{ fontFamily: FONT.mono, fontSize: 11, color: badgeColor, letterSpacing: 2, marginBottom: 4 }}>DETAYLI BİLGİ</div>
                <h2 style={{ fontFamily: FONT.display, fontSize: 28, margin: 0, lineHeight: 1 }}>TEKNİK DOKÜMAN</h2>
              </div>
            </div>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {detailedSections.map((sec, idx) => (
                <DetailSection key={idx} sec={sec} color={badgeColor} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FİYATI ETKİLEYEN FAKTÖRLER */}
      <section
        style={{
          background: COLORS.bgSoft,
          padding: "56px 32px",
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            style={{ fontFamily: FONT.display, fontSize: 30, marginBottom: 8 }}
          >
            FİYATI ETKİLEYEN FAKTÖRLER
          </h2>
          <p
            style={{
              color: COLORS.lineDim,
              fontSize: 14,
              marginBottom: 28,
              maxWidth: 540,
            }}
          >
            Net maliyet, aşağıdaki değişkenlere göre şekillenir. Kesin fiyat
            için ücretsiz keşif talebinde bulunabilirsiniz.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {factors.map((f, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  padding: "14px 18px",
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <CheckCircle2
                  size={16}
                  color={badgeColor}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span style={{ fontSize: 14, color: COLORS.lineDim }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section style={pageWrap}>
        <h2
          style={{ fontFamily: FONT.display, fontSize: 30, marginBottom: 28 }}
        >
          SIK SORULAN SORULAR
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            maxWidth: 720,
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: COLORS.card,
                border: `1px solid ${
                  openFaq === i ? badgeColor + "55" : COLORS.border
                }`,
                borderRadius: 10,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  padding: "16px 20px",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: 12,
                }}
              >
                <span
                  style={{ fontSize: 14, fontWeight: 600, color: COLORS.line }}
                >
                  {faq.q}
                </span>
                {openFaq === i ? (
                  <ChevronUp size={16} color={badgeColor} style={{ flexShrink: 0 }} />
                ) : (
                  <ChevronDown size={16} color={COLORS.lineDim} style={{ flexShrink: 0 }} />
                )}
              </button>
              {openFaq === i && (
                <div
                  style={{
                    padding: "0 20px 18px",
                    fontSize: 14,
                    color: COLORS.lineDim,
                    lineHeight: 1.7,
                    borderTop: `1px solid ${COLORS.border}`,
                    paddingTop: 14,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* İLGİLİ HİZMETLER */}
      {relatedServices?.length > 0 && (
        <section
          style={{
            background: COLORS.bgSoft,
            padding: "40px 32px",
            borderTop: `1px solid ${COLORS.border}`,
            borderBottom: `1px solid ${COLORS.border}`,
          }}
        >
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 13,
                color: COLORS.lineDim,
                marginBottom: 14,
                fontFamily: FONT.mono,
              }}
            >
              İLGİLİ HİZMETLER
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {relatedServices.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  style={{
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 7,
                    padding: "9px 16px",
                    fontSize: 14,
                    color: COLORS.lineDim,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.line;
                    e.currentTarget.style.borderColor = badgeColor + "55";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = COLORS.lineDim;
                    e.currentTarget.style.borderColor = COLORS.border;
                  }}
                >
                  {s.label} <ChevronRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TEKLIF FORMU */}
      <section style={{ ...pageWrap, paddingTop: 64, paddingBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 48,
            alignItems: "flex-start",
          }}
        >
          <div>
            <Badge color={badgeColor}>Ücretsiz Keşif</Badge>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 36,
                margin: "14px 0 12px",
                lineHeight: 1.05,
              }}
            >
              ÜCRETSİZ
              <br />
              TEKLİF AL
            </h2>
            <p
              style={{
                color: COLORS.lineDim,
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 300,
              }}
            >
              Bilgilerinizi bırakın, ekibimiz 24 saat içinde sizi arasın.
              İsterseniz doğrudan da ulaşabilirsiniz.
            </p>
          </div>
          <div
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: 32,
            }}
          >
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
