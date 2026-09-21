import { COLORS } from "../theme";

export const SERVICES = [
  {
    tag: "Tenis",
    color: COLORS.rust,
    title: "Tenis kortu",
    spec: "18 × 36 m",
    image: `${import.meta.env.BASE_URL}images/hizmetler/tenisKortuYapimi.jpg`,
    imageAlt: "İstanbul tenis kortu yapımı — Gözde İnşaat",
    desc: "Akrilik, tartan (EPDM) ve suni çim zemin seçenekleri, ITF standartlarında açık ve çelik konstrüksiyon kapalı kort yapımı.",
    detail:
      "Çevre hatıl betonu, mıçır dolgu ve asfalt katmanlarının ardından seçilen zemin uygulanır. Kort çevresi tel örgü ve LED aydınlatma sistemiyle tamamlanır.",
    to: "/tenis-kortu-yapimi",
    forWho: "Kulüp · Otel · Okul · Site",
    deliveryTime: "3–4 hafta",
    floors: [
      {
        name: "Akrilik Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/akrilikZeminTenisKortu.jpeg`,
        badges: ["Ekonomik", "Kolay Bakım", "UV Dayanıklı"],
        badgeColors: ["accent", "warm", "blue"],
        forWho: "Okul, belediye, açık kort",
        desc: "Beton veya asfalt üzerine uygulanan, çabuk kuruyan UV dayanıklı sistem. Standart ve Cushion (amortisörlü) olmak üzere iki çeşidi mevcuttur.",
      },
      {
        name: "Tartan (EPDM) Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/tartanZeminTenisKortu.jpg`,
        badges: ["Uzun Ömürlü", "Esnek", "Profesyonel"],
        badgeColors: ["accent", "warm", "warm"],
        forWho: "Kulüp, otel, kapalı salon",
        desc: "8mm SBR + 5mm EPDM kauçuk katmanlardan oluşan, yüksek esneklikte sentetik zemin. Renk çeşitliliği ve dayanıklılığıyla tercih edilen premium seçenek.",
      },
      {
        name: "Suni Çim Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/tenisKortuYapimi.jpg`,
        badges: ["Çok Amaçlı", "Uygun Maliyet", "Kolay Bakım"],
        badgeColors: ["blue", "accent", "accent"],
        forWho: "Okul, site, amatör kullanım",
        desc: "15mm–30mm hav boyunda kum dolgulu suni çim halı. Tenis kortunda genellikle 26mm model tercih edilir. Hem açık hem kapalı alanlarda uygulanabilir.",
      },
    ],
  },
  {
    tag: "Basketbol",
    color: COLORS.orange,
    title: "Basketbol sahası",
    spec: "28 × 15 m",
    image: `${import.meta.env.BASE_URL}images/hizmetler/basketbolSahasi.jpg`,
    imageAlt: "Basketbol sahası yapımı — Gözde İnşaat",
    desc: "Akrilik, suni çim ve tartan zemin seçenekleri; 500'den fazla tamamlanmış sahayla açık ve kapalı uygulama.",
    detail:
      "Açık sahalar tel örgü ile çevrilir, kapalı sahalar spor salonu veya çelik konstrüksiyon olarak inşa edilir. Parke zemin profesyonel kapalı saha uygulamaları için idealdir.",
    to: "/basketbol-sahasi-yapimi",
    forWho: "Okul · Site · Spor Kulübü · Belediye",
    deliveryTime: "2–4 hafta",
    floors: [
      {
        name: "Akrilik Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/akrilikZeminTenisKortu.jpeg`,
        badges: ["Ekonomik", "UV Dayanıklı", "Hızlı Kurulum"],
        badgeColors: ["accent", "blue", "warm"],
        forWho: "Açık sahalar, okul ve site",
        desc: "Açık basketbol sahaları için en ekonomik ve yaygın tercih. 2mm veya 3mm kalınlıkta, çabuk kuruyan, her hava koşuluna dayanıklı akrilik kaplama.",
      },
      {
        name: "Tartan (EPDM) Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/tartanZeminTenisKortu.jpg`,
        badges: ["Şok Emici", "Uzun Ömürlü", "Profesyonel"],
        badgeColors: ["warm", "accent", "warm"],
        forWho: "Kulüp, kapalı ve açık saha",
        desc: "SBR + EPDM kauçuk katmanlardan oluşan şok emici zemin. Sporcu sakatlanmalarını azaltır. Okullar ve kulüpler için tercih edilen güvenli seçenek.",
      },
      {
        name: "Parke (Ahşap) Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/zemin.jpg`,
        badges: ["Profesyonel", "FIBA Standartı", "Uzun Ömürlü"],
        badgeColors: ["warm", "blue", "accent"],
        forWho: "Kapalı spor salonları",
        desc: "FIBA standartlarına uygun profesyonel ahşap parke zemin. Enerji geri kazanımı ve mükemmel top sekme özelliğiyle kapalı salon uygulamaları için en üst düzey seçenek.",
      },
    ],
  },
  {
    tag: "Voleybol",
    color: "#3B82F6",
    title: "Voleybol ve hentbol sahası",
    spec: "18 × 9 m",
    image: `${import.meta.env.BASE_URL}images/hizmetler/zemin.jpg`,
    imageAlt: "Voleybol sahası yapımı — Gözde İnşaat",
    desc: "Amatör ve profesyonel branşlar için uluslararası standartlarda file direği ve zemin sistemleri.",
    detail:
      "Sert zemin veya kum dolgulu seçeneklerle, kulüb ve okul ihtiyaçlarına uygun ölçülendirme yapılır.",
    to: "/voleybol-sahasi-yapimi",
    forWho: "Okul · Site · Kulüp · Spor Salonu",
    deliveryTime: "2–3 hafta",
    floors: [
      {
        name: "Akrilik Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/akrilikZeminTenisKortu.jpeg`,
        badges: ["Ekonomik", "Kolay Bakım", "Dayanıklı"],
        badgeColors: ["accent", "accent", "blue"],
        forWho: "Okul, site, açık saha",
        desc: "Açık voleybol sahaları için en uygun maliyet seçeneği. Hava koşullarına dayanıklı, standart voleybol çizgileriyle teslim edilir.",
      },
      {
        name: "Tartan (EPDM) Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/tartanZeminTenisKortu.jpg`,
        badges: ["Şok Emici", "Esnek", "Uzun Ömürlü"],
        badgeColors: ["warm", "warm", "accent"],
        forWho: "Kulüp, kapalı salon",
        desc: "Oyuncu konforunu maksimuma çıkaran esnek kauçuk zemin. Özellikle sık kullanımlı profesyonel salonlar için tercih edilir.",
      },
    ],
  },
  {
    tag: "Çok amaçlı",
    color: COLORS.lineDim,
    title: "Çok amaçlı saha",
    spec: "Zemine özel ölçü",
    image: `${import.meta.env.BASE_URL}images/hizmetler/tenisKortuSahaZemin.jpeg`,
    imageAlt: "Çok amaçlı spor sahası — Gözde İnşaat",
    desc: "Suni çim zemin üzerine tenis, basketbol ve voleybol çizgilerinin birlikte uygulandığı kombine sahalar.",
    detail:
      "Okullar, siteler ve toplu konutlar için tek bir sahada birden fazla branşın oynanmasına imkân tanır.",
    to: "/cok-amacli-saha-yapimi",
    forWho: "Okul · Site · Toplu Konut · Belediye",
    deliveryTime: "3–5 hafta",
    floors: [
      {
        name: "Suni Çim Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/tenisKortuSahaZemin.jpeg`,
        badges: ["Çok Amaçlı", "Uygun Maliyet", "Kolay Bakım"],
        badgeColors: ["blue", "accent", "accent"],
        forWho: "Okul, site, toplu konut",
        desc: "18×36m boyutlarında, üzerine tenis, basketbol ve voleybol çizgilerinin birlikte uygulandığı suni çim zemin. 20mm model en çok tercih edilendir.",
      },
      {
        name: "Tartan (EPDM) Zemin",
        image: `${import.meta.env.BASE_URL}images/hizmetler/tartanZeminTenisKortu.jpg`,
        badges: ["Uzun Ömürlü", "Renkli Seçenek", "Profesyonel"],
        badgeColors: ["accent", "warm", "warm"],
        forWho: "Kapalı spor salonları, kulüp",
        desc: "EPDM kauçuk yüzey, farklı branş çizgileriyle çok renkli çok amaçlı saha yapımına uygundur. Kapalı spor salonlarında da tercih edilir.",
      },
    ],
  },
  {
    tag: "Halı Saha",
    color: "#5A9E6F",
    title: "Halı saha",
    spec: "5'e5 / 7'ye7 / 11'e11",
    image: `${import.meta.env.BASE_URL}images/hizmetler/haliSaha.jpg`,
    imageAlt: "Halı saha yapımı sentetik çim — Gözde İnşaat",
    desc: "FIFA kalite standartlarında sentetik çim halı saha yapımı. 5'e 5'ten 11'e 11'e farklı formatlarda anahtar teslim uygulama.",
    detail:
      "Kum + SBR granül dolgu veya EPDM granül dolgulu sentetik çim seçenekleri; aydınlatma, çevre file ve tel örgü dahil eksiksiz teslimat.",
    to: "/hali-saha-yapimi",
    forWho: "Kulüp · Tesis · Okul · Belediye",
    deliveryTime: "4–6 hafta",
    floors: [
      {
        name: "Açık Halı Saha",
        image: `${import.meta.env.BASE_URL}images/hizmetler/acikhalisaha.jpg`,
        badges: ["LED Aydınlatma", "Tel Örgü Dahil", "Gece Maçı"],
        badgeColors: ["warm", "accent", "blue"],
        forWho: "Ticari tesis, kulüp",
        desc: "6-7m yüksekliğinde tel örgü çevreli, LED projektörlü açık halı saha. 55mm suni çim kullanılır. Gece saatlerinde de kullanıma uygundur.",
      },
      {
        name: "Kapalı Halı Saha",
        image: `${import.meta.env.BASE_URL}images/hizmetler/kapalihalisaha.jpg`,
        badges: ["Her Mevsim", "Rüzgar Geçirmez", "Çelik Konstrüksiyon"],
        badgeColors: ["accent", "blue", "warm"],
        forWho: "Kış ayları için ticari tesis",
        desc: "Çelik konstrüksiyon üzerine branda, saç veya PVC kaplama ile kapatılmış, yıl boyu kullanılabilir kapalı halı saha. Soğuk bölgelerde saç kaplama önerilir.",
      },
      {
        name: "Saha Yapım Aşaması",
        image: `${import.meta.env.BASE_URL}images/hizmetler/kapalihalisahayapilirken.jpg`,
        badges: ["Anahtar Teslim", "Çelik Montaj", "Altyapı"],
        badgeColors: ["warm", "warm", "accent"],
        forWho: "Profesyonel kulüp, belediye",
        desc: "Halı saha yapımında zemin etüdünden çelik konstrüksiyon montajına kadar tüm aşamaları titizlikle uyguluyoruz.",
      },
    ],
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Keşif ve ölçüm",
    desc: "Arazi yapısı, zemin eğimi ve drenaj durumu yerinde incelenir, ölçüler alınır.",
  },
  {
    n: "02",
    title: "Zemin hazırlığı",
    desc: "Hatıl betonu, mıcır dolgu ve asfalt katmanları serilerek zemin sıkıştırılır.",
  },
  {
    n: "03",
    title: "Kaplama ve çizim",
    desc: "Akrilik, tartan veya suni çim yüzey uygulanır, sahanın resmi çizgileri milimetrik olarak çizilir.",
  },
  {
    n: "04",
    title: "Teslim ve garanti",
    desc: "Ekipman montajı (file, pota, direk) yapılır, saha garantiyle teslim edilir.",
  },
];

