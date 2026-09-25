import { SERVICES } from "../data/content";
import ServicePage from "../components/ServicePage";
import { Stack, Drop, Lightbulb, ShieldCheck, Trophy } from "@phosphor-icons/react";


const costFactors = [
  {
    title: "Zemin Tipi & Katman Kalınlığı",
    desc: "11mm-30mm (genellikle 20mm) suni çim veya esnek tartan zemin sistem seçimi.",
    Icon: Stack,
  },
  {
    title: "Altyapı Drenajı",
    desc: "Yağmur suyunun hızla tahliyesi için yüzey eğimi ve çevre hatıl drenajı sağlanır.",
    Icon: Drop,
  },
  {
    title: "LED Aydınlatma Sistemi",
    desc: "Gece kullanımında kör nokta bırakmayan genel LED projektör aydınlatma sistemi.",
    Icon: Lightbulb,
  },
  {
    title: "Çevre Tel Çit & Koruma",
    desc: "Çoklu kullanıma uygun, dayanıklı PVC kaplı galvaniz tel örgü konstrüksiyonu.",
    Icon: ShieldCheck,
  },
  {
    title: "Kombine Standart Uyumu",
    desc: "Birden fazla branşın (Tenis, Basketbol, Voleybol) renk kodlu nizami çizgilerine ve ekipmanlarına tam uygunluk.",
    Icon: Trophy,
  },
];


const buildSteps = [
  {
    title: "Hafriyat, Tesviye & Zemin Etüdü",
    desc: "Arazi kotları alınır, bitkisel toprak sıyrılır ve yağmur suyu tahliyesi için yüzey meyli verilir.",
  },
  {
    title: "Çevre Hatıl Betonu & Drenaj",
    desc: "Saha çevresine demir donatılı çevre hatıl betonu dökülür ve su tahliyesi için drenaj boruları döşenir.",
  },
  {
    title: "Altyapı Zemin Hazırlığı",
    desc: "Mekanik mıcır tabakası sıkıştırılır. Üzerine asfalt veya perdahlı beton tabanı serilir.",
  },
  {
    title: "Çok Amaçlı Zemin Kaplama",
    desc: "Kombine sporlara uygun 11mm-30mm sentetik çim veya tartan zemin katmanları uygulanır.",
  },
  {
    title: "Çevre Tel Çit & Aydınlatma",
    desc: "Saha güvenliğini sağlayan tel örgü konstrüksiyonu ve aydınlatma projektörleri bağlanır.",
  },
  {
    title: "Kombine Çizgiler & Devreye Alma",
    desc: "Farklı renklerde branş çizgileri çizilir, çok amaçlı ekipmanlar (pota, direk) monte edilerek teslim edilir.",
  },
];

export default function CokAmacliSaha() {
  const service = SERVICES.find((s) => s.tag === "Çok amaçlı");

  if (!service) return null;

  return (
    <ServicePage
      service={service}
      costFactors={costFactors}
      buildSteps={buildSteps}
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
