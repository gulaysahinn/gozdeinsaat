import React from "react";
import { 
  CheckCircle, 
  TennisBall, 
  Basketball, 
  SoccerBall, 
  Volleyball, 
  ShieldCheck, 
  Certificate, 
  Target, 
  Flag,
  Trophy
} from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import Badge from "../components/Badge";
import ScrollReveal from "../components/ScrollReveal";

const FLOOR_TYPES = [
  "Akrilik zemin kaplama",
  "Epoksi zeminler",
  "Kauçuk zemin",
  "Parke zemin",
  "Poliüretan zemin",
  "PVC zemin",
  "Sentetik (suni) çim",
  "Tartan (SBR & EPDM) zemin kaplama",
];

const SPORT_FIELDS = [
  { name: "Badminton sahaları", icon: Target },
  { name: "Basketbol sahaları", icon: Basketball },
  { name: "Futbol sahaları", icon: SoccerBall },
  { name: "Hentbol sahaları", icon: SoccerBall },
  { name: "Tenis kortları", icon: TennisBall },
  { name: "Voleybol sahaları", icon: Volleyball },
];

const STANDARDS = [
  "Müşteri ilişkilerimizde; doğru, dürüst ve şeffaf davranmak",
  "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa uygun olarak çalışmak",
  "Uluslararası spor federasyonlarının ve TSE standartlarına uygun ürün ve malzemeler kullanmak",
  "Çalışırken; doğanın ve çevrenin temizliğini gözetmek",
  "Spor sahaları yapımında; ilgili federasyonların güncel saha standartlarını güncellemek ve uygulamak",
  "İş sözleşmesinde taahhüt edilen çalışmaları, zamanında ve eksiksiz sonlandırmak",
  "İş bitiminde müşteri memnuniyetini sağlamış olmak",
];

