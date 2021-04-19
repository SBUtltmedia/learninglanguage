var nativeWords = [
				"طائرة",//"airplane",
				"تفاحة",//"apple",
				"شنطة", //"bag",
				"موزة",//"banana",
				"مصرف", //"bank",
				"سرير",//"bed",
				////"دراجة",//"behind",
				////"علم الأحياء",//"below",
				////"أسود/سوداء",//"between",
				"دراجة",//"bicycle",

				"علم الأحياء",//"biology",
				"أسود/سوداء",//"black",
				"أزرق/زرقاء",//"blue",
				"كتاب",//"book",
				"رف",//"bookshelf",

				"خبز",//"bread",
				"حافلة",//"bus",
				"كاميرة",//"camera",
				"سيارة",//"car",
				"جزر",//"carrot",
				"قط/قطة",//"cat",

				"جوال",//"cell phone",
				"كرسي",//"chair",
				"رخيص/رخيصة",//"cheap",
				"كيمياء",//"chemistry",

				"عيدان الطعام",//"chopsticks",
				"حصة دراسية",//class",
				"ساعة",//"clock",
				////"衣服",//"clothes",

				"علم الحاسب الآلي",//"computer science",
				"بقرة",//"cow",
				"لطيف/لطيفة",//"cute",
				"متجر كبير",//"department store",

				"طاولة",//"desk",
				"قاموس",//"dictionary",
				"صعب/صعبة",//"difficult",
				"كلب/كلبة",//"dog",
				"اسكان",//"dormitory",

				"درج",//"drawer",
				"أذن",//"ear",
				"شرق",//"east",
				"سهل/سهلة",//"easy",
				"علم الإقتصاد",//"economics",
				"ثمان/ثمانية",//"eight",

				"ممحاة",//"eraser",
				"مساء",//"evening",
				"اختبار",//"exam",
				"غالي/غالية",//"expensive",
				"عين",//"eye",
				"أب",//"father",

				"نار",//"fire",
				"خمس/خمسة",//"five",
				"زهرة",//"flower",
				"قدم",//"foot",
				"أربع/أربعة",//"four",
				"يوم الجمعة",//"Friday",

				"صديق/صديقة",//"friend",
				"أمام",//"front",
				"فلفل أخضر",//"green pepper",
				"يد",//"hand",
				"قبعة",//"hat",

				"البيت",//"home",
				"واجب منزلي",//"homework",
				"حصان",//"horse",
				"مستشفى",//"hospital",
				"مائة",//"hundred",

				////"تقاطع",//"inside",
				"تقاطع",//"intersection",
				"مفتاح",//"key",
				"يسار",//"left",
				"رسالة",//"letter",

				"مكتبة",//"library",
				"أدب",//"literature",
				"مجلة",//"magazine",
				"تخصص",//"major",
				"رجل",//"man",

				"رياضيات",//"mathematics",
				"الإثنين",//"Monday",
				"قرد",//"monkey",
				"قمر",//"moon",
				"صباح",//"morning",

				"أم",//"mother",
				"جبل",//"mountain",
				"فم",//"mouth",
				"سينما",//"movie theater",
				////"在附近",//"near",

				"جريدة",//"newspaper",
				////"隔壁",//"next door",
				"تسع/تسعة",//"nine",
				"الظهر",//"noon",
				"شمال",//"north",
				"أنف",//"nose",

				"دفتر",//"notebook",
				"أخ أكبر",//"older brother",
				"أخت كبرى",//"older sister",
				"واحد/واحدة",//"one",

				"برتقالة",//"orange",
				"منتزه",//"park",
				"موقف سيارات",//"parking lot",
				"قلم رصاص",//"pencil",
				"صورة",//"photograph",

				"مكتب بريد",//"post office",
				"جميل/جميلة",//"pretty",
				"سؤال",//"question",
				"أرنب",//"rabbit",
				"راديو",//"radio",

				"مطر",//"rain",
				"أحمر/حمراء",//"red",
				"ثلاجة",//"refrigerator",
				"مطعم",//"restaurant",
				"أرز",//"rice",

				"يمين",//"right",
				"نهر",//"river",
				"يوم السبت",//"Saturday",
				"مدرسة",//"school",
				"بحر",//"sea",
				"سبع/سبعة",//"seven",

				"حذاء",//"shoes",
				"جانب",//"side",
				"ست/ستة",//"six",
				"ثلج",//"snow",
				"علم الاجتماع",//"sociology",
				"تراب",//"soil",

				"جنوب",//"south",
				"ملعقة",//"spoon",
				"طابع بريدي",//"stamp",
				"فراولة",//"strawberry",
				"طالب/طالبة",//"student",

				"مترو الأنفاق",//"subway",
				"شمس",//"sun",
				"يوم الأحد",//"Sunday",
				"شاي",//"tea",
				"معلم/معلمة",//"teacher",
				"هاتف",//"telephone",

				"عشر/عشرة",//"ten",
				"أالف",//"thousand",
				"ثلاث/ثلاثة",//"three",

				////"今天",//"today",
				"يوم الخميس",//"Thursday",
				"يشتري/تشتري",//"to buy",
				"يأتي/تأتي",//"to come",
				"يشرب/تشرب",//"to drink",

				"يأكل/تأكل",//"to eat",
				"يذهب/تذهب",//"to go",
				"ينظر/تنظر",//"to look",
				////"明天",//"tomorrow",

				"يقرأ/تقرأ",//"to read",
				"يبيع/تبيع",//"to sell",
				"يغني/تغني",//"to sing",
				"يدرس/تدرس",//"to study",
				"ينام/تنام",//"to sleep",
				"يسبح/تسبح",//"to swim",

				"يكتب/تكتب",//"to write",
				"قطار",//"train",
				"محطة قطار",//"train station",
				"شجرة",//"tree",
				"يوم الثلاثاء",//"Tuesday",

				"تلفزيون",//"TV",
				"اثنان/اثنتان",//"two",
				"مظلة",//"umbrella",
				/////"上",//"up",
				"محفظة",//"wallet",
				"ماء",//"water",

				"يوم الأربعاء",//"Wednesday",
				"عطلة الآسبوع",//"weekend",
				"غرب",//"west",
				"أبيض/بيضاء",//"white",
				"ريح",//"wind",
				"نافذة",//"window",

				"امرأة",//"woman",
				////"昨天",//"yesterday",
				"أخ أصغر",//"younger brother",

				"أخت صغرى",//"younger sister",
				"صفر",//"zero",
				"حديقة حيوان",//"zoo",
				"بعد غد",//"the day after tomorrow"
				];

