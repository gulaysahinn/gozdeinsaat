/* ── Gözde İnşaat Design Tokens ──────────────────────────────────────────
   Palette: Forest — deep green + bone + amber accent
   Typography: Outfit (display + body) + JetBrains Mono (mono)
   Corner radius: 12px system (cards, buttons, inputs consistent)
   
   CSS custom properties are defined in index.css for dark mode support.
   These JS tokens are for components still using inline styles during
   the migration period.
────────────────────────────────────────────────────────────────────── */

export const COLORS = {
  bg: "#FAFAF8",
  bgSoft: "#F2F1ED",
  card: "#FFFFFF",
  line: "#1B1F23",
  lineDim: "#6B7280",
  accent: "#1A6B4C",
  accentDark: "#145A3E",
  accentLight: "#E8F5EE",
  warm: "#D4A843",
  warmDark: "#B8922E",
  border: "#E4E2DD",
  success: "#1A6B4C",
  danger: "#C0392B",
};

export const FONT = {
  display: "'Outfit', sans-serif",
  body: "'Outfit', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const RADIUS = 12;

export const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: COLORS.lineDim,
  marginBottom: 6,
};

export const inputStyle = {
  width: "100%",
  background: COLORS.bgSoft,
  border: `1px solid ${COLORS.border}`,
  borderRadius: RADIUS,
  padding: "12px 14px",
  color: COLORS.line,
  fontSize: 14,
  fontFamily: "inherit",
  boxSizing: "border-box",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export const pageWrap = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "64px 32px",
};
