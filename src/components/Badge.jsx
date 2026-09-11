import React from "react";

export default function Badge({ children, color = "var(--color-accent)" }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: color,
        background: `${color}14`,
        border: `1px solid ${color}33`,
        borderRadius: 8,
        lineHeight: 1.5,
      }}
    >
      {children}
    </span>
  );
}
