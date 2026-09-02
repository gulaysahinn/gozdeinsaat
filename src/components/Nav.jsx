import React from "react";
import { Link, NavLink } from "react-router-dom";
import { COLORS, FONT } from "../theme";

const links = [
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projeler", label: "Projeler" },
  { to: "/referanslar", label: "Referanslar" },
  { to: "/hakkimizda", label: "Hakkımızda" },
];

export default function Nav() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 32px",
        borderBottom: `1px solid ${COLORS.border}`,
        position: "sticky",
        top: 0,
        background: "rgba(247,246,243,0.94)",
        backdropFilter: "blur(6px)",
        zIndex: 10,
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: FONT.display,
          fontSize: 22,
          letterSpacing: "0.02em",
          color: COLORS.line,
          textDecoration: "none",
        }}
      >
        GÖZDE<span style={{ color: COLORS.rust }}> İNŞAAT</span>
      </Link>

      <nav style={{ display: "flex", gap: 28, fontSize: 14 }}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            style={({ isActive }) => ({
              color: isActive ? COLORS.line : COLORS.lineDim,
              textDecoration: "none",
            })}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <Link
        to="/iletisim"
        style={{
          background: COLORS.rust,
          color: COLORS.line,
          padding: "10px 18px",
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Teklif Al
      </Link>
    </header>
  );
}
