var nativeWords = [
				"самолет",//"airplane",
				"яблоко",//"apple",
				"сумка", //"bag",
				"банан",//"banana",
				"банк", //"bank",
				"кровать",//"bed",
				////"在后面",//"behind",
				////"在下面",//"below",
				////"在中间",//"between",
				"велосипед",//"bicycle",

				"биология",//"biology",
				"черный/черная/черное",//"black",
				"синий/синяя/синее; голубой/голубая/голубое",//"blue",
				"книга",//"book",
				"книжная полка",//"bookshelf",

				"хлеб",//"bread",
				"автобус",//"bus",
				"камера",//"camera",
				"машина",//"car",
				"морковь",//"carrot",
				"кот/кошка",//"cat",

				"сотовый телефон",//"cell phone",
				"стул",//"chair",
				"дешёвый/дешёвая/дешёвое",//"cheap",
				"химия",//"chemistry",

				////"筷子",//"chopsticks",
				"занятие/урок/класс",//class",
				"часы",//"clock",
				////"衣服",//"clothes",

				"информатика",//"computer science",
				"корова",//"cow",
				"милый/милая/милое",//"cute",
				"универмаг (универсальный магазин)",//"department store",

				"стол",//"desk",
				"словарь",//"dictionary",
				"сложный/сложная/сложное",//"difficult",
				"собака",//"dog",
				"общежитие",//"dormitory",

				"ящик",//"drawer",
				"ухо",//"ear",
				"восток",//"east",
				"легкий/легкая/легкое; простой/простая/простое",//"easy",
				"экономика",//"economics",
				"восемь",//"eight",

				"стирательная резинка; ластик",//"eraser",
				"вечер",//"evening",
				"экзамен",//"exam",
				"дорогой/дорогая/дорогое",//"expensive",
				"глаз",//"eye",
				"отец",//"father",

				"огонь, пламя",//"fire",
				"пять",//"five",
				"цветок",//"flower",
				"нога",//"foot",
				"четыре",//"four",
				"пятница",//"Friday",

				"друг (m.); подруга (f.)",//"friend",
				////"在前面",//"front",
				"болгарский перец",//"green pepper",
				"рука",//"hand",
				"шляпа",//"hat",

				"дом",//"home",
				"домашнее задание",//"homework",
				"лошадь",//"horse",
				"больница",//"hospital",
				"сто",//"hundred",

				///"在里面",//"inside",
				"перекресток",//"intersection",
				"ключ",//"key",
				///"左",//"left",
				"письмо",//"letter",

				"библиотека",//"library",
				"литература",//"literature",
				"журнал",//"magazine",
				"специализация",//"major",
				"мужчина",//"man",

				"математика",//"mathematics",
				"понедельник",//"Monday",
				"обезьяна",//"monkey",
				"луна",//"moon",
				"утро",//"morning",

				"мать, мама",//"mother",
				"гора",//"mountain",
				"рот",//"mouth",
				"кинотеатр",//"movie theater",
				///"在附近",//"near",

				"газета, пресса",//"newspaper",
				///"隔壁",//"next door",
				"девять",//"nine",
				"полдень",//"noon",
				"север",//"north",
				"нос",//"nose",

				"блокнот",//"notebook",
				"старший брат",//"older brother",
				"старшая сестра",//"older sister",
				"один; первый/первая/первое",//"one",

				"апельсин",//"orange",
				"парк",//"park",
				"парковка",//"parking lot",
				"карандаш",//"pencil",
				"фотография",//"photograph",

				"почта, почтовое отделение",//"post office",
				"красивый/красивая/красивое; милый/милая/милое",//"pretty",
				"вопрос",//"question",
				"кролик",//"rabbit",
				"радио",//"radio",

				"дождь",//"rain",
				"красный/красная/красное",//"red",
				"холодильник",//"refrigerator",
				"ресторан",//"restaurant",
				"рис",//"rice",

				"справа, направо",//"right",
				"река",//"river",
				"суббота",//"Saturday",
				"школа",//"school",
				"море",//"sea",
				"семь",//"seven",

				"обувь",//"shoes",
				"сторона",//"side",
				"шесть",//"six",
				"снег",//"snow",
				"социология",//"sociology",
				"почва",//"soil",

				"юг",//"south",
				"ложка",//"spoon",
				"почтовая марка",//"stamp",
				"клубника; земляника",//"strawberry",
				"студент",//"student",

				"метро",//"subway",
				"солнце",//"sun",
				"воскресенье",//"Sunday",
				"(черный) чай",//"tea",
				"учитель",//"teacher",
				"телефон",//"telephone",

				"десять",//"ten",
				"тысяча",//"thousand",
				"три",//"three",

				///"今天",//"today",
				"четверг",//"Thursday",
				"покупать",//"to buy",
				"приходить",//"to come",
				"пить",//"to drink",

				"есть",//"to eat",
				"идти, ехать",//"to go",
				"смотреть, взглянуть",//"to look",
				///"明天",//"tomorrow",

				"читать",//"to read",
				"продавать",//"to sell",
				"петь",//"to sing",
				"учиться, изучать",//"to study",
				"спать",//"to sleep",
				"плавать",//"to swim",

				"писать",//"to write",
				"поезд",//"train",
				"железнодорожная станция",//"train station",
				"дерево",//"tree",
				"вторник",//"Tuesday",

				"телевизор",//"TV",
				"два",//"two",
				"зонт",//"umbrella",
				///"上",//"up",
				"кошелек",//"wallet",
				"вода",//"water",

				"среда",//"Wednesday",
				"выходной",//"weekend",
				"запад",//"west",
				"белый/белая/белое",//"white",
				"ветер",//"wind",
				"окно",//"window",

				"женщина",//"woman",
				///"昨天",//"yesterday",
				"младший брат",//"younger brother",

				"младшая сестра",//"younger sister",
				"ноль",//"zero",
				"зоопарк",//"zoo",
				"послезавтра",//"the day after tomorrow"
				];

