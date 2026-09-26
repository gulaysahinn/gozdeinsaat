import { useState, useMemo, useEffect } from "react";
import {
  ArrowRight,
  PhoneCall,
  CheckCircle,
  Trophy,
  Buildings,
  Images
} from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { PROJECTS } from "../data/content";

const ALL_FILTERS = ["Tümü", "Futbol", "Basketbol", "Voleybol", "Tenis", "Çok Amaçlı", "Çocuk Parkı"];

// Hızlı branş önizleme şeridi verileri
const BRANCH_PREVIEWS = [
  { type: "Futbol", label: "Halı Saha", img: `${import.meta.env.BASE_URL}images/hizmetler/kapalihalisaha.jpg`, count: "2 Proje" },
  { type: "Basketbol", label: "Basketbol Sahası", img: `${import.meta.env.BASE_URL}images/hizmetler/basketbol2.jpg`, count: "5 Proje" },
  { type: "Voleybol", label: "Voleybol Sahası", img: `${import.meta.env.BASE_URL}images/hizmetler/voleybol.JPG`, count: "2 Proje" },
  { type: "Tenis", label: "Tenis Kortu", img: `${import.meta.env.BASE_URL}images/hizmetler/akrilikZeminTenisKortu.jpeg`, count: "4 Proje" },
  { type: "Çok Amaçlı", label: "Çok Amaçlı Saha", img: `${import.meta.env.BASE_URL}images/hizmetler/ÇOK AMAÇLI SAHA.jpeg`, count: "3 Proje" },
  { type: "Çocuk Parkı", label: "Çocuk Oyun Parkı", img: `${import.meta.env.BASE_URL}images/hizmetler/cocukparki5.jpg`, count: "6 Proje" },
];

