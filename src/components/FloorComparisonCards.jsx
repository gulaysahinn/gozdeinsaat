import { useState, useEffect } from "react";
import { Users, Stack, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function FloorComparisonCards({ floors, color = "var(--color-accent)" }) {
  if (!floors || floors.length === 0) return null;

  const availableCategories = Array.from(
    new Set(floors.map((f) => f.category).filter(Boolean))
  );
  const hasCategories = availableCategories.length > 1;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const displayedFloors =
    hasCategories && selectedCategory !== "all"
      ? floors.filter((f) => f.category === selectedCategory)
      : floors;

  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory, floors]);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % displayedFloors.length);
  };
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + displayedFloors.length) % displayedFloors.length);
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Kategori Sekmeleri */}
      {hasCategories && (
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            style={{
              padding: "8px 18px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              borderRadius: 4,
              border: selectedCategory === "all" ? `1px solid var(--color-line)` : "1px solid var(--color-border)",
              background: selectedCategory === "all" ? "var(--color-line)" : "var(--color-card)",
              color: selectedCategory === "all" ? "#FFFFFF" : "var(--color-line)",
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
                  padding: "8px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  borderRadius: 4,
                  border: isSelected ? `1px solid var(--color-line)` : "1px solid var(--color-border)",
                  background: isSelected ? "var(--color-line)" : "var(--color-card)",
                  color: isSelected ? "#FFFFFF" : "var(--color-line)",
                  transition: "all 0.15s ease",
                }}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Infinite Grid Carousel Alanı */}
      <div
        style={{
          position: "relative",
          padding: "30px 0", // Üst alt boşluk kartın büyüme animasyonu için
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEndHandler}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            width: "100%",
            "--card-width": "min(85vw, 300px)",
            "--card-gap": "20px",
          }}
        >
          {displayedFloors.map((floor, i) => {
            const n = displayedFloors.length;
            let diff = i - activeIndex;

            // Sonsuz döngü (infinite loop) için en kısa mesafeyi hesapla
            if (n > 1) {
              if (diff > n / 2) diff -= n;
              if (diff < -n / 2) diff += n;
            }

            const isCenter = diff === 0;
            const isVisible = Math.abs(diff) <= 1.5; // n=2 için diff 1 veya -1 olabilir. 3 kart için diff=1 görünür.

            let opacity = 0;
            let scale = 0.8;
            let zIndex = 1;

            if (isCenter) {
              opacity = 1;
              scale = 1.02;
              zIndex = 3;
            } else if (isVisible) {
              opacity = 0.5;
              scale = 0.9;
              zIndex = 2;
            }

            const isFeatured = floor.featured;
            const naturalForWho = floor.forWho
              ? floor.forWho.replace(/\s*·\s*/g, ", ")
              : null;

            return (
              <div
                key={i}
                onClick={() => { if (!isCenter) setActiveIndex(i); }}
                style={{
                  gridArea: "1 / 1",
                  justifySelf: "center",
                  width: "var(--card-width)",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: isCenter ? "var(--shadow-md)" : "none",
                  transform: `translateX(calc(${diff} * (100% + var(--card-gap)))) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s, z-index 0.4s",
                  cursor: isCenter ? "default" : "pointer",
                  pointerEvents: isVisible ? "auto" : "none",
                  position: "relative",
                }}
              >
                {isFeatured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "var(--color-line)",
                      color: "#FFFFFF",
                      padding: "4px 8px",
                      fontSize: 10,
                      fontWeight: 700,
                      borderRadius: 4,
                      zIndex: 2,
                    }}
                  >
                    En Çok Tercih Edilen
                  </div>
                )}

                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <Stack size={20} color="var(--color-line-dim)" weight="regular" />
                    {floor.category && (
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "var(--color-line-dim)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        {floor.category}
                      </div>
                    )}
                  </div>

                  <h4
                    style={{
                      fontFamily: "'General Sans', sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      margin: "0 0 12px",
                      lineHeight: 1.2,
                      paddingRight: isFeatured ? "100px" : "0" // rozetle çakışmaması için
                    }}
                  >
                    {floor.name}
                  </h4>

                  {floor.badges && floor.badges.length > 0 && (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                      {floor.badges.map((b, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "3px 8px",
                            borderRadius: 4,
                            background: "var(--color-bg)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-line-dim)",
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  <p
                    style={{
                      color: "var(--color-line-dim)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      marginBottom: 16,
                      flexGrow: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {floor.desc}
                  </p>

                  {naturalForWho && (
                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: 12,
                        borderTop: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 6,
                        fontSize: "0.8rem",
                        color: "var(--color-line-dim)",
                        lineHeight: 1.4,
                      }}
                    >
                      <Users size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{naturalForWho}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Ok Butonları */}
        {displayedFloors.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "var(--shadow-sm)",
                transition: "background 0.2s",
                zIndex: 10,
                color: "var(--color-line)",
              }}
              aria-label="Önceki Kart"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "var(--shadow-sm)",
                transition: "background 0.2s",
                zIndex: 10,
                color: "var(--color-line)",
              }}
              aria-label="Sonraki Kart"
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
