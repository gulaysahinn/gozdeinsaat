import React, { useState } from "react";
import { MapPin, Ruler } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";
import { PROJECTS } from "../data/content";

const filters = ["Tümü", "Tenis", "Basketbol", "Voleybol", "Çok amaçlı", "Halı Saha"];

export default function Projects() {
  const [filter, setFilter] = useState("Tümü");
  const visible = filter === "Tümü" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section style={pageWrap}>
      <Helmet>
        <title>Tamamlanan Spor Sahası Projeleri | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat'in Türkiye genelinde tamamladığı tenis kortu, basketbol, voleybol ve çok amaçlı spor sahası projeleri. 500+ referans, 1988'den bu yana."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/projeler" />
      </Helmet>
      <Badge color={COLORS.rust}>Projelerimiz</Badge>
      <h1 style={{ fontFamily: FONT.display, fontSize: 40, margin: "16px 0 26px" }}>
        TAMAMLADIĞIMIZ PROJELER
      </h1>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 26 }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              background: filter === f ? COLORS.rust : "transparent",
              border: `1px solid ${filter === f ? COLORS.rust : COLORS.border}`,
              color: COLORS.line,
              borderRadius: 999,
              padding: "7px 14px",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {visible.map((p) => (
          <div
            key={p.name}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: 120,
                background: `linear-gradient(135deg, ${p.color}22, ${COLORS.card})`,
                borderBottom: `1px solid ${COLORS.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: FONT.mono, fontSize: 12, color: p.color }}>
                {p.type.toUpperCase()}
              </span>
            </div>
            <div style={{ padding: 18 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.name}</h3>
              <div style={{ display: "flex", gap: 14, fontSize: 13, color: COLORS.lineDim }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <MapPin size={13} /> {p.city}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Ruler size={13} /> {p.size}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}