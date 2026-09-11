import React from "react";
import { COLORS } from "../theme";
import ServicePage from "../components/ServicePage";

export default function CokAmacliSaha() {
  return (
    <ServicePage
      meta={{
        title: "Çok Amaçlı Spor Sahası Yapımı | Gözde İnşaat",
        description:
          "Tek sahada tenis, basketbol ve voleybol çizgileriyle çok amaçlı spor sahası yapımı. Okul, site ve tesisler için anahtar teslim çözüm. Ücretsiz keşif.",
        canonical: "https://www.gozdeinsaat.com/cok-amacli-saha-yapimi",
      }}
      badge="Çok Amaçlı Saha"
      badgeColor={COLORS.lineDim}
      h1="ÇOK AMAÇLI SPOR SAHASI YAPIMI"
      intro="Tek bir saha yatırımıyla birden fazla spor dalına hizmet verin. Gözde İnşaat olarak
      tenis, basketbol, voleybol ve badminton çizgilerinin birlikte uygulandığı çok amaçlı
      spor sahaları yapıyoruz. Okul bahçelerinden özel sitelere, tatil köylerinden
      belediye parklarına kadar geniş bir uygulama yelpazesine sahibiz."
      forWhom={[
        "İlköğretim & ortaöğretim okulları",
        "Üniversite kampüsleri",
        "Belediye spor parkları",
        "Özel konut siteleri",
        "Tatil köyleri & oteller",
        "Fabrika & kurumsal tesisler",
      ]}
      dimensions={[
        { label: "Yaygın uygulama boyutu", value: "18 × 36 m" },
        { label: "Küçük alan uygulaması", value: "15 × 28 m" },
        { label: "Basketbol çizgisi (FIBA)", value: "28 × 15 m" },
        { label: "Voleybol çizgisi (FIVB)", value: "18 × 9 m" },
        { label: "Tenis çizgisi (ITF)", value: "23.77 × 10.97 m" },
        { label: "Çevre güvenlik tampon alanı", value: "Min. 2 m" },
      ]}
      floors={[
        {
          name: "Akrilik Zemin",
          pros: "En yaygın tercih, farklı renk kombinasyonlarıyla çizgiler net ayrılır, dayanıklı.",
          cons: "Güneşte ısınma olabilir; açık alanlarda hafif renkler tercih edilebilir.",
          image: "/images/hizmetler/akrilikZeminTenisKortu.jpeg",
        },
        {
          name: "Suni Çim",
          pros: "Estetik ve yeşil görünüm, özellikle futbol çizgisi de eklenecekse ideal.",
          cons: "Voleybol ve tenis için resmi turnuva standardı gerektirmeyen tesisler için uygundur.",
          image: "/images/hizmetler/sentetikCimTenisKortu.jpg",
        },
        {
          name: "Tartan (EPDM)",
          pros: "Amortisörlü yapı, farklı sporlar için uygun zemin sertliği.",
          cons: "Diğer seçeneklere kıyasla biraz daha yüksek başlangıç maliyeti.",
          image: "/images/hizmetler/tartanZeminTenisKortu.jpg",
        },
      ]}
      factors={[
        "Kaç spor branşının çizgisi uygulanacak",
        "Zemin tipi seçimi",
        "Alan boyutu (m²)",
        "Aydınlatma sistemi dahil mi?",
        "File direkleri ve pota sistemi",
        "Çevre tel örgü yüksekliği",
        "Alt zemin hazırlık durumu",
      ]}
      faqs={[
        {
          q: "Çok amaçlı sahada hangi sporlar oynanabilir?",
          a: "Zemin ve çizgi planlamasına göre tenis, basketbol, voleybol, badminton ve hatta mini futbol bir arada oynayacak şekilde tasarlanabilir. En yaygın kombinasyon tenis + basketbol + voleybol'dur.",
        },
        {
          q: "Çok amaçlı saha en yaygın hangi ölçüde yapılır?",
          a: "18 × 36 m en yaygın boyuttur; bu ölçüde hem tenis hem de basketbol ve voleybol çizgileri birlikte uygulanabilir. Daha küçük alanlarda 15 × 28 m de tercih edilmektedir.",
        },
        {
          q: "Çizgiler birbirine karışmıyor mu?",
          a: "Farklı sporlar için farklı renkler kullanılır; örneğin tenis çizgileri beyaz, basketbol çizgileri sarı, voleybol çizgileri kırmızı olabilir. Böylece oyuncular kolayca ayırt edebilir.",
        },
        {
          q: "Okul bahçesi için çok amaçlı saha MEB uyumlu mu?",
          a: "Evet. Milli Eğitim Bakanlığı mevzuatına uygun ölçüler ve güvenlik standartları (köşe koruma, file yüksekliği) uygulanarak okul projeleri hazırlanır.",
        },
      ]}
      relatedServices={[
        { label: "Tenis Kortu Yapımı", to: "/tenis-kortu-yapimi" },
        { label: "Basketbol Sahası Yapımı", to: "/basketbol-sahasi-yapimi" },
        { label: "Voleybol Sahası Yapımı", to: "/voleybol-sahasi-yapimi" },
        { label: "Halı Saha Yapımı", to: "/hali-saha-yapimi" },
      ]}
      detailedSections={[
        {
          type: "intro",
          title: "Suni Çim Zemin Çok Amaçlı Saha",
          body: "Sentetik suni çim zeminli çok amaçlı saha yapımı genellikle okullar, toplu konutlar ve siteler için uygundur. Çok amaçlı suni çim saha yaparak halı saha, basketbol sahası ve tenis kortu gibi bir çok farklı spor dalının bir arada icra edilmesine olanak sağlayabilirsiniz. Suni çim çok amaçlı saha ölçüleri genellikle 18m×36m olarak kabul edilmiştir. Ancak site ve okul bahçesi gibi alanlara uygun olarak küçültülebilmektedir. Çok amaçlı sahalarda genellikle 20mm suni çim halı modelimiz tercih edilmektedir.",
        },
        {
          type: "steps",
          title: "Altyapı İşleri",
          items: [
            "Hafriyat: Çok amaçlı saha yapılacak zemin hafriyatı alınarak sıfır kodlu hale getirilir. Saha etrafına çevre hatıl kalıbı için temel kazılır.",
            "Çevre Hatıl Betonu: Saha etrafına belli ölçülerde kalıplar bağlanır. İçerisine Q8″ ve Q12″ lik demirden yapılan donatılar hatıl içine yerleştirilir ve betonlanır.",
            "Çevreleme hatıl üzerine uygun aralıklarla demir plakalar epoksi kimyasal dübeller ile zemine montajları yapılır.",
            "Tüm alana ince mıcır tabakası serilerek eğimlere uygun kalınlıkta Çesan demir donatılı C-25 Hazır beton dökülür.",
            "Mevcut zemin üzerine uygun sentetik suni çim serilerek kum ve granül dolguları yapılır.",
          ],
        },
        {
          type: "steps",
          title: "Çevreleme Direkleri ve Tel Çit Uygulaması",
          items: [
            "Çevre hatıl içerisine yerleştirilen demir plakalar üzerine dikey borular uygun yükseklik verilerek kaynak yapılacaktır.",
            "Spor sahaların dört köşesine yatay borulara paralel diyagonal takviye borular yapılacaktır.",
            "Aydınlatma Direkleri için Saha uzun kenarlarına uygun aralıklarla dikey borular son 3m merdivenli olarak imal edilecektir.",
            "Saha etrafı 50×50×3,5mm göz aralığında, daldırma galvanizli ve PVC kaplı tel örgü uygun yükseklikte gerdirilerek montaj yapılacaktır.",
            "Tel örgü etrafına çelik halatlar gerdirilerek bağlantı aparatları ile bağlanacaktır.",
            "İmal edilmiş olan aydınlatma direklerine Led projektörlerin montajları yapılacak; Panodan projektörlere kadar Elektrik Tesisatı döşenip çalışır vaziyette teslim edilecektir.",
          ],
        },
        {
          type: "grid",
          title: "Suni Çim Zemin Uygulaması",
          items: [
            "Beton veya asfalt zemin üzerine çim halı uygulaması yapılır.",
            "Serilen çim halının ek yerlerine tutkallanan helmetin bezi yerleştirilerek ek yerlerinin iyice yapışması sağlanır.",
            "Yapıştırıcı çift kompenantlı Poliüretan olacaktır.",
            "Saha çizgileri, isteğe bağlı beyaz veya sarı olarak kesilerek ölçülere uygun olarak yerleştirilir.",
            "Halı içine elenmiş, yıkanmış, fırınlanmış silis kumu özel kum dökme ve fırçalama makinesiyle yedirilerek oyun oynamaya hazır hale getirilir.",
          ],
          cols: 2,
        },
        {
          type: "intro",
          title: "Tartan Zemin Çok Amaçlı Saha",
          body: "Tartan zeminli çok amaçlı sahalar Epdm granülden yapılan esnek kauçuk spor alanlarıdır. Tartan zemin genellikle 8mm kalınlığında Sbr granül üzerine 5mm kalınlığında Epdm granüller katman olacak şekilde yerinde çok renkli döküm olarak yapılmaktadır. Tartan zeminli çok amaçlı sahalar okullar, siteler tarafından tercih edildiği gibi aynı zamanda kapalı spor salonlarında da tercih edilebilir.",
        },
        {
          type: "steps",
          title: "Tartan Zemin Uygulama Adımları",
          items: [
            "Beton veya asfalt zemin üzerine önce Astar tabaka oluşturulur.",
            "Astarın üzerine önce SBR zemin sonra EPDM tartan zemin oluşturulur.",
            "Oluşturulan Tartan Zemine ölçülerine uygun Tenis kortu, Basketbol sahası ve Voleybol sahası oyun çizgileri çizilir.",
          ],
        },
      ]}
    />
  );
}
