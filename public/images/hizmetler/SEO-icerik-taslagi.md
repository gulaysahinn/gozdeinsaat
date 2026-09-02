# Gözde İnşaat — SEO Anahtar Kelime & İçerik Taslağı

> Bu doküman, gerçek arama sonuçları ve rakip firma sitelerinden (Torsan, Ekip Spor,
> Nursan Spor, Deniz Grup Spor, Reform Sports vb.) derlenen anahtar kelime kalıpları
> baz alınarak hazırlanmıştır. Yapay zekaya verip siteyi buna göre
> güncelletebilirsin.

---

## 0. ÖNCE OKU: Teknik bir engel var

Site şu an **Vite + React ile istemci tarafında (client-side) render ediliyor.**
Yani tarayıcı sayfayı ilk açtığında boş bir `<div id="root">` gelir, içerik
JavaScript çalıştıktan *sonra* oluşur. Google bunu büyük ölçüde çözebiliyor ama:

- İndeksleme yavaşlar ve gecikmeli olur,
- Sayfa başlığı/meta açıklaması **her sayfada aynı kalır** (şu an `index.html`
  içinde tek bir `<title>` var — Anasayfa da, Hizmetler sayfası da Google'a aynı
  başlıkla görünüyor),
- Rakiplerinin çoğu (Torsan, Nursan Spor, Ekip Spor) her hizmet ve şehir için
  ayrı, sunucu tarafında oluşturulmuş sayfalar kullanıyor — bu onlara ciddi
  avantaj sağlıyor.

**Öneri:** Aşağıdaki içerik stratejisini uygulamadan önce ya
1) projeyi **Next.js**'e taşı (her sayfa kendi title/meta'sını üretebilir, SSG/SSR
   ile Google içeriği anında görür), ya da
2) Vite'ta kalacaksan en azından **react-helmet-async** ile sayfa başına
   title/meta ekle ve bir **prerendering** çözümü (`vite-plugin-ssg` gibi) kullan.

Bu olmadan aşağıdaki anahtar kelime çalışmasının getirisi sınırlı kalır —
içerik doğru olur ama Google'ın onu görmesi zorlaşır.

---

## 1. Anahtar Kelime Kümeleri

### A. Ana hizmet kelimeleri (yüksek hacim, yüksek rekabet)
| Kelime | Niyet |
|---|---|
| tenis kortu yapımı | Hizmet |
| basketbol sahası yapımı | Hizmet |
| voleybol sahası yapımı | Hizmet |
| halı saha yapımı | Hizmet |
| çok amaçlı spor sahası yapımı | Hizmet |
| anahtar teslim spor sahası | Hizmet |
| spor sahası yapan firmalar | Firma arama |

### B. Fiyat / maliyet niyetli (dönüşüm potansiyeli en yüksek grup)
| Kelime | Not |
|---|---|
| tenis kortu fiyatları / maliyeti | Rakipler bunu ayrı sayfa yapıyor |
| basketbol sahası yapımı fiyatları 2026 | Yıl etiketi trafiği artırıyor |
| voleybol sahası ne kadar / maliyeti | |
| halı saha yapım maliyeti 2026 | |
| çok amaçlı saha maliyeti | |
| basketbol sahası m2 fiyatı | |

> Not: Rakiplerin verdiği örnek aralıklar (basketbol sahası için ~200.000–500.000 TL,
> voleybol açık saha 150.000–400.000 TL gibi) firma firma çok değişiyor — kendi
> gerçek fiyat aralığını yazmadan bu rakamları sitene koyma, yanıltıcı olur.
> Bunun yerine "keşif sonrası net fiyat" + fiyatı etkileyen faktörler listesi
> (zemin tipi, m², aydınlatma, çit) yaklaşımını kullan; rakiplerin çoğu bunu yapıyor.

### C. Ölçü / bilgi niyetli ("nasıl yapılır" — blog & FAQ için ideal)
| Kelime |
|---|
| tenis kortu ölçüleri kaç metre |
| basketbol sahası ölçüleri |
| voleybol sahası kaç metre / kaç cm |
| çok amaçlı saha ölçüleri |
| tenis kortu nasıl yapılır |
| basketbol sahası zemin çeşitleri |
| akrilik zemin nedir / tartan zemin nedir |

### D. Şehir bazlı (rakiplerin en çok kullandığı taktik)
Firmanız Sancaktepe/İstanbul merkezli. Rakiplerin "Ankara halı saha yapımı",
"Ankara basketbol sahası fiyatları" gibi şehir + hizmet kombinasyonlarıyla ayrı
sayfa açtığını gördük. Önerilen kombinasyonlar:

