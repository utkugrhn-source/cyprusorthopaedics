import type { Lang } from "./site";

type L = Record<Lang, string>;
/** `guide` is the id of one of the clinic's own patient-guide articles; `more` is an article on Dr. Gürhan's personal site. */
export type Condition = { n: string; d: string; more?: L; guide?: string };
export type Area = {
  id: string;
  slug: L;
  title: L;
  lead: L;
  conditions: Record<Lang, Condition[]>;
  urgent: Record<Lang, string[]>;
  /** Replaces the default "go to the emergency department" note where that advice would be wrong. */
  urgentNote?: L;
  /** A page about a way of operating rather than a body region: changes the list heading and the structured-data type. */
  kind?: "procedure";
  listTitle?: L;
};

export const AREAS_SEGMENT: Record<Lang, string> = { tr: "tedavi", en: "treatments" };
export const AREAS_UPDATED = "2026-10-04";

/** Detailed patient articles live on Dr. Gürhan's personal site; region pages link to them rather than repeat them. */
const art = (tr: string, en: string): L => ({ tr: `https://utkugurhan.com/tr/blog/${tr}`, en: `https://utkugurhan.com/en/blog/${en}` });

// Same order as ui.areas.items on the home page.
// Texts are general patient information drafted from the team's stated scope; they need the doctors' review before launch.
export const areas: Area[] = [
  {
    id: "omuz-dirsek",
    slug: { tr: "omuz-ve-dirsek", en: "shoulder-and-elbow" },
    title: { tr: "Omuz ve dirsek", en: "Shoulder and elbow" },
    lead: {
      tr: "Omuz ve dirsek şikâyetlerinin çoğu tendon ve eklem kapsülü kaynaklıdır ve büyük bölümü ameliyatsız tedaviyle düzelir. Düşme sonrası gelişen ağrı ve hareket kaybında kırık ve çıkık araştırılır.",
      en: "Most shoulder and elbow complaints arise from the tendons and the joint capsule, and most improve without surgery. Pain and loss of movement after a fall are assessed for fracture and dislocation.",
    },
    conditions: {
      tr: [
        { n: "Rotator manşet sorunları ve omuz sıkışması", d: "Kolu yana ve yukarı kaldırırken, gece yan yatarken ağrı yapar. Tedavi çoğunlukla egzersiz ve fizik tedaviyle başlar; yırtığın büyüklüğüne ve şikâyete göre artroskopik onarım gündeme gelir.", more: art("omuz-sikisma-sendromu-rotator-manset", "shoulder-impingement-rotator-cuff") },
        { n: "Omuz çıkığı", d: "Omuz başının yuvasından çıkmasıdır ve acil olarak yerine konur. Sonrasında tekrarlama riski yaşa ve eşlik eden hasara göre değerlendirilir; MR ile incelenir.", more: art("omuz-cikigi", "shoulder-dislocation") },
        { n: "Donuk omuz", d: "Omuz hareketlerinin her yöne ağrılı biçimde kısıtlanmasıdır. Aylar süren bir seyir gösterir; tedavinin temeli ağrı kontrolü ve germe egzersizleridir.", more: art("donuk-omuz", "frozen-shoulder") },
        { n: "Tenisçi dirseği", d: "Dirseğin dış yanında, kavrama ve bilek hareketleriyle artan ağrıdır. Çoğu hastada yük düzenlemesi ve egzersizle geçer.", more: art("tenisci-dirsegi", "tennis-elbow") },
        { n: "Omuz ve dirsek çevresi kırıkları", d: "Köprücük kemiği, kol kemiğinin üst ucu ve dirsek kırıklarını kapsar. Kırığın yerine ve kaymasına göre askı, alçı ya da ameliyatla tespit seçilir." },
      ],
      en: [
        { n: "Rotator cuff problems and shoulder impingement", d: "Pain on lifting the arm sideways and overhead, and when lying on that side at night. Treatment usually starts with exercise and physiotherapy; arthroscopic repair is considered depending on the size of the tear and the symptoms.", more: art("omuz-sikisma-sendromu-rotator-manset", "shoulder-impingement-rotator-cuff") },
        { n: "Shoulder dislocation", d: "The ball of the shoulder comes out of its socket and is put back as an emergency. The risk of it happening again is then assessed by age and associated damage, with an MRI scan.", more: art("omuz-cikigi", "shoulder-dislocation") },
        { n: "Frozen shoulder", d: "Painful restriction of shoulder movement in every direction. It runs a course of months; treatment rests on pain control and stretching exercises.", more: art("donuk-omuz", "frozen-shoulder") },
        { n: "Tennis elbow", d: "Pain on the outer side of the elbow that worsens with gripping and wrist movement. In most patients it settles with load adjustment and exercise.", more: art("tenisci-dirsegi", "tennis-elbow") },
        { n: "Fractures around the shoulder and elbow", d: "These include fractures of the collarbone, the upper end of the arm bone and the elbow. Depending on the site and displacement, treatment is a sling, a cast or surgical fixation." },
      ],
    },
    urgent: {
      tr: ["Düşme ya da çarpma sonrası kolda şekil bozukluğu, şişlik ve hareket ettirememe", "Omuz çıkığı şüphesi", "Kolda uyuşma, güç kaybı ya da elde soğukluk ve renk değişikliği"],
      en: ["Deformity, swelling and inability to move the arm after a fall or blow", "Suspected shoulder dislocation", "Numbness or weakness in the arm, or a cold, discoloured hand"],
    },
  },
  {
    id: "el-bilek",
    slug: { tr: "el-ve-el-bilegi", en: "hand-and-wrist" },
    title: { tr: "El ve el bileği", en: "Hand and wrist" },
    lead: {
      tr: "El ve el bileğinde sinir sıkışmalarını, tendon hastalıklarını, kırıkları ve kesici alet yaralanmalarını tedavi ediyoruz. Tendon, sinir ve damar onarımlarını mikrocerrahi yöntemle yapıyoruz.",
      en: "In the hand and wrist we treat nerve compression, tendon disorders, fractures and cut injuries. We repair tendons, nerves and vessels with microsurgical technique.",
    },
    conditions: {
      tr: [
        { n: "Karpal tünel sendromu", d: "Median sinirin bilekte sıkışmasıdır; başparmak, işaret ve orta parmakta uyuşma ve gece uyandıran karıncalanma yapar. Hafif olgularda gece ateli ve enjeksiyon, ilerlemiş olgularda sinirin gevşetilmesi uygulanır.", more: art("karpal-tunel-sendromu", "carpal-tunnel-syndrome") },
        { n: "Tetik parmak", d: "Parmağın bükülüp açılırken takılması ve kilitlenmesidir. Enjeksiyon çoğu hastada yeterlidir; tekrarlayan olgularda küçük bir girişimle tendon kılıfı gevşetilir.", more: art("tetik-parmak", "trigger-finger") },
        { n: "De Quervain tenosinoviti", d: "Bileğin başparmak tarafında, kavrama ve kaldırma ile artan ağrıdır. Atel, yük düzenlemesi ve enjeksiyonla tedavi edilir.", more: art("de-quervain-tenosinoviti", "de-quervain-tenosynovitis") },
        { n: "Ganglion kisti", d: "El bileğinde ya da parmakta, eklem veya tendon kılıfından kaynaklanan içi sıvı dolu şişliktir. Şikâyet yapmıyorsa izlenir; ağrı ya da hareket kısıtlılığı yapıyorsa çıkarılabilir.", more: art("ganglion-kisti", "ganglion-cyst") },
        { n: "El bileği kırığı", d: "En sık düşme sonrası görülür. Kayma azsa alçı, eklem yüzü bozulmuşsa ya da kırık dengesizse plak ve vidayla tespit uygulanır.", more: art("el-bilegi-kirigi-distal-radius", "broken-wrist-distal-radius-fracture") },
        { n: "Tendon ve sinir kesileri", d: "Cam ve bıçak gibi kesici yaralanmalardan sonra parmağı hareket ettirememe ya da uyuşma, tendon veya sinir kesisini düşündürür. Onarım erken dönemde yapıldığında sonuç daha iyidir.", more: art("elde-tendon-ve-sinir-yaralanmalari", "hand-tendon-nerve-injuries") },
        { n: "Replantasyon (kopan parmağın ya da elin yerine dikilmesi)", d: "Kopan parmak ya da el; kemik, tendon, damar ve sinirleri mikroskop altında tek tek onarılarak yerine dikilir. Zamana karşı yapılan bir ameliyattır; uygun olup olmadığı yaralanmanın tipine, kopan parçanın durumuna ve geçen süreye göre değerlendirilir." },
        { n: "Parmak ucu yaralanmaları", d: "Ezilme ve kopmalarda tırnak yatağı onarımı, doku nakli ya da uygun olgularda kopan parçanın yerine dikilmesi değerlendirilir." },
        { n: "Tırnak problemleri", d: "Tırnak yatağı yaralanmaları, tırnak çevresi iltihabı (dolama), tırnak batması ve yaralanma sonrası tırnak şekil bozukluklarını kapsar. Tedavi, sorunun türüne göre pansuman ve ilaçtan küçük bir cerrahi girişime kadar değişir." },
      ],
      en: [
        { n: "Carpal tunnel syndrome", d: "Compression of the median nerve at the wrist, causing numbness in the thumb, index and middle fingers and tingling that wakes you at night. Mild cases are treated with a night splint and injection; advanced cases with release of the nerve.", more: art("karpal-tunel-sendromu", "carpal-tunnel-syndrome") },
        { n: "Trigger finger", d: "The finger catches and locks as it bends and straightens. An injection is enough for most patients; in recurrent cases the tendon sheath is released in a minor procedure.", more: art("tetik-parmak", "trigger-finger") },
        { n: "De Quervain’s tenosynovitis", d: "Pain on the thumb side of the wrist that worsens with gripping and lifting. It is treated with a splint, load adjustment and injection.", more: art("de-quervain-tenosinoviti", "de-quervain-tenosynovitis") },
        { n: "Ganglion cyst", d: "A fluid-filled swelling at the wrist or finger arising from a joint or tendon sheath. If it causes no trouble it is observed; if it causes pain or limits movement it can be removed.", more: art("ganglion-kisti", "ganglion-cyst") },
        { n: "Wrist fracture", d: "Most often follows a fall. A cast is used when displacement is slight; plate and screw fixation when the joint surface is disrupted or the fracture is unstable.", more: art("el-bilegi-kirigi-distal-radius", "broken-wrist-distal-radius-fracture") },
        { n: "Tendon and nerve lacerations", d: "After a cut from glass or a knife, being unable to move a finger, or numbness, suggests a divided tendon or nerve. Results are better when repair is done early.", more: art("elde-tendon-ve-sinir-yaralanmalari", "hand-tendon-nerve-injuries") },
        { n: "Replantation (reattaching a severed finger or hand)", d: "A severed finger or hand is reattached by repairing the bone, tendons, vessels and nerves one by one under the microscope. It is surgery against the clock; whether it is suitable depends on the type of injury, the condition of the severed part and the time elapsed." },
        { n: "Fingertip injuries", d: "In crush injuries and amputations, the options are nail-bed repair, tissue cover or, in suitable cases, reattachment of the severed part." },
        { n: "Nail problems", d: "These include nail-bed injuries, infection around the nail (paronychia), ingrown nails and nail deformity after injury. Depending on the problem, treatment ranges from dressings and medication to a minor procedure." },
      ],
    },
    urgent: {
      tr: ["Kesi sonrası parmağı bükememe, açamama ya da uyuşma", "Kopma ve ezilme yaralanmaları: kopan parça temiz, nemli bir beze sarılıp kapalı bir poşete, poşet de buzlu suya konularak getirilir; parça buza doğrudan değdirilmez", "Düşme sonrası bilekte şişlik ve şekil bozukluğu"],
      en: ["Being unable to bend or straighten a finger, or numbness, after a cut", "Amputation and crush injuries: wrap the severed part in a clean, damp cloth, seal it in a plastic bag and place the bag in iced water; do not let the part touch ice directly", "Swelling and deformity of the wrist after a fall"],
    },
  },
  {
    id: "kalca",
    slug: { tr: "kalca", en: "hip" },
    title: { tr: "Kalça", en: "Hip" },
    lead: {
      tr: "Kalça şikâyetleri en sık kireçlenmeye ve ileri yaştaki kırıklara bağlıdır. Kasık ağrısı, yürüme mesafesinin kısalması ve çorap giymekte zorlanma kalça ekleminin değerlendirilmesini gerektirir.",
      en: "Hip complaints are most often due to arthritis and, in older age, fractures. Groin pain, a shorter walking distance and difficulty putting on socks call for an assessment of the hip joint.",
    },
    conditions: {
      tr: [
        { n: "Kalça kireçlenmesi (osteoartrit)", d: "Eklem kıkırdağının aşınmasıdır; kasıkta ve uylukta ağrı, sabah tutukluğu ve topallama yapar. Kilo kontrolü, egzersiz ve ağrı tedavisiyle başlanır.", guide: "hip-oa" },
        { n: "Kalça protezi", d: "Ameliyatsız tedaviye rağmen ağrı günlük yaşamı kısıtlıyorsa, aşınmış eklem yüzeyleri yapay eklemle değiştirilir.", guide: "hip-replacement-recovery" },
        { n: "Yaşlılarda kalça kırığı", d: "Çoğunlukla ev içinde basit bir düşmeyle olur ve hemen her zaman ameliyat gerektirir. Amaç hastayı en kısa sürede yeniden ayağa kaldırmaktır.", more: art("yaslilarda-kalca-kirigi", "hip-fracture-in-older-adults") },
      ],
      en: [
        { n: "Hip arthritis (osteoarthritis)", d: "Wear of the joint cartilage, causing pain in the groin and thigh, morning stiffness and a limp. Treatment starts with weight control, exercise and pain relief.", guide: "hip-oa" },
        { n: "Hip replacement", d: "When pain still restricts daily life despite non-surgical treatment, the worn joint surfaces are replaced with an artificial joint.", guide: "hip-replacement-recovery" },
        { n: "Hip fracture in older adults", d: "Usually follows a simple fall at home and almost always needs an operation. The aim is to get the patient back on their feet as soon as possible.", more: art("yaslilarda-kalca-kirigi", "hip-fracture-in-older-adults") },
      ],
    },
    urgent: {
      tr: ["Düşme sonrası ayağa kalkamama, bacakta kısalık ve dışa dönme", "Kalça protezi olan hastada ani ağrı, şişlik, ateş ya da yara yerinde akıntı"],
      en: ["Being unable to stand after a fall, with the leg shortened and turned outwards", "Sudden pain, swelling, fever or wound discharge in a patient with a hip replacement"],
    },
  },
  {
    id: "diz",
    slug: { tr: "diz", en: "knee" },
    title: { tr: "Diz", en: "Knee" },
    lead: {
      tr: "Diz, spor yaralanmalarının ve kireçlenmenin en sık görüldüğü eklemdir. Muayeneyle birlikte röntgen ve gerektiğinde MR ile menisküs, bağ ve kıkırdak değerlendirilir.",
      en: "The knee is the joint most often affected by sports injuries and arthritis. Alongside examination, X-rays and, where needed, MRI are used to assess the menisci, ligaments and cartilage.",
    },
    conditions: {
      tr: [
        { n: "Menisküs yırtığı", d: "Dizde dönme hareketi sonrası ağrı, şişlik, takılma ve kilitlenme yapar. Yırtığın tipine ve yaşa göre egzersiz, artroskopik onarım ya da yırtık parçanın alınması seçilir.", more: art("menisku-yirtigi", "meniscus-tear") },
        { n: "Ön çapraz bağ yaralanması", d: "Ani yön değiştirme ya da sıçrama sonrası dizde boşalma hissi ve şişlikle ortaya çıkar. Aktivite düzeyine ve dizdeki güvensizlik hissine göre rehabilitasyon ya da artroskopik bağ rekonstrüksiyonu yapılır.", more: art("on-capraz-bag-yirtigi", "acl-tear") },
        { n: "Diz kireçlenmesi", d: "Merdiven inip çıkarken ve uzun yürüyüşte ağrı, tutukluk ve şişlik yapar. Egzersiz, kilo kontrolü ve eklem içi enjeksiyonlar ilk basamaktır.", more: art("diz-kireclenmesi", "knee-osteoarthritis") },
        { n: "Diz protezi", d: "İleri kireçlenmede, diğer tedavilerle ağrı kontrol edilemediğinde aşınmış eklem yüzeyleri protezle değiştirilir.", guide: "knee-replacement" },
        { n: "Diz çevresi kırıkları", d: "Diz kapağı, uyluk kemiğinin alt ucu ve kaval kemiğinin üst ucundaki kırıklar eklem yüzünü ilgilendirdiğinde çoğunlukla ameliyatla tespit edilir." },
      ],
      en: [
        { n: "Meniscal tear", d: "Pain, swelling, catching and locking after a twisting movement of the knee. Depending on the type of tear and the patient’s age, treatment is exercise, arthroscopic repair or removal of the torn fragment.", more: art("menisku-yirtigi", "meniscus-tear") },
        { n: "Anterior cruciate ligament injury", d: "Follows a sudden change of direction or a jump, with the knee giving way and swelling. Depending on activity level and how unstable the knee feels, treatment is rehabilitation or arthroscopic ligament reconstruction.", more: art("on-capraz-bag-yirtigi", "acl-tear") },
        { n: "Knee arthritis", d: "Pain, stiffness and swelling on stairs and on long walks. Exercise, weight control and injections into the joint are the first steps.", more: art("diz-kireclenmesi", "knee-osteoarthritis") },
        { n: "Knee replacement", d: "In advanced arthritis, when pain cannot be controlled by other treatment, the worn joint surfaces are replaced with a prosthesis.", guide: "knee-replacement" },
        { n: "Fractures around the knee", d: "Fractures of the kneecap, the lower end of the thigh bone and the upper end of the shin bone are usually fixed surgically when they involve the joint surface." },
      ],
    },
    urgent: {
      tr: ["Yaralanma sonrası dizin hızla şişmesi ve üzerine basamama", "Dizin kilitlenip açılmaması", "Dizde kızarıklık, sıcaklık ve ateşle birlikte ağrı"],
      en: ["Rapid swelling of the knee after an injury and being unable to bear weight", "A knee that locks and will not straighten", "Knee pain with redness, warmth and fever"],
    },
  },
  {
    id: "ayak-bilek",
    slug: { tr: "ayak-ve-ayak-bilegi", en: "foot-and-ankle" },
    title: { tr: "Ayak ve ayak bileği", en: "Foot and ankle" },
    lead: {
      tr: "Ayak bileği burkulmaları ve kırıkları acil servise en sık başvuru nedenlerindendir. Ayak ön kısmındaki şekil bozuklukları ve tendon sorunları da bu bölümde değerlendirilir.",
      en: "Ankle sprains and fractures are among the commonest reasons for attending the emergency department. Forefoot deformities and tendon problems are also assessed here.",
    },
    conditions: {
      tr: [
        { n: "Ayak bileği burkulması", d: "Dış yan bağların zorlanması ya da yırtılmasıdır. Çoğu burkulma kısa süreli destek, erken hareket ve denge egzersizleriyle iyileşir; tekrarlayan burkulmalarda bağ onarımı gündeme gelir.", more: art("ayak-bilegi-burkulmasi", "ankle-sprain") },
        { n: "Ayak bileği kırığı", d: "Kırığın dengeli olup olmadığına göre alçı ya da ameliyat seçilir; karar verirken kemikle birlikte bağların durumu da değerlendirilir.", more: art("ayak-bilegi-kirigi", "broken-ankle-fracture") },
        { n: "Halluks valgus", d: "Ayak başparmağının dışa kayması ve iç yanda çıkıntı oluşmasıdır. Geniş burunlu ayakkabıyla şikâyet azalır; ağrı sürerse kemik düzeltme ameliyatı yapılır." },
        { n: "Aşil tendonu sorunları", d: "Topuk arkasında ağrı ve sabah tutukluğu tendon hastalığını, ani ve şiddetli ağrıyla birlikte parmak ucunda yükselememe ise kopmayı düşündürür." },
      ],
      en: [
        { n: "Ankle sprain", d: "A strain or tear of the ligaments on the outer side of the ankle. Most sprains heal with brief support, early movement and balance exercises; ligament repair is considered for recurrent sprains.", more: art("ayak-bilegi-burkulmasi", "ankle-sprain") },
        { n: "Ankle fracture", d: "A cast or surgery is chosen according to whether the fracture is stable; the state of the ligaments is assessed along with the bone.", more: art("ayak-bilegi-kirigi", "broken-ankle-fracture") },
        { n: "Hallux valgus (bunion)", d: "The big toe drifts outwards and a bump forms on the inner side. Wide-fitting shoes ease the symptoms; if pain persists, the bone is realigned surgically." },
        { n: "Achilles tendon problems", d: "Pain behind the heel with morning stiffness suggests tendon disease; sudden severe pain with inability to rise on tiptoe suggests a rupture." },
      ],
    },
    urgent: {
      tr: ["Burkulma sonrası dört adım atamama ya da kemik üzerinde belirgin ağrı", "Topuk arkasında ani ağrı ve parmak ucunda yükselememe", "Ayakta şekil bozukluğu ya da açık yara ile birlikte yaralanma"],
      en: ["Being unable to take four steps after a sprain, or marked tenderness over the bone", "Sudden pain behind the heel and inability to rise on tiptoe", "An injury with deformity of the foot or an open wound"],
    },
  },
  {
    id: "artroskopi",
    kind: "procedure",
    slug: { tr: "artroskopik-cerrahi", en: "arthroscopic-surgery" },
    title: { tr: "Artroskopik cerrahi (kapalı eklem ameliyatı)", en: "Arthroscopic surgery (keyhole joint surgery)" },
    lead: {
      tr: "Artroskopi, eklemin içine birkaç milimetrelik kesilerden yerleştirilen kamera ve ince aletlerle yapılan ameliyattır; halk arasında kapalı ameliyat olarak bilinir. En sık dizde ve omuzda, menisküs, bağ ve tendon sorunlarında; ayrıca dirsek, el bileği ve ayak bileğinde uyguluyoruz.",
      en: "Arthroscopy is surgery carried out inside a joint with a camera and fine instruments passed through cuts a few millimetres long; it is often called keyhole surgery. We use it most in the knee and the shoulder, for meniscus, ligament and tendon problems, and also in the elbow, the wrist and the ankle.",
    },
    listTitle: { tr: "Artroskopiyle yaptığımız ameliyatlar", en: "Operations we do arthroscopically" },
    conditions: {
      tr: [
        { n: "Diz artroskopisi: menisküs ameliyatı", d: "Yırtık menisküs, yırtığın yerine ve tipine göre dikilir ya da hasarlı bölümü alınır. Her menisküs yırtığı ameliyat gerektirmez; karar şikâyete, muayeneye ve MR bulgusuna göre verilir.", guide: "meniscus-clinic" },
        { n: "Ön çapraz bağ ameliyatı", d: "Kopan bağın yerine, çoğunlukla hastanın kendi tendonundan hazırlanan greft kamera eşliğinde yerleştirilir. Ameliyat sonrası fizik tedavi sonucun önemli bir parçasıdır.", guide: "acl-tear-clinic" },
        { n: "Omuz artroskopisi: rotator manşet onarımı", d: "Yırtılan tendon, kemiğe yerleştirilen dikiş çapalarıyla yerine tespit edilir. Onarım kararı yırtığın büyüklüğüne, yaşa ve şikâyete göre verilir.", guide: "rotator-cuff-clinic" },
        { n: "Omuz çıkığı ameliyatı (stabilizasyon)", d: "Tekrarlayan omuz çıkıklarında, yırtılan labrum ve eklem kapsülü dikiş çapalarıyla kemiğe yeniden tutturulur.", guide: "shoulder-dislocation-clinic" },
        { n: "Dirsek artroskopisi", d: "Eklem içindeki serbest cisimlerin çıkarılmasında, hareket kısıtlılığına yol açan dokuların gevşetilmesinde ve bazı kıkırdak sorunlarında kullanılır." },
        { n: "El bileği artroskopisi", d: "El bileği ekleminin içi kamerayla değerlendirilir. Üçgen fibrokartilaj (TFCC) yırtıklarında, bazı ganglion kistlerinde ve eklem içine uzanan kırıkların yerine oturtulmasında kullanılır." },
        { n: "Ayak bileği artroskopisi", d: "Ayak bileğindeki kıkırdak hasarlarında, yumuşak doku ya da kemik sıkışmasına bağlı ağrılarda ve eklem içindeki serbest cisimlerin çıkarılmasında kullanılır." },
        { n: "Açık ameliyattan farkı", d: "Kesiler küçük olduğu için ameliyat sonrası ağrı ve hastanede kalış süresi açık ameliyata göre genellikle daha azdır; eklemin içindeki yapılar kamera görüntüsünde büyütülerek değerlendirilir. İyileşme süresi yapılan işleme göre değişir: dikiş ya da bağ onarımı yapıldıysa koruma dönemi daha uzundur." },
      ],
      en: [
        { n: "Knee arthroscopy: meniscus surgery", d: "A torn meniscus is either stitched or has its damaged part removed, depending on where and how it is torn. Not every meniscal tear needs surgery; the decision rests on the symptoms, the examination and the MRI findings.", guide: "meniscus-clinic" },
        { n: "Anterior cruciate ligament reconstruction", d: "The torn ligament is replaced with a graft, usually prepared from the patient’s own tendon, placed under camera view. Physiotherapy after the operation is an important part of the result.", guide: "acl-tear-clinic" },
        { n: "Shoulder arthroscopy: rotator cuff repair", d: "The torn tendon is fixed back to the bone with suture anchors. Whether to repair depends on the size of the tear, age and symptoms.", guide: "rotator-cuff-clinic" },
        { n: "Shoulder stabilisation for dislocation", d: "For recurrent shoulder dislocation, the torn labrum and joint capsule are reattached to the bone with suture anchors.", guide: "shoulder-dislocation-clinic" },
        { n: "Elbow arthroscopy", d: "Used to remove loose bodies from the joint, to release tissue that limits movement and for some cartilage problems." },
        { n: "Wrist arthroscopy", d: "The inside of the wrist joint is assessed with the camera. It is used for tears of the triangular fibrocartilage (TFCC), some ganglion cysts and to help line up fractures that extend into the joint." },
        { n: "Ankle arthroscopy", d: "Used for cartilage damage in the ankle, pain from soft tissue or bony impingement and to remove loose bodies from the joint." },
        { n: "How it differs from open surgery", d: "Because the cuts are small, pain after the operation and the hospital stay are generally less than with open surgery, and the structures inside the joint are assessed magnified on the camera image. Recovery time depends on what was done: after a stitched repair or a ligament reconstruction the period of protection is longer." },
      ],
    },
    urgent: {
      tr: ["Ameliyat sonrası artan ağrı, şişlik, kızarıklık, yara yerinden akıntı ya da ateş", "Baldırda ağrı, şişlik ve gerginlik", "Düşme ya da burkulma sonrası dizin kilitlenmesi ve tam açılamaması", "Omzun yerinden çıktığından şüphelenilmesi"],
      en: ["Increasing pain, swelling, redness, discharge from the wound or fever after the operation", "Pain, swelling and tightness in the calf", "A knee that locks and will not straighten fully after a fall or twist", "A shoulder you suspect has dislocated"],
    },
  },
  {
    id: "kirik-travma",
    slug: { tr: "kirik-ve-travma", en: "fractures-and-trauma" },
    title: { tr: "Kırık ve travma", en: "Fractures and trauma" },
    lead: {
      tr: "Kırık ve çıkıklara hastanenin acil servisi üzerinden bakıyoruz. Tedavinin amacı kemiğin doğru dizilimde kaynaması ve eklemin en kısa sürede yeniden hareket ettirilebilmesidir.",
      en: "We see fractures and dislocations through the hospital’s emergency department. The aim of treatment is for the bone to heal in the correct alignment and for the joint to move again as soon as possible.",
    },
    conditions: {
      tr: [
        { n: "Alçı ve atelle tedavi", d: "Kayması az ve dengeli kırıklar alçı ya da atelle tedavi edilir; kaynama aralıklı röntgenlerle izlenir." },
        { n: "Ameliyatla tespit", d: "Kaymış, eklem yüzünü bozan ya da dengesiz kırıklarda plak, vida ya da kemik içi çivi kullanılır." },
        { n: "Açık kırıklar", d: "Kırığın açık bir yarayla ilişkili olduğu durumlardır; enfeksiyon riski nedeniyle acil ameliyat gerektirir." },
        { n: "Çoklu yaralanmalar", d: "Trafik kazası ve yüksekten düşme gibi yaralanmalarda birden fazla kırık, diğer branşlarla birlikte ve öncelik sırasıyla tedavi edilir." },
        { n: "Kaynamayan ve yanlış kaynayan kırıklar", d: "Beklenen sürede kaynamayan ya da bozuk dizilimde kaynayan kırıklarda neden araştırılır; gerektiğinde tespit yenilenir ve kemik grefti uygulanır." },
      ],
      en: [
        { n: "Treatment in a cast or splint", d: "Stable fractures with little displacement are treated in a cast or splint, and healing is followed with X-rays at intervals." },
        { n: "Surgical fixation", d: "Displaced or unstable fractures, and those that disrupt a joint surface, are fixed with plates, screws or an intramedullary nail." },
        { n: "Open fractures", d: "Fractures that communicate with an open wound; because of the risk of infection they need emergency surgery." },
        { n: "Multiple injuries", d: "After road traffic accidents and falls from a height, several fractures are treated in order of priority together with other specialties." },
        { n: "Non-union and malunion", d: "When a fracture fails to heal in the expected time or heals in poor alignment, the cause is investigated; where needed the fixation is revised and bone graft is used." },
      ],
    },
    urgent: {
      tr: ["Şekil bozukluğu, kemiğin göründüğü yara ya da kanama", "Yaralanan kol ya da bacakta uyuşma, soğukluk, renk değişikliği", "Alçı içinde giderek artan ağrı, parmaklarda şişlik ve uyuşma"],
      en: ["Deformity, a wound with visible bone, or bleeding", "Numbness, coldness or discolouration of the injured arm or leg", "Increasing pain inside a cast, with swollen or numb fingers or toes"],
    },
  },
  {
    id: "cocuk",
    slug: { tr: "cocuk-ortopedisi", en: "childrens-orthopaedics" },
    title: { tr: "Çocuk ortopedisi", en: "Children’s orthopaedics" },
    lead: {
      tr: "Çocuk kemikleri büyüme kıkırdakları nedeniyle erişkinden farklı kırılır ve farklı iyileşir. Kırıkların çoğu alçıyla tedavi edilir.",
      en: "Because of their growth plates, children’s bones break and heal differently from adults’. Most fractures are treated in a cast.",
    },
    conditions: {
      tr: [
        { n: "Çocukluk çağı kırıkları", d: "En sık ön kol, dirsek ve köprücük kemiğinde görülür. Kaynama hızlıdır; kaymış kırıklarda kapalı düzeltme ve gerekirse tel ile tespit yapılır." },
        { n: "Dirsek çevresi kırıkları", d: "Düşme sonrası dirsekte şişlik ve kolu kullanmama, dirsek üstü (suprakondiler) kırığı düşündürür ve acil değerlendirme gerektirir." },
        { n: "Büyüme kıkırdağı yaralanmaları", d: "Kemik uçlarındaki büyüme bölgesini ilgilendiren kırıklar, büyüme üzerindeki etkisi nedeniyle kontrol muayeneleriyle izlenir." },
        { n: "Yürüme ve dizilim şikâyetleri", d: "İçe basma, bacaklarda eğrilik ve topallama gibi şikâyetlerde muayeneyle normal gelişim ile tedavi gerektiren durumlar ayırt edilir." },
      ],
      en: [
        { n: "Childhood fractures", d: "Most often in the forearm, elbow and collarbone. Healing is quick; displaced fractures are realigned without opening the skin and, where needed, held with wires." },
        { n: "Fractures around the elbow", d: "Swelling of the elbow after a fall, with the child not using the arm, suggests a supracondylar fracture and needs urgent assessment." },
        { n: "Growth plate injuries", d: "Fractures involving the growing zone at the ends of the bones are followed up because of their possible effect on growth." },
        { n: "Walking and alignment concerns", d: "For in-toeing, bowed legs or a limp, examination distinguishes normal development from conditions that need treatment." },
      ],
    },
    urgent: {
      tr: ["Düşme sonrası kolunu ya da bacağını kullanmayan çocuk", "Dirsekte hızla gelişen şişlik", "Ateşle birlikte topallama ya da bacağına basmama"],
      en: ["A child who will not use an arm or leg after a fall", "Rapidly developing swelling of the elbow", "A limp or refusal to bear weight together with fever"],
    },
  },
  {
    id: "tumor",
    slug: { tr: "kemik-ve-yumusak-doku-tumorleri", en: "bone-and-soft-tissue-tumours" },
    title: { tr: "Kemik ve yumuşak doku tümörleri", en: "Bone and soft tissue tumours" },
    lead: {
      tr: "Kemikte ya da kas ve yağ dokusunda fark edilen kitlelerin büyük bölümü iyi huyludur. Yine de her kitlenin muayene ve görüntülemeyle değerlendirilmesi, gerektiğinde biyopsiyle tanı konması gerekir.",
      en: "Most lumps found in bone, muscle or fat are benign. Even so, every lump should be assessed by examination and imaging, with a biopsy to establish the diagnosis where needed.",
    },
    conditions: {
      tr: [
        { n: "İyi huylu kemik tümörleri ve kistleri", d: "Çoğu başka bir nedenle çekilen röntgende tesadüfen görülür. Bir kısmı yalnızca izlenir; ağrı yapan, büyüyen ya da kemiği zayıflatanlar ameliyatla temizlenir." },
        { n: "Yumuşak doku kitleleri", d: "En sık yağ bezesi (lipom) görülür. Büyüyen, derin yerleşimli ya da ağrılı kitleler MR ile incelenir; tanı gerektiğinde biyopsiyle konur." },
        { n: "Kötü huylu kemik ve yumuşak doku tümörleri (sarkomlar)", d: "Nadir görülür. Tanı biyopsiyle konur; tedavi cerrahi, onkoloji ve radyasyon onkolojisiyle birlikte planlanır." },
        { n: "Kemik metastazları ve patolojik kırıklar", d: "Başka bir organdaki kanserin kemiğe yayılması ağrıya ve kemiğin zayıflamasına yol açabilir. Kırılmış ya da kırılma riski taşıyan kemik ameliyatla güçlendirilir." },
      ],
      en: [
        { n: "Benign bone tumours and cysts", d: "Many are found by chance on an X-ray taken for another reason. Some are simply observed; those that are painful, growing or weakening the bone are removed surgically." },
        { n: "Soft tissue lumps", d: "The most common is a fatty lump (lipoma). Lumps that are growing, deep or painful are examined with MRI, and a biopsy establishes the diagnosis where needed." },
        { n: "Malignant bone and soft tissue tumours (sarcomas)", d: "These are rare. The diagnosis is made by biopsy; treatment is planned jointly by surgery, oncology and radiation oncology." },
        { n: "Bone metastases and pathological fractures", d: "Cancer that has spread to bone from another organ can cause pain and weaken the bone. A bone that has broken, or is at risk of breaking, is strengthened surgically." },
      ],
    },
    urgent: {
      tr: ["Hızla büyüyen ya da 5 santimetreden büyük kitle", "Gece uyandıran, dinlenmekle geçmeyen kemik ağrısı", "Hafif bir zorlanmayla ya da düşmeden oluşan kırık"],
      en: ["A lump that is growing quickly or is larger than 5 centimetres", "Bone pain that wakes you at night and does not ease with rest", "A fracture after minor strain or without a fall"],
    },
    urgentNote: {
      tr: "Kitle ve ağrıda beklemeyin, birkaç gün içinde muayene için randevu alın. Kırık şüphesinde acil servise gidin.",
      en: "For a lump or pain, do not wait: book an examination within a few days. If you suspect a fracture, go to the emergency department.",
    },
  },
];

