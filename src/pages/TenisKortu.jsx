import { SERVICES } from "../data/content";
import ServicePage from "../components/ServicePage";

const tennisComparisonTable = {
  badge: "Mühendislik & Şartname Karşılaştırması",
  title: "Açık ve Kapalı Tenis Kortu Teknik Özellik Tablosu",
  subtitle:
    "Yaz-kış iklim şartları, kullanım amacı ve tesis tipine göre açık tel örgülü kortlar ile kapalı çelik konstrüksiyonlu tenis kortlarının teknik parametreleri.",
  rows: [
    {
      feature: "Zemin Seçenekleri",
      openCourt: "Suni Çim, Akrilik, Tartan, Toprak, Doğal Çim",
      indoorCourt: "Suni Çim, Akrilik, Tartan, PVC",
    },
    {
      feature: "Çevre & Konstrüksiyon",
      openCourt: "PVC kaplı tel örgü, asgari 4 m yükseklik",
      indoorCourt: "Çelik konstrüksiyon: ana kolonlar 3–4 m, toplam yükseklik 10–11 m",
    },
    {
      feature: "Aydınlatma Sistemi",
      openCourt: "150–200W LED projektör",
      indoorCourt: "150–200W LED projektör",
    },
    {
      feature: "Saha Ölçüsü",
      openCourt: "18 × 36 m = 648 m²",
      indoorCourt: "18 × 36 m = 648 m²",
    },
    {
      feature: "Tenis Filesi",
      openCourt: "12,8 m genişlik, 1,07 m yükseklik (orta bant 91 cm)",
      indoorCourt: "Aynı ölçüler (12,8 m genişlik, 1,07 m yükseklik, orta bant 91 cm)",
    },
  ],
};

export default function TenisKortu() {
  const service = SERVICES.find((s) => s.tag === "Tenis");

  if (!service) return null;

  return (
    <ServicePage
      service={service}
      comparisonTable={tennisComparisonTable}
      relatedServices={[
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
          title: "Tenis Kortu Yapım Aşamaları",
          items: [
            "Hafriyat ve Zemin Tesviyesi: Lazerli nivo ile kot alma, bitkisel toprak sıyırma ve %0.5–%0.8 tek yöne yağmur tahliye meyili verilmesi.",
            "Çevre Hatıl Betonu ve Drenaj Sistemi: Kort çevresine 30×50 cm ebadında demir donatılı çevre hatılı dökümü ve drenaj künk boruları döşenmesi.",
            "Mekanik Mıcır Sıkıştırma ve Asfalt/Beton: Silindirle mıcır sıkıştırma ardından 6 cm binder + 4 cm aşınma asfaltı veya C25/30 perdahlı helikopterli beton tabanı.",
            "Zemin Kaplama ve Katman Uygulamaları: Epoksi/akrilik astar, resurfacer dolgu, isteğe bağlı Cushion darbe emici ve 2 kat renkli UV dayanımlı akrilik boya.",
            "Çevre Tel Çit ve LED Aydınlatma: 4.00 m yüksekliğinde daldırma galvaniz boru konstrüksiyonu, PVC kaplı helezon tel örgü ve 300–500 Lux projektörler.",
            "ITF Nizami Çizgileri ve File Montajı: Uluslararası federasyon onaylı beyaz tenis çizgilerinin çizimi, krikolu file direkleri montajı ve teslimat.",
          ],
        },
      ]}
      faq={[
        {
          q: "Tenis kortu zeminleri hangi ana kategorilere ayrılır?",
          a: "Tenis kortu zeminleri temel olarak iki ana gruba ayrılır: Doğal Tenis Kortu Zemini (Doğal Çim ve Toprak Kort) ve Suni Tenis Kortu Zemini (Akrilik Zemin, Tartan EPDM Zemin, Suni Çim Zemin, PVC Zemin ve Poliüretan Zemin). Gözde İnşaat olarak, dört mevsim yüksek mukavemet ve düşük bakım ihtiyacı sağlayan sertifikalı sentetik/suni zemin sistemlerini anahtar teslim uyguluyoruz.",
        },
        {
          q: "Açık ve kapalı tenis kortlarında standart yükseklik ve tel örgü ölçüleri nelerdir?",
          a: "Açık tenis kortlarında çevre tel örgü yapısı asgari 4.00 metre yüksekliğindeki daldırma galvanizli ve PVC kaplı konstrüksiyona monte edilir. Çelik konstrüksiyon kapalı tenis kortlarında ise yan ana kolonlar 3–4 metre, çatı makaslarıyla birlikte toplam orta tepe yüksekliği 10–11 metre olarak inşa edilmektedir.",
        },
        {
          q: "Standart bir tenis kortu yapımı ortalama ne kadar sürer?",
          a: "Hava şartlarına ve arazi altyapı durumuna bağlı olarak standart 18×36 m ebadındaki tenis kortu projeleri hafriyattan çizgi boyasına kadar ortalama 3–4 hafta içinde anahtar teslim olarak tamamlanmaktadır.",
        },
        {
          q: "Akrilik zemin ile Tartan (EPDM) zemin arasındaki temel fark nedir?",
          a: "Akrilik sert kortlar dünya turnuvalarının en yaygın zeminidir; top sekme hızı dengeli, bakımı kolay ve ekonomiktir. EPDM kauçuk tartan zeminler ise 13 mm toplam kalınlığıyla yüksek şok emiciliğe sahiptir, sporcu diz ve eklem sağlığını maksimum düzeyde korur.",
        },
        {
          q: "Tenis kortu zemin kaplamasının ömrü ne kadardır?",
          a: "Doğru eğim ve drenaj altyapısıyla uygulanan akrilik kaplamalar yoğun kullanımda 5–7 yıl boyunca rengini ve kaymazlık dokusunu korur. Bu sürenin sonunda sadece üst kat boya ve çizgi yenilemesi (re-topping) yapılarak kort ilk günkü haline getirilir.",
        },
        {
          q: "Ücretsiz keşif ve projelendirme hizmetiniz neleri kapsar?",
          a: "Mühendislerimiz arsanızı yerinde ziyaret ederek zemin eğimi, toprak sertliği, rüzgar yönü ve aydınlatma altyapısını inceler; 24 saat içinde ihtiyacınıza en uygun zemin türünü ve net maliyet tablosunu rapor olarak sunar.",
        },
      ]}
    />
  );
}
