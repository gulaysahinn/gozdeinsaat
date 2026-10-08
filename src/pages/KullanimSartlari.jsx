import { Helmet } from "react-helmet-async";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";

export default function KullanimSartlari() {
  return (
    <div style={{ ...pageWrap, paddingTop: 120, paddingBottom: 80 }}>
      <Helmet>
        <title>Kullanım Şartları ve Yasal Uyarı | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat web sitesi kullanım koşulları, fikri mülkiyet hakları, keşif & teklif esasları ve yasal sorumluluk sınırları."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gozdeinsaat.com/kullanim-sartlari" />
        <meta property="og:title" content="Kullanım Şartları ve Yasal Uyarı | Gözde İnşaat" />
        <meta
          property="og:description"
          content="Gözde İnşaat web sitesi kullanım koşulları ve yasal şartlar."
        />
        <meta property="og:url" content="https://www.gozdeinsaat.com/kullanim-sartlari" />
        <meta property="og:type" content="article" />
      </Helmet>

      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        <Badge color={COLORS.rust}>YASAL BİLGİLENDİRME & KULLANIM KOŞULLARI</Badge>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--color-line)",
            marginBottom: 20,
            marginTop: 12,
            letterSpacing: "-0.02em",
            fontFamily: FONT.heading,
          }}
        >
          Kullanım Şartları
        </h1>

        <div
          style={{
            color: "var(--color-line-dim)",
            fontSize: 15,
            lineHeight: 1.85,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <p style={{ fontSize: 14, opacity: 0.85 }}>
            <strong>Yürürlük ve Son Güncelleme:</strong> 5 Ekim 2026
          </p>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              1. Genel Hükümler ve Kabul
            </h2>
            <p>
              Bu web sitesine (<strong>www.gozdeinsaat.com</strong>) erişerek, siteyi ziyaret ederek veya sitede yer alan
              teklif/iletişim formlarını doldurarak, aşağıda belirtilen şartları ve gizlilik politikamızı peşinen kabul etmiş sayılırsınız.
              Bu şartları kabul etmiyorsanız lütfen siteyi kullanmayınız.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              2. Fikri ve Sınai Mülkiyet Hakları
            </h2>
            <p>
              Web sitemizde yer alan tüm metinler, fotoğraflar, proje görselleri, logolar, teknik kort çizimleri,
              tasarım unsurları ve yazılım kodları 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile Türk Ticaret Kanunu
              hükümleri uyarınca <strong>Gözde İnşaat</strong> mülkiyetindedir veya lisanslı olarak kullanılmaktadır.
            </p>
            <p style={{ marginTop: 8 }}>
              Yazılı izin alınmaksızın sitemizdeki materyallerin kısmen ya da tamamen kopyalanması, çoğaltılması,
              başka mecralarda ticari amaçla yayınlanması veya tersine mühendislikle kullanılması kesinlikle yasaktır.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              3. Bilgilendirme ve Tekliflerin Niteliği
            </h2>
            <p>
              Web sitesinde yer alan teknik bilgiler, zemin kalınlıkları, standart saha ölçüleri ve tahmini maliyet
              faktörleri genel bilgilendirme amacıyla sunulmuştur. Sitedeki veriler bağlayıcı bir nihai taahhüt veya kesin
              sözleşme teklifi teşkil etmez.
            </p>
            <p style={{ marginTop: 8 }}>
              Kesin metraj, zemin altyapı analizleri (kot farkı, drenaj, zemin eğimi vb.), malzeme özellikleri ve nihai birim fiyatlar,
              uzman ekibimiz tarafından yapılacak <strong>ücretsiz yerinde keşif</strong> neticesinde hazırlanacak resmi yazılı
              teklif ve taraflarca karşılıklı imzalanacak inşaat sözleşmesi ile kesinlik kazanır.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              4. Kullanıcı Yükümlülükleri
            </h2>
            <p>Web sitemizi ziyaret eden ve formları kullanan ziyaretçiler:</p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>İletişim ve teklif formlarında doğru, güncel ve gerçeğe uygun bilgi vermeyi,</li>
              <li>Sitenin güvenliğini zedeleyecek, sunucuları aşırı yükleyecek veya zararlı yazılım içeren girişimlerde bulunmamayı,</li>
              <li>Üçüncü şahısların kimlik ve iletişim bilgilerini izinsiz olarak kullanmamayı</li>
            </ul>
            <p style={{ marginTop: 8 }}>kabul ve taahhüt eder.</p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              5. Garanti ve Taahhüt Şartları
            </h2>
            <p>
              Gözde İnşaat tarafından yapımı tamamlanan tüm tenis kortları, basketbol sahaları, voleybol sahaları ve halı sahalar,
              uluslararası federasyon standartlarına (ITF, FIBA, FIFA normları) ve Bayındırlık şartnamelerine uygun olarak inşa edilir.
            </p>
            <p style={{ marginTop: 8 }}>
              Uygulanan akrilik kaplama, EPDM kauçuk tartan zemin ve sentetik çim halılar üretici garantisi ve firmamızın
              işçilik garantisi altındadır. Garanti şartlarının kapsamı, imzalanan iş sözleşmesi ve garanti belgesinde detaylandırılmaktadır.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              6. Sorumluluk Sınırlandırması
            </h2>
            <p>
              Gözde İnşaat, web sitesinin kesintisiz veya hatasız çalışacağını garanti etmez; ancak sitenin güncel, güvenli ve virüslerden
              arındırılmış kalması için azami özeni gösterir. Mücbir sebepler, teknik altyapı arızaları veya üçüncü taraf hizmet kesintilerinden
              kaynaklanabilecek aksamalardan ötürü doğrudan veya dolaylı hiçbir zarar için firmamız sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              7. Dış Bağlantılar (Üçüncü Taraf Linkleri)
            </h2>
            <p>
              Sitemizde kullanıcıya kolaylık sağlamak amacıyla WhatsApp, Telegram, Google Maps gibi harici platformlara ait bağlantılar
              yer alabilir. Bu harici sitelerin gizlilik politikalarından, içeriklerinden ve veri işleme faaliyetlerinden Gözde İnşaat
              sorumlu değildir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              8. Uyuşmazlıkların Çözümü ve Yetkili Mahkeme
            </h2>
            <p>
              İşbu Kullanım Şartları Türk Hukuku'na tabidir. Sitenin kullanımından veya bu şartlardan doğabilecek her türlü uyuşmazlığın
              çözümünde <strong>İstanbul Anadolu Mahkemeleri ve İcra Daireleri</strong> münhasıran yetkilidir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              9. İletişim
            </h2>
            <p>
              Kullanım şartlarımıza ilişkin her türlü soru, öneri ve talepleriniz için bizimle irtibata geçebilirsiniz:
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
              <li><strong>Firma Unvanı:</strong> Gözde İnşaat Spor Sahaları Yapımı ve Yenileme Hizmetleri</li>
              <li><strong>Adres:</strong> Osmangazi Mah. Şeyh Şamil Sok. No:1, 34887 Sancaktepe / İstanbul</li>
              <li><strong>Telefon:</strong> 0 (216) 311 09 94</li>
              <li><strong>E-posta:</strong> info@gozdeinsaat.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