- istanbul tenis kortu yapımı
- istanbul basketbol sahası yapımı
- sancaktepe spor sahası yapımı
- kocaeli / sakarya tenis kortu yapımı *(mevcut projelerinizin olduğu iller)*

### E. Karşılaştırma / seçim niyetli
- akrilik mi tartan mı
- suni çim mi akrilik mi tenis kortu
- açık mı kapalı tenis kortu

---

## 2. Sayfa Yapısı Önerisi (mevcut siteye ek)

Şu anki sayfalar: Anasayfa, Hizmetler, Projeler, Hakkımızda, İletişim.
Her hizmet için **ayrı, hedeflenmiş bir sayfa** açmanı öneririz — tek
"Hizmetler" sayfası altında 4 kart yerine, her birinin kendi URL'i, title'ı ve
en az 400-600 kelimelik içeriği olsun.

| URL | Hedef ana kelime | Önerilen H1 |
|---|---|---|
| `/tenis-kortu-yapimi` | tenis kortu yapımı | Tenis Kortu Yapımı ve Fiyatları |
| `/basketbol-sahasi-yapimi` | basketbol sahası yapımı | Basketbol Sahası Yapımı ve Fiyatları |
| `/voleybol-sahasi-yapimi` | voleybol sahası yapımı | Voleybol Sahası Yapımı ve Fiyatları |
| `/cok-amacli-saha-yapimi` | çok amaçlı spor sahası yapımı | Çok Amaçlı Spor Sahası Yapımı |
| `/hali-saha-yapimi` *(portföyünüzde varsa)* | halı saha yapımı | Halı Saha Yapımı ve Maliyeti |

Her sayfada olması gerekenler (rakip analizinden çıkardığımız kalıp):
1. Kısa tanım (ne, kimin için)
2. Ölçüler (tablo)
3. Zemin seçenekleri (akrilik / tartan / suni çim / parke — artı-eksileri)
4. Yapım aşamaları (keşif → zemin → kaplama/çizim → teslim — sitenizde zaten var)
5. Fiyatı etkileyen faktörler (m², zemin tipi, aydınlatma, çit, açık/kapalı)
6. SSS bloğu (aşağıda hazır sorular var)
7. CTA: "Bu saha için teklif al"

### Meta başlık / açıklama taslakları

```
Anasayfa
Title: Spor Sahası ve Kort İnşaatı | Gözde İnşaat
Description: Tenis kortu, basketbol sahası, voleybol sahası ve çok amaçlı
saha yapımında anahtar teslim çözümler. İstanbul ve çevresinde ücretsiz keşif.

/tenis-kortu-yapimi
Title: Tenis Kortu Yapımı ve Fiyatları | Gözde İnşaat
Description: Akrilik, tartan ve suni çim zeminle ITF standartlarında tenis
kortu yapımı. 18x36m ölçü, açık/kapalı kort seçenekleri, ücretsiz keşif.

/basketbol-sahasi-yapimi
Title: Basketbol Sahası Yapımı ve Fiyatları | Gözde İnşaat
Description: 28x15m standart ölçüde, akrilik/suni çim/tartan zeminli
basketbol sahası yapımı. 500+ tamamlanmış proje, anahtar teslim hizmet.

/voleybol-sahasi-yapimi
Title: Voleybol Sahası Yapımı ve Fiyatları | Gözde İnşaat
Description: 18x9m standart ölçüde voleybol ve hentbol sahası yapımı.
Sert zemin veya kum dolgulu seçenekler, ücretsiz keşif ve teklif.

/cok-amacli-saha-yapimi
Title: Çok Amaçlı Spor Sahası Yapımı | Gözde İnşaat
Description: Tek sahada tenis, basketbol ve voleybol çizgileriyle çok amaçlı
spor sahası yapımı. Okul, site ve tesisler için anahtar teslim çözüm.
```

---

## 3. Blog / İçerik Takvimi (ilk 3 ay — 12 yazı)

