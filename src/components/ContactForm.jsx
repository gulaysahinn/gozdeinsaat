import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, WarningCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import {
  SUBJECT_OPTIONS,
  formatPhoneNumber,
  validateForm,
  submitInquiry,
} from "../services/formService";

export default function ContactForm({
  variant = "full",
  source = "İletişim Sayfası",
  buttonText,
}) {
  const isCompact = variant === "compact";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "phone") {
      finalValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    // Clear error on edit
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData, isCompact);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`${source === "Ana Sayfa" ? "home" : "contact"}-${firstErrorField}`);
      if (el) el.focus();
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitInquiry({
        ...formData,
        source,
      });

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("Talebiniz iletilirken bir sorun oluştu. Lütfen doğrudan telefon hattımızdan bize ulaşın.");
    }
  };

  const idPrefix = source === "Ana Sayfa" ? "home" : "contact";

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          padding: isCompact ? "28px 20px" : "36px 24px",
          background: "var(--color-accent-light)",
          border: "1.5px solid var(--color-accent)",
          borderRadius: "var(--radius)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 12,
          color: "var(--color-line)",
        }}
      >
        <CheckCircle size={44} weight="fill" color="var(--color-accent)" />
        <div
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "var(--color-accent-dark)",
            letterSpacing: "-0.01em",
          }}
        >
          Talebiniz Başarıyla Alındı!
        </div>
        <p
          style={{
            fontSize: 14,
            color: "var(--color-line-dim)",
            margin: 0,
            lineHeight: 1.6,
            maxWidth: "38ch",
          }}
        >
          Teşekkür ederiz. Mühendislik ekibimiz belirttiğiniz telefon numarasından en geç <strong>24 saat</strong> içinde sizinle iletişime geçecektir.
        </p>

        <div
          style={{
            marginTop: 6,
            padding: "6px 14px",
            background: "#FFFFFF",
            border: "1px solid var(--color-border)",
            fontSize: 13,
            color: "var(--color-line-dim)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span>Doğrudan Hat:</span>
          <a
            href="tel:+902163110994"
            style={{
              color: "var(--color-accent)",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            0 (216) 311 09 94
          </a>
        </div>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          style={{
            marginTop: 10,
            fontSize: 13,
            fontWeight: 600,
            color: "var(--color-accent)",
            textDecoration: "underline",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            padding: "4px 8px",
          }}
        >
          Yeni Bir Teklif Talebi Gönder
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        display: "flex",
        flexDirection: "column",
        gap: isCompact ? 16 : 20,
      }}
    >
      {status === "error" && (
        <div
          role="alert"
          aria-live="polite"
          style={{
            padding: "12px 16px",
            background: "rgba(192, 57, 43, 0.08)",
            border: "1px solid var(--color-danger)",
            borderRadius: "var(--radius)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "var(--color-danger)",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <WarningCircle size={20} weight="fill" style={{ flexShrink: 0 }} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 1. İsim & Soyisim */}
      <div>
        <label htmlFor={`${idPrefix}-name`}>
          Adınız Soyadınız / Kurum Adı <span style={{ color: "var(--color-warm)" }}>*</span>
        </label>
        <input
          type="text"
          id={`${idPrefix}-name`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Örn. Ahmet Yılmaz / ABC Spor Kulübü"
          style={{
            borderColor: errors.name ? "var(--color-danger)" : undefined,
          }}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
        />
        {errors.name && (
          <div
            id={`${idPrefix}-name-error`}
            style={{ color: "var(--color-danger)", fontSize: 12, marginTop: 4, fontWeight: 500 }}
          >
            {errors.name}
          </div>
        )}
      </div>

      {/* 2. Telefon & E-posta Alanları */}
      {isCompact ? (
        // Kompakt modda sadece telefon
        <div>
          <label htmlFor={`${idPrefix}-phone`}>
            Telefon Numaranız <span style={{ color: "var(--color-warm)" }}>*</span>
          </label>
          <input
            type="tel"
            id={`${idPrefix}-phone`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0 (5XX) XXX XX XX"
            style={{
              borderColor: errors.phone ? "var(--color-danger)" : undefined,
            }}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
          />
          {errors.phone && (
            <div
              id={`${idPrefix}-phone-error`}
              style={{ color: "var(--color-danger)", fontSize: 12, marginTop: 4, fontWeight: 500 }}
            >
              {errors.phone}
            </div>
          )}
        </div>
      ) : (
        // Tam modda yan yana telefon ve e-posta
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-responsive">
          <div>
            <label htmlFor={`${idPrefix}-phone`}>
              Telefon Numaranız <span style={{ color: "var(--color-warm)" }}>*</span>
            </label>
            <input
              type="tel"
              id={`${idPrefix}-phone`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0 (5XX) XXX XX XX"
              style={{
                borderColor: errors.phone ? "var(--color-danger)" : undefined,
              }}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
            />
            {errors.phone && (
              <div
                id={`${idPrefix}-phone-error`}
                style={{ color: "var(--color-danger)", fontSize: 12, marginTop: 4, fontWeight: 500 }}
              >
                {errors.phone}
              </div>
            )}
          </div>
          <div>
            <label htmlFor={`${idPrefix}-email`}>
              E-posta Adresiniz <span style={{ color: "var(--color-warm)" }}>*</span>
            </label>
            <input
              type="email"
              id={`${idPrefix}-email`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ornek@sirket.com"
              style={{
                borderColor: errors.email ? "var(--color-danger)" : undefined,
              }}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
            />
            {errors.email && (
              <div
                id={`${idPrefix}-email-error`}
                style={{ color: "var(--color-danger)", fontSize: 12, marginTop: 4, fontWeight: 500 }}
              >
                {errors.email}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Talep Ettiğiniz Saha & Hizmet Türü */}
      <div>
        <label htmlFor={`${idPrefix}-subject`}>
          Talep Ettiğiniz Saha & Hizmet Türü <span style={{ color: "var(--color-warm)" }}>*</span>
        </label>
        <select
          id={`${idPrefix}-subject`}
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{
            borderColor: errors.subject ? "var(--color-danger)" : undefined,
          }}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? `${idPrefix}-subject-error` : undefined}
        >
          <option value="" disabled>Lütfen bir konu seçin</option>
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <div
            id={`${idPrefix}-subject-error`}
            style={{ color: "var(--color-danger)", fontSize: 12, marginTop: 4, fontWeight: 500 }}
          >
            {errors.subject}
          </div>
        )}
      </div>

      {/* 4. Proje Detayları (Sadece Tam Formda) */}
      {!isCompact && (
        <div>
          <label htmlFor={`${idPrefix}-message`}>
            Proje Detayları & Saha Ölçüleri <span style={{ color: "var(--color-warm)" }}>*</span>
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Sahanın yapılacağı şehir/ilçe, yaklaşık metrekare, tercih ettiğiniz zemin tipi ve özel isteklerinizi belirtebilirsiniz..."
            style={{
              borderColor: errors.message ? "var(--color-danger)" : undefined,
            }}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
          />
          {errors.message && (
            <div
              id={`${idPrefix}-message-error`}
              style={{ color: "var(--color-danger)", fontSize: 12, marginTop: 4, fontWeight: 500 }}
            >
              {errors.message}
            </div>
          )}
        </div>
      )}

      {/* Gönder Butonu */}
      <button
        type="submit"
        className="btn-primary"
        disabled={status === "loading"}
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 14,
          fontWeight: 700,
          padding: isCompact ? "14px 24px" : "16px 28px",
          marginTop: isCompact ? 4 : 8,
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? (
          "İletiliyor..."
        ) : (
          <>
            <span>{buttonText || (isCompact ? "Hızlı Teklif Talebini Gönder" : "Mesajı ve Teklif Talebini Gönder")}</span>
            <PaperPlaneTilt size={18} weight="bold" />
          </>
        )}
      </button>

      {/* Kompakt Form Alt Linki (İletişim sayfasına yönlendirme) */}
      {isCompact && (
        <div style={{ textAlign: "center", marginTop: 4 }}>
          <Link
            to="/iletisim"
            style={{
              fontSize: 13,
              color: "var(--color-line-dim)",
              textDecoration: "none",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-line-dim)")}
          >
            Daha detaylı teklif için tam formu doldurun →
          </Link>
        </div>
      )}
    </form>
  );
}
