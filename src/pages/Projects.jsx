import { useState, useMemo } from "react";
import { MapPin, Ruler, CalendarBlank, ArrowRight } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import ScrollReveal from "../components/ScrollReveal";
import { PROJECTS } from "../data/content";

const ALL_FILTERS = ["Tümü", ...new Set(PROJECTS.map((p) => p.type))];

/* ─── Teknik Detay Chip'leri ──────────────────────────────── */
function Chips({ items }) {
  if (!items?.length) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
      {items.map((chip) => (
        <span
          key={chip}
          style={{
            background: "var(--color-bg-soft)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-pill)",
            padding: "4px 12px",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--color-primary)",
            letterSpacing: "0.02em",
          }}
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

/* ─── Meta bilgisi satırı ─────────────────────────────────── */
function MetaRow({ city, size, date }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", fontSize: 14, color: "var(--color-line-dim)", fontWeight: 500 }}>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <MapPin size={16} color="var(--color-primary)" weight="fill" /> {city}
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Ruler size={16} color="var(--color-primary)" /> {size}
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <CalendarBlank size={16} color="var(--color-primary)" /> {date}
      </span>
    </div>
  );
}

/* ─── Kategori Rozeti (görsel üzeri) ─────────────────────── */
function TypeBadge({ type, color }) {
  return (
    <div style={{
      position: "absolute",
      top: 16,
      left: 16,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(6px)",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      fontSize: 11,
      fontWeight: 700,
      color: color || "var(--color-primary)",
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      boxShadow: "var(--shadow-sm)"
    }}>
      {type}
    </div>
  );
}

/* ─── Küçük Kart ──────────────────────────────────────────── */
function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="#"
      style={{
        display: "block",
        textDecoration: "none",
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        height: "100%",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Görsel */}
      <div style={{ height: 220, position: "relative", overflow: "hidden" }}>
        <img
          src={p.image}
          alt={p.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <TypeBadge type={p.type} color={p.color} />
        {/* Ok rozeti */}
        <div style={{
          position: "absolute",
          bottom: 14,
          right: 14,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s",
          transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
        }}>
          <ArrowRight size={15} weight="bold" color="var(--color-primary)" />
        </div>
      </div>

      {/* İçerik */}
      <div style={{ padding: "24px 24px 28px" }}>
        <h3 style={{ fontSize: 18, marginBottom: 10, lineHeight: 1.4, color: "var(--color-line)" }}>{p.name}</h3>
        <p style={{ fontSize: 14, color: "var(--color-line-dim)", lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
        <Chips items={p.chips} />
        <MetaRow city={p.city} size={p.size} date={p.date} />
      </div>
    </Link>
  );
}

/* ─── Büyük Featured Kart ─────────────────────────────────── */
function FeaturedCard({ p }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="#"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textDecoration: "none",
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        marginBottom: 32,
        boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        transition: "box-shadow 0.3s",
        minHeight: 380,
      }}
      className="featured-card-responsive"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sol — Görsel */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: 320 }}>
        <img
          src={p.image}
          alt={p.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        {/* Kategori rozeti — sol üst, görselin üzerine */}
        <TypeBadge type={p.type} color={p.color} />
        {/* Alt gradient */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)"
        }} />
      </div>

      {/* Sağ — İçerik */}
      <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "var(--color-warm)", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
            En Prestijli Proje
          </p>
          <span style={{
            background: "var(--color-primary)",
            color: "#fff",
            padding: "3px 10px",
            borderRadius: "var(--radius-pill)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            Öne Çıkan
          </span>
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.3, marginBottom: 16, color: "var(--color-line)" }}>
          {p.name}
        </h2>
        <p style={{ fontSize: 15, color: "var(--color-line-dim)", lineHeight: 1.7, marginBottom: 24 }}>
          {p.desc}
        </p>
        <Chips items={p.chips} />
        <MetaRow city={p.city} size={p.size} date={p.date} />

        {/* Detay Butonu */}
        <div style={{
          marginTop: 28,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "var(--color-primary)",
          fontWeight: 600,
          fontSize: 15,
          transition: "gap 0.2s",
        }}>
          Projeyi İncele
          <ArrowRight
            size={18}
            weight="bold"
            style={{
              transition: "transform 0.2s",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          />
        </div>
      </div>
    </Link>
  );
}

/* ─── Ana Sayfa ───────────────────────────────────────────── */
export default function Projects() {
  const [filter, setFilter] = useState("Tümü");

  const filtered = useMemo(() => {
    if (filter === "Tümü") return PROJECTS;
    return PROJECTS.filter((p) => p.type === filter);
  }, [filter]);

  const getCount = (f) =>
    f === "Tümü" ? PROJECTS.length : PROJECTS.filter((p) => p.type === f).length;

  // Filtre aktifken featured ayrımı gösterme, sadece "Tümü" iken göster
  const showFeatured = filter === "Tümü";
  const featured = showFeatured ? filtered[0] : null;
  const rest = showFeatured ? filtered.slice(1) : filtered;

  return (
    <>
      <Helmet>
        <title>Projeler | Tamamlanan Spor Sahası Projeleri | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat'ın tamamladığı tenis kortu, basketbol sahası, halı saha ve çok amaçlı spor sahası projelerinden örnekler."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/projeler" />
      </Helmet>

      <section className="page-wrap" style={{ paddingTop: 80, paddingBottom: 100 }}>
        {/* Başlık */}
        <div style={{ marginBottom: 4 }}>
          <Badge>Projeler</Badge>
        </div>
        <ScrollReveal>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 48px)", margin: "24px 0 16px", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            TAMAMLANAN PROJELER
          </h1>
          <p style={{ color: "var(--color-line-dim)", fontSize: 16, maxWidth: 600, marginBottom: 48, lineHeight: 1.8 }}>
            Türkiye'nin dört bir yanında, uluslararası standartlara uygun olarak
            inşa ettiğimiz anahtar teslim spor sahaları ve premium tesis projelerimiz.
          </p>
        </ScrollReveal>

        {/* ── Filtre Şeridi ────────────────────────────── */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              background: "var(--color-bg-soft)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              padding: "16px 20px",
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: 48,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-line-dim)", marginRight: 4, whiteSpace: "nowrap" }}>
              Filtrele:
            </span>
            {ALL_FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "var(--radius-pill)",
                    border: `1px solid ${active ? "var(--color-primary)" : "var(--color-border)"}`,
                    background: active ? "var(--color-primary)" : "var(--color-card)",
                    color: active ? "#fff" : "var(--color-line-dim)",
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    transition: "all 0.2s",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {f}
                  <span
                    style={{
                      background: active ? "rgba(255,255,255,0.25)" : "var(--color-border)",
                      padding: "1px 7px",
                      borderRadius: 10,
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    {getCount(f)}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── Featured Kart (sadece Tümü'nde) ───────────── */}
        {featured && (
          <div style={{ marginBottom: 32 }}>
            <FeaturedCard p={featured} />
          </div>
        )}

        {/* ── Kart Grid ───────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          {rest.map((p, i) => (
            <ScrollReveal key={p.name} delay={(i % 6) * 0.06}>
              <ProjectCard p={p} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}