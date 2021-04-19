var nativeWords = [
				"हवाई जहाज़ (m.)",//"airplane",
				"सेब (m.)",//"apple",
				"थैला (m.)", //"bag",
				"केला (m.)",//"banana",
				"बैंक (m.)", //"bank",
				"बिस्तर (m.)",//"bed",
				////"在后面",//"behind",
				////"在下面",//"below",
				////"在中间",//"between",
				"बाइसिकल (f.)",//"bicycle",

				"जीवविज्ञान (m.)",//"biology",
				"काला/काली",//"black",
				"नीला/नीली",//"blue",
				"किताब (f.)",//"book",
				"पुस्तक तख्ता (m.)",//"bookshelf",

				"रोटी (f.)",//"bread",
				"बस (f.)",//"bus",
				"कैमरा (m.)",//"camera",
				"गाड़ी (f.)",//"car",
				"गाजर (m.)",//"carrot",
				"बिल्ली (f.)",//"cat",

				"मोबाइल फ़ोन (m.)",//"cell phone",
				"कुर्सी (f.)",//"chair",
				"सस्ता/सस्ती",//"cheap",
				"रसायन विज्ञान (m.)",//"chemistry",

				////"筷子",//"chopsticks",
				"कक्षा (m.)",//class",
				"घड़ी (f.)",//"clock",
				////"衣服",//"clothes",

				"कंप्यूटर विज्ञान (m.)",//"computer science",
				"गाय (f.)",//"cow",
				"प्यारा/प्यारी",//"cute",
				"बिसातखाना (m.)",//"department store",

				"डेस्क (m.)",//"desk",
				"शब्दकोश (m.)",//"dictionary",
				"कठिन",//"difficult",
				"कुत्ता (m.)",//"dog",
				"छात्रावास (m.)",//"dormitory",

				"दराज (m.)",//"drawer",
				"कान (m.)",//"ear",
				"पूर्व (m.)",//"east",
				"सरल",//"easy",
				"अर्थशास्त्र(m.)",//"economics",
				"आठ (m.)",//"eight",

				"रबड़ (m.)",//"eraser",
				"शाम (f.)",//"evening",
				"परीक्षा (f.)",//"exam",
				"महंगा/महंगी",//"expensive",
				"नेत्र (m.)",//"eye",
				"पिता (m.)",//"father",

				"आग (f.)",//"fire",
				"पाँच (m.)",//"five",
				"फूल (m.)",//"flower",
				"पैर (m.)",//"foot",
				"चार (m.)",//"four",
				"शुक्रवार (m.)",//"Friday",

				"दोस्त (m.)",//"friend",
				"सामने",//"front",
				"हरी मिर्च (f.)",//"green pepper",
				"हाथ (m.)",//"hand",
				"टोपी (f.)",//"hat",

				"घर (m.)",//"home",
				"गृहकार्य (m.)",//"homework",
				"घोड़ा (m.)",//"horse",
				"अस्पताल (m.)",//"hospital",
				"सौ (m.)",//"hundred",

				////"在里面",//"inside",
				"चौराहा (m.)",//"intersection",
				"चाबी (f.)",//"key",
				"बाएं (m.)",//"left",
				"पत्र (m.)",//"letter",

				"पुस्तकालय (m.)",//"library",
				"साहित्य (m.)",//"literature",
				"पत्रिका (f.)",//"magazine",
				"प्रमुख विषय (m.)",//"major",
				"पुरुष (m.)",//"man",

				"गणित (m.)",//"mathematics",
				"सोमवार (m.)",//"Monday",
				"बंदर (m.)",//"monkey",
				"चांद (m.)",//"moon",
				"सुबह (f.)",//"morning",

				"माँ (f.)",//"mother",
				"पर्वत (m.)",//"mountain",
				"मुंह (m.)",//"mouth",
				"सिनेमा घर (m.)",//"movie theater",
				////"在附近",//"near",

				"समाचार-पत्र (m.)",//"newspaper",
				////"隔壁",//"next door",
				"नौ (m.)",//"nine",
				"दोपहर (f.)",//"noon",
				"उत्तर (m.)",//"north",
				"नाक (m.)",//"nose",

				"स्मरण पुस्तक (f.)",//"notebook",
				"बड़ा भाई (m.)",//"older brother",
				"बड़ी बहन (f.)",//"older sister",
				"एक (m.)",//"one",

				"संतरा (m.)",//"orange",
				"पार्क (m.)",//"park",
				"मोटर-स्टैंड (m.)",//"parking lot",
				"तुलिका (f.)",//"pencil",
				"फोटोग्राफ (f.)",//"photograph",

				"डाक घर (m.)",//"post office",
				"सुंदर",//"pretty",
				"प्रश्न (m.)",//"question",
				"खरगोश (m.)",//"rabbit",
				"रेडियो (m.)",//"radio",

				"बारिश (f.)",//"rain",
				"लाल",//"red",
				"फ्रिज (m.)",//"refrigerator",
				"भोजनालय (m.)",//"restaurant",
				"चावल (m.)",//"rice",

				"दाहिना (m.)",//"right",
				"नदी (f.)",//"river",
				"शनिवार (m.)",//"Saturday",
				"विद्यालय (m.)",//"school",
				"समुद्र (m.)",//"sea",
				"सात (m.)",//"seven",

				"जूते (m.plural)",//"shoes",
				////"旁边",//"side",
				"छह (m.)",//"six",
				"हिमपात (m.)",//"snow",
				"समाज-शास्र (m.)",//"sociology",
				"मिट्टी (f.)",//"soil",

				"दक्षिण (f.)",//"south",
				"चम्मच (m.)",//"spoon",
				"डाक-टिकट (m.)",//"stamp",
				"स्ट्रॉबेरी (f.)",//"strawberry",
				"छात्र (m.)",//"student",

				"भूमिगत मार्ग (m.)",//"subway",
				"सुर्य (m.)",//"sun",
				"रविवार (m.)",//"Sunday",
				"चाय (f.)",//"tea",
				"अध्यापक (m.)",//"teacher",
				"दूरभाष (m.)",//"telephone",

				"दस (m.)",//"ten",
				"हज़ार (m.)",//"thousand",
				"तीन (m.)",//"three",

				////" ",//"today",
				"बृहस्पतिवार (m.)",//"Thursday",
				"खरीदना",//"to buy",
				"आना",//"to come",
				"पीना",//"to drink",

				"खाना",//"to eat",
				"जाना",//"to go",
				"देखना",//"to look",
				////"明天",//"tomorrow",

				"पढ़ना",//"to read",
				"बेचना",//"to sell",
				"गाना",//"to sing",
				"पढ़ना",//"to study",
				"सोना",//"to sleep",
				"तैरना",//"to swim",

				"लिखना",//"to write",
				"रेलगाड़ी (f.)",//"train",
				"रेलवे स्टेशन (m.)",//"train station",
				"पेड़ (m.)",//"tree",
				"मंगलवार (m.)",//"Tuesday",

				"दूरदर्शन (m.)",//"TV",
				"दो (m.)",//"two",
				"छतरी (f.)",//"umbrella",
				////"上",//"up",
				"बटुआ (m.)",//"wallet",
				"पानी (m.)",//"water",

				"बुद्धवार (m.)",//"Wednesday",
				"सप्ताहांत (m.)",//"weekend",
				"पश्चिम (m.)",//"west",
				"सफेद",//"white",
				"वायु (m.)",//"wind",
				"खिड़की (f.)",//"window",

				"स्त्री (f.)",//"woman",
				////"昨天",//"yesterday",
				"छोटा भाई (m.)",//"younger brother",

				"छोटी बहन (f.)",//"younger sister",
				"शून्य (m.)",//"zero",
				"चिड़ियाघर (m.)",//"zoo",
				"पर्सो (m.)",//"the day after tomorrow"
				];

