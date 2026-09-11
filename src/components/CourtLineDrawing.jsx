import React from "react";

export default function CourtLineDrawing({ loaded }) {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      position: "relative",
      backgroundColor: "var(--color-bg-soft)",
      backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      backgroundPosition: "center center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      <svg 
        viewBox="0 0 600 400" 
        style={{ width: "90%", height: "90%" }}
        className={loaded ? "draw-active" : ""}
      >
        {/* Outer Bounds */}
        <rect 
          className="court-path delay-0"
          x="20" y="20" width="560" height="360" 
        />
        
        {/* Center Line */}
        <line 
          className="court-path delay-1"
          x1="300" y1="20" x2="300" y2="380" 
        />
        
        {/* Center Circle */}
        <circle 
          className="court-path delay-2"
          cx="300" cy="200" r="50" 
        />
        
        {/* Basketball Keys (Left & Right) */}
        <rect 
          className="court-path delay-3"
          x="20" y="140" width="100" height="120" 
        />
        <rect 
          className="court-path delay-3"
          x="480" y="140" width="100" height="120" 
        />
        
        {/* 3-Point Arcs */}
        <path 
          className="court-path delay-4"
          d="M 20 60 A 180 180 0 0 1 120 340 M 20 340 L 20 60" 
        />
        <path 
          className="court-path delay-4"
          d="M 580 60 A 180 180 0 0 0 480 340 M 580 340 L 580 60" 
        />
        
        {/* Tennis Inner Lines */}
        <rect 
          className="court-path delay-5"
          x="80" y="60" width="440" height="280" 
        />
        <line 
          className="court-path delay-5"
          x1="180" y1="60" x2="180" y2="340" 
        />
        <line 
          className="court-path delay-5"
          x1="420" y1="60" x2="420" y2="340" 
        />
        <line 
          className="court-path delay-5"
          x1="180" y1="200" x2="420" y2="200" 
        />
      </svg>

      {/* Decorative Technical Crosshairs on Grid */}
      <div style={{ position: "absolute", top: "25%", left: "25%", width: 8, height: 8, border: "1px solid var(--color-warm)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "25%", right: "25%", width: 8, height: 8, border: "1px solid var(--color-warm)", borderRadius: "50%" }} />
    </div>
  );
}
