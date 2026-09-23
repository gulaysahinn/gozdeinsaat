import { useState } from "react";
import { Sparkle, Users } from "@phosphor-icons/react";

export default function FloorComparisonCards({ floors, color = "var(--color-accent)" }) {
  if (!floors || floors.length === 0) return null;

  // Üst Kategori Tespiti (Örn: "Suni Tenis Kortu Zemini" ve "Doğal Tenis Kortu Zemini")
  const availableCategories = Array.from(
    new Set(floors.map((f) => f.category).filter(Boolean))
  );
  const hasCategories = availableCategories.length > 1;

  const [selectedCategory, setSelectedCategory] = useState("all");

  const displayedFloors =
    hasCategories && selectedCategory !== "all"
      ? floors.filter((f) => f.category === selectedCategory)
      : floors;

  return (
    <div>
      {/* Üst Kategori Sekmeleri / Grup Başlıkları */}
      {hasCategories && (
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 28,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            style={{
              padding: "9px 20px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              borderRadius: 2,
              border: selectedCategory === "all" ? `1.5px solid ${color}` : "1px solid var(--color-border)",
              background: selectedCategory === "all" ? color : "var(--color-card)",
              color: selectedCategory === "all" ? "#FFFFFF" : "var(--color-line)",
              boxShadow: selectedCategory === "all" ? "var(--shadow-sm)" : "none",
              transition: "all 0.15s ease",
            }}
          >
            Tüm Zemin Çeşitleri ({floors.length})
          </button>

          {availableCategories.map((cat) => {
            const count = floors.filter((f) => f.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "9px 20px",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  borderRadius: 2,
                  border: isSelected ? `1.5px solid ${color}` : "1px solid var(--color-border)",
                  background: isSelected ? color : "var(--color-card)",
                  color: isSelected ? "#FFFFFF" : "var(--color-line)",
                  boxShadow: isSelected ? "var(--shadow-sm)" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

      <div className="floor-cards-responsive">
        {displayedFloors.map((floor, i) => {
          const isFeatured = i === 0 || floor.featured;

          // "Kulüp · Otel · Okul" gibi nokta ayracını doğal Türkçe metne çevir
          const naturalForWho = floor.forWho
            ? floor.forWho.replace(/\s*·\s*/g, ", ")
            : null;

          return (
            <div
              key={i}
              style={{
                background: "var(--color-card)",
                border: isFeatured ? `2px solid ${color}` : "1px solid var(--color-border)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: isFeatured ? "var(--shadow-md)" : "var(--shadow-card)",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Öne Çıkan Rozeti (Hiyerarşi) */}
              {isFeatured && (
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    zIndex: 2,
                    background: color,
                    color: "#FFFFFF",
                    padding: "4px 10px",
                    fontSize: 11,
                    fontWeight: 700,
                    borderRadius: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                  }}
                >
                  <Sparkle size={13} weight="fill" />
                  <span>En Çok Tercih Edilen</span>
                </div>
              )}

              {/* Görsel Alanı (4:3) */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundColor: "var(--color-bg-soft)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={floor.image}
                  alt={floor.name}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                {/* Başlık ve Hiyerarşik Etiketler */}
                <div style={{ marginBottom: 16 }}>
                  {floor.category && (
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: color,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      {floor.category}
                    </div>
                  )}

                  <h4
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--color-line)",
                      margin: "0 0 12px",
                    }}
                  >
                    {floor.name}
                  </h4>

                  {/* Hiyerarşik Rozetler: İlk özellik belirgin, sonrakiler sessiz teknik parametre */}
                  {floor.badges && floor.badges.length > 0 && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {floor.badges.map((b, idx) => {
                        const isPrimaryBadge = idx === 0;
                        return (
                          <span
                            key={idx}
                            style={{
                              fontSize: 12,
                              fontWeight: isPrimaryBadge ? 700 : 500,
                              padding: "3px 9px",
                              borderRadius: 2,
                              background: isPrimaryBadge ? "var(--color-bg-soft)" : "transparent",
                              border: `1px solid ${isPrimaryBadge ? color : "var(--color-border)"}`,
                              color: isPrimaryBadge ? color : "var(--color-line-dim)",
                            }}
                          >
                            {b}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Açıklama */}
                <p style={{ color: "var(--color-line-dim)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: 18, flexGrow: 1 }}>
                  {floor.desc}
                </p>

                {/* Kimler İçin Uygun (Doğal Cümle & İkon) */}
                {naturalForWho && (
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 14,
                      borderTop: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: "0.85rem",
                      color: "var(--color-line-dim)",
                      lineHeight: 1.45,
                    }}
                  >
                    <Users size={16} color={color} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>
                      <strong style={{ color: "var(--color-line)" }}>Uygun Alanlar:</strong> {naturalForWho}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
