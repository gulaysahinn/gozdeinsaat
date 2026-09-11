import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, CaretRight, CaretDown, CaretUp, BookOpen, List, Info, Wrench, SquaresFour, Ruler } from "@phosphor-icons/react";
import Badge from "../components/Badge";
import QuoteForm from "../components/QuoteForm";
import ScrollReveal from "../components/ScrollReveal";
import { PROCESS } from "../data/content";

/* ── ICON MAP ────────────────────────────────────────────────────────────── */
const SECTION_ICONS = { intro: Info, steps: Wrench, grid: SquaresFour, highlight: List };

/**
 * DetailSection — renders a single section of detailedSections based on its type.
 */
function DetailSection({ sec, color }) {
  const Icon = SECTION_ICONS[sec.type] ?? Info;

  return (
    <div
      style={{
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        boxShadow: "var(--shadow-card)",
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
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg-soft)",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={18} color={color} weight="fill" />
        </div>
        <h3
          style={{
            fontSize: 18,
            margin: 0,
            color: "var(--color-line)",
          }}
        >
          {sec.title}
        </h3>
      </div>

      {/* Body */}
      <div style={{ padding: "24px" }}>
        {sec.body && (
          <p
            style={{
              fontSize: 15,
              color: "var(--color-line-dim)",
              lineHeight: 1.8,
              marginBottom: sec.items?.length ? 24 : 0,
            }}
          >
            {sec.body}
          </p>
        )}

        {/* Items — steps (no numbers, just cards) */}
        {sec.type === "steps" && sec.items && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sec.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  background: "var(--color-bg-soft)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "16px",
                }}
              >
                <div style={{ width: 6, height: 6, background: color, borderRadius: "50%", marginTop: 8, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Items — grid */}
        {sec.type === "grid" && sec.items && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${sec.cols ?? 2}, 1fr)`,
              gap: 12,
            }}
            className="grid-responsive"
          >
            {sec.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  background: "var(--color-bg-soft)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "14px",
                }}
              >
                <CheckCircle size={16} color={color} weight="fill" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, color: "var(--color-line)", lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Items — highlight */}
        {sec.type === "highlight" && sec.items && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {sec.items.map((item, i) => (
              <span
                key={i}
                style={{
                  background: "var(--color-bg-soft)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-pill)",
                  padding: "8px 16px",
                  fontSize: 13,
                  color: "var(--color-line)",
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

export default function ServicePage({
  meta,
  badge,
  badgeColor = "var(--color-accent)",
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
      <section className="page-wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <ScrollReveal>
          <Badge color={badgeColor}>{badge}</Badge>
          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 56px)",
              margin: "24px 0 24px",
              lineHeight: 1.05,
              letterSpacing: "-0.01em"
            }}
          >
            {h1}
          </h1>
          <p
            style={{
              color: "var(--color-line-dim)",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 720,
              marginBottom: 40,
            }}
          >
            {intro}
          </p>

          {/* Kimin için */}
          {forWhom?.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {forWhom.map((f) => (
                <span
                  key={f}
                  style={{
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                    borderRadius: "var(--radius-pill)",
                    padding: "6px 14px",
                    fontSize: 13,
                    color: "var(--color-line)",
                    fontWeight: 500
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          )}
        </ScrollReveal>
      </section>

      {/* ÖLÇÜLER + ZEMİN SEÇENEKLERİ */}
      <section
        style={{
          background: "var(--color-bg-soft)",
          padding: "80px 32px",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: 60,
          }}
          className="grid-responsive"
        >
          {/* Ölçüler */}
          <ScrollReveal>
            <div>
              <h2
                style={{
                  fontSize: 28,
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Ruler size={24} color={badgeColor} /> STANDART ÖLÇÜLER
              </h2>
              <div
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  background: "var(--color-card)",
                }}
              >
                {dimensions.map((d, i) => (
                  <div
                    key={d.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      padding: "16px 20px",
                      borderBottom:
                        i < dimensions.length - 1
                          ? "1px solid var(--color-border)"
                          : "none",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "var(--color-line-dim)" }}>{d.label}</span>
                    <span
                      style={{
                        fontSize: 14,
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-line)",
                        fontWeight: 600,
                      }}
                    >
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Zemin Seçenekleri */}
          <ScrollReveal delay={0.1}>
            <div>
              <h2 style={{ fontSize: 28, marginBottom: 24 }}>ZEMİN SEÇENEKLERİ</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {floors.map((f) => (
                  <div
                    key={f.name}
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius)",
                      padding: 24,
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    {f.image && (
                      <img
                        src={f.image}
                        alt={f.name}
                        style={{
                          width: "100%",
                          height: 180,
                          objectFit: "cover",
                          borderRadius: "var(--radius)",
                          marginBottom: 16,
                          border: "1px solid var(--color-border)",
                        }}
                      />
                    )}
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 16,
                        marginBottom: 16,
                        color: badgeColor,
                      }}
                    >
                      {f.name}
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 20,
                        fontSize: 14,
                        color: "var(--color-line-dim)",
                      }}
                      className="grid-responsive"
                    >
                      <div>
                        <div style={{ color: "var(--color-success)", fontSize: 12, marginBottom: 6, fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                          ARTILARI
                        </div>
                        <div style={{ lineHeight: 1.6 }}>{f.pros}</div>
                      </div>
                      <div>
                        <div style={{ color: "var(--color-danger)", fontSize: 12, marginBottom: 6, fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                          EKSİLERİ
                        </div>
                        <div style={{ lineHeight: 1.6 }}>{f.cons}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DETAYLI İÇERİK (SEO) */}
      {detailedSections?.length > 0 && (
        <section
          style={{
            padding: "80px 32px",
          }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <ScrollReveal>
              <div style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--color-bg-soft)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <BookOpen size={24} color={badgeColor} weight="fill" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: badgeColor, letterSpacing: "0.1em", marginBottom: 4, fontWeight: 600 }}>DETAYLI BİLGİ</div>
                  <h2 style={{ fontSize: 32, margin: 0, lineHeight: 1 }}>TEKNİK DOKÜMAN</h2>
                </div>
              </div>
            </ScrollReveal>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {detailedSections.map((sec, idx) => (
                <ScrollReveal key={idx} delay={0.05}>
                  <DetailSection sec={sec} color={badgeColor} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FİYATI ETKİLEYEN FAKTÖRLER */}
      <section
        style={{
          background: "var(--color-bg-soft)",
          padding: "80px 32px",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 32, marginBottom: 16 }}>FİYATI ETKİLEYEN FAKTÖRLER</h2>
            <p
              style={{
                color: "var(--color-line-dim)",
                fontSize: 16,
                marginBottom: 40,
                maxWidth: 600,
              }}
            >
              Net maliyet, aşağıdaki değişkenlere göre şekillenir. Kesin fiyat
              için ücretsiz keşif talebinde bulunabilirsiniz.
            </p>
          </ScrollReveal>
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {factors.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    padding: "16px 20px",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    boxShadow: "var(--shadow-card)"
                  }}
                >
                  <CheckCircle
                    size={20}
                    color={badgeColor}
                    weight="fill"
                    style={{ flexShrink: 0 }}
                  />
                  <span style={{ fontSize: 15, color: "var(--color-line)" }}>{f}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="page-wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 32, marginBottom: 40 }}>SIK SORULAN SORULAR</h2>
        </ScrollReveal>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 800 }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                style={{
                  background: "var(--color-card)",
                  border: `1px solid ${openFaq === i ? badgeColor : "var(--color-border)"}`,
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxShadow: openFaq === i ? "var(--shadow-md)" : "var(--shadow-card)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    padding: "20px 24px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: "var(--color-line)" }}>
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <CaretUp size={18} color={badgeColor} style={{ flexShrink: 0 }} />
                  ) : (
                    <CaretDown size={18} color="var(--color-line-dim)" style={{ flexShrink: 0 }} />
                  )}
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 24px 24px",
                      fontSize: 15,
                      color: "var(--color-line-dim)",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* İLGİLİ HİZMETLER */}
      {relatedServices?.length > 0 && (
        <section
          style={{
            background: "var(--color-bg-soft)",
            padding: "60px 32px",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <ScrollReveal>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--color-line-dim)",
                  marginBottom: 16,
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase"
                }}
              >
                İLGİLİ HİZMETLER
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {relatedServices.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      padding: "10px 18px",
                      fontSize: 14,
                      color: "var(--color-line)",
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.2s",
                      boxShadow: "var(--shadow-sm)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = badgeColor;
                      e.currentTarget.style.color = badgeColor;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.color = "var(--color-line)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {s.label} <CaretRight size={14} weight="bold" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* TEKLIF FORMU */}
      <section className="page-wrap" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: 60,
              alignItems: "flex-start",
            }}
            className="grid-responsive"
          >
            <div>
              <Badge color={badgeColor}>Ücretsiz Keşif</Badge>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  margin: "24px 0 16px",
                  lineHeight: 1.1,
                }}
              >
                ÜCRETSİZ
                <br />
                TEKLİF AL
              </h2>
              <p
                style={{
                  color: "var(--color-line-dim)",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 400,
                }}
              >
                Bilgilerinizi bırakın, uzman ekibimiz en geç 24 saat içinde detaylı bilgi ve ücretsiz keşif için sizi arasın.
              </p>
            </div>
            <div
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius)",
                padding: 40,
                boxShadow: "var(--shadow-lg)"
              }}
            >
              <QuoteForm />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
