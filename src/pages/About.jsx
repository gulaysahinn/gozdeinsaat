import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";

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
  "Badminton sahaları",
  "Basketbol sahaları",
  "Futbol sahaları",
  "Hentbol sahaları",
  "Tenis kortları",
  "Voleybol sahaları",
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

      {/* HERO */}
      <section style={pageWrap}>
        <Badge color={COLORS.rust}>Hakkımızda</Badge>
        <h1
          style={{
            fontFamily: FONT.display,
            fontSize: 48,
            margin: "16px 0 24px",
            lineHeight: 1.05,
          }}
        >
          GÖZDE İNŞAAT
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            alignItems: "flex-start",
          }}
        >
          {/* SOL — Şirket Tanıtımı */}
          <div>
            <p
              style={{
                color: COLORS.lineDim,
                fontSize: 15,
                lineHeight: 1.9,
                marginBottom: 24,
              }}
            >
              Gözde İnşaat; spor sahaları yapımı ve yenileme firması olarak
              nitelikli ve profesyonel çalışan kadromuz ile açık ve kapalı spor
              sahaları yapımında,{" "}
              <span style={{ color: COLORS.line, fontWeight: 600 }}>
                1988'den beri
              </span>{" "}
              hizmet vermekteyiz.
            </p>
            <p
              style={{
                color: COLORS.lineDim,
                fontSize: 15,
                lineHeight: 1.9,
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
                color: COLORS.lineDim,
                fontSize: 15,
                lineHeight: 1.9,
              }}
            >
              Kullandığımız ürün ve imalat malzemelerin, başta insan faktörü
              olmak üzere, her zaman doğada tüm canlıların sağlığına uygunluğunu
              gözetir; uluslararası spor federasyonların ve TSE standartlarında
              kaliteli ve sertifikalı ürünler kullanmaktayız.
            </p>
          </div>

          {/* SAĞ — İstatistikler */}
          <div
            style={{
              background: COLORS.bgSoft,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {[
              { value: "1988", label: "Kuruluş yılı" },
              { value: "35+", label: "Yıllık deneyim" },
              { value: "500+", label: "Tamamlanan saha" },
              { value: "8", label: "Farklı zemin seçeneği" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: FONT.display,
                    fontSize: 36,
                    color: COLORS.rust,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: COLORS.lineDim,
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZEMİN & SAHA TÜRLERİ */}
      <section
        style={{
          background: COLORS.bgSoft,
          padding: "60px 32px",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
            }}
          >
            {/* Zemin Seçenekleri */}
            <div>
              <h2
                style={{
                  fontFamily: FONT.display,
                  fontSize: 28,
                  marginBottom: 24,
                  color: COLORS.line,
                }}
              >
                ZEMİN SEÇENEKLERİ
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {FLOOR_TYPES.map((f) => (
                  <div
                    key={f}
                    style={{
                      background: COLORS.card,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 8,
                      padding: "12px 16px",
                      fontSize: 14,
                      color: COLORS.lineDim,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: COLORS.rust,
                        flexShrink: 0,
                      }}
                    />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Saha Türleri */}
            <div>
              <h2
                style={{
                  fontFamily: FONT.display,
                  fontSize: 28,
                  marginBottom: 24,
                  color: COLORS.line,
                }}
              >
                SAHA TÜRLERİ
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {SPORT_FIELDS.map((s) => (
                  <div
                    key={s}
                    style={{
                      background: COLORS.card,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 8,
                      padding: "12px 16px",
                      fontSize: 14,
                      color: COLORS.lineDim,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: COLORS.orange,
                        flexShrink: 0,
                      }}
                    />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HİZMET STANDARTLARI */}
      <section style={pageWrap}>
        <Badge color={COLORS.orange}>Kalite Taahhüdü</Badge>
        <h2
          style={{
            fontFamily: FONT.display,
            fontSize: 36,
            margin: "16px 0 12px",
          }}
        >
          HİZMET STANDARTLARIMIZ
        </h2>
        <p
          style={{
            color: COLORS.lineDim,
            fontSize: 15,
            lineHeight: 1.8,
            maxWidth: 680,
            marginBottom: 36,
          }}
        >
          Gözde İnşaat spor sahaları olarak, her zaman için ürün ve
          hizmetlerimizin kalitesini, adımızın güvenilir imajını korur;
          çalışanlarımızla, tedarikçilerimizle, rakiplerimizle ve
          müşterilerimizle ilişkilerimizde dürüst davranmayı ilke ediniriz.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {STANDARDS.map((s, i) => (
            <div
              key={i}
              style={{
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 10,
                padding: "18px 20px",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
              }}
            >
              <CheckCircle2
                size={18}
                color={COLORS.rust}
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <p style={{ fontSize: 14, color: COLORS.lineDim, lineHeight: 1.6, margin: 0 }}>
                {s}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}