export const getArea = (lang: Lang, slug: string) => areas.find((a) => a.slug[lang] === slug);
export const areaUrl = (lang: Lang, a: Area) => `/${lang}/${AREAS_SEGMENT[lang]}/${a.slug[lang]}`;

/** Search titles and descriptions: the page's own conditions, named the way patients search for them. */
export const areaSeo: Record<string, { title: L; desc: L }> = {
  "omuz-dirsek": {
    title: { tr: "Omuz ve dirsek ağrısı, yırtık ve çıkık tedavisi", en: "Shoulder and elbow pain, tears and dislocation" },
    desc: { tr: "Girne’de omuz ve dirsek tedavisi: rotator manşet yırtığı, omuz çıkığı, donuk omuz, tenisçi dirseği ve kırıklar. Çoğu şikâyet ameliyatsız düzelir.", en: "Shoulder and elbow care in Kyrenia: rotator cuff tears, shoulder dislocation, frozen shoulder, tennis elbow and fractures. Most improve without surgery." },
  },
  "el-bilek": {
    title: { tr: "El cerrahisi ve mikrocerrahi", en: "Hand surgery and microsurgery" },
    desc: { tr: "Girne’de el cerrahisi: karpal tünel, tetik parmak, el bileği kırığı, tendon ve sinir kesileri, replantasyon (kopan parmağın dikilmesi), tırnak problemleri.", en: "Hand surgery in Kyrenia: carpal tunnel, trigger finger, wrist fracture, tendon and nerve repair, replantation of severed fingers, nail problems." },
  },
  kalca: {
    title: { tr: "Kalça ağrısı, kalça kırığı ve kalça protezi", en: "Hip pain, hip fracture and hip replacement" },
    desc: { tr: "Girne’de kalça tedavisi: kalça kireçlenmesi, kalça protezi ve yaşlılarda kalça kırığı. Kasık ağrısı ve yürüme mesafesinin kısalması değerlendirme gerektirir.", en: "Hip care in Kyrenia: hip arthritis, hip replacement and hip fracture in older adults. Groin pain and a shorter walking distance call for an assessment." },
  },
  diz: {
    title: { tr: "Diz ağrısı, menisküs ve bağ yaralanmaları", en: "Knee pain, meniscus and ligament injuries" },
    desc: { tr: "Girne’de diz tedavisi: menisküs yırtığı, ön çapraz bağ yaralanması, diz kireçlenmesi, diz protezi ve kırıklar. Muayene, röntgen ve MR ile değerlendirme.", en: "Knee care in Kyrenia: meniscal tears, anterior cruciate ligament injury, knee arthritis, knee replacement and fractures. Assessed by examination, X-ray and MRI." },
  },
  "ayak-bilek": {
    title: { tr: "Ayak ve ayak bileği: burkulma, kırık, halluks valgus", en: "Foot and ankle: sprains, fractures and bunions" },
    desc: { tr: "Girne’de ayak ve ayak bileği tedavisi: ayak bileği burkulması ve kırığı, halluks valgus (başparmak çıkıntısı) ve Aşil tendonu sorunları.", en: "Foot and ankle care in Kyrenia: ankle sprains and fractures, hallux valgus (bunion) and Achilles tendon problems." },
  },
  artroskopi: {
    title: { tr: "Artroskopik cerrahi (kapalı eklem ameliyatı)", en: "Arthroscopic surgery (keyhole joint surgery)" },
    desc: { tr: "Girne’de artroskopik cerrahi (kapalı ameliyat): diz, omuz, dirsek, el bileği ve ayak bileği. Menisküs, ön çapraz bağ, rotator manşet ve omuz çıkığı ameliyatları.", en: "Arthroscopic (keyhole) surgery in Kyrenia: knee, shoulder, elbow, wrist and ankle. Meniscus surgery, ACL reconstruction, rotator cuff repair, shoulder stabilisation." },
  },
  "kirik-travma": {
    title: { tr: "Kırık ve travma tedavisi", en: "Fracture and trauma care" },
    desc: { tr: "Girne’de kırık tedavisi: alçı ve atel, ameliyatla tespit, açık kırıklar, çoklu yaralanmalar ve kaynamayan kırıklar. Başvuru hastanenin acil servisi üzerinden.", en: "Fracture care in Kyrenia: casts and splints, surgical fixation, open fractures, multiple injuries and non-union. Seen via the emergency department." },
  },
  cocuk: {
    title: { tr: "Çocuk ortopedisi ve çocuk kırıkları", en: "Children’s orthopaedics and fractures" },
    desc: { tr: "Girne’de çocuk ortopedisi: çocukluk çağı kırıkları, dirsek çevresi kırıkları, büyüme kıkırdağı yaralanmaları, yürüme ve dizilim şikâyetleri.", en: "Children’s orthopaedics in Kyrenia: childhood fractures, fractures around the elbow, growth plate injuries, and walking and alignment concerns." },
  },
  tumor: {
    title: { tr: "Kemik ve yumuşak doku tümörleri", en: "Bone and soft tissue tumours" },
    desc: { tr: "Girne’de kemik ve yumuşak doku tümörleri: iyi huylu tümör ve kistler, yumuşak doku kitleleri, sarkomlar, kemik metastazları. Muayene, görüntüleme ve biyopsi.", en: "Bone and soft tissue tumours in Kyrenia: benign tumours and cysts, soft tissue lumps, sarcomas and bone metastases. Examination, imaging and biopsy." },
  },
};

