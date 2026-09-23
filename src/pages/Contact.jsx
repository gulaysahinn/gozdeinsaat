import {
  Phone,
  DeviceMobileSpeaker,
  Faders,
  EnvelopeSimple,
  MapPin,
  Clock,
} from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import ScrollReveal from "../components/ScrollReveal";

const ILETISIM = [
  {
    Icon: Phone,
    label: "Telefon",
    value: "0 (216) 311 09 94",
    href: "tel:+902163110994",
  },
  {
    Icon: DeviceMobileSpeaker,
    label: "GSM",
    value: "0 (532) 667 84 28",
    href: "tel:+905326678428",
  },
  {
    Icon: Faders,
    label: "Faks",
    value: "0 (216) 311 09 96",
    href: null,
  },
  {
    Icon: EnvelopeSimple,
    label: "E-posta",
    value: "info@gozdeinsaat.com",
    href: "mailto:info@gozdeinsaat.com",
  },
  {
    Icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pzt – Cmt: 08:00 – 18:00",
    href: null,
  },
  {
    Icon: MapPin,
    label: "Adres",
    value: "Osmangazi Mah. Bilal Habeşi Cad. Şeyh Şamil Sk. No:1 34487, Sancaktepe / İstanbul",
    href: "https://maps.google.com/?q=Osmangazi+Mah.+Bilal+Habesi+Cad.+Seyh+Samil+Sk.+No:1+Sancaktepe+Istanbul",
  },
];

const GUVENCELER = [
  { rakam: "1988", aciklama: "Kuruluş yılı" },
  { rakam: "35+", aciklama: "Yıllık deneyim" },
  { rakam: "500+", aciklama: "Tamamlanan saha" },
  { rakam: "24s", aciklama: "Geri dönüş süresi" },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Ücretsiz Teklif Al | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası, voleybol sahası, halı saha veya çok amaçlı saha yaptırmak ister misiniz? Ücretsiz keşif ve teklif için irtibata geçin. 0 (216) 311 09 94 — Sancaktepe / İstanbul."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/iletisim" />
      </Helmet>

      <div style={{ background: "var(--color-bg-soft)", minHeight: "calc(100vh - 64px)" }}>
        <div className="page-wrap" style={{ paddingTop: 80, paddingBottom: 100 }}>
          <ScrollReveal>
            <div style={{ marginBottom: 60 }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  margin: "0 0 16px",
                  fontWeight: 600,
                }}
              >
                İLETİŞİM
              </p>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  color: "var(--color-line)",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                ÜCRETSİZ TEKLİF AL
              </h1>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.55fr",
              gap: 60,
              alignItems: "start",
            }}
            className="grid-responsive"
          >
            {/* Sol: Bilgi paneli */}
            <div>
              <ScrollReveal delay={0.1}>
                <p
                  style={{
                    fontSize: 16,
                    color: "var(--color-line-dim)",
                    lineHeight: 1.8,
                    margin: "0 0 40px",
                    maxWidth: 400,
                  }}
                >
                  Formu doldurun, uzman ekibimiz en geç 24 saat içinde sizi arasın.
                  İsterseniz doğrudan da ulaşabilirsiniz.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                {/* İletişim satırları */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 40,
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {ILETISIM.map(({ Icon, label, value, href }, idx) => {
                    const row = (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 16,
                          padding: "18px 20px",
                          borderBottom:
                            idx < ILETISIM.length - 1
                              ? "1px solid var(--color-border)"
                              : "none",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          if (href) e.currentTarget.style.background = "var(--color-bg-soft)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <span
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: "var(--radius-sm)",
                            background: "var(--color-accent-light)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={18} color="var(--color-accent)" weight="regular" />
                        </span>
                        <div>
                          <div
                            style={{
                              fontSize: 11,
                              fontFamily: "var(--font-mono)",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--color-line-dim)",
                              marginBottom: 3,
                            }}
                          >
                            {label}
                          </div>
                          <div
                            style={{
                              fontSize: 15,
                              color: href ? "var(--color-accent)" : "var(--color-line)",
                              lineHeight: 1.5,
                              fontWeight: href ? 500 : 400,
                            }}
                          >
                            {value}
                          </div>
                        </div>
                      </div>
                    );
                    return href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {row}
                      </a>
                    ) : (
                      <div key={label}>{row}</div>
                    );
                  })}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                {/* Güvence sayıları — 4'lü sistem */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 12,
                  }}
                >
                  {GUVENCELER.map(({ rakam, aciklama }) => (
                    <div
                      key={aciklama}
                      style={{
                        padding: "20px 16px",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--color-card)",
                        boxShadow: "var(--shadow-sm)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 26,
                          fontWeight: 700,
                          color: "var(--color-primary)",
                          lineHeight: 1,
                          marginBottom: 6,
                        }}
                      >
                        {rakam}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-line-dim)",
                          lineHeight: 1.4,
                        }}
                      >
                        {aciklama}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sağ: Form + Harita */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <ScrollReveal delay={0.2}>
                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    padding: "40px",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                      margin: "0 0 24px",
                      fontWeight: 600,
                    }}
                  >
                    Teklif Formu
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>

              {/* Google Maps Embed */}
              <ScrollReveal delay={0.3}>
                <div
                  style={{
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-sm)",
                    height: 280,
                  }}
                >
                  <iframe
                    title="Gözde İnşaat Konum"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.382817398437!2d29.234444!3d41.003056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac44b4d5b9c3d%3A0x3e3e3e3e3e3e3e3e!2sSancaktepe%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                    width="100%"
                    height="280"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}