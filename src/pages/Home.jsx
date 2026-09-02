import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin, Ruler } from "lucide-react";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";
import CourtLineDrawing from "../components/CourtLineDrawing";
import { SERVICES, PROCESS, PROJECTS } from "../data/content";
import QuoteForm from "../components/QuoteForm";
import { REFERENCES } from "../data/references";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Spor Sahası ve Kort İnşaatı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası, voleybol sahası ve çok amaçlı saha yapımında anahtar teslim çözümler. 1988'den beri İstanbul ve Türkiye genelinde 500+ tamamlanmış proje. Ücretsiz keşif."
        />
        <meta name="keywords" content="tenis kortu yapımı, basketbol sahası yapımı, voleybol sahası yapımı, spor sahası yapımı, kort inşaatı, İstanbul spor sahası" />
        <link rel="canonical" href="https://www.gozdeinsaat.com/" />
      </Helmet>

      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 40,
          alignItems: "center",
          ...pageWrap,
          paddingTop: 72,
          paddingBottom: 72,
        }}
      >
        <div>
          <Badge color={COLORS.rust}>Saha ve Kort İnşaatı</Badge>
          <h1
            style={{
              fontFamily: FONT.display,
              fontSize: 56,
              lineHeight: 1.02,
              margin: "20px 0 18px",
              letterSpacing: "0.01em",
            }}
          >
            1988'den Bu Yana
            <br />
            <span style={{ color: COLORS.rust }}>Spor Sahası İnşaatı</span>
          </h1>
          <p style={{ color: COLORS.lineDim, fontSize: 16, lineHeight: 1.7, maxWidth: 440 }}>
            Gözde İnşaat, tenis kortu, basketbol ve voleybol sahası, çok amaçlı spor
            alanları için zemin hazırlığından milimetrik çizgi çalışmasına kadar
            anahtar teslim inşaat hizmeti sunar.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
            <Link
              to="/iletisim"
              style={{
                background: COLORS.rust,
                color: COLORS.line,
                padding: "13px 22px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Ücretsiz Keşif Talep Et <ArrowRight size={16} />
            </Link>
            <Link
              to="/projeler"
              style={{
                border: `1px solid ${COLORS.border}`,
                color: COLORS.line,
                padding: "13px 22px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Projeleri Gör
            </Link>
          </div>
        </div>

        <div
          style={{
            background: COLORS.bgSoft,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            padding: 24,
          }}
        >
          <CourtLineDrawing />
        </div>
      </section>

      {/* HİZMETLER ÖZETİ */}
      <section style={pageWrap}>
        <h2 style={{ fontFamily: FONT.display, fontSize: 30, marginBottom: 30 }}>
          NE İNŞA EDİYORUZ
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              to={s.to || "/hizmetler"}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 10,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.15s, transform 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.color + "66";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s.image && (
                  <div style={{ height: 180, overflow: "hidden" }}>
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column" }}>
                  <Badge color={s.color}>{s.tag}</Badge>
                  <h3 style={{ fontSize: 19, fontWeight: 600, margin: "14px 0 6px", color: COLORS.line }}>{s.title}</h3>
                  <div style={{ fontFamily: FONT.mono, fontSize: 13, color: COLORS.lineDim, marginBottom: 10 }}>
                    {s.spec}
                  </div>
                  <p style={{ fontSize: 14, color: COLORS.lineDim, lineHeight: 1.6, flex: 1 }}>{s.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/hizmetler"
          style={{ color: COLORS.rust, fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-block", marginTop: 20 }}
        >
          Tüm hizmet detaylarını gör →
        </Link>
      </section>

      {/* SÜREÇ */}
      <section style={{ padding: "56px 32px", background: COLORS.bgSoft, borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 36, display: "flex", alignItems: "baseline", gap: 16 }}>
            <h2 style={{ fontFamily: FONT.display, fontSize: 28, margin: 0 }}>ÇALIŞMA ŞEKLİMİZ</h2>
            <span style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.lineDim, letterSpacing: 1 }}>KEŞIF'TEN TESLİMAT'A</span>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Connector line */}
            <div style={{
              position: "absolute",
              top: 18,
              left: 18,
              right: 18,
              height: 1,
              background: `linear-gradient(to right, ${COLORS.rust}, ${COLORS.border})`,
              zIndex: 0,
            }} />

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              position: "relative",
              zIndex: 1,
            }}>
              {PROCESS.map((p, i) => (
                <div key={p.n} style={{ padding: "0 20px 0 0" }}>
                  {/* Step dot + number */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: i === 0 ? COLORS.rust : COLORS.card,
                      border: `2px solid ${i === 0 ? COLORS.rust : COLORS.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: FONT.mono,
                        fontSize: 12,
                        fontWeight: 700,
                        color: i === 0 ? "#fff" : COLORS.lineDim,
                      }}>{p.n}</span>
                    </div>
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 6px", color: COLORS.line }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: COLORS.lineDim, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ÖNE ÇIKAN PROJELER */}
      <section style={pageWrap}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 26,
          }}
        >
          <h2 style={{ fontFamily: FONT.display, fontSize: 30 }}>ÖNE ÇIKAN PROJELER</h2>
          <Link to="/projeler" style={{ color: COLORS.rust, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Tümünü gör →
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {PROJECTS.slice(0, 3).map((p) => (
            <div
              key={p.name}
              style={{
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: 120,
                  background: `linear-gradient(135deg, ${p.color}22, ${COLORS.card})`,
                  borderBottom: `1px solid ${COLORS.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: FONT.mono, fontSize: 12, color: p.color }}>
                  {p.type.toUpperCase()}
                </span>
              </div>
              <div style={{ padding: 18 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.name}</h3>
                <div style={{ display: "flex", gap: 14, fontSize: 13, color: COLORS.lineDim }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <MapPin size={13} /> {p.city}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Ruler size={13} /> {p.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REFERANSLAR ÖNİZLEME */}
      <section
        style={{
          background: COLORS.bgSoft,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "60px 32px",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div>
              <h2 style={{ fontFamily: FONT.display, fontSize: 30, marginBottom: 6 }}>
                REFERANSLARIMIZ
              </h2>
              <p style={{ fontSize: 14, color: COLORS.lineDim }}>
                {REFERENCES.length}+ firmaya hizmet verdik
              </p>
            </div>
            <Link
              to="/referanslar"
              style={{
                color: COLORS.rust,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Tüm referansları gör <ArrowRight size={15} />
            </Link>
          </div>

          {/* Seçilmiş referanslar — dönen kaydırma şeridi */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
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
                "Grand Yazıcı Hotel",
                "Karamanoğlu Mehmet Bey Üniversitesi",
                "Elegance Resort Hotel",
                "Diyarbakır Belediyesi",
              ].includes(r.name)
            ).map((ref) => (
              <Link
                key={ref.name}
                to="/referanslar"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 8,
                    padding: "10px 16px",
                    fontSize: 13,
                    color: COLORS.lineDim,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = COLORS.rust + "66";
                    e.currentTarget.style.color = COLORS.line;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = COLORS.border;
                    e.currentTarget.style.color = COLORS.lineDim;
                  }}
                >
                  <MapPin size={12} color={COLORS.rust} />
                  <span style={{ fontWeight: 500, color: "inherit" }}>{ref.name}</span>
                  <span style={{ fontFamily: FONT.mono, fontSize: 11 }}>
                    {ref.city}
                  </span>
                </div>
              </Link>
            ))}
            <Link
              to="/referanslar"
              style={{
                background: COLORS.rust + "22",
                border: `1px solid ${COLORS.rust}44`,
                borderRadius: 8,
                padding: "10px 16px",
                fontSize: 13,
                color: COLORS.rust,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontWeight: 600,
              }}
            >
              +{REFERENCES.length - 12} daha <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* TEKLİF FORMU */}
      <section style={{ ...pageWrap, paddingTop: 72, paddingBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 48,
            alignItems: "flex-start",
          }}
        >
          <div>
            <Badge color={COLORS.rust}>Ücretsiz Keşif</Badge>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 38,
                margin: "16px 0 14px",
                letterSpacing: "0.01em",
                lineHeight: 1.05,
              }}
            >
              ÜCRETSİZ
              <br />
              TEKLİF AL
            </h2>
            <p style={{ color: COLORS.lineDim, fontSize: 14, lineHeight: 1.8, maxWidth: 320 }}>
              Bilgilerinizi bırakın,{" "}
              <span style={{ color: COLORS.line }}>ekibimiz 24 saat içinde sizi arasın.</span>{" "}
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