import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="site-header-inner">
          {/* 1) Logo: Amblem + Gözdeİnşaat Dikey Hizalama & Okunabilir Slogan */}
          <Link
            to="/"
            className="header-logo"
            aria-label="Gözde İnşaat — Spor Sahaları Yapımı ve Yenileme"
          >
            <div className="logo-lockup">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-emblem.png`}
                alt="Gözde İnşaat Amblem"
                className="logo-emblem-img"
              />
              <div className="logo-text-col">
                <div className="logo-title-row">
                  <span className="logo-brand-gozde">Gözde</span>
                  <span className="logo-brand-insaat">İnşaat</span>
                </div>
                <span className="logo-slogan">
                  Spor Sahaları Yapımı ve Yenileme
                </span>
              </div>
            </div>
          </Link>

          {/* 2 & 4) Masaüstü Menü ve Ayrıştırılmış 'Teklif Al' Butonu */}
          <div className="site-header-right hide-mobile-tablet">
            <nav className="desktop-nav" aria-label="Ana Menü">
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

            <Link to="/iletisim" className="nav-cta-btn">
              Teklif Al
            </Link>
          </div>

          {/* 5) Tablet ve Mobil Kontrolleri (Hamburger + Tablet CTA) */}
          <div className="site-header-mobile-controls hide-desktop">
            <Link
              to="/iletisim"
              className="btn-primary mobile-quick-cta hide-mobile"
            >
              Teklif Al
            </Link>
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={22} weight="bold" />
              ) : (
                <List size={22} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Menü Perdesi */}
      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-links-wrap">
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
          </div>
          <div className="mobile-nav-cta-wrap">
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
