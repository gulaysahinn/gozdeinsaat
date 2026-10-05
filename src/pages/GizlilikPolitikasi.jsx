import { Helmet } from "react-helmet-async";
import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";

export default function GizlilikPolitikasi() {
  return (
    <div style={{ ...pageWrap, paddingTop: 120, paddingBottom: 80 }}>
      <Helmet>
        <title>Gizlilik Politikası ve KVKK Aydınlatma Metni | Gözde İnşaat</title>
        <meta
          name="description"
          content="Gözde İnşaat Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni, gizlilik politikası, veri güvenliği ve çerez kullanım esasları."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gozdeinsaat.com/gizlilik-politikasi" />
        <meta property="og:title" content="Gizlilik Politikası ve KVKK Aydınlatma Metni | Gözde İnşaat" />
        <meta
          property="og:description"
          content="Gözde İnşaat Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni ve çerez politikası."
        />
        <meta property="og:url" content="https://www.gozdeinsaat.com/gizlilik-politikasi" />
        <meta property="og:type" content="article" />
      </Helmet>

      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        <Badge color={COLORS.rust}>KVKK AYDINLATMA METNİ & GİZLİLİK POLİTİKASI</Badge>
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
          Gizlilik Politikası ve KVKK Aydınlatma Metni
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
              1. Veri Sorumlusunun Kimliği
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat uyarınca,
              kişisel verileriniz veri sorumlusu sıfatıyla <strong>Gözde İnşaat</strong> tarafından
              aşağıda açıklanan kapsam ve şartlarda işlenmektedir.
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><strong>Firma Unvanı:</strong> Gözde İnşaat Spor Sahaları Yapımı</li>
              <li><strong>Adres:</strong> Osmangazi Mah. Şeyh Şamil Sok. No:1, 34887 Sancaktepe / İstanbul</li>
              <li><strong>E-posta:</strong> info@gozdeinsaat.com</li>
              <li><strong>Telefon:</strong> 0 (216) 311 09 94 / 0 (532) 667 84 28</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              2. İşlenen Kişisel Verileriniz ve Toplanma Yöntemi
            </h2>
            <p>
              Web sitemizi ziyaretiniz ve hizmet talepleriniz sırasında, yalnızca "Teklif Al", "İletişim Formu"
              veya doğrudan arama/mesajlaşma kanalları üzerinden kendi rızanızla ilettiğiniz veriler toplanmaktadır:
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><strong>Kimlik Verileri:</strong> Ad, soyad veya yetkili temsilci/kurum adı</li>
              <li><strong>İletişim Verileri:</strong> Telefon numarası, e-posta adresi</li>
              <li><strong>Lokasyon Verileri:</strong> Projenin uygulanacağı il/ilçe bilgisi</li>
              <li><strong>Proje Bilgileri:</strong> Saha türü (tenis, basketbol, halı saha vb.), tahmini ölçüler ve talep notları</li>
              <li><strong>Teknik İşlem Verileri:</strong> Sitenin güvenliği, oturum devamlılığı ve tema tercihi için zorunlu teknik veriler</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <p>Toplanan kişisel verileriniz aşağıdaki amaçlarla sınırlı olarak işlenmektedir:</p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Spor sahası inşaatı, zemin kaplama ve bakım tekliflerinin hazırlanması ve iletilmesi,</li>
              <li>Ücretsiz yerinde keşif ve zemin/kot analizi randevularının organize edilmesi,</li>
              <li>Talebinize ilişkin sizinle doğrudan telefon veya e-posta yoluyla irtibat kurulması,</li>
              <li>Sözleşme öncesi ve sözleşme süreçlerinin yürütülmesi,</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              4. İşlemenin Hukuki Sebepleri
            </h2>
            <p>
              Kişisel verileriniz, KVKK'nın 5/2 maddesinde yer alan:
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>(c) Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması,</li>
              <li>(ç) Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,</li>
              <li>(f) İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatlerimiz için veri işlenmesinin zorunlu olması</li>
            </ul>
            <p style={{ marginTop: 8 }}>hukuki sebeplerine dayanılarak işlenmektedir.</p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              5. Kişisel Verilerin Saklama Süresi ve İmhası
            </h2>
            <p>
              Teklif formları ve iletişim mesajları aracılığıyla iletilen verileriniz, teklif sürecinin tamamlanması
              ve olası garanti/müşteri hizmetleri süreçlerinin takibi amacıyla en fazla <strong>2 (iki) yıl</strong> süreyle
              güvenli sunucularda saklanır. Yasal saklama zorunluluğu olan sözleşme ve fatura kayıtları ise Vergi Usul Kanunu
              ve TTK gereği 10 yıl saklanır. Süre bitiminde veriler güvenli bir şekilde silinir veya anonim hale getirilir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              6. Kişisel Verilerin Üçüncü Kişilere Aktarımı
            </h2>
            <p>
              Kişisel verileriniz ticari, reklam veya pazarlama maksatlarıyla kesinlikle üçüncü şahıs veya
              kurumlara <strong>satılmaz, kiralanmaz ve devredilmez</strong>. Yalnızca yasal bir zorunluluk bulunması
              veya adli/idari makamlarca talep edilmesi halinde yetkili kamu kurum ve kuruluşları ile paylaşılabilir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              7. Çerez (Cookie) Politikası
            </h2>
            <p>
              Web sitemizde kullanıcı deneyimini sağlamak amacıyla çerezler kullanılmaktadır:
            </p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel fonksiyonlarının çalışması, sayfa geçişleri ve güvenlik için zorunludur. Devre dışı bırakılamazlar.</li>
              <li><strong>İşlevsel Çerezler:</strong> Gece/gündüz teması (dark/light mode) ve çerez onay tercihinizin hatırlanmasını sağlar.</li>
              <li><strong>Analitik Çerezler:</strong> Sitenin ziyaretçi sayıları ve performansını anonim olarak ölçümlemek için isteğe bağlı olarak kullanılır.</li>
            </ul>
            <p style={{ marginTop: 8 }}>
              Dilediğiniz zaman tarayıcı ayarlarınızdan çerezleri silebilir veya çerez onay bildiriminden tercihlerinizi güncelleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>
              8. İlgili Kişi Olarak Haklarınız (KVKK Madde 11)
            </h2>
            <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi ve döküm talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK 7. maddesi uyarınca silinmesini veya yok edilmesini talep etme,</li>
              <li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Başvurularınızı <strong>info@gozdeinsaat.com</strong> adresine e-posta göndererek ya da
              merkez adresimize yazılı dilekçe ile bizzat teslim ederek gerçekleştirebilirsiniz. Talepleriniz
              en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
