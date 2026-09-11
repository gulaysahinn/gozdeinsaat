import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users } from "@phosphor-icons/react";
import FloorComparisonCards from "./FloorComparisonCards";

// Hizmet simgeleri — her saha tipi için sade SVG ikonu
const SERVICE_ICONS = {
  "Tenis kortu": (active) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={active ? 2 : 1.5} />
      <path d="M3 12q4-5 9-5t9 5" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round"/>
      <path d="M3 12q4 5 9 5t9-5" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round"/>
    </svg>
  ),
  "Basketbol sahası": (active) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={active ? 2 : 1.5} />
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round"/>
    </svg>
  ),
  "Halı saha": (active) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth={active ? 2 : 1.5}/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={active ? 2 : 1.5}/>
      <path d="M3 12h3M18 12h3M12 5v3M12 16v3" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round"/>
    </svg>
  ),
  "Çok amaçlı saha": (active) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth={active ? 2 : 1.5}/>
      <path d="M3 12h18M12 4v16" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round"/>
    </svg>
  ),
  "Voleybol ve hentbol sahası": (active) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={active ? 2 : 1.5}/>
      <path d="M12 3v18" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round"/>
    </svg>
  ),
};

function TabButton({ service, isActive, onClick, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = SERVICE_ICONS[service.title];

  return (
    <button
      id={`service-tab-${index}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`service-panel-${index}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 6,
        padding: "16px 20px",
        background: isActive ? "var(--color-card, #fff)" : "transparent",
        border: "1px solid",
        borderColor: isActive ? "var(--color-accent, #1A6B4C)" : "var(--color-border, #E4E2DD)",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.2s ease",
        color: isActive ? "var(--color-accent)" : "var(--color-line)",
        position: "relative",
        flex: "1 1 auto",
        minWidth: 120,
        boxShadow: isActive ? "0 2px 12px rgba(26,107,76,0.10)" : "none",
      }}
    >
      {/* Aktif göstergesi — sol kenar çizgisi */}
      {isActive && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 3,
            background: "var(--color-accent)",
          }}
        />
      )}

      {/* İkon */}
      <span
        style={{
          color: isActive ? "var(--color-accent)" : "var(--color-line-dim)",
          transition: "color 0.2s",
        }}
      >
        {Icon && Icon(isActive || hovered)}
      </span>

      {/* Etiket */}
      <span
        style={{
          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: isActive ? "var(--color-accent)" : "var(--color-line-dim)",
          transition: "color 0.2s",
        }}
      >
        {service.tag}
      </span>

      {/* Hizmet adı — mobilde gizlenebilir */}
      <span
        className="tab-title"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: isActive ? "var(--color-line)" : "var(--color-line-dim)",
          lineHeight: 1.3,
          transition: "color 0.2s",
        }}
      >
        {service.title}
      </span>
    </button>
  );
}

/**
 * ServiceTabs
 * Hizmet kategorilerini sekmeli yapıda gösterir.
 * Her sekmede:
 *   - Sol panel: saha açıklaması, kim için, teslim süresi
 *   - Sağ / Alt panel: zemin seçenekleri (FloorComparisonCards)
 *
 * Props:
 *   services  — SERVICES dizisi (content.js)
 *   compact   — true ise daha küçük layout (Services sayfası için)
 */
