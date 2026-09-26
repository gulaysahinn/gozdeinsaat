import { SERVICES } from "../data/content";
import ServicePage from "../components/ServicePage";
import { Stack, Drop, Lightbulb, ShieldCheck, Trophy } from "@phosphor-icons/react";


const costFactors = [
  {
    title: "Zemin Tipi & Katman Kalınlığı",
    desc: "Akrilik (2-3mm), Tartan (8mm SBR+5mm EPDM), Parke (ahşap) veya poliüretan zemin sistem seçimi.",
    Icon: Stack,
  },
  {
    title: "Altyapı Drenajı",
    desc: "Yağmur suyunun hızla tahliyesi için yüzey eğimi ve çevre hatıl drenajı sağlanır.",
    Icon: Drop,
  },
  {
    title: "LED Aydınlatma Sistemi",
    desc: "Gece maçlarında göz kamaşmasını önleyen, genel LED projektör aydınlatma sistemi.",
    Icon: Lightbulb,
  },
  {
    title: "Çevre Tel Çit & Koruma",
    desc: "Açık sahalar için uygun yükseklikte PVC kaplı tel örgü ile çevrili saha konstrüksiyonu.",
    Icon: ShieldCheck,
  },
  {
    title: "Uluslararası FIBA Standart Uyumu",
    desc: "FIBA resmi ölçü ve zemin standartlarına, nizami oyun çizgilerine tam uygunluk.",
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
    title: "Mıcır Sıkıştırma & Asfalt / Beton",
    desc: "Mekanik mıcır tabakası sıkıştırılır. Üzerine asfalt veya perdahlı beton tabanı serilir.",
  },
  {
    title: "Sertifikalı Zemin Kaplama",
    desc: "Basketbol branşına uygun akrilik, tartan, parke veya poliüretan zemin katmanları uygulanır.",
  },
  {
    title: "Çevre Tel Çit & Aydınlatma",
    desc: "Açık sahalarda PVC kaplı örgü tel konstrüksiyonu ve genel LED projektörler bağlanır.",
  },
  {
    title: "Nizami Çizgiler & Devreye Alma",
    desc: "FIBA normlarında oyun çizgileri çizilir, basketbol potaları monte edilerek anahtar teslim devreye alınır.",
  },
];

export default function BasketbolSahasi() {
  const service = SERVICES.find((s) => s.tag === "Basketbol");

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
          name: "Çok Amaçlı Saha",
          to: "/hizmetler/cok-amacli-saha-yapimi",
          image: `${import.meta.env.BASE_URL}images/hizmetler/cokAmacliSaha.jpg`,
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
          title: "Basketbol Sahası Yapım Aşamaları",
          items: [
            "Hafriyat ve Altyapı Tesviyesi: Arazi kotlarının lazerli nivo ile alınması, zemin sıkıştırması ve yağmur suyu meyilinin oluşturulması.",
            "Hatıl Beton ve Drenaj Kanalları: Saha çevresine 30×50 cm demir donatılı çevre hatılı dökülmesi ve su tahliye künklerinin döşenmesi.",
            "Taşıyıcı Beton / Asfalt Taban: Çatlamalara karşı çelik hasırlı C25/30 perdahlı helikopterli beton veya aşınma asfaltı taban serimi.",
            "Zemin Kaplama ve Katmanlar: Akrilik dolgu ve renk katmanları veya şok emici EPDM kauçuk granül tabakasının tatbik edilmesi.",
            "Çevre Tel Çit ve Projektör Aydınlatma: 4.00 m yüksekliğinde daldırma galvaniz boru konstrüksiyonu, PVC tel örgü ve LED aydınlatma.",
            "FIBA Çizgileri ve Profesyonel Pota Montajı: 3.05 m nizami çember yüksekliğine sahip hidrolik veya sabit cam panyalı potaların montajı ve teslimat.",
          ],
        },
      ]}
      faq={[
        {
          q: "Nizami bir basketbol sahasının ölçüleri nedir?",
          a: "FIBA (Uluslararası Basketbol Federasyonu) resmi standartlarına göre basketbol sahası oyun alanı 28.00 × 15.00 m (420 m²)'dir. Çevresindeki en az 2.00 metrelik emniyet payıyla birlikte toplam proje alanı yaklaşık 32 × 19 m (608 m²) olmalıdır.",
        },
        {
          q: "Açık basketbol sahaları için hangi zemin tercih edilmelidir?",
          a: "Açık sahalar için en yaygın ve ekonomik çözüm UV dayanımlı akrilik kaplamadır. Oyuncu güvenliğini ve eklem sağlığını ön planda tutan okullar ve siteler için ise darbe emici EPDM tartan kauçuk zemin önerilmektedir.",
        },
        {
          q: "Basketbol potası montajı nasıl yapılır?",
          a: "Potalar, hatıl beton aşamasında zemine gömülen ankraj flanşlarına çelik cıvatalarla sabitlenir. 10–12 mm temperli cam panya ve yaylı esnek çemberler kullanılarak resmi standartlara tam uyum sağlanır.",
        },
        {
          q: "Basketbol sahası yapımı kaç günde tamamlanır?",
          a: "Hava şartlarına ve altyapı hazırlığına bağlı olarak standart bir açık basketbol sahası ortalama 2–4 hafta içinde anahtar teslim olarak teslim edilir.",
        },
      ]}
    />
  );
}
