import React, { useEffect, useState } from "react";

const COURTS = [
  { key: "tennis",     label: "TENİS 18×36",    courtColor: "#C84B31", darkColor: "#A33B24", lineColor: "#FFFFFF", render: TennisCourt },
  { key: "basketball", label: "BASKETBOL 28×15", courtColor: "#D4863A", darkColor: "#B06D28", lineColor: "#FFFFFF", render: BasketballCourt },
  { key: "volleyball", label: "VOLEYBOL 18×9",   courtColor: "#2E7D6B", darkColor: "#1F5C4E", lineColor: "#FFFFFF", render: VolleyballCourt },
  { key: "multiuse",   label: "ÇOK AMAÇLI",      courtColor: "#3A7FC1", darkColor: "#2B6099", lineColor: "#FFFFFF", render: MultiCourt },
];

/* ─── TENNIS ─────────────────────────────────────────────────── */
function TennisCourt({ c }) {
  const W = 420, H = 280, sx = 40, sy = 40;
  const midX = sx + W / 2;
  const svgW = 500, svgH = 360;
  const padV = 55, padH = 20;
  const bx = padH, by = padV, bw = svgW - padH * 2, bh = svgH - padV * 2;

  return (
    <>
      {/* Shadow */}
      <ellipse cx={svgW / 2} cy={svgH - 10} rx={bw / 2 - 10} ry={12} fill="rgba(0,0,0,0.18)" />
      {/* Court body */}
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill={c.darkColor} />
      {/* Service boxes */}
      <rect x={bx} y={by} width={bw * 0.18} height={bh} fill={c.darkColor} />
      <rect x={bx + bw - bw * 0.18} y={by} width={bw * 0.18} height={bh} fill={c.darkColor} />
      <rect x={bx + bw * 0.18} y={by} width={bw * 0.64} height={bh} fill={c.courtColor} />
      {/* Subtle gradient overlay for depth */}
      <defs>
        <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="url(#tg)" />
      {/* Lines */}
      {/* Outer */}
      <rect x={bx} y={by} width={bw} height={bh} rx={2} fill="none" stroke={c.lineColor} strokeWidth={2.5} />
      {/* Singles sidelines */}
      <line x1={bx + bw * 0.18} y1={by} x2={bx + bw * 0.18} y2={by + bh} stroke={c.lineColor} strokeWidth={2} />
      <line x1={bx + bw * 0.82} y1={by} x2={bx + bw * 0.82} y2={by + bh} stroke={c.lineColor} strokeWidth={2} />
      {/* Net */}
      <line x1={svgW / 2} y1={by} x2={svgW / 2} y2={by + bh} stroke={c.lineColor} strokeWidth={3} strokeDasharray="6,4" />
      {/* Service lines */}
      <line x1={bx + bw * 0.18} y1={by + bh * 0.22} x2={svgW / 2} y2={by + bh * 0.22} stroke={c.lineColor} strokeWidth={2} />
      <line x1={bx + bw * 0.18} y1={by + bh * 0.78} x2={svgW / 2} y2={by + bh * 0.78} stroke={c.lineColor} strokeWidth={2} />
      <line x1={svgW / 2} y1={by + bh * 0.22} x2={bx + bw * 0.82} y2={by + bh * 0.22} stroke={c.lineColor} strokeWidth={2} />
      <line x1={svgW / 2} y1={by + bh * 0.78} x2={bx + bw * 0.82} y2={by + bh * 0.78} stroke={c.lineColor} strokeWidth={2} />
      {/* Center service line */}
      <line x1={svgW / 2 - (bw * 0.32) / 2} y1={by + bh * 0.22} x2={svgW / 2 - (bw * 0.32) / 2} y2={by + bh * 0.78} stroke={c.lineColor} strokeWidth={2} />
      <line x1={svgW / 2 + (bw * 0.32) / 2} y1={by + bh * 0.22} x2={svgW / 2 + (bw * 0.32) / 2} y2={by + bh * 0.78} stroke={c.lineColor} strokeWidth={2} />
      {/* Baseline marks */}
      <line x1={svgW / 2} y1={by} x2={svgW / 2} y2={by + 10} stroke={c.lineColor} strokeWidth={2} />
      <line x1={svgW / 2} y1={by + bh - 10} x2={svgW / 2} y2={by + bh} stroke={c.lineColor} strokeWidth={2} />
    </>
  );
}

