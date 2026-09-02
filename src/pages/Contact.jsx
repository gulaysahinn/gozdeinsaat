import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";
import QuoteForm from "../components/QuoteForm";

export default function Contact() {
  return (
    <section style={{ ...pageWrap, background: COLORS.bgSoft, maxWidth: "none" }}>
      <Helmet>
        <title>Ücretsiz Teklif Al | Gözde İnşaat</title>
        <meta
          name="description"
          content="Tenis kortu, basketbol sahası veya voleybol sahası yaptırmak ister misiniz? Ücretsiz keşif ve teklif için irtibata geçin. 0 (216) 311 09 94 — Sancaktepe / İstanbul."
        />
        <link rel="canonical" href="https://www.gozdeinsaat.com/iletisim" />
      </Helmet>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Badge color={COLORS.rust}>İletişim</Badge>
        <h1 style={{ fontFamily: FONT.display, fontSize: 40, margin: "16px 0 30px" }}>
          ÜCRETSİZ TEKLİF AL
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 30 }}>
          <div>
            <p style={{ color: COLORS.lineDim, fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
              Bilgilerinizi bırakın, ekibimiz 24 saat içinde sizi arasın.
              İsterseniz doğrudan da ulaşabilirsiniz.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={16} color={COLORS.rust} /> 0 (216) 311 09 94
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={16} color={COLORS.rust} /> info@gozdeinsaat.com
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} color={COLORS.rust} />
                Osmangazi Mah. Bilal Habeşi Cad. Şeyh Şamil Sok. No:1,
                Sancaktepe/İstanbul
              </span>
            </div>
          </div>

          <div
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              padding: 32,
            }}
          >
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}