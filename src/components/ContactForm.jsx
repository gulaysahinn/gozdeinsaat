import { useState } from "react";
import { CheckCircle, WarningCircle, PaperPlaneTilt } from "@phosphor-icons/react";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {status === "success" && (
        <div aria-live="polite" style={{
          padding: 16,
          background: "var(--color-accent-light)",
          border: "1px solid var(--color-accent)",
          borderRadius: "var(--radius)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "var(--color-accent)",
          fontSize: 14,
          fontWeight: 500
        }}>
          <CheckCircle size={20} weight="fill" aria-hidden="true" />
          Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.
        </div>
      )}
      
      {status === "error" && (
        <div aria-live="polite" style={{
          padding: 16,
          background: "rgba(192, 57, 43, 0.1)",
          border: "1px solid var(--color-danger)",
          borderRadius: "var(--radius)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "var(--color-danger)",
          fontSize: 14,
          fontWeight: 500
        }}>
          <WarningCircle size={20} weight="fill" aria-hidden="true" />
          Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </div>
      )}

      <div>
        <label htmlFor="name">Adınız Soyadınız / Kurum Adı</label>
        <input type="text" id="name" name="name" required placeholder="Örn. Ahmet Yılmaz / ABC Spor Kulübü" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-responsive">
        <div>
          <label htmlFor="phone">Telefon Numaranız</label>
          <input type="tel" id="phone" name="phone" required placeholder="0 (5XX) XXX XX XX" />
        </div>
        <div>
          <label htmlFor="email">E-posta Adresiniz</label>
          <input type="email" id="email" name="email" required placeholder="ornek@sirket.com" />
        </div>
      </div>

      <div>
        <label htmlFor="subject">Talep Ettiğiniz Saha & Hizmet Türü</label>
        <select id="subject" name="subject" required>
          <option value="" disabled defaultValue>Lütfen bir konu seçin</option>
          <option value="fiyat_teklifi">Anahtar Teslim Fiyat Teklifi Almak İstiyorum</option>
          <option value="kesif">Ücretsiz Yerinde Keşif & Kot Analizi Talebi</option>
          <option value="tenis">Tenis Kortu Yapımı / Zemin Yenileme</option>
          <option value="basketbol">Basketbol Sahası Yapımı</option>
          <option value="voleybol">Voleybol Sahası Yapımı</option>
          <option value="halisaha">Açık / Kapalı Halı Saha İnşaatı</option>
          <option value="cokamacli">Çok Amaçlı Spor Sahası (Kombine Saha)</option>
          <option value="diger">Diğer / Teknik Danışmanlık</option>
        </select>
      </div>

      <div>
        <label htmlFor="message">Proje Detayları & Saha Ölçüleri</label>
        <textarea id="message" name="message" rows={4} required placeholder="Sahanın yapılacağı şehir/ilçe, yaklaşık metrekare, tercih ettiğiniz zemin tipi ve özel isteklerinizi belirtebilirsiniz..."></textarea>
      </div>

      <button 
        type="submit" 
        className="btn-primary" 
        disabled={status === "loading"}
        style={{ 
          marginTop: 6, 
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 15,
          fontWeight: 700,
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer"
        }}
      >
        {status === "loading" ? (
          "Gönderiliyor..."
        ) : (
          <>
            <span>Mesajı ve Teklif Talebini Gönder</span>
            <PaperPlaneTilt size={18} weight="bold" />
          </>
        )}
      </button>
    </form>
  );
}
