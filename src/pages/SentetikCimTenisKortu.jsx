import React from "react";
import { COLORS } from "../theme";
import ServicePage from "../components/ServicePage";

export default function SentetikCimTenisKortu() {
  return (
    <ServicePage
      meta={{
        title: "Sentetik Çim Tenis Kortu Yapımı | Gözde İnşaat",
        description:
          "Suni çim tenis kortu yapımı. Estetik görünümü ve yumuşak oyun yüzeyi ile siteler ve okullar için ideal sentetik çim tenis kortları. Ücretsiz teklif.",
        canonical: "https://www.gozdeinsaat.com/sentetik-cim-tenis-kortu-yapimi",
      }}
      badge="Sentetik Çim Tenis Kortu"
      badgeColor={COLORS.green}
      h1="SENTETİK ÇİM TENİS KORTU YAPIMI"
      intro="Sentetik (suni) çim tenis kortları, doğal çim görünümünün estetiğini ve düşük bakım avantajını bir arada sunar. Özel tenis kortu suni çimleri ve silis kumu dolgusu kullanılarak inşa edilen bu sahalar, topun sekme hızını yavaşlatarak oyuna daha rahat bir tempo kazandırır. Özellikle siteler, okullar ve amatör oyuncular için en çok tercih edilen zemin tipidir."
      forWhom={[
        "Siteler ve toplu konut projeleri",
        "Eğitim kurumları (İlk, orta, lise)",
        "Oteller ve dinlenme tesisleri",
        "Amatör spor kulüpleri",
        "Şahsi villalar",
      ]}
      dimensions={[
        { label: "Saha ölçüsü (standart)", value: "18 × 36 m" },
        { label: "Suni çim hav boyu", value: "20 mm - 26 mm" },
        { label: "Oyun alanı uzunluğu", value: "23.77 m" },
        { label: "Oyun alanı genişliği (çiftler)", value: "10.97 m" },
      ]}
      floors={[]}
      factors={[
        "Seçilen suni çim hav boyu ve kalitesi",
        "Saha altyapı işleri (beton atılması)",
        "Çevre hatıl, demir konstrüksiyon ve tel örgü detayları",
        "Aydınlatma sistemi",
        "Konum ve nakliye",
      ]}
      faqs={[
        {
          q: "Tenis kortu için hangi suni çim kullanılmalı?",
          a: "Tenis için top sekme kalitesini etkilememesi adına genellikle 20 mm ile 26 mm hav boyuna sahip, sık dokunmuş özel tenis suni çimleri kullanılır.",
        },
        {
          q: "Suni çim kortların ömrü ne kadardır?",
          a: "Doğru kurulum ve periyodik fırçalama/kum takviyesi yapıldığında, kaliteli bir suni çim kort ortalama 7 ila 10 yıl arasında sorunsuz hizmet verir.",
        },
        {
          q: "Bakımı nasıl yapılır?",
          a: "En önemli bakım, halı içindeki silis kumunun homojen dağılımını korumak için belirli aralıklarla sahayı özel fırçalarla fırçalamaktır. Doğal çim gibi sulama veya biçme gerektirmez.",
        },
      ]}
      detailedSections={[
        {
          type: "intro",
          title: "Sentetik Çim Tenis Kortu Yapımı",
          body: "Sentetik Çim Tenis Kortu, Uluslararası Tenis Federasyonu (ITF) tarafından belirlenen norm ve standartlara göre inşa edilmektedir. Bu standartlara göre tenis kortu yapım alanı, boyda 36 metre ende ise 18 metre toplamda ise 668 metrekare olarak belirlenmiştir. Sentetik çim tenis kortları uluslararası ölçülerin dışında amatör kullanımlar için ihtiyaç duyulan her boyutta inşa edilebilmektedir. Bu konuda uzmanlık kazanmış bulunan Gözde İnşaat, tenis kortu için seçilmiş olan bölgenin zemin özelliklerini de göz önüne alarak yaptığı planlamayla en geç 4 hafta gibi kısa sürede inşası istenen sahaları bitirebilmektedir."
        },
        {
          type: "intro",
          title: "Sentetik Çim Tenis Kortu Yapımı ve Özellikleri",
          body: "Tenis Kortları Gözde İnşaat’ın uzman ve deneyimli ekibiyle 3-4 hafta gibi kısa bir sürede teslim edilmektedir. Altyapı, demir işleri, tel örgü, aydınlatma, suni çim halı serilmesi ve tenis filesi takılması ile anahtar teslim olarak tenis kortları yapılmaktadır. Sentetik çim tenis kortları 18m x 36m ölçüleri dışında amatör kullanım amaçlı alana göre daha küçük olarak da yapılabilmektedir. Sentetik çim tenis kortu yapımı için özel tenis halı modellerimiz mevcuttur. Suni çim tenis halısı modellerimiz 15mm hav boyundan 30mm hav boyuna kadar mevcuttur. Tenis suni çim halısı için genelde 26mm halı modelimiz tercih edilmektedir."
        },
        {
          type: "steps",
          title: "Altyapı İşleri",
          items: [
            "Hafriyat: Tenis kortu yapılması planlanan zemin tesfiye edilerek düzeltilir. Sahanın tüm çevresini dolaşacak hatıl kalıbı için ise temel kazılır.",
            "Çevre Hatıl Betonu: Hatıl için 8 ve 12 Q’luk demir çubuklar kullanılarak hasır yapılır.",
            "Ankraj: Çevre hatıl içerisine, konumlandırılacak çitin ana direklerinin bağlanması amacıyla, düzenli aralıklarla 3” lik ankraj boruları teraziye alınarak yerleştirilir.",
            "Hatıl Betonlama: Çevre hatıl kalıplarına BS 20 formunda hazır beton dökülür.",
            "Drenaj Sistemi: Kortta su birikmesini engellemek amacıyla drenaj kanalları açılır. Uygun malzemeyle saha drenaj sistemi tamamlanınca bu kanalların üstü örtülerek zeminle sıfırlanır.",
            "Saha Dolgusu: Tenis kortunun zemini mıcır dolgu malzemesi ile kaplanır. (Alt tabakaya beton dökülebileceği gibi asfalt uygulaması da yapılabilmektedir.)",
            "Saha Betonlama: Mıcırın üstüne yine hazır beton dökülür ve “helikopter perdah” yöntemiyle iyice perdahlanır."
          ]
        },
        {
          type: "steps",
          title: "Çevre Direkler ve Tel-Çit İşleri",
          items: [
            "Çit İçin Destek Direkleri: Hatıla yerleştirilen ankraj borularına, kaynakla dikey direk boruları ve bu borularını üstüne ise üst, orta ve yatay şekilde olmak üzere destek boruları tutturulur.",
            "Çit İçin Takviye Boruları: Her dört köşede de bulunan yatay borulara diyagonal biçimde takviye uygulanır. Sahanın dört kenarındaki dikey borulara düzgün aralıklarda dikey takviye boruları monte edilir.",
            "Aydınlatma: Tenis kortunun uzun kenarlarına merdiveni de bulunan aydınlatma direkleri konumlandırılır. Aydınlatma direkleri üzerine 400 W aydınlatma kapasitesine sahip metal formda halide cinsinde projektörler yerleştirilir. Elektrik tesisatı da döşenerek çalışır vaziyete getirilir.",
            "Kapı Kurulumu: Bir adet menteşeli kapı yapılır.",
            "File ve Direkleri: Kortun standartlara uygunluğu gözetilerek file demiri için karşılıklı olacak biçimde en uygun noktalar belirlenir. Sentetik çim halı kaplamasının uygulanmasının ardından direkler yerlerine sabitlenir.",
            "Çit Gerilmesi: Kortun etrafındaki direklere 4×4 cm göz aralığına sahip, galvanizlenmiş ve PVC kaplı tel örgü gerilir, çelik halatlar yardımıyla sağlamlaştırılır."
          ]
        },
        {
          type: "steps",
          title: "Suni Çim Halı",
          items: [
            "Çim Halı Serimi: Betonlama işlemi yapılmış zemin üzerine çim halı uygulaması yapılır.",
            "Ek Yerlerinin Sağlamlaştırılması: Suni çim halının ek yerlerine, çift kompenantlı poliüretan tutkal sürülmüş helmetin bezi yerleştirilir.",
            "Kort Çizgilerinin Oluşturulması: Kort çizgileri proje sahibinin istek ve ihtiyaçlarına uygun olarak beyaz ya da sarı renkte kesilirler ve uluslararası normlara uygun olarak kort üzerine yerleştirilirler.",
            "Kumlama: Uygulaması gerçekleştirilen sentetik çim halının üzerine özel olarak silis den üretilmiş tenis kortu kumu dökülür. Fırçalama makinesiyle kum, suni çim üzerine iyice yedirilir."
          ]
        }
      ]}
      relatedServices={[
        { label: "Tenis Kortu Yapımı", to: "/tenis-kortu-yapimi" },
        { label: "Tartan Zemin Tenis Kortu", to: "/tartan-zemin-tenis-kortu-yapimi" },
        { label: "Basketbol Sahası Yapımı", to: "/basketbol-sahasi-yapimi" },
      ]}
    />
  );
}