/* ─── BASKETBALL ─────────────────────────────────────────────── */
function BasketballCourt({ c }) {
  const svgW = 500, svgH = 360;
  const bx = 20, by = 50, bw = svgW - 40, bh = svgH - 100;
  const midX = svgW / 2, midY = by + bh / 2;

  return (
    <>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="centerrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.darkColor} />
          <stop offset="100%" stopColor={c.courtColor} />
        </radialGradient>
      </defs>
      <ellipse cx={svgW / 2} cy={svgH - 12} rx={bw / 2 - 10} ry={10} fill="rgba(0,0,0,0.18)" />
      {/* Court body */}
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill={c.courtColor} />
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="url(#bg)" />
      {/* Key areas */}
      <rect x={bx} y={by + bh * 0.25} width={bw * 0.22} height={bh * 0.5} fill={c.darkColor} opacity={0.6} />
      <rect x={bx + bw * 0.78} y={by + bh * 0.25} width={bw * 0.22} height={bh * 0.5} fill={c.darkColor} opacity={0.6} />
      {/* Outline */}
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="none" stroke={c.lineColor} strokeWidth={2.5} />
      {/* Half court */}
      <line x1={midX} y1={by} x2={midX} y2={by + bh} stroke={c.lineColor} strokeWidth={2} />
      {/* Center circle */}
      <circle cx={midX} cy={midY} r={bh * 0.18} fill="none" stroke={c.lineColor} strokeWidth={2} />
      <circle cx={midX} cy={midY} r={4} fill={c.lineColor} />
      {/* Key left */}
      <rect x={bx} y={by + bh * 0.25} width={bw * 0.22} height={bh * 0.5} fill="none" stroke={c.lineColor} strokeWidth={2} />
      {/* Free throw arc left */}
      <path d={`M${bx + bw * 0.22},${midY - bh * 0.25} a${bh * 0.25},${bh * 0.25} 0 0,1 0,${bh * 0.5}`} fill="none" stroke={c.lineColor} strokeWidth={2} />
      {/* Key right */}
      <rect x={bx + bw * 0.78} y={by + bh * 0.25} width={bw * 0.22} height={bh * 0.5} fill="none" stroke={c.lineColor} strokeWidth={2} />
      <path d={`M${bx + bw * 0.78},${midY - bh * 0.25} a${bh * 0.25},${bh * 0.25} 0 0,0 0,${bh * 0.5}`} fill="none" stroke={c.lineColor} strokeWidth={2} />
      {/* 3-point arcs */}
      <path d={`M${bx},${by + bh * 0.18} L${bx + bw * 0.15},${by + bh * 0.18} a${bh * 0.5},${bh * 0.5} 0 0,1 ${bw * 0.15 - bx * 0},${bh * 0.64} L${bx},${by + bh * 0.82}`} fill="none" stroke={c.lineColor} strokeWidth={2} />
      <path d={`M${bx + bw},${by + bh * 0.18} L${bx + bw * 0.85},${by + bh * 0.18} a${bh * 0.5},${bh * 0.5} 0 0,0 ${-(bw * 0.15 - bx * 0)},${bh * 0.64} L${bx + bw},${by + bh * 0.82}`} fill="none" stroke={c.lineColor} strokeWidth={2} />
    </>
  );
}

/* ─── VOLLEYBALL ─────────────────────────────────────────────── */
function VolleyballCourt({ c }) {
  const svgW = 500, svgH = 360;
  const bx = 30, by = 55, bw = svgW - 60, bh = svgH - 110;
  const midX = svgW / 2;

  return (
    <>
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <ellipse cx={svgW / 2} cy={svgH - 12} rx={bw / 2 - 10} ry={10} fill="rgba(0,0,0,0.18)" />
      {/* Court body */}
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill={c.courtColor} />
      {/* Attack zones */}
      <rect x={bx} y={by} width={bw * 0.333} height={bh} fill={c.darkColor} opacity={0.35} />
      <rect x={bx + bw * 0.667} y={by} width={bw * 0.333} height={bh} fill={c.darkColor} opacity={0.35} />
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="url(#vg)" />
      {/* Outline */}
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="none" stroke={c.lineColor} strokeWidth={3} />
      {/* Net */}
      <line x1={midX} y1={by - 12} x2={midX} y2={by + bh + 12} stroke={c.lineColor} strokeWidth={4} strokeDasharray="5,3" />
      {/* Attack lines */}
      <line x1={bx + bw * 0.333} y1={by} x2={bx + bw * 0.333} y2={by + bh} stroke={c.lineColor} strokeWidth={2} strokeDasharray="8,4" />
      <line x1={bx + bw * 0.667} y1={by} x2={bx + bw * 0.667} y2={by + bh} stroke={c.lineColor} strokeWidth={2} strokeDasharray="8,4" />
      {/* Service zone dashes */}
      <line x1={bx - 10} y1={by + bh * 0.3} x2={bx + 10} y2={by + bh * 0.3} stroke={c.lineColor} strokeWidth={2} />
      <line x1={bx - 10} y1={by + bh * 0.7} x2={bx + 10} y2={by + bh * 0.7} stroke={c.lineColor} strokeWidth={2} />
      <line x1={bx + bw - 10} y1={by + bh * 0.3} x2={bx + bw + 10} y2={by + bh * 0.3} stroke={c.lineColor} strokeWidth={2} />
      <line x1={bx + bw - 10} y1={by + bh * 0.7} x2={bx + bw + 10} y2={by + bh * 0.7} stroke={c.lineColor} strokeWidth={2} />
    </>
  );
}

