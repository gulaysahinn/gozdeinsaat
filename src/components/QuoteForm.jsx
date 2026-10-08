import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, WarningCircle, PaperPlaneTilt, WhatsappLogo } from "@phosphor-icons/react";
import { submitInquiry, formatPhoneNumber, isValidTurkishPhone } from "../services/formService";

export default function QuoteForm({ serviceName = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: serviceName || "",
    details: "",
    kvkkAccepted: false,
    honeypot: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let finalValue = type === "checkbox" ? checked : value;

    if (name === "phone") {
      finalValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

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

    // Bot koruması (Honeypot)
    if (formData.honeypot) {
      console.warn("Spam submission blocked.");
      setStatus("success");
      return;
    }

    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Lütfen adınızı veya kurum adınızı giriniz.";
    }
    if (!formData.phone || !isValidTurkishPhone(formData.phone)) {
      newErrors.phone = "Lütfen geçerli bir telefon numarası giriniz (Örn: 0 5XX XXX XX XX).";
    }
    if (!formData.service && !serviceName) {
      newErrors.service = "Lütfen ilgilendiğiniz hizmeti seçiniz.";
    }
    if (!formData.kvkkAccepted) {
      newErrors.kvkkAccepted = "Lütfen devam etmek için KVKK metnini onaylayınız.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const selectedService = serviceName || formData.service;
      const combinedMessage = [
        formData.city ? `Lokasyon: ${formData.city}` : null,
        formData.details ? `Ek Notlar: ${formData.details}` : null,
      ]
        .filter(Boolean)
        .join(" | ");

      await submitInquiry({
        name: formData.name,
        phone: formData.phone,
        subject: selectedService,
        subjectLabel: selectedService,
        message: combinedMessage,
        source: serviceName ? `${serviceName} Sayfası Teklif Formu` : "Hizmet Teklif Formu",
      });

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        city: "",
        service: serviceName || "",
        details: "",
      });
    } catch (err) {
      console.error("Quote form error:", err);
      setStatus("error");
      setErrorMessage("Teklif iletilirken bir aksaklık oluştu. Dilerseniz WhatsApp veya telefon ile doğrudan bize ulaşabilirsiniz.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      noValidate
    >
      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          style={{
            padding: 16,
            background: "var(--color-accent-light, rgba(200,90,50,0.1))",
            border: "1.5px solid var(--color-accent)",
            borderRadius: "var(--radius-sm, 8px)",
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            color: "var(--color-line)",
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          <CheckCircle size={22} weight="fill" color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <strong style={{ display: "block", color: "var(--color-accent)", marginBottom: 2 }}>
              Talebiniz Başarıyla Alındı!
            </strong>
            Uzman mühendis ekibimiz en geç 24 saat içinde keşif ve fiyat detayları için sizinle iletişime geçecektir.
          </div>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          style={{
            padding: 14,
            background: "rgba(192, 57, 43, 0.1)",
            border: "1px solid var(--color-danger, #e74c3c)",
            borderRadius: "var(--radius-sm, 8px)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            color: "var(--color-line)",
            fontSize: 13,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--color-danger, #e74c3c)" }}>
            <WarningCircle size={20} weight="fill" />
            <span>{errorMessage}</span>
          </div>
          <a
            href={`https://wa.me/905326678428?text=${encodeURIComponent(
              `Merhaba, web siteniz üzerinden ${serviceName || "saha yapımı"} için teklif almak istemiştim.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#25D366",
              fontWeight: 600,
              textDecoration: "underline",
              fontSize: 13,
            }}
          >
            <WhatsappLogo size={18} weight="fill" /> WhatsApp ile Teklif İste
          </a>
        </div>
      )}

      <div>
        <label
          htmlFor="quote-name"
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 6,
            color: "var(--color-line)",
          }}
        >
          Ad Soyad / Kurum Adı *
        </label>
        <input
          type="text"
          id="quote-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Adınız veya Kurumunuz"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "quote-name-error" : undefined}
          style={{
            width: "100%",
            borderColor: errors.name ? "var(--color-danger, #e74c3c)" : undefined,
          }}
        />
        {errors.name && (
          <span id="quote-name-error" style={{ color: "var(--color-danger, #e74c3c)", fontSize: 12, marginTop: 4, display: "block" }}>
            {errors.name}
          </span>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="grid-responsive">
        <div>
          <label
            htmlFor="quote-phone"
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 6,
              color: "var(--color-line)",
            }}
          >
            Telefon Numarası *
          </label>
          <input
            type="tel"
            id="quote-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="0 (5XX) XXX XX XX"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "quote-phone-error" : undefined}
            style={{
              width: "100%",
              borderColor: errors.phone ? "var(--color-danger, #e74c3c)" : undefined,
            }}
          />
          {errors.phone && (
            <span id="quote-phone-error" style={{ color: "var(--color-danger, #e74c3c)", fontSize: 12, marginTop: 4, display: "block" }}>
              {errors.phone}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="quote-city"
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 6,
              color: "var(--color-line)",
            }}
          >
            Şehir / İlçe
          </label>
          <input
            type="text"
            id="quote-city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Örn: İstanbul / Çekmeköy"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {!serviceName && (
        <div>
          <label
            htmlFor="quote-service"
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 6,
              color: "var(--color-line)",
            }}
          >
            İlgilendiğiniz Saha / Hizmet *
          </label>
          <select
            id="quote-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
            aria-invalid={!!errors.service}
          >
            <option value="" disabled>Seçiniz</option>
            <option value="Tenis Kortu Yapımı">Tenis Kortu Yapımı</option>
            <option value="Basketbol Sahası Yapımı">Basketbol Sahası Yapımı</option>
            <option value="Voleybol Sahası Yapımı">Voleybol Sahası Yapımı</option>
            <option value="Halı Saha Yapımı">Halı Saha Yapımı</option>
            <option value="Çok Amaçlı Saha Yapımı">Çok Amaçlı Saha Yapımı</option>
            <option value="Zemin Kaplama ve Yenileme">Zemin Kaplama ve Yenileme</option>
            <option value="Diğer / Kararsızım">Diğer / Kararsızım</option>
          </select>
          {errors.service && (
            <span style={{ color: "var(--color-danger, #e74c3c)", fontSize: 12, marginTop: 4, display: "block" }}>
              {errors.service}
            </span>
          )}
        </div>
      )}

      <div>
        <label
          htmlFor="quote-details"
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 6,
            color: "var(--color-line)",
          }}
        >
          Proje Notları / Saha Ölçüsü (İsteğe Bağlı)
        </label>
        <textarea
          id="quote-details"
          name="details"
          rows={3}
          value={formData.details}
          onChange={handleChange}
          placeholder="Mevcut alan durumu (toprak, beton vb.), yaklaşık ölçüler veya tercih ettiğiniz zemin tipi..."
          style={{ width: "100%", resize: "vertical" }}
        ></textarea>
      </div>

      {/* KVKK Onay Kutusu */}
      <div style={{ marginTop: 4 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <input
            type="checkbox"
            id="quote-kvkk"
            name="kvkkAccepted"
            checked={formData.kvkkAccepted}
            onChange={handleChange}
            style={{
              marginTop: 3,
              cursor: "pointer",
              width: 16,
              height: 16,
              accentColor: "var(--color-accent)",
              flexShrink: 0,
            }}
            aria-invalid={!!errors.kvkkAccepted}
            aria-describedby={errors.kvkkAccepted ? "quote-kvkk-error" : undefined}
          />
          <label
            htmlFor="quote-kvkk"
            style={{
              fontSize: 12,
              lineHeight: 1.5,
              color: "var(--color-line-dim)",
              cursor: "pointer",
              margin: 0,
            }}
          >
            <Link
              to="/gizlilik-politikasi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-accent)",
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              KVKK Aydınlatma Metni
            </Link>
            'ni okudum, kişisel verilerimin bu kapsamda işlenmesini onaylıyorum. <span style={{ color: "var(--color-warm, #C85A32)" }}>*</span>
          </label>
        </div>
        {errors.kvkkAccepted && (
          <span
            id="quote-kvkk-error"
            style={{ color: "var(--color-danger, #e74c3c)", fontSize: 12, marginTop: 4, display: "block" }}
          >
            {errors.kvkkAccepted}
          </span>
        )}
      </div>

      {/* Honeypot Spam Tuzağı */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          tabIndex="-1"
          autoComplete="off"
          value={formData.honeypot}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "loading"}
        style={{
          marginTop: 6,
          justifyContent: "center",
          gap: 8,
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? (
          "Talebiniz İletiliyor..."
        ) : (
          <>
            <PaperPlaneTilt size={16} weight="bold" /> Ücretsiz Keşif ve Fiyat Teklifi Al
          </>
        )}
      </button>

      <div style={{ fontSize: 11, color: "var(--color-line-dim)", textAlign: "center", lineHeight: 1.4 }}>
        Bilgileriniz KVKK kapsamında yalnızca teklif hazırlığı için kullanılır; 3. taraflarla paylaşılmaz.
      </div>
    </form>
  );
}
