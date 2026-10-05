import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { House, ArrowRight, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";

export default function NotFound() {
  return (
    <div
      style={{
        ...pageWrap,
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "clamp(100px, 12vw, 140px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        textAlign: "center",
      }}
    >
      <Helmet>
        <title>Sayfa Bulunamadı (404) | Gözde İnşaat</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Aradığınız sayfa taşınmış, silinmiş veya geçici olarak kullanım dışı olabilir."
        />
      </Helmet>

      {/* Kort Çizgisi Estetiği & 404 Badge */}
      <div style={{ marginBottom: 16 }}>
        <Badge color={COLORS.rust}>404 — TOP SAHA DIŞINA ÇIKTI (AUT)</Badge>
      </div>

      <div
        style={{
          fontSize: "clamp(5rem, 14vw, 9rem)",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 800,
          lineHeight: 1,
          color: "var(--color-accent)",
          letterSpacing: "-0.04em",
          marginBottom: 16,
          textShadow: "0 8px 30px rgba(31, 107, 74, 0.15)",
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          fontWeight: 700,
          color: "var(--color-line)",
          marginBottom: 16,
          fontFamily: FONT.heading,
          maxWidth: 600,
        }}
      >
        Aradığınız Sayfa Bulunamadı
      </h1>

      <p
        style={{
          fontSize: "clamp(15px, 1.8vw, 17px)",
          color: "var(--color-line-dim)",
          maxWidth: 540,
          margin: "0 auto 36px",
          lineHeight: 1.7,
        }}
      >
        Ulaşmak istediğiniz sayfa yayından kaldırılmış, adı değiştirilmiş veya geçici olarak taşınmış olabilir.
        Aşağıdaki bağlantılardan aradığınız hizmete kolayca ulaşabilirsiniz.
      </p>

      {/* Eylem Butonları */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
          marginBottom: 44,
        }}
      >
        <Link to="/" className="btn-primary" style={{ gap: 8 }}>
          <House size={18} weight="bold" /> Ana Sayfaya Dön
        </Link>
        <Link to="/hizmetler" className="btn-secondary" style={{ gap: 8 }}>
          Hizmetlerimiz <ArrowRight size={16} weight="bold" />
        </Link>
      </div>

      {/* Popüler Bağlantılar Kartı */}
      <div
        style={{
          maxWidth: 680,
          width: "100%",
          padding: "24px 28px",
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius, 12px)",
          boxShadow: "var(--shadow-sm)",
          textAlign: "left",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--color-accent)",
            marginBottom: 14,
          }}
        >
          Doğrudan Hizmet Sayfalarına Geçin
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <Link
            to="/hizmetler/tenis-kortu-yapimi"
            style={{ fontSize: 14, color: "var(--color-line)", padding: "6px 0", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-line)")}
          >
            → Tenis Kortu Yapımı
          </Link>
          <Link
            to="/hizmetler/basketbol-sahasi-yapimi"
            style={{ fontSize: 14, color: "var(--color-line)", padding: "6px 0", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-line)")}
          >
            → Basketbol Sahası Yapımı
          </Link>
          <Link
            to="/hizmetler/hali-saha-yapimi"
            style={{ fontSize: 14, color: "var(--color-line)", padding: "6px 0", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-line)")}
          >
            → Halı Saha Yapımı
          </Link>
          <Link
            to="/hizmetler/cok-amacli-saha-yapimi"
            style={{ fontSize: 14, color: "var(--color-line)", padding: "6px 0", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-line)")}
          >
            → Çok Amaçlı Spor Sahası
          </Link>
          <Link
            to="/projeler"
            style={{ fontSize: 14, color: "var(--color-line)", padding: "6px 0", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-line)")}
          >
            → Tamamlanan Projeler
          </Link>
          <Link
            to="/iletisim"
            style={{ fontSize: 14, color: "var(--color-line)", padding: "6px 0", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-line)")}
          >
            → İletişim & Keşif Talebi
          </Link>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 13,
            color: "var(--color-line-dim)",
          }}
        >
          <span>Bir sorun mu yaşıyorsunuz? Doğrudan bize ulaşın:</span>
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href="tel:+902163110994"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--color-line)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <Phone size={15} color="var(--color-accent)" weight="bold" /> 0 (216) 311 09 94
            </a>
            <a
              href="https://wa.me/905326678428"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#25D366",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <WhatsappLogo size={16} weight="fill" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
