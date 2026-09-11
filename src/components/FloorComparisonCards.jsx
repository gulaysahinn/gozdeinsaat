import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Buildings, GraduationCap, TreePalm } from "@phosphor-icons/react";

// Badge renk eşleşmesi — tema token'larına bağlı
const BADGE_STYLES = {
  accent: {
    bg: "var(--color-accent-light, #E8F5EE)",
    color: "var(--color-accent, #1A6B4C)",
    border: "var(--color-accent, #1A6B4C)",
  },
  warm: {
    bg: "#FEF3C7",
    color: "#B45309",
    border: "#D97706",
  },
  blue: {
    bg: "#EFF6FF",
    color: "#1D4ED8",
    border: "#3B82F6",
  },
};

function Badge({ label, colorKey = "accent" }) {
  const style = BADGE_STYLES[colorKey] || BADGE_STYLES.accent;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 10px",
        fontSize: 11,
        fontWeight: 600,
        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
        borderRadius: 4,
        whiteSpace: "nowrap",
      }}
    >
      <CheckCircle size={10} weight="fill" aria-hidden="true" />
      {label}
    </span>
  );
}

function FloorCard({ floor, index, serviceLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--color-card, #fff)",
        border: "1px solid var(--color-border, #E4E2DD)",
        overflow: "hidden",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        boxShadow: hovered
          ? "0 8px 32px rgba(26, 107, 76, 0.12)"
          : "0 1px 4px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-3px)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Zemin fotoğrafı */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "var(--color-bg-soft, #F2F1ED)",
        }}
      >
        <img
          src={floor.image}
          alt={`${floor.name} zemin örneği`}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            filter: "grayscale(10%)",
          }}
        />
        {/* Sıra numarası */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--color-line, #1B1F23)",
            background: "var(--color-card, #fff)",
            border: "1px solid var(--color-border)",
            padding: "2px 8px",
            letterSpacing: "0.08em",
          }}
        >
          ZEM·0{index + 1}
        </div>
      </div>

      {/* Kart içeriği */}
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {/* Zemin adı */}
        <h4
          style={{
            fontSize: 17,
            fontWeight: 700,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: "var(--color-line)",
          }}
        >
          {floor.name}
        </h4>

        {/* Badge'ler */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {floor.badges.map((badge, bi) => (
            <Badge
              key={badge}
              label={badge}
              colorKey={floor.badgeColors?.[bi] || "accent"}
            />
          ))}
        </div>

        {/* Kısa açıklama */}
        <p
          style={{
            fontSize: 14,
            color: "var(--color-line-dim, #6B7280)",
            margin: 0,
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {floor.desc}
        </p>

        {/* Kim için */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Buildings
            size={14}
            weight="duotone"
            color="var(--color-line-dim)"
            aria-hidden="true"
          />
          <span
            style={{
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--color-line-dim)",
              letterSpacing: "0.04em",
            }}
          >
            {floor.forWho}
          </span>
        </div>
      </div>
    </article>
  );
}

/**
 * FloorComparisonCards
 * Bir hizmetin zemin seçeneklerini görsel kart grid'iyle gösterir.
 * Props:
 *   floors   — SERVICES[i].floors dizisi
 *   to       — detay sayfası linki (CTA için)
 *   columns  — grid sütun sayısı (default: auto, max 3)
 */
export default function FloorComparisonCards({ floors = [], to, columns }) {
  if (!floors || floors.length === 0) return null;

  const colCount = columns || Math.min(floors.length, 3);

  return (
    <div>
      {/* Başlık satırı */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 20,
              height: 1,
              background: "var(--color-accent)",
            }}
          />
          Zemin Seçenekleri
        </div>
        {to && (
          <Link
            to={to}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "var(--color-accent)",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.04em",
            }}
            aria-label="Detaylı bilgi için hizmet sayfasına git"
          >
            Detaylı bilgi
            <ArrowRight size={13} weight="bold" aria-hidden="true" />
          </Link>
        )}
      </div>

      {/* Kart grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
          gap: 20,
        }}
        className="floor-cards-grid"
      >
        {floors.map((floor, i) => (
          <FloorCard key={floor.name} floor={floor} index={i} serviceLink={to} />
        ))}
      </div>

      {/* Responsive stil */}
      <style>{`
        @media (max-width: 900px) {
          .floor-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .floor-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