// Her projeye özel genel zemin/tesis bilgileri ve yönlendirme bağlantıları
const PROJECT_METAS = {
  "Kapalı Halı Saha": {
    surfaceType: "Sentetik Çim Zemin",
    facilityType: "Kapalı Spor Tesisi",
    linkTo: "/hizmetler/hali-saha-yapimi",
    highlightTag: "Kapalı Tesis",
  },
  "Açık Halı Saha": {
    surfaceType: "Sentetik Çim Zemin",
    facilityType: "Açık Halı Saha",
    linkTo: "/hizmetler/hali-saha-yapimi",
    highlightTag: "Açık Tesis",
  },
  "Profesyonel Basketbol Sahası": {
    surfaceType: "Akrilik Zemin Kaplama",
    facilityType: "Açık Basketbol Sahası",
    linkTo: "/hizmetler/basketbol-sahasi-yapimi",
    highlightTag: "FIBA Normu",
  },
  "Nizami Açık Basketbol Sahası": {
    surfaceType: "Akrilik Zemin Kaplama",
    facilityType: "Açık Basketbol Sahası",
    linkTo: "/hizmetler/basketbol-sahasi-yapimi",
    highlightTag: "FIBA Normu",
  },
  "Tartan Zemin Basketbol Sahası": {
    surfaceType: "Tartan (EPDM) Zemin",
    facilityType: "Açık Basketbol Sahası",
    linkTo: "/hizmetler/basketbol-sahasi-yapimi",
    highlightTag: "Eklem Dostu",
  },
  "Poliüretan Kapalı Spor Salonu": {
    surfaceType: "Poliüretan Zemin Kaplama",
    facilityType: "Kapalı Spor Salonu",
    linkTo: "/hizmetler/basketbol-sahasi-yapimi",
    highlightTag: "Kapalı Salon",
  },
  "Kapalı Basketbol Sahası": {
    surfaceType: "Ahşap Spor Parkesi",
    facilityType: "Kapalı Spor Salonu",
    linkTo: "/hizmetler/basketbol-sahasi-yapimi",
    highlightTag: "Masif Parke",
  },
  "Profesyonel Açık Voleybol Sahası": {
    surfaceType: "Akrilik Zemin Kaplama",
    facilityType: "Açık Voleybol Sahası",
    linkTo: "/hizmetler/voleybol-sahasi-yapimi",
    highlightTag: "FIVB Standart",
  },
  "Kombine Voleybol & Basketbol Sahası": {
    surfaceType: "Kombine Çok Amaçlı Zemin",
    facilityType: "Çok Amaçlı Açık Saha",
    linkTo: "/hizmetler/voleybol-sahasi-yapimi",
    highlightTag: "Çift Branş",
  },
  "Akrilik Zemin Tenis Kortu": {
    surfaceType: "Akrilik Zemin Kaplama",
    facilityType: "Açık Tenis Kortu",
    linkTo: "/hizmetler/tenis-kortu-yapimi",
    highlightTag: "ITF Standardı",
  },
  "Sentetik Çim Tenis Kortu": {
    surfaceType: "Sentetik Çim Zemin",
    facilityType: "Açık Tenis Kortu",
    linkTo: "/hizmetler/sentetik-cim-tenis-kortu-yapimi",
    highlightTag: "Konforlu Zemin",
  },
  "Tartan Zemin Tenis Kortu": {
    surfaceType: "Tartan (EPDM) Zemin",
    facilityType: "Açık Tenis Kortu",
    linkTo: "/hizmetler/tartan-zemin-tenis-kortu-yapimi",
    highlightTag: "Eklem Dostu",
  },
  "Toprak Zemin Tenis Kortu": {
    surfaceType: "Toprak Kort (Kiremit Tozu)",
    facilityType: "Klasik Tenis Kortu",
    linkTo: "/hizmetler/tenis-kortu-yapimi",
    highlightTag: "Doğal Zemin",
  },
  "Çok Amaçlı Okul Sahası": {
    surfaceType: "Kombine Akrilik Zemin",
    facilityType: "Çok Amaçlı Spor Alanı",
    linkTo: "/hizmetler/cok-amacli-saha-yapimi",
    highlightTag: "Kombine Saha",
  },
  "Kapsamlı Spor Kompleksi": {
    surfaceType: "Çoklu Spor Zeminleri",
    facilityType: "Açık Spor Kompleksi",
    linkTo: "/hizmetler/cok-amacli-saha-yapimi",
    highlightTag: "Spor Kompleksi",
  },
  "Tribünlü Kampüs Sahası": {
    surfaceType: "Akrilik Zemin Kaplama",
    facilityType: "Tribünlü Kampüs Sahası",
    linkTo: "/hizmetler/cok-amacli-saha-yapimi",
    highlightTag: "Tribünlü Saha",
  },
  "Panoramik Sahil Parkı EPDM Kauçuk Zemin": {
    surfaceType: "Dökme EPDM Kauçuk Zemin",
    facilityType: "Çocuk Oyun & Rekreasyon Alanı",
    linkTo: "/iletisim",
    highlightTag: "Rekreasyon Parkı",
  },
  "Renkli Geometrik Figürlü Çocuk Oyun Parkı": {
    surfaceType: "Figürlü EPDM Kauçuk Zemin",
    facilityType: "Tematik Oyun Alanı",
    linkTo: "/iletisim",
    highlightTag: "Tematik Park",
  },
  "Site İçi Karo Kauçuk Oyun & Rekreasyon Alanı": {
    surfaceType: "Modüler Karo Kauçuk Zemin",
    facilityType: "Site İçi Oyun Alanı",
    linkTo: "/iletisim",
    highlightTag: "Modüler Zemin",
  },
  "Doğal Çevre Uyumlu Dökme Kauçuk Park": {
    surfaceType: "Monolitik Kauçuk Zemin",
    facilityType: "Ahşap Oyun Parkı",
    linkTo: "/iletisim",
    highlightTag: "Doğal Tasarım",
  },
  "Modern Geometrik Zemin & Oyun Elemanları": {
    surfaceType: "Dökme Kauçuk Zemin",
    facilityType: "Şehir Oyun Alanı",
    linkTo: "/iletisim",
    highlightTag: "Dinamik Park",
  },
  "Modüler Karo Kauçuk Çok Fonksiyonlu Oyun Kompleksi": {
    surfaceType: "Karo Kauçuk Zemin",
    facilityType: "Oyun Kompleksi",
    linkTo: "/iletisim",
    highlightTag: "Oyun Kompleksi",
  },
};

