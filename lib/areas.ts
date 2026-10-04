import type { Lang } from "./site";

type L = Record<Lang, string>;
/** `guide` is the id of one of the clinic's own patient-guide articles, linked beside the entry. */
export type Condition = { n: string; d: string; guide?: string };
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

export const AREAS_SEGMENT: Record<Lang, string> = { tr: "tedavi", en: "treatments", ru: "lechenie", fa: "darman" };
export const AREAS_UPDATED = "2026-10-04";

/** Detailed patient articles live on Dr. Gürhan's personal site; region pages link to them rather than repeat them. */

// Same order as ui.areas.items on the home page.
// Texts are general patient information drafted from the team's stated scope; they need the doctors' review before launch.
export const areas: Area[] = [
  {
    id: "omuz-dirsek",
    slug: { tr: "omuz-ve-dirsek", en: "shoulder-and-elbow", ru: "plecho-i-lokot", fa: "shaneh-va-arenj" },
    title: { tr: "Omuz ve dirsek", en: "Shoulder and elbow", ru: "Плечо и локоть", fa: "شانه و آرنج" },
    lead: {
      tr: "Omuz ve dirsek şikâyetlerinin çoğu tendon ve eklem kapsülü kaynaklıdır ve büyük bölümü ameliyatsız tedaviyle düzelir. Düşme sonrası gelişen ağrı ve hareket kaybında kırık ve çıkık araştırılır.",
      en: "Most shoulder and elbow complaints arise from the tendons and the joint capsule, and most improve without surgery. Pain and loss of movement after a fall are assessed for fracture and dislocation.",
      ru: "Большинство жалоб со стороны плеча и локтя связано с сухожилиями и капсулой сустава, и значительная их часть проходит при лечении без операции. При боли и утрате движений после падения проверяют, нет ли перелома или вывиха.",
      fa: "بیشتر شکایت‌های شانه و آرنج از تاندون‌ها و کپسول مفصل ناشی می‌شود و بخش بزرگی از آن‌ها با درمان غیرجراحی بهبود می‌یابد. در درد و از دست رفتن حرکت پس از زمین خوردن، شکستگی و دررفتگی بررسی می‌شود.",
    },
    conditions: {
      tr: [
        { n: "Rotator manşet sorunları ve omuz sıkışması", d: "Kolu yana ve yukarı kaldırırken, gece yan yatarken ağrı yapar. Tedavi çoğunlukla egzersiz ve fizik tedaviyle başlar; yırtığın büyüklüğüne ve şikâyete göre artroskopik onarım gündeme gelir.", guide: "rotator-cuff-clinic" },
        { n: "Omuz çıkığı", d: "Omuz başının yuvasından çıkmasıdır ve acil olarak yerine konur. Sonrasında tekrarlama riski yaşa ve eşlik eden hasara göre değerlendirilir; MR ile incelenir.", guide: "shoulder-dislocation-clinic" },
        { n: "Donuk omuz", d: "Omuz hareketlerinin her yöne ağrılı biçimde kısıtlanmasıdır. Aylar süren bir seyir gösterir; tedavinin temeli ağrı kontrolü ve germe egzersizleridir.", guide: "frozen-shoulder-clinic" },
        { n: "Tenisçi dirseği", d: "Dirseğin dış yanında, kavrama ve bilek hareketleriyle artan ağrıdır. Çoğu hastada yük düzenlemesi ve egzersizle geçer.", guide: "tennis-elbow-clinic" },
        { n: "Omuz ve dirsek çevresi kırıkları", d: "Köprücük kemiği, kol kemiğinin üst ucu ve dirsek kırıklarını kapsar. Kırığın yerine ve kaymasına göre askı, alçı ya da ameliyatla tespit seçilir." },
      ],
      en: [
        { n: "Rotator cuff problems and shoulder impingement", d: "Pain on lifting the arm sideways and overhead, and when lying on that side at night. Treatment usually starts with exercise and physiotherapy; arthroscopic repair is considered depending on the size of the tear and the symptoms.", guide: "rotator-cuff-clinic" },
        { n: "Shoulder dislocation", d: "The ball of the shoulder comes out of its socket and is put back as an emergency. The risk of it happening again is then assessed by age and associated damage, with an MRI scan.", guide: "shoulder-dislocation-clinic" },
        { n: "Frozen shoulder", d: "Painful restriction of shoulder movement in every direction. It runs a course of months; treatment rests on pain control and stretching exercises.", guide: "frozen-shoulder-clinic" },
        { n: "Tennis elbow", d: "Pain on the outer side of the elbow that worsens with gripping and wrist movement. In most patients it settles with load adjustment and exercise.", guide: "tennis-elbow-clinic" },
        { n: "Fractures around the shoulder and elbow", d: "These include fractures of the collarbone, the upper end of the arm bone and the elbow. Depending on the site and displacement, treatment is a sling, a cast or surgical fixation." },
      ],
      ru: [
        { n: "Проблемы вращательной манжеты плеча и импинджмент-синдром", d: "Вызывают боль при подъёме руки в сторону и вверх, а также ночью в положении на боку. Лечение чаще всего начинают с упражнений и физиотерапии; в зависимости от размера разрыва и жалоб рассматривают артроскопическое восстановление.", guide: "rotator-cuff-clinic" },
        { n: "Вывих плеча", d: "Головка плечевой кости выходит из суставной впадины; вывих вправляют в неотложном порядке. Затем риск повторного вывиха оценивают с учётом возраста и сопутствующих повреждений; проводят МРТ.", guide: "shoulder-dislocation-clinic" },
        { n: "Замороженное плечо", d: "Болезненное ограничение движений плеча во всех направлениях. Заболевание длится месяцами; основа лечения — контроль боли и упражнения на растяжение.", guide: "frozen-shoulder-clinic" },
        { n: "Локоть теннисиста", d: "Боль по наружной стороне локтя, которая усиливается при захвате предметов и движениях в запястье. У большинства пациентов проходит при коррекции нагрузки и выполнении упражнений.", guide: "tennis-elbow-clinic" },
        { n: "Переломы в области плечевого и локтевого суставов", d: "К ним относятся переломы ключицы, верхнего конца плечевой кости и переломы в области локтя. В зависимости от места перелома и смещения выбирают косыночную повязку, гипс или хирургическую фиксацию." },
      ],
      fa: [
        { n: "مشکلات روتاتور کاف و گیرافتادگی شانه", d: "هنگام بالا بردن دست به پهلو و به بالا و شب‌ها هنگام خوابیدن به پهلو درد ایجاد می‌کند. درمان بیشتر با ورزش و فیزیوتراپی آغاز می‌شود؛ بسته به اندازهٔ پارگی و شکایت بیمار، ترمیم به روش آرتروسکوپی مطرح می‌شود.", guide: "rotator-cuff-clinic" },
        { n: "دررفتگی شانه", d: "بیرون آمدن سر استخوان بازو از حفرهٔ مفصل است و به‌صورت اورژانسی جا انداخته می‌شود. پس از آن، خطر تکرار بر اساس سن و آسیب‌های همراه ارزیابی و با ام‌آرآی بررسی می‌شود.", guide: "shoulder-dislocation-clinic" },
        { n: "شانهٔ یخ‌زده", d: "محدود شدن دردناک حرکات شانه در همهٔ جهت‌هاست. سیر آن ماه‌ها طول می‌کشد؛ اساس درمان کنترل درد و ورزش‌های کششی است.", guide: "frozen-shoulder-clinic" },
        { n: "آرنج تنیس‌بازان", d: "دردی در سمت بیرونی آرنج است که با گرفتن اشیا و حرکات مچ بیشتر می‌شود. در بیشتر بیماران با تنظیم بار و ورزش برطرف می‌شود.", guide: "tennis-elbow-clinic" },
        { n: "شکستگی‌های اطراف شانه و آرنج", d: "شکستگی‌های ترقوه، انتهای بالایی استخوان بازو و آرنج را در بر می‌گیرد. بسته به محل شکستگی و میزان جابه‌جایی، آویز دست، گچ یا تثبیت با جراحی انتخاب می‌شود." },
      ],
    },
    urgent: {
      tr: ["Düşme ya da çarpma sonrası kolda şekil bozukluğu, şişlik ve hareket ettirememe", "Omuz çıkığı şüphesi", "Kolda uyuşma, güç kaybı ya da elde soğukluk ve renk değişikliği"],
      en: ["Deformity, swelling and inability to move the arm after a fall or blow", "Suspected shoulder dislocation", "Numbness or weakness in the arm, or a cold, discoloured hand"],
      ru: ["Деформация, отёк руки и невозможность ею двигать после падения или удара", "Подозрение на вывих плеча", "Онемение или слабость в руке либо похолодание и изменение цвета кисти"],
      fa: ["تغییر شکل، تورم و ناتوانی در حرکت دادن دست و بازو پس از زمین خوردن یا ضربه", "شک به دررفتگی شانه", "بی‌حسی یا ضعف در دست و بازو، یا سردی و تغییر رنگ دست"],
    },
  },
  {
    id: "el-bilek",
    slug: { tr: "el-ve-el-bilegi", en: "hand-and-wrist", ru: "kist-i-zapyastye", fa: "dast-va-mach-dast" },
    title: { tr: "El ve el bileği", en: "Hand and wrist", ru: "Кисть и запястье", fa: "دست و مچ دست" },
    lead: {
      tr: "El ve el bileğinde sinir sıkışmalarını, tendon hastalıklarını, kırıkları ve kesici alet yaralanmalarını tedavi ediyoruz. Tendon, sinir ve damar onarımlarını mikrocerrahi yöntemle yapıyoruz.",
      en: "In the hand and wrist we treat nerve compression, tendon disorders, fractures and cut injuries. We repair tendons, nerves and vessels with microsurgical technique.",
      ru: "В области кисти и запястья мы лечим сдавление нервов, заболевания сухожилий, переломы и ранения режущими предметами. Восстановление сухожилий, нервов и сосудов мы выполняем микрохирургическим методом.",
      fa: "در دست و مچ دست، گیرافتادگی اعصاب، بیماری‌های تاندون، شکستگی‌ها و آسیب‌های ناشی از اجسام برنده را درمان می‌کنیم. ترمیم تاندون، عصب و رگ را به روش میکروجراحی انجام می‌دهیم.",
    },
    conditions: {
      tr: [
        { n: "Karpal tünel sendromu", d: "Median sinirin bilekte sıkışmasıdır; başparmak, işaret ve orta parmakta uyuşma ve gece uyandıran karıncalanma yapar. Hafif olgularda gece ateli ve enjeksiyon, ilerlemiş olgularda sinirin gevşetilmesi uygulanır.", guide: "carpal-tunnel" },
        { n: "Tetik parmak", d: "Parmağın bükülüp açılırken takılması ve kilitlenmesidir. Enjeksiyon çoğu hastada yeterlidir; tekrarlayan olgularda küçük bir girişimle tendon kılıfı gevşetilir.", guide: "trigger-finger-clinic" },
        { n: "De Quervain tenosinoviti", d: "Bileğin başparmak tarafında, kavrama ve kaldırma ile artan ağrıdır. Atel, yük düzenlemesi ve enjeksiyonla tedavi edilir.", guide: "de-quervain-clinic" },
        { n: "Ganglion kisti", d: "El bileğinde ya da parmakta, eklem veya tendon kılıfından kaynaklanan içi sıvı dolu şişliktir. Şikâyet yapmıyorsa izlenir; ağrı ya da hareket kısıtlılığı yapıyorsa çıkarılabilir.", guide: "ganglion-cyst" },
        { n: "El bileği kırığı", d: "En sık düşme sonrası görülür. Kayma azsa alçı, eklem yüzü bozulmuşsa ya da kırık dengesizse plak ve vidayla tespit uygulanır.", guide: "distal-radius-clinic" },
        { n: "Tendon ve sinir kesileri", d: "Cam ve bıçak gibi kesici yaralanmalardan sonra parmağı hareket ettirememe ya da uyuşma, tendon veya sinir kesisini düşündürür. Onarım erken dönemde yapıldığında sonuç daha iyidir.", guide: "hand-tendon-nerve-clinic" },
        { n: "Replantasyon (kopan parmağın ya da elin yerine dikilmesi)", d: "Kopan parmak ya da el; kemik, tendon, damar ve sinirleri mikroskop altında tek tek onarılarak yerine dikilir. Zamana karşı yapılan bir ameliyattır; uygun olup olmadığı yaralanmanın tipine, kopan parçanın durumuna ve geçen süreye göre değerlendirilir." },
        { n: "Parmak ucu yaralanmaları", d: "Ezilme ve kopmalarda tırnak yatağı onarımı, doku nakli ya da uygun olgularda kopan parçanın yerine dikilmesi değerlendirilir." },
        { n: "Tırnak problemleri", d: "Tırnak yatağı yaralanmaları, tırnak çevresi iltihabı (dolama), tırnak batması ve yaralanma sonrası tırnak şekil bozukluklarını kapsar. Tedavi, sorunun türüne göre pansuman ve ilaçtan küçük bir cerrahi girişime kadar değişir." },
      ],
      en: [
        { n: "Carpal tunnel syndrome", d: "Compression of the median nerve at the wrist, causing numbness in the thumb, index and middle fingers and tingling that wakes you at night. Mild cases are treated with a night splint and injection; advanced cases with release of the nerve.", guide: "carpal-tunnel" },
        { n: "Trigger finger", d: "The finger catches and locks as it bends and straightens. An injection is enough for most patients; in recurrent cases the tendon sheath is released in a minor procedure.", guide: "trigger-finger-clinic" },
        { n: "De Quervain’s tenosynovitis", d: "Pain on the thumb side of the wrist that worsens with gripping and lifting. It is treated with a splint, load adjustment and injection.", guide: "de-quervain-clinic" },
        { n: "Ganglion cyst", d: "A fluid-filled swelling at the wrist or finger arising from a joint or tendon sheath. If it causes no trouble it is observed; if it causes pain or limits movement it can be removed.", guide: "ganglion-cyst" },
        { n: "Wrist fracture", d: "Most often follows a fall. A cast is used when displacement is slight; plate and screw fixation when the joint surface is disrupted or the fracture is unstable.", guide: "distal-radius-clinic" },
        { n: "Tendon and nerve lacerations", d: "After a cut from glass or a knife, being unable to move a finger, or numbness, suggests a divided tendon or nerve. Results are better when repair is done early.", guide: "hand-tendon-nerve-clinic" },
        { n: "Replantation (reattaching a severed finger or hand)", d: "A severed finger or hand is reattached by repairing the bone, tendons, vessels and nerves one by one under the microscope. It is surgery against the clock; whether it is suitable depends on the type of injury, the condition of the severed part and the time elapsed." },
        { n: "Fingertip injuries", d: "In crush injuries and amputations, the options are nail-bed repair, tissue cover or, in suitable cases, reattachment of the severed part." },
        { n: "Nail problems", d: "These include nail-bed injuries, infection around the nail (paronychia), ingrown nails and nail deformity after injury. Depending on the problem, treatment ranges from dressings and medication to a minor procedure." },
      ],
      ru: [
        { n: "Синдром запястного (карпального) канала", d: "Сдавление срединного нерва в области запястья; вызывает онемение большого, указательного и среднего пальцев и покалывание, от которого просыпаются по ночам. В лёгких случаях применяют ночную шину и инъекцию, в далеко зашедших — операцию по освобождению нерва.", guide: "carpal-tunnel" },
        { n: "Щёлкающий палец", d: "Палец заедает и блокируется при сгибании и разгибании. Большинству пациентов достаточно инъекции; при рецидивах сухожильное влагалище рассекают в ходе небольшого вмешательства.", guide: "trigger-finger-clinic" },
        { n: "Тендовагинит де Кервена", d: "Боль в запястье со стороны большого пальца, которая усиливается при захвате и подъёме предметов. Лечат шиной, коррекцией нагрузки и инъекцией.", guide: "de-quervain-clinic" },
        { n: "Гигрома (ганглий)", d: "Заполненное жидкостью образование на запястье или пальце, исходящее из сустава или сухожильного влагалища. Если оно не беспокоит, за ним наблюдают; если вызывает боль или ограничивает движения, его можно удалить.", guide: "ganglion-cyst" },
        { n: "Перелом запястья", d: "Чаще всего возникает после падения. При небольшом смещении накладывают гипс; если нарушена суставная поверхность или перелом нестабилен, выполняют фиксацию пластиной и винтами.", guide: "distal-radius-clinic" },
        { n: "Порезы с повреждением сухожилий и нервов", d: "Если после ранения режущим предметом, например стеклом или ножом, палец не двигается или онемел, это указывает на пересечение сухожилия или нерва. Результат лучше, когда восстановление выполняют в ранние сроки.", guide: "hand-tendon-nerve-clinic" },
        { n: "Реплантация (пришивание оторванного пальца или кисти)", d: "Оторванный палец или кисть пришивают на место, по отдельности восстанавливая под микроскопом кость, сухожилия, сосуды и нервы. Это операция, при которой счёт идёт на время; возможна ли она, оценивают по типу травмы, состоянию оторванной части и прошедшему времени." },
        { n: "Травмы кончиков пальцев", d: "При размозжении и отрыве рассматривают восстановление ногтевого ложа, пересадку тканей или, в подходящих случаях, пришивание оторванной части на место." },
        { n: "Проблемы с ногтями", d: "К ним относятся травмы ногтевого ложа, воспаление вокруг ногтя (паронихия), вросший ноготь и деформации ногтя после травмы. Лечение в зависимости от характера проблемы варьируется от перевязок и лекарств до небольшого хирургического вмешательства." },
      ],
      fa: [
        { n: "سندرم تونل کارپ", d: "فشرده شدن عصب مدیان در مچ دست است؛ باعث بی‌حسی در انگشت شست، اشاره و میانی و گزگزی می‌شود که شب‌ها فرد را از خواب بیدار می‌کند. در موارد خفیف از آتل شبانه و تزریق و در موارد پیشرفته از آزادسازی عصب استفاده می‌شود.", guide: "carpal-tunnel" },
        { n: "انگشت ماشه‌ای", d: "گیر کردن و قفل شدن انگشت هنگام خم و باز شدن است. تزریق در بیشتر بیماران کافی است؛ در موارد عودکننده غلاف تاندون با یک عمل کوچک آزاد می‌شود.", guide: "trigger-finger-clinic" },
        { n: "تنوسینوویت دکورون", d: "دردی در سمت شستِ مچ دست است که با گرفتن و بلند کردن اشیا بیشتر می‌شود. با آتل، تنظیم بار و تزریق درمان می‌شود.", guide: "de-quervain-clinic" },
        { n: "کیست گانگلیون", d: "برآمدگی پر از مایع در مچ دست یا انگشت است که از مفصل یا غلاف تاندون منشأ می‌گیرد. اگر شکایتی ایجاد نکند زیر نظر گرفته می‌شود؛ اگر باعث درد یا محدودیت حرکت شود می‌توان آن را برداشت.", guide: "ganglion-cyst" },
        { n: "شکستگی مچ دست", d: "بیشتر پس از زمین خوردن دیده می‌شود. اگر جابه‌جایی کم باشد گچ‌گیری می‌شود و اگر سطح مفصلی به هم خورده یا شکستگی ناپایدار باشد، تثبیت با پلاک و پیچ انجام می‌شود.", guide: "distal-radius-clinic" },
        { n: "بریدگی تاندون و عصب", d: "پس از بریدگی با اجسام برنده‌ای مانند شیشه و چاقو، ناتوانی در حرکت دادن انگشت یا بی‌حسی، بریدگی تاندون یا عصب را مطرح می‌کند. وقتی ترمیم زود انجام شود نتیجه بهتر است.", guide: "hand-tendon-nerve-clinic" },
        { n: "پیوند مجدد (پیوند زدن انگشت یا دست قطع‌شده)", d: "انگشت یا دست قطع‌شده با ترمیم تک‌تک استخوان، تاندون‌ها، رگ‌ها و اعصاب زیر میکروسکوپ در جای خود پیوند زده می‌شود. این جراحی در رقابت با زمان انجام می‌شود؛ مناسب بودن آن بر اساس نوع آسیب، وضعیت قطعهٔ جداشده و زمان سپری‌شده ارزیابی می‌شود." },
        { n: "آسیب‌های نوک انگشت", d: "در له‌شدگی و قطع‌شدگی، ترمیم بستر ناخن، پیوند بافت یا در موارد مناسب پیوند زدن قطعهٔ جداشده در جای خود بررسی می‌شود." },
        { n: "مشکلات ناخن", d: "آسیب‌های بستر ناخن، عفونت اطراف ناخن (عقربک)، فرورفتن ناخن در گوشت و تغییر شکل ناخن پس از آسیب را در بر می‌گیرد. درمان بسته به نوع مشکل از پانسمان و دارو تا یک عمل جراحی کوچک متفاوت است." },
      ],
    },
    urgent: {
      tr: ["Kesi sonrası parmağı bükememe, açamama ya da uyuşma", "Kopma ve ezilme yaralanmaları: kopan parça temiz, nemli bir beze sarılıp kapalı bir poşete, poşet de buzlu suya konularak getirilir; parça buza doğrudan değdirilmez", "Düşme sonrası bilekte şişlik ve şekil bozukluğu"],
      en: ["Being unable to bend or straighten a finger, or numbness, after a cut", "Amputation and crush injuries: wrap the severed part in a clean, damp cloth, seal it in a plastic bag and place the bag in iced water; do not let the part touch ice directly", "Swelling and deformity of the wrist after a fall"],
      ru: ["Невозможность согнуть или разогнуть палец либо онемение после пореза", "Травмы с отрывом и размозжением: оторванную часть заворачивают в чистую влажную ткань и кладут в закрытый пакет, пакет помещают в воду со льдом и в таком виде привозят; сама часть не должна напрямую касаться льда", "Отёк и деформация запястья после падения"],
      fa: ["ناتوانی در خم یا باز کردن انگشت یا بی‌حسی پس از بریدگی", "آسیب‌های قطع‌شدگی و له‌شدگی: قطعهٔ جداشده را در پارچه‌ای تمیز و مرطوب بپیچید، در کیسه‌ای دربسته بگذارید و کیسه را در آب و یخ قرار دهید و همراه بیاورید؛ قطعه نباید مستقیم با یخ تماس پیدا کند", "تورم و تغییر شکل مچ دست پس از زمین خوردن"],
    },
  },
  {
    id: "kalca",
    slug: { tr: "kalca", en: "hip", ru: "tazobedrennyj-sustav", fa: "lagan" },
    title: { tr: "Kalça", en: "Hip", ru: "Тазобедренный сустав", fa: "لگن (مفصل ران)" },
    lead: {
      tr: "Kalça şikâyetleri en sık kireçlenmeye ve ileri yaştaki kırıklara bağlıdır. Kasık ağrısı, yürüme mesafesinin kısalması ve çorap giymekte zorlanma kalça ekleminin değerlendirilmesini gerektirir.",
      en: "Hip complaints are most often due to arthritis and, in older age, fractures. Groin pain, a shorter walking distance and difficulty putting on socks call for an assessment of the hip joint.",
      ru: "Жалобы со стороны тазобедренного сустава чаще всего связаны с артрозом и с переломами в пожилом возрасте. Боль в паху, сокращение расстояния, которое удаётся пройти, и трудности при надевании носков требуют обследования тазобедренного сустава.",
      fa: "شکایت‌های لگن بیشتر به آرتروز و شکستگی‌های سنین بالا مربوط است. درد کشالهٔ ران، کوتاه شدن مسافت راه رفتن و دشواری در پوشیدن جوراب نیازمند ارزیابی مفصل لگن است.",
    },
    conditions: {
      tr: [
        { n: "Kalça kireçlenmesi (osteoartrit)", d: "Eklem kıkırdağının aşınmasıdır; kasıkta ve uylukta ağrı, sabah tutukluğu ve topallama yapar. Kilo kontrolü, egzersiz ve ağrı tedavisiyle başlanır.", guide: "hip-oa" },
        { n: "Kalça protezi", d: "Ameliyatsız tedaviye rağmen ağrı günlük yaşamı kısıtlıyorsa, aşınmış eklem yüzeyleri yapay eklemle değiştirilir.", guide: "hip-replacement" },
        { n: "Yaşlılarda kalça kırığı", d: "Çoğunlukla ev içinde basit bir düşmeyle olur ve hemen her zaman ameliyat gerektirir. Amaç hastayı en kısa sürede yeniden ayağa kaldırmaktır.", guide: "hip-fracture-clinic" },
      ],
      en: [
        { n: "Hip arthritis (osteoarthritis)", d: "Wear of the joint cartilage, causing pain in the groin and thigh, morning stiffness and a limp. Treatment starts with weight control, exercise and pain relief.", guide: "hip-oa" },
        { n: "Hip replacement", d: "When pain still restricts daily life despite non-surgical treatment, the worn joint surfaces are replaced with an artificial joint.", guide: "hip-replacement" },
        { n: "Hip fracture in older adults", d: "Usually follows a simple fall at home and almost always needs an operation. The aim is to get the patient back on their feet as soon as possible.", guide: "hip-fracture-clinic" },
      ],
      ru: [
        { n: "Артроз тазобедренного сустава (остеоартрит)", d: "Изнашивание суставного хряща; вызывает боль в паху и бедре, утреннюю скованность и хромоту. Лечение начинают с контроля веса, упражнений и обезболивания.", guide: "hip-oa" },
        { n: "Эндопротезирование тазобедренного сустава", d: "Если, несмотря на лечение без операции, боль ограничивает повседневную жизнь, изношенные суставные поверхности заменяют искусственным суставом.", guide: "hip-replacement" },
        { n: "Перелом проксимального отдела бедра (шейки бедра) у пожилых", d: "Чаще всего происходит при обычном падении дома и почти всегда требует операции. Цель — как можно скорее снова поставить пациента на ноги.", guide: "hip-fracture-clinic" },
      ],
      fa: [
        { n: "آرتروز لگن (استئوآرتریت)", d: "ساییدگی غضروف مفصل است؛ باعث درد در کشالهٔ ران و ران، خشکی صبحگاهی و لنگیدن می‌شود. درمان با کنترل وزن، ورزش و درمان درد آغاز می‌شود.", guide: "hip-oa" },
        { n: "تعویض مفصل لگن", d: "اگر با وجود درمان غیرجراحی، درد زندگی روزمره را محدود کند، سطوح ساییده‌شدهٔ مفصل با مفصل مصنوعی جایگزین می‌شود.", guide: "hip-replacement" },
        { n: "شکستگی لگن در سالمندان", d: "بیشتر با یک زمین خوردن ساده در خانه رخ می‌دهد و تقریباً همیشه به جراحی نیاز دارد. هدف این است که بیمار در کوتاه‌ترین زمان دوباره سر پا شود.", guide: "hip-fracture-clinic" },
      ],
    },
    urgent: {
      tr: ["Düşme sonrası ayağa kalkamama, bacakta kısalık ve dışa dönme", "Kalça protezi olan hastada ani ağrı, şişlik, ateş ya da yara yerinde akıntı"],
      en: ["Being unable to stand after a fall, with the leg shortened and turned outwards", "Sudden pain, swelling, fever or wound discharge in a patient with a hip replacement"],
      ru: ["Невозможность встать на ноги после падения, укорочение ноги и её разворот наружу", "Внезапная боль, отёк, повышение температуры или выделения из раны у пациента с эндопротезом тазобедренного сустава"],
      fa: ["ناتوانی در ایستادن پس از زمین خوردن، کوتاه شدن پا و چرخیدن آن به بیرون", "درد ناگهانی، تورم، تب یا ترشح از محل زخم در بیماری که مفصل مصنوعی لگن دارد"],
    },
  },
  {
    id: "diz",
    slug: { tr: "diz", en: "knee", ru: "koleno", fa: "zanoo" },
    title: { tr: "Diz", en: "Knee", ru: "Колено", fa: "زانو" },
    lead: {
      tr: "Diz, spor yaralanmalarının ve kireçlenmenin en sık görüldüğü eklemdir. Muayeneyle birlikte röntgen ve gerektiğinde MR ile menisküs, bağ ve kıkırdak değerlendirilir.",
      en: "The knee is the joint most often affected by sports injuries and arthritis. Alongside examination, X-rays and, where needed, MRI are used to assess the menisci, ligaments and cartilage.",
      ru: "Коленный сустав чаще других суставов страдает от спортивных травм и артроза. Наряду с осмотром мениски, связки и хрящ оценивают с помощью рентгена и, при необходимости, МРТ.",
      fa: "زانو مفصلی است که آسیب‌های ورزشی و آرتروز بیش از همه در آن دیده می‌شود. همراه با معاینه، منیسک، رباط‌ها و غضروف با عکس رادیولوژی و در صورت نیاز ام‌آرآی ارزیابی می‌شوند.",
    },
    conditions: {
      tr: [
        { n: "Menisküs yırtığı", d: "Dizde dönme hareketi sonrası ağrı, şişlik, takılma ve kilitlenme yapar. Yırtığın tipine ve yaşa göre egzersiz, artroskopik onarım ya da yırtık parçanın alınması seçilir.", guide: "meniscus-clinic" },
        { n: "Ön çapraz bağ yaralanması", d: "Ani yön değiştirme ya da sıçrama sonrası dizde boşalma hissi ve şişlikle ortaya çıkar. Aktivite düzeyine ve dizdeki güvensizlik hissine göre rehabilitasyon ya da artroskopik bağ rekonstrüksiyonu yapılır.", guide: "acl-tear-clinic" },
        { n: "Diz kireçlenmesi", d: "Merdiven inip çıkarken ve uzun yürüyüşte ağrı, tutukluk ve şişlik yapar. Egzersiz, kilo kontrolü ve eklem içi enjeksiyonlar ilk basamaktır.", guide: "knee-oa" },
        { n: "Diz protezi", d: "İleri kireçlenmede, diğer tedavilerle ağrı kontrol edilemediğinde aşınmış eklem yüzeyleri protezle değiştirilir.", guide: "knee-replacement" },
        { n: "Diz çevresi kırıkları", d: "Diz kapağı, uyluk kemiğinin alt ucu ve kaval kemiğinin üst ucundaki kırıklar eklem yüzünü ilgilendirdiğinde çoğunlukla ameliyatla tespit edilir." },
      ],
      en: [
        { n: "Meniscal tear", d: "Pain, swelling, catching and locking after a twisting movement of the knee. Depending on the type of tear and the patient’s age, treatment is exercise, arthroscopic repair or removal of the torn fragment.", guide: "meniscus-clinic" },
        { n: "Anterior cruciate ligament injury", d: "Follows a sudden change of direction or a jump, with the knee giving way and swelling. Depending on activity level and how unstable the knee feels, treatment is rehabilitation or arthroscopic ligament reconstruction.", guide: "acl-tear-clinic" },
        { n: "Knee arthritis", d: "Pain, stiffness and swelling on stairs and on long walks. Exercise, weight control and injections into the joint are the first steps.", guide: "knee-oa" },
        { n: "Knee replacement", d: "In advanced arthritis, when pain cannot be controlled by other treatment, the worn joint surfaces are replaced with a prosthesis.", guide: "knee-replacement" },
        { n: "Fractures around the knee", d: "Fractures of the kneecap, the lower end of the thigh bone and the upper end of the shin bone are usually fixed surgically when they involve the joint surface." },
      ],
      ru: [
        { n: "Разрыв мениска", d: "После скручивающего движения в колене вызывает боль, отёк, заедание и блокировку сустава. В зависимости от типа разрыва и возраста выбирают упражнения, артроскопическое восстановление или удаление оторванного фрагмента.", guide: "meniscus-clinic" },
        { n: "Повреждение передней крестообразной связки (ПКС)", d: "Возникает после резкой смены направления движения или прыжка и проявляется ощущением, что колено «подкашивается», и отёком. В зависимости от уровня активности и ощущения неустойчивости в колене проводят реабилитацию или артроскопическую реконструкцию связки.", guide: "acl-tear-clinic" },
        { n: "Артроз коленного сустава", d: "Вызывает боль, скованность и отёк при подъёме и спуске по лестнице и при длительной ходьбе. Первая ступень лечения — упражнения, контроль веса и внутрисуставные инъекции.", guide: "knee-oa" },
        { n: "Эндопротезирование коленного сустава", d: "При выраженном артрозе, когда боль не удаётся контролировать другими методами лечения, изношенные суставные поверхности заменяют протезом.", guide: "knee-replacement" },
        { n: "Переломы в области коленного сустава", d: "Переломы надколенника, нижнего конца бедренной кости и верхнего конца большеберцовой кости, если они затрагивают суставную поверхность, чаще всего фиксируют хирургически." },
      ],
      fa: [
        { n: "پارگی منیسک", d: "پس از حرکت چرخشی زانو باعث درد، تورم، گیر کردن و قفل شدن می‌شود. بسته به نوع پارگی و سن، ورزش، ترمیم به روش آرتروسکوپی یا برداشتن قطعهٔ پاره انتخاب می‌شود.", guide: "meniscus-clinic" },
        { n: "آسیب رباط صلیبی قدامی (ACL)", d: "پس از تغییر جهت ناگهانی یا پرش، با احساس خالی کردن زانو و تورم بروز می‌کند. بسته به سطح فعالیت و احساس ناپایداری در زانو، توان‌بخشی یا بازسازی رباط به روش آرتروسکوپی انجام می‌شود.", guide: "acl-tear-clinic" },
        { n: "آرتروز زانو", d: "هنگام بالا و پایین رفتن از پله و در پیاده‌روی طولانی باعث درد، خشکی و تورم می‌شود. ورزش، کنترل وزن و تزریق داخل مفصل نخستین گام است.", guide: "knee-oa" },
        { n: "تعویض مفصل زانو", d: "در آرتروز پیشرفته، وقتی درد با درمان‌های دیگر کنترل نشود، سطوح ساییده‌شدهٔ مفصل با پروتز جایگزین می‌شود.", guide: "knee-replacement" },
        { n: "شکستگی‌های اطراف زانو", d: "شکستگی‌های کشکک، انتهای پایینی استخوان ران و انتهای بالایی استخوان درشت‌نی، هنگامی که سطح مفصلی را درگیر کنند، بیشتر با جراحی تثبیت می‌شوند." },
      ],
    },
    urgent: {
      tr: ["Yaralanma sonrası dizin hızla şişmesi ve üzerine basamama", "Dizin kilitlenip açılmaması", "Dizde kızarıklık, sıcaklık ve ateşle birlikte ağrı"],
      en: ["Rapid swelling of the knee after an injury and being unable to bear weight", "A knee that locks and will not straighten", "Knee pain with redness, warmth and fever"],
      ru: ["Быстрое нарастание отёка колена после травмы и невозможность наступить на ногу", "Блокировка колена, при которой оно не разгибается", "Боль в колене с покраснением, ощущением тепла в области сустава и повышением температуры тела"],
      fa: ["تورم سریع زانو پس از آسیب و ناتوانی در وزن گذاشتن روی پا", "قفل شدن زانو و باز نشدن آن", "درد زانو همراه با قرمزی، گرمی و تب"],
    },
  },
  {
    id: "ayak-bilek",
    slug: { tr: "ayak-ve-ayak-bilegi", en: "foot-and-ankle", ru: "stopa-i-golenostopnyj-sustav", fa: "pa-va-mach-pa" },
    title: { tr: "Ayak ve ayak bileği", en: "Foot and ankle", ru: "Стопа и голеностопный сустав", fa: "پا و مچ پا" },
    lead: {
      tr: "Ayak bileği burkulmaları ve kırıkları acil servise en sık başvuru nedenlerindendir. Ayak ön kısmındaki şekil bozuklukları ve tendon sorunları da bu bölümde değerlendirilir.",
      en: "Ankle sprains and fractures are among the commonest reasons for attending the emergency department. Forefoot deformities and tendon problems are also assessed here.",
      ru: "Растяжения связок голеностопа и переломы лодыжки — одни из самых частых причин обращения в отделение неотложной помощи. Здесь же оценивают деформации переднего отдела стопы и проблемы с сухожилиями.",
      fa: "پیچ‌خوردگی و شکستگی مچ پا از شایع‌ترین علت‌های مراجعه به اورژانس است. تغییر شکل‌های بخش جلویی پا و مشکلات تاندون نیز در این بخش ارزیابی می‌شوند.",
    },
    conditions: {
      tr: [
        { n: "Ayak bileği burkulması", d: "Dış yan bağların zorlanması ya da yırtılmasıdır. Çoğu burkulma kısa süreli destek, erken hareket ve denge egzersizleriyle iyileşir; tekrarlayan burkulmalarda bağ onarımı gündeme gelir.", guide: "ankle-sprain-clinic" },
        { n: "Ayak bileği kırığı", d: "Kırığın dengeli olup olmadığına göre alçı ya da ameliyat seçilir; karar verirken kemikle birlikte bağların durumu da değerlendirilir.", guide: "ankle-fracture-clinic" },
        { n: "Halluks valgus", d: "Ayak başparmağının dışa kayması ve iç yanda çıkıntı oluşmasıdır. Geniş burunlu ayakkabıyla şikâyet azalır; ağrı sürerse kemik düzeltme ameliyatı yapılır." },
        { n: "Aşil tendonu sorunları", d: "Topuk arkasında ağrı ve sabah tutukluğu tendon hastalığını, ani ve şiddetli ağrıyla birlikte parmak ucunda yükselememe ise kopmayı düşündürür." },
      ],
      en: [
        { n: "Ankle sprain", d: "A strain or tear of the ligaments on the outer side of the ankle. Most sprains heal with brief support, early movement and balance exercises; ligament repair is considered for recurrent sprains.", guide: "ankle-sprain-clinic" },
        { n: "Ankle fracture", d: "A cast or surgery is chosen according to whether the fracture is stable; the state of the ligaments is assessed along with the bone.", guide: "ankle-fracture-clinic" },
        { n: "Hallux valgus (bunion)", d: "The big toe drifts outwards and a bump forms on the inner side. Wide-fitting shoes ease the symptoms; if pain persists, the bone is realigned surgically." },
        { n: "Achilles tendon problems", d: "Pain behind the heel with morning stiffness suggests tendon disease; sudden severe pain with inability to rise on tiptoe suggests a rupture." },
      ],
      ru: [
        { n: "Растяжение связок голеностопа", d: "Перерастяжение или разрыв наружных боковых связок. Большинство таких травм заживает при кратковременной поддержке сустава, раннем начале движений и упражнениях на равновесие; при повторных растяжениях рассматривают восстановление связок.", guide: "ankle-sprain-clinic" },
        { n: "Перелом лодыжки", d: "В зависимости от того, стабилен ли перелом, выбирают гипс или операцию; при принятии решения наряду с костью оценивают и состояние связок.", guide: "ankle-fracture-clinic" },
        { n: "Вальгусная деформация большого пальца стопы (hallux valgus)", d: "Большой палец стопы отклоняется кнаружи, а на внутренней стороне стопы образуется выступ. Обувь с широким носком уменьшает жалобы; если боль сохраняется, выполняют операцию по исправлению положения кости." },
        { n: "Проблемы с ахилловым сухожилием", d: "Боль позади пятки и утренняя скованность указывают на заболевание сухожилия, а внезапная сильная боль в сочетании с невозможностью подняться на носки — на его разрыв." },
      ],
      fa: [
        { n: "پیچ‌خوردگی مچ پا", d: "کشیدگی یا پارگی رباط‌های سمت بیرونی است. بیشتر پیچ‌خوردگی‌ها با حمایت کوتاه‌مدت، حرکت زودهنگام و ورزش‌های تعادلی بهبود می‌یابند؛ در پیچ‌خوردگی‌های مکرر ترمیم رباط مطرح می‌شود.", guide: "ankle-sprain-clinic" },
        { n: "شکستگی مچ پا", d: "بسته به پایدار بودن یا نبودن شکستگی، گچ یا جراحی انتخاب می‌شود؛ هنگام تصمیم‌گیری، همراه با استخوان وضعیت رباط‌ها نیز ارزیابی می‌شود.", guide: "ankle-fracture-clinic" },
        { n: "هالوکس والگوس (انحراف شست پا)", d: "انحراف شست پا به سمت بیرون و ایجاد برآمدگی در سمت داخلی است. با کفش پنجه‌پهن شکایت کمتر می‌شود؛ اگر درد ادامه یابد جراحی اصلاح استخوان انجام می‌شود." },
        { n: "مشکلات تاندون آشیل", d: "درد پشت پاشنه و خشکی صبحگاهی بیماری تاندون را مطرح می‌کند و درد ناگهانی و شدید همراه با ناتوانی در بلند شدن روی پنجهٔ پا، پارگی را." },
      ],
    },
    urgent: {
      tr: ["Burkulma sonrası dört adım atamama ya da kemik üzerinde belirgin ağrı", "Topuk arkasında ani ağrı ve parmak ucunda yükselememe", "Ayakta şekil bozukluğu ya da açık yara ile birlikte yaralanma"],
      en: ["Being unable to take four steps after a sprain, or marked tenderness over the bone", "Sudden pain behind the heel and inability to rise on tiptoe", "An injury with deformity of the foot or an open wound"],
      ru: ["Невозможность сделать четыре шага после подворачивания стопы или выраженная боль в области кости", "Внезапная боль позади пятки и невозможность подняться на носки", "Травма с деформацией стопы или открытой раной"],
      fa: ["ناتوانی در برداشتن چهار قدم پس از پیچ‌خوردگی، یا درد واضح روی استخوان", "درد ناگهانی پشت پاشنه و ناتوانی در بلند شدن روی پنجهٔ پا", "آسیب همراه با تغییر شکل پا یا زخم باز"],
    },
  },
  {
    id: "artroskopi",
    kind: "procedure",
    slug: { tr: "artroskopik-cerrahi", en: "arthroscopic-surgery", ru: "artroskopicheskaya-khirurgiya", fa: "jarrahi-artroskopi" },
    title: { tr: "Artroskopik cerrahi (kapalı eklem ameliyatı)", en: "Arthroscopic surgery (keyhole joint surgery)", ru: "Артроскопическая хирургия (малоинвазивные операции на суставах)", fa: "جراحی آرتروسکوپی (جراحی بستهٔ مفصل)" },
    lead: {
      tr: "Artroskopi, eklemin içine birkaç milimetrelik kesilerden yerleştirilen kamera ve ince aletlerle yapılan ameliyattır; halk arasında kapalı ameliyat olarak bilinir. En sık dizde ve omuzda, menisküs, bağ ve tendon sorunlarında; ayrıca dirsek, el bileği ve ayak bileğinde uyguluyoruz.",
      en: "Arthroscopy is surgery carried out inside a joint with a camera and fine instruments passed through cuts a few millimetres long; it is often called keyhole surgery. We use it most in the knee and the shoulder, for meniscus, ligament and tendon problems, and also in the elbow, the wrist and the ankle.",
      ru: "Артроскопия — это операция, которую выполняют с помощью камеры и тонких инструментов, вводимых в сустав через разрезы длиной несколько миллиметров; в обиходе её называют операцией «через проколы». Чаще всего мы применяем её на коленном и плечевом суставах при проблемах с менисками, связками и сухожилиями, а также на локтевом, лучезапястном и голеностопном суставах.",
      fa: "آرتروسکوپی جراحی‌ای است که با دوربین و ابزارهای ظریفی انجام می‌شود که از برش‌هایی چندمیلی‌متری به درون مفصل وارد می‌شوند؛ در میان مردم به جراحی بسته معروف است. آن را بیشتر در زانو و شانه برای مشکلات منیسک، رباط و تاندون و همچنین در آرنج، مچ دست و مچ پا به کار می‌بریم.",
    },
    listTitle: { tr: "Artroskopiyle yaptığımız ameliyatlar", en: "Operations we do arthroscopically", ru: "Операции, которые мы выполняем артроскопически", fa: "جراحی‌هایی که با آرتروسکوپی انجام می‌دهیم" },
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
      ru: [
        { n: "Артроскопия коленного сустава: операция на мениске", d: "Разорванный мениск в зависимости от места и типа разрыва сшивают либо удаляют его повреждённую часть. Не каждый разрыв мениска требует операции; решение принимают с учётом жалоб, осмотра и данных МРТ.", guide: "meniscus-clinic" },
        { n: "Операция на передней крестообразной связке", d: "На место разорванной связки под контролем камеры устанавливают трансплантат, который чаще всего готовят из собственного сухожилия пациента. Физиотерапия после операции — важная часть результата.", guide: "acl-tear-clinic" },
        { n: "Артроскопия плечевого сустава: восстановление вращательной манжеты плеча", d: "Разорванное сухожилие фиксируют на месте с помощью шовных якорных фиксаторов, установленных в кость. Решение о восстановлении принимают с учётом размера разрыва, возраста и жалоб.", guide: "rotator-cuff-clinic" },
        { n: "Операция при вывихе плеча (стабилизация)", d: "При повторяющихся вывихах плеча оторванную суставную губу и капсулу сустава вновь прикрепляют к кости шовными якорными фиксаторами.", guide: "shoulder-dislocation-clinic" },
        { n: "Артроскопия локтевого сустава", d: "Применяется для удаления свободных тел из полости сустава, для рассечения тканей, ограничивающих движения, и при некоторых проблемах с хрящом." },
        { n: "Артроскопия лучезапястного сустава", d: "Полость лучезапястного сустава оценивают с помощью камеры. Применяется при разрывах треугольного фиброзно-хрящевого комплекса (TFCC), при некоторых гигромах (ганглиях) и для сопоставления переломов, распространяющихся в полость сустава." },
        { n: "Артроскопия голеностопного сустава", d: "Применяется при повреждениях хряща голеностопного сустава, при боли, вызванной ущемлением мягких тканей или костным соударением, и для удаления свободных тел из полости сустава." },
        { n: "Отличие от открытой операции", d: "Поскольку разрезы небольшие, боль после операции и срок пребывания в больнице обычно меньше, чем при открытой операции; структуры внутри сустава оценивают в увеличенном виде на изображении с камеры. Срок восстановления зависит от выполненного вмешательства: если накладывали шов или восстанавливали связку, период защиты сустава длится дольше." },
      ],
      fa: [
        { n: "آرتروسکوپی زانو: جراحی منیسک", d: "منیسک پاره بسته به محل و نوع پارگی بخیه زده می‌شود یا بخش آسیب‌دیدهٔ آن برداشته می‌شود. هر پارگی منیسک به جراحی نیاز ندارد؛ تصمیم بر اساس شکایت بیمار، معاینه و یافته‌های ام‌آرآی گرفته می‌شود.", guide: "meniscus-clinic" },
        { n: "جراحی رباط صلیبی قدامی", d: "به‌جای رباط پاره‌شده، پیوندی (گرافت) که بیشتر از تاندون خود بیمار تهیه می‌شود با هدایت دوربین کار گذاشته می‌شود. فیزیوتراپی پس از جراحی بخش مهمی از نتیجه است.", guide: "acl-tear-clinic" },
        { n: "آرتروسکوپی شانه: ترمیم روتاتور کاف", d: "تاندون پاره‌شده با لنگرهای بخیه (انکور) که در استخوان کار گذاشته می‌شوند در جای خود تثبیت می‌شود. تصمیم به ترمیم بر اساس اندازهٔ پارگی، سن و شکایت بیمار گرفته می‌شود.", guide: "rotator-cuff-clinic" },
        { n: "جراحی دررفتگی شانه (تثبیت)", d: "در دررفتگی‌های مکرر شانه، لابروم و کپسول مفصلیِ پاره‌شده با لنگرهای بخیه دوباره به استخوان متصل می‌شوند.", guide: "shoulder-dislocation-clinic" },
        { n: "آرتروسکوپی آرنج", d: "برای خارج کردن اجسام آزاد درون مفصل، آزادسازی بافت‌هایی که حرکت را محدود می‌کنند و در برخی مشکلات غضروف به کار می‌رود." },
        { n: "آرتروسکوپی مچ دست", d: "درون مفصل مچ دست با دوربین ارزیابی می‌شود. در پارگی‌های فیبروکارتیلاژ مثلثی (TFCC)، برخی کیست‌های گانگلیون و برای جا انداختن شکستگی‌هایی که به درون مفصل کشیده شده‌اند به کار می‌رود." },
        { n: "آرتروسکوپی مچ پا", d: "در آسیب‌های غضروف مچ پا، دردهای ناشی از گیرافتادگی بافت نرم یا استخوان و برای خارج کردن اجسام آزاد درون مفصل به کار می‌رود." },
        { n: "تفاوت آن با جراحی باز", d: "چون برش‌ها کوچک‌اند، درد پس از جراحی و مدت بستری در بیمارستان معمولاً کمتر از جراحی باز است؛ ساختارهای درون مفصل در تصویر دوربین با بزرگ‌نمایی ارزیابی می‌شوند. مدت بهبودی به کار انجام‌شده بستگی دارد: اگر بخیه یا ترمیم رباط انجام شده باشد، دورهٔ محافظت طولانی‌تر است." },
      ],
    },
    urgent: {
      tr: ["Ameliyat sonrası artan ağrı, şişlik, kızarıklık, yara yerinden akıntı ya da ateş", "Baldırda ağrı, şişlik ve gerginlik", "Düşme ya da burkulma sonrası dizin kilitlenmesi ve tam açılamaması", "Omzun yerinden çıktığından şüphelenilmesi"],
      en: ["Increasing pain, swelling, redness, discharge from the wound or fever after the operation", "Pain, swelling and tightness in the calf", "A knee that locks and will not straighten fully after a fall or twist", "A shoulder you suspect has dislocated"],
      ru: ["Нарастающая боль, отёк, покраснение, выделения из раны или повышение температуры после операции", "Боль, отёк и напряжение в икре", "Блокировка колена и невозможность полностью его разогнуть после падения или подворачивания ноги", "Подозрение, что плечо вывихнулось"],
      fa: ["درد رو به افزایش، تورم، قرمزی، ترشح از محل زخم یا تب پس از جراحی", "درد، تورم و سفتی در پشت ساق پا", "قفل شدن زانو و باز نشدن کامل آن پس از زمین خوردن یا پیچ‌خوردگی", "شک به اینکه شانه از جا دررفته است"],
    },
  },
  {
    id: "kirik-travma",
    slug: { tr: "kirik-ve-travma", en: "fractures-and-trauma", ru: "perelomy-i-travmy", fa: "shekastegi-va-troma" },
    title: { tr: "Kırık ve travma", en: "Fractures and trauma", ru: "Переломы и травмы", fa: "شکستگی و تروما" },
    lead: {
      tr: "Kırık ve çıkıklara hastanenin acil servisi üzerinden bakıyoruz. Tedavinin amacı kemiğin doğru dizilimde kaynaması ve eklemin en kısa sürede yeniden hareket ettirilebilmesidir.",
      en: "We see fractures and dislocations through the hospital’s emergency department. The aim of treatment is for the bone to heal in the correct alignment and for the joint to move again as soon as possible.",
      ru: "Пациентов с переломами и вывихами мы принимаем через отделение неотложной помощи больницы. Цель лечения — чтобы кость срослась в правильном положении, а сустав как можно скорее снова мог двигаться.",
      fa: "شکستگی‌ها و دررفتگی‌ها را از طریق اورژانس بیمارستان می‌بینیم. هدف درمان این است که استخوان در راستای درست جوش بخورد و مفصل در کوتاه‌ترین زمان دوباره قابل حرکت باشد.",
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
      ru: [
        { n: "Лечение гипсом и шиной", d: "Стабильные переломы с небольшим смещением лечат гипсовой повязкой или шиной; за срастанием следят по рентгеновским снимкам, которые делают через определённые промежутки времени." },
        { n: "Хирургическая фиксация", d: "При переломах со смещением, с нарушением суставной поверхности или нестабильных используют пластины, винты или внутрикостный штифт." },
        { n: "Открытые переломы", d: "Это случаи, когда перелом сообщается с открытой раной; из-за риска инфекции они требуют экстренной операции." },
        { n: "Множественные травмы", d: "При таких травмах, как дорожно-транспортное происшествие и падение с высоты, несколько переломов лечат совместно с врачами других специальностей и в порядке приоритетности." },
        { n: "Несросшиеся и неправильно сросшиеся переломы", d: "Если перелом не срастается в ожидаемые сроки или срастается в неправильном положении, выясняют причину; при необходимости фиксацию выполняют заново и применяют костный трансплантат." },
      ],
      fa: [
        { n: "درمان با گچ و آتل", d: "شکستگی‌های پایدار و با جابه‌جایی کم با گچ یا آتل درمان می‌شوند؛ جوش خوردن با عکس‌های رادیولوژی دوره‌ای پیگیری می‌شود." },
        { n: "تثبیت با جراحی", d: "در شکستگی‌های جابه‌جاشده، شکستگی‌هایی که سطح مفصلی را به هم زده‌اند یا شکستگی‌های ناپایدار، از پلاک، پیچ یا میلهٔ داخل استخوانی استفاده می‌شود." },
        { n: "شکستگی‌های باز", d: "مواردی است که شکستگی با یک زخم باز در ارتباط است؛ به‌دلیل خطر عفونت به جراحی اورژانسی نیاز دارد." },
        { n: "آسیب‌های متعدد", d: "در آسیب‌هایی مانند تصادف رانندگی و سقوط از ارتفاع، چند شکستگی همراه با سایر رشته‌های پزشکی و به ترتیب اولویت درمان می‌شوند." },
        { n: "شکستگی‌های جوش‌نخورده و بدجوش‌خورده", d: "در شکستگی‌هایی که در زمان مورد انتظار جوش نمی‌خورند یا در راستای نادرست جوش می‌خورند، علت بررسی می‌شود؛ در صورت نیاز تثبیت دوباره انجام و پیوند استخوان به کار برده می‌شود." },
      ],
    },
    urgent: {
      tr: ["Şekil bozukluğu, kemiğin göründüğü yara ya da kanama", "Yaralanan kol ya da bacakta uyuşma, soğukluk, renk değişikliği", "Alçı içinde giderek artan ağrı, parmaklarda şişlik ve uyuşma"],
      en: ["Deformity, a wound with visible bone, or bleeding", "Numbness, coldness or discolouration of the injured arm or leg", "Increasing pain inside a cast, with swollen or numb fingers or toes"],
      ru: ["Деформация, рана, в которой видна кость, или кровотечение", "Онемение, похолодание, изменение цвета травмированной руки или ноги", "Нарастающая боль под гипсом, отёк и онемение пальцев"],
      fa: ["تغییر شکل، زخمی که استخوان در آن دیده می‌شود، یا خون‌ریزی", "بی‌حسی، سردی یا تغییر رنگ در دست یا پای آسیب‌دیده", "درد رو به افزایش درون گچ، تورم و بی‌حسی انگشتان"],
    },
  },
  {
    id: "cocuk",
    slug: { tr: "cocuk-ortopedisi", en: "childrens-orthopaedics", ru: "detskaya-ortopediya", fa: "ortopedi-koodakan" },
    title: { tr: "Çocuk ortopedisi", en: "Children’s orthopaedics", ru: "Детская ортопедия", fa: "ارتوپدی کودکان" },
    lead: {
      tr: "Çocuk kemikleri büyüme kıkırdakları nedeniyle erişkinden farklı kırılır ve farklı iyileşir. Kırıkların çoğu alçıyla tedavi edilir.",
      en: "Because of their growth plates, children’s bones break and heal differently from adults’. Most fractures are treated in a cast.",
      ru: "Из-за зон роста кости у детей ломаются и срастаются иначе, чем у взрослых. Большинство переломов лечат гипсовой повязкой.",
      fa: "استخوان‌های کودکان به‌دلیل صفحه‌های رشد، متفاوت از بزرگسالان می‌شکنند و متفاوت بهبود می‌یابند. بیشتر شکستگی‌ها با گچ درمان می‌شوند.",
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
      ru: [
        { n: "Переломы у детей", d: "Чаще всего встречаются в области предплечья, локтя и ключицы. Срастание происходит быстро; при переломах со смещением выполняют закрытую репозицию и, при необходимости, фиксацию спицами." },
        { n: "Переломы в области локтевого сустава", d: "Отёк локтя после падения и то, что ребёнок не пользуется рукой, указывают на перелом выше локтя (надмыщелковый) и требуют срочного осмотра." },
        { n: "Повреждения зоны роста", d: "Переломы, затрагивающие зону роста на концах костей, из-за их влияния на рост наблюдают на контрольных осмотрах." },
        { n: "Жалобы на походку и положение ног", d: "При таких жалобах, как ходьба носками внутрь, искривление ног и хромота, на осмотре отличают нормальное развитие от состояний, требующих лечения." },
      ],
      fa: [
        { n: "شکستگی‌های دوران کودکی", d: "بیشتر در ساعد، آرنج و ترقوه دیده می‌شود. جوش خوردن سریع است؛ در شکستگی‌های جابه‌جاشده جااندازی بسته و در صورت نیاز تثبیت با پین انجام می‌شود." },
        { n: "شکستگی‌های اطراف آرنج", d: "تورم آرنج پس از زمین خوردن و استفاده نکردن کودک از دست، شکستگی بالای آرنج (سوپراکوندیلار) را مطرح می‌کند و به ارزیابی فوری نیاز دارد." },
        { n: "آسیب‌های صفحهٔ رشد", d: "شکستگی‌هایی که ناحیهٔ رشد در انتهای استخوان‌ها را درگیر می‌کنند، به‌دلیل اثرشان بر رشد با معاینه‌های دوره‌ای پیگیری می‌شوند." },
        { n: "شکایت‌های راه رفتن و راستای اندام", d: "در شکایت‌هایی مانند راه رفتن با پنجهٔ رو به داخل، انحنای پاها و لنگیدن، با معاینه رشد طبیعی از مواردی که به درمان نیاز دارند تشخیص داده می‌شود." },
      ],
    },
    urgent: {
      tr: ["Düşme sonrası kolunu ya da bacağını kullanmayan çocuk", "Dirsekte hızla gelişen şişlik", "Ateşle birlikte topallama ya da bacağına basmama"],
      en: ["A child who will not use an arm or leg after a fall", "Rapidly developing swelling of the elbow", "A limp or refusal to bear weight together with fever"],
      ru: ["Ребёнок, который после падения не пользуется рукой или ногой", "Быстро нарастающий отёк локтя", "Хромота или отказ наступать на ногу в сочетании с повышенной температурой"],
      fa: ["کودکی که پس از زمین خوردن از دست یا پای خود استفاده نمی‌کند", "تورمی که به‌سرعت در آرنج ایجاد می‌شود", "لنگیدن یا وزن نگذاشتن روی پا همراه با تب"],
    },
  },
  {
    id: "tumor",
    slug: { tr: "kemik-ve-yumusak-doku-tumorleri", en: "bone-and-soft-tissue-tumours", ru: "opukholi-kostej-i-myagkikh-tkanej", fa: "tumor-ostekhan-va-baft-narm" },
    title: { tr: "Kemik ve yumuşak doku tümörleri", en: "Bone and soft tissue tumours", ru: "Опухоли костей и мягких тканей", fa: "تومورهای استخوان و بافت نرم" },
    lead: {
      tr: "Kemikte ya da kas ve yağ dokusunda fark edilen kitlelerin büyük bölümü iyi huyludur. Yine de her kitlenin muayene ve görüntülemeyle değerlendirilmesi, gerektiğinde biyopsiyle tanı konması gerekir.",
      en: "Most lumps found in bone, muscle or fat are benign. Even so, every lump should be assessed by examination and imaging, with a biopsy to establish the diagnosis where needed.",
      ru: "Большинство образований, замеченных в кости либо в мышечной и жировой ткани, доброкачественные. Тем не менее каждое образование необходимо оценить с помощью осмотра и методов визуализации, а при необходимости — установить диагноз по результатам биопсии.",
      fa: "بیشتر توده‌هایی که در استخوان یا در بافت عضله و چربی متوجه آن‌ها می‌شوند خوش‌خیم‌اند. با این حال هر توده باید با معاینه و تصویربرداری ارزیابی شود و در صورت نیاز با نمونه‌برداری (بیوپسی) تشخیص داده شود.",
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
      ru: [
        { n: "Доброкачественные опухоли и кисты костей", d: "Большинство из них обнаруживают случайно на рентгеновском снимке, сделанном по другой причине. За частью из них только наблюдают; те, что вызывают боль, растут или ослабляют кость, удаляют хирургически." },
        { n: "Образования мягких тканей", d: "Чаще всего встречается жировик (липома). Растущие, глубоко расположенные или болезненные образования исследуют с помощью МРТ; при необходимости диагноз устанавливают по результатам биопсии." },
        { n: "Злокачественные опухоли костей и мягких тканей (саркомы)", d: "Встречаются редко. Диагноз устанавливают по результатам биопсии; лечение планируют совместно хирурги, онкологи и специалисты по лучевой терапии." },
        { n: "Метастазы в кости и патологические переломы", d: "Распространение рака из другого органа в кость может вызывать боль и ослаблять кость. Сломанную кость или кость с риском перелома укрепляют хирургически." },
      ],
      fa: [
        { n: "تومورها و کیست‌های خوش‌خیم استخوان", d: "بیشترشان به‌طور اتفاقی در عکس رادیولوژی‌ای که به دلیل دیگری گرفته شده دیده می‌شوند. برخی فقط زیر نظر گرفته می‌شوند؛ آن‌هایی که درد ایجاد می‌کنند، بزرگ می‌شوند یا استخوان را ضعیف می‌کنند با جراحی برداشته می‌شوند." },
        { n: "توده‌های بافت نرم", d: "شایع‌ترین آن‌ها تودهٔ چربی (لیپوم) است. توده‌هایی که بزرگ می‌شوند، عمقی‌اند یا دردناک‌اند با ام‌آرآی بررسی می‌شوند؛ در صورت نیاز تشخیص با بیوپسی داده می‌شود." },
        { n: "تومورهای بدخیم استخوان و بافت نرم (سارکوم‌ها)", d: "نادرند. تشخیص با بیوپسی داده می‌شود؛ درمان با همکاری جراحی، انکولوژی و پرتودرمانی برنامه‌ریزی می‌شود." },
        { n: "متاستازهای استخوان و شکستگی‌های پاتولوژیک", d: "گسترش سرطان از عضوی دیگر به استخوان می‌تواند باعث درد و ضعیف شدن استخوان شود. استخوانی که شکسته یا در خطر شکستن است با جراحی تقویت می‌شود." },
      ],
    },
    urgent: {
      tr: ["Hızla büyüyen ya da 5 santimetreden büyük kitle", "Gece uyandıran, dinlenmekle geçmeyen kemik ağrısı", "Hafif bir zorlanmayla ya da düşmeden oluşan kırık"],
      en: ["A lump that is growing quickly or is larger than 5 centimetres", "Bone pain that wakes you at night and does not ease with rest", "A fracture after minor strain or without a fall"],
      ru: ["Образование, которое быстро растёт или превышает 5 сантиметров", "Боль в кости, которая будит по ночам и не проходит в покое", "Перелом при незначительной нагрузке или без падения"],
      fa: ["توده‌ای که به‌سرعت بزرگ می‌شود یا از ۵ سانتی‌متر بزرگ‌تر است", "درد استخوانی که شب‌ها از خواب بیدار می‌کند و با استراحت برطرف نمی‌شود", "شکستگی‌ای که با فشاری خفیف یا بدون زمین خوردن رخ می‌دهد"],
    },
    urgentNote: {
      tr: "Kitle ve ağrıda beklemeyin, birkaç gün içinde muayene için randevu alın. Kırık şüphesinde acil servise gidin.",
      en: "For a lump or pain, do not wait: book an examination within a few days. If you suspect a fracture, go to the emergency department.",
      ru: "Если вы заметили образование или у вас есть боль, не ждите: запишитесь на осмотр в течение нескольких дней. При подозрении на перелом обратитесь в отделение неотложной помощи.",
      fa: "در صورت وجود توده یا درد منتظر نمانید و ظرف چند روز برای معاینه نوبت بگیرید. در صورت شک به شکستگی به اورژانس بروید.",
    },
  },
];

