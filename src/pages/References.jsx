import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
  Funnel,
  Buildings,
  GraduationCap,
  PhoneCall,
  CheckCircle,
  ShieldCheck,
  HouseLine,
  Tree
} from "@phosphor-icons/react";

/* ─── Kurum Türü Tespiti ─────────────────────────────────────────────────── */
function getInstitutionCategory(name) {
  const n = name.toLowerCase();
  if (
    n.includes("kolej") ||
    n.includes("okul") ||
    n.includes("üniversite") ||
    n.includes("lise") ||
    n.includes("kampüs") ||
    n.includes("enstitü") ||
    n.includes("i.t.ü")
  ) {
    return { label: "Eğitim & Üniversite", Icon: GraduationCap, color: "#1F6B4A" };
  }
  if (
    n.includes("belediye") ||
    n.includes("kaymakam") ||
    n.includes("ordu evi") ||
    n.includes("dsi") ||
    n.includes("kamu")
  ) {
    return { label: "Kamu & Belediye", Icon: Buildings, color: "#2563EB" };
  }
  if (
    n.includes("evler") ||
    n.includes("konak") ||
    n.includes("villa") ||
    n.includes("site") ||
    n.includes("köy") ||
    n.includes("manor") ||
    n.includes("newport") ||
    n.includes("brandium") ||
    n.includes("centrium")
  ) {
    return { label: "Konut & Site", Icon: HouseLine, color: "#C4552E" };
  }
  if (
    n.includes("hotel") ||
    n.includes("motel") ||
    n.includes("resort") ||
    n.includes("turistik") ||
    n.includes("tatil")
  ) {
    return { label: "Turizm & Otel", Icon: Tree, color: "#059669" };
  }
  return { label: "Özel Sektör & Tesis", Icon: Buildings, color: "#4A5568" };
}

/* ─── Spor Branşı İkon & Etiketleri ───────────────────────────────────────── */
const SPORT_ICONS = {
  "Tenis Kortu": { Icon: TennisBall, label: "Tenis" },
  "Basketbol Sahası": { Icon: Basketball, label: "Basketbol" },
  "Voleybol Sahası": { Icon: Volleyball, label: "Voleybol" },
  "Halı Saha": { Icon: SoccerBall, label: "Halı Saha" },
  "Çim Saha": { Icon: SoccerBall, label: "Çim Saha" },
  "Çok Amaçlı Spor Sahası": { Icon: SquaresFour, label: "Çok Amaçlı" },
  "Çocuk Oyun Parkı": { Icon: Tree, label: "Oyun Parkı" },
};