// NOT: Aşağıdaki projeler temsili örneklerdir.
// Gerçek referanslarınızı ekleyecekseniz bu diziyi kendi proje
// isim / şehir / fotoğraflarınızla güncelleyin.
// İlk kayıt "öne çıkan" (featured) olarak büyük formatta gösterilir.
export const PROJECTS = [
  { 
    name: "Kapalı Halı Saha", 
    city: "Anahtar Teslim", 
    type: "Futbol", 
    size: "İstenen Ölçülerde", 
    color: COLORS.orange,
    image: `${import.meta.env.BASE_URL}images/hizmetler/kapalihalisaha.jpg`,
    date: "Her Mevsim",
    desc: "Yılın 365 günü hava şartlarından etkilenmeden futbol keyfi yaşatan, dayanıklı çelik konstrüksiyonlu kapalı halı sahalar.",
    chips: ["Çelik Konstrüksiyon", "Suni Çim", "Aydınlatma"]
  },
  { 
    name: "Açık Halı Saha", 
    city: "Anahtar Teslim", 
    type: "Futbol", 
    size: "İstenen Ölçülerde", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/acikhalisaha.jpg`,
    date: "Her Mevsim",
    desc: "Yüksek dayanımlı sentetik çim kullanılarak tasarlanan, tel örgü ve LED aydınlatma sistemi tamamlanmış açık halı sahalar.",
    chips: ["Sentetik Çim", "Tel Örgü", "Dış Mekan"]
  },
  { 
    name: "Profesyonel Basketbol Sahası", 
    city: "Anahtar Teslim", 
    type: "Basketbol", 
    size: "Uluslararası Standart", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/basketbolSahasi.jpg`,
    date: "Her Mevsim",
    desc: "Kaymaz zemin kaplamaları ve profesyonel ekipmanlarla kurulan, sakatlanma riskini en aza indiren yüksek performanslı basketbol sahaları.",
    chips: ["Akrilik Zemin", "Tartan Zemin", "Pota Ekipmanları"]
  },
  { 
    name: "Kapalı Basketbol Sahası", 
    city: "Spor Salonu", 
    type: "Basketbol", 
    size: "Kapalı Alan", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/kapalibasketsahasi.jpg`,
    date: "Her Mevsim",
    desc: "Her türlü hava koşuluna uygun, ahşap veya poliüretan zemin kullanılarak inşa edilmiş profesyonel kapalı spor salonları.",
    chips: ["Kapalı Saha", "Poliüretan", "Ahşap Parke"]
  },
  { 
    name: "Akrilik Zemin Tenis Kortu", 
    city: "Anahtar Teslim", 
    type: "Tenis", 
    size: "Uluslararası Standart", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/akrilikZeminTenisKortu.jpeg`,
    date: "Açık Alan",
    desc: "Uluslararası tenis turnuvaları standartlarında, yüksek top sekme performansına sahip akrilik zeminli kort.",
    chips: ["Akrilik Zemin", "ITF Onaylı", "Açık Kort"]
  },
  { 
    name: "Sentetik Çim Tenis Kortu", 
    city: "Özel Proje", 
    type: "Tenis", 
    size: "Standart Ölçüler", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/sentetikCimTenisKortu.jpg`,
    date: "Her Mevsim",
    desc: "Özellikle eklem sağlığını koruyan, yavaş top hızı sunan konforlu sentetik çim tenis kortu projesi.",
    chips: ["Suni Çim", "Konfor", "Güvenlik"]
  },
  { 
    name: "Tartan Zemin Tenis Kortu", 
    city: "Profesyonel", 
    type: "Tenis", 
    size: "Uluslararası Standart", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/tartanZeminTenisKortu.jpg`,
    date: "Dayanıklı",
    desc: "Şok emici özelliği sayesinde sporcu sağlığını ön planda tutan, EPDM kauçuk tabanlı tartan kortlar.",
    chips: ["Tartan Zemin", "EPDM Kauçuk", "Şok Emici"]
  },
  { 
    name: "Çok Amaçlı Okul Sahası", 
    city: "Kurumsal Proje", 
    type: "Çok Amaçlı", 
    size: "Geniş Alan", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/projeler/ankaraincekdogakoleji.jpg`,
    date: "Eğitim",
    desc: "Öğrencilerin aynı alanda hem basketbol hem de voleybol oynayabilmesi için tasarlanmış, akrilik zeminli okul spor sahası.",
    chips: ["Çok Amaçlı", "Okul Projesi", "Akrilik"]
  },
  { 
    name: "Kapsamlı Spor Kompleksi", 
    city: "Özel Site", 
    type: "Çok Amaçlı", 
    size: "Proje Bazlı", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/projeler/sahalar.jpg`,
    date: "Açık Alan",
    desc: "Site içi sosyal tesislerde yer alan; voleybol, basketbol ve tenis gibi farklı spor branşlarını destekleyen ortak kullanım alanları.",
    chips: ["Sosyal Tesis", "Karma Spor", "Uzun Ömürlü"]
  },
  { 
    name: "Çocuk Oyun Parkı Zemin Kaplaması", 
    city: "Belediye Projesi", 
    type: "Çocuk Parkı", 
    size: "Özel Tasarım", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/cocukparki1.jpg`,
    date: "Güvenlik",
    desc: "Düşme ve çarpmalara karşı maksimum güvenlik sağlayan, renkli ve desenli dökme kauçuk oyun parkı zeminleri.",
    chips: ["Dökme Kauçuk", "Güvenlik", "Esnek Zemin"]
  },
  { 
    name: "Modern Çocuk Oyun Alanı", 
    city: "Site İçi", 
    type: "Çocuk Parkı", 
    size: "Özel Alan", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/hizmetler/cocukparki4.jpg`,
    date: "Estetik",
    desc: "Çocukların güvenle oynayabilmesi için hijyenik, uzun ömürlü ve hava koşullarına dayanıklı kauçuk kaplama uygulaması.",
    chips: ["Kauçuk Kaplama", "Site Projesi", "Çevre Dostu"]
  },
  { 
    name: "Tribünlü Kampüs Sahası", 
    city: "Üniversite", 
    type: "Çok Amaçlı", 
    size: "Seyircili", 
    color: COLORS.lineDim,
    image: `${import.meta.env.BASE_URL}images/projeler/istanbulcevrekoleji.jpg`,
    date: "Eğitim Tesisi",
    desc: "Turnuvalar ve okul maçları için tasarlanan, çevresi tel örgüyle kapatılmış, yüksek standartlarda kampüs sahası.",
    chips: ["Üniversite", "Tribün", "Akrilik"]
  },
];