var ex1 = [
				"मैं एक हवाई जहाज़ में बैठकर फ्लोरिडा गया |",//"airplane",
				"सेब और केले",//"apple",
				"यह एक बड़ा थैला है, है कि नही ?",//"bag",
				"मैं प्रतिदिन केले ख़ाता हूँ |",//"banana",
				"कल में बॅंक गयी थी |",//"bank",

				"क्या आप बिस्तर में सोते हैं?",//"bed",
				////"有一个球在箱子后面。",//"behind",
				////"它就在你下面。",//"below",
				////"它在银行和书店中间。",//"between",
				"यह एक अच्छी बाइसिकल है |",//"bicycle",

				"जीवविज्ञान बड़ा रोचक है |",//"biology",
				"एक काला पक्षी |",//"black",
				"नीला आकाश",//"blue",
				"यह किताब मेरी है।",//"book",
				"वहाँ पुस्ताक तख्ता पर सौ किताबें हैं।",//"bookshelf",

				"रोटी और कॉफी",//"bread",
				"मैं विश्‍वविद्यालय जाने के लिए बस लेता हूँ |",//"bus",
				"यह एक अच्छा कैमरा है, है कि नही ?",//"camera",
				"मैं गाड़ी से विश्‍वविद्यालय जाता हूँ |",//"car",
				"मुझे गाजर से घृणा है |",//"carrot",
				"बिल्लियाँ प्यारी होती हैं |",//"cat",

				"मुझे एक नया मोबाइल फ़ोन चाहिए |",//"cell phone",
				"कृपया करके उस कुर्सी पर बैठ जाइए |",//"chair",
				"एक सस्ता थैला",//"cheap",
				"मेरे बड़े भाई का प्रमुख विषय रसायन शास्त्र है।",//"chemistry",

				////"我用筷子吃饭。",//"chopsticks",
				"आज मेरी तीन कक्षाएँ हैं |",//"class",
				"क्या वह घड़ी परिशुद्ध है ?",//"clock",
				////"我买了些衣服。",//"clothes",

				"मैं कंप्यूटर विज्ञान लूँगा |",//"computer science",
				"वह एक बड़ी गाय है |",//"cow",
				"एक प्यारा कुत्ता",//"cute",
				"क्या हम बिसातखाने चलें ?",//"department store",

				"कमरे में एक डेस्क है।",//"desk",
				"आप अपने शब्दकोश का उपयोग कर सकते हैं।",//"dictionary",
				"एक कठिन परीक्षा",//"difficult",
				"कुत्ते बहुत खेलते हैं |",//"dog",
				"मैं छात्रावास में रहती हूँ |",//"dormitory",

				"डेस्क का दराज",//"drawer",
				"मेरे कान पीड़ा में हैं |",//"ear",
				"वहां रेलवे स्टेशन के पूर्वी किनारे पर एक किताबों की दुकान है।",//"east",
				"एक सरल परीक्षा |",//"easy",
				"अर्थशास्त्र बड़ा रोचक है |",//"economics",
				"मेरी कक्षा मैं आठ बच्चे हैं |",//"eight",

				"क्या आप मुझे अपना रबड़ उधार दे सकते हैं ?",//"eraser",
				"मैं कल शाम को एक चलचित्र देखूँगी |",//"evening",
				"कल मेरी गणित की परीक्षा है |",//"exam",
				"एक महंगा थैला",//"expensive",
				"योको के नेत्र सुन्दर हैं |",//"eye",
				"मेरे पिता और टॉम के पिता",//"father",

				"एक जंगल में आग लग गई थी।",//"fire",
				"हम पाँच के समूह मैं गाना गा रहे थे |",//"five",
				"फूल खिल रहे हैं।",//"flower",
				"मेरे पैर पीड़ा में है |",//"foot",
				"मुझे चार चॉक्लेट चाहियें |",//"four",
				"मेरी शुक्रवार को कोई कक्षा नही होती |",//"Friday",

				"मैंने अपने दोस्त के साथ चहलकदमी की |",//"friend",
				"वहाँ डिब्बे के सामने एक गेंद है।",//"front",
				"मैं हरी मिर्च नहीं खाती |",//"green pepper",
				"क्या तुमने अपने हाथ धोये?",//"hand",
				"यह एक प्यारी टोपी है |",//"hat",

				"कृपया घर पर आराम करें।",//"home",
				"मुझे बहुत सारा गृहकार्य है।",//"homework",
				"मैं घोड़े की सवारी करती हूँ |",//"horse",
				"मैं अस्पताल जाऊँगा |",//"hospital",
				"सब कुछ एक सौ रुपये है।",//"hundred",

				////"有一个球在箱子里面。",//"inside",
				"कृपया करके चौराहे पर रुक जाएँ |",//"intersection",
				"यह मेरे घर की चाबी है।",//"key",
				"वहाँ पर बाएँ मोड़ लें |",//"left",
				"मैं अपनी दादी को एक पत्र लिखूँगी |",//"letter",

				"मैं पुस्तकालय में पढ़ता हूँ |",//"library",
				"मुझे साहित्य बहुत पसंद है |",//"literature",
				"मैं पत्रिकाएं नहीं पढ़ता |",//"magazine",
				"आपका प्रमुख विषय क्या है ?",//"major",
				"एक पुरुष और एक स्त्री",//"man",

				"गणित थोड़ा कठिन है।",//"mathematics",
				"मेरी सोमवार को एक परीक्षा है |",//"Monday",
				"बंदर बहुत चालाक होते हैं।",//"monkey",
				"आज चाँद बहुत सुंदर लग रहा है।",//"moon",
				"मैं सुबह नहाता हूँ |",//"morning",

				"मेरी माँ और टॉम की माँ",//"mother",
				"जापान में बहुत सारे पर्वत हैं |",//"mountain",
				"कृपया अपना मुंह खोलें |",//"mouth",
				"मैने सिनेमा घर में एक चलचित्र देखा |",//"movie theater",
				////"在我家附近有一家书店。",//"near",

				"में प्रतिदिन एक समाचार-पत्र पढ़ती हूँ |",//"newspaper",
				////"就在我家隔壁。",//"next door",
				"ये नौ छात्र हैं |",//"nine",
				"आप दोपहर को खाना कहाँ खाते हैं ?",//"noon",
				"विश्‍वविद्यालय की उत्तरी दिशा में एक रेलवे स्टेशन है |",//"north",
				"मेरे बड़े भाई के पास एक बड़ी नाक है |",//"nose",

				"मैंने पाँच स्मरण पुस्तकें खरीदी |",//"notebook",
				"मेरा बड़ा भाई और टॉम का बड़ा भाई।",//"older brother",
				"मेरी बड़ी बहन और टॉम की बड़ी बहन",//"older sister",
				"वह कक्षा में नंबर एक है |",//"one",

				"संतरे और कीवी",//"orange",
				"मैं पार्क में एक घंटे के लिए चली |",//"park",
				"मोटर-स्टैंड कहाँ है ?",//"parking lot",
				"मैंने यह एक तुलिका से लिखा था |",//"pencil",
				"मैंने अपने माता पिता की एक फोटोग्राफ ली |",//"photograph",

				"मैंने डाकघर से डाक टिकट खरीदे |",//"post office",
				"सुन्दर फूल",//"pretty",
				"क्या आप एक प्रश्न पूछना चाहते हैं?",//"question",
				"खरगोश प्यारे होते हैं |",//"rabbit",
				"मैं कभी कभी रेडियो सुनता हूँ |",//"radio",

				"जून के महीने में बहुधा बारिश होती है |",//"rain",
				"एक लाल स्वेटर",//"red",
				"मैंने एक बड़ा फ्रिज खरीदा |",//"refrigerator",
				"मैंने आज भोजनालय से खाना मँगाया |",//"restaurant",
				"मैं चावल खाता हूँ |",//"rice",

				"कृपा करके वहाँ से दाहिनी ओर मुड़ जाइए |",//"right",
				"मैं नदी पर मछली पकड़ने जाता हूँ |",//"river",
				"मैं शनिवार को काम नही करता |",//"Saturday",
				"मैं विद्यालय जाता हूँ |",//"school",
				"मैं समुद्र में तैरता हूँ |",//"sea",
				"यह सात कुत्ते हैं |",//"seven",

				"यह जूते मुझे बड़े होते हैं |",//"shoes",
				////"有一个球在箱子旁边",//"side",
				"मेरी छोटी बहिन छ: साल की है |",//"six",
				"कल हिमपात होगा |",//"snow",
				"समाज-शस्त्र बड़ा ही रोचक है |",//"sociology",
				"हमें मिट्टी और पानी चाहिए |",//"soil",

				"रेलवे स्टेशन के दक्षिण अंत में एक विश्‍वविद्यालय है |",//"south",
				"क्या आप चम्मच से खाने वाले हैं ?",//"spoon",
				"मैनें बीस डाक टिकटें खरीदीं |",//"stamp",
				"मुझे स्ट्रॉबेरी बहुत पसंद है |",//"strawberry",
				"वह एक गणित का छात्र है |",//"student",

				"मैं बहुधा भूमिगत मार्ग का लाभ उठाती हूँ |",//"subway",
				"सूर्य प्रतिदिन उगता है |",//"sun",
				"मैं रविवार को घर पर आराम करता हूँ |",//"Sunday",
				"क्या आप एक कप चाय पीना चाहेंगे ?",//"tea",
				"मेरे अध्यापक कृपालु हैं |",//"teacher",
				"मैं दूरभाष का प्रयोग नहीं करता |",//"telephone",

				"वहाँ दस गाड़ियाँ हैं |",//"ten",
				"यह किताब एक हज़ार रुपये की थी |",//"thousand",
				"वह तीसरी कक्षा में है |",//"three",

				////"我们今天干什么？",//"today",
				"मैं बृहस्पतिवार को व्यस्त हूँ |",//"Thursday",
				"मैंने एक सेब खरीदा |",//"to buy",
				"कोई आया था |",//"to come",
				"मैं सुबह दूध पीती हूँ |",//"to drink",

				"मैं दोपहर को सैंडविच खाती हूँ |",//"to eat",
				"रेखा कक्षा गयी थी |",//"to go",
				"कृपया इसे ध्यान से देखिए |",//"to look",
				////"我明天得去工作。",//"tomorrow",

				"मुझे किताबें पढ़ना पसंद है |",//"to read",
				"मैंने एक सेब बेचा |",//"to sell",
				"चलो सब मिलकर एक गाना गातें हैं |",//"to sing",
				"मैं गणित पढ़ता हूँ |",//"to study",
				"मैं कल जल्दी सोने चली गयी थी |",//"to sleep",
				"मुझे तैरना पसंद है |",//"to swim",

				"मैं बहुधा पत्र लिखती हूँ |",//"to write",
				"चलो वहाँ रेलगाड़ी में चलते हैं |",//"train",
				"चलो रलवे स्टेशन पर मिलते हैं |",//"train station",
				"वहाँ एक चेरी का पेड़ है |",//"tree",
				"क्या आपके पास मंगलवार को कोई खाली समय है ?",//"Tuesday",

				"क्या आप दूरदर्शन देखते हैं ?",//"TV",
				"मैंने दो स्मरण पुस्तकें खरीदीं |",//"two",
				"मैं एक छतरी ले आऊँगी |",//"umbrella",
				////"请向上看。",//"up",
				"मेरा बटुआ गुम हो गया |",//"wallet",
				"हमें पानी की कमी है |",//"water",

				"मेरा बुद्धवार को एक साक्षात्कार है |",//"Wednesday",
				"आप सप्ताहांत में क्या करते हैं ?",//"weekend",
				"स्पेन फ्रांस के पश्चिम में स्थित है।",//"west",
				"एक सफेद गाड़ी",//"white",
				"आज हवा बहुत ज़ोरदार चल रही है |",//"wind",
				"चलो खिड़की खोलते हैं |",//"window",

				"एक स्त्री और एक पुरुष",//"woman",
				////"你昨天干什么了？",//"yesterday",
				"मेरा छोटा भाई एक उच्च विद्यालय का छात्र है |",//"younger brother",

				"मेरी छोटी बहिन पियानो बजाती है |",//"younger sister",
				"मुझे मेरी परीक्षा पर शून्या मिला |",//"zero",
				"हम चिड़ियाघर क्यों नहीं चलते ?",//"zoo",
				"मैं परसों छुट्टी लूँगा |",//	"the day after tomorrow"
				];

	 ///~
	var tempVar = wordList.indexOf("yesterday");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("yesterday");
	time.splice(tempVar,1);

///~
	tempVar = wordList.indexOf("behind");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("behind");
	relativeLocations.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("between");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("between");
	relativeLocations.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("below");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("below");
	relativeLocations.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("chopsticks");
	wordList.splice(tempVar,1);
	tempVar = things.indexOf("chopsticks");
	things.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("clothes");
	wordList.splice(tempVar,1);
	tempVar = things.indexOf("clothes");
	things.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("side");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("side");
	relativeLocations.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("inside");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("inside");
	relativeLocations.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("today");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("today");
	time.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("near");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("near");
	relativeLocations.splice(tempVar,1);

///~
	tempVar = wordList.indexOf("next door");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("next door");
	relativeLocations.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("tomorrow");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("tomorrow");
	time.splice(tempVar,1);
///~
	tempVar = wordList.indexOf("up");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("up");
	relativeLocations.splice(tempVar,1);