import { COLORS } from "../theme";

export const SERVICES = [
  {
    tag: "Tenis",
    color: COLORS.rust,
    title: "Tenis kortu",
    spec: "18 × 36 m",
    image: "/images/hizmetler/tenisKortuYapimi.jpg",
    imageAlt: "İstanbul tenis kortu yapımı — Gözde İnşaat",
    desc: "Akrilik, tartan (EPDM) ve suni çim zemin seçenekleri, ITF standartlarında açık ve çelik konstrüksiyon kapalı kort yapımı.",
    detail:
      "Çevre hatıl betonu, mıçır dolgu ve asfalt katmanlarının ardından seçilen zemin uygulanır. Kort çevresi tel örgü ve LED aydınlatma sistemiyle tamamlanır.",
    to: "/tenis-kortu-yapimi",
  },
  {
    tag: "Basketbol",
    color: COLORS.orange,
    title: "Basketbol sahası",
    spec: "28 × 15 m",
    image: "/images/hizmetler/basketbolSahasi.jpg",
    imageAlt: "Basketbol sahası yapımı — Gözde İnşaat",
    desc: "Akrilik, suni çim ve tartan zemin seçenekleri; 500'den fazla tamamlanmış sahayla açık ve kapalı uygulama.",
    detail:
      "Açık sahalar tel örgü ile çevrilir, kapalı sahalar spor salonu veya çelik konstrüksiyon olarak inşa edilir. Parke zemin profesyonel kapalı saha uygulamaları için idealdir.",
    to: "/basketbol-sahasi-yapimi",
  },
  {
    tag: "Voleybol",
    color: COLORS.blue,
    title: "Voleybol ve hentbol sahası",
    spec: "18 × 9 m",
    image: "/images/hizmetler/zemin.jpg",
    imageAlt: "Voleybol sahası yapımı — Gözde İnşaat",
    desc: "Amatör ve profesyonel branşlar için uluslararası standartlarda file direği ve zemin sistemleri.",
    detail:
      "Sert zemin veya kum dolgulu seçeneklerle, kulüb ve okul ihtiyaçlarına uygun ölçülendirme yapılır.",
    to: "/voleybol-sahasi-yapimi",
  },
  {
    tag: "Çok amaçlı",
    color: COLORS.lineDim,
    title: "Çok amaçlı saha",
    spec: "Zemine özel ölçü",
    image: "/images/hizmetler/tenisKortuSahaZemin.jpeg",
    imageAlt: "Çok amaçlı spor sahası — Gözde İnşaat",
    desc: "Suni çim zemin üzerine tenis, basketbol ve voleybol çizgilerinin birlikte uygulandığı kombine sahalar.",
    detail:
      "Okullar, siteler ve toplu konutlar için tek bir sahada birden fazla branşın oynanmasına imkân tanır.",
    to: "/cok-amacli-saha-yapimi",
  },
  {
    tag: "Halı Saha",
    color: "#5A9E6F",
    title: "Halı saha",
    spec: "5'e5 / 7'ye7 / 11'e11",
    image: "/images/hizmetler/haliSaha.jpg",
    imageAlt: "Halı saha yapımı sentetik çim — Gözde İnşaat",
    desc: "FIFA kalite standartlarında sentetik çim halı saha yapımı. 5'e 5'ten 11'e 11'e farklı formatlarda anahtar teslim uygulama.",
    detail:
      "Kum + SBR granül dolgu veya EPDM granül dolgulu sentetik çim seçenekleri; aydınlatma, çevre file ve tel örgü dahil eksiksiz teslimat.",
    to: "/hali-saha-yapimi",
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
export const PROJECTS = [
  { name: "Belediye Spor Kompleksi", city: "İstanbul", type: "Tenis", size: "4 kort", color: COLORS.rust },
  { name: "Özel Site Sahası", city: "İstanbul", type: "Basketbol", size: "1 saha", color: COLORS.orange },
  { name: "Okul Spor Alanı", city: "Kocaeli", type: "Çok amaçlı", size: "2 saha", color: COLORS.lineDim },
  { name: "Kulüp Tesisi", city: "İstanbul", type: "Voleybol", size: "3 saha", color: COLORS.blue },
  { name: "Kurumsal Tesis", city: "Sakarya", type: "Tenis", size: "2 kort", color: COLORS.rust },
  { name: "Gençlik Merkezi", city: "İstanbul", type: "Basketbol", size: "1 saha", color: COLORS.orange },
];
