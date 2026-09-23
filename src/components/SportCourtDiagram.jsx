export default function SportCourtDiagram({ service }) {
  if (!service) return null;

  const tag = (service.tag || "").toLowerCase();
  const title = (service.title || "").toLowerCase();

  const isBasketball = tag.includes("basketbol") || title.includes("basketbol");
  const isVolleyball = tag.includes("voleybol") || title.includes("voleybol");
  const isFootball = tag.includes("halı") || title.includes("halı");
  const isMulti = tag.includes("çok") || title.includes("çok") || title.includes("kombine");
  // Default to Tennis if not any of the above
  const isTennis = !isBasketball && !isVolleyball && !isFootball && !isMulti;

  /* ──────────────────────────────────────────────────────────────────────────
     1. BASKETBOL SAHASI DİYAGRAMI (FIBA STANDARDI)
     ────────────────────────────────────────────────────────────────────────── */
  if (isBasketball) {
    return (
      <div
        style={{
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          padding: "clamp(20px, 3vw, 32px)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--color-accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Teknik Saha Şeması (FIBA Normları)
            </div>
            <h3
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontWeight: 700,
                color: "var(--color-line)",
                margin: 0,
              }}
            >
              Nizami Basketbol Sahası Ölçüleri ve Güvenlik Alanları
            </h3>
          </div>
          <div
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--color-line)",
            }}
          >
            Nizami Oyun Alanı: <strong style={{ color: "var(--color-accent)" }}>420 m² (28.00 × 15.00 m)</strong>
          </div>
        </div>

        {/* SVG Çizim */}
        <div
          style={{
            background: "#F7F5F0",
            border: "1px solid var(--color-border)",
            padding: 16,
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <svg viewBox="0 0 760 400" width="100%" height="auto" style={{ display: "block", minWidth: 540 }}>
            {/* Dış Emniyet Alanı (32 x 19m) */}
            <rect x="40" y="30" width="680" height="340" fill="#EAE5DC" stroke="#D1C9BE" strokeWidth="2" />
            <text x="380" y="22" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle">
              Toplam Alan (Güvenlik Koridoru Dahil): ~32.00 m
            </text>
            <text x="22" y="200" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle" transform="rotate(-90 22 200)">
              Toplam En: ~19.00 m
            </text>

            {/* İç Nizami Saha (28 x 15m) */}
            <rect x="80" y="55" width="600" height="290" fill="#C4552E" fillOpacity="0.88" stroke="#FFFFFF" strokeWidth="2.5" />

            {/* Orta Saha Çizgisi ve Dairesi */}
            <line x1="380" y1="55" x2="380" y2="345" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="380" cy="200" r="45" fill="none" stroke="#FFFFFF" strokeWidth="2" />

            {/* Sol Boyalı Alan (Kısıtlamalı Alan / Key) & Serbest Atış */}
            <rect x="80" y="145" width="125" height="110" fill="#A34524" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="205" cy="200" r="38" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M 205 162 A 38 38 0 0 1 205 238" fill="none" stroke="#FFFFFF" strokeWidth="2" />

            {/* Sol 3 Sayı Çizgisi (r=6.75m) */}
            <path d="M 80 80 L 140 80 A 155 155 0 0 1 140 320 L 80 320" fill="none" stroke="#FFFFFF" strokeWidth="2" />

            {/* Sol Pota & Panya */}
            <line x1="105" y1="175" x2="105" y2="225" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="116" cy="200" r="7" fill="none" stroke="#FFD700" strokeWidth="2.5" />

            {/* Sağ Boyalı Alan & Serbest Atış */}
            <rect x="555" y="145" width="125" height="110" fill="#A34524" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="555" cy="200" r="38" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M 555 162 A 38 38 0 0 0 555 238" fill="none" stroke="#FFFFFF" strokeWidth="2" />

            {/* Sağ 3 Sayı Çizgisi */}
            <path d="M 680 80 L 620 80 A 155 155 0 0 0 620 320 L 680 320" fill="none" stroke="#FFFFFF" strokeWidth="2" />

            {/* Sağ Pota & Panya */}
            <line x1="655" y1="175" x2="655" y2="225" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="644" cy="200" r="7" fill="none" stroke="#FFD700" strokeWidth="2.5" />

            {/* Ölçü Metinleri */}
            <text x="380" y="195" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">
              FIBA Oyun Alanı: 28.00 × 15.00 m
            </text>
            <text x="205" y="125" fill="#FFFFFF" fontSize="10" fontWeight="600" textAnchor="middle">
              3 Sayı: 6.75 m
            </text>
            <text x="555" y="125" fill="#FFFFFF" fontSize="10" fontWeight="600" textAnchor="middle">
              Serbest Atış: 5.80 m
            </text>
          </svg>
        </div>

        {/* 4 Teknik Metrik */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>FIBA Nizami Ölçüler</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>28.00 × 15.00 m (420 m²)</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Pota & Çember Yüksekliği</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>3.05 m (Zeminden Nizami)</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>3 Sayı Çizgisi Mesafesi</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>6.75 m (Pota Merkezinden)</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Pota Panyası Ölçüsü</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>1.80 × 1.05 m Akrilik/Cam</div>
          </div>
        </div>
      </div>
    );
  }

  /* ──────────────────────────────────────────────────────────────────────────
     2. VOLEYBOL SAHASI DİYAGRAMI (FIVB STANDARDI)
     ────────────────────────────────────────────────────────────────────────── */
  if (isVolleyball) {
    return (
      <div
        style={{
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          padding: "clamp(20px, 3vw, 32px)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--color-accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Teknik Saha Şeması (FIVB Normları)
            </div>
            <h3
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontWeight: 700,
                color: "var(--color-line)",
                margin: 0,
              }}
            >
              Nizami Voleybol Sahası Ölçüleri ve Hücum Alanları
            </h3>
          </div>
          <div
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--color-line)",
            }}
          >
            Nizami Oyun Alanı: <strong style={{ color: "var(--color-accent)" }}>162 m² (18.00 × 9.00 m)</strong>
          </div>
        </div>

        <div
          style={{
            background: "#F7F5F0",
            border: "1px solid var(--color-border)",
            padding: 16,
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <svg viewBox="0 0 760 380" width="100%" height="auto" style={{ display: "block", minWidth: 540 }}>
            {/* Dış Emniyet Serbest Bölgesi (24 x 15m) */}
            <rect x="50" y="30" width="660" height="320" fill="#E6EEF8" stroke="#B8D0EB" strokeWidth="2" />
            <text x="380" y="22" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle">
              Serbest Güvenlik Bölgesi Dahil: ~24.00 m
            </text>
            <text x="30" y="190" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle" transform="rotate(-90 30 190)">
              Toplam En: ~15.00 m
            </text>

            {/* Nizami Voleybol Sahası (18 x 9m) */}
            <rect x="140" y="75" width="480" height="230" fill="#2563EB" fillOpacity="0.88" stroke="#FFFFFF" strokeWidth="2.5" />

            {/* Orta Çizgi ve File */}
            <line x1="380" y1="75" x2="380" y2="305" stroke="#FFFFFF" strokeWidth="2.5" />
            <line x1="380" y1="55" x2="380" y2="325" stroke="#1A1D20" strokeWidth="3.5" strokeDasharray="5 3" />
            <circle cx="380" cy="55" r="5" fill="#1A1D20" />
            <circle cx="380" cy="325" r="5" fill="#1A1D20" />
            <text x="380" y="45" fill="#1A1D20" fontSize="10" fontWeight="700" textAnchor="middle">
              File Direği (h=2.43m Erkek / 2.24m Kadın)
            </text>

            {/* Sol Hücum Çizgisi (Fileye 3m mesafede) */}
            <line x1="300" y1="75" x2="300" y2="305" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 4" />
            <text x="340" y="195" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle">
              Ön Alan (3.00 m)
            </text>
            <text x="220" y="195" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle">
              Arka Alan (6.00 m)
            </text>

            {/* Sağ Hücum Çizgisi (Fileye 3m mesafede) */}
            <line x1="460" y1="75" x2="460" y2="305" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 4" />
            <text x="420" y="195" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle">
              Ön Alan (3.00 m)
            </text>
            <text x="540" y="195" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle">
              Arka Alan (6.00 m)
            </text>

            <text x="380" y="345" fill="#1E3A8A" fontSize="11" fontWeight="700" textAnchor="middle">
              Oyun Alanı: 18.00 × 9.00 m (İki Eşit 9×9 m Yarı Saha)
            </text>
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>FIVB Nizami Ölçüler</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>18.00 × 9.00 m (162 m²)</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>File Yüksekliği</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>2.43 m (Erkek) / 2.24 m (Kadın)</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Hücum Bölgesi (3m Çizgisi)</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>File Merkezinden 3.00 m</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Çevre Serbest Bölge</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>En az 3.00 m Emniyet Payı</div>
          </div>
        </div>
      </div>
    );
  }

  /* ──────────────────────────────────────────────────────────────────────────
     3. HALI SAHA DİYAGRAMI (FIFA / TİCARİ HALI SAHA STANDARDI)
     ────────────────────────────────────────────────────────────────────────── */
  if (isFootball) {
    return (
      <div
        style={{
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          padding: "clamp(20px, 3vw, 32px)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--color-accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Teknik Saha Şeması (FIFA Normları)
            </div>
            <h3
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontWeight: 700,
                color: "var(--color-line)",
                margin: 0,
              }}
            >
              Nizami Ticari Halı Saha ve Sentetik Çim Ölçüleri
            </h3>
          </div>
          <div
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--color-line)",
            }}
          >
            Yaygın Format: <strong style={{ color: "var(--color-accent)" }}>30.00 × 50.00 m (7'ye 7) / 20 × 40 m</strong>
          </div>
        </div>

        <div
          style={{
            background: "#F7F5F0",
            border: "1px solid var(--color-border)",
            padding: 16,
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <svg viewBox="0 0 760 380" width="100%" height="auto" style={{ display: "block", minWidth: 540 }}>
            {/* Yeşil Sentetik Çim Saha (30x50m orantılı) */}
            <rect x="60" y="40" width="640" height="300" fill="#1F6B4A" stroke="#FFFFFF" strokeWidth="2.5" />

            {/* Orta Çizgi ve Orta Yuvarlak */}
            <line x1="380" y1="40" x2="380" y2="340" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="380" cy="190" r="45" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="380" cy="190" r="3" fill="#FFFFFF" />

            {/* Sol Ceza Sahası & Kale */}
            <rect x="60" y="115" width="90" height="150" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="120" cy="190" r="3" fill="#FFFFFF" />
            <path d="M 150 160 A 35 35 0 0 1 150 220" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            {/* Sol Kale (2x3m / 2x4m) */}
            <rect x="42" y="165" width="18" height="50" fill="#E5E7EB" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Sağ Ceza Sahası & Kale */}
            <rect x="610" y="115" width="90" height="150" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="640" cy="190" r="3" fill="#FFFFFF" />
            <path d="M 610 160 A 35 35 0 0 0 610 220" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            {/* Sağ Kale */}
            <rect x="700" y="165" width="18" height="50" fill="#E5E7EB" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Köşe Bayrak Yayları */}
            <path d="M 60 50 A 10 10 0 0 0 70 40" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 60 330 A 10 10 0 0 1 70 340" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 700 50 A 10 10 0 0 1 690 40" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 700 330 A 10 10 0 0 0 690 340" fill="none" stroke="#FFFFFF" strokeWidth="2" />

            <text x="380" y="28" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle">
              Standart Ticari Halı Saha Boyu: 50.00 m (veya 40.00 m)
            </text>
            <text x="26" y="190" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle" transform="rotate(-90 26 190)">
              En: 30.00 m (veya 20.00 m)
            </text>
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Ticari Halı Saha Ölçüsü</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>30.00 × 50.00 m (1.500 m²)</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Sentetik Çim Hav Boyu</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>55 mm Monofilament / Fibrilize</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Çevre Tel Çit & Tavan Filesi</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>6.00 – 7.00 m Galvaniz + Ağ</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Kale Ölçüleri</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>2.00 × 3.00 m / 2.00 × 4.00 m</div>
          </div>
        </div>
      </div>
    );
  }

  /* ──────────────────────────────────────────────────────────────────────────
     4. ÇOK AMAÇLI SAHA DİYAGRAMI (KOMBİNE BRANŞLAR)
     ────────────────────────────────────────────────────────────────────────── */
  if (isMulti) {
    return (
      <div
        style={{
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          padding: "clamp(20px, 3vw, 32px)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--color-accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Teknik Saha Şeması (Kombine Sistem)
            </div>
            <h3
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: "clamp(18px, 2.2vw, 22px)",
                fontWeight: 700,
                color: "var(--color-line)",
                margin: 0,
              }}
            >
              Çok Amaçlı Saha Kombine Çizgi ve Ekipman Düzeni
            </h3>
          </div>
          <div
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--color-line)",
            }}
          >
            Standart Alan: <strong style={{ color: "var(--color-accent)" }}>648 m² (18.00 × 36.00 m)</strong>
          </div>
        </div>

        <div
          style={{
            background: "#F7F5F0",
            border: "1px solid var(--color-border)",
            padding: 16,
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <svg viewBox="0 0 760 400" width="100%" height="auto" style={{ display: "block", minWidth: 540 }}>
            {/* Ana Saha Dış Sınırı (18x36m) */}
            <rect x="50" y="40" width="660" height="320" fill="#2D6A4F" stroke="#1B4332" strokeWidth="2.5" />

            {/* Beyaz Çizgiler: Tenis Kortu */}
            <rect x="160" y="90" width="440" height="220" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="160" y1="115" x2="600" y2="115" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="160" y1="285" x2="600" y2="285" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="260" y1="115" x2="260" y2="285" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="500" y1="115" x2="500" y2="285" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="260" y1="200" x2="500" y2="200" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="380" y1="80" x2="380" y2="320" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 3" />

            {/* Sarı Çizgiler: Basketbol Sahası */}
            <rect x="190" y="105" width="380" height="190" fill="none" stroke="#FBBF24" strokeWidth="2" />
            <line x1="380" y1="105" x2="380" y2="295" stroke="#FBBF24" strokeWidth="1.5" />
            <circle cx="380" cy="200" r="35" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
            {/* Basket Potaları */}
            <circle cx="210" cy="200" r="6" fill="none" stroke="#FBBF24" strokeWidth="2" />
            <circle cx="550" cy="200" r="6" fill="none" stroke="#FBBF24" strokeWidth="2" />

            {/* Mavi Çizgiler: Voleybol Hücum Çizgileri */}
            <line x1="335" y1="125" x2="335" y2="275" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="425" y1="125" x2="425" y2="275" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Renk Lejantı */}
            <g transform="translate(180, 365)">
              <line x1="0" y1="5" x2="20" y2="5" stroke="#FFFFFF" strokeWidth="3" />
              <text x="26" y="9" fill="#1A1D20" fontSize="11" fontWeight="600">Tenis (Beyaz)</text>

              <line x1="130" y1="5" x2="150" y2="5" stroke="#FBBF24" strokeWidth="3" />
              <text x="156" y="9" fill="#1A1D20" fontSize="11" fontWeight="600">Basketbol (Sarı)</text>

              <line x1="280" y1="5" x2="300" y2="5" stroke="#60A5FA" strokeWidth="3" />
              <text x="306" y="9" fill="#1A1D20" fontSize="11" fontWeight="600">Voleybol (Mavi)</text>
            </g>
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Standart Alan Ölçüsü</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>18.00 × 36.00 m (648 m²)</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Kombine Branşlar</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>Tenis + Basketbol + Voleybol</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Zemin Alternatifleri</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>EPDM Kauçuk veya 20mm Çim</div>
          </div>
          <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Aydınlatma & Çevre</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>4.00 m Galvaniz Tel + LED</div>
          </div>
        </div>
      </div>
    );
  }

  /* ──────────────────────────────────────────────────────────────────────────
     5. TENİS KORTU DİYAGRAMI (VARSAYILAN - ITF STANDARDI)
     ────────────────────────────────────────────────────────────────────────── */
  return (
    <div
      style={{
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        padding: "clamp(20px, 3vw, 32px)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--color-accent)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Teknik Saha Şeması (ITF Normları)
          </div>
          <h3
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: "clamp(18px, 2.2vw, 22px)",
              fontWeight: 700,
              color: "var(--color-line)",
              margin: 0,
            }}
          >
            Standart Tenis Kortu Ölçüleri ve Emniyet Alanları
          </h3>
        </div>
        <div
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            padding: "6px 14px",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--color-line)",
          }}
        >
          Toplam Alan: <strong style={{ color: "var(--color-accent)" }}>648 m² (18.00 × 36.00 m)</strong>
        </div>
      </div>

      <div
        style={{
          background: "#F7F5F0",
          border: "1px solid var(--color-border)",
          padding: 16,
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <svg viewBox="0 0 760 400" width="100%" height="auto" style={{ display: "block", minWidth: 540 }}>
          {/* Kort Dış Zemin Sınırı (36x18m) */}
          <rect x="50" y="40" width="660" height="320" fill="#E6EBE6" stroke="#9ABAA8" strokeWidth="2" />

          {/* Dış Emniyet Alanı Ölçü Çizgileri */}
          <text x="380" y="28" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle">
            Toplam Boy: 36.00 m
          </text>
          <line x1="50" y1="32" x2="710" y2="32" stroke="#4A5568" strokeWidth="1" strokeDasharray="4 4" />

          <text x="26" y="205" fill="#4A5568" fontSize="11" fontWeight="600" textAnchor="middle" transform="rotate(-90 26 205)">
            Toplam En: 18.00 m
          </text>
          <line x1="38" y1="40" x2="38" y2="360" stroke="#4A5568" strokeWidth="1" strokeDasharray="4 4" />

          {/* Çiftler Oyun Alanı (23.77m x 10.97m) */}
          <rect x="160" y="100" width="440" height="200" fill="#1F6B4A" fillOpacity="0.88" stroke="#FFFFFF" strokeWidth="2.5" />

          {/* Tekler Çizgileri (8.23m) */}
          <line x1="160" y1="125" x2="600" y2="125" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="160" y1="275" x2="600" y2="275" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Servis Çizgileri (Fileye 6.40m) */}
          <line x1="260" y1="125" x2="260" y2="275" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="500" y1="125" x2="500" y2="275" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Orta Servis Çizgisi */}
          <line x1="260" y1="200" x2="500" y2="200" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* File Hattı ve Direkler */}
          <line x1="380" y1="90" x2="380" y2="310" stroke="#1A1D20" strokeWidth="3" strokeDasharray="6 3" />
          <circle cx="380" cy="90" r="5" fill="#1A1D20" />
          <circle cx="380" cy="310" r="5" fill="#1A1D20" />
          <text x="380" y="328" fill="#1A1D20" fontSize="10" fontWeight="700" textAnchor="middle">
            File Direği (h=1.07 m)
          </text>

          <text x="380" y="192" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle" opacity="0.9">
            Oyun Alanı: 23.77 × 10.97 m
          </text>
          <text x="105" y="205" fill="#4A5568" fontSize="10" fontWeight="600" textAnchor="middle">
            Arka Kaçış: 6.10 m
          </text>
          <text x="655" y="205" fill="#4A5568" fontSize="10" fontWeight="600" textAnchor="middle">
            Arka Kaçış: 6.10 m
          </text>
          <text x="380" y="75" fill="#4A5568" fontSize="10" fontWeight="600" textAnchor="middle">
            Yan Kaçış Alanı: 3.51 m
          </text>
        </svg>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          marginTop: 20,
        }}
      >
        <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
          <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Nizami Dış Ölçüler</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>18.00 × 36.00 m (648 m²)</div>
        </div>
        <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
          <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Çiftler / Tekler Oyun Alanı</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>23.77 × 10.97 m / 8.23 m</div>
        </div>
        <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
          <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>File Yüksekliği</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>Ortada 0.914 m / Direkte 1.07 m</div>
        </div>
        <div style={{ padding: "12px 14px", background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
          <div style={{ fontSize: 11, color: "var(--color-line-dim)" }}>Çevre Çit Yüksekliği</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-line)" }}>4.00 m Galvaniz + PVC Tel</div>
        </div>
      </div>
    </div>
  );
}
