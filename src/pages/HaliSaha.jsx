import React from "react";
import { COLORS } from "../theme";
import ServicePage from "../components/ServicePage";

const GREEN = "#5A9E6F";

export default function HaliSaha() {
  return (
    <ServicePage
      meta={{
        title: "Halı Saha Yapımı ve Fiyatları | Gözde İnşaat",
        description:
          "5'e 5, 7'ye 7 ve 11'e 11 formatlarda sentetik çim halı saha yapımı. FIFA kalite standartlarında, aydınlatma ve çevre sistemi dahil anahtar teslim hizmet.",
        canonical: "https://www.gozdeinsaat.com/hali-saha-yapimi",
      }}
      badge="Halı Saha"
      badgeColor={GREEN}
      h1="HALI SAHA YAPIMI"
      intro="Halı saha yapımında uzun yıllık deneyimimizle; 5'e 5, 7'ye 7 ve 11'e 11 farklı
      formatlarda, FIFA onaylı sentetik çim sistemleriyle tesisler inşa ediyoruz.
      Zemin hazırlığından sentetik çim seçimine, aydınlatma sistemi montajından
      çevre file ve tel örgüye kadar tüm süreci kendi ekibimizle yönetiyoruz."
      forWhom={[
        "Halı saha işletmecileri",
        "Spor kulüpleri",
        "Belediyeler & gençlik merkezleri",
        "Okul ve üniversiteler",
        "Tatil köyleri & oteller",
      ]}
      dimensions={[
        { label: "5'e 5 format (uzunluk)", value: "25–30 m" },
        { label: "5'e 5 format (genişlik)", value: "16–18 m" },
        { label: "7'ye 7 format (uzunluk)", value: "45–50 m" },
        { label: "7'ye 7 format (genişlik)", value: "30–35 m" },
        { label: "11'e 11 format (uzunluk)", value: "90–120 m" },
        { label: "11'e 11 format (genişlik)", value: "45–90 m" },
        { label: "Kale ağzı çizgisi (standart)", value: "5 × 5 m" },
      ]}
      floors={[
        {
          name: "Sentetik Çim — Kum + SBR Granül Dolgulu",
          pros: "FIFA One Star / Two Star uyumlu, doğal çim hissi, uzun ömürlü.",
          cons: "Yaz aylarında yüzey ısınabilir; düzenli sulama ve bakım gerektirir.",
          image: "/images/hizmetler/haliSaha.jpg",
        },
        {
          name: "Sentetik Çim — Kum Dolgulu (Kısa Hav)",
          pros: "Daha düşük maliyet, az bakım, hızlı kurulum.",
          cons: "Top yuvarlanma performansı granül dolgulu sistemlere göre biraz daha düşük olabilir.",
          image: "/images/hizmetler/sentetikCimTenisKortu.jpg",
        },
        {
          name: "Sentetik Çim — EPDM Granül Dolgulu",
          pros: "Amortisörlü zemin, sporcu güvenliği için ideal, renk seçeneği çeşitli.",
          cons: "SBR granüle kıyasla ilk yatırım maliyeti daha yüksektir.",
          image: "/images/hizmetler/zemin.jpg",
        },
      ]}
      factors={[
        "Saha formatı (5'e 5 / 7'ye 7 / 11'e 11)",
        "Sentetik çim hav yüksekliği ve dolgu tipi",
        "Alt zemin durumu ve beton/asfalt hazırlığı",
        "LED aydınlatma sistemi (direk sayısı ve yüksekliği)",
        "Çevre file ağı yüksekliği ve tipi",
        "Soyunma odası ve tesis yapımı dahil mi?",
        "Yapım yapılacak ilin uzaklığı",
      ]}
      faqs={[
        {
          q: "Halı saha kaç yılda bir yenilenmesi gerekir?",
          a: "Kaliteli sentetik çim, düzenli bakım ve sulama ile 8-12 yıl sorunsuz kullanılabilir. Ticari yoğun kullanımda bu süre 6-8 yıla inebilir.",
        },
        {
          q: "Halı saha için zemin şartı nedir?",
          a: "Beton veya asfalt alt zemin üzerine uygulama yapılır. Mevcut zemin yoksa önce zemin hazırlığı (hatıl betonu + asfalt) yapılması gerekir.",
        },
        {
          q: "FIFA onaylı sentetik çim mi kullanılır?",
          a: "Evet, FIFA Quality veya FIFA Quality Pro sertifikalı sentetik çim sistemleri kullanıyoruz. Sertifika gerektiren tesisler için belgeli çim seçenekleri sunulmaktadır.",
        },
        {
          q: "Halı saha aydınlatması için kaç watt projektör gerekir?",
          a: "5'e 5 format için genellikle 4 × 500-1000W LED projektör yeterlidir. 7'ye 7 ve 11'e 11 formatlarda direk yüksekliği ve sayısı ihtiyaca göre artırılır.",
        },
        {
          q: "Halı saha yapımı ne kadar sürer?",
          a: "Alt zemin hazır ise sentetik çim uygulaması ve çevre sistemi dahil ortalama 2-3 hafta içinde tamamlanır. Alt zemin hazırlığı gerekiyorsa bu süre uzar.",
        },
      ]}
      relatedServices={[
        { label: "Çok Amaçlı Saha Yapımı", to: "/cok-amacli-saha-yapimi" },
        { label: "Tenis Kortu Yapımı", to: "/tenis-kortu-yapimi" },
        { label: "Basketbol Sahası Yapımı", to: "/basketbol-sahasi-yapimi" },
      ]}
      detailedSections={[
        {
          type: "highlight",
          title: "Halı Saha Çeşitleri",
          items: [
            "Açık Halı Saha Yapımı",
            "Brandalı Kapalı Halı Saha",
            "Sac Kaplama Kapalı Halı Saha",
            "PVC Kaplama Kapalı Halı Saha",
            "Profesyonel Suni Çim (FIFA Star)",
          ],
        },
        {
          type: "intro",
          title: "Açık Halı Saha Yapımı",
          body: "Özellikle yaz aylarında sıkça tercih edilen spor alanlardan birisi de açık halı sahalardır. Etrafı 6-7m yüksekliğinde, 3,5mm kalınlığında PVC kaplama tel örgü ile çevrilmiş olan ve özel halı saha aydınlatmalarının kullanıldığı bu alanlarda gece saatlerinde de maç yapılması sağlanmaktadır. Halı saha aydınlatmaları 400W halide projektör veya 150-200W LED projektör olarak tercih edilebilmektedir. Açık halı sahalarda 55mm suni çim tercih edilir.",
        },
        {
          type: "intro",
          title: "Kapalı Halı Saha Yapımı",
          body: "En çok tercih edilen sistemlerden birisidir. Kardan, yağmurdan veya soğuktan korunmanız amacıyla kış aylarında tercih edebileceğiniz kapalı spor alanlarıdır. Halı sahanın üstünün tamamen kapatıldığı bu alanlarda rüzgarın da geçmeyeceğini görebilirsiniz. Karlı bölgelerde sac kaplama kapalı halı saha yapımını öneriyoruz. Kapalı halı saha yapımı için statik hesabı yapılmış çelik konstrüksiyon kullanılmalıdır.",
        },
        {
          type: "grid",
          title: "FIFA Star Profesyonel Çim Özellikleri",
          items: [
            "60mm Monofilament halı kullanılır",
            "Monofilament halı omurgalı olmalıdır",
            "Halı altına keçe yerine şokped serilir",
            "Granül miktarı 14-15 kg/m² civarında olmalıdır",
            "Yeşil veya gri EPDM granül kullanılır",
            "FIFA 1 Star ve FIFA 2 Star belgesi alınabilir",
          ],
          cols: 2,
        },
        {
          type: "steps",
          title: "Halı Saha Suni Çim Bakımı",
          items: [
            "Suni çim zeminin periyodik olarak fırçalanması (motorlu fırçalama veya manuel fırçalama)",
            "Ortalama 6 ayda bir eksildikçe granül eklenmesi ve fırçalanması",
            "Sıcak günlerde gün batımından sonra sulama işlemi yapılması",
            "Saha içerisinde bulunan cam parçaları, sigara izmaritleri, yapraklar, çakıl gibi yabancı maddelerden temizlenme",
          ],
        },
      ]}
    />
  );
}