var ex1 = [
				"Я летел на самолете во Флориду.",//"airplane",
				"яблоки и бананы",//"apple",
				"Это большая сумка, не так ли?",//"bag",
				"Я ем бананы каждый день.",//"banana",
				"Я ходил в банк вчера.",//"bank",

				"Ты спишь в кровати?",//"bed",
				////"有一个球在箱子后面。",//"behind",
				////"它就在你下面。",//"below",
				////"它在银行和书店中间。",//"between",
				"Я катаюсь на велосипеде.",//"bicycle",

				"Биология интересная/интересна.",//"biology",
				"черная птица",//"black",
				"синее/голубое небо",//"blue",
				"Эта книга моя.",//"book",
				"На книжной полке 100 книг.",//"bookshelf",

				"хлеб и кофе",//"bread",
				"Я езжу на автобусе до университета.",//"bus",
				"Это хорошая/отличная камера, не так ли?",//"camera",
				"Я езжу до университета на машине.",//"car",
				"Я ненавижу морковь.",//"carrot",
				"Кошки милые",//"cat",

				"Я хочу новый сотовый телефон.",//"cell phone",
				"Пожалуйста, сядь на тот стул.",//"chair",
				"дешевая сумка",//"cheap",
				"Специализация моего старшего брата - химия. ",//"chemistry",

				////"我用筷子吃饭。",//"chopsticks",
				"У меня три класса сегодня.",//"class",
				"Те часы точные?",//"clock",
				////"我买了些衣服。",//"clothes",

				"Я буду изучать информатику.",//"computer science",
				"Та корова большая.",//"cow",
				"милая собака",//"cute",
				"Давай пойдем в универмаг?",//"department store",

				"В комнате есть письменный стол.",//"desk",
				"Ты можешь использовать свой словарь.",//"dictionary",
				"сложный экзамен",//"difficult",
				"Собаки много играют.",//"dog",
				"Я живу в общежитии.",//"dormitory",

				"ящик стола",//"drawer",
				"Мои уши болят.",//"ear",
				"Книжный магазин находится восточнее (на востоке от) железнодорожной станции.",//"east",
				"легкий/простой экзамен",//"easy",
				"Экономика интересная/интересна ",//"economics",
				"Я полечу на Гаваи через восемь дней.",//"eight",

				"Можешь мне одолжить свою стирательную резинку/свой ластик?",//"eraser",
				"Я буду смотреть кино завтра вечером.",//"evening",
				"Я сдавал экзамен по математике.",//"exam",
				"дорогая сумка",//"expensive",
				"У Сары красивые глаза.",//"eye",
				"мой отец и отец Тома",//"father",

				"пламя свечи",//"fire",
				"Мы пели в группе из пяти человек.",//"five",
				"Цветы распускаются/цветут.",//"flower",
				"Мои ноги болят.",//"foot",
				"Здесь четыре ручки.",//"four",
				"У меня нет занятий в пятницу.",//"Friday",

				"Я прогулялся со своим другом/подругой.",//"friend",
				////"有一个球在箱子前面。",//"front",
				"Я не ем болгарский перец слишком много.",//"green pepper",
				"Ты вымыл свои руки?",//"hand",
				"Это милая шляпа!",//"hat",

				"Пожалуйста, отдохни дома.",//"home",
				"У меня много домашних заданий.",//"homework",
				"Я езжу на лошади.",//"horse",
				"Я пойду в больницу.",//"hospital",
				"Все по 100 евро.",//"hundred",

				////"有一个球在箱子里面。",//"inside",
				"Пожалуйста, остановись у перекрестка.",//"intersection",
				"Это ключ от моего дома.",//"key",
				////"请在那里左转。",//"left",
				"Я напишу письмо своей бабушке.",//"letter",

				"Я учусь в библиотеке.",//"library",
				"Я очень сильно люблю литературу.",//"literature",
				"Я не читаю журналы очень часто.",//"magazine",
				"Какая у тебя специализация?",//"major",
				"мужчина и женщина",//"man",

				"Математика немного (слегка) сложная/сложна  .",//"mathematics",
				"У меня экзамен в понедельник.",//"Monday",
				"Обезьяны умные/умны  .",//"monkey",
				"Луна прекрасна, не так ли?",//"moon",
				"Я принимаю душ утром.",//"morning",

				"моя мать/мама и мать/мама Тома",//"mother",
				"В Японии много гор.",//"mountain",
				"Открой свой рот, пожалуйста.",//"mouth",
				"Я смотрел кино в кинотеатре.",//"movie theater",
				////"在我家附近有一家书店。",//"near",

				"Я читаю газету/прессу каждый день.",//"newspaper",
				////"就在我家隔壁。",//"next door",
				"Здесь девять студентов.",//"nine",
				"Где ты ешь в полдень?",//"noon",
				"Железнодорожная остановка севернее университета/ на севере от университета.",//"north",
				"У моего старшего брата большой нос.",//"nose",

				"Я купил пять блокнотов.",//"notebook",
				"мой старший брат и старший брат Тома",//"older brother",
				"моя старшая сестра и старшая сестра Тома",//"older sister",
				"Он первый в своем классе.",//"one",

				"апельсины и киви",//"orange",
				"Я гулял час в парке.",//"park",
				"Где парковка?",//"parking lot",
				"Я написал это карандашом.",//"pencil",
				"Я сделал фотографии своих мамы и папы (матери и отца).",//"photograph",

				"Я купил марки на почте.",//"post office",
				"красивые/милые цветы",//"pretty",
				"Нет ли у тебя вопроса?",//"question",
				"Кролики милые.",//"rabbit",
				"Я иногда слушаю радио.",//"radio",

				"В июне часто идет дождь.",//"rain",
				"красный свитер",//"red",
				"Я купил большой холодильник.",//"refrigerator",
				"Я не хожу в ресторан очень часто.",//"restaurant",
				"Я ем рис.",//"rice",

				"Пожалуйста, поверни здесь направо.",//"right",
				"Я иду на реку на рыбалку.",//"river",
				"Я не работаю по субботам.",//"Saturday",
				"Я хожу в школу.",//"school",
				"Я плаваю в море.",//"sea",
				"Здесь семь собак.",//"seven",

				"Я купил обувь в магазине.",//"shoes",
				"Мяч в стороне от коробки.",//"side",
				"Моей младшей сестре шесть лет.",//"six",
				"Завтра будет снег.",//"snow",
				"Социология интересная/интересна  .",//"sociology",
				"Нам нужна почва и вода.",//"soil",

				"Юниверситет южнее (с юга от) железнодорожной станции.",//"south",
				"Ты собираешься есть ложкой?",//"spoon",
				"Я купил 20 почтовых марок.",//"stamp",
				"Я очень люблю клубнику/землянику.",//"strawberry",
				"Я студент.",//"student",

				"Я часто езжу на метро.",//"subway",
				"Солнце встает каждый день.",//"sun",
				"Я отдыхаю дома по воскресеньям.",//"Sunday",
				"Ты бы хотел чашку чая?",//"tea",
				"Мой учитель добрый.",//"teacher",
				"Я не испоьльзую теефон/Я не пользуюсь телефоном.",//"telephone",

				"Здесь десять машин.",//"ten",
				"Эта книга стоила 1,000 евро!",//"thousand",
				"Она уже в третьем классе.",//"three",

				////"我们今天干什么？",//"today",
				"Я занят в четверг.",//"Thursday",
				"Я купил яблоко.",//"to buy",
				"Кто-то пришел.",//"to come",
				"Я пью молоко утром.",//"to drink",

				"Я ем сэндвич днем.",//"to eat",
				"Она пошла в класс.",//"to go",
				"Пожалуйста, посмотри/ взгляни на это внимательно.",//"to look",
				////"我明天得去工作。",//"tomorrow",

				"Мне нравится читать книги.",//"to read",
				"Я продал яблоко.",//"to sell",
				"Давай споем/петь песню.",//"to sing",
				"Я изучаю математику.",//"to study",
				"Я лег спать рано прошлой ночью.",//"to sleep",
				"Я люблю плавать.",//"to swim",

				"Я часто пишу письмо.",//"to write",
				"Давай поедем туда на поезде.",//"train",
				"Давай встретимся на железнодорожной станции.",//"train station",
				"Это вишневое дерево.",//"tree",
				"Ты свободен во вторник?",//"Tuesday",

				"Ты смотришь телевизор?",//"TV",
				"Я купил два блокнота.",//"two",
				"Я принесу зонт.",//"umbrella",
				////"请向上看。",//"up",
				"Я потерял свой кошелек.",//"wallet",
				"У нас мало воды.",//"water",

				"У меня интервью в среду.",//"Wednesday",
				"Что ты делаешь на выходных?",//"weekend",
				"Испания расположена западнее (на западе от) Франции.",//"west",
				"белая машина",//"white",
				"Сегодня ветрено.",//"wind",
				"Давай откроем окно.",//"window",

				"женщина и мужчина",//"woman",
				////"你昨天干什么了？",//"yesterday",
				"Мой младший брат - ученик средней школы.",//"younger brother",

				"Моя младшая сестра играет на пианино.",//"younger sister",
				"Я получил ноль за свой тест.",//"zero",
				"Почему бы нам не пойти в зоопарк?",//"zoo",
				"Я возьму выходной послезавтра.",//	"the day after tomorrow"
				];


 ///
	var tempVar = wordList.indexOf("yesterday");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("yesterday");
	time.splice(tempVar,1);

