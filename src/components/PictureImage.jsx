import React from "react";

/**
 * PictureImage Component
 * Modern WebP support with fallback to JPEG/PNG.
 * Uses <picture> element for native browser format negotiation.
 */
export default function PictureImage({
  src,
  alt = "",
  loading = "lazy",
  fetchPriority,
  style = {},
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) {
  if (!src) return null;

  // Generate WebP URL if src is a local raster image (.jpg, .jpeg, .png)
  const isRaster = typeof src === "string" && /\.(jpe?g|png)$/i.test(src);
  const webpSrc = isRaster ? src.replace(/\.(jpe?g|png)$/i, ".webp") : null;

  // Handle absolute vs standard flow positioning
  const isAbsolute = style.position === "absolute";
  const pictureStyle = isAbsolute
    ? {
        position: "absolute",
        top: style.top ?? 0,
        left: style.left ?? 0,
        right: style.right,
        bottom: style.bottom,
        width: style.width ?? "100%",
        height: style.height ?? "100%",
        display: "block",
        overflow: "hidden",
      }
    : {
        display: style.display || "block",
        width: style.width || "100%",
        height: style.height || "100%",
      };

  return (
    <picture style={pictureStyle}>
      {webpSrc && <source type="image/webp" srcSet={webpSrc} />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          ...style,
          // When wrapped in absolute picture, avoid double positioning offset
          ...(isAbsolute ? { position: "static" } : {}),
        }}
        className={className}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      />
    </picture>
  );
}
