// Centralized Form Submission Service for Gözde İnşaat
// Supports EmailJS (with rich branded HTML template), Web3Forms, and localStorage fallback

import emailjs from "@emailjs/browser";

export const SUBJECT_OPTIONS = [
  { value: "fiyat_teklifi", label: "Anahtar Teslim Fiyat Teklifi Almak İstiyorum" },
  { value: "kesif", label: "Ücretsiz Yerinde Keşif & Kot Analizi Talebi" },
  { value: "tenis", label: "Tenis Kortu Yapımı / Zemin Yenileme" },
  { value: "basketbol", label: "Basketbol Sahası Yapımı" },
  { value: "voleybol", label: "Voleybol Sahası Yapımı" },
  { value: "halisaha", label: "Açık / Kapalı Halı Saha İnşaatı" },
  { value: "cokamacli", label: "Çok Amaçlı Spor Sahası (Kombine Saha)" },
  { value: "diger", label: "Diğer / Teknik Danışmanlık" },
];

export function getSubjectLabel(val) {
  const match = SUBJECT_OPTIONS.find((opt) => opt.value === val);
  return match ? match.label : val || "Belirtilmedi";
}

/**
 * Validates Turkish phone numbers.
 * Supports landline & mobile: e.g. 0532 123 45 67, 0216 311 09 94, +90 532 123 45 67, 5321234567
 */
export function isValidTurkishPhone(phoneStr) {
  if (!phoneStr || typeof phoneStr !== "string") return false;
  const digits = phoneStr.replace(/\D/g, "");

  // If starts with country code 90 (12 digits) -> 90 5XX XXX XX XX
  if (digits.length === 12 && digits.startsWith("90")) {
    const local = digits.slice(2);
    return /^[2-9]\d{9}$/.test(local);
  }
  // If starts with leading 0 (11 digits) -> 0 5XX XXX XX XX
  if (digits.length === 11 && digits.startsWith("0")) {
    const local = digits.slice(1);
    return /^[2-9]\d{9}$/.test(local);
  }
  // If exactly 10 digits without leading 0 -> 5XX XXX XX XX
  if (digits.length === 10) {
    return /^[2-9]\d{9}$/.test(digits);
  }
  return false;
}

/**
 * Formats a phone input string cleanly as user types: 0 (5XX) XXX XX XX
 */
export function formatPhoneNumber(val) {
  if (!val) return "";
  let digits = val.replace(/\D/g, "");
  if (digits.startsWith("90") && digits.length > 10) {
    digits = digits.slice(2);
  }
  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  digits = digits.slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length <= 3) return `0 (${digits}`;
  if (digits.length <= 6) return `0 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 8) return `0 (${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`;
  return `0 (${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`;
}

/**
 * Validates form submission payload.
 * Returns an errors object { [field]: errorMessage }
 */
export function validateForm(formData, isCompact = false) {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Lütfen adınızı veya kurum adınızı giriniz (en az 2 karakter).";
  }

  if (!formData.phone || !isValidTurkishPhone(formData.phone)) {
    errors.phone = "Lütfen geçerli bir telefon numarası giriniz (Örn: 0 (5XX) XXX XX XX).";
  }

  if (!formData.subject) {
    errors.subject = "Lütfen talep ettiğiniz saha & hizmet türünü seçiniz.";
  }

  if (!isCompact) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      errors.email = "Lütfen geçerli bir e-posta adresi giriniz.";
    }
    if (!formData.message || formData.message.trim().length < 5) {
      errors.message = "Lütfen proje detaylarınızı veya saha ölçülerinizi belirtiniz.";
    }
  }

  return errors;
}

/**
 * Unified submission function for both Home and Contact forms.
 * Tries EmailJS first if configured; falls back to Web3Forms and localStorage.
 */
export async function submitInquiry(formData) {
  const payload = {
    id: `inquiry_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    source: formData.source || "Web Formu",
    name: formData.name.trim(),
    phone: formData.phone.trim(),
    subject: formData.subject,
    subjectLabel: getSubjectLabel(formData.subject),
    ...(formData.email ? { email: formData.email.trim() } : {}),
    ...(formData.message ? { message: formData.message.trim() } : {}),
    submittedAt: new Date().toISOString(),
    timestampLocale: new Intl.DateTimeFormat("tr-TR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date()),
  };

  const emailJsServiceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_rn7fa9q";
  const emailJsTemplateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_4z99cyh";
  const emailJsPublicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "W5r131-LeVrBS_iv6";

  const web3FormsKey =
    import.meta.env.VITE_WEB3FORMS ||
    import.meta.env.VITE_WEB3FORMS_KEY ||
    "7aa9e9eb-6516-43cf-a842-b5fb558960fb";

  // 1. Tercih: EmailJS (Özel Kurumsal Tasarım Şablonu)
  if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
    try {
      const cleanServiceType = (payload.subjectLabel || "")
        .replace(/\s*\/\s*/g, " - ")
        .replace(/&/g, "ve");

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          customer_name: payload.name,
          customer_phone: payload.phone,
          customer_email: payload.email || "Belirtilmedi",
          service_type: cleanServiceType,
          project_details: payload.message || "Belirtilmedi",
          form_source: payload.source,
          submission_date: payload.timestampLocale,
          reply_to: payload.email || "info@gozdeinsaat.com",
        },
        emailJsPublicKey
      );
    } catch (err) {
      console.error("[EmailJS Gönderim Hatası]:", err);
      // EmailJS başarısız olursa Web3Forms yedeğini dene
      if (web3FormsKey) {
        await sendViaWeb3Forms(payload, web3FormsKey);
      } else {
        saveToLocalStorage(payload);
        throw err;
      }
    }
  }
  // 2. Tercih: Web3Forms
  else if (web3FormsKey) {
    await sendViaWeb3Forms(payload, web3FormsKey);
  }
  // 3. Simülasyon
  else {
    await new Promise((resolve) => setTimeout(resolve, 800));
  }

  // Güvenlik ve veri kaybını önlemek için yerel depolama yedeği
  saveToLocalStorage(payload);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("gozde:form-submitted", { detail: payload }));
  }

  console.info(
    `%c[Gözde İnşaat - Form İletisi] Kaynak: ${payload.source}`,
    "color: #1F6B4A; font-weight: bold; font-size: 13px;",
    payload
  );

  return { success: true, payload };
}

async function sendViaWeb3Forms(payload, web3FormsKey) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        subject: `[YENİ TEKLİF] ${payload.subjectLabel} | ${payload.name}`,
        from_name: "Gözde İnşaat - Web Sitesi",
        "Müşteri / Kurum": payload.name,
        "İletişim Telefonu": payload.phone,
        "E-posta Adresi": payload.email || "Belirtilmedi",
        ...(payload.email ? { replyto: payload.email } : {}),
        "Talep Edilen Saha & Hizmet": payload.subjectLabel,
        "Proje Detayları & Saha Ölçüleri": payload.message || "Belirtilmedi",
        "Talep Kaynağı": payload.source,
        "Tarih & Saat": payload.timestampLocale,
      }),
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.message || `Sunucu hatası: ${response.status}`);
    }
  } catch (err) {
    console.error("[Web3Forms Gönderim Hatası]:", err);
    saveToLocalStorage(payload);
    throw err;
  }
}

function saveToLocalStorage(payload) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    const existing = JSON.parse(localStorage.getItem("gozde_inquiries") || "[]");
    existing.unshift(payload);
    localStorage.setItem("gozde_inquiries", JSON.stringify(existing.slice(0, 50)));
  } catch (e) {
    console.warn("Could not save to localStorage:", e);
  }
}