const TIMELINE = [
  {
    year: "1988",
    title: "Temellerin Atılması",
    desc: "Sektöre ilk adım. Spor altyapısı inşasında kalite odaklı bir başlangıç."
  },
  {
    year: "Gelişim",
    title: "Yüzlerce Proje",
    desc: "Okullar, üniversiteler, belediyeler ve özel siteler için Türkiye geneline yayılan dev portföy."
  },
  {
    year: "Bugün",
    title: "Sektör Liderliği",
    desc: "Uluslararası federasyon standartlarında, tam donanımlı anahtar teslim saha yapımı."
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | 1988'den Bu Yana Spor Sahası İnşaatı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat, 1988'den bu yana tenis kortu, basketbol, voleybol ve çok amaçlı spor sahası yapımında faaliyet göstermektedir. TSE ve uluslararası federasyon standartlarında hizmet."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/hakkimizda" />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="page-wrap" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <ScrollReveal>
          <Badge>Hakkımızda</Badge>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 48px)",
              margin: "24px 0 40px",
              lineHeight: 1.1,
              letterSpacing: "-0.01em"
            }}
          >
            GÖZDE İNŞAAT
          </h1>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="grid-responsive"
        >
          {/* Sol — Görsel */}
          <ScrollReveal delay={0.1}>
            <div 
              style={{ 
                position: "relative", 
                width: "100%", 
                paddingBottom: "110%", // 10:11 aspect ratio
                borderRadius: "var(--radius)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)"
              }}
            >
              <img 
                src="/images/hizmetler/tenisKortuYapimi.jpg" 
                alt="Gözde İnşaat Ekibi Sahada"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              {/* Sertifika Rozetleri overlay */}
              <div 
                style={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(4px)", padding: "12px 20px", borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(-4px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
                  <Certificate size={28} weight="regular" color="var(--color-primary)" />
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-line)", lineHeight: 1.2 }}>TSE <br/><span style={{ fontWeight: 500, color: "var(--color-line-dim)" }}>Standartları</span></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(4px)", padding: "12px 20px", borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(-4px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
                  <ShieldCheck size={28} weight="regular" color="var(--color-primary)" />
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-line)", lineHeight: 1.2 }}>6331 <br/><span style={{ fontWeight: 500, color: "var(--color-line-dim)" }}>İSG Uyumlu</span></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Sağ — Metin & Hikaye */}
          <ScrollReveal delay={0.2}>
            <div>
              <p
                style={{
                  color: "var(--color-line-dim)",
                  fontSize: 18,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Gözde İnşaat; spor sahaları yapımı ve yenileme firması olarak
                nitelikli ve profesyonel çalışan kadromuz ile açık ve kapalı spor
                sahaları yapımında,{" "}
                <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>
                  1988'den beri
                </span>{" "}
                hizmet vermekteyiz.
              </p>

              <blockquote
                style={{
                  borderLeft: "4px solid var(--color-warm)",
                  paddingLeft: 20,
                  margin: "32px 0",
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: "var(--color-line)",
                  fontStyle: "italic"
                }}
              >
                "Amacımız sadece bir spor alanı inşa etmek değil, nesiller boyu güvenle kullanılacak bir yaşam alanı yaratmaktır."
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--color-line-dim)", marginTop: 12, fontStyle: "normal" }}>
                  — Ahmet Gözde, Kurucu
                </div>
              </blockquote>

              <p
                style={{
                  color: "var(--color-line-dim)",
                  fontSize: 16,
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                Toprak, asfalt ve beton zemin üzerine uygulamak üzere çeşitli
                zemin kaplama seçenekleri doğrultusunda; ulusal ve uluslararası
                spor federasyonlarının üzerinde karar kıldığı standartlarda çok
                amaçlı açık ve kapalı spor sahaları yapmaktayız.
              </p>
              <p
                style={{
                  color: "var(--color-line-dim)",
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                Kullandığımız ürün ve imalat malzemelerin, başta insan faktörü
                olmak üzere, her zaman doğada tüm canlıların sağlığına uygunluğunu
                gözetir; uluslararası spor federasyonların ve TSE standartlarında
                kaliteli ve sertifikalı ürünler kullanmaktayız.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TIMELINE (ZAMAN ÇİZELGESİ) & İSTATİSTİKLER ────────────────── */}
      <section style={{ background: "var(--color-bg-soft)", padding: "100px 32px", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="page-wrap" style={{ padding: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80 }} className="grid-responsive">
            
            <ScrollReveal>
              <div>
                <Badge color="var(--color-warm)">Kurumsal Tarihçe</Badge>
                <h2 style={{ fontSize: 32, marginBottom: 40, marginTop: 16 }}>Dünden Bugüne</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  {TIMELINE.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 20, position: "relative" }}>
                      {idx !== TIMELINE.length - 1 && (
                        <div style={{ position: "absolute", left: 24, top: 48, bottom: -32, width: 2, background: "var(--color-border)" }} />
                      )}
                      <div style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--color-bg-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 2 }}>
                        {idx === 0 ? <Flag size={22} color="var(--color-primary)" weight="regular" /> : idx === 1 ? <Trophy size={22} color="var(--color-primary)" weight="regular" /> : <Target size={22} color="var(--color-primary)" weight="regular" />}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-line-dim)", marginBottom: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>{item.year}</div>
                        <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-line)", marginBottom: 8 }}>{item.title}</h3>
                        <p style={{ fontSize: 15, color: "var(--color-line-dim)", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 style={{ fontSize: 32, marginBottom: 40, marginTop: 44 }}>Rakamlarla Gözde İnşaat</h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 16,
                  }}
                >
                  {[
                    { value: "1988", label: "Kuruluş yılı" },
                    { value: "35+", label: "Yıllık deneyim" },
                    { value: "500+", label: "Tamamlanan saha" },
                    { value: "8", label: "Farklı zemin seçeneği" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      style={{
                        background: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius)",
                        padding: 32,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 40,
                          fontWeight: 700,
                          color: "var(--color-primary)",
                          lineHeight: 1,
                          marginBottom: 12,
                          letterSpacing: "-0.02em"
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "var(--color-line-dim)",
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
      </section>

      {/* ── ZEMİN & SAHA TÜRLERİ ────────────────────────────────────── */}
      <section className="page-wrap" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
          className="grid-responsive"
        >
          <ScrollReveal>
            <div>
              <h2 style={{ fontSize: 28, marginBottom: 32, letterSpacing: "-0.01em" }}>ZEMİN SEÇENEKLERİ</h2>
              <div style={{ display: "grid", gap: 16 }}>
                {FLOOR_TYPES.map((f) => (
                  <div
                    key={f}
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      padding: "16px 20px",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "var(--color-line)",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      boxShadow: "var(--shadow-sm)",
                      transition: "transform 0.2s, box-shadow 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    <div style={{ 
                      width: 36, 
                      height: 36, 
                      borderRadius: "50%", 
                      background: "var(--color-bg-soft)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <CheckCircle size={20} weight="regular" color="var(--color-primary)" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <h2 style={{ fontSize: 28, marginBottom: 32, letterSpacing: "-0.01em" }}>SAHA TÜRLERİ</h2>
              <div style={{ display: "grid", gap: 16 }}>
                {SPORT_FIELDS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.name}
                      style={{
                        background: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-sm)",
                        padding: "16px 20px",
                        fontSize: 15,
                        fontWeight: 500,
                        color: "var(--color-line)",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        boxShadow: "var(--shadow-sm)",
                        transition: "transform 0.2s, box-shadow 0.2s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "var(--shadow-md)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                      }}
                    >
                      <div style={{ 
                        width: 36, 
                        height: 36, 
                        borderRadius: "50%", 
                        background: "var(--color-bg-soft)", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center"
                      }}>
                        <Icon size={20} weight="regular" color="var(--color-primary)" />
                      </div>
                      {s.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HİZMET STANDARTLARI ─────────────────────────────────────── */}
      <section style={{ background: "var(--color-bg-soft)", paddingTop: 100, paddingBottom: 120 }}>
        <div className="page-wrap" style={{ padding: 0 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <Badge color="var(--color-warm)">Kalite Taahhüdü</Badge>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", margin: "20px 0 16px", letterSpacing: "-0.01em" }}>
                HİZMET STANDARTLARIMIZ
              </h2>
              <p
                style={{
                  color: "var(--color-line-dim)",
                  fontSize: 16,
                  lineHeight: 1.8,
                  maxWidth: 680,
                  margin: "0 auto",
                }}
              >
                Gözde İnşaat olarak, ürün ve hizmetlerimizin kalitesini, adımızın 
                güvenilir imajını korur; çalışanlarımızla, tedarikçilerimizle ve 
                müşterilerimizle dürüst davranmayı ilke ediniriz.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {STANDARDS.map((s, i) => {
              const isLast = i === STANDARDS.length - 1;
              return (
                <ScrollReveal key={i} delay={i * 0.05} style={isLast ? { gridColumn: "1 / -1" } : {}}>
                  <div
                    style={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius)",
                      padding: isLast ? "32px 40px" : 24,
                      display: "flex",
                      gap: 20,
                      alignItems: isLast ? "center" : "flex-start",
                      height: "100%",
                      boxShadow: "var(--shadow-sm)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    <CheckCircle
                      size={isLast ? 32 : 24}
                      weight="regular"
                      color="var(--color-primary)"
                      style={{ flexShrink: 0, marginTop: isLast ? 0 : 2 }}
                    />
                    <p style={{ 
                      fontSize: isLast ? 20 : 15, 
                      fontWeight: isLast ? 600 : 400,
                      color: isLast ? "var(--color-line)" : "var(--color-line-dim)", 
                      lineHeight: 1.6, 
                      margin: 0 
                    }}>
                      {s}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}