/* ─── MULTI-PURPOSE ──────────────────────────────────────────── */
function MultiCourt({ c }) {
  const svgW = 500, svgH = 360;
  const bx = 20, by = 40, bw = svgW - 40, bh = svgH - 80;
  const midX = svgW / 2, midY = by + bh / 2;

  return (
    <>
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.14" />
        </linearGradient>
      </defs>
      <ellipse cx={svgW / 2} cy={svgH - 8} rx={bw / 2 - 10} ry={10} fill="rgba(0,0,0,0.18)" />
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill={c.courtColor} />
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="url(#mg)" />
      {/* Outer */}
      <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="none" stroke={c.lineColor} strokeWidth={2.5} />
      {/* Center line */}
      <line x1={midX} y1={by} x2={midX} y2={by + bh} stroke={c.lineColor} strokeWidth={2} />
      {/* Center circle */}
      <circle cx={midX} cy={midY} r={bh * 0.17} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={2} />
      {/* Tenis dış çizgiler */}
      <line x1={bx + bw * 0.16} y1={by} x2={bx + bw * 0.16} y2={by + bh} stroke="rgba(255,255,0,0.7)" strokeWidth={1.5} />
      <line x1={bx + bw * 0.84} y1={by} x2={bx + bw * 0.84} y2={by + bh} stroke="rgba(255,255,0,0.7)" strokeWidth={1.5} />
      {/* Basketbol key */}
      <rect x={bx} y={by + bh * 0.27} width={bw * 0.2} height={bh * 0.46} fill="none" stroke="rgba(255,140,0,0.7)" strokeWidth={1.5} />
      <rect x={bx + bw * 0.8} y={by + bh * 0.27} width={bw * 0.2} height={bh * 0.46} fill="none" stroke="rgba(255,140,0,0.7)" strokeWidth={1.5} />
      {/* Tenis servis kutusu */}
      <line x1={bx + bw * 0.16} y1={by + bh * 0.22} x2={midX} y2={by + bh * 0.22} stroke="rgba(255,255,255,0.55)" strokeWidth={1.5} />
      <line x1={bx + bw * 0.16} y1={by + bh * 0.78} x2={midX} y2={by + bh * 0.78} stroke="rgba(255,255,255,0.55)" strokeWidth={1.5} />
      <line x1={midX} y1={by + bh * 0.22} x2={bx + bw * 0.84} y2={by + bh * 0.22} stroke="rgba(255,255,255,0.55)" strokeWidth={1.5} />
      <line x1={midX} y1={by + bh * 0.78} x2={bx + bw * 0.84} y2={by + bh * 0.78} stroke="rgba(255,255,255,0.55)" strokeWidth={1.5} />
      {/* Net dashed */}
      <line x1={midX} y1={by} x2={midX} y2={by + bh} stroke={c.lineColor} strokeWidth={2.5} strokeDasharray="7,4" />
    </>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────── */
export default function CourtLineDrawing() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(active);
      setActive((a) => (a + 1) % COURTS.length);
    }, 4000);
    return () => clearInterval(t);
  }, [active]);

  const court = COURTS[active];
  const Render = court.render;

  return (
    <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", position: "relative" }}>
      <svg
        viewBox="0 0 500 360"
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-hidden="true"
      >
        {/* Background panel */}
        <rect x={0} y={0} width={500} height={360} fill="#2A2E33" rx={12} />

        {COURTS.map((c, i) => {
          const R = c.render;
          return (
            <g
              key={c.key}
              style={{
                opacity: active === i ? 1 : 0,
                transition: "opacity 700ms ease",
              }}
            >
              <R c={c} />
            </g>
          );
        })}

        {/* Bottom label bar */}
        <rect x={0} y={310} width={500} height={50} fill="rgba(0,0,0,0.45)" />
        {COURTS.map((c, i) => (
          <text
            key={c.key}
            x={20 + i * 120}
            y={340}
            fill={active === i ? "#FFFFFF" : "rgba(255,255,255,0.35)"}
            fontSize={9.5}
            fontFamily="'JetBrains Mono', monospace"
            fontWeight={active === i ? "700" : "400"}
            style={{ transition: "fill 500ms ease" }}
          >
            {c.label}
          </text>
        ))}

        {/* Dot indicators */}
        {COURTS.map((c, i) => (
          <circle
            key={c.key + "-dot"}
            cx={14 + i * 120}
            cy={339}
            r={3}
            fill={active === i ? court.courtColor : "rgba(255,255,255,0.2)"}
            style={{ transition: "fill 500ms ease" }}
          />
        ))}
      </svg>
    </div>
  );
}
