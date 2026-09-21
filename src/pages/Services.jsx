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

          {/* Ana saha görseli */}
          <div
            style={{
              position: "relative",
              aspectRatio: "21/9",
              border: "1px solid var(--color-border)",
              padding: 6,
              background: "var(--color-bg-soft)",
              overflow: "hidden",
              marginBottom: 16,
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
                filter: "grayscale(5%)",
                display: "block",
              }}
            />
          </div>

          {/* Meta bilgi paneli (Banner tarzı) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              border: "1px solid var(--color-border)",
              background: "var(--color-bg-soft)",
              marginBottom: 48,
              borderRadius: 4,
            }}
          >
            {/* Kim İçin */}
            {service.forWho && (
              <div
                style={{
                  padding: "32px",
                  borderRight: window.innerWidth > 600 ? "1px solid var(--color-border)" : "none",
                  borderBottom: window.innerWidth <= 600 ? "1px solid var(--color-border)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <Users
                    size={16}
                    weight="duotone"
                    color="var(--color-accent)"
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
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
                    fontSize: 16,
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
                  padding: "32px",
                  borderRight: window.innerWidth > 900 ? "1px solid var(--color-border)" : "none",
                  borderBottom: window.innerWidth <= 900 ? "1px solid var(--color-border)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <Clock
                    size={16}
                    weight="duotone"
                    color="var(--color-accent)"
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
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
                    fontSize: 24,
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
            <div style={{ padding: "32px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-line-dim)",
                  marginBottom: 16,
                }}
              >
                Dahil Olan
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
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
                      fontSize: 14,
                      color: "var(--color-line-dim)",
                    }}
                  >
                    <CheckCircle
                      size={14}
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
                ].map((stat) => (
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
        <div id={`service-${i}`} data-index={i} key={service.title} style={{ scrollMarginTop: 140 }}>
          <ServiceSection service={service} index={i} />
        </div>
      ))}

      {/* Ek Hizmetler Bölümü (Çocuk Oyun Parkı) */}
      <section
        id="ek-hizmetler"
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          borderTop: "1px solid var(--color-border)",
          scrollMarginTop: 120,
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                color: "var(--color-line-dim)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 16,
                  background: "var(--color-border)",
                }}
              />
              Ayrıca Sunduğumuz Hizmetler
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1.2fr 1fr",
                gap: 40,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  border: "1px solid var(--color-border)",
                  padding: 6,
                  background: "var(--color-bg-soft)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/hizmetler/cocukparki1.jpg`}
                  alt="Çocuk oyun parkı zemin kaplama ve kurulumu"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div>
                <h2
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    margin: "0 0 12px",
                    color: "var(--color-line-dim)",
                  }}
                >
                  Çocuk Oyun Parkı
                </h2>
                <p
                  style={{
                    fontSize: 16,
                    color: "var(--color-line-dim)",
                    lineHeight: 1.7,
                    margin: "0 0 24px",
                  }}
                >
                  Okullar, siteler ve belediye parkları için güvenli, EPDM kauçuk
                  veya sentetik çim zeminli, çocuk sağlığına uygun anahtar teslim oyun parkı kurulumları yapıyoruz.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    marginBottom: 32,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <Users size={16} color="var(--color-accent)" />
                    <span style={{ fontSize: 14, color: "var(--color-line)", fontWeight: 500 }}>
                      Site · Okul · Belediye · Özel Park
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <CheckCircle size={16} color="var(--color-accent)" weight="fill" />
                    <span style={{ fontSize: 14, color: "var(--color-line)", fontWeight: 500 }}>
                      Düşme şiddetini azaltan güvenli (EPDM) zemin
                    </span>
                  </div>
                </div>

                <Link
                  to="/iletisim"
                  className="btn-outline"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Bilgi Al
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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