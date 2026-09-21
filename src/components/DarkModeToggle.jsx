import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system";
    }
    return "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      root.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      // system -> check current actual, toggle to opposite
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? "light" : "dark");
    }
  };

  // Determine visual state for icon
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-bg-soft)",
        border: "1px solid var(--color-border)",
        cursor: "pointer",
        transition: "background 0.2s, border-color 0.2s",
        flexShrink: 0,
      }}
    >
      {isDark ? (
        <Sun size={18} weight="bold" color="var(--color-warm)" />
      ) : (
        <Moon size={18} weight="bold" color="var(--color-line-dim)" />
      )}
    </button>
  );
}
