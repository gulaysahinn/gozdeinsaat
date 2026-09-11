import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Badge from "../components/Badge";
import ScrollReveal from "../components/ScrollReveal";
import { REFERENCES, FIELD_FILTERS, CITY_LIST } from "../data/references";
import { 
  MagnifyingGlass, 
  TennisBall, 
  Basketball, 
  Volleyball, 
  SoccerBall, 
  SquaresFour, 
  MapPin, 
  ArrowRight,
  SortAscending,
  Funnel
} from "@phosphor-icons/react";

const getFieldIcon = (field) => {
  switch (field) {
    case "Tenis Kortu": return <TennisBall size={14} weight="fill" />;
    case "Basketbol Sahası": return <Basketball size={14} weight="fill" />;
    case "Voleybol Sahası": return <Volleyball size={14} weight="fill" />;
    case "Halı Saha": return <SoccerBall size={14} weight="fill" />;
    case "Çim Saha": return <SoccerBall size={14} weight="regular" />;
    case "Çok Amaçlı Spor Sahası": return <SquaresFour size={14} weight="fill" />;
    default: return null;
  }
};

const getAvatarStyle = () => {
  return {
    background: "rgba(0, 168, 89, 0.1)", // var(--color-primary) with 10% opacity
    color: "var(--color-primary)",
  };
};