/* ─── 2. GENİŞ EDİTORYAL KART (2-SÜTUNLU YAN YANA / 16:10 SABİT ORAN) ──────── */
function WideProjectCard({ project, onImageClick }) {
  const [hovered, setHovered] = useState(false);
  const [activeImg, setActiveImg] = useState(project.image);
  const meta = PROJECT_METAS[project.name] || {};
  const gallery = project.gallery || [project.image];
  const hasGallery = gallery.length > 1;

  useEffect(() => {
    setActiveImg(project.image);
  }, [project.image]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-card)",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        borderColor: hovered ? "var(--color-accent)" : "var(--color-border)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Görsel Alanı: Sabit 16:10 En-Boy Oranı & flex-shrink: 0 ile kilitli */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 250,
          minHeight: 250,
          maxHeight: 250,
          flexShrink: 0,
          overflow: "hidden",
          background: "var(--color-bg-soft)",
        }}
      >
        <img
          src={activeImg}
          alt={project.name}
          loading="lazy"
          onClick={() => onImageClick?.(activeImg)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            cursor: "pointer",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(6px)",
            padding: "4px 10px",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--color-accent)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            border: "1px solid var(--color-border)",
          }}
        >
          {meta.highlightTag || project.type}
        </div>

        {hasGallery && (
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onImageClick?.(activeImg);
            }}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: "rgba(21, 77, 53, 0.95)",
              backdropFilter: "blur(6px)",
              color: "#FFFFFF",
              padding: "6px 10px",
              fontSize: 12,
              fontWeight: 700,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <Images size={16} weight="bold" />
            <span>{gallery.length} Açı</span>
            <span style={{ fontSize: 10, opacity: 0.8, marginLeft: 2, fontWeight: 500 }}>(Büyüt)</span>
          </div>
        )}

        {/* Çoklu Fotoğraf Thumbnail Şeridi */}
        {hasGallery && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "flex-end",
              gap: 10,
              zIndex: 2,
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              padding: "24px 16px 12px 16px",
            }}
          >
            {gallery.map((imgUrl, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImg(imgUrl);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = activeImg === imgUrl ? "1" : "0.6";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
                }}
                style={{
                  width: 56,
                  height: 42,
                  flexShrink: 0,
                  position: "relative",
                  padding: 0,
                  border: activeImg === imgUrl ? "2px solid #FFFFFF" : "2px solid transparent",
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  opacity: activeImg === imgUrl ? 1 : 0.6,
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <img src={imgUrl} alt={`Fotoğraf ${i + 1}`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* İçerik */}
      <div style={{ padding: "26px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", marginBottom: 6 }}>
            {project.type} Branşı
          </div>
          <h3
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--color-line)",
              margin: "0 0 10px",
            }}
          >
            {project.name}
          </h3>
          <p style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 20px" }}>
            {project.desc}
          </p>

          {/* Genel Zemin Tipi */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                background: "var(--color-bg-soft)",
                borderRadius: "var(--radius)",
                fontSize: 12,
                fontWeight: 600,
                color: "var(--color-line)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
              <span>{meta.surfaceType || project.surfaceType || project.type}</span>
            </span>
          </div>
        </div>

        {/* Aksiyon Linki */}
        <Link
          to={meta.linkTo || "/hizmetler"}
          style={{
            paddingTop: 16,
            borderTop: "1px solid var(--color-border)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 700,
            color: "var(--color-accent)",
            textDecoration: "none",
          }}
        >
          <span>Saha Detaylarını İncele</span>
          <ArrowRight
            size={14}
            weight="bold"
            style={{
              transition: "transform 0.2s",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

/* ─── 3. KOMPAKT KART (3-SÜTUNLU STANDART / 4:3 SABİT ORAN) ───────────────── */
function CompactProjectCard({ project, onImageClick }) {
  const [hovered, setHovered] = useState(false);
  const [activeImg, setActiveImg] = useState(project.image);
  const meta = PROJECT_METAS[project.name] || {};
  const gallery = project.gallery || [project.image];
  const hasGallery = gallery.length > 1;

  useEffect(() => {
    setActiveImg(project.image);
  }, [project.image]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-card)",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        borderColor: hovered ? "var(--color-accent)" : "var(--color-border)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Görsel Alanı: 4:3 Oranına Uygun 210px Kilitli Yükseklik & flex-shrink: 0 */}
      <div
        style={{
          width: "100%",
          height: 210,
          minHeight: 210,
          maxHeight: 210,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          background: "var(--color-bg-soft)",
        }}
      >
        <img
          src={activeImg}
          alt={project.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(4px)",
            padding: "3px 9px",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--color-accent)",
            textTransform: "uppercase",
            border: "1px solid var(--color-border)",
          }}
        >
          {project.type}
        </div>

        {hasGallery && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "flex-end",
              gap: 8,
              zIndex: 2,
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
              padding: "16px 12px 10px 12px",
            }}
          >
            {gallery.map((imgUrl, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImg(imgUrl);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = activeImg === imgUrl ? "1" : "0.6";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                style={{
                  width: 44,
                  height: 33,
                  flexShrink: 0,
                  position: "relative",
                  padding: 0,
                  border: activeImg === imgUrl ? "2px solid #FFFFFF" : "2px solid transparent",
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  opacity: activeImg === imgUrl ? 1 : 0.6,
                  transition: "all 0.2s ease",
                }}
              >
                <img src={imgUrl} alt={`Fotoğraf ${i + 1}`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* İçerik */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
        <div>
          <h4
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: 17,
              fontWeight: 700,
              color: "var(--color-line)",
              margin: "0 0 8px",
            }}
          >
            {project.name}
          </h4>
          <p style={{ fontSize: 13, color: "var(--color-line-dim)", lineHeight: 1.6, margin: "0 0 16px" }}>
            {project.desc}
          </p>

          {/* Genel Zemin Tipi */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                background: "var(--color-bg-soft)",
                borderRadius: "var(--radius)",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--color-line)",
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
              <span>{meta.surfaceType || project.surfaceType || project.type}</span>
            </span>
          </div>
        </div>

        <Link
          to={meta.linkTo || "/hizmetler"}
          style={{
            paddingTop: 12,
            borderTop: "1px solid var(--color-border)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            color: "var(--color-accent)",
            textDecoration: "none",
          }}
        >
          <span>İncele</span>
          <ArrowRight
            size={13}
            weight="bold"
            style={{
              transition: "transform 0.2s",
              transform: hovered ? "translateX(3px)" : "translateX(0)",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

/* ─── ANA PROJELER SAYFASI ─────────────────────────────────────────────────── */
export default function Projects() {
  const [filter, setFilter] = useState("Tümü");
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "Tümü") return PROJECTS;
    return PROJECTS.filter((p) => p.type === filter);
  }, [filter]);

  const getCount = (f) =>
    f === "Tümü" ? PROJECTS.length : PROJECTS.filter((p) => p.type === f).length;

  const isAll = filter === "Tümü";

  // Tümü görünümünde branş bazlı projeleri ayır
  const showcaseProject = isAll ? PROJECTS.find((p) => p.name === "Kapalı Halı Saha") : null;
  const tennisProjects = PROJECTS.filter((p) => p.type === "Tenis");
  const basketballProjects = PROJECTS.filter((p) => p.type === "Basketbol");
  const volleyballProjects = PROJECTS.filter((p) => p.type === "Voleybol");
  const multiProjects = PROJECTS.filter((p) => p.type === "Çok Amaçlı");
  const kidsProjects = PROJECTS.filter((p) => p.type === "Çocuk Parkı");
  const openFootball = PROJECTS.find((p) => p.name === "Açık Halı Saha");

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-line)" }}>
      <Helmet>
        <title>Tamamlanan Projeler | Spor Sahası Referansları | Gözde İnşaat</title>
        <meta
          name="description"
          content="1988'den beri tamamladığımız tenis kortu, basketbol sahası, voleybol sahası, halı saha, çok amaçlı spor sahası ve çocuk oyun parkı projelerimizden örnekler."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/projeler" />
      </Helmet>

      {/* ── 1. HERO BÖLÜMÜ (GÖRSEL AĞIRLIKLI VİTRİN DÜZENİ) ───────────────── */}
      <header
        style={{
          paddingTop: "clamp(60px, 8vw, 90px)",
          paddingBottom: "clamp(40px, 5vw, 60px)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg)",
        }}
      >
        <div className="page-wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(32px, 5vw, 56px)",
              alignItems: "center",
            }}
          >
            {/* Sol Taraf: Başlık, Rozet, Açıklama ve Hızlı İstatistikler */}
            <ScrollReveal>
              <div>
                {/* Görsel ağırlığı yüksek zümrüt yeşili degrade rozet */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "7px 16px",
                    background: "linear-gradient(135deg, var(--color-accent-dark, #154D35) 0%, #1e6b4a 100%)",
                    color: "#FFFFFF",
                    borderRadius: "999px",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    boxShadow: "0 4px 14px rgba(21, 77, 53, 0.25)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#4ade80",
                      boxShadow: "0 0 10px #4ade80",
                      display: "inline-block",
                    }}
                  />
                  <Buildings size={16} weight="fill" color="#FFFFFF" />
                  <span>1988'DEN BUGÜNE • Yüzlerce Tamamlanmış Proje</span>
                </div>

                <h1
                  style={{
                    fontFamily: "'General Sans', sans-serif",
                    fontSize: "clamp(32px, 4.8vw, 52px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    margin: "0 0 18px",
                    color: "var(--color-line)",
                  }}
                >
                  Tamamlanan Spor Sahası Projelerimiz
                </h1>

                <p
                  style={{
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    lineHeight: 1.7,
                    color: "var(--color-line-dim)",
                    margin: "0 0 24px",
                  }}
                >
                  Spor kulüpleri, eğitim kurumları, oteller, konut siteleri ve belediyeler için
                  uluslararası normlarda (ITF, FIBA, FIFA, FIVB) inşa ettiğimiz anahtar teslim saha portföyümüz.
                </p>

                {/* Hızlı Güven & Portföy Metrikleri */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--color-line)",
                    }}
                  >
                    <CheckCircle size={16} weight="fill" color="var(--color-accent)" />
                    <span>22+ Seçkin Proje Referansı</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--color-line)",
                    }}
                  >
                    <Trophy size={16} weight="fill" color="var(--color-accent)" />
                    <span>6 Spor Branşı & Rekreasyon</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Sağ Taraf: Hero Çift Görsel Izgarası (%58 - %42 Eşit Yükseklik) */}
            <ScrollReveal delay={0.15}>
              <div
                className="projects-hero-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.35fr 1fr",
                  gap: 14,
                  height: "clamp(260px, 28vw, 310px)",
                  width: "100%",
                  maxWidth: 560,
                  margin: "0 auto",
                }}
              >
                {/* 1. Sol Görsel (%58): Nizami FIBA Basketbol Sahası */}
                <div
                  style={{
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    border: "1px solid var(--color-border)",
                    height: "100%",
                    position: "relative",
                    background: "var(--color-bg-soft)",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/hizmetler/basketbol2.jpg`}
                    alt="Nizami Açık Basketbol Sahası Drone Çekimi"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(21, 77, 53, 0.92)",
                        backdropFilter: "blur(6px)",
                        color: "#FFFFFF",
                        padding: "4px 10px",
                        fontSize: 11,
                        fontWeight: 700,
                        borderRadius: 3,
                      }}
                    >
                      FIBA Basketbol Sahası
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 10, fontWeight: 600 }}>
                      Anahtar Teslim
                    </span>
                  </div>
                </div>

                {/* 2. Sağ Görsel (%42): Sahil Rekreasyon & EPDM Kauçuk Zemin */}
                <div
                  style={{
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    border: "1px solid var(--color-border)",
                    height: "100%",
                    position: "relative",
                    background: "var(--color-bg-soft)",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/hizmetler/cocukparki5.jpg`}
                    alt="Sahil Rekreasyon ve EPDM Kauçuk Zemin"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(26, 29, 32, 0.88)",
                        backdropFilter: "blur(4px)",
                        color: "#FFFFFF",
                        padding: "4px 10px",
                        fontSize: 11,
                        fontWeight: 700,
                        borderRadius: 3,
                        display: "inline-block",
                      }}
                    >
                      EPDM Rekreasyon & Park
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── 2. BRANŞ GÖRSEL ÖNİZLEME ŞERİDİ (VISUAL PREVIEWS) ─────────── */}
          <div style={{ marginTop: "clamp(36px, 5vw, 50px)" }}>
            <ScrollReveal delay={0.1}>
              <div style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-line)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Hızlı Branş Seçimi & Fotoğraf Galerisi
                </span>
              </div>

              {/* Yatay Branş Thumbnail Kartları */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                {BRANCH_PREVIEWS.map((b) => {
                  const isActive = filter === b.type;
                  return (
                    <button
                      key={b.type}
                      type="button"
                      onClick={() => setFilter(b.type)}
                      style={{
                        padding: 0,
                        border: isActive ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
                        borderRadius: "var(--radius)",
                        background: "var(--color-card)",
                        overflow: "hidden",
                        cursor: "pointer",
                        textAlign: "left",
                        boxShadow: isActive ? "var(--shadow-md)" : "var(--shadow-sm)",
                        transform: isActive ? "translateY(-2px)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ height: 80, position: "relative", overflow: "hidden" }}>
                        <img
                          src={b.img}
                          alt={b.label}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s",
                            transform: isActive ? "scale(1.05)" : "scale(1)",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: isActive
                              ? "linear-gradient(to top, rgba(21, 77, 53, 0.85) 0%, transparent 60%)"
                              : "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 6,
                            left: 8,
                            right: 8,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ color: "#FFFFFF", fontSize: 11, fontWeight: 700 }}>
                            {b.label}
                          </span>
                          <span
                            style={{
                              background: isActive ? "#FFFFFF" : "rgba(255,255,255,0.25)",
                              color: isActive ? "var(--color-accent)" : "#FFFFFF",
                              fontSize: 9,
                              fontWeight: 700,
                              padding: "1px 5px",
                              borderRadius: 2,
                            }}
                          >
                            {b.count}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mimari Segmentli Filtreleme Çubuğu */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  padding: "6px",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                  borderRadius: "var(--radius)",
                }}
              >
                {ALL_FILTERS.map((f) => {
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      style={{
                        padding: "10px 18px",
                        border: "none",
                        background: active ? "var(--color-accent)" : "transparent",
                        color: active ? "#FFFFFF" : "var(--color-line)",
                        fontSize: 13,
                        fontWeight: active ? 700 : 500,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>{f}</span>
                      <span
                        style={{
                          background: active ? "rgba(255, 255, 255, 0.25)" : "var(--color-bg-soft)",
                          color: active ? "#FFFFFF" : "var(--color-line-dim)",
                          padding: "2px 7px",
                          fontSize: 11,
                          fontWeight: 700,
                          borderRadius: 2,
                        }}
                      >
                        {getCount(f)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* ── 3. PROJE PORTFÖYÜ (RİTİMLİ HİKAYE VE VİTRİN DÜZENİ) ───────────── */}
      <main className="page-wrap" style={{ paddingTop: "clamp(50px, 7vw, 80px)", paddingBottom: 100 }}>
        {isAll ? (
          /* TÜMÜ GÖRÜNÜMÜ: ZENGİN HİKAYE AKIŞI */
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(52px, 7vw, 80px)" }}>
            {/* 1. Futbol Sahaları & Spor Kompleksleri */}
            <div>
              <ScrollReveal>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
                  <h2
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Futbol Sahaları & Spor Kompleksleri
                  </h2>
                  <span style={{ fontSize: 13, color: "var(--color-line-dim)" }}>Kapalı ve Açık Halı Saha Tesisleri</span>
                </div>
              </ScrollReveal>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 28,
                }}
              >
                {showcaseProject && (
                  <ScrollReveal delay={0.05}>
                    <WideProjectCard project={showcaseProject} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {openFootball && (
                  <ScrollReveal delay={0.1}>
                    <WideProjectCard project={openFootball} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
              </div>
            </div>

            {/* 2. Turnuva ve Kulüp Standartlarında Açık Sahalar: Tenis & Basketbol */}
            <div>
              <ScrollReveal>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
                  <h2
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Turnuva ve Kulüp Standartlarında Açık Sahalar
                  </h2>
                  <span style={{ fontSize: 13, color: "var(--color-line-dim)" }}>ITF ve FIBA Onaylı Zeminler</span>
                </div>
              </ScrollReveal>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 28,
                }}
              >
                {tennisProjects[0] && (
                  <ScrollReveal delay={0.05}>
                    <WideProjectCard project={tennisProjects[0]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {tennisProjects[3] && (
                  <ScrollReveal delay={0.1}>
                    <WideProjectCard project={tennisProjects[3]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {basketballProjects[1] && (
                  <ScrollReveal delay={0.15}>
                    <WideProjectCard project={basketballProjects[1]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
              </div>
            </div>

            {/* 3. Voleybol ve Kapalı Spor Kompleksleri (YENİ ÖZEL BÖLÜM) */}
            <div>
              <ScrollReveal>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
                  <h2
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Voleybol Sahaları & Kapalı Spor Salonları
                  </h2>
                  <span style={{ fontSize: 13, color: "var(--color-line-dim)" }}>FIVB Standartları & Poliüretan Zemin Sistemleri</span>
                </div>
              </ScrollReveal>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 28,
                }}
              >
                {volleyballProjects[0] && (
                  <ScrollReveal delay={0.05}>
                    <WideProjectCard project={volleyballProjects[0]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {volleyballProjects[2] && (
                  <ScrollReveal delay={0.1}>
                    <WideProjectCard project={volleyballProjects[2]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {volleyballProjects[3] && (
                  <ScrollReveal delay={0.15}>
                    <WideProjectCard project={volleyballProjects[3]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
              </div>
            </div>

            {/* 4. İhtisasa Özel Zeminler ve Alternatif Çözümler (Dengeli Kompakt Grid) */}
            <div>
              <ScrollReveal>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
                  <h2
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Farklı Zemin ve Tesis Çözümleri
                  </h2>
                  <span style={{ fontSize: 13, color: "var(--color-line-dim)" }}>Toprak, Tartan, Sentetik Çim ve Ahşap Parke</span>
                </div>
              </ScrollReveal>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 24,
                }}
              >

                {tennisProjects[1] && (
                  <ScrollReveal delay={0.08}>
                    <CompactProjectCard project={tennisProjects[1]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {tennisProjects[2] && (
                  <ScrollReveal delay={0.11}>
                    <CompactProjectCard project={tennisProjects[2]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {basketballProjects[2] && (
                  <ScrollReveal delay={0.14}>
                    <CompactProjectCard project={basketballProjects[2]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {basketballProjects[4] && (
                  <ScrollReveal delay={0.17}>
                    <CompactProjectCard project={basketballProjects[4]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {volleyballProjects[1] && (
                  <ScrollReveal delay={0.2}>
                    <CompactProjectCard project={volleyballProjects[1]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}

                {basketballProjects[0] && (
                  <ScrollReveal delay={0.26}>
                    <CompactProjectCard project={basketballProjects[0]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
              </div>
            </div>

            {/* 5. Eğitim Kampüsü ve Kurumsal Çok Amaçlı Sahalar */}
            <div>
              <ScrollReveal>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
                  <h2
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Eğitim Kampüsü ve Kurumsal Çok Amaçlı Sahalar
                  </h2>
                  <span style={{ fontSize: 13, color: "var(--color-line-dim)" }}>Okul, Site ve Kurumsal Tesis Projeleri</span>
                </div>
              </ScrollReveal>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 28,
                }}
              >
                {multiProjects[0] && (
                  <ScrollReveal delay={0.05}>
                    <WideProjectCard project={multiProjects[0]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {multiProjects[1] && (
                  <ScrollReveal delay={0.1}>
                    <WideProjectCard project={multiProjects[1]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {multiProjects[2] && (
                  <ScrollReveal delay={0.15}>
                    <WideProjectCard project={multiProjects[2]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}

              </div>
            </div>

            {/* 6. Güvenli Rekreasyon & Çocuk Oyun Alanları (GENİŞLETİLMİŞ & GALERİLİ) */}
            <div>
              <ScrollReveal>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
                  <h2
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    Güvenli Rekreasyon & Çocuk Oyun Alanları
                  </h2>
                  <span style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                    Dökme EPDM, Karo Kauçuk ve Ahşap Oyun Grupları (6 Farklı Proje & Açı)
                  </span>
                </div>
              </ScrollReveal>

              {/* Üstte 2 Geniş Kart: Biri Panoramik Sahil Parkı, Diğeri Çoklu Galeri Kartı */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: 28,
                  marginBottom: 28,
                }}
              >
                {kidsProjects[0] && (
                  <ScrollReveal delay={0.05}>
                    <WideProjectCard project={kidsProjects[0]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
                {kidsProjects[1] && (
                  <ScrollReveal delay={0.1}>
                    <WideProjectCard project={kidsProjects[1]} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                )}
              </div>

              {/* Altta 4 Kompakt Kart: Zengin Zemin Çeşitleri ve Proje Açıları */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 24,
                }}
              >
                {kidsProjects.slice(2).map((p, idx) => (
                  <ScrollReveal key={p.name} delay={idx * 0.08}>
                    <CompactProjectCard project={p} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* FİLTRELENMİŞ GÖRÜNÜM: DİNAMİK RİTİMLİ GRID */
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2
                style={{
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: "clamp(22px, 2.8vw, 32px)",
                  fontWeight: 700,
                  margin: "0 0 6px",
                }}
              >
                {filter} Projeleri ({filtered.length})
              </h2>
              <p style={{ color: "var(--color-line-dim)", fontSize: 14, margin: 0 }}>
                {filter} kategorisinde tamamlanmış referans uygulamalarımız:
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: filtered.length === 1 ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 28,
              }}
            >
              {filtered.map((p, i) => {
                // Filtrelenmiş listede ilk kartı geniş, diğerlerini dengeli göster
                if (filtered.length > 2 && i === 0) {
                  return (
                    <div key={p.name} style={{ gridColumn: "1 / -1" }}>
                      <ScrollReveal>
                        <ShowcaseCard project={p} />
                      </ScrollReveal>
                    </div>
                  );
                }
                return (
                  <ScrollReveal key={p.name} delay={i * 0.08}>
                    <WideProjectCard project={p} onImageClick={setLightboxImg} />
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 4. KURUMSAL TEKLİF & KEŞİF ÇAĞRISI (CTA BANNER) ─────────────── */}
        <section
          style={{
            marginTop: "clamp(60px, 9vw, 100px)",
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            padding: "clamp(32px, 5vw, 56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", marginBottom: 8 }}>
              Kendi Projenizi Başlatın
            </div>
            <h3
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 700,
                color: "var(--color-line)",
                margin: "0 0 12px",
              }}
            >
              Arsanız İçin Ücretsiz Keşif ve Maliyet Analizi Alın
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-line-dim)", lineHeight: 1.65, margin: 0 }}>
              İstanbul ve çevre illerde teknik ekibimizle arsanızı yerinde inceleyelim. İhtiyacınıza en uygun
              zemin ve aydınlatma sistemini 24 saat içinde projelendirelim.
            </p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-start" }}>
            <Link to="/iletisim" className="btn-primary" style={{ gap: 8 }}>
              Ücretsiz Keşif Talep Et
              <ArrowRight size={15} weight="bold" />
            </Link>
            <a
              href="tel:+902163110994"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 24px",
                border: "1px solid var(--color-border)",
                background: "var(--color-bg)",
                color: "var(--color-line)",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <PhoneCall size={18} color="var(--color-accent)" weight="fill" />
              0 (216) 311 09 94
            </a>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            padding: 20
          }}
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              borderRadius: 8
            }}
            alt="Büyütülmüş Görsel"
          />
          <div style={{ position: "absolute", top: 20, right: 30, color: "white", fontSize: 36, fontWeight: "bold", cursor: "pointer" }}>&times;</div>
        </div>
      )}
    </div>
  );
}