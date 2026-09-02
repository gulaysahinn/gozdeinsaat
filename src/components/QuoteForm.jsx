import React, { useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { COLORS, labelStyle, inputStyle } from "../theme";

function Field({ label, name, value, onChange, error, placeholder }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          ...inputStyle,
          borderColor: error ? COLORS.rust : COLORS.border,
        }}
      />
      {error && (
        <div style={{ color: COLORS.danger, fontSize: 12, marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default function QuoteForm() {
  const [form, setForm] = useState({
    ad: "",
    telefon: "",
    email: "",
    sahaTipi: "Tenis kortu",
    konum: "",
    not: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!form.ad.trim()) nextErrors.ad = "Ad soyad gerekli";
    if (!form.telefon.trim()) nextErrors.telefon = "Telefon gerekli";
    if (!form.konum.trim()) nextErrors.konum = "Şehir / ilçe gerekli";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    // Gerçek kullanımda burada bir servise (EmailJS, Formspree
    // veya kendi backend API'niz) istek atılır.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: COLORS.success,
          fontSize: 15,
          padding: "16px 0",
        }}
      >
        <CheckCircle2 size={20} />
        Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field
          label="Ad soyad"
          name="ad"
          value={form.ad}
          onChange={handleChange}
          error={errors.ad}
          placeholder="Adınız Soyadınız"
        />
        <Field
          label="Telefon"
          name="telefon"
          value={form.telefon}
          onChange={handleChange}
          error={errors.telefon}
          placeholder="05xx xxx xx xx"
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
        <Field
          label="E-posta (opsiyonel)"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ornek@eposta.com"
        />
        <Field
          label="Şehir / ilçe"
          name="konum"
          value={form.konum}
          onChange={handleChange}
          error={errors.konum}
          placeholder="İstanbul / Sancaktepe"
        />
      </div>

      <div style={{ marginTop: 14 }}>
        <label style={labelStyle}>Saha tipi</label>
        <select
          name="sahaTipi"
          value={form.sahaTipi}
          onChange={handleChange}
          style={inputStyle}
        >
          <option>Tenis kortu</option>
          <option>Basketbol sahası</option>
          <option>Voleybol sahası</option>
          <option>Çok amaçlı saha</option>
        </select>
      </div>

      <div style={{ marginTop: 14 }}>
        <label style={labelStyle}>Notunuz (opsiyonel)</label>
        <textarea
          name="not"
          value={form.not}
          onChange={handleChange}
          rows={3}
          placeholder="Saha büyüklüğü, arazi durumu vb."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: 20,
          background: COLORS.rust,
          color: COLORS.line,
          border: "none",
          borderRadius: 6,
          padding: "13px 22px",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        Teklif Talebini Gönder <ChevronRight size={16} />
      </button>
    </form>
  );
}