export default function References() {
  const [searchQuery, setSearchQuery] = useState("");
  const [fieldFilter, setFieldFilter] = useState("Tümü");
  const [cityFilter, setCityFilter] = useState("Tümü");
  const [sortBy, setSortBy] = useState("az");
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter all refs
  const filteredRefs = useMemo(() => {
    let result = REFERENCES.filter((r) => {
      const matchSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.district.toLowerCase().includes(searchQuery.toLowerCase());
      const matchField = fieldFilter === "Tümü" || r.fields.includes(fieldFilter);
      const matchCity = cityFilter === "Tümü" || r.city === cityFilter;
      return matchSearch && matchField && matchCity;
    });

    // Sort
    if (sortBy === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name, "tr"));
    } else if (sortBy === "za") {
      result.sort((a, b) => b.name.localeCompare(a.name, "tr"));
    } else if (sortBy === "city") {
      result.sort((a, b) => a.city.localeCompare(b.city, "tr"));
    }

    return result;
  }, [searchQuery, fieldFilter, cityFilter, sortBy]);

  // Handle Load More
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  // Get field counts
  const getFieldCount = (f) => {
    if (f === "Tümü") return REFERENCES.length;
    return REFERENCES.filter(r => r.fields.includes(f)).length;
  };

  return (
    <>
      <Helmet>
        <title>Referanslarımız | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat'ın tenis kortu, basketbol sahası ve çok amaçlı saha inşaatı alanındaki referansları. İstanbul, Kocaeli, Sakarya ve Türkiye geneli projeler."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/referanslar" />
      </Helmet>

      <section className="page-wrap" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <ScrollReveal>
          <Badge>Referanslarımız</Badge>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 48px)", margin: "24px 0 20px", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            TÜRKİYE GENELİNDE YÜZLERCE PROJE
          </h1>
          <p style={{ color: "var(--color-line-dim)", fontSize: 16, maxWidth: 640, marginBottom: 64, lineHeight: 1.8 }}>
            1988'den bugüne okul, üniversite, belediye, otel ve özel siteler için
            inşa ettiğimiz tesislerle spor altyapısına değer katıyoruz.
          </p>
        </ScrollReveal>

        {/* FİLTRELEME ALANI */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              paddingBottom: 24,
              borderBottom: "1px solid var(--color-border)",
              marginBottom: 40,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Üst Satır: Arama ve Sıralama */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ position: "relative", flex: "1 1 300px", maxWidth: 500 }}>
                <MagnifyingGlass 
                  size={20} 
                  style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--color-line-dim)" }} 
                />
                <input 
                  type="text" 
                  placeholder="Kurum adı veya ilçe ara..." 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(12); // Reset pagination on search
                  }}
                  style={{
                    width: "100%",
                    padding: "14px 16px 14px 48px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                    color: "var(--color-line)",
                    fontSize: 15,
                    outline: "none",
                    boxShadow: "var(--shadow-sm)",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--color-primary)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--color-border)"}
                />
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <MapPin size={18} color="var(--color-line-dim)" />
                  <select
                    value={cityFilter}
                    onChange={(e) => { setCityFilter(e.target.value); setVisibleCount(12); }}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      color: "var(--color-line)",
                      fontSize: 14,
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Tümü">Tüm Şehirler</option>
                    {CITY_LIST.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <SortAscending size={18} color="var(--color-line-dim)" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      color: "var(--color-line)",
                      fontSize: 14,
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="az">A'dan Z'ye</option>
                    <option value="za">Z'den A'ya</option>
                    <option value="city">Şehre Göre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Alt Satır: Kategori Filtreleri */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={() => { setFieldFilter("Tümü"); setVisibleCount(12); }}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: 13,
                  border: `1px solid ${fieldFilter === "Tümü" ? "var(--color-primary)" : "var(--color-border)"}`,
                  background: fieldFilter === "Tümü" ? "var(--color-primary)" : "transparent",
                  color: fieldFilter === "Tümü" ? "#fff" : "var(--color-line-dim)",
                  fontWeight: fieldFilter === "Tümü" ? 600 : 500,
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              >
                Tümü ({getFieldCount("Tümü")})
              </button>
              {FIELD_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => { setFieldFilter(f); setVisibleCount(12); }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-pill)",
                    fontSize: 13,
                    border: `1px solid ${fieldFilter === f ? "var(--color-primary)" : "var(--color-border)"}`,
                    background: fieldFilter === f ? "var(--color-primary)" : "transparent",
                    color: fieldFilter === f ? "#fff" : "var(--color-line-dim)",
                    fontWeight: fieldFilter === f ? 600 : 500,
                    transition: "all 0.2s",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ opacity: fieldFilter === f ? 1 : 0.6 }}>{getFieldIcon(f)}</span>
                  {f} <span style={{ opacity: 0.6, fontSize: 12 }}>({getFieldCount(f)})</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* LİSTE */}
        {filteredRefs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--color-line-dim)", background: "var(--color-bg-soft)", borderRadius: "var(--radius)" }}>
            <Funnel size={48} style={{ opacity: 0.2, margin: "0 auto 16px" }} />
            <p style={{ fontSize: 16 }}>Bu arama ve filtrelere uygun sonuç bulunamadı.</p>
            <button 
              onClick={() => { setSearchQuery(""); setFieldFilter("Tümü"); setCityFilter("Tümü"); }}
              style={{ marginTop: 16, color: "var(--color-primary)", fontWeight: 600, background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 16,
              }}
            >
              {filteredRefs.slice(0, visibleCount).map((r, i) => {
                const initial = r.name.charAt(0).toUpperCase();
                const avatarStyle = getAvatarStyle();
                
                return (
                  <ScrollReveal key={`${r.name}-${i}`} delay={(i % 12) * 0.03}>
                    <div
                      style={{
                        background: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius)",
                        padding: 24,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-border)"}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
                        <div 
                          style={{ 
                            width: 48, 
                            height: 48, 
                            borderRadius: "var(--radius-sm)", 
                            background: avatarStyle.background, 
                            color: avatarStyle.color, 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center",
                            fontSize: 20,
                            fontWeight: 700,
                            flexShrink: 0
                          }}
                        >
                          {initial}
                        </div>
                        <div>
                          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, color: "var(--color-line)", lineHeight: 1.4 }}>{r.name}</h3>
                          <div style={{ fontSize: 13, color: "var(--color-line-dim)", display: "flex", alignItems: "center", gap: 4 }}>
                            <MapPin size={14} /> {r.district} / <span style={{ fontWeight: 600, color: "var(--color-line)" }}>{r.city}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
                        {r.fields.map((f) => (
                          <span
                            key={f}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              background: "var(--color-bg-soft)",
                              border: "1px solid var(--color-border)",
                              padding: "4px 10px",
                              borderRadius: "var(--radius-sm)",
                              fontSize: 12,
                              color: "var(--color-line-dim)",
                            }}
                          >
                            <span style={{ color: "var(--color-primary)", opacity: 0.8 }}>{getFieldIcon(f)}</span>
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>

            {visibleCount < filteredRefs.length && (
              <div style={{ textAlign: "center", marginTop: 24 }}>
                <button
                  onClick={handleLoadMore}
                  style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-line)",
                    padding: "14px 32px",
                    borderRadius: "var(--radius-pill)",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "var(--shadow-sm)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-line)";
                  }}
                >
                  Daha Fazla Göster ({filteredRefs.length - visibleCount} kaldı) <ArrowRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