export default function References() {
  const [searchQuery, setSearchQuery] = useState("");
  const [fieldFilter, setFieldFilter] = useState("Tümü");
  const [cityFilter, setCityFilter] = useState("Tümü");
  const [sortBy, setSortBy] = useState("az");
  const [visibleCount, setVisibleCount] = useState(24);

  // Filtreleme mantığı
  const filteredRefs = useMemo(() => {
    let result = REFERENCES.filter((r) => {
      const q = searchQuery.toLowerCase();
      const matchSearch =
        r.name.toLowerCase().includes(q) ||
        r.district.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q);
      const matchField = fieldFilter === "Tümü" || r.fields.includes(fieldFilter);
      const matchCity = cityFilter === "Tümü" || r.city === cityFilter;
      return matchSearch && matchField && matchCity;
    });

    // Sıralama
    if (sortBy === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name, "tr"));
    } else if (sortBy === "za") {
      result.sort((a, b) => b.name.localeCompare(a.name, "tr"));
    } else if (sortBy === "city") {
      result.sort((a, b) => a.city.localeCompare(b.city, "tr"));
    }

    return result;
  }, [searchQuery, fieldFilter, cityFilter, sortBy]);

  // Sayaçlar
  const getFieldCount = (f) => {
    if (f === "Tümü") return REFERENCES.length;
    return REFERENCES.filter((r) => r.fields.includes(f)).length;
  };

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-line)" }}>
      <Helmet>
        <title>Referanslarımız | Spor Sahası ve Tesis Referansları | Gözde İnşaat</title>
        <meta
          name="description"
          content="1988'den bugüne İ.T.Ü., Doğa Koleji, Eyüpsultan Belediyesi ve 110'u aşkın kurumsal referansımızla tamamladığımız spor sahası projelerimiz."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/referanslar" />
      </Helmet>

      {/* ── 1. HERO VE GÜVEN VEREN İSTATİSTİK ŞERİDİ ───────────────────────── */}
      <header
        style={{
          paddingTop: "clamp(70px, 9vw, 100px)",
          paddingBottom: "clamp(40px, 6vw, 60px)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-bg)",
        }}
      >
        <div className="page-wrap">
          <ScrollReveal>
            <div style={{ maxWidth: 780 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  background: "var(--color-bg-soft)",
                  border: "1px solid var(--color-border)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  marginBottom: 16,
                }}
              >
                <ShieldCheck size={16} weight="fill" />
                <span>1988'DEN BUGÜNE • Kurumsal Güvence</span>
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
                Kurumsal Referanslarımız
              </h1>

              <p
                style={{
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  lineHeight: 1.7,
                  color: "var(--color-line-dim)",
                  margin: 0,
                }}
              >
                Türkiye'nin önde gelen üniversiteleri, kolejleri, belediyeleri, turizm tesisleri ve
                prestijli konut projeleri için inşa ettiğimiz yüzlerce tamamlanmış spor sahası referansımız.
              </p>
            </div>
          </ScrollReveal>

          {/* ── GÜVEN İSTATİSTİK ŞERİDİ (4-METRİK MONOLİTİK PANEL) ─────────── */}
          <div style={{ marginTop: "clamp(36px, 5vw, 56px)" }}>
            <ScrollReveal delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ padding: "24px 28px", borderRight: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                  <div style={{ fontFamily: "'General Sans', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--color-accent)", lineHeight: 1, marginBottom: 8 }}>
                    110+
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)", marginBottom: 4 }}>
                    Referans
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                    Okul, belediye, spor kulübü, site ve özel projeler
                  </div>
                </div>

                <div style={{ padding: "24px 28px", borderRight: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                  <div style={{ fontFamily: "'General Sans', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--color-accent)", lineHeight: 1, marginBottom: 8 }}>
                    Yüzlerce
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)", marginBottom: 4 }}>
                    Tamamlanan Saha
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                    Tenis, basketbol, voleybol ve halı saha projeleri
                  </div>
                </div>

                <div style={{ padding: "24px 28px", borderRight: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                  <div style={{ fontFamily: "'General Sans', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--color-accent)", lineHeight: 1, marginBottom: 8 }}>
                    15+ İl
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)", marginBottom: 4 }}>
                    Coğrafi Yaygınlık
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                    İstanbul başta olmak üzere Türkiye'nin her bölgesi
                  </div>
                </div>

                <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--color-border)", background: "rgba(31, 107, 74, 0.03)" }}>
                  <div style={{ fontFamily: "'General Sans', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--color-accent)", lineHeight: 1, marginBottom: 8 }}>
                    1988
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)", marginBottom: 4 }}>
                    38 Yıllık Tecrübe
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-line-dim)" }}>
                    Kesintisiz mühendislik ve aynı adreste kurumsal garanti
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

      <main className="page-wrap" style={{ paddingTop: "clamp(36px, 5vw, 56px)", paddingBottom: 100 }}>
        {/* ── 2. BÜTÜNLEŞİK ARAMA, ŞEHİR VE KATEGORİ FİLTRE ÇUBUĞU ─────────── */}
        <section style={{ marginBottom: 36 }}>
          <ScrollReveal>
            <div
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius)",
                padding: "clamp(16px, 2.5vw, 24px)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* Üst Satır: Arama Kutusu + Şehir Seçimi + Sıralama (Tek Bütünleşik Çubuk) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 16,
                  alignItems: "center",
                }}
              >
                {/* Arama Input */}
                <div style={{ position: "relative" }}>
                  <MagnifyingGlass
                    size={18}
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--color-line-dim)",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Kurum adı, ilçe veya il ara..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(24);
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 16px 12px 42px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-bg)",
                      color: "var(--color-line)",
                      fontSize: 14,
                      outline: "none",
                      borderRadius: 2,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>

                {/* Şehir Seçimi Dropdown */}
                <div style={{ position: "relative" }}>
                  <MapPin
                    size={18}
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--color-accent)",
                    }}
                  />
                  <select
                    value={cityFilter}
                    onChange={(e) => {
                      setCityFilter(e.target.value);
                      setVisibleCount(24);
                    }}
                    style={{
                      width: "100%",
                      padding: "12px 16px 12px 40px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-bg)",
                      color: "var(--color-line)",
                      fontSize: 14,
                      outline: "none",
                      cursor: "pointer",
                      borderRadius: 2,
                    }}
                  >
                    <option value="Tümü">Tüm Şehirler ({CITY_LIST.length} İl)</option>
                    {CITY_LIST.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sıralama Dropdown */}
                <div style={{ position: "relative" }}>
                  <SortAscending
                    size={18}
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--color-line-dim)",
                    }}
                  />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 16px 12px 40px",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-bg)",
                      color: "var(--color-line)",
                      fontSize: 14,
                      outline: "none",
                      cursor: "pointer",
                      borderRadius: 2,
                    }}
                  >
                    <option value="az">Sıralama: A'dan Z'ye</option>
                    <option value="za">Sıralama: Z'den A'ya</option>
                    <option value="city">Sıralama: Şehre Göre</option>
                  </select>
                </div>
              </div>

              {/* Alt Satır: Mimari Kategori Segment Sekmeleri */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  alignItems: "center",
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: 16,
                }}
              >
                <button
                  onClick={() => {
                    setFieldFilter("Tümü");
                    setVisibleCount(24);
                  }}
                  style={{
                    padding: "8px 16px",
                    border: "none",
                    background: fieldFilter === "Tümü" ? "var(--color-accent)" : "var(--color-bg)",
                    color: fieldFilter === "Tümü" ? "#FFFFFF" : "var(--color-line)",
                    fontSize: 13,
                    fontWeight: fieldFilter === "Tümü" ? 700 : 500,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 2,
                    transition: "all 0.2s",
                  }}
                >
                  <span>Tüm Branşlar</span>
                  <span
                    style={{
                      background: fieldFilter === "Tümü" ? "rgba(255,255,255,0.25)" : "var(--color-border)",
                      padding: "1px 6px",
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    {getFieldCount("Tümü")}
                  </span>
                </button>

                {FIELD_FILTERS.map((f) => {
                  const active = fieldFilter === f;
                  const sport = SPORT_ICONS[f] || { Icon: Trophy, label: f };
                  const IconComp = sport.Icon;
                  return (
                    <button
                      key={f}
                      onClick={() => {
                        setFieldFilter(f);
                        setVisibleCount(24);
                      }}
                      style={{
                        padding: "8px 14px",
                        border: "none",
                        background: active ? "var(--color-accent)" : "var(--color-bg)",
                        color: active ? "#FFFFFF" : "var(--color-line)",
                        fontSize: 13,
                        fontWeight: active ? 700 : 500,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        borderRadius: 2,
                        transition: "all 0.2s",
                      }}
                    >
                      <IconComp size={14} />
                      <span>{f}</span>
                      <span
                        style={{
                          background: active ? "rgba(255,255,255,0.25)" : "var(--color-border)",
                          padding: "1px 6px",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {getFieldCount(f)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── 4. KAPSAMLI REFERANS REHBERİ (ZENGİN & TARANABİLİR LİSTE) ─────── */}
        {filteredRefs.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 20px",
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <Funnel size={42} style={{ opacity: 0.3, margin: "0 auto 16px" }} />
            <h3 style={{ fontSize: 18, color: "var(--color-line)", marginBottom: 8 }}>
              Kriterlere Uygun Referans Bulunamadı
            </h3>
            <p style={{ fontSize: 14, color: "var(--color-line-dim)", marginBottom: 20 }}>
              Arama kelimenizi değiştirin veya şehir/branş filtrelerini sıfırlayın.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFieldFilter("Tümü");
                setCityFilter("Tümü");
              }}
              className="btn-secondary"
              style={{ padding: "10px 20px", fontSize: 13 }}
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
                fontSize: 13,
                color: "var(--color-line-dim)",
              }}
            >
              <div>
                Toplam <strong>{filteredRefs.length}</strong> kurumsal referans listeleniyor:
              </div>
              <div>
                Gösterilen: <strong>{Math.min(visibleCount, filteredRefs.length)}</strong> / {filteredRefs.length}
              </div>
            </div>

            {/* Referans Kartları Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 18,
              }}
            >
              {filteredRefs.slice(0, visibleCount).map((r, i) => {
                const category = getInstitutionCategory(r.name);
                const CatIcon = category.Icon;

                return (
                  <ScrollReveal key={`${r.name}-${i}`} delay={(i % 12) * 0.03}>
                    <div
                      style={{
                        background: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        padding: "20px 22px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        boxShadow: "var(--shadow-card)",
                        transition: "border-color 0.2s, transform 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-accent)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div>
                        {/* Üst Bilgi Satırı: Kurum Türü Rozeti & Doğrulama */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 10,
                          }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                              fontSize: 11,
                              fontWeight: 600,
                              color: category.color,
                              background: "var(--color-bg)",
                              padding: "2px 8px",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            <CatIcon size={13} />
                            {category.label}
                          </span>

                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                              fontSize: 11,
                              fontWeight: 600,
                              color: "var(--color-accent)",
                            }}
                          >
                            <CheckCircle size={14} weight="fill" />
                            Tamamlandı
                          </span>
                        </div>

                        {/* Kurum Adı */}
                        <h3
                          style={{
                            fontFamily: "'General Sans', sans-serif",
                            fontSize: 16,
                            fontWeight: 700,
                            color: "var(--color-line)",
                            margin: "0 0 8px",
                            lineHeight: 1.35,
                          }}
                        >
                          {r.name}
                        </h3>

                        {/* Lokasyon */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 13,
                            color: "var(--color-line-dim)",
                            marginBottom: 16,
                          }}
                        >
                          <MapPin size={15} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                          <span>
                            {r.district} / <strong>{r.city}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Yapılan Saha Branşları (İkon Tabanlı Göstergeler) */}
                      <div
                        style={{
                          borderTop: "1px solid var(--color-border)",
                          paddingTop: 12,
                          marginTop: "auto",
                        }}
                      >
                        <div style={{ fontSize: 11, color: "var(--color-line-dim)", marginBottom: 6, fontWeight: 500 }}>
                          İnşa Edilen Tesisler:
                        </div>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          {r.fields.map((f) => {
                            const sport = SPORT_ICONS[f] || { Icon: Trophy, label: f };
                            const IconComp = sport.Icon;
                            return (
                              <span
                                key={f}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 4,
                                  background: "var(--color-bg)",
                                  border: "1px solid var(--color-border)",
                                  padding: "3px 8px",
                                  fontSize: 11,
                                  color: "var(--color-line)",
                                  fontWeight: 500,
                                }}
                              >
                                <IconComp size={12} color="var(--color-accent)" />
                                {sport.label}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Daha Fazla Göster Butonu */}
            {visibleCount < filteredRefs.length && (
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  className="btn-secondary"
                  style={{ gap: 8, padding: "14px 32px" }}
                >
                  Daha Fazla Referans Göster ({filteredRefs.length - visibleCount} Kaldı)
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {/* ── 5. KURUMSAL ÇAĞRI (REFERANSLARIMIZ ARASINDA YER ALIN) ─────────── */}
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
              Kurumsal İş Birliği
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
              Kurumunuz İçin Doğru Sahayı Birlikte İnşa Edelim
            </h3>
            <p style={{ fontSize: 15, color: "var(--color-line-dim)", lineHeight: 1.65, margin: 0 }}>
              Okullar, belediyeler, siteler ve ticari spor kulüpleri için Türkiye genelinde
              ücretsiz yerinde keşif ve şartname desteği sağlıyoruz.
            </p>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-start" }}>
            <Link to="/iletisim" className="btn-primary" style={{ gap: 8 }}>
              Ücretsiz Keşif & Teklif İste
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
    </div>
  );
}