| # | Başlık | Hedef kelime | Tip |
|---|---|---|---|
| 1 | Tenis Kortu Yapımı: Adım Adım Süreç ve 2026 Fiyatları | tenis kortu yapımı, tenis kortu fiyatları | Rehber |
| 2 | Basketbol Sahası Ölçüleri Kaç Metre? FIBA Standartları | basketbol sahası ölçüleri | Bilgi/SSS |
| 3 | Akrilik mi, Tartan mı? Spor Sahası Zemin Seçim Rehberi | akrilik tartan zemin karşılaştırma | Karşılaştırma |
| 4 | Voleybol Sahası Ölçüleri ve Yapım Aşamaları | voleybol sahası ölçüleri | Bilgi/SSS |
| 5 | Çok Amaçlı Spor Sahası Nedir? Okullar İçin Neden Avantajlı | çok amaçlı spor sahası | Bilgi |
| 6 | Açık mı Kapalı Tenis Kortu? Hangisi Size Uygun | açık kapalı tenis kortu | Karşılaştırma |
| 7 | Site İçi Basketbol Sahası Yaptırırken Dikkat Edilmesi Gerekenler | site içi basketbol sahası | Rehber |
| 8 | Okul Bahçesine Spor Sahası Yaptırma Rehberi (MEB Uyumlu) | okul spor sahası yapımı | Rehber |
| 9 | Tenis Kortu Aydınlatması: LED Projektör Seçimi ve Lüks Değerleri | tenis kortu aydınlatma | Teknik |
| 10 | Spor Sahası Zemininde Drenaj Neden Bu Kadar Önemli? | spor sahası drenaj | Teknik |
| 11 | Belediyeler İçin Spor Kompleksi Projelendirme Süreci | belediye spor sahası ihalesi | Kurumsal/B2B |
| 12 | Gözde İnşaat'tan Tamamlanan Proje: [Gerçek proje adı] | [proje adı + şehir] | Vaka çalışması |

*(12 numaralı formatı her tamamlanan proje için tekrarlayabilirsin — hem SEO hem
sosyal kanıt için en verimli içerik türü budur.)*

---

## 4. Hazır SSS Bloğu (her hizmet sayfasına uyarlanabilir, FAQ schema için)

**Tenis kortu**
- Tenis kortu ölçüleri kaç metredir? *(18.27m x 36.57m çiftler için resmi ölçü)*
- Tenis kortu yapımı ne kadar sürer?
- Açık ve kapalı tenis kortu arasındaki fark nedir?
- En dayanıklı tenis kortu zemini hangisidir?

**Basketbol sahası**
- Basketbol sahası ölçüleri kaç metredir? *(FIBA standardı 28x15m)*
- Basketbol sahası zemini için akrilik mi poliüretan mı daha iyi?
- Kapalı basketbol sahası maliyeti neye göre değişir?

**Voleybol sahası**
- Voleybol sahası ölçüleri nedir? *(18x9m, çevresinde 3m serbest alan)*
- Voleybol sahası kum mu sert zemin mi olmalı?

**Çok amaçlı saha**
- Çok amaçlı sahada hangi sporlar oynanabilir?
- Çok amaçlı saha en yaygın hangi ölçüde yapılır? *(18x36m)*

> Bu soruları hem sayfa içeriğine yazı olarak ekle hem de FAQPage schema
> (JSON-LD) olarak işaretle — Google'da "sık sorulan sorular" kutusunda
> çıkma ihtimalini artırır.

---

## 5. Teknik SEO Checklist

- [ ] Her sayfaya özgü `<title>` ve `<meta description>` (react-helmet-async)
- [ ] `sitemap.xml` ve `robots.txt` oluştur
- [ ] Görsellerde açıklayıcı `alt` metni: `alt="İstanbul basketbol sahası yapımı - Gözde İnşaat"`
- [ ] `LocalBusiness` JSON-LD schema (adres, telefon, çalışma saatleri)
- [ ] Google Business Profile hesabı aç/güncelle (yerel aramalarda kritik)
- [ ] İç linkleme: her proje kartından ilgili hizmet sayfasına link
- [ ] Sayfa hızı: görselleri sıkıştır (WebP), lazy-load kullan
- [ ] Mobil uyumluluk testi (Google Search Console)
- [ ] Her blog yazısında en az 1 iç link (ilgili hizmet sayfasına) + CTA

---

## 6. Yapay zekaya bunu verirken ekleyebileceğin talimat örneği

> "Bu anahtar kelime ve sayfa planına göre, [X sayfası] için 500-700 kelimelik,
> başlıkları H2/H3 olarak yapılandırılmış, SSS bölümü içeren, doğal ve
> tekrarsız bir Türkçe metin yaz. Anahtar kelimeyi zorlamadan, okunabilir bir
> dille kullan. Sonunda 'Ücretsiz teklif al' CTA'sı olsun."