var ex1 = [
				"أنا لدي طائرة خاصة.",//"airplane",
				"تفاحة وموزة",//"apple",
				"هذه شنطة كبيرة، أليس كذلك؟",//"bag",
				"أنا آكل موزة كل يوم.",//"banana",
				"أنا ذهبت إلى المصرف بالأمس.",//"bank",

				"هل تنام على سرير؟",//"bed",
				////"有一个球在箱子后面。",//"behind",
				////"它就在你下面。",//"below",
				////"它在银行和书店中间。",//"between",
				"أنا أقود دراجة.",//"bicycle",

				"علم الأحياء ممتع",//"biology",
				"طائر أسود",//"black",
				"سماء زرقاء",//"blue",
				"هذا الكتاب لي.",//"book",
				"هناك مائة كتاب على الرف.",//"bookshelf",

				"خبز و قهوة",//"bread",
				"أذهب إلى الجامعة بالحافلة",//"bus",
				"كاميرة جميلة، أليس كذلك؟",//"camera",
				"أذهب إلى الجامعة بالسيارة",//"car",
				"أنا أكره الجزر.",//"carrot",
				"القطة لطيفة.",//"cat",

				"أريد جوال جديد.",//"cell phone",
				"اجلس على ذلك الكرسي لو سمحت!",//"chair",
				"شنطة رخيصة.",//"cheap",
				"تخصص أخي الأكبر هو كيمياء.",//"chemistry",

				"أنا آكل بعيدان الطعام",//"chopsticks",
				"لدي ثلاث حصص دراسية اليوم.",//"class",
				"هل تلك الساعة دقيقة؟",//"clock",
				////"我买了些衣服。",//"clothes",

				"تخصصي هو علم الحاسب الآلي .",//"computer science",
				"هذه البقرة كبيرة.",//"cow",
				"كلب لطيف.",//"cute",
				"أنا أحب التسوق في المتجر الكبير.",//"department store",

				"هناك طاولة في الغرفة.",//"desk",
				"يمكنك استخدام قاموسك.",//"dictionary",
				"اختبار صعب",//"difficult",
				"كلب سريع.",//"dog",
				"أنا أعيش في الاسكان.",//"dormitory",

				"الأوراق في درج الطاولة.",//"drawer",
				"أذني تؤلمني.",//"ear",
				"هناك مكتبة شرق محطة القطار.",//"east",
				"اختبار سهل.",//"easy",
				"علم الإقتصاد ممتع.",//"economics",
				"رقمي هو ثمانية",//"eight",

				"هل لي أن استعير ممحاتك؟",//"eraser",
				"سأشاهد فيلم مساء الغد.",//"evening",
				"أخذت اختبار رياضيات.",//"exam",
				"شنطة غالية.",//"expensive",
				"عيني اليمنى تؤلمني.",//"eye",
				"ذهبت مع أبي.",//"father",

				"ابتعد عن النار!",//"fire",
				"زارني البارحة خمسة من أصدقائي.",//"five",
				"هذه زهرة جميلة.",//"flower",
				"قدمي تؤلمني.",//"foot",
				"هناك أربعة أقلام",//"four",
				"ليس لدي حصة دراسية يوم الجمعة.",//"Friday",

				"سافرت بالطائرة مع صديقي.",//"friend",
				"هناك كرة أمام الصندوق.",//"front",
				"لا آكل الفلفل الأخضر كثيراً",//"green pepper",
				"هل غسلت يدك؟",//"hand",
				"هذه قبعة رائعة",//"hat",

				"أنا ذاهب إلى البيت.",//"home",
				"عندي واجب منزلي الليلة.",//"homework",
				"أنا أركب حصان.",//"horse",
				"أنا سأذهب إلى المستشفى.",//"hospital",
				"كل شيء بمائة دولار.",//"hundred",

				////"",//"inside",
				"توقف في التقاطع لو سمحت!",//"intersection",
				"هذا مفتاح منزلي.",//"key",
				"انعطف يساراً لو سمحت!",//"left",
				"سأكتب رسالة لجدتي.",//"letter",

				"أنا أذاكر في المكتبة.",//"library",
				"أنا أحب الأدب كثيراً.",//"literature",
				"أنا لا أقرأ المجلات في أغلب الأحيان.",//"magazine",
				"ماهو تخصصك؟",//"major",
				"رجل و امرأة",//"man",

				"الرياضيات صعبة.",//"mathematics",
				"لدي اختبار يوم الإثنين.",//"Monday",
				"القرد يأكل موزة.",//"monkey",
				"القمر جميل، أليس كذلك؟",//"moon",
				"أنا اغتسل في الصباح.",//"morning",

				"أنا أحب أمي.",//"mother",
				"هذا جبل عالي",//"mountain",
				"افتح فمك، لو سمحت!",//"mouth",
				"شاهدت فيلم في السينما.",//"movie theater",
				////"أنا أقرأ جريدة كل يوم.",//"near",

				"أنا أقرأ جريدة كل يوم.",//"newspaper",
				////"هناك تسعة طلاب.",//"next door",
				"هناك تسعة طلاب.",//"nine",
				"سأقابلك الظهر.",//"noon",
				"محطة القطار شمال الجامعة.",//"north",
				"أخي الأكبر لديه أنف كبير.",//"nose",

				"اشتريت دفتر.",//"notebook",
				"أخي الأكبر يحب البيتزا.",//"older brother",
				"أختي الكبرى تحب االمنتزه.",//"older sister",
				"رقمي على القائمة هو واحد.",//"one",

				"أكلت برتقالة.",//"orange",
				"مشيت لمدة ساعة في المنتزه.",//"park",
				"أين موقف السيارات؟",//"parking lot",
				"كتبتها بقلم رصاص.",//"pencil",
				"هذه صورتي.",//"photograph",

				"اشتريت طوابع من مكتب البريد.",//"post office",
				"فستان جميل.",//"pretty",
				"هل لديك سؤال؟",//"question",
				"هذا أرنب أبيض.",//"rabbit",
				"أنا استمع إلى الراديو أحياناً.",//"radio",

				"تمطر كثيراً في يونيو.",//"rain",
				"قميص أحمر.",//"red",
				"اشتريت ثلاجة كبيرة.",//"refrigerator",
				"أنا أذهب إلى المطعم في أغلب الأحيان.",//"restaurant",
				"أنا آكل الرز.",//"rice",

				"لو سمحت، انعطف يمين.",//"right",
				"أنا أذهب إلى النهر لأصطاد السمك.",//"river",
				"أنا لا أعمل يوم السبت.",//"Saturday",
				"أنا أحب المدرسة.",//"school",
				"أنا أسبح في البحر.",//"sea",
				"هناك سبعة كلاب.",//"seven",

				"اشتريت حذاء من السوق.",//"shoes",
				"هناك كرة على جانب الطريق.",//"side",
				"اشتريت ستة أقلام.",//"six",
				"الثلج أبيض.",//"snow",
				"علم الاجتماع ممتع.",//"sociology",
				"نحتاج تراب وماء.",//"soil",

				"هناك جامعة جنوب محطة القطار.",//"south",
				"هل سوف تأكل بملعقة؟",//"spoon",
				"اشتريت عشرين طابع بريدي.",//"stamp",
				"أنا أحب الفراولة كثيراً.",//"strawberry",
				"طالب رياضيات",//"student",

				"أنا غالباً آخذ مترو الأنفاق.",//"subway",
				"الشمس تشرق كل يوم.",//"sun",
				"أنا استريح في المنزل أيام الأحد.",//"Sunday",
				"هل تفضل كأساً من الشاي؟",//"tea",
				"معلمي لطيف.",//"teacher",
				"أنا لا استخدم هاتفي.",//"telephone",

				"هناك عشرة أقلام.",//"ten",
				"هذه السيارة ستكلفك ألف دولار.",//"thousand",
				"اشتريت ثلاثة طوابع بريدية.",//"three",

				////"我们今天干什么？",//"today",
				"أنا مشغول يوم الخميس.",//"Thursday",
				"هو سيشتري بعض الكتب.",//"to buy",
				"صديقي يأتي كل يوم.",//"to come",
				"أخي يشرب حليب في الصباح.",//"to drink",

				"هو يأكل ساندويتش في الظهر.",//"to eat",
				"علي يذهب إلى المدرسة.",//"to go",
				"علي يحب أن ينظر من النافذة.",//"to look",
				////"我明天得去工作。",//"tomorrow",

				"أبي يحب أن يقرأ كتب.",//"to read",
				"علي يريد أن يبيع كتابه القديم",//"to sell",
				"هو لايستطيع أن يغني.",//"to sing",
				"أخي يدرس رياضيات.",//"to study",
				"هو سينام مبكراً الليلة.",//"to sleep",
				"هو يحب أن يسبح.",//"to swim",

				"علي غالباً يكتب رسالة.",//"to write",
				"دعنا نذهب إلى المدينة بالقطار.",//"train",
				"دعنا نلتقي في محطة القطار.",//"train station",
				"هذه شجرة كرز.",//"tree",
				"هل أنت مشغول يوم الثلاثاء؟",//"Tuesday",

				"هل تشاهد التلفزيون.",//"TV",
				"اثنان من أصدقائي زاروني البارحة.",//"two",
				"سأحضر مظلة.",//"umbrella",
				////"أنا فقدت محفظتي.",//"up",
				"أنا فقدت محفظتي.",//"wallet",
				"هل تريد بعض الماء؟",//"water",

				"لدي مقابلة يوم الأربعاء.",//"Wednesday",
				"ماذا تفعل في عطلة الأسبوع؟",//"weekend",
				"تقع أسبانيا غرب فرنسا.",//"west",
				"سيارة بيضاء",//"white",
				"ريح قوية",//"wind",
				"دعنا نفتح النافذة!",//"window",

				"رجل و امرأة",//"woman",
				////"أخي الأصغر طالب ثانوي.",//"yesterday",
				"أخي الأصغر طالب ثانوي.",//"younger brother",

				"أختي الصغرى تعزف على البيانو.",//"younger sister",
				"حصلت على صفر في امتحاني.",//"zero",
				"لما لا نذهب إلى حديقة الحيوان؟",//"zoo",
				"سأسافر بعد غد إلى ميامي.",//	"the day after tomorrow"
				];

	//get rid of 11 words
	var tempVar = wordList.indexOf("yesterday");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("yesterday");
	time.splice(tempVar,1);

	tempVar = wordList.indexOf("behind");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("behind");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("between");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("between");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("below");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("below");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("clothes");
	wordList.splice(tempVar,1);
	tempVar = things.indexOf("clothes");
	things.splice(tempVar,1);

	tempVar = wordList.indexOf("inside");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("inside");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("today");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("today");
	time.splice(tempVar,1);

	tempVar = wordList.indexOf("near");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("near");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("next door");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("next door");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("tomorrow");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("tomorrow");
	time.splice(tempVar,1);

	tempVar = wordList.indexOf("up");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("up");
	relativeLocations.splice(tempVar,1);