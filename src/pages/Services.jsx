import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";

const SERVICES_HUB = [
  {
    tag: "Tenis",
    color: COLORS.rust,
    title: "Tenis Kortu Yapımı",
    spec: "18 × 36 m",
    image: "/images/hizmetler/tenisKortuYapimi.jpg",
    desc: "Akrilik, tartan (EPDM) ve suni çim zemin seçenekleri, ITF standartlarında açık ve kapalı kort yapımı. Çevre tel örgü ve LED aydınlatma dahil.",
    to: "/tenis-kortu-yapimi",
    cta: "Tenis Kortu Detayları",
  },
  {
    tag: "Basketbol",
    color: COLORS.orange,
    title: "Basketbol Sahası Yapımı",
    spec: "28 × 15 m",
    image: "/images/hizmetler/basketbolSahasi.jpg",
    desc: "FIBA standardında akrilik, suni çim ve tartan zemin seçenekleri; 500'den fazla tamamlanmış sahayla açık ve kapalı uygulama.",
    to: "/basketbol-sahasi-yapimi",
    cta: "Basketbol Sahası Detayları",
  },
  {
    tag: "Voleybol",
    color: COLORS.blue,
    title: "Voleybol & Hentbol Sahası Yapımı",
    spec: "18 × 9 m",
    image: "/images/hizmetler/zemin.jpg",
    desc: "FIVB standartlarında file direği ve zemin sistemleri. Sert zemin veya kum dolgulu seçeneklerle açık/kapalı uygulamalar.",
    to: "/voleybol-sahasi-yapimi",
    cta: "Voleybol Sahası Detayları",
  },
  {
    tag: "Çok amaçlı",
    color: "#9B8EA8",
    title: "Çok Amaçlı Spor Sahası Yapımı",
    spec: "18 × 36 m (yaygın)",
    image: "/images/hizmetler/tenisKortuSahaZemin.jpeg",
    desc: "Tek sahada tenis, basketbol ve voleybol çizgilerinin birlikte uygulandığı kombine sahalar. Okul, site ve belediye projeleri için ideal.",
    to: "/cok-amacli-saha-yapimi",
    cta: "Çok Amaçlı Saha Detayları",
  },
  {
    tag: "Halı Saha",
    color: "#5A9E6F",
    title: "Halı Saha Yapımı",
    spec: "5'e 5 / 7'ye 7 / 11'e 11",
    image: "/images/hizmetler/haliSaha.jpg",
    desc: "FIFA kalite standartlarında sentetik çim halı saha. Aydınlatma ve çevre sistemi dahil anahtar teslim hizmet.",
    to: "/hali-saha-yapimi",
    cta: "Halı Saha Detayları",
  },
];

export default function Services() {
  return (
    <section style={pageWrap}>
      <Helmet>
        <title>Tenis Kortu, Basketbol ve Spor Sahası Yapımı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası, voleybol sahası, halı saha ve çok amaçlı spor sahası yapımı. Akrilik, tartan (EPDM), suni çim zemin seçenekleri. Anahtar teslim hizmet."
        />
        <meta name="keywords" content="tenis kortu yapımı, basketbol sahası yapımı, voleybol sahası yapımı, halı saha yapımı, akrilik zemin, tartan zemin, suni çim" />
        <link rel="canonical" href="https://www.gozdeinsaat.com/hizmetler" />
      </Helmet>

      <Badge color={COLORS.rust}>Hizmetlerimiz</Badge>
      <h1 style={{ fontFamily: FONT.display, fontSize: 40, margin: "16px 0 10px" }}>
        NE İNŞA EDİYORUZ
      </h1>
      <p style={{ color: COLORS.lineDim, fontSize: 15, maxWidth: 560, marginBottom: 40, lineHeight: 1.7 }}>
        Zemin hazırlığından çizgi çalışmasına, ekipman montajından teslimata kadar
        her aşamayı kendi ekibimizle yürütüyoruz. Her hizmet için ayrıntılı bilgi alın.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {SERVICES_HUB.map((s) => (
          <div
            key={s.title}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "240px 1fr",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = s.color + "55")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
          >
            {/* Image Column */}
            <div style={{ height: "100%", background: COLORS.bgSoft }}>
              {s.image && (
                <img
                  src={s.image}
                  alt={s.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>

            {/* Content Column */}
            <div
              style={{
                padding: 28,
                display: "grid",
                gridTemplateColumns: "200px 1fr auto",
                gap: 24,
                alignItems: "center",
              }}
            >
              <div>
                <Badge color={s.color}>{s.tag}</Badge>
                <h2 style={{ fontSize: 20, fontWeight: 600, margin: "12px 0 6px" }}>
                  {s.title}
                </h2>
                <div style={{ fontFamily: FONT.mono, fontSize: 12, color: COLORS.lineDim }}>
                  {s.spec}
                </div>
              </div>

              <p style={{ fontSize: 14, color: COLORS.lineDim, lineHeight: 1.7, margin: 0 }}>
                {s.desc}
              </p>

              <Link
              to={s.to}
              style={{
                background: s.color,
                color: "#fff",
                padding: "10px 18px",
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
                whiteSpace: "nowrap",
              }}
            >
              {s.cta} <ArrowRight size={14} />
            </Link>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}