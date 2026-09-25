import { SERVICES } from "../data/content";
import ServicePage from "../components/ServicePage";
import { Stack, Drop, Lightbulb, ShieldCheck, Trophy } from "@phosphor-icons/react";


const costFactors = [
  {
    title: "Zemin Tipi & Katman Kalınlığı",
    desc: "Elastik ve şok emici özelliklere sahip akrilik, tartan, poliüretan veya parke zemin sistem seçimi.",
    Icon: Stack,
  },
  {
    title: "Altyapı Drenajı",
    desc: "Yağmur suyunun hızla tahliyesi için yüzey eğimi ve çevre hatıl drenajı sağlanır.",
    Icon: Drop,
  },
  {
    title: "LED Aydınlatma Sistemi",
    desc: "Gece maçlarında topun net görülmesini sağlayan homojen LED projektör aydınlatma sistemi.",
    Icon: Lightbulb,
  },
  {
    title: "Çevre Tel Çit & Koruma",
    desc: "Top kaçışlarını önleyen uygun yükseklikte PVC kaplı tel örgü veya kapalı saha konstrüksiyonu.",
    Icon: ShieldCheck,
  },
  {
    title: "Uluslararası FIVB Standart Uyumu",
    desc: "FIVB standartlarında 18x9m oyun alanı, nizami kaçış payları ve voleybol file (2.43m/2.24m) uygunluğu.",
    Icon: Trophy,
  },
];


const buildSteps = [
  {
    title: "Hafriyat, Tesviye & Zemin Etüdü",
    desc: "Arazi kotları alınır, zemin tesviyesi yapılır ve açık sahalar için su tahliye meyli verilir.",
  },
  {
    title: "Çevre Hatıl Betonu & Ankrajlar",
    desc: "Saha çevresine hatıl betonu dökülür ve voleybol direkleri için ankraj yuvaları hazırlanır.",
  },
  {
    title: "Mıcır Sıkıştırma & Asfalt / Beton",
    desc: "Mekanik mıcır tabakası sıkıştırılır. Üzerine asfalt veya pürüzsüz helikopter perdahlı beton serilir.",
  },
  {
    title: "Sertifikalı Zemin Kaplama",
    desc: "Sıçrama ve düşme güvenliğini sağlayan akrilik, tartan veya poliüretan zemin katmanları uygulanır.",
  },
  {
    title: "Aydınlatma & Güvenlik Ağı",
    desc: "Homojen LED projektörler ve top kaçışlarını önleyen çevre file veya tel örgü montajı yapılır.",
  },
  {
    title: "Nizami Çizgiler & Devreye Alma",
    desc: "FIVB normlarında oyun çizgileri (18x9m) çizilir, teleskopik voleybol direkleri ve file gerilerek teslim edilir.",
  },
];

export default function VoleybolSahasi() {
  const service = SERVICES.find((s) => s.tag === "Voleybol");

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
          title: "Voleybol Sahası Yapım Aşamaları",
          items: [
            "Zemin Etüdü ve Tesviye: Kot tespiti, sıkıştırma ve yağmur suyu tahliye eğiminin oluşturulması.",
            "Hatıl Beton ve Altyapı Dökümü: Çevre hatıl betonu ve teleskopik file direği zemin kovanlarının ankrajı.",
            "Asfalt veya Donatılı Beton Taban: Pürüzsüz ve çatlamasız zemin elde etmek için perdahlı helikopterli beton serimi.",
            "Zemin Kaplama Uygulaması: Darbe emici EPDM kauçuk veya kaymaz akrilik kaplama katmanlarının uygulanması.",
            "Çevre Güvenlik Filesi ve Aydınlatma: 4.00 m çevre tel çit, tavan filesi ve gece maçları için LED projektörler.",
            "FIVB Çizgileri ve File Direği Montajı: Yüksekliği ayarlanabilir profesyonel file direkleri, hakem kulesi ve nizami çizgiler.",
          ],
        },
      ]}
      faq={[
        {
          q: "Nizami voleybol sahası ölçüleri nedir?",
          a: "FIVB (Uluslararası Voleybol Federasyonu) normlarına göre voleybol oyun alanı 18.00 × 9.00 m'dir. Çevre serbest güvenlik koridoruyla birlikte toplam alan en az 24.00 × 15.00 m olmalıdır.",
        },
        {
          q: "Voleybol filesinin nizami yüksekliği nedir?",
          a: "File yüksekliği erkekler için zeminden 2.43 metre, kadınlar için ise 2.24 metredir. Teleskopik direklerimiz sayesinde yükseklik ihtiyaca göre kolayca ayarlanabilmektedir.",
        },
        {
          q: "Hangi zemin voleybol için daha sağlıklıdır?",
          a: "Sürekli sıçrama ve ani iniş hareketleri içeren voleybol için şok emici EPDM kauçuk tartan zemin veya poliüretan kaplama eklem ve menisküs sağlığını korumada en üstün performansı verir.",
        },
        {
          q: "Voleybol sahası yapımı ne kadar sürer?",
          a: "Altyapı hazırlandıktan sonra zemin kaplaması ve ekipman montajı ortalama 2–3 hafta içinde anahtar teslim tamamlanır.",
        },
      ]}
    />
  );
}
