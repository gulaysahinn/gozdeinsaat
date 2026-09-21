import { COLORS } from "../theme";
import ServicePage from "../components/ServicePage";

export default function BasketbolSahasi() {
  return (
    <ServicePage
      meta={{
        title: "Basketbol Sahası Yapımı ve Fiyatları | Gözde İnşaat",
        description:
          "28x15m FIBA standart ölçüde akrilik, suni çim ve tartan zeminli basketbol sahası yapımı. 500+ tamamlanmış proje, anahtar teslim hizmet. Ücretsiz keşif.",
        canonical: "https://www.gozdeinsaat.com/basketbol-sahasi-yapimi",
      }}
      badge="Basketbol Sahası"
      badgeColor={COLORS.orange}
      h1="BASKETBOL SAHASI YAPIMI"
      intro="Gözde İnşaat; FIBA standartlarında basketbol sahası yapımında 1988'den bu yana 500'ü
      aşkın projeye imza atmıştır. Açık sahalardan profesyonel spor salonlarına, okullardan
      özel sitelere kadar farklı bütçe ve ihtiyaçlara uygun çözümler sunuyoruz. Zemin
      hazırlığı, kaplama, çizgi çalışması ve pota montajı dahil anahtar teslim hizmet."
      forWhom={[
        "İlk ve ortaokullar",
        "Üniversite kampüsleri",
        "Belediye spor alanları",
        "Özel siteler & toplu konutlar",
        "Spor kulüpleri",
        "Fabrika & kurumsal tesisler",
      ]}
      dimensions={[
        { label: "Uzunluk (FIBA standardı)", value: "28 m" },
        { label: "Genişlik (FIBA standardı)", value: "15 m" },
        { label: "3 sayılık çizgi mesafesi", value: "6.75 m" },
        { label: "Serbest atış mesafesi", value: "4.60 m" },
        { label: "Potaların karşılıklı mesafesi", value: "28 m" },
        { label: "Pota yüksekliği", value: "3.05 m" },
        { label: "Çevre serbest alan (minimum)", value: "2 m" },
      ]}
      floors={[
        {
          name: "Akrilik Zemin",
          pros: "Dayanıklı, kayma direnci yüksek, bakım kolaylığı, çeşitli renk seçenekleri.",
          cons: "Sert zeminin uzun vadede eklem üzerinde etkisi olabilir.",
          image: `${import.meta.env.BASE_URL}images/hizmetler/akrilikZeminTenisKortu.jpeg`,
        },
        {
          name: "Suni Çim",
          pros: "Yumuşak yüzey, estetik görünüm, çocuk tesisleri için güvenli.",
          cons: "Profesyonel kullanımda akriliğe kıyasla daha fazla bakım gerektirir.",
          image: `${import.meta.env.BASE_URL}images/hizmetler/sentetikCimTenisKortu.jpg`,
        },
        {
          name: "Tartan (EPDM / SBR)",
          pros: "Amortisörlü yapı, sporcuların eklem sağlığını korur, uzun ömürlü.",
          cons: "Diğer zemin tiplerine göre ilk yatırım maliyeti biraz daha yüksektir.",
          image: `${import.meta.env.BASE_URL}images/hizmetler/tartanZeminTenisKortu.jpg`,
        },
        {
          name: "Parke (Kapalı Salon)",
          pros: "Profesyonel kullanım için ideal, FIBA A sertifikalı seçenekler mevcut.",
          cons: "Yalnızca kapalı alanlarda uygulanabilir, açık hava kullanımına uygun değil.",
          image: `${import.meta.env.BASE_URL}images/hizmetler/zemin.jpg`,
        },
      ]}
      factors={[
        "Zemin tipi (akrilik, tartan, suni çim, parke)",
        "Açık / kapalı saha (spor salonu veya çelik konstrüksiyon)",
        "Alt zemin durumu ve hazırlık ihtiyacı",
        "LED aydınlatma sistemi dahil mi?",
        "Çevre tel örgü sistemi yüksekliği ve tipi",
        "Pota sayısı ve tipi (seyyar / sabit)",
        "Yapım yapılacak ilin uzaklığı",
      ]}
      faqs={[
        {
          q: "Basketbol sahası ölçüleri kaç metredir?",
          a: "FIBA standardına göre resmi basketbol sahası 28 m × 15 m'dir. Okul ve amatör kullanım için bazen 26 m × 14 m ölçüsünde yapım da yapılmaktadır.",
        },
        {
          q: "Basketbol sahası yapımı ne kadar sürer?",
          a: "Zemin hazırlığı da dahil olmak üzere tek bir açık basketbol sahası ortalama 2-4 haftada tamamlanır. Kapalı salonlarda süre çelik konstrüksiyon nedeniyle uzar.",
        },
        {
          q: "Basketbol sahası zemini için akrilik mi poliüretan mı daha iyi?",
          a: "Açık saha için akrilik zemin daha uzun ömürlü ve ekonomiktir. Kapalı salon için poliüretan veya parke zemin tercih edilmeli; eklem sağlığını daha iyi korur.",
        },
        {
          q: "Kapalı basketbol sahası maliyeti neye göre değişir?",
          a: "Çelik konstrüksiyon boyutu, zemin tipi, aydınlatma sistemi ve klima ihtiyacı maliyetin başlıca belirleyicileridir. Kesin fiyat için ücretsiz keşif talebinde bulunabilirsiniz.",
        },
      ]}
      relatedServices={[
        { label: "Tenis Kortu Yapımı", to: "/tenis-kortu-yapimi" },
        { label: "Voleybol Sahası Yapımı", to: "/voleybol-sahasi-yapimi" },
        { label: "Çok Amaçlı Saha Yapımı", to: "/cok-amacli-saha-yapimi" },
      ]}
      detailedSections={[
        {
          type: "highlight",
          title: "Basketbol Sahası Çeşitleri",
          items: [
            "Açık Basketbol Sahası (Tel örgü ile çevrilmiş)",
            "Kapalı Basketbol Sahası (Beton yapı)",
            "Kapalı Basketbol Sahası (Çelik konstrüksiyon)",
          ],
        },
        {
          type: "intro",
          title: "Akrilik Zemin Basketbol Sahası",
          body: "Akrilik Zemin, açık ve kapalı basketbol sahası uygulamaları için çabuk kuruyan, UV ışınlarına dayanıklı ve her türlü hava koşullarına uygun bir sistemdir. Akrilik zemin 2mm veya 3mm olarak uygulanabilmektedir. Asfalt veya beton zeminler üzerine uygulanan yüzey dolguları ve akrilik kaplama malzemeleri ile son kat akrilik boyadan oluşmaktadır. Sert zeminlere esneklik kazandırmak için Cushion Akrilik System da tercih edilebilir; bu sistemde akrilik kauçuk tozu dolgulu ara katman eklenir.",
        },
        {
          type: "intro",
          title: "Tartan Zeminli Basketbol Sahası",
          body: "Tartan zemin sistem iki tabakadan oluşup, su geçirgen özelliğe sahiptir. EPDM tabaka üstte, SBR granül tabaka alttadır. Granül tabakalar binder denen madde ile sıcak olarak karıştırılır. Tartan zemin genellikle 8mm SBR + 5mm EPDM olarak tatbik edilir. Finişer denilen makine ile yerinde döküm sıcak olarak uygulanır.",
        },
        {
          type: "grid",
          title: "Parke & Poliüretan Zemin Özellikleri",
          items: [
            "Yenilikçi tasarım ve enerji geri kazanımı",
            "Mükemmel kayma direnci ve çizilme mukavemeti",
            "Topun sekme özelliği sporcuların ergonomik ihtiyaçlarına yanıt verir",
            "Düzenli kalite testlerinden geçen güvenilir zemin",
            "Poliüretan zemin iç ve dış mekanlarda tercih edilebilir",
            "Çok amaçlı kullanım için de uygun seçenekler mevcuttur",
          ],
          cols: 2,
        },
      ]}
    />
  );
}
