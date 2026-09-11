import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, Users, CheckCircle } from "@phosphor-icons/react";
import Badge from "../components/Badge";
import ScrollReveal from "../components/ScrollReveal";
import FloorComparisonCards from "../components/FloorComparisonCards";
import { SERVICES } from "../data/content";

// Hizmet bölümü numaralandırma etiketi
function SectionNumber({ n }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 700,
        color: "var(--color-accent)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 24,
          background: "var(--color-accent)",
          color: "#fff",
          fontWeight: 700,
          fontSize: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: 0,
          flexShrink: 0,
        }}
      >
        {String(n).padStart(2, "0")}
      </span>
      HİZMET
    </div>
  );
}

// Tek hizmet bölümü — tam genişlikte, zemin kartları açık
function ServiceSection({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="page-wrap">
        <ScrollReveal>
          {/* Numara etiketi */}
          <SectionNumber n={index + 1} />

          {/* Başlık + Meta bilgi satırı */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 32,
              alignItems: "flex-start",
              marginBottom: 40,
            }}
            className="service-header-grid"
          >
            {/* Sol: Başlık + açıklama */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    background: "var(--color-accent-light, #E8F5EE)",
                    border: "1px solid var(--color-accent)",
                    padding: "3px 10px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {service.tag}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--color-line-dim)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {service.spec}
                </span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  margin: "0 0 18px",
                  color: "var(--color-line)",
                }}
              >
                {service.title}
              </h2>

              <p
                style={{
                  fontSize: 16,
                  color: "var(--color-line-dim)",
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: "60ch",
                }}
              >
                {service.desc}
              </p>
            </div>

            {/* Sağ: CTA butonu */}
            <div style={{ paddingTop: 8 }}>
              <Link
                to={service.to}
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                Detaylı Bilgi
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Ana saha görseli + Meta bilgi — yan yana */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr",
              gap: 32,
              marginBottom: 48,
              alignItems: "stretch",
            }}
            className="service-content-grid"
          >
            {/* Saha görseli */}
            <div
              style={{
                position: "relative",
                aspectRatio: "16/9",
                border: "1px solid var(--color-border)",
                padding: 6,
                background: "var(--color-bg-soft)",
                overflow: "hidden",
              }}
            >
              <img
                src={service.image}
                alt={service.imageAlt || service.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(8%)",
                  display: "block",
                }}
              />
              {/* Teknik etiket */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  right: 14,
                  background: "var(--color-bg)",
                  padding: "3px 8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  border: "1px solid var(--color-border)",
                  color: "var(--color-line)",
                  letterSpacing: "0.06em",
                }}
              >
                ÖLÇEK: 1:50 / {service.tag.toUpperCase()}
              </div>
            </div>

            {/* Meta bilgi kutusu */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-soft)",
                overflow: "hidden",
              }}
            >
              {/* Kim İçin */}
              {service.forWho && (
                <div
                  style={{
                    padding: "24px 28px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                    }}
                  >
                    <Users
                      size={14}
                      weight="duotone"
                      color="var(--color-accent)"
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-line-dim)",
                      }}
                    >
                      Kim İçin
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-line)",
                      lineHeight: 1.5,
                    }}
                  >
                    {service.forWho}
                  </div>
                </div>
              )}

              {/* Teslim Süresi */}
              {service.deliveryTime && (
                <div
                  style={{
                    padding: "24px 28px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                    }}
                  >
                    <Clock
                      size={14}
                      weight="duotone"
                      color="var(--color-warm, #D4A843)"
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-line-dim)",
                      }}
                    >
                      Anahtar Teslim Süre
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--color-line)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {service.deliveryTime}
                  </div>
                </div>
              )}

              {/* Anahtar teslim garantiler */}
              <div style={{ padding: "24px 28px", flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-line-dim)",
                    marginBottom: 14,
                  }}
                >
                  Dahil Olan
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {[
                    "Zemin hazırlığı ve altyapı",
                    "Tel örgü ve çevre sistemi",
                    "LED aydınlatma montajı",
                    "Ekipman ve çizgi uygulaması",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: "var(--color-line-dim)",
                      }}
                    >
                      <CheckCircle
                        size={13}
                        weight="fill"
                        color="var(--color-accent)"
                        aria-hidden="true"
                        style={{ flexShrink: 0 }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Zemin Seçenekleri — direkt açık */}
          {service.floors && service.floors.length > 0 && (
            <FloorComparisonCards floors={service.floors} to={service.to} />
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Spor Sahası Yapımı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası, voleybol sahası, halı saha ve çok amaçlı spor sahası yapımı. Akrilik, tartan (EPDM), suni çim zemin seçenekleri. Anahtar teslim hizmet."
        />
        <meta
          name="keywords"
          content="tenis kortu yapımı, basketbol sahası yapımı, voleybol sahası yapımı, halı saha yapımı, akrilik zemin, tartan zemin, suni çim"
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/hizmetler" />
      </Helmet>

      {/* Sayfa başlığı */}
      <div
        style={{
          paddingTop: 100,
          paddingBottom: 80,
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                flexDirection: window.innerWidth < 900 ? "column" : "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 48,
              }}
              className="services-hero-layout"
            >
              {/* Sol: Başlık ve Açıklama */}
              <div style={{ flex: 1, maxWidth: 640 }}>
                <Badge>Tüm Hizmetler</Badge>
                <h1
                  style={{
                    fontSize: "clamp(40px, 6vw, 64px)",
                    margin: "24px 0 24px",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    color: "var(--color-line)",
                  }}
                >
                  HİZMETLERİMİZ
                </h1>
                <p
                  style={{
                    color: "var(--color-line-dim)",
                    fontSize: "clamp(16px, 2vw, 18px)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Zemin hazırlığından çizgi çalışmasına, ekipman montajından teslimata
                  kadar her aşamayı kendi uzman ekibimizle anahtar teslim olarak yürütüyoruz.
                </p>
              </div>

              {/* Sağ: İstatistikler 2x2 Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  width: window.innerWidth < 900 ? "100%" : 400,
                  flexShrink: 0,
                }}
              >
                {[
                  { value: `${SERVICES.length}`, label: "Hizmet Kategorisi" },
                  {
                    value: `${SERVICES.reduce((acc, s) => acc + (s.floors?.length || 0), 0)}`,
                    label: "Zemin Seçeneği",
                  },
                  { value: "500+", label: "Tamamlanan Proje" },
                  { value: "1988", label: "Kuruluş Yılı" },
                ].map((stat, idx) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "var(--color-bg-soft)",
                      border: "1px solid var(--color-border)",
                      padding: "24px 20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "clamp(28px, 4vw, 36px)",
                        fontWeight: 700,
                        color: "var(--color-accent)",
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--color-line)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Tüm hizmetler — dikey sırayla */}
      {SERVICES.map((service, i) => (
        <ServiceSection key={service.title} service={service} index={i} />
      ))}

      {/* CTA bölümü */}
      <section
        style={{
          background: "var(--color-bg-soft)",
          borderTop: "1px solid var(--color-border)",
          padding: "80px 0",
        }}
      >
        <div className="page-wrap" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              textTransform: "uppercase",
              marginBottom: 16,
              fontWeight: 700,
            }}
          >
            Projeniz için fiyat alın
          </h2>
          <p
            style={{
              color: "var(--color-line-dim)",
              fontSize: 16,
              marginBottom: 32,
              maxWidth: "45ch",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Ücretsiz keşif için bizi arayın ya da formu doldurun — en geç 24 saat
            içinde dönelim.
          </p>
          <Link
            to="/iletisim"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            Ücretsiz Keşif Talep Et
            <ArrowRight size={15} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Responsive stiller */}
      <style>{`
        @media (max-width: 768px) {
          .service-header-grid {
            grid-template-columns: 1fr !important;
          }
          .service-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}