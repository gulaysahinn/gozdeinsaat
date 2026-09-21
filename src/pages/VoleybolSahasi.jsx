import { COLORS } from "../theme";
import ServicePage from "../components/ServicePage";

export default function VoleybolSahasi() {
  return (
    <ServicePage
      meta={{
        title: "Voleybol ve Hentbol Sahası Yapımı | Gözde İnşaat",
        description:
          "18x9m standart ölçüde voleybol ve hentbol sahası yapımı. Sert zemin veya kum dolgulu seçenekler, file direği sistemi. Ücretsiz keşif ve teklif.",
        canonical: "https://www.gozdeinsaat.com/voleybol-sahasi-yapimi",
      }}
      badge="Voleybol ve Hentbol Sahası"
      badgeColor={COLORS.blue}
      h1="VOLEYBOL VE HENTBOL SAHASI YAPIMI"
      intro="Voleybol ve hentbol sahası yapımında uluslararası federasyon standartlarını
      esas alıyoruz. Okullar, belediyeler ve spor tesisleri için kapalı ya da açık,
      sert zemin ya da kum dolgulu seçeneklerle; file direği sistemleri dahil
      anahtar teslim voleybol sahası inşaatı gerçekleştiriyoruz."
      forWhom={[
        "İlk ve ortaokullar",
        "Üniversite spor tesisleri",
        "Belediye parkları",
        "Kamp & tatil köyleri",
        "Spor kulüpleri",
      ]}
      dimensions={[
        { label: "Saha uzunluğu", value: "18 m" },
        { label: "Saha genişliği", value: "9 m" },
        { label: "Çevre serbest alan (minimum)", value: "3 m" },
        { label: "File yüksekliği (kadın)", value: "2.24 m" },
        { label: "File yüksekliği (erkek)", value: "2.43 m" },
        { label: "Hücum çizgisi mesafesi", value: "3 m" },
        { label: "Hentbol sahası boyutu", value: "40 × 20 m" },
      ]}
      floors={[
        {
          name: "Akrilik Zemin (Sert Zemin)",
          pros: "Dayanıklı, yüksek kayma direnci, hem kapalı hem açık alanlarda uygulanabilir.",
          cons: "Sert yapısı uzun süre oynayan sporcuların eklemlerini zorlayabilir.",
          image: "/images/hizmetler/akrilikZeminTenisKortu.jpeg",
        },
        {
          name: "Kum Dolgulu Zemin",
          pros: "Plaj voleybolu için ideal, yumuşak düşüş yüzeyi.",
          cons: "Açık alanlarda uygulanır, kapalı salon için uygun değil.",
          image: "/images/hizmetler/zemin.jpg",
        },
        {
          name: "Suni Çim",
          pros: "Çok amaçlı sahalarla kombine edilebilir, estetik görünüm.",
          cons: "Profesyonel turnuva standardı gerektirmeyen tesisler için uygundur.",
          image: "/images/hizmetler/sentetikCimTenisKortu.jpg",
        },
      ]}
      factors={[
        "Saha tipi: sert zemin (akrilik/tartan) veya kum dolgulu",
        "Kapalı / açık alan farkı",
        "File direği sistemi tipi (seyyar / gömme / flanşlı)",
        "Aydınlatma sistemi dahil mi?",
        "Çevre güvenlik ağı ve tel örgü",
        "Alt zemin hazırlık durumu",
      ]}
      faqs={[
        {
          q: "Voleybol sahası ölçüleri nedir?",
          a: "Resmi voleybol sahası 18 m × 9 m boyutundadır. Çevre serbest alanlarla birlikte toplam yapım alanı en az 24 m × 15 m olmalıdır.",
        },
        {
          q: "Voleybol sahası kum mu sert zemin mi olmalı?",
          a: "Plaj voleybolu oynayacaksanız kum zemin şarttır. Salon voleybolu veya okul/belediye tesisleri için sert zemin (akrilik veya tartan) daha uzun ömürlü ve bakımı kolaydır.",
        },
        {
          q: "Hentbol sahası ölçüleri voleyboldan farklı mı?",
          a: "Evet. Hentbol sahası 40 m × 20 m boyutundadır; voleybol sahasının yaklaşık 4,5 katı büyüklüğündedir. Çok amaçlı zemin seçilirse her iki sporun çizgileri birlikte uygulanabilir.",
        },
        {
          q: "File direği nasıl monte edilir?",
          a: "Gömme flanşlı veya seyyar (ayaklı) olmak üzere iki tip uygulama yapılır. Kapalı salonlarda zemine gömme flanşlı tip, açık alanlarda ise beton kuyulara ankrajlı gömme tip tercih edilir.",
        },
      ]}
      relatedServices={[
        { label: "Tenis Kortu Yapımı", to: "/tenis-kortu-yapimi" },
        { label: "Basketbol Sahası Yapımı", to: "/basketbol-sahasi-yapimi" },
        { label: "Çok Amaçlı Saha Yapımı", to: "/cok-amacli-saha-yapimi" },
      ]}
    />
  );
}