export const areaUi: Record<Lang, { back: string; conditions: string; more: string; urgent: string; urgentNote: string; doctors: string; doctorsP: string; others: string; disclaimer: string; updated: string; book: string; metaSuffix: string }> = {
  tr: {
    back: "← Tedavi alanları",
    conditions: "Sık görülen durumlar",
    more: "Ayrıntılı yazı",
    urgent: "Beklemeden başvurulması gereken durumlar",
    urgentNote: "Bu durumlarda randevu beklemeyin; en yakın acil servise gidin.",
    doctors: "Hekimlerimiz",
    doctorsP: "Üç ortopedi uzmanından oluşan ekibimiz, değerlendirme ve tanıdan cerrahi ve cerrahi dışı tedavilere uzanan tüm süreçleri yakın iş birliği içinde yürütmektedir. Ortak bilgi ve deneyimimizle, her hastamız için en uygun tedavi yaklaşımını belirlemeyi ve en yüksek faydayı sağlamayı hedeflemekteyiz.",
    others: "Diğer tedavi alanları",
    disclaimer: "Bu sayfa genel bilgi içindir; tanı ve tedavi muayenede belirlenir.",
    updated: "Son güncelleme",
    book: "Randevu al",
    metaSuffix: "Girne · Cyprus Orthopaedics",
  },
  en: {
    back: "← What we treat",
    conditions: "Common conditions",
    more: "Detailed article",
    urgent: "When to be seen without waiting",
    urgentNote: "In these situations do not wait for an appointment; go to the nearest emergency department.",
    doctors: "Our doctors",
    doctorsP: "Our team of three orthopaedic surgeons works in close collaboration at every stage, from assessment and diagnosis to surgical and non-surgical treatment. Drawing on our shared knowledge and experience, we aim to find the most suitable treatment for each patient and to achieve the greatest benefit.",
    others: "Other areas",
    disclaimer: "This page is general information; diagnosis and treatment are decided at examination.",
    updated: "Last updated",
    book: "Book an appointment",
    metaSuffix: "Kyrenia, North Cyprus · Cyprus Orthopaedics",
  },
};