export const getArea = (lang: Lang, slug: string) => areas.find((a) => a.slug[lang] === slug);
export const areaUrl = (lang: Lang, a: Area) => `/${lang}/${AREAS_SEGMENT[lang]}/${a.slug[lang]}`;

/** Search titles and descriptions: the page's own conditions, named the way patients search for them. */
export const areaSeo: Record<string, { title: L; desc: L }> = {
  "omuz-dirsek": {
    title: { tr: "Omuz ve dirsek ağrısı, yırtık ve çıkık tedavisi", en: "Shoulder and elbow pain, tears and dislocation", ru: "Боль в плече и локте, разрывы и вывихи", fa: "درد شانه و آرنج، درمان پارگی و دررفتگی" },
    desc: { tr: "Girne’de omuz ve dirsek tedavisi: rotator manşet yırtığı, omuz çıkığı, donuk omuz, tenisçi dirseği ve kırıklar. Çoğu şikâyet ameliyatsız düzelir.", en: "Shoulder and elbow care in Kyrenia: rotator cuff tears, shoulder dislocation, frozen shoulder, tennis elbow and fractures. Most improve without surgery.", ru: "Лечение плеча и локтя в Кирении: разрыв вращательной манжеты, вывих плеча, замороженное плечо, локоть теннисиста, переломы. Жалобы чаще проходят без операции.", fa: "درمان شانه و آرنج در گیرنه: پارگی روتاتور کاف، دررفتگی شانه، شانهٔ یخ‌زده، آرنج تنیس‌بازان و شکستگی‌ها. بیشتر شکایت‌ها بدون جراحی بهبود می‌یابد." },
  },
  "el-bilek": {
    title: { tr: "El cerrahisi ve mikrocerrahi", en: "Hand surgery and microsurgery", ru: "Хирургия кисти и микрохирургия", fa: "جراحی دست و میکروجراحی" },
    desc: { tr: "Girne’de el cerrahisi: karpal tünel, tetik parmak, el bileği kırığı, tendon ve sinir kesileri, replantasyon (kopan parmağın dikilmesi), tırnak problemleri.", en: "Hand surgery in Kyrenia: carpal tunnel, trigger finger, wrist fracture, tendon and nerve repair, replantation of severed fingers, nail problems.", ru: "Хирургия кисти в Кирении: запястный канал, щёлкающий палец, перелом запястья, порезы сухожилий и нервов, реплантация (пришивание пальца), проблемы с ногтями.", fa: "جراحی دست در گیرنه: تونل کارپ، انگشت ماشه‌ای، شکستگی مچ دست، بریدگی تاندون و عصب، پیوند مجدد (پیوند زدن انگشت قطع‌شده)، مشکلات ناخن." },
  },
  kalca: {
    title: { tr: "Kalça ağrısı, kalça kırığı ve kalça protezi", en: "Hip pain, hip fracture and hip replacement", ru: "Тазобедренный сустав: боль, перелом, протез", fa: "درد لگن، شکستگی لگن و تعویض مفصل لگن" },
    desc: { tr: "Girne’de kalça tedavisi: kalça kireçlenmesi, kalça protezi ve yaşlılarda kalça kırığı. Kasık ağrısı ve yürüme mesafesinin kısalması değerlendirme gerektirir.", en: "Hip care in Kyrenia: hip arthritis, hip replacement and hip fracture in older adults. Groin pain and a shorter walking distance call for an assessment.", ru: "Тазобедренный сустав, лечение в Кирении: артроз, эндопротезирование, перелом шейки бедра у пожилых. Боль в паху и сокращение дистанции ходьбы требуют осмотра.", fa: "درمان لگن در گیرنه: آرتروز لگن، تعویض مفصل لگن و شکستگی لگن در سالمندان. درد کشالهٔ ران و کوتاه شدن مسافت راه رفتن به ارزیابی نیاز دارد." },
  },
  diz: {
    title: { tr: "Diz ağrısı, menisküs ve bağ yaralanmaları", en: "Knee pain, meniscus and ligament injuries", ru: "Боль в колене, травмы мениска и связок", fa: "درد زانو، آسیب‌های منیسک و رباط" },
    desc: { tr: "Girne’de diz tedavisi: menisküs yırtığı, ön çapraz bağ yaralanması, diz kireçlenmesi, diz protezi ve kırıklar. Muayene, röntgen ve MR ile değerlendirme.", en: "Knee care in Kyrenia: meniscal tears, anterior cruciate ligament injury, knee arthritis, knee replacement and fractures. Assessed by examination, X-ray and MRI.", ru: "Лечение колена в Кирении: разрыв мениска, повреждение передней крестообразной связки, артроз, эндопротезирование, переломы. Оценка: осмотр, рентген и МРТ.", fa: "درمان زانو در گیرنه: پارگی منیسک، آسیب رباط صلیبی قدامی، آرتروز زانو، تعویض مفصل زانو و شکستگی‌ها. ارزیابی با معاینه، عکس رادیولوژی و ام‌آرآی." },
  },
  "ayak-bilek": {
    title: { tr: "Ayak ve ayak bileği: burkulma, kırık, halluks valgus", en: "Foot and ankle: sprains, fractures and bunions", ru: "Растяжение и перелом голеностопа, hallux valgus", fa: "پا و مچ پا: پیچ‌خوردگی، شکستگی، هالوکس والگوس" },
    desc: { tr: "Girne’de ayak ve ayak bileği tedavisi: ayak bileği burkulması ve kırığı, halluks valgus (başparmak çıkıntısı) ve Aşil tendonu sorunları.", en: "Foot and ankle care in Kyrenia: ankle sprains and fractures, hallux valgus (bunion) and Achilles tendon problems.", ru: "Лечение стопы и голеностопа в Кирении: растяжение связок и перелом лодыжки, hallux valgus («косточка» у большого пальца), проблемы с ахилловым сухожилием.", fa: "درمان پا و مچ پا در گیرنه: پیچ‌خوردگی و شکستگی مچ پا، هالوکس والگوس (برآمدگی کنار شست پا) و مشکلات تاندون آشیل." },
  },
  artroskopi: {
    title: { tr: "Artroskopik cerrahi (kapalı eklem ameliyatı)", en: "Arthroscopic surgery (keyhole joint surgery)", ru: "Артроскопия (операции через проколы)", fa: "جراحی آرتروسکوپی (جراحی بستهٔ مفصل)" },
    desc: { tr: "Girne’de artroskopik cerrahi (kapalı ameliyat): diz, omuz, dirsek, el bileği ve ayak bileği. Menisküs, ön çapraz bağ, rotator manşet ve omuz çıkığı ameliyatları.", en: "Arthroscopic (keyhole) surgery in Kyrenia: knee, shoulder, elbow, wrist and ankle. Meniscus surgery, ACL reconstruction, rotator cuff repair, shoulder stabilisation.", ru: "Артроскопия (операции через проколы) в Кирении: колено, плечо, локоть, запястье, голеностоп. Операции на мениске, ПКС, вращательной манжете, при вывихе плеча.", fa: "جراحی آرتروسکوپی (جراحی بسته) در گیرنه: زانو، شانه، آرنج، مچ دست و مچ پا. جراحی منیسک، رباط صلیبی قدامی، روتاتور کاف و دررفتگی شانه." },
  },
  "kirik-travma": {
    title: { tr: "Kırık ve travma tedavisi", en: "Fracture and trauma care", ru: "Лечение переломов и травм", fa: "درمان شکستگی و تروما" },
    desc: { tr: "Girne’de kırık tedavisi: alçı ve atel, ameliyatla tespit, açık kırıklar, çoklu yaralanmalar ve kaynamayan kırıklar. Başvuru hastanenin acil servisi üzerinden.", en: "Fracture care in Kyrenia: casts and splints, surgical fixation, open fractures, multiple injuries and non-union. Seen via the emergency department.", ru: "Лечение переломов в Кирении: гипс и шина, оперативная фиксация, открытые переломы, множественные травмы, несросшиеся переломы. Приём через неотложную помощь.", fa: "درمان شکستگی در گیرنه: گچ و آتل، تثبیت با جراحی، شکستگی‌های باز، آسیب‌های متعدد و شکستگی‌های جوش‌نخورده. مراجعه از طریق اورژانس بیمارستان." },
  },
  cocuk: {
    title: { tr: "Çocuk ortopedisi ve çocuk kırıkları", en: "Children’s orthopaedics and fractures", ru: "Детская ортопедия и переломы у детей", fa: "ارتوپدی کودکان و شکستگی‌های کودکان" },
    desc: { tr: "Girne’de çocuk ortopedisi: çocukluk çağı kırıkları, dirsek çevresi kırıkları, büyüme kıkırdağı yaralanmaları, yürüme ve dizilim şikâyetleri.", en: "Children’s orthopaedics in Kyrenia: childhood fractures, fractures around the elbow, growth plate injuries, and walking and alignment concerns.", ru: "Детская ортопедия в Кирении: переломы у детей, переломы в области локтя, повреждения зоны роста, жалобы на походку и положение ног.", fa: "ارتوپدی کودکان در گیرنه: شکستگی‌های دوران کودکی، شکستگی‌های اطراف آرنج، آسیب‌های صفحهٔ رشد و شکایت‌های راه رفتن و راستای اندام." },
  },
  tumor: {
    title: { tr: "Kemik ve yumuşak doku tümörleri", en: "Bone and soft tissue tumours", ru: "Опухоли костей и мягких тканей", fa: "تومورهای استخوان و بافت نرم" },
    desc: { tr: "Girne’de kemik ve yumuşak doku tümörleri: iyi huylu tümör ve kistler, yumuşak doku kitleleri, sarkomlar, kemik metastazları. Muayene, görüntüleme ve biyopsi.", en: "Bone and soft tissue tumours in Kyrenia: benign tumours and cysts, soft tissue lumps, sarcomas and bone metastases. Examination, imaging and biopsy.", ru: "Опухоли костей и мягких тканей в Кирении: доброкачественные опухоли и кисты, образования мягких тканей, саркомы, метастазы. Осмотр, визуализация и биопсия.", fa: "تومورهای استخوان و بافت نرم در گیرنه: تومورها و کیست‌های خوش‌خیم، توده‌های بافت نرم، سارکوم‌ها و متاستازهای استخوان. معاینه، تصویربرداری و بیوپسی." },
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
  ru: {
    back: "← Направления лечения",
    conditions: "Часто встречающиеся состояния",
    more: "Подробная статья",
    urgent: "Когда обращаться без промедления",
    urgentNote: "В этих случаях не ждите приёма по записи; обратитесь в ближайшее отделение неотложной помощи.",
    doctors: "Наши врачи",
    doctorsP: "Наша команда из трёх врачей-ортопедов в тесном сотрудничестве ведёт все этапы — от обследования и постановки диагноза до хирургического и нехирургического лечения. Опираясь на общие знания и опыт, мы стремимся определить для каждого пациента наиболее подходящий подход к лечению и добиться наибольшей пользы.",
    others: "Другие направления лечения",
    disclaimer: "Эта страница содержит общую информацию; диагноз и лечение определяются на осмотре. Приём ведётся на турецком и английском языках.",
    updated: "Последнее обновление",
    book: "Записаться на приём",
    metaSuffix: "Кирения, Северный Кипр · Cyprus Orthopaedics",
  },
  fa: {
    back: "→ زمینه‌های درمان",
    conditions: "مشکلات شایع",
    more: "نوشتهٔ مفصل",
    urgent: "چه زمانی نباید منتظر ماند",
    urgentNote: "در این موارد منتظر نوبت نمانید؛ به نزدیک‌ترین اورژانس بروید.",
    doctors: "پزشکان ما",
    doctorsP: "تیم ما که از سه متخصص ارتوپدی تشکیل شده است، همهٔ مراحل را از ارزیابی و تشخیص تا درمان‌های جراحی و غیرجراحی با همکاری نزدیک پیش می‌برد. با تکیه بر دانش و تجربهٔ مشترک خود، می‌کوشیم برای هر بیمار مناسب‌ترین رویکرد درمانی را تعیین کنیم و بیشترین فایده را فراهم آوریم.",
    others: "سایر زمینه‌های درمان",
    disclaimer: "این صفحه برای اطلاعات عمومی است؛ تشخیص و درمان در معاینه تعیین می‌شود. معاینه و مشاوره به زبان‌های ترکی و انگلیسی انجام می‌شود.",
    updated: "آخرین به‌روزرسانی",
    book: "گرفتن نوبت",
    metaSuffix: "گیرنه، قبرس شمالی · Cyprus Orthopaedics",
  },
};


/** Operations named in the scrolling band; each links to its region page. Drawn from the region pages and the hospital's own department page; needs the doctors' confirmation. */
export const procedures: { t: L; area: string }[] = [
  { t: { tr: "Diz protezi", en: "Knee replacement", ru: "Эндопротезирование коленного сустава", fa: "تعویض مفصل زانو" }, area: "diz" },
  { t: { tr: "Kalça protezi", en: "Hip replacement", ru: "Эндопротезирование тазобедренного сустава", fa: "تعویض مفصل لگن" }, area: "kalca" },
  { t: { tr: "Ön çapraz bağ ameliyatı", en: "ACL reconstruction", ru: "Операция на передней крестообразной связке", fa: "جراحی رباط صلیبی قدامی" }, area: "diz" },
  { t: { tr: "Menisküs ameliyatı", en: "Meniscus surgery", ru: "Операция на мениске", fa: "جراحی منیسک" }, area: "diz" },
  { t: { tr: "Diz artroskopisi", en: "Knee arthroscopy", ru: "Артроскопия коленного сустава", fa: "آرتروسکوپی زانو" }, area: "artroskopi" },
  { t: { tr: "Omuz artroskopisi", en: "Shoulder arthroscopy", ru: "Артроскопия плечевого сустава", fa: "آرتروسکوپی شانه" }, area: "artroskopi" },
  { t: { tr: "Dirsek artroskopisi", en: "Elbow arthroscopy", ru: "Артроскопия локтевого сустава", fa: "آرتروسکوپی آرنج" }, area: "artroskopi" },
  { t: { tr: "El bileği artroskopisi", en: "Wrist arthroscopy", ru: "Артроскопия лучезапястного сустава", fa: "آرتروسکوپی مچ دست" }, area: "artroskopi" },
  { t: { tr: "Ayak bileği artroskopisi", en: "Ankle arthroscopy", ru: "Артроскопия голеностопного сустава", fa: "آرتروسکوپی مچ پا" }, area: "artroskopi" },
  { t: { tr: "Rotator manşet onarımı", en: "Rotator cuff repair", ru: "Восстановление вращательной манжеты плеча", fa: "ترمیم روتاتور کاف" }, area: "omuz-dirsek" },
  { t: { tr: "Omuz çıkığı ameliyatı", en: "Shoulder stabilisation", ru: "Операция при вывихе плеча", fa: "جراحی دررفتگی شانه" }, area: "omuz-dirsek" },
  { t: { tr: "Kırık ameliyatları", en: "Fracture surgery", ru: "Операции при переломах", fa: "جراحی شکستگی" }, area: "kirik-travma" },
  { t: { tr: "Kalça kırığı ameliyatı", en: "Hip fracture surgery", ru: "Операция при переломе шейки бедра", fa: "جراحی شکستگی لگن" }, area: "kalca" },
  { t: { tr: "El bileği kırığı ameliyatı", en: "Wrist fracture fixation", ru: "Операция при переломе запястья", fa: "جراحی شکستگی مچ دست" }, area: "el-bilek" },
  { t: { tr: "Karpal tünel ameliyatı", en: "Carpal tunnel release", ru: "Операция при синдроме запястного канала", fa: "جراحی تونل کارپ" }, area: "el-bilek" },
  { t: { tr: "Tetik parmak ameliyatı", en: "Trigger finger release", ru: "Операция при щёлкающем пальце", fa: "جراحی انگشت ماشه‌ای" }, area: "el-bilek" },
  { t: { tr: "Tendon ve sinir onarımı", en: "Tendon and nerve repair", ru: "Восстановление сухожилий и нервов", fa: "ترمیم تاندون و عصب" }, area: "el-bilek" },
  { t: { tr: "Parmak ucu onarımı", en: "Fingertip reconstruction", ru: "Восстановление кончика пальца", fa: "ترمیم نوک انگشت" }, area: "el-bilek" },
  { t: { tr: "Replantasyon", en: "Replantation", ru: "Реплантация", fa: "پیوند مجدد" }, area: "el-bilek" },
  { t: { tr: "Ayak bileği kırığı ameliyatı", en: "Ankle fracture fixation", ru: "Операция при переломе лодыжки", fa: "جراحی شکستگی مچ پا" }, area: "ayak-bilek" },
  { t: { tr: "Halluks valgus ameliyatı", en: "Bunion surgery", ru: "Операция при hallux valgus", fa: "جراحی هالوکس والگوس" }, area: "ayak-bilek" },
  { t: { tr: "Aşil tendonu onarımı", en: "Achilles tendon repair", ru: "Восстановление ахиллова сухожилия", fa: "ترمیم تاندون آشیل" }, area: "ayak-bilek" },
  { t: { tr: "Çocuk kırıkları", en: "Children’s fractures", ru: "Переломы у детей", fa: "شکستگی‌های کودکان" }, area: "cocuk" },
  { t: { tr: "Kemik ve yumuşak doku tümörü ameliyatları", en: "Bone and soft tissue tumour surgery", ru: "Операции при опухолях костей и мягких тканей", fa: "جراحی تومورهای استخوان و بافت نرم" }, area: "tumor" },
];
