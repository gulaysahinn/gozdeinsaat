import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, X, Check } from "@phosphor-icons/react";

const STORAGE_KEY = "gozde_cookie_consent";

export default function PrivacyNotice() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Small delay so page loads smoothly before banner slides in
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  // Listen for manual reopen trigger from footer or settings
  useEffect(() => {
    const handleReopen = () => {
      setVisible(true);
      setShowDetails(true);
    };
    window.addEventListener("gozde:open-cookie-settings", handleReopen);
    return () => window.removeEventListener("gozde:open-cookie-settings", handleReopen);
  }, []);

  const saveConsent = (type) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          type, // "all" | "essential"
          timestamp: new Date().toISOString(),
        })
      );
    } catch (e) {
      console.warn("Could not save preferences:", e);
    }
    setVisible(false);
    setShowDetails(false);

    window.dispatchEvent(
      new CustomEvent("gozde:cookie-consent-updated", { detail: { type } })
    );
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Gizlilik ve Tercih Bildirimi"
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        right: 20,
        maxWidth: 620,
        zIndex: 9999,
        margin: "0 auto",
        background: "var(--color-card, #ffffff)",
        color: "var(--color-line, #1f2937)",
        borderRadius: "var(--radius, 12px)",
        border: "1px solid var(--color-border, #e5e7eb)",
        boxShadow: "0 14px 40px -8px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0,0,0,0.1)",
        padding: "20px 24px",
        animation: "slideUpFade 0.35s ease-out forwards",
      }}
    >
      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .notice-btn-primary {
          background: var(--color-accent, #C85A32);
          color: #ffffff;
          border: none;
          padding: 9px 18px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.15s, transform 0.15s;
        }
        .notice-btn-primary:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .notice-btn-secondary {
          background: var(--color-bg-soft, #f3f4f6);
          color: var(--color-line, #1f2937);
          border: 1px solid var(--color-border, #e5e7eb);
          padding: 9px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .notice-btn-secondary:hover {
          background: var(--color-border, #e5e7eb);
        }
      `}</style>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "var(--color-accent-light, rgba(200,90,50,0.1))",
            color: "var(--color-accent, #C85A32)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <ShieldCheck size={22} weight="duotone" />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                margin: 0,
                color: "var(--color-line)",
                letterSpacing: "-0.01em",
              }}
            >
              Çerez Tercihleri ve Gizliliğiniz
            </h3>
            <button
              onClick={() => saveConsent("essential")}
              aria-label="Kapat"
              style={{
                background: "none",
                border: "none",
                color: "var(--color-line-dim)",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <X size={18} />
            </button>
          </div>

          <p
            style={{
              fontSize: 13,
              color: "var(--color-line-dim)",
              lineHeight: 1.55,
              margin: "0 0 14px",
            }}
          >
            Sitemizde temel işlevleri yerine getirmek ve ziyaretçi deneyiminizi iyileştirmek için
            çerezler kullanılmaktadır. Ayrıntılı bilgi için{" "}
            <Link
              to="/gizlilik-politikasi"
              style={{
                color: "var(--color-accent)",
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              Gizlilik ve Çerez Politikası
            </Link>
            'mızı inceleyebilirsiniz.
          </p>

          {showDetails && (
            <div
              style={{
                padding: "12px 14px",
                background: "var(--color-bg-soft)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--color-line-dim)",
                lineHeight: 1.6,
                marginBottom: 14,
                border: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600, color: "var(--color-line)", marginBottom: 4 }}>
                <ShieldCheck size={16} color="var(--color-accent)" /> Zorunlu ve Analitik Çerezler
              </div>
              Zorunlu çerezler sitenin güvenli ve hatasız çalışmasını sağlar; kapatılamaz. İsteğe bağlı analitik çerezler ise performans ölçümü amacıyla anonim veri depolar.
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
            <button
              type="button"
              className="notice-btn-secondary"
              onClick={() => setShowDetails(!showDetails)}
              style={{ fontSize: 12, padding: "8px 12px" }}
            >
              {showDetails ? "Özeti Gizle" : "Detaylar"}
            </button>
            <button
              type="button"
              className="notice-btn-secondary"
              onClick={() => saveConsent("essential")}
            >
              Sadece Gerekli Çerezler
            </button>
            <button
              type="button"
              className="notice-btn-primary"
              onClick={() => saveConsent("all")}
            >
              <Check size={16} weight="bold" /> Tümünü Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
