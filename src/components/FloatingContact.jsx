import { useState, useEffect, useRef } from "react";
import { ChatCircleDots, X, WhatsappLogo, TelegramLogo } from "@phosphor-icons/react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Dışarı tıklama veya ESC ile kapatma
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (isOpen && e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Animasyon state'leri (prefers-reduced-motion CSS'te ele alınabilir ancak inline style yazıyoruz)
  // CSS ile halletmek daha temiz, inline style'da `transition` kullanarak yapalım.
  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: window.innerWidth < 768 ? 16 : 24,
        right: window.innerWidth < 768 ? 16 : 24,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <style>{`
        .floating-action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          color: white;
          box-shadow: var(--shadow-md);
          position: relative;
        }
        
        .sub-btn-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 48px;
          height: 48px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px) scale(0.8);
          transition: opacity 200ms ease-out, transform 200ms ease-out;
        }
        
        .is-open .sub-btn-container {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .is-open .sub-btn-container:nth-child(1) {
          transition-delay: 100ms;
        }
        
        .is-open .sub-btn-container:nth-child(2) {
          transition-delay: 0ms;
        }

        .sub-btn {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          color: white;
          box-shadow: var(--shadow-md);
          text-decoration: none;
        }

        .sub-btn-tooltip {
          position: absolute;
          right: 56px;
          background: var(--color-card);
          color: var(--color-line);
          padding: 6px 12px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: opacity 0.2s, transform 0.2s;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        @media (hover: hover) and (pointer: fine) {
          .sub-btn:hover + .sub-btn-tooltip {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sub-btn-container,
          .sub-btn-tooltip {
            transition: opacity 200ms ease-out !important;
            transform: none !important;
          }
        }
      `}</style>

      <div
        className={isOpen ? "is-open" : ""}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div className="sub-btn-container">
          <a
            href="https://t.me/gozdeinsaat"
            target="_blank"
            rel="noopener noreferrer"
            className="sub-btn"
            style={{ background: "#0088cc" }}
            aria-label="Telegram"
          >
            <TelegramLogo size={24} weight="fill" />
          </a>
          <div className="sub-btn-tooltip">Telegram'dan Yazın</div>
        </div>

        <div className="sub-btn-container">
          <a
            href="https://wa.me/905326678428"
            target="_blank"
            rel="noopener noreferrer"
            className="sub-btn"
            style={{ background: "#25D366" }}
            aria-label="WhatsApp"
          >
            <WhatsappLogo size={24} weight="fill" />
          </a>
          <div className="sub-btn-tooltip">WhatsApp'tan Yazın</div>
        </div>
      </div>

      <button
        className="floating-action-btn"
        onClick={toggleOpen}
        aria-label="Hızlı iletişim menüsü"
        style={{
          width: 56,
          height: 56,
          background: "var(--color-accent)",
          transition: "transform 0.2s",
        }}
      >
        {/* İkon geçişi */}
        <div
          style={{
            position: "absolute",
            transition: "opacity 0.2s, transform 0.2s",
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scale(0.8) rotate(-45deg)" : "scale(1) rotate(0)",
          }}
        >
          <ChatCircleDots size={28} weight="fill" />
        </div>
        <div
          style={{
            position: "absolute",
            transition: "opacity 0.2s, transform 0.2s",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "scale(1) rotate(0)" : "scale(0.8) rotate(45deg)",
          }}
        >
          <X size={28} weight="bold" />
        </div>
      </button>
    </div>
  );
}
