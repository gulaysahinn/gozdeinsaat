import React, { useState, useMemo } from "react";
import { MapPin, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";
import { REFERENCES, FIELD_FILTERS, CITY_LIST } from "../data/references";

const PER_PAGE = 25;

const FIELD_COLORS = {
  "Tenis Kortu": COLORS.rust,
  "Basketbol Sahası": COLORS.orange,
  "Voleybol Sahası": COLORS.blue,
  "Halı Saha": "#5A9E6F",
  "Çim Saha": "#5A9E6F",
  "Çok Amaçlı Spor Sahası": "#7E5EBF",
  "Çocuk Oyun Parkı": "#9E7A5A",
};

function FieldDot({ label }) {
  const color = FIELD_COLORS[label] || COLORS.lineDim;
  return (
    <span
      title={label}
      style={{
        display: "inline-block",
        fontSize: 10,
        fontFamily: FONT.mono,
        background: color + "22",
        color: color,
        border: `1px solid ${color}44`,
        borderRadius: 4,
        padding: "2px 6px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

export default function References() {
  const [search, setSearch] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    setPage(1);
    return REFERENCES.filter((r) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        r.district.toLowerCase().includes(q);
      const matchField = !activeField || r.fields.includes(activeField);
      const matchCity = !activeCity || r.city === activeCity;
      return matchSearch && matchField && matchCity;
    });
  }, [search, activeField, activeCity]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function clearFilters() {
    setSearch("");
    setActiveField(null);
    setActiveCity(null);
  }

  const hasFilters = search || activeField || activeCity;

  const stats = useMemo(() => {
    const cities = new Set(REFERENCES.map((r) => r.city));
    return { total: REFERENCES.length, cities: cities.size };
  }, []);

  return (
    <>
      <Helmet>
        <title>108+ Referans | Spor Sahası İnşaatı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat'in 1988'den bu yana Türkiye'nin 17 farklı şehirinde tamamladığı 108+ spor sahası projesi. Belediyeler, üniversiteler, oteller ve özel siteler dahil."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/referanslar" />
      </Helmet>

      {/* HERO — kompakt */}
      <section
        style={{
          background: COLORS.bgSoft,
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "48px 32px 40px",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <Badge color={COLORS.rust}>Referanslar</Badge>
              <h1
                style={{
                  fontFamily: FONT.display,
                  fontSize: 44,
                  margin: "12px 0 10px",
                  lineHeight: 1.02,
                }}
              >
                REFERANSLARIMIZ
              </h1>
              <p
                style={{
                  color: COLORS.lineDim,
                  fontSize: 14,
                  lineHeight: 1.6,
                  maxWidth: 460,
                }}
              >
                1988'den bu yana Türkiye'nin {stats.cities} farklı şehrinde{" "}
                <span style={{ color: COLORS.line, fontWeight: 600 }}>
                  {stats.total}+ firmaya
                </span>{" "}
                spor sahası inşa ettik.
              </p>
            </div>

            {/* Stat kutuları */}
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { v: stats.total + "+", l: "Referans" },
                { v: stats.cities, l: "Şehir" },
                { v: "35+", l: "Yıl" },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 10,
                    padding: "16px 22px",
                    textAlign: "center",
                    minWidth: 80,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT.display,
                      fontSize: 30,
                      color: COLORS.rust,
                    }}
                  >
                    {s.v}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.lineDim, marginTop: 2 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FİLTRELER + TABLO */}
      <section style={{ ...pageWrap, paddingTop: 32 }}>
        {/* Filtre satırı */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          {/* Arama */}
          <div style={{ position: "relative", flex: "1 1 220px", maxWidth: 280 }}>
            <Search
              size={14}
              color={COLORS.lineDim}
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Firma veya şehir ara..."
              style={{
                width: "100%",
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 7,
                padding: "9px 12px 9px 32px",
                color: COLORS.line,
                fontSize: 13,
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          {/* Saha tipi */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {FIELD_FILTERS.map((f) => {
              const active = activeField === f;
              const color = FIELD_COLORS[f] || COLORS.rust;
              return (
                <button
                  key={f}
                  onClick={() => setActiveField(active ? null : f)}
                  style={{
                    background: active ? color : "transparent",
                    color: active ? "#fff" : COLORS.lineDim,
                    border: `1px solid ${active ? color : COLORS.border}`,
                    borderRadius: 6,
                    padding: "6px 12px",
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    fontFamily: FONT.body,
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Şehir */}
          <select
            value={activeCity || ""}
            onChange={(e) => setActiveCity(e.target.value || null)}
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 7,
              padding: "8px 12px",
              color: activeCity ? COLORS.line : COLORS.lineDim,
              fontSize: 12,
              cursor: "pointer",
              outline: "none",
              fontFamily: FONT.body,
            }}
          >
            <option value="">Tüm Şehirler</option>
            {CITY_LIST.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {hasFilters && (
            <button
              onClick={clearFilters}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "transparent",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 6,
                padding: "6px 11px",
                color: COLORS.lineDim,
                fontSize: 12,
                cursor: "pointer",
                fontFamily: FONT.body,
              }}
            >
              <X size={12} /> Temizle
            </button>
          )}

          <span
            style={{
              marginLeft: "auto",
              fontSize: 12,
              color: COLORS.lineDim,
              fontFamily: FONT.mono,
              whiteSpace: "nowrap",
            }}
          >
            {filtered.length} sonuç
          </span>
        </div>

        {/* Tablo */}
        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {/* Başlık satırı */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 3fr 1.2fr",
              background: COLORS.bgSoft,
              borderBottom: `1px solid ${COLORS.border}`,
              padding: "10px 20px",
            }}
          >
            {["Firma / Kurum", "Yapılan Sahalar", "Konum"].map((h) => (
              <div
                key={h}
                style={{
                  fontSize: 11,
                  fontFamily: FONT.mono,
                  color: COLORS.lineDim,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {/* Satırlar */}
          {paginated.length === 0 ? (
            <div
              style={{
                padding: "48px 20px",
                textAlign: "center",
                color: COLORS.lineDim,
                fontSize: 14,
              }}
            >
              Arama kriterlerinize uygun referans bulunamadı.
            </div>
          ) : (
            paginated.map((ref, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 3fr 1.2fr",
                  padding: "13px 20px",
                  borderBottom:
                    i < paginated.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                  alignItems: "center",
                  background: i % 2 === 0 ? COLORS.card : "transparent",
                  transition: "background 0.12s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = COLORS.bgSoft)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    i % 2 === 0 ? COLORS.card : "transparent")
                }
              >
                {/* Firma adı */}
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: COLORS.line,
                    paddingRight: 12,
                  }}
                >
                  {ref.name}
                </div>

                {/* Sahalar */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingRight: 12 }}
                >
                  {ref.fields.map((f) => (
                    <FieldDot key={f} label={f} />
                  ))}
                </div>

                {/* Konum */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 12,
                    color: COLORS.lineDim,
                    fontFamily: FONT.mono,
                  }}
                >
                  <MapPin size={11} color={COLORS.rust} />
                  <span>
                    {ref.district}
                    <br />
                    <span style={{ color: COLORS.line, fontWeight: 600 }}>
                      {ref.city}
                    </span>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sayfalama */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              marginTop: 28,
            }}
          >
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              style={{
                background: "transparent",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 6,
                padding: "7px 12px",
                color: page === 1 ? COLORS.border : COLORS.lineDim,
                cursor: page === 1 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ChevronLeft size={15} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                style={{
                  background: p === page ? COLORS.rust : "transparent",
                  border: `1px solid ${p === page ? COLORS.rust : COLORS.border}`,
                  borderRadius: 6,
                  padding: "7px 13px",
                  color: p === page ? "#fff" : COLORS.lineDim,
                  cursor: "pointer",
                  fontSize: 13,
                  fontFamily: FONT.mono,
                  minWidth: 36,
                }}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              style={{
                background: "transparent",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 6,
                padding: "7px 12px",
                color: page === totalPages ? COLORS.border : COLORS.lineDim,
                cursor: page === totalPages ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        )}

        <p
          style={{
            textAlign: "center",
            marginTop: 12,
            fontSize: 12,
            color: COLORS.lineDim,
            fontFamily: FONT.mono,
          }}
        >
          Sayfa {page} / {totalPages} &nbsp;·&nbsp; Toplam {filtered.length} referans
        </p>
      </section>
    </>
  );
}