/** Operations named in the scrolling band; each links to its region page. Drawn from the region pages and the hospital's own department page; needs the doctors' confirmation. */
export const procedures: { t: L; area: string }[] = [
  { t: { tr: "Diz protezi", en: "Knee replacement" }, area: "diz" },
  { t: { tr: "Kalça protezi", en: "Hip replacement" }, area: "kalca" },
  { t: { tr: "Ön çapraz bağ ameliyatı", en: "ACL reconstruction" }, area: "diz" },
  { t: { tr: "Menisküs ameliyatı", en: "Meniscus surgery" }, area: "diz" },
  { t: { tr: "Diz artroskopisi", en: "Knee arthroscopy" }, area: "artroskopi" },
  { t: { tr: "Omuz artroskopisi", en: "Shoulder arthroscopy" }, area: "artroskopi" },
  { t: { tr: "Dirsek artroskopisi", en: "Elbow arthroscopy" }, area: "artroskopi" },
  { t: { tr: "El bileği artroskopisi", en: "Wrist arthroscopy" }, area: "artroskopi" },
  { t: { tr: "Ayak bileği artroskopisi", en: "Ankle arthroscopy" }, area: "artroskopi" },
  { t: { tr: "Rotator manşet onarımı", en: "Rotator cuff repair" }, area: "omuz-dirsek" },
  { t: { tr: "Omuz çıkığı ameliyatı", en: "Shoulder stabilisation" }, area: "omuz-dirsek" },
  { t: { tr: "Kırık ameliyatları", en: "Fracture surgery" }, area: "kirik-travma" },
  { t: { tr: "Kalça kırığı ameliyatı", en: "Hip fracture surgery" }, area: "kalca" },
  { t: { tr: "El bileği kırığı ameliyatı", en: "Wrist fracture fixation" }, area: "el-bilek" },
  { t: { tr: "Karpal tünel ameliyatı", en: "Carpal tunnel release" }, area: "el-bilek" },
  { t: { tr: "Tetik parmak ameliyatı", en: "Trigger finger release" }, area: "el-bilek" },
  { t: { tr: "Tendon ve sinir onarımı", en: "Tendon and nerve repair" }, area: "el-bilek" },
  { t: { tr: "Parmak ucu onarımı", en: "Fingertip reconstruction" }, area: "el-bilek" },
  { t: { tr: "Replantasyon", en: "Replantation" }, area: "el-bilek" },
  { t: { tr: "Ayak bileği kırığı ameliyatı", en: "Ankle fracture fixation" }, area: "ayak-bilek" },
  { t: { tr: "Halluks valgus ameliyatı", en: "Bunion surgery" }, area: "ayak-bilek" },
  { t: { tr: "Aşil tendonu onarımı", en: "Achilles tendon repair" }, area: "ayak-bilek" },
  { t: { tr: "Çocuk kırıkları", en: "Children’s fractures" }, area: "cocuk" },
  { t: { tr: "Kemik ve yumuşak doku tümörü ameliyatları", en: "Bone and soft tissue tumour surgery" }, area: "tumor" },
];
