import React from "react";
import { FONT } from "../theme";

export default function Badge({ color, children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: FONT.body,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color,
        border: `1px solid ${color}`,
        borderRadius: 999,
        padding: "3px 10px",
      }}
    >
      {children}
    </span>
  );
}
