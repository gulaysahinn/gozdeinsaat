import { COLORS } from "../theme";
import ServicePage from "../components/ServicePage";

export default function TartanTenisKortu() {
  return (
    <ServicePage
      meta={{
        title: "Tartan Zemin Tenis Kortu Yapımı | Gözde İnşaat",
        description:
          "Tartan zemin tenis kortu yapımı. EPDM ve SBR kauçuk katmanlardan oluşan, esnek ve oyuncu dostu tartan tenis kortları. Ücretsiz keşif ve fiyat teklifi.",
        canonical: "https://www.gozdeinsaat.com/tartan-zemin-tenis-kortu-yapimi",
      }}
      badge="Tartan Zemin Tenis Kortu"
      badgeColor={COLORS.rust}
      h1="TARTAN ZEMİN TENİS KORTU YAPIMI"
      intro="Tartan zemin tenis kortları, oyuncuların sağlığını koruyan esnek yapısı ile öne çıkar. SBR ve EPDM kauçuk granüllerinin poliüretan bağlayıcılarla karıştırılarak uygulanmasıyla elde edilen bu zemin, darbe emici özelliği sayesinde uzun süreli oyunlarda eklem yorgunluğunu en aza indirir. Hem açık hem kapalı kortlar için ideal bir profesyonel yüzey sunar."
      forWhom={[
        "Özel spor kulüpleri",
        "Eğitim kurumları ve kampüsler",
        "Oteller ve tatil köyleri",
        "Lüks konut projeleri ve siteler",
        "Belediye spor tesisleri",
      ]}
      dimensions={[
        { label: "Genel yapım alanı", value: "18 × 36 m" },
        { label: "Oyun alanı uzunluğu", value: "23.77 m" },
        { label: "Oyun alanı genişliği (çiftler)", value: "10.97 m" },
        { label: "Zemin kalınlığı", value: "8 mm - 13 mm (standart)" },
      ]}
      floors={[]}
      factors={[
        "Kort boyutları ve çevre tel örgü yüksekliği",
        "Tartan zemin kalınlığı (SBR + EPDM oranları)",
        "Aydınlatma sistemi (LED projektör sayısı ve gücü)",
        "Altyapı (asfalt veya beton zemin) durumu",
        "Projenin uygulanacağı konum",
      ]}
      faqs={[
        {
          q: "Tartan zemin tenis kortu için neden tercih edilmeli?",
          a: "Darbe emici özelliği en yüksek zeminlerden biridir. Oyuncuların diz ve bileklerine binen yükü azaltarak sakatlık riskini düşürür ve konforlu bir oyun sunar.",
        },
        {
          q: "Tartan zemin bakımı zor mudur?",
          a: "Hayır. Yüzeydeki yaprak veya tozların düzenli olarak süpürülmesi ve basınçlı su (aşırı yüksek olmayan) ile yıkanması yeterlidir.",
        },
        {
          q: "Tartan zemin açık hava koşullarına dayanıklı mı?",
          a: "Kesinlikle. EPDM katmanı UV ışınlarına karşı dirençlidir, renk solması yapmaz ve yağışlı havalarda su geçirgen/su tutmaz yapısı sayesinde hızlı kurur.",
        },
      ]}
      relatedServices={[
        { label: "Tenis Kortu Yapımı", to: "/tenis-kortu-yapimi" },
        { label: "Sentetik Çim Tenis Kortu", to: "/sentetik-cim-tenis-kortu-yapimi" },
        { label: "Basketbol Sahası Yapımı", to: "/basketbol-sahasi-yapimi" },
      ]}
    />
  );
}