///
	tempVar = wordList.indexOf("behind");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("behind");
	relativeLocations.splice(tempVar,1);
///
	tempVar = wordList.indexOf("between");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("between");
	relativeLocations.splice(tempVar,1);
///
	tempVar = wordList.indexOf("below");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("below");
	relativeLocations.splice(tempVar,1);
///
	tempVar = wordList.indexOf("chopsticks");
	wordList.splice(tempVar,1);
	tempVar = things.indexOf("chopsticks");
	things.splice(tempVar,1);
///
	tempVar = wordList.indexOf("clothes");
	wordList.splice(tempVar,1);
	tempVar = things.indexOf("clothes");
	things.splice(tempVar,1);
///
	tempVar = wordList.indexOf("front");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("front");
	relativeLocations.splice(tempVar,1);
///
	tempVar = wordList.indexOf("inside");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("inside");
	relativeLocations.splice(tempVar,1);

///
	tempVar = wordList.indexOf("left");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("left");
	relativeLocations.splice(tempVar,1);
///
	tempVar = wordList.indexOf("today");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("today");
	time.splice(tempVar,1);
///
	tempVar = wordList.indexOf("near");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("near");
	relativeLocations.splice(tempVar,1);

///
	tempVar = wordList.indexOf("next door");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("next door");
	relativeLocations.splice(tempVar,1);
///
	tempVar = wordList.indexOf("tomorrow");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("tomorrow");
	time.splice(tempVar,1);
///
	tempVar = wordList.indexOf("up");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("up");
	relativeLocations.splice(tempVar,1);