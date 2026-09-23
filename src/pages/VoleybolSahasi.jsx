import { SERVICES } from "../data/content";
import ServicePage from "../components/ServicePage";

export default function VoleybolSahasi() {
  const service = SERVICES.find((s) => s.tag === "Voleybol");

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
