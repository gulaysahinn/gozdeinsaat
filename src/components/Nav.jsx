import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

const links = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hizmetler", label: "Hizmetlerimiz" },
  { to: "/projeler", label: "Projelerimiz" },
  { to: "/referanslar", label: "Referanslarımız" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          background: scrolled
            ? "rgba(250, 250, 248, 0.88)"
            : "rgba(250, 250, 248, 0.96)",
          backdropFilter: scrolled ? "blur(12px) saturate(1.2)" : "blur(4px)",
          WebkitBackdropFilter: scrolled
            ? "blur(12px) saturate(1.2)"
            : "blur(4px)",
          borderBottom: `1px solid ${
            scrolled ? "var(--color-border)" : "transparent"
          }`,
          transition:
            "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
          aria-label="Gözde İnşaat — Spor Sahaları Yapımı ve Yenileme"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Gözde İnşaat — Spor Sahaları Yapımı ve Yenileme"
            style={{
              height: 52,
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav hide-mobile" aria-label="Ana Menü">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side: dark toggle + CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>

          <Link to="/iletisim" className="btn-primary hide-mobile">
            Teklif Al
          </Link>

          {/* Hamburger */}
          <button
            className="hide-desktop hide-tablet"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--color-bg-soft)",
              border: "1px solid var(--color-border)",
            }}
          >
            {mobileOpen ? (
              <X size={20} weight="bold" color="var(--color-line)" />
            ) : (
              <List size={20} weight="bold" color="var(--color-line)" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 76,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--color-bg)",
            zIndex: 49,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              <span>{l.label}</span>
              <span className="mobile-nav-arrow" aria-hidden="true">
                →
              </span>
            </NavLink>
          ))}
          <div style={{ marginTop: 16 }}>
            <Link
              to="/iletisim"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
