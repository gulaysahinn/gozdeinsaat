import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ShieldCheck, 
  Certificate, 
  Quotes, 
  Medal, 
  ArrowRight,
  CalendarCheck,
  Trophy,
  Buildings,
  Handshake
} from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import Badge from "../components/Badge";
import ScrollReveal from "../components/ScrollReveal";

const STATS_DATA = [
  { 
    value: "1988", 
    label: "Kuruluş Yılı", 
    note: "35+ Yıllık Kesintisiz Tecrübe",
    icon: CalendarCheck
  },
  { 
    value: "Yüzlerce", 
    label: "Tamamlanan Saha", 
    note: "Anahtar Teslim Spor Kompleksi",
    icon: Trophy
  },
  { 
    value: "16", 
    label: "Sertifikalı Zemin", 
    note: "ITF, FIBA & TSE Standartlarında",
    icon: Medal
  },
  { 
    value: "110+", 
    label: "Referans Portföyü", 
    note: "Okul, Belediye, Kulüp ve Siteler",
    icon: Buildings
  },
];

const TIMELINE = [
  {
    period: "1988",
    badge: "Kuruluş",
    title: "Temellerin Atılması & Mühendislik Disiplini",
    desc: "Spor sahası altyapısı ve zemin kaplamalarında ödün vermeyen kalite anlayışıyla sektöre ilk sağlam adım atıldı.",
    statHighlight: "1988'den Bugüne",
  },
  {
    period: "1990 — 2010'lar",
    badge: "Büyüme & Güven",
    title: "Türkiye Genelinde Yüzlerce Tesis",
    desc: "Eğitim kurumları, belediyeler, spor kulüpleri ve konut projeleri için yüzlerce açık ve kapalı spor alanı başarıyla inşa edildi.",
    statHighlight: "Yüzlerce Tamamlanan Proje",
  },
  {
    period: "Bugün & Gelecek",
    badge: "Teknoloji & Kalite",
    title: "Uluslararası Federasyon Standartlarında Uzmanlık",
    desc: "16 farklı sertifikalı zemin seçeneği, ileri teknoloji zemin makineleri ve anahtar teslim çelik konstrüksiyon çözümleriyle sektör liderliği.",
    statHighlight: "16 Sertifikalı Zemin",
  },
];

