import { Link } from "react-router-dom";
import { Phone, Envelope, MapPin, ArrowUpRight } from "@phosphor-icons/react";

const SERVICES_LINKS = [
  { label: "Tenis Kortu Yapımı", to: "/hizmetler/tenis-kortu-yapimi" },
  { label: "Basketbol Sahası Yapımı", to: "/hizmetler/basketbol-sahasi-yapimi" },
  { label: "Voleybol Sahası Yapımı", to: "/hizmetler/voleybol-sahasi-yapimi" },
  { label: "Çok Amaçlı Saha Yapımı", to: "/hizmetler/cok-amacli-saha-yapimi" },
  { label: "Halı Saha Yapımı", to: "/hizmetler/hali-saha-yapimi" },
];

const QUICK_LINKS = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hizmetlerimiz", to: "/hizmetler" },
  { label: "Projelerimiz", to: "/projeler" },
  { label: "Referanslarımız", to: "/referanslar" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "İletişim", to: "/iletisim" },
];

const footerLinkStyle = {
  color: "var(--color-line-dim)",
  textDecoration: "none",
  fontSize: 13,
  lineHeight: "2",
  display: "block",
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg-soft)",
        borderTop: "1px solid var(--color-border)",
        marginTop: "auto",
        position: "relative",
        isolation: "isolate",
        zIndex: 10,
        width: "100%",
        clear: "both",
      }}
    >
      {/* Main grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 32px 40px",
        }}
        className="footer-grid-responsive"
      >
        {/* Brand column */}
        <div>
          <Link
            to="/"
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "var(--color-line)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 14,
              letterSpacing: "-0.01em",
            }}
          >
            GÖZDE <span style={{ color: "var(--color-accent)" }}>İNŞAAT</span>
          </Link>
          <p
            style={{
              fontSize: 13,
              color: "var(--color-line-dim)",
              lineHeight: 1.8,
              maxWidth: 280,
              margin: "0 0 20px",
            }}
          >
            1988'den bu yana Türkiye genelinde tenis kortu, basketbol sahası,
            voleybol sahası, halı saha ve çok amaçlı spor alanları inşaatında güvenilir
            çözüm ortağınız.
          </p>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--color-accent-light)",
              border: "1px solid var(--color-accent)",
              borderRadius: 8,
              padding: "5px 12px",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--color-accent)",
              letterSpacing: "0.04em",
            }}
          >
            ANAHTAR TESLİM HİZMET
          </span>
        </div>

        {/* Hizmetler */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-line)",
              letterSpacing: "0.06em",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Hizmetler
          </div>
          <nav>
            {SERVICES_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={footerLinkStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-line-dim)")
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-line)",
              letterSpacing: "0.06em",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Sayfalar
          </div>
          <nav>
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={footerLinkStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-line-dim)")
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* İletişim */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-line)",
              letterSpacing: "0.06em",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            İletişim
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="tel:+902163110994"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--color-line-dim)",
                textDecoration: "none",
                fontSize: 13,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-line-dim)")
              }
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={14} weight="bold" color="var(--color-accent)" />
              </span>
              <div>
                <div style={{ fontSize: 11, color: "var(--color-line-dim)", marginBottom: 1 }}>
                  Telefon
                </div>
                <div style={{ fontSize: 13, color: "var(--color-line)" }}>
                  0 (216) 311 09 94
                </div>
              </div>
            </a>

            <a
              href="mailto:info@gozdeinsaat.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "var(--color-line-dim)",
                textDecoration: "none",
                fontSize: 13,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-line-dim)")
              }
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Envelope size={14} weight="bold" color="var(--color-accent)" />
              </span>
              <div>
                <div style={{ fontSize: 11, color: "var(--color-line-dim)", marginBottom: 1 }}>
                  E-posta
                </div>
                <div style={{ fontSize: 13, color: "var(--color-line)" }}>
                  info@gozdeinsaat.com
                </div>
              </div>
            </a>

            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <MapPin size={14} weight="bold" color="var(--color-accent)" />
              </span>
              <div>
                <div style={{ fontSize: 11, color: "var(--color-line-dim)", marginBottom: 1 }}>
                  Adres
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--color-line)",
                    lineHeight: 1.6,
                  }}
                >
                  Osmangazi Mah. Şeyh Şamil Sok.<br />No:1, 34887 Sancaktepe / İstanbul
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/iletisim"
            className="btn-primary"
            style={{ marginTop: 20, fontSize: 13 }}
          >
            Ücretsiz Teklif Al <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          padding: "16px 32px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 12,
          color: "var(--color-line-dim)",
        }}
      >
        <span>
          © {new Date().getFullYear()} Gözde İnşaat. Tüm hakları saklıdır. {" | "}
          <Link to="/hizmetler/gizlilik-politikasi" style={{ color: "var(--color-line-dim)", textDecoration: "none" }}>
            Gizlilik Politikası (KVKK)
          </Link>
        </span>
        <span style={{ fontSize: 11, fontWeight: 500 }}>
          Tenis Kortu | Basketbol Sahası | Voleybol Sahası | Halı Saha | Çok Amaçlı Saha
        </span>
      </div>
    </footer>
  );
}