export default function ServiceTabs({ services = [], compact = false }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  if (!active) return null;

  return (
    <div>
      {/* ── Tab Başlıkları ── */}
      <div
        role="tablist"
        aria-label="Hizmet kategorileri"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 40,
        }}
        className="service-tabs-list"
      >
        {services.map((s, i) => (
          <TabButton
            key={s.title}
            service={s}
            isActive={activeIdx === i}
            onClick={() => setActiveIdx(i)}
            index={i}
          />
        ))}
      </div>

      {/* ── Tab Panel ── */}
      <div
        id={`service-panel-${activeIdx}`}
        role="tabpanel"
        aria-labelledby={`service-tab-${activeIdx}`}
        key={activeIdx}
        className="service-tab-panel"
        style={{
          animation: "tabFadeIn 0.28s ease both",
        }}
      >
        {/* Üst kısım: Saha bilgisi + görsel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: compact ? "1fr" : "1.1fr 0.9fr",
            gap: 48,
            alignItems: "flex-start",
            marginBottom: 48,
            paddingBottom: 48,
            borderBottom: "1px solid var(--color-border)",
          }}
          className="service-panel-grid"
        >
          {/* Sol: Saha bilgisi */}
          <div>
            {/* Numara + tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "var(--color-accent-light, #E8F5EE)",
                  padding: "4px 10px",
                  border: "1px solid var(--color-accent)",
                }}
              >
                {active.tag}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-line-dim)",
                  letterSpacing: "0.08em",
                }}
              >
                {active.spec}
              </span>
            </div>

            {/* Başlık */}
            <h3
              style={{
                fontSize: compact ? "clamp(24px, 3vw, 32px)" : "clamp(28px, 3.5vw, 40px)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
                margin: "0 0 20px",
                color: "var(--color-line)",
              }}
            >
              {active.title}
            </h3>

            {/* Ana açıklama */}
            <p
              style={{
                fontSize: 16,
                color: "var(--color-line-dim)",
                lineHeight: 1.75,
                margin: "0 0 28px",
                maxWidth: "52ch",
              }}
            >
              {active.desc}
            </p>

            {/* Meta bilgiler: kim için + teslim süresi */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                padding: "16px 20px",
                background: "var(--color-bg-soft, #F2F1ED)",
                border: "1px solid var(--color-border)",
                marginBottom: 28,
              }}
            >
              {active.forWho && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Users
                    size={14}
                    weight="duotone"
                    color="var(--color-accent)"
                    aria-hidden="true"
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-line-dim)",
                        marginBottom: 2,
                      }}
                    >
                      Kim İçin
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--color-line)",
                      }}
                    >
                      {active.forWho}
                    </div>
                  </div>
                </div>
              )}
              {active.deliveryTime && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Clock
                    size={14}
                    weight="duotone"
                    color="var(--color-warm, #D4A843)"
                    aria-hidden="true"
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-line-dim)",
                        marginBottom: 2,
                      }}
                    >
                      Teslim Süresi
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--color-line)",
                      }}
                    >
                      {active.deliveryTime}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            {active.to && (
              <Link
                to={active.to}
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                Detaylı Bilgi
                <ArrowRight size={15} weight="bold" aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Sağ: Ana saha görseli */}
          {!compact && (
            <div
              style={{
                position: "relative",
                aspectRatio: "4/3",
                border: "1px solid var(--color-border)",
                padding: 6,
                background: "var(--color-bg-soft)",
                overflow: "hidden",
              }}
            >
              <img
                src={active.image}
                alt={active.imageAlt || active.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(10%)",
                  display: "block",
                }}
              />
              {/* Teknik overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  background: "var(--color-bg)",
                  padding: "3px 8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  border: "1px solid var(--color-border)",
                  color: "var(--color-line)",
                  letterSpacing: "0.06em",
                }}
              >
                ÖLÇEK: 1:50 / {active.tag.toUpperCase()}
              </div>
            </div>
          )}
        </div>

        {/* Alt kısım: Zemin seçenekleri */}
        {active.floors && active.floors.length > 0 && (
          <FloorComparisonCards
            floors={active.floors}
            to={active.to}
          />
        )}
      </div>

      {/* Animasyon + responsive stiller */}
      <style>{`
        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .service-tabs-list button {
            flex: 1 1 calc(50% - 8px) !important;
            min-width: 0 !important;
          }
          .tab-title {
            display: none !important;
          }
          .service-panel-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }

        @media (max-width: 480px) {
          .service-tabs-list button {
            flex: 1 1 100% !important;
          }
          .tab-title {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
