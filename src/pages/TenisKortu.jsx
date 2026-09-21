import { COLORS } from "../theme";
import ServicePage from "../components/ServicePage";

export default function TenisKortu() {
  return (
    <ServicePage
      meta={{
        title: "Tenis Kortu Yapımı ve Fiyatları | Gözde İnşaat",
        description:
          "Akrilik, tartan (EPDM) ve suni çim zeminle ITF standartlarında tenis kortu yapımı. 18×36m açık/kapalı kort seçenekleri. İstanbul ve Türkiye geneli, ücretsiz keşif.",
        canonical: "https://www.gozdeinsaat.com/tenis-kortu-yapimi",
      }}
      badge="Tenis Kortu"
      badgeColor={COLORS.rust}
      h1="TENİS KORTU YAPIMI"
      intro="Gözde İnşaat olarak 1988'den bu yana ITF (Uluslararası Tenis Federasyonu) standartlarında
      tenis kortu yapımı gerçekleştiriyoruz. Zemin hazırlığından LED aydınlatmaya, tel örgüden
      çizgi çalışmasına kadar tüm süreci kendi ekibimizle yönetiyor; sahayı anahtar teslim
      teslim ediyoruz. Okullar, özel siteler, oteller ve spor kulüpleri başlıca müşteri kitlemizdir."
      forWhom={[
        "Özel siteler & villar",
        "Oteller & tatil köyleri",
        "Spor kulüpleri",
        "Okullar & üniversiteler",
        "Belediyeler",
      ]}
      dimensions={[
        { label: "Tek oyuncular (uzunluk)", value: "23.77 m" },
        { label: "Çiftler (uzunluk)", value: "23.77 m" },
        { label: "Tek oyuncular (genişlik)", value: "8.23 m" },
        { label: "Çiftler (genişlik)", value: "10.97 m" },
        { label: "Genel yapım alanı (açık kort)", value: "18 × 36 m" },
        { label: "Servis hattı mesafesi", value: "6.40 m" },
        { label: "Ağ yüksekliği (orta)", value: "91.4 cm" },
        { label: "Ağ yüksekliği (direkler)", value: "107 cm" },
      ]}
      floors={[
        {
          name: "Akrilik Zemin",
          pros: "Uzun ömürlü, düşük bakım maliyeti, ITF sertifikalı, renk seçeneği çeşitli.",
          cons: "Yüzeyi sert olduğundan uzun süre oyunda eklem zorlanması yaşanabilir.",
          image: "/images/hizmetler/akrilikZeminTenisKortu.jpeg",
        },
        {
          name: "Tartan (EPDM / SBR)",
          pros: "Amortisörlü yapısı sayesinde dizlere daha az yük biner; kapalı kortlarda ideal.",
          cons: "Doğrudan güneş altında renk solması olabilir, UV dayanımlı kaplama önerilir.",
          image: "/images/hizmetler/tartanZeminTenisKortu.jpg",
        },
        {
          name: "Suni Çim",
          pros: "Estetik görünüm, yumuşak zemin, okul ve site projelerinde çok tercih edilir.",
          cons: "Profesyonel turnuva standardı gerektiren projelerde tercih edilmez.",
          image: "/images/hizmetler/sentetikCimTenisKortu.jpg",
        },
      ]}
      factors={[
        "Sahalar arası mesafe ve çevre güvenlik tampon alanı",
        "Zemin tipi seçimi (akrilik, tartan, suni çim)",
        "Açık / kapalı (çelik konstrüksiyon) kort",
        "LED aydınlatma sistemi dahil mi?",
        "Tel örgü yüksekliği ve cinsi",
        "Alt zemin durumu (toprak, asfalt, beton)",
        "Yapım yapılacak ilin uzaklığı",
      ]}
      faqs={[
        {
          q: "Tenis kortu ölçüleri kaç metredir?",
          a: "ITF standartlarına göre çiftler maçı için kort sahası 10.97 m × 23.77 m'dir. Ancak çevre güvenlik alanlarıyla birlikte toplam yapım alanı genellikle 18 × 36 m olarak planlanır.",
        },
        {
          q: "Tenis kortu yapımı ne kadar sürer?",
          a: "Arazi ve zemin durumuna göre değişmekle birlikte, tek bir açık kort için ortalama 3-6 hafta arasında tamamlanır. Kapalı kortlarda bu süre çelik konstrüksiyon nedeniyle uzayabilir.",
        },
        {
          q: "Açık ve kapalı tenis kortu arasındaki fark nedir?",
          a: "Açık kortlar doğal hava koşullarına maruz kalır, kış aylarında kullanım kısıtlı olabilir. Kapalı kortlar (çelik konstrüksiyon veya spor salonu) tüm yıl boyunca kullanılabilir ancak ilk yatırım maliyeti daha yüksektir.",
        },
        {
          q: "En dayanıklı tenis kortu zemini hangisidir?",
          a: "Doğru bakımla akrilik zemin 15-20 yıl sorunsuz kullanılabilir. Tartan (EPDM) zemin de uzun ömürlü olmakla birlikte akriliğe kıyasla biraz daha pahalıdır.",
        },
        {
          q: "Tenis kortu aydınlatması için kaç lüks gerekir?",
          a: "Amatör kullanım için 200-300 lüx, profesyonel kullanım için 500+ lüx önerilir. LED projektör sistemi hem daha az enerji tüketir hem de daha uzun ömürlüdür.",
        },
      ]}
      relatedServices={[
        { label: "Basketbol Sahası Yapımı", to: "/basketbol-sahasi-yapimi" },
        { label: "Voleybol Sahası Yapımı", to: "/voleybol-sahasi-yapimi" },
        { label: "Çok Amaçlı Saha Yapımı", to: "/cok-amacli-saha-yapimi" },
      ]}
      detailedSections={[
        {
          type: "highlight",
          title: "Tenis Kortu Zemin Kaplama Çeşitleri",
          items: [
            "Akrilik Zemin (Standart & Cushion)",
            "Tartan Zemin (EPDM + SBR)",
            "Sentetik Suni Çim Zemin",
            "Toprak Zemin",
            "Doğal Çim Zemin",
          ],
        },
        {
          type: "intro",
          title: "Açık Tenis Kortu Yapımı",
          body: "Profesyonel tenis karşılaşmaları genellikle açık ve tribünlü kortlarda yapılmaktadır. Açık kortlar için tribün çeşitlerimiz portatif veya sabit tribün olarak ikiye ayrılmaktadır. Açık kortlar özel bir talep olmadıkça 4m yüksekliğinde tel örgü ile çevrilmiş olarak yapılmaktadır. En popüler zemin çeşidi standart akrilik zemindir. Tenis kortu ölçüleri 18×36m standart boyuttadır.",
        },
        {
          type: "intro",
          title: "Kapalı Tenis Kortu Yapımı",
          body: "Kapalı tenis kortu yapımı tercih eden müşterilerimiz genellikle ticari amaçlı tenis oynatan işletmeler ve tenis kulübü sahibi olan kişilerdir. Günün her saatinde, güneşten veya kış şartlarından etkilenmeden tenis oynama imkânı sunan bu kortlar, çelik konstrüksiyon olarak inşa edilmektedir. Çatı kaplaması olarak branda veya PVC kaplama ürünleri kullanılır.",
        },
        {
          type: "steps",
          title: "Tartan Zemin Tenis Kortu Yapım Aşamaları",
          items: [
            "Hafriyat ve saha tesviyesi: Zemin hafriyatı alınarak düz hale getirilir, çevre hatıl kalıbı için temel kazılır.",
            "Çevre Hatıl Betonu: Q8 ve Q12 demirlerden hasır yapılarak beton dökülür.",
            "Çevre direkleri ve tel çit işleri: Ankraj borularına dikey direkler kaynaklanır, tüm konstrüksiyon monte edilir.",
            "Aydınlatma ve elektrik: Merdivenli direkler üzerine projektörler monte edilir, elektrik tesisatı döşenir.",
            "Tartan zemin uygulaması: Önce astar, ardından SBR zemin ve son olarak EPDM tartan zemin katmanı uygulanır.",
            "Çizgileme: Ölçülere uygun tenis oyun çizgileri çizilerek kort kullanıma hazır hale getirilir.",
          ],
        },
        {
          type: "grid",
          title: "Akrilik Zemin Tenis Kortu Özellikleri",
          items: [
            "Standart Akrilik veya Cushion Akrilik zemin seçeneği",
            "UV ışınlarına dayanıklı son kat akrilik boya",
            "Beton veya asfalt alt zemin üzerine uygulanır",
            "Cushion sistemde ara katman eklem sağlığını korur",
            "Hızlı kuruyan ve düşük bakım gerektiren yüzey",
            "Renkli çizgileme ile farklı spor alanları işaretlenebilir",
          ],
          cols: 2,
        },
        {
          type: "steps",
          title: "Sentetik Çim Tenis Kortu Yapım Aşamaları",
          items: [
            "Betonlama işlemi yapılmış zemin üzerine çim halı uygulaması yapılır.",
            "Suni çim halının ek yerlerine çift kompenantlı poliüretan tutkal sürülmüş helmetin bezi yerleştirilir.",
            "Kort çizgileri proje sahibinin istek ve ihtiyaçlarına uygun olarak beyaz ya da sarı renkte kesilip yerleştirilir.",
            "Özel silis kumundan üretilen tenis kortu kumu fırçalama makinesiyle suni çim üzerine iyice yedirilir.",
            "26mm hav boylu halı modeli en çok tercih edilen seçenektir; 15mm–30mm arası modeller mevcuttur.",
          ],
        },
      ]}
    />
  );
}
