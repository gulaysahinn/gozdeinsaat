import { useState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";

export default function QuoteForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {status === "success" && (
        <div style={{
          padding: 14,
          background: "var(--color-accent-light)",
          border: "1px solid var(--color-accent)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "var(--color-accent)",
          fontSize: 13,
          fontWeight: 500
        }}>
          <CheckCircle size={18} weight="fill" />
          Talebiniz alındı. 24 saat içinde dönüş yapacağız.
        </div>
      )}
      
      {status === "error" && (
        <div style={{
          padding: 14,
          background: "rgba(192, 57, 43, 0.1)",
          border: "1px solid var(--color-danger)",
          borderRadius: "var(--radius-sm)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "var(--color-danger)",
          fontSize: 13,
          fontWeight: 500
        }}>
          <WarningCircle size={18} weight="fill" />
          Bir hata oluştu. Lütfen tekrar deneyin.
        </div>
      )}

      <div>
        <label htmlFor="quote-name">Ad Soyad / Kurum</label>
        <input type="text" id="quote-name" name="name" required placeholder="Adınız veya Kurumunuz" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="grid-responsive">
        <div>
          <label htmlFor="quote-phone">Telefon</label>
          <input type="tel" id="quote-phone" name="phone" required placeholder="0 (5XX) XXX XX XX" />
        </div>
        <div>
          <label htmlFor="quote-city">Şehir / İlçe</label>
          <input type="text" id="quote-city" name="city" required placeholder="Örn: İstanbul / Sancaktepe" />
        </div>
      </div>

      <div>
        <label htmlFor="quote-service">İlgilendiğiniz Hizmet</label>
        <select id="quote-service" name="service" required style={{ appearance: "none" }}>
          <option value="" disabled defaultValue>Seçiniz</option>
          <option value="tenis">Tenis Kortu</option>
          <option value="basketbol">Basketbol Sahası</option>
          <option value="voleybol">Voleybol Sahası</option>
          <option value="hali_saha">Halı Saha</option>
          <option value="cok_amacli">Çok Amaçlı Saha</option>
          <option value="diger">Diğer / Kararsızım</option>
        </select>
      </div>

      <div>
        <label htmlFor="quote-details">Ek Detaylar (İsteğe Bağlı)</label>
        <textarea id="quote-details" name="details" rows={3} placeholder="Yaklaşık alan büyüklüğü, zemin tercihi vb."></textarea>
      </div>

      <button 
        type="submit" 
        className="btn-primary" 
        disabled={status === "loading"}
        style={{ 
          marginTop: 8, 
          justifyContent: "center",
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer"
        }}
      >
        {status === "loading" ? "Gönderiliyor..." : "Keşif ve Fiyat İste"}
      </button>
    </form>
  );
}
