import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X, BoundingBox } from "@phosphor-icons/react";

const links = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projeler", label: "Projeler" },
  { to: "/referanslar", label: "Referanslar" },
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
          height: 64,
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
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "var(--color-line)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <BoundingBox size={24} weight="bold" color="var(--color-accent)" />
          <span>
            GÖZDE <span style={{ color: "var(--color-accent)" }}>İNŞAAT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: 28,
            fontSize: 14,
            fontWeight: 500,
            alignItems: "center",
          }}
          className="hide-mobile"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                color: isActive
                  ? "var(--color-accent)"
                  : "var(--color-line-dim)",
                textDecoration: "none",
                transition: "color 0.2s",
                position: "relative",
              })}
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
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--color-bg)",
            zIndex: 49,
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                display: "block",
                padding: "14px 16px",
                fontSize: 16,
                fontWeight: 600,
                color: isActive
                  ? "var(--color-accent)"
                  : "var(--color-line)",
                textDecoration: "none",
                borderRadius: 12,
                background: isActive
                  ? "var(--color-accent-light)"
                  : "transparent",
                transition: "background 0.2s",
              })}
            >
              {l.label}
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
