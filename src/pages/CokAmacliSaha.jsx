import { SERVICES } from "../data/content";
import ServicePage from "../components/ServicePage";

export default function CokAmacliSaha() {
  const service = SERVICES.find((s) => s.tag === "Çok amaçlı");

  if (!service) return null;

  return (
    <ServicePage
      service={service}
      relatedServices={[
        {
          name: "Tenis Kortu",
          to: "/hizmetler/tenis-kortu-yapimi",
          image: `${import.meta.env.BASE_URL}images/hizmetler/tenisKortuYapimi.jpg`,
          spec: "18 × 36 m (ITF Normu)",
          desc: "Akrilik ve EPDM zeminli açık ve çelik konstrüksiyon kapalı tenis kortları.",
        },
        {
          name: "Basketbol Sahası",
          to: "/hizmetler/basketbol-sahasi-yapimi",
          image: `${import.meta.env.BASE_URL}images/hizmetler/basketbolSahasi.jpg`,
          spec: "28 × 15 m (FIBA Normu)",
          desc: "Akrilik ve EPDM kauçuk zeminli, hidrolik potalı açık ve kapalı basketbol sahaları.",
        },
        {
          name: "Voleybol Sahası",
          to: "/hizmetler/voleybol-sahasi-yapimi",
          image: `${import.meta.env.BASE_URL}images/projeler/ankaraincekdogakoleji.jpg`,
          spec: "18 × 9 m (FIVB Normu)",
          desc: "Teleskopik yüksekliği ayarlanabilir direkler ve elastik zeminli voleybol kortları.",
        },
        {
          name: "Halı Saha",
          to: "/hizmetler/hali-saha-yapimi",
          image: `${import.meta.env.BASE_URL}images/hizmetler/haliSaha.jpg`,
          spec: "55 mm Sentetik Çim",
          desc: "FIFA kalite standartlarında açık ve çelik konstrüksiyon kapalı ticari halı sahalar.",
        },
      ]}
      detailedSections={[
        {
          type: "steps",
          title: "Çok Amaçlı Saha Yapım Aşamaları",
          items: [
            "Lazerli Kotlama ve Zemin Tesviyesi: Kombine branşlar için tek yöne meyil ve altyapı drenaj hesabı yapılması.",
            "Hatıl Beton ve Çok Fonksiyonlu Kovanlar: Çevre hatılı ve hem voleybol filesi hem tenis filesi takılabilecek kovanların ankrajı.",
            "Taşıyıcı Asfalt veya Donatılı Beton: Çatlamaz, pürüzsüz C25/30 helikopterli beton tabanı veya aşınma asfaltı serimi.",
            "Kombine Zemin Kaplama: 20-26 mm kum dolgulu sentetik çim veya darbe sönümleyici EPDM kauçuk zemin tatbiki.",
            "4.00 m Galvaniz Tel Çit ve LED Aydınlatma: Yüksek mukavemetli çevre tel örgüsü ve gece maçları için projektör montajı.",
            "Renk Kodlu Çizgiler ve Ekipman Montajı: Tenis (Beyaz), Basketbol (Sarı), Voleybol (Mavi) çizgileri ve kombine pota/file montajı.",
          ],
        },
      ]}
      faq={[
        {
          q: "Çok amaçlı sahada hangi sporlar bir arada oynanabilir?",
          a: "Çok amaçlı sahalar; halı saha, basketbol sahası, voleybol sahası ve tenis kortu gibi farklı spor dallarının bir arada icra edilmesine olanak sağlar. Standart 18×36 m ölçülerinde veya alana uygun ebatlarda kombine çizgilerle anahtar teslim kurulur.",
        },
        {
          q: "Farklı branşların çizgileri karışıklığa yol açar mı?",
          a: "Hayır. Resmi standartlara uygun şekilde tenis çizgileri beyaz, basketbol çizgileri sarı, voleybol çizgileri ise mavi renkle uygulanır. Oyuncular branş çizgilerini kolayca ayırt eder.",
        },
        {
          q: "Çok amaçlı saha için hangi zemin türü daha uygundur?",
          a: "En çok tercih edilen zeminler 11mm–30mm hav boyu aralığındaki (genellikle 20mm model) silis kum dolgulu sentetik çim halı ve 13 mm (8mm SBR + 5mm EPDM) kauçuk tartan zeminlerdir. Her iki sistem de farklı spor dallarının yoğun kullanımına karşı yüksek dayanıklılık sunar.",
        },
        {
          q: "Çok amaçlı saha yaptırmanın maliyet avantajı nedir?",
          a: "Ayrı ayrı 3 saha inşa etmek 3 kat altyapı, çit ve aydınlatma maliyeti getirirken; tek sahada bu fonksiyonların birleştirilmesi %60'a varan maliyet ve %50'den fazla alan tasarrufu sağlar.",
        },
      ]}
    />
  );
}
