import {
  Phone,
  DeviceMobileSpeaker,
  Faders,
  EnvelopeSimple,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  Buildings,
  ChatCircleDots,
  CalendarCheck,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import ScrollReveal from "../components/ScrollReveal";

const ILETISIM = [
  {
    Icon: Phone,
    label: "Sabit Hat",
    value: "0 (216) 311 09 94",
    subtext: "Hızlı Santral & Danışma",
    href: "tel:+902163110994",
  },
  {
    Icon: DeviceMobileSpeaker,
    label: "GSM / WhatsApp",
    value: "0 (532) 667 84 28",
    subtext: "Doğrudan Saha & Mühendis Hattı",
    href: "tel:+905326678428",
  },
  {
    Icon: EnvelopeSimple,
    label: "Kurumsal E-posta",
    value: "info@gozdeinsaat.com",
    subtext: "Proje Dosyası & Teklif Talepleri",
    href: "mailto:info@gozdeinsaat.com",
  },
  {
    Icon: Faders,
    label: "Faks Numarası",
    value: "0 (216) 311 09 96",
    subtext: "Resmi İhale & Şartname Hattı",
    href: null,
  },
  {
    Icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pzt – Cmt: 08:00 – 18:00",
    subtext: "Pazar Günleri Kapalıdır",
    href: null,
  },
  {
    Icon: MapPin,
    label: "Merkez Ofis & Tesis Adresi",
    value: "Osmangazi Mah. Şeyh Şamil Sok. No:1, 34887 Sancaktepe / İstanbul",
    subtext: "Suryapı Gölbahçe Evleri Karşısı",
    href: "https://maps.google.com/?q=Gözde+İnşaat+Spor+Sahaları+Yapı+ve+Yenileme+Hizmetleri",
  },
];

const GUVENCELER = [
  {
    rakam: "1988",
    baslik: "Kuruluş Yılı",
    aciklama: "38 yıllık kesintisiz spor tesisi mühendisliği mirası",
    Icon: CalendarCheck,
  },
  {
    rakam: "35+",
    baslik: "Yıllık Tecrübe",
    aciklama: "Uzman mühendis, tekniker ve sertifikalı uygulama kadrosu",
    Icon: ShieldCheck,
  },
  {
    rakam: "Yüzlerce",
    baslik: "Tamamlanan Saha",
    aciklama: "Türkiye genelinde anahtar teslim teslim edilmiş referanslar",
    Icon: Buildings,
  },
  {
    rakam: "24 Saat",
    baslik: "Geri Dönüş Süresi",
    aciklama: "Aynı gün içinde teknik keşif özeti ve şeffaf fiyatlandırma",
    Icon: Clock,
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Ücretsiz Teklif Al & İletişim | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası, voleybol sahası, halı saha veya çok amaçlı saha yapımı için ücretsiz keşif ve fiyat teklifi alın. 0 (216) 311 09 94 — Sancaktepe / İstanbul."
        />
        <meta
          name="keywords"
          content="spor sahası teklif al, tenis kortu fiyat teklifi, halı saha keşif, basketbol sahası maliyeti, Gözde İnşaat iletişim"
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/iletisim" />
      </Helmet>

      <div
        style={{
          background: "var(--color-bg)",
          minHeight: "calc(100vh - 64px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Arka plan zarif mimari kılavuz nokta dokusu */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 600,
            backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
            opacity: 0.6,
          }}
        />

        <div className="page-wrap" style={{ paddingTop: "clamp(50px, 6vw, 80px)", paddingBottom: "clamp(70px, 8vw, 110px)", position: "relative", zIndex: 1 }}>
          
          {/* ── 1. HERO BAŞLIK & GÜVEN BİLGİ ŞERİDİ ────────────────────────── */}
          <ScrollReveal>
            <div
              style={{
                marginBottom: "clamp(36px, 5vw, 56px)",
                paddingBottom: "clamp(24px, 3.5vw, 36px)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {/* Üst Rozetler Satırı */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px 14px",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(31, 107, 74, 0.08)",
                    padding: "6px 14px",
                    border: "1px solid rgba(31, 107, 74, 0.2)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    letterSpacing: "0.04em",
                  }}
                >
                  <ShieldCheck size={16} weight="fill" />
                  <span>1988'DEN BUGÜNE · 38 YILLIK MÜHENDİSLİK MİRASI</span>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-line-dim)",
                    padding: "6px 12px",
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <CheckCircle size={15} color="var(--color-accent)" weight="bold" />
                  <span>Ücretsiz Yerinde Keşif & Kot Analizi</span>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-line-dim)",
                    padding: "6px 12px",
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Clock size={15} color="var(--color-accent)" weight="bold" />
                  <span>24 Saat İçinde Hızlı Dönüş</span>
                </div>
              </div>

              {/* Ana Başlık */}
              <h1
                style={{
                  fontSize: "clamp(34px, 4.8vw, 54px)",
                  color: "var(--color-line)",
                  margin: "0 0 16px",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  fontWeight: 800,
                }}
              >
                ÜCRETSİZ TEKLİF & KEŞİF TALEBİ
              </h1>

              {/* Alt Açıklama Metni */}
              <p
                style={{
                  fontSize: "clamp(15px, 1.8vw, 17px)",
                  color: "var(--color-line-dim)",
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: "68ch",
                }}
              >
                Tenis kortu, basketbol, voleybol, halı saha veya çok amaçlı spor tesisiniz için anahtar teslim mühendislik çözümleri sunuyoruz. Formu doldurarak ya da doğrudan ofisimizi arayarak projeniz için teknik şartname ve ayrıntılı maliyet tablosu edinebilirsiniz.
              </p>
            </div>
          </ScrollReveal>

          {/* ── 2. ANA İÇERİK IZGARASI (SOL: İLETİŞİM & GÜVENCELER | SAĞ: FORM & HARİTA) ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.35fr",
              gap: "clamp(32px, 4vw, 52px)",
              alignItems: "start",
            }}
            className="grid-responsive"
          >
            {/* ════════ SOL SÜTUN: İLETİŞİM BİLGİLERİ & İSTATİSTİK BANDI ════════ */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              
              {/* 1. İletişim Bilgileri Kartı (Hizmet Standartlarımız Tasarım Dilinde) */}
              <ScrollReveal delay={0.1}>
                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-card)",
                    padding: "clamp(24px, 3.5vw, 32px)",
                    transition: "box-shadow 0.25s ease",
                  }}
                >
                  {/* Kart Başlık Şeridi */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      marginBottom: 24,
                      paddingBottom: 18,
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        background: "var(--color-accent-light)",
                        color: "var(--color-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <ChatCircleDots size={24} weight="duotone" />
                    </div>
                    <div>
                      <h2
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: "var(--color-line)",
                          margin: "0 0 4px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Doğrudan İletişim Kanalları
                      </h2>
                      <p style={{ fontSize: 13, color: "var(--color-line-dim)", margin: 0, lineHeight: 1.5 }}>
                        Teknik sorularınız ve saha keşif randevuları için uzman mühendislerimize ulaşın.
                      </p>
                    </div>
                  </div>

                  {/* 2 Sütunlu İletişim Öğeleri Izgarası */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: 12,
                    }}
                  >
                    {ILETISIM.map(({ Icon, label, value, subtext, href }) => {
                      const isAddress = label.includes("Adres");
                      const itemContent = (
                        <div
                          style={{
                            background: "var(--color-bg)",
                            border: "1px solid var(--color-border)",
                            padding: "16px",
                            display: "flex",
                            gap: 14,
                            alignItems: "flex-start",
                            height: "100%",
                            transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
                            gridColumn: isAddress ? "1 / -1" : "auto",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.borderColor = "var(--color-accent)";
                            e.currentTarget.style.background = "#FFFFFF";
                            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.borderColor = "var(--color-border)";
                            e.currentTarget.style.background = "var(--color-bg)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <span
                            style={{
                              width: 36,
                              height: 36,
                              background: "var(--color-accent-light)",
                              color: "var(--color-accent)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          >
                            <Icon size={18} weight="bold" />
                          </span>

                          <div style={{ flexGrow: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 4,
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 11,
                                  fontFamily: "var(--font-mono)",
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "var(--color-line-dim)",
                                  fontWeight: 700,
                                }}
                              >
                                {label}
                              </span>
                              {href && (
                                <ArrowUpRight
                                  size={14}
                                  color="var(--color-accent)"
                                  style={{ opacity: 0.7 }}
                                />
                              )}
                            </div>

                            <div
                              style={{
                                fontSize: 14,
                                color: href ? "var(--color-accent)" : "var(--color-line)",
                                fontWeight: 700,
                                lineHeight: 1.4,
                                wordBreak: "break-word",
                                marginBottom: subtext ? 4 : 0,
                              }}
                            >
                              {value}
                            </div>

                            {subtext && (
                              <div style={{ fontSize: 11, color: "var(--color-line-dim)", lineHeight: 1.3 }}>
                                {subtext}
                              </div>
                            )}
                          </div>
                        </div>
                      );

                      return href ? (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            gridColumn: isAddress ? "1 / -1" : "auto",
                          }}
                        >
                          {itemContent}
                        </a>
                      ) : (
                        <div key={label} style={{ gridColumn: isAddress ? "1 / -1" : "auto" }}>
                          {itemContent}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* 2. İstatistik & Kurumsal Güvence Bandı (Koyu Yeşil - Canlı & Ayrılmış) */}
              <ScrollReveal delay={0.2}>
                <div
                  style={{
                    marginTop: 36,
                    background: "var(--color-accent-dark, #154D35)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    padding: "clamp(24px, 3vw, 32px)",
                    boxShadow: "var(--shadow-md)",
                    position: "relative",
                    overflow: "hidden",
                    color: "#FFFFFF",
                  }}
                >
                  {/* Arka plan nokta süslemesi */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Panel Başlığı */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                      paddingBottom: 14,
                      borderBottom: "1px solid rgba(255, 255, 255, 0.16)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                      <ShieldCheck size={18} weight="fill" color="#4ade80" />
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                        }}
                      >
                        Rakamlarla Kurumsal Güvencemiz
                      </span>
                    </div>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 11,
                        color: "rgba(255, 255, 255, 0.75)",
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                      Resmi Garanti
                    </span>
                  </div>

                  {/* 2x2 Canlı İstatistik Kutuları */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 12,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {GUVENCELER.map(({ rakam, baslik, aciklama, Icon }) => (
                      <div
                        key={baslik}
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.16)",
                          padding: "18px 16px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          transition: "transform 0.22s ease, background 0.22s ease, border-color 0.22s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.32)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "none";
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                          <span
                            style={{
                              fontSize: 11,
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                              color: "#A7F3D0",
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                            }}
                          >
                            {baslik}
                          </span>
                          <Icon size={16} weight="regular" color="#A7F3D0" />
                        </div>

                        <div
                          style={{
                            fontFamily: "'General Sans', sans-serif",
                            fontSize: "clamp(26px, 3.2vw, 34px)",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            lineHeight: 1,
                            marginBottom: 8,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {rakam}
                        </div>

                        <div
                          style={{
                            fontSize: 11,
                            color: "rgba(255, 255, 255, 0.82)",
                            lineHeight: 1.45,
                            margin: 0,
                          }}
                        >
                          {aciklama}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ════════ SAĞ SÜTUN: PROJE TEKLİF FORMU & HARİTA KARTI ════════ */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              
              {/* 1. Proje Teklif Formu Kartı */}
              <ScrollReveal delay={0.15}>
                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-card)",
                    padding: "clamp(28px, 4vw, 42px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      marginBottom: 24,
                      paddingBottom: 18,
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "var(--color-accent-light)",
                        color: "var(--color-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <EnvelopeSimple size={26} weight="duotone" />
                    </div>
                    <div>
                      <h2
                        style={{
                          fontFamily: "'General Sans', sans-serif",
                          fontSize: "clamp(20px, 2.5vw, 24px)",
                          color: "var(--color-line)",
                          margin: "0 0 6px",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Proje Teklif Formu
                      </h2>
                      <p style={{ fontSize: 13, color: "var(--color-line-dim)", margin: 0, lineHeight: 1.55 }}>
                        Projenizin lokasyonunu, branşını ve saha boyutlarını belirtin; mühendislerimiz 24 saat içinde detaylı keşif analiziyle size dönüş yapsın.
                      </p>
                    </div>
                  </div>

                  <ContactForm />
                </div>
              </ScrollReveal>

              {/* 2. Google Haritalar Embed Kartı (Form ile Birebir Uyumlu Stil Mimarisi) */}
              <ScrollReveal delay={0.25}>
                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-card)",
                    overflow: "hidden",
                  }}
                >
                  {/* Harita Kartı Başlık Şeridi */}
                  <div
                    style={{
                      padding: "20px 24px",
                      borderBottom: "1px solid var(--color-border)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          background: "var(--color-accent-light)",
                          color: "var(--color-accent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <MapPin size={22} weight="duotone" />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: "var(--color-line)",
                            margin: "0 0 3px",
                          }}
                        >
                          Gözde İnşaat Merkez Ofisi & Tesis Alanı
                        </h3>
                        <div style={{ fontSize: 12, color: "var(--color-line-dim)" }}>
                          Sancaktepe / İstanbul · Suryapı Gölbahçe Evleri Karşısı
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Gözde+İnşaat+Spor+Sahaları+Yapı+ve+Yenileme+Hizmetleri"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "7px 14px",
                        background: "var(--color-accent-light)",
                        border: "1px solid rgba(31, 107, 74, 0.25)",
                        color: "var(--color-accent)",
                        fontSize: 12,
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--color-accent)";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--color-accent-light)";
                        e.currentTarget.style.color = "var(--color-accent)";
                      }}
                    >
                      <span>Haritada Aç</span>
                      <ArrowUpRight size={13} weight="bold" />
                    </a>
                  </div>

                  {/* Harita Gömüsü */}
                  <div style={{ position: "relative", height: 320, background: "var(--color-bg)" }}>
                    <iframe
                      title="Gözde İnşaat Sancaktepe Merkez Ofis Konumu"
                      src="https://maps.google.com/maps?q=G%C3%B6zde%20%C4%B0n%C5%9Faat%20Spor%20Sahalar%C4%B1%20Yap%C4%B1%20ve%20Yenileme%20Hizmetleri&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Harita Alt Bilgi Şeridi */}
                  <div
                    style={{
                      padding: "14px 24px",
                      background: "var(--color-bg)",
                      borderTop: "1px solid var(--color-border)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 12,
                      fontSize: 12,
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-line)", fontWeight: 600 }}>
                      <Clock size={15} color="var(--color-accent)" weight="bold" />
                      Ziyaret Saatleri: Pzt – Cmt: 08:00 – 18:00
                    </span>

                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-accent)", fontWeight: 700 }}>
                      <Phone size={15} color="var(--color-accent)" weight="bold" />
                      Doğrudan Yol Tarifi Danışma: 0 (216) 311 09 94
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}