const CORE_STANDARDS = [
  {
    title: "Şeffaf ve Dürüst Yaklaşım",
    desc: "Müşteri ilişkilerimizde projelendirmeden teslime kadar her aşamada doğru, dürüst ve şeffaf davranmak.",
  },
  {
    title: "6331 İSG Kanunu Uyumluluğu",
    desc: "Şantiye ve uygulama sahalarında İş Sağlığı ve Güvenliği mevzuatına harfiyen uygun, sıfır kaza prensibiyle çalışmak.",
  },
  {
    title: "TSE ve Federasyon Onaylı Malzeme",
    desc: "Uluslararası federasyonların (ITF, FIBA, FIFA) ve TSE standartlarına uygun sertifikalı ürünler kullanmak.",
  },
  {
    title: "Doğa ve Çevre Duyarlılığı",
    desc: "İmalat ve uygulama sürecinde doğanın korunmasını, çevre temizliğini ve insan sağlığını öncelikli gözetmek.",
  },
  {
    title: "Güncel Federasyon Normları",
    desc: "Spor sahaları yapımında ilgili federasyonların güncel saha boyutları, çizgileme ve ekipman standartlarını uygulamak.",
  },
  {
    title: "Zamanında ve Eksiksiz Teslim",
    desc: "İş sözleşmesinde taahhüt edilen imalat takvimine sadık kalarak projeleri zamanında ve eksiksiz anahtar teslim sonlandırmak.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | 1988'den Bu Yana Spor Sahası İnşaatı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat, 1988'den bu yana açık ve kapalı spor tesisi yapımında faaliyet göstermektedir. 35+ yıllık deneyim, yüzlerce tamamlanan saha, TSE ve uluslararası federasyon standartlarında anahtar teslim mühendislik."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/hakkimizda" />
      </Helmet>

      {/* ── 1. HERO BÖLÜMÜ ────────────────────────────────────────────── */}
      <section 
        className="page-wrap" 
        style={{ 
          paddingTop: 70, 
          paddingBottom: 80,
          position: "relative",
          isolation: "isolate"
        }}
      >
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <Badge>Kurumsal Kimlik</Badge>
            <span style={{ fontSize: 13, color: "var(--color-line-dim)", fontWeight: 500 }}>
              1988'den Bugüne Spor Sahası Mühendisliği
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(34px, 4.5vw, 48px)",
              margin: "0 0 24px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em"
            }}
          >
            GÖZDE İNŞAAT
          </h1>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: 48,
            alignItems: "start",
            marginTop: 20
          }}
          className="grid-responsive"
        >
          {/* Sol Kolon — Hikaye & Kurumsal Misyon */}
          <ScrollReveal delay={0.1}>
            <div>
              <p
                style={{
                  color: "var(--color-line)",
                  fontSize: 18,
                  lineHeight: 1.7,
                  marginBottom: 28,
                  fontWeight: 400
                }}
              >
                Gözde İnşaat; açık ve kapalı spor tesisleri, anahtar teslim saha yapımı ve profesyonel zemin yenileme alanında, nitelikli teknik kadrosu ile{" "}
                <strong style={{ color: "var(--color-accent)", fontWeight: 700 }}>
                  1988 yılından beri
                </strong>{" "}
                kesintisiz hizmet sunmaktadır.
              </p>

              {/* Kurumsal Taahhüt & Misyon Kartı (Genişletilmiş ve Nefes Alan Yerleşim) */}
              <div
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderLeft: "4px solid var(--color-accent)",
                  borderRadius: "var(--radius)",
                  padding: "26px 30px",
                  margin: "32px 0 32px",
                  boxShadow: "var(--shadow-sm)",
                  position: "relative"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "var(--color-accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--color-accent)"
                    }}
                  >
                    <Quotes size={24} weight="fill" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontWeight: 700,
                        color: "var(--color-accent)",
                        marginBottom: 8
                      }}
                    >
                      Kurumsal Misyonumuz
                    </div>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: "var(--color-line)",
                        fontStyle: "italic",
                        fontWeight: 500,
                        margin: 0
                      }}
                    >
                      "Amacımız sadece bir spor alanı inşa etmek değil; sporcuların sağlığını, zeminlerin uzun ömürlülüğünü ve nesiller boyu güvenle kullanılacak nitelikli yaşam alanlarını hayata geçirmektir."
                    </p>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--color-line-dim)",
                        marginTop: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                      }}
                    >
                      <span>— Gözde İnşaat Yönetimi</span>
                      <span style={{ color: "var(--color-border)" }}>•</span>
                      <span style={{ fontSize: 12, fontWeight: 500 }}>Kalite ve Mühendislik İlkesi</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* İnce Ayırıcı Çizgi ile Metinleri Ferahlatma */}
              <div 
                style={{ 
                  height: 1, 
                  background: "var(--color-border)", 
                  margin: "28px 0 24px",
                  opacity: 0.7 
                }} 
              />

              <p
                style={{
                  color: "var(--color-line-dim)",
                  fontSize: 15,
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Toprak, asfalt ve beton zemin altyapıları üzerine geliştirilmiş sertifikalı sistemlerimizle; ulusal ve uluslararası spor federasyonlarının (ITF, FIBA, FIFA, FIVB) belirlediği normlarda açık ve kapalı tesisler inşa ediyoruz.
              </p>
              <p
                style={{
                  color: "var(--color-line-dim)",
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0
                }}
              >
                Kullandığımız tüm malzeme ve imalat bileşenlerinde insan sağlığını ve çevre duyarlılığını öncelikli kılıyor; TSE belgeli, uzun ömürlü ve garantili ürünlerle spor altyapısına değer katıyoruz.
              </p>
            </div>
          </ScrollReveal>

          {/* Sağ Kolon — Görsel ve Bağımsız Güven Şeridi */}
          <ScrollReveal delay={0.2}>
            <div>
              {/* Görsel Alanı */}
              <div 
                style={{ 
                  position: "relative", 
                  width: "100%", 
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-card)"
                }}
              >
                <div style={{ position: "relative", paddingBottom: "72%", width: "100%", overflow: "hidden" }}>
                  <img 
                    src={`${import.meta.env.BASE_URL}images/hizmetler/tenisKortuYapimi.jpg`} 
                    alt="Gözde İnşaat Spor Sahası İmalatı"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                
                <div 
                  style={{
                    padding: "16px 20px",
                    background: "var(--color-card)",
                    borderTop: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-line)" }}>
                    Anahtar Teslim Spor Sahası İmalatı
                  </div>
                  <span style={{ fontSize: 12, color: "var(--color-accent)", fontWeight: 600 }}>
                    1988'den Beri Sahada
                  </span>
                </div>
              </div>

              {/* Ayrı Güven & Uyumluluk Şeridi */}
              <div
                style={{
                  marginTop: 16,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Certificate size={20} weight="regular" color="var(--color-accent)" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-line)" }}>TSE Belgesi</span>
                  </div>
                  <span style={{ fontSize: 12, color: "var(--color-line-dim)", lineHeight: 1.35 }}>
                    Test onaylı imalat malzemeleri
                  </span>
                </div>

                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <ShieldCheck size={20} weight="regular" color="var(--color-accent)" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-line)" }}>6331 İSG</span>
                  </div>
                  <span style={{ fontSize: 12, color: "var(--color-line-dim)", lineHeight: 1.35 }}>
                    Saha iş sağlığı ve güvenliği tam uyumu
                  </span>
                </div>

                <div
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Medal size={20} weight="regular" color="var(--color-accent)" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-line)" }}>Federasyon</span>
                  </div>
                  <span style={{ fontSize: 12, color: "var(--color-line-dim)", lineHeight: 1.35 }}>
                    ITF, FIBA, FIFA & FIVB standartları
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. RAKAMLARLA GÖZDE İNŞAAT & BÜTÜNLEŞİK TARİHÇE (KOYU YEŞİL MERKEZ BÖLÜM) ── */}
      <section 
        style={{ 
          background: "var(--color-accent-dark, #154D35)", 
          color: "#FFFFFF", 
          padding: "100px 24px",
          position: "relative",
          isolation: "isolate",
          zIndex: 1,
          overflow: "hidden"
        }}
      >
        {/* Arka plan süsleme dokusu */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none"
          }}
        />

        <div className="page-wrap" style={{ padding: 0, position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 60px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "var(--radius-pill)",
                  padding: "6px 18px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: 20
                }}
              >
                Rakamlarla Kurumsal Güven
              </div>
              <h2 
                style={{ 
                  color: "#FFFFFF", 
                  fontSize: "clamp(30px, 4.2vw, 42px)", 
                  margin: "0 0 18px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2
                }}
              >
                1988'den Günümüze Rakamlarla Başarı Tablosu
              </h2>
              <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: 16, lineHeight: 1.7, margin: "0 auto" }}>
                35 yılı aşan sektör yolculuğumuzda, dürüst mühendislik ilkelerimiz ve sertifikalı malzeme kalitemizle Türkiye genelinde kalıcı spor tesisleri inşa ettik.
              </p>
            </div>
          </ScrollReveal>

          {/* İstatistik Kartları Grid'i — İkonlu ve Vurgulu Görsel Ağırlık */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              marginBottom: 72
            }}
          >
            {STATS_DATA.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.07)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "var(--radius)",
                      padding: "32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      position: "relative",
                      transition: "transform 0.25s, background 0.25s",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.13)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.07)";
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "var(--radius-sm)",
                            background: "rgba(255, 255, 255, 0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FFFFFF"
                          }}
                        >
                          <IconComponent size={24} weight="regular" />
                        </div>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                      </div>

                      <div
                        style={{
                          fontFamily: "'General Sans', sans-serif",
                          fontSize: "clamp(40px, 4.2vw, 50px)",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                          marginBottom: 10,
                          letterSpacing: "-0.03em"
                        }}
                      >
                        {item.value}
                      </div>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#E3EFEB",
                          marginBottom: 6
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(255, 255, 255, 0.7)",
                        borderTop: "1px solid rgba(255, 255, 255, 0.14)",
                        paddingTop: 14,
                        marginTop: 16
                      }}
                    >
                      {item.note}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Bütünleşik Tarihçe — Vurgulu Yıllar & Belirgin Bağlantı Hattı */}
          <ScrollReveal>
            <div
              style={{
                background: "rgba(0, 0, 0, 0.22)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: "var(--radius)",
                padding: "44px 36px"
              }}
            >
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between", 
                  flexWrap: "wrap", 
                  gap: 16, 
                  marginBottom: 36,
                  borderBottom: "1px solid rgba(255, 255, 255, 0.14)",
                  paddingBottom: 22
                }}
              >
                <div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#E3EFEB", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Dünden Bugüne Kurumsal Yolculuk
                  </span>
                  <h3 style={{ color: "#FFFFFF", fontSize: 24, marginTop: 4 }}>
                    Gözde İnşaat'ın Kilometre Taşları
                  </h3>
                </div>
                <div style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.75)" }}>
                  Geleceğe Güvenle İnşa Edilen Spor Tesisleri
                </div>
              </div>

              {/* 3 Aşamalı Yatay Bağlantılı Zaman Çizgisi */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 32,
                  position: "relative"
                }}
              >
                {TIMELINE.map((item, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      position: "relative",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "var(--radius-sm)",
                      padding: "24px 24px 26px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      {/* Üst Dönem Etiketi & Vurgu */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                        <span 
                          style={{ 
                            fontSize: 16, 
                            fontWeight: 700, 
                            color: "#FFFFFF", 
                            background: "rgba(255, 255, 255, 0.18)",
                            padding: "4px 12px",
                            borderRadius: "var(--radius-sm)",
                            letterSpacing: "0.02em"
                          }}
                        >
                          {item.period}
                        </span>
                        <span 
                          style={{ 
                            fontSize: 11, 
                            fontWeight: 700, 
                            color: "#4ade80", 
                            background: "rgba(74, 222, 128, 0.15)",
                            padding: "3px 8px",
                            borderRadius: "var(--radius-pill)"
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <h4 style={{ color: "#FFFFFF", fontSize: 18, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>
                        {item.title}
                      </h4>
                      <p style={{ color: "rgba(255, 255, 255, 0.78)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>

                    <div 
                      style={{ 
                        marginTop: 18, 
                        paddingTop: 12, 
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        fontSize: 12,
                        color: "#E3EFEB",
                        fontWeight: 600
                      }}
                    >
                      {item.statHighlight}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. HİZMET VE KALİTE STANDARTLARIMIZ (DENGELİ 6 + 1 KASITLI DÜZEN) ─ */}
      <section 
        className="page-wrap" 
        style={{ 
          paddingTop: 90, 
          paddingBottom: 100,
          position: "relative",
          isolation: "isolate"
        }}
      >
        <ScrollReveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 52px" }}>
            <Badge color="var(--color-warm)">Kalite Taahhüdü</Badge>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", margin: "14px 0 12px", letterSpacing: "-0.01em" }}>
              HİZMET VE KALİTE STANDARTLARIMIZ
            </h2>
            <p
              style={{
                color: "var(--color-line-dim)",
                fontSize: 15,
                lineHeight: 1.75,
                margin: "0 auto",
              }}
            >
              Gözde İnşaat olarak, ürün ve hizmetlerimizin kalitesini, adımızın güvenilir imajını korur; çalışanlarımızla, tedarikçilerimizle ve iş ortaklarımızla dürüst davranmayı kurumsal ilke ediniriz.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Temel İlke — Düzenli 2 Sütunlu Grid (3 satır x 2 sütun) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 20,
            marginBottom: 24
          }}
        >
          {CORE_STANDARDS.map((s, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                  padding: "24px 26px",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  height: "100%",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--color-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2
                  }}
                >
                  <CheckCircle size={20} weight="fill" color="var(--color-accent)" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--color-line)",
                      marginBottom: 6,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--color-line-dim)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 7. Madde — Kasıtlı Öne Çıkan Başarı & Garanti Taahhüdü Banner'ı */}
        <ScrollReveal delay={0.3}>
          <div
            style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
              borderLeft: "4px solid var(--color-accent)",
              borderRadius: "var(--radius)",
              padding: "28px 32px",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--color-accent)"
                }}
              >
                <Handshake size={26} weight="regular" />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-accent)", marginBottom: 4 }}>
                  Nihai İlke & Kalıcı Güvence
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--color-line)", margin: "0 0 4px" }}>
                  Koşulsuz Müşteri Memnuniyeti & Teslim Sonrası Garanti
                </h3>
                <p style={{ fontSize: 14, color: "var(--color-line-dim)", margin: 0, maxWidth: 640 }}>
                  İş bitiminde teknik kabul, periyodik bakım danışmanlığı ve garanti süreçlerimizle müşterilerimizle kurduğumuz güven bağını uzun yıllar kesintisiz sürdürürüz.
                </p>
              </div>
            </div>
            
            <Link
              to="/referanslar"
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--color-accent)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: "var(--radius-sm)",
                background: "var(--color-bg-soft)",
                border: "1px solid var(--color-border)",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-accent)";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-bg-soft)";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
            >
              Referanslarımızı Görün <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 4. GÜÇLENDİRİLMİŞ CTA (DOĞAL & PRESTİJLİ KORUMALI KAPANIŞ) ── */}
      <section 
        style={{ 
          background: "var(--color-bg-soft)", 
          borderTop: "1px solid var(--color-border)",
          padding: "80px 24px",
          position: "relative",
          isolation: "isolate"
        }}
      >
        <div className="page-wrap" style={{ padding: 0 }}>
          <div
            style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              padding: "52px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 36,
              boxShadow: "var(--shadow-md)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Arka plan köşe süslemesi */}
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
                pointerEvents: "none"
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: 10
                }}
              >
                Projenizi Birlikte Planlayalım
              </div>
              <h3 
                style={{ 
                  fontSize: "clamp(24px, 3.2vw, 32px)", 
                  margin: "0 0 10px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25
                }}
              >
                Spor Sahası Yapımı İçin Ücretsiz Keşif & Teklif Alın
              </h3>
              <p style={{ color: "var(--color-line-dim)", fontSize: 15, margin: 0, maxWidth: 580, lineHeight: 1.65 }}>
                Açık ve kapalı sahalar, zemin kaplama yenileme ve tel çit sistemleri için uzman teknik kadromuzla iletişime geçin; projenize özel mimari ve bütçe planını oluşturalım.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <Link
                to="/iletisim"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--color-accent)",
                  color: "#FFFFFF",
                  padding: "15px 30px",
                  borderRadius: "var(--radius)",
                  fontSize: 15,
                  fontWeight: 600,
                  boxShadow: "var(--shadow-sm)",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-accent-dark)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-accent)"}
              >
                Ücretsiz Teklif İsteyin <ArrowRight size={18} />
              </Link>
              <Link
                to="/projeler"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "var(--color-line)",
                  border: "1px solid var(--color-border)",
                  padding: "15px 26px",
                  borderRadius: "var(--radius)",
                  fontSize: 15,
                  fontWeight: 600,
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-line)";
                }}
              >
                Tamamlanan Projeler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}