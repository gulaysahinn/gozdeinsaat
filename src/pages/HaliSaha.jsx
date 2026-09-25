import { SERVICES } from "../data/content";
import ServicePage from "../components/ServicePage";
import { Stack, Drop, Lightbulb, ShieldCheck, Trophy } from "@phosphor-icons/react";


const costFactors = [
  {
    title: "Zemin Tipi & Katman Kalınlığı",
    desc: "55mm veya 60mm suni çim (FIFA 2 Star uygulamalarında 60mm monofilament, omurgalı yapı) sistem seçimi.",
    Icon: Stack,
  },
  {
    title: "Altyapı Drenajı",
    desc: "Yağmur suyunun hızla tahliyesi için yüzey eğimi ve çevre hatıl drenajı sağlanır.",
    Icon: Drop,
  },
  {
    title: "Aydınlatma Sistemi",
    desc: "Gece maçlarında göz kamaşmasını önleyen, 400W halide projektör veya 150-200W LED projektör.",
    Icon: Lightbulb,
  },
  {
    title: "Çevre Tel Çit & Koruma",
    desc: "6-7m yüksekliğinde, 3.5mm kalınlığında PVC kaplama tel örgü konstrüksiyonu.",
    Icon: ShieldCheck,
  },
  {
    title: "Uluslararası FIFA Standart Uyumu",
    desc: "FIFA 1 Star / FIFA 2 Star belgelendirme standartlarına ve sertifikalı zemin kriterlerine tam uygunluk.",
    Icon: Trophy,
  },
];


const buildSteps = [
  {
    title: "Hafriyat ve Drenaj Altyapısı",
    desc: "Saha alanının hafriyatı, balıksırtı drenaj kanalları ve künk boru döşemesi yapılır.",
  },
  {
    title: "Hatıl Beton ve Ankrajlar",
    desc: "Çelik kolon ve tel çit dikmeleri için çevre hatıl betonu dökümü gerçekleştirilir.",
  },
  {
    title: "Mıcır Taban ve Taş Tozu Serimi",
    desc: "1 ve 2 numara kırmataş mıcır tabakasının silindirle sıkıştırılması ve taş tozu tesviyesi yapılır.",
  },
  {
    title: "Sentetik Çim Halı Serimi",
    desc: "55mm - 60mm omurgalı monofilament sentetik çimin serilerek ek yerlerinin yapıştırılması sağlanır.",
  },
  {
    title: "Kum ve SBR/EPDM Granül Dolgu",
    desc: "Fırınlanmış silis kumu ve granül dolgunun özel makinelerle fırçalanması gerçekleştirilir.",
  },
  {
    title: "Çelik Konstrüksiyon & Ekipman",
    desc: "6-7m tel örgü, tavan ağı, kale direkleri ve aydınlatma montajı ile saha devreye alınır.",
  },
];

export default function HaliSaha() {
  const service = SERVICES.find((s) => s.tag === "Halı Saha");

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
          name: "Çok Amaçlı Saha",
          to: "/hizmetler/cok-amacli-saha-yapimi",
          image: `${import.meta.env.BASE_URL}images/hizmetler/tenisKortuSahaZemin.jpeg`,
          spec: "Kombine Branşlar",
          desc: "Tenis, basketbol ve voleybol çizgilerini tek alanda birleştiren yüksek verimli saha.",
        },
        {
          name: "Voleybol Sahası",
          to: "/hizmetler/voleybol-sahasi-yapimi",
          image: `${import.meta.env.BASE_URL}images/projeler/ankaraincekdogakoleji.jpg`,
          spec: "18 × 9 m (FIVB Normu)",
          desc: "Teleskopik yüksekliği ayarlanabilir direkler ve elastik zeminli voleybol kortları.",
        },
      ]}
      detailedSections={[
        {
          type: "steps",
          title: "Halı Saha Yapım Aşamaları",
          items: [
            "Hafriyat ve Drenaj Altyapısı: Saha alanının hafriyatı, balıksırtı drenaj kanalları ve künk boru döşemesi.",
            "Hatıl Beton ve Ankrajlar: Çelik kolon ve tel çit dikmeleri için çevre hatıl betonu dökümü.",
            "Mıcır Taban ve Taş Tozu Serimi: 1 ve 2 numara kırmataş mıcır tabakasının silindirle sıkıştırılması ve taş tozu tesviyesi.",
            "Sentetik Çim Halı Serimi: 55 mm omurgalı monofilament sentetik çimin serilerek ek yerlerinin yapıştırılması.",
            "Kum ve SBR/EPDM Granül Dolgu: Metrekareye 30 kg fırınlanmış silis kumu ve 8–10 kg granül dolgunun özel makinelerle fırçalanması.",
            "Çelik Konstrüksiyon, Ağ ve Projektörler: 6–7 m yüksekliğinde daldırma galvanizli tel örgü, tavan ağı, kale direkleri ve 400W halide projektör veya 150–200W LED aydınlatma montajı.",
          ],
        },
      ]}
      faq={[
        {
          q: "Ticari bir halı saha için en ideal ölçü nedir?",
          a: "Ticari işletmelerde en çok tercih edilen format 30.00 × 50.00 m (1.500 m² - 7'ye 7) veya 20.00 × 40.00 m (800 m² - 5'e 5 / 6'ya 6) ölçüleridir. Arazinizin durumuna göre özel boyutlandırma da yapılabilmektedir.",
        },
        {
          q: "Kapalı halı saha çeşitleri nelerdir ve karlı bölgelerde hangi tip önerilir?",
          a: "Kapalı halı sahalar statik hesabı yapılmış çelik konstrüksiyon üzerine Brandalı, Sac kaplama veya PVC kaplama olarak üçe ayrılır. En yaygın ve uygun maliyetli tür brandalı sahalar olmakla birlikte; karlı ve sert kış koşullarına sahip bölgelerde çökme riskini önlemek için sac kaplama kapalı halı saha yapımını öneriyoruz.",
        },
        {
          q: "FIFA standartlarında kaliteli bir sentetik çim hangi teknik özelliklere sahip olmalıdır?",
          a: "FIFA 1 Star ve FIFA 2 Star standartlarında en üst düzey sahalarda; 60mm monofilament ve omurgalı halı yapısı, halı altına keçe yerine şokped serimi, metrekare başına 14–15 kg/m² granül dolgusu ve güneş ışınlarına dayanıklı yeşil veya gri EPDM granül kullanımı gerekmektedir.",
        },
        {
          q: "Sipariş edilen sentetik çim ne kadar sürede teslim edilir?",
          a: "Gözde İnşaat güvencesiyle sipariş edilen sentetik çim maksimum 2 hafta içinde teslim edilir. Bu süreçte altyapı hazırlığı ve çevre hatıl imalatı tamamlanarak zaman kaybı önlenir.",
        },
        {
          q: "Halı saha sentetik çim bakımı nasıl yapılır?",
          a: "Sentetik çim zeminin ömrünü uzatmak için periyodik fırçalama (manuel veya motorlu) yapılmalı, ortalama 6 ayda bir eksildikçe granül eklenip fırçalanmalıdır. Sıcak yaz günlerinde gün batımından sonra sulama yapılmalı; saha cam kırıkları, taş, ağaç yaprakları ve sigara izmariti gibi yabancı maddelerden düzenli olarak arındırılmalıdır.",
        },
      ]}
    />
  );
}
