import { SERVICES, PROCESS } from "../data/content";
import ServicePage from "../components/ServicePage";

export default function SentetikCimTenisKortu() {
  const service = SERVICES.find(s => s.tag === "Tenis");
  
  if (!service) return null;

  return (
    <ServicePage 
      service={service}
      relatedServices={[
        { name: "Tenis Kortu", to: "/hizmetler/tenis-kortu-yapimi" },
        { name: "Basketbol Sahası", to: "/hizmetler/basketbol-sahasi-yapimi" },
        { name: "Voleybol Sahası", to: "/hizmetler/voleybol-sahasi-yapimi" },
        { name: "Halı Saha", to: "/hizmetler/hali-saha-yapimi" }
      ].filter(s => s.name !== "Sentetik Çim Tenis Kortu")}
      detailedSections={[
        {
          type: "steps",
          title: "Saha Yapım Aşamaları",
          items: PROCESS.map(p => p.title + ": " + p.desc)
        }
      ]}
      factors={[
        "Zemin tipi ve kalınlığı",
        "Altyapı ve drenaj sistemi",
        "Aydınlatma ve çevre güvenlik (tel örgü) donanımı",
        "Uluslararası standartlara uygunluk (ITF, FIBA, FIFA)"
      ]}
      faq={[
        { q: "Saha yapımı ortalama ne kadar sürer?", a: "Hava koşullarına ve altyapı durumuna bağlı olarak standart saha projeleri ortalama 3-4 hafta içinde anahtar teslim olarak tamamlanmaktadır." },
        { q: "Bakım ve onarım hizmeti veriyor musunuz?", a: "Evet, tamamladığımız projelerde garanti süresince ve sonrasında zemin yenileme, periyodik bakım hizmetlerimiz mevcuttur." },
        { q: "Ücretsiz keşif hizmetiniz var mı?", a: "Türkiye genelinde projelendirme aşamasında alan analizi ve ücretsiz keşif desteği sağlıyoruz." }
      ]}
    />
  );
}
