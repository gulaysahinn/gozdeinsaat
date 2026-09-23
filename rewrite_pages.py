import os

pages = {
    'src/pages/TenisKortu.jsx': ('Tenis', 'Tenis Kortu'),
    'src/pages/TartanTenisKortu.jsx': ('Tenis', 'Tartan Tenis Kortu'),
    'src/pages/SentetikCimTenisKortu.jsx': ('Tenis', 'Sentetik Çim Tenis Kortu'),
    'src/pages/BasketbolSahasi.jsx': ('Basketbol', 'Basketbol Sahası'),
    'src/pages/VoleybolSahasi.jsx': ('Voleybol', 'Voleybol Sahası'),
    'src/pages/CokAmacliSaha.jsx': ('Çok amaçlı', 'Çok Amaçlı Saha'),
    'src/pages/HaliSaha.jsx': ('Halı Saha', 'Halı Saha')
}

template = """import { SERVICES, PROCESS } from "../data/content";
import ServicePage from "../components/ServicePage";

export default function __COMPONENT_NAME__() {
  const service = SERVICES.find(s => s.tag === "__TAG__");
  
  if (!service) return null;

  return (
    <ServicePage 
      service={service}
      relatedServices={[
        { name: "Tenis Kortu", to: "/hizmetler/tenis-kortu-yapimi" },
        { name: "Basketbol Sahası", to: "/hizmetler/basketbol-sahasi-yapimi" },
        { name: "Voleybol Sahası", to: "/hizmetler/voleybol-sahasi-yapimi" },
        { name: "Halı Saha", to: "/hizmetler/hali-saha-yapimi" }
      ].filter(s => s.name !== "__TITLE__")}
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
"""

for filepath, (tag, title) in pages.items():
    filename = os.path.basename(filepath)
    component_name = filename.replace('.jsx', '')
    content = template.replace("__COMPONENT_NAME__", component_name).replace("__TAG__", tag).replace("__TITLE__", title)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Rewrote {filepath}')
