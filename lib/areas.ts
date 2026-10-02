import type { Lang } from "./site";

type L = Record<Lang, string>;
export type Condition = { n: string; d: string; more?: L };
export type Area = {
  id: string;
  slug: L;
  title: L;
  lead: L;
  conditions: Record<Lang, Condition[]>;
  urgent: Record<Lang, string[]>;
};

export const AREAS_SEGMENT: Record<Lang, string> = { tr: "tedavi", en: "treatments" };
export const AREAS_UPDATED = "2026-10-03";

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
      tr: "El ve el bileğinde sinir sıkışmaları, tendon hastalıkları, kırıklar ve kesici alet yaralanmaları tedavi edilir. Tendon, sinir ve damar onarımları mikrocerrahi yöntemle yapılır.",
      en: "In the hand and wrist the team treats nerve compression, tendon disorders, fractures and cut injuries. Tendon, nerve and vessel repairs are carried out with microsurgical technique.",
    },
    conditions: {
      tr: [
        { n: "Karpal tünel sendromu", d: "Median sinirin bilekte sıkışmasıdır; başparmak, işaret ve orta parmakta uyuşma ve gece uyandıran karıncalanma yapar. Hafif olgularda gece ateli ve enjeksiyon, ilerlemiş olgularda sinirin gevşetilmesi uygulanır.", more: art("karpal-tunel-sendromu", "carpal-tunnel-syndrome") },
        { n: "Tetik parmak", d: "Parmağın bükülüp açılırken takılması ve kilitlenmesidir. Enjeksiyon çoğu hastada yeterlidir; tekrarlayan olgularda küçük bir girişimle tendon kılıfı gevşetilir.", more: art("tetik-parmak", "trigger-finger") },
        { n: "De Quervain tenosinoviti", d: "Bileğin başparmak tarafında, kavrama ve kaldırma ile artan ağrıdır. Atel, yük düzenlemesi ve enjeksiyonla tedavi edilir.", more: art("de-quervain-tenosinoviti", "de-quervain-tenosynovitis") },
        { n: "Ganglion kisti", d: "El bileğinde ya da parmakta, eklem veya tendon kılıfından kaynaklanan içi sıvı dolu şişliktir. Şikâyet yapmıyorsa izlenir; ağrı ya da hareket kısıtlılığı yapıyorsa çıkarılabilir.", more: art("ganglion-kisti", "ganglion-cyst") },
        { n: "El bileği kırığı", d: "En sık düşme sonrası görülür. Kayma azsa alçı, eklem yüzü bozulmuşsa ya da kırık dengesizse plak ve vidayla tespit uygulanır.", more: art("el-bilegi-kirigi-distal-radius", "broken-wrist-distal-radius-fracture") },
        { n: "Tendon ve sinir kesileri", d: "Cam ve bıçak gibi kesici yaralanmalardan sonra parmağı hareket ettirememe ya da uyuşma, tendon veya sinir kesisini düşündürür. Onarım erken dönemde yapıldığında sonuç daha iyidir.", more: art("elde-tendon-ve-sinir-yaralanmalari", "hand-tendon-nerve-injuries") },
        { n: "Parmak ucu yaralanmaları", d: "Ezilme ve kopmalarda tırnak yatağı onarımı, doku nakli ya da uygun olgularda kopan parçanın yerine dikilmesi değerlendirilir." },
      ],
      en: [
        { n: "Carpal tunnel syndrome", d: "Compression of the median nerve at the wrist, causing numbness in the thumb, index and middle fingers and tingling that wakes you at night. Mild cases are treated with a night splint and injection; advanced cases with release of the nerve.", more: art("karpal-tunel-sendromu", "carpal-tunnel-syndrome") },
        { n: "Trigger finger", d: "The finger catches and locks as it bends and straightens. An injection is enough for most patients; in recurrent cases the tendon sheath is released in a minor procedure.", more: art("tetik-parmak", "trigger-finger") },
        { n: "De Quervain’s tenosynovitis", d: "Pain on the thumb side of the wrist that worsens with gripping and lifting. It is treated with a splint, load adjustment and injection.", more: art("de-quervain-tenosinoviti", "de-quervain-tenosynovitis") },
        { n: "Ganglion cyst", d: "A fluid-filled swelling at the wrist or finger arising from a joint or tendon sheath. If it causes no trouble it is observed; if it causes pain or limits movement it can be removed.", more: art("ganglion-kisti", "ganglion-cyst") },
        { n: "Wrist fracture", d: "Most often follows a fall. A cast is used when displacement is slight; plate and screw fixation when the joint surface is disrupted or the fracture is unstable.", more: art("el-bilegi-kirigi-distal-radius", "broken-wrist-distal-radius-fracture") },
        { n: "Tendon and nerve lacerations", d: "After a cut from glass or a knife, being unable to move a finger, or numbness, suggests a divided tendon or nerve. Results are better when repair is done early.", more: art("elde-tendon-ve-sinir-yaralanmalari", "hand-tendon-nerve-injuries") },
        { n: "Fingertip injuries", d: "In crush injuries and amputations, the options are nail-bed repair, tissue cover or, in suitable cases, reattachment of the severed part." },
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
        { n: "Kalça kireçlenmesi (osteoartrit)", d: "Eklem kıkırdağının aşınmasıdır; kasıkta ve uylukta ağrı, sabah tutukluğu ve topallama yapar. Kilo kontrolü, egzersiz ve ağrı tedavisiyle başlanır." },
        { n: "Kalça protezi", d: "Ameliyatsız tedaviye rağmen ağrı günlük yaşamı kısıtlıyorsa, aşınmış eklem yüzeyleri yapay eklemle değiştirilir." },
        { n: "Yaşlılarda kalça kırığı", d: "Çoğunlukla ev içinde basit bir düşmeyle olur ve hemen her zaman ameliyat gerektirir. Amaç hastayı en kısa sürede yeniden ayağa kaldırmaktır.", more: art("yaslilarda-kalca-kirigi", "hip-fracture-in-older-adults") },
      ],
      en: [
        { n: "Hip arthritis (osteoarthritis)", d: "Wear of the joint cartilage, causing pain in the groin and thigh, morning stiffness and a limp. Treatment starts with weight control, exercise and pain relief." },
        { n: "Hip replacement", d: "When pain still restricts daily life despite non-surgical treatment, the worn joint surfaces are replaced with an artificial joint." },
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
        { n: "Diz protezi", d: "İleri kireçlenmede, diğer tedavilerle ağrı kontrol edilemediğinde aşınmış eklem yüzeyleri protezle değiştirilir." },
        { n: "Diz çevresi kırıkları", d: "Diz kapağı, uyluk kemiğinin alt ucu ve kaval kemiğinin üst ucundaki kırıklar eklem yüzünü ilgilendirdiğinde çoğunlukla ameliyatla tespit edilir." },
      ],
      en: [
        { n: "Meniscal tear", d: "Pain, swelling, catching and locking after a twisting movement of the knee. Depending on the type of tear and the patient’s age, treatment is exercise, arthroscopic repair or removal of the torn fragment.", more: art("menisku-yirtigi", "meniscus-tear") },
        { n: "Anterior cruciate ligament injury", d: "Follows a sudden change of direction or a jump, with the knee giving way and swelling. Depending on activity level and how unstable the knee feels, treatment is rehabilitation or arthroscopic ligament reconstruction.", more: art("on-capraz-bag-yirtigi", "acl-tear") },
        { n: "Knee arthritis", d: "Pain, stiffness and swelling on stairs and on long walks. Exercise, weight control and injections into the joint are the first steps.", more: art("diz-kireclenmesi", "knee-osteoarthritis") },
        { n: "Knee replacement", d: "In advanced arthritis, when pain cannot be controlled by other treatment, the worn joint surfaces are replaced with a prosthesis." },
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
    id: "kirik-travma",
    slug: { tr: "kirik-ve-travma", en: "fractures-and-trauma" },
    title: { tr: "Kırık ve travma", en: "Fractures and trauma" },
    lead: {
      tr: "Kırık ve çıkıklar hastanenin acil servisi üzerinden değerlendirilir. Tedavinin amacı kemiğin doğru dizilimde kaynaması ve eklemin en kısa sürede yeniden hareket ettirilebilmesidir.",
      en: "Fractures and dislocations are assessed through the hospital’s emergency department. The aim of treatment is for the bone to heal in the correct alignment and for the joint to move again as soon as possible.",
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
];

export const getArea = (lang: Lang, slug: string) => areas.find((a) => a.slug[lang] === slug);
export const areaUrl = (lang: Lang, a: Area) => `/${lang}/${AREAS_SEGMENT[lang]}/${a.slug[lang]}`;

export const areaUi: Record<Lang, { back: string; conditions: string; more: string; urgent: string; urgentNote: string; doctors: string; doctorsP: string; others: string; disclaimer: string; updated: string; book: string; metaSuffix: string }> = {
  tr: {
    back: "← Tedavi alanları",
    conditions: "Sık görülen durumlar",
    more: "Ayrıntılı yazı",
    urgent: "Beklemeden başvurulması gereken durumlar",
    urgentNote: "Bu durumlarda randevu beklenmez; en yakın acil servise başvurulur.",
    doctors: "Hekimler",
    doctorsP: "Klinikte üç ortopedi ve travmatoloji uzmanı çalışır. Ameliyatlar ve zor olgular ekip içinde birlikte değerlendirilir.",
    others: "Diğer tedavi alanları",
    disclaimer: "Bu sayfa genel bilgilendirme amaçlıdır; tanı ve tedavi kararı muayeneyle verilir.",
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
    doctors: "Doctors",
    doctorsP: "Three orthopaedic and trauma surgeons work in the clinic. Operations and difficult cases are discussed within the team.",
    others: "Other areas",
    disclaimer: "This page is general information; diagnosis and treatment are decided at examination.",
    updated: "Last updated",
    book: "Book an appointment",
    metaSuffix: "Kyrenia, North Cyprus · Cyprus Orthopaedics",
  },
};
