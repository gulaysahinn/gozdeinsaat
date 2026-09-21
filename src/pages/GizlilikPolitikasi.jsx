import { COLORS, FONT, pageWrap } from "../theme";
import Badge from "../components/Badge";

export default function GizlilikPolitikasi() {
  return (
    <div style={{ ...pageWrap, paddingTop: 120, paddingBottom: 80 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <Badge color={COLORS.rust}>KVKK AYDINLATMA METNİ</Badge>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "var(--color-line)",
            marginBottom: 24,
            letterSpacing: "-0.02em",
            fontFamily: FONT.heading,
          }}
        >
          Gizlilik Politikası
        </h1>
        
        <div style={{ 
          color: "var(--color-line-dim)", 
          fontSize: 15, 
          lineHeight: 1.8,
          display: "flex",
          flexDirection: "column",
          gap: 24
        }}>
          <p>
            <strong>Son Güncelleme Tarihi:</strong> 15 Eylül 2026
          </p>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>1. Veri Sorumlusunun Kimliği</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla <strong>Gözde İnşaat</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
              <li><strong>Firma Adı:</strong> Gözde İnşaat</li>
              <li><strong>Adres:</strong> Osmangazi Mah. Bilal Habeşi Cad. Şeyh Şamil Sok. No:1, Sancaktepe/İstanbul</li>
              <li><strong>E-posta:</strong> info@gozdeinsaat.com</li>
              <li><strong>Telefon:</strong> 0 (216) 311 09 94</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>2. İşlenen Kişisel Verileriniz ve Toplanma Yöntemi</h2>
            <p>
              Web sitemizi ziyaretiniz sırasında, yalnızca "Teklif Al" ve "İletişim" formları üzerinden bizimle kendi isteğinizle paylaştığınız veriler toplanmaktadır. İşlenen kişisel verileriniz şunlardır:
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
              <li><strong>Kimlik Bilgileri:</strong> Ad, Soyad (veya Kurum Adı)</li>
              <li><strong>İletişim Bilgileri:</strong> Telefon numarası, E-posta adresi (opsiyonel)</li>
              <li><strong>Lokasyon Bilgileri:</strong> Şehir / İlçe</li>
              <li><strong>Diğer:</strong> Saha tipi seçimi ve ek detaylar (serbest not alanı)</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Ayrıca, web sitemizin tasarımı gereği <strong>Google Fonts</strong> kullanılmaktadır. Sitemizi ziyaret ettiğinizde, font dosyalarının yüklenebilmesi için IP adresiniz anlık olarak Google sunucularına iletilebilmektedir. Sitemizde kullanıcı alışkanlıklarını takip eden (Google Analytics, Meta Pixel vb.) herhangi bir analiz veya reklam takip kodu <strong>kullanılmamaktadır</strong>.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>3. Kişisel Verilerin İşlenme Amacı</h2>
            <p>
              Toplanan kişisel verileriniz;
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
              <li>Taleplerinizin alınması, değerlendirilmesi ve size teklif sunulabilmesi,</li>
              <li>Hizmetlerimizle ilgili olarak sizinle iletişim kurulabilmesi,</li>
              <li>Müşteri ilişkileri yönetim süreçlerinin yürütülmesi</li>
            </ul>
            <p style={{ marginTop: 8 }}>
              amaçlarıyla, KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dâhilinde işlenmektedir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>4. İşlemenin Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz, KVKK madde 5/2 (c) bendi uyarınca "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması" ve (f) bendi uyarınca "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması" hukuki sebeplerine dayanılarak işlenmektedir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>5. Kişisel Verilerin Saklama Süresi</h2>
            <p>
              Formlar aracılığıyla ilettiğiniz kişisel verileriniz, doğrudan firma e-posta adresimize güvenli bir şekilde iletilmekte ve sistemlerimizde işlenmektedir. Verileriniz, teklif talebiniz sonuçlanana kadar ve her halükarda talebin alınmasından itibaren en fazla <strong>1 (bir) yıl</strong> süreyle saklanmakta, bu sürenin sonunda güvenli bir şekilde imha edilmektedir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>6. Kişisel Verilerin Üçüncü Kişilerle Paylaşımı</h2>
            <p>
              Web sitemiz üzerinden toplanan kişisel verileriniz, hiçbir suretle reklam, pazarlama veya ticari amaçlarla üçüncü partilere (şirketlere, kurumlara veya kişilere) <strong>satılmaz veya aktarılmaz</strong>. Yalnızca hukuki uyuşmazlıklar halinde yasal bir zorunluluk olması durumunda, yetkili kamu kurum ve kuruluşları ile paylaşılabilir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>7. Çerez (Cookie) Kullanımı</h2>
            <p>
              Sitemizde ziyaretçileri izlemeye, profillemeye veya reklam göstermeye yönelik üçüncü taraf çerezler (cookies) kullanılmamaktadır. Sadece sitenin temel fonksiyonlarının çalışması için zorunlu olan oturum çerezleri bulunabilir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 20, color: "var(--color-line)", marginBottom: 12 }}>8. İlgili Kişi Olarak Haklarınız (KVKK Madde 11)</h2>
            <p>
              KVKK’nın 11. maddesi uyarınca veri sahipleri;
            </p>
            <ul style={{ marginTop: 8, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 4 }}>
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              haklarına sahiptir. Bu haklarınızı kullanmak için taleplerinizi <strong>info@gozdeinsaat.com</strong> e-posta adresine güvenli elektronik imza, mobil imza ya da daha önce firmamıza bildirdiğiniz ve sistemimizde kayıtlı bulunan elektronik posta adresinizi kullanarak iletebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
