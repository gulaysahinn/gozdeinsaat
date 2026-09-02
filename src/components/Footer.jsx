import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { COLORS, FONT } from "../theme";

const SERVICES_LINKS = [
  { label: "Tenis Kortu Yapımı", to: "/tenis-kortu-yapimi" },
  { label: "Basketbol Sahası Yapımı", to: "/basketbol-sahasi-yapimi" },
  { label: "Voleybol Sahası Yapımı", to: "/voleybol-sahasi-yapimi" },
  { label: "Çok Amaçlı Saha Yapımı", to: "/cok-amacli-saha-yapimi" },
  { label: "Halı Saha Yapımı", to: "/hali-saha-yapimi" },
];

const QUICK_LINKS = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hizmetler", to: "/hizmetler" },
  { label: "Projeler", to: "/projeler" },
  { label: "Referanslar", to: "/referanslar" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "İletişim", to: "/iletisim" },
];

const linkStyle = {
  color: COLORS.lineDim,
  textDecoration: "none",
  fontSize: 13,
  lineHeight: "1.9",
  display: "flex",
  alignItems: "center",
  gap: 4,
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.bgSoft,
        borderTop: `1px solid ${COLORS.border}`,
        marginTop: "auto",
      }}
    >
      {/* Main grid */}
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "56px 32px 40px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr",
          gap: 40,
        }}
      >
        {/* Brand column */}
        <div>
          <Link
            to="/"
            style={{
              fontFamily: FONT.display,
              fontSize: 26,
              color: COLORS.line,
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 14,
            }}
          >
            GÖZDE<span style={{ color: COLORS.rust }}>İNŞAAT</span>
          </Link>
          <p
            style={{
              fontSize: 13,
              color: COLORS.lineDim,
              lineHeight: 1.8,
              maxWidth: 280,
              margin: "0 0 20px",
            }}
          >
            1988'den bu yana Türkiye genelinde tenis kortu, basketbol sahası,
            voleybol sahası ve çok amaçlı spor alanları inşaatında güvenilir
            çözüm ortağınız.
          </p>
          {/* Accent badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: COLORS.rust + "14",
              border: `1px solid ${COLORS.rust}33`,
              borderRadius: 20,
              padding: "5px 12px",
              fontSize: 11,
              color: COLORS.rust,
              fontFamily: FONT.mono,
              letterSpacing: 1,
            }}
          >
            ● ANAHTAR TESLİM HİZMET
          </span>
        </div>

        {/* Hizmetler */}
        <div>
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: 10,
              color: COLORS.rust,
              letterSpacing: 2,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Hizmetler
          </div>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {SERVICES_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.line)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.lineDim)}
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
              fontFamily: FONT.mono,
              fontSize: 10,
              color: COLORS.rust,
              letterSpacing: 2,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            Hızlı Linkler
          </div>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.line)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.lineDim)}
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
              fontFamily: FONT.mono,
              fontSize: 10,
              color: COLORS.rust,
              letterSpacing: 2,
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            İletişim
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="tel:+902163110994"
              style={{
                ...linkStyle,
                color: COLORS.lineDim,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.line)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.lineDim)}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: COLORS.rust + "14",
                  border: `1px solid ${COLORS.rust}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={13} color={COLORS.rust} />
              </span>
              <div>
                <div style={{ fontSize: 11, color: COLORS.lineDim, marginBottom: 1 }}>Telefon</div>
                <div style={{ fontSize: 13, color: COLORS.line }}>0 (216) 311 09 94</div>
              </div>
            </a>

            <a
              href="mailto:info@gozdeinsaat.com"
              style={{
                ...linkStyle,
                color: COLORS.lineDim,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.line)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.lineDim)}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: COLORS.rust + "14",
                  border: `1px solid ${COLORS.rust}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={13} color={COLORS.rust} />
              </span>
              <div>
                <div style={{ fontSize: 11, color: COLORS.lineDim, marginBottom: 1 }}>E-posta</div>
                <div style={{ fontSize: 13, color: COLORS.line }}>info@gozdeinsaat.com</div>
              </div>
            </a>

            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: COLORS.rust + "14",
                  border: `1px solid ${COLORS.rust}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <MapPin size={13} color={COLORS.rust} />
              </span>
              <div>
                <div style={{ fontSize: 11, color: COLORS.lineDim, marginBottom: 1 }}>Adres</div>
                <div style={{ fontSize: 13, color: COLORS.line, lineHeight: 1.6 }}>
                  Sancaktepe, İstanbul
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/iletisim"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 20,
              background: COLORS.rust,
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Ücretsiz Teklif Al <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          padding: "16px 32px",
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 12,
          color: COLORS.lineDim,
        }}
      >
        <span>© {new Date().getFullYear()} Gözde İnşaat. Tüm hakları saklıdır.</span>
        <span style={{ fontFamily: FONT.mono, fontSize: 11 }}>
          Tenis Kortu · Basketbol Sahası · Voleybol Sahası · Halı Saha
        </span>
      </div>
    </footer>
  );
}
