var nativeWords = [
				"das Flugzeug, die Flugzeuge",//"airplane",
				"der Apfel/ die Äpfel",//"apple",
				"die Tasche/ -en", //"bag",
				"die Banane/ -en",//"banana",
				"die Bank/-en", //"bank",
				"das Bett",//"bed",
				//"在后面",//"behind",
				//"在下面",//"below",
				//"在中间",//"between",
				"das Fahrrad/ die Fahrräder",//"bicycle",

				"Biologie",//"biology",
				"schwarz",//"black",
				"blau",//"blue",
				"das Buch/ die Bücher",//"book",
				"das Bücherregal/ die Bücherregale",//"bookshelf",

				"das Brot/ die Brote",//"bread",
				"der Bus/ die Busse",//"bus",
				"die Kamera",//"camera",
				"das Auto/ die Autos",//"car",
				"die Karotten",//"carrot",
				"die Katze/ -en",//"cat",

				"das Handy/ die Handys",//"cell phone",
				"der Stuhl/ die Stühle",//"chair",
				"billig",//"cheap",
				"Chemie",//"chemistry",

				//"筷子",//"chopsticks",
				"die Klasse/ -en",//class",
				"die Uhr/ -en",//"clock",
				//"衣服",//"clothes",

				"die Computerwissenschaft/ -en",//"computer science",
				"die Kuh/ die Kühe",//"cow",
				"süß",//"cute",
				"das Kaufhaus/ die Kaufhäuser",//"department store",

				"der Schreibtisch/ die Schreibtische",//"desk",
				"der Duden/ die Duden",//"dictionary",
				"schwierig",//"difficult",
				"der Hund/die Hündin/ die Hunde",//"dog",
				"das Studentenwohnheim/ -e",//"dormitory",

				"die Schublade/ -en",//"drawer",
				"das Ohr/ -en",//"ear",
				"der Osten",//"east",
				"einfach",//"easy",
				"Wirtschaftswissenschaft",//"economics",
				"acht",//"eight",

				"der Radiergummi/ die Radiergummis",//"eraser",
				"der Abend/ -e",//"evening",
				"die Prüfung/ Prüfungen",//"exam",
				"teuer",//"expensive",
				"das Auge/ die Augen",//"eye",
				"der Vater/ die Väter",//"father",

				"das Feuer",//"fire",
				"fünf",//"five",
				"die Blume/-en",//"flower",
				"der Fuß/ die Füße",//"foot",
				"vier",//"four",
				"Freitag",//"Friday",

				"der Freund/ die Freundin/ die Freunde",//"friend",
				//"在前面",//"front",
				"die grüne Paprika",//"green pepper",
				"dieHand/Hände",//"hand",
				"der Hut/ die Hüte",//"hat",

				"Zuhause",//"home",
				"die Hausaufgabe/-en",//"homework",
				"das Pferd/ die Pferde",//"horse",
				"das Krankenhaus/ die Krankenhäuser",//"hospital",
				"hundert",//"hundred",

				//"在里面",//"inside",
				"die Kreuzung/ -en",//"intersection",
				"der Schlüssel/ die Schlüssel",//"key",
				"links",//"left",
				"der Brief/ die Briefe",//"letter",

				"die Bücherei",//"library",
				"Literatur",//"literature",
				"das Magazin/ die Magazine",//"magazine",
				"das Hauptfach/die Hauptfächer",//"major",
				"der Mann/ die Männer",//"man",

				"Mathematik",//"mathematics",
				"Montag",//"Monday",
				"der Affe/ die Affen",//"monkey",
				"der Mond",//"moon",
				"morgens",//"morning",

				"die Mutter/die Mütter",//"mother",
				"der Berg/ die Berge",//"mountain",
				"der Mund",//"mouth",
				"das Kino/die Kinos",//"movie theater",
				//"在附近",//"near",

				"die Zeitung/ -en",//"newspaper",
				//"隔壁",//"next door",
				"neun",//"nine",
				"Mittag",//"noon",
				"der Norden",//"north",
				"die Nase/ -n",//"nose",

				"das Schreibheft/die Schreibhefte",//"notebook",
				"der älterer Bruder/ die älteren Brüder",//"older brother",
				"die ältere Schwester/ die älterenSchwestern",//"older sister",
				"eins",//"one",

				"die Orange/ -n",//"orange",
				"der Park/ die Parks",//"park",
				"der Parkplatz/ die Parkplätze",//"parking lot",
				"der Bleistift/ die Bleistifte",//"pencil",
				"das Foto/ die Fotos",//"photograph",

				"die Post",//"post office",
				"hübsch",//"pretty",
				"die Frage/-en",//"question",
				"der Hase/ die Hasen",//"rabbit",
				"das Radio/ die Radios",//"radio",

				"der Regen",//"rain",
				"rot",//"red",
				"der Kühlschrank/ die Kühlschränke",//"refrigerator",
				"das Restaurant/ die Restaurants",//"restaurant",
				"der Reis",//"rice",

				"rechts",//"right",
				"der Fluss/ dieFlüsse",//"river",
				"der Samstag/ -e",//"Saturday",
				"die Schule/-en",//"school",
				"das Meer/ die Meere",//"sea",
				"sieben",//"seven",

				"der Schuh /die Schuhe",//"shoes",
				"die Seite/ -n",//"side",
				"sechs",//"six",
				"der Schnee",//"snow",
				"Soziologie",//"sociology",
				"die Erde",//"soil",

				"der Süden",//"south",
				"der Löffel/ die Löffel",//"spoon",
				"die Briefmarke/-n",//"stamp",
				"die Erdbeere/ -en",//"strawberry",
				"der Schüler/ die Schülerin",//"student",

				"die U-Bahn/ -en",//"subway",
				"die Sonne/ -n",//"sun",
				"Sonntag",//"Sunday",
				"der (schwarze)Tee",//"tea",
				"der Lehrer / die Lehrerin/ die Lehrer",//"teacher",
				"das Telefon/ -e",//"telephone",

				"zehn",//"ten",
				"tausend",//"thousand",
				"drei",//"three",

				//"今天",//"today",
				"Donnerstag",//"Thursday",
				"kaufen",//"to buy",
				"kommen",//"to come",
				"trinken",//"to drink",

				"essen",//"to eat",
				"gehen",//"to go",
				"schauen",//"to look",
				//"明天",//"tomorrow",

				"lesen",//"to read",
				"verkaufen",//"to sell",
				"singen",//"to sing",
				"lernen",//"to study",
				"schlafen",//"to sleep",
				"schwimmen",//"to swim",

				"schreiben",//"to write",
				"der Zug/ die Züge",//"train",
				"der Bahnhof/ die Bahnhöfe",//"train station",
				"der Baum/ die Bäume",//"tree",
				"Dienstag",//"Tuesday",

				"der Fernseher/ die Fernseher",//"TV",
				"zwei",//"two",
				"der Regenschirm/ die Regenschirme",//"umbrella",
				//"上",//"up",
				"die Geldbörse/-en",//"wallet",
				"das Wasser",//"water",

				"der Mittwoch",//"Wednesday",
				"das Wochenende/ -n",//"weekend",
				"der Westen",//"west",
				"weiß",//"white",
				"der Wind",//"wind",
				"das Fenster/-",//"window",

				"die Frau",//"woman",
				//"昨天",//"yesterday",
				"der jüngerer Bruder/ die jüngererBrüder",//"younger brother",

				"die jüngere Schwester/ -en",//"younger sister",
				"null",//"zero",
				"der Zoo",//"zoo",
				"übermorgen",//"the day after tomorrow"
				];

var ex1 = [
				"Ich bin mit dem Flugzeug nach Florida geflogen.",//"airplane",
				"Äpfel und Bananen",//"apple",
				"Die Tasche ist groß, nicht wahr?",//"bag",
				"Jeden Tag esse ich Bananen.",//"banana",
				"Gestern ging ich zur Bank.",//"bank",

				"Hast du in einem Bett geschlafen?",//"bed",
				////"有一个球在箱子后面。",//"behind",
				////"它就在你下面。",//"below",
				////"它在银行和书店中间。",//"between",
				"Ich fahre Fahrrad.",//"bicycle",

				"Biologie ist sehr interessant.",//"biology",
				"Der schwarze Vogel.",//"black",
				"Der Himmel ist blau.",//"blue",
				"Das Buch gehört mir.",//"book",
				"Auf dem Bücherregal stehen über 100 Bücher.",//"bookshelf",

				"Das Brot und der Kaffee",//"bread",
				"Ich nehme den Bus zur Universität.",//"bus",
				"Die Kamera ist schön, nicht wahr?",//"camera",
				"Ich fahre mit dem Auto zur Universität.",//"car",
				"Ich hasse Karotten.",//"carrot",
				"Die Katzen sind süß.",//"cat",

				"Ich möchte ein neues Handy.",//"cell phone",
				"Bitte setzen sie sich auf den Stuhl.",//"chair",
				"Die Tasche ist billig.",//"cheap",
				"Mein großer Bruder studiert Chemie an seiner Universität.",//"chemistry",

				////"我用筷子吃饭。",//"chopsticks",
				"Ich habe drei Klassen heute.",//"class",
				"Stimmt die Uhr?",//"clock",
				////"我买了些衣服。",//"clothes",

				"Ich studiere Computerwissenschaft.",//"computer science",
				"Die Kuh ist groß.",//"cow",
				"Der Hund ist süß.",//"cute",
				"Lass uns ins Kaufhaus gehen.",//"department store",

				"Ich habe einen Schreibtisch in meinem Zimmer.",//"desk",
				"Du darfst deinen Duden benutzen.",//"dictionary",
				"Die Prüfung ist schwierig.",//"difficult",
				"Hunde spielen viel.",//"dog",
				"Ich wohne im Studentenwohnheim.",//"dormitory",

				"Die Schublade in einem Schreibtisch.",//"drawer",
				"Meine Ohren tun weh.",//"ear",
				"Die Universität liegt im Osten Deutschlands.",//"east",
				"Die Prüfung ist einfach.",//"easy",
				"Wirtschaftswissenschaft ist interessant.",//"economics",
				"Es ist acht Uhr.",//"eight",

				"Darf ich dein Radiergummi benutzen?",//"eraser",
				"Ich schaue morgen Abend einen Film.",//"evening",
				"Ich habe die Matheprüfung genommen.",//"exam",
				"Die Tasche ist teuer.",//"expensive",
				"Die Augen sind wunderschön.",//"eye",
				"Mein Vater und Toms Vater.",//"father",

				"Das Haus hat Feuer gefangen.",//"fire",
				"Wir haben in einer Gruppe mit fünf Leuten gesungen",//"five",
				"Die Blume blüht.",//"flower",
				"Mir tun die Füße weh.",//"foot",
				"Ich habe vier Kugelschreiber.",//"four",
				"Ich habe am Freitag keinen Unterricht.",//"Friday",

				"Ich ging mit einer Freundin spazieren.",//"friend",
				////"有一个球在箱子前面。",//"front",
				"Ich esse grüne Paprika gerne.",//"green pepper",
				"Hast du dir die Hände gewaschen?",//"hand",
				"Der Hut ist süß.",//"hat",

				"Ich wohne Zuhause.",//"home",
				"Ich habe viel Hausaufgaben.",//"homework",
				"Ich ritt auf dem Pferd.",//"horse",
				"Ich gehe ins Krankenhaus.",//"hospital",
				"Alles ist einhundert Euro.",//"hundred",

				////"有一个球在箱子里面。",//"inside",
				"Bitte halten Sie an der Kreuzung.",//"intersection",
				"Hier ist der Schlüssel zu meinem Haus",//"key",
				"Bitte biegen Sie links ab.",//"left",
				"Ich werde meiner Oma einen Brief schreiben.",//"letter",

				"Ich lerne in der Bücherei.",//"library",
				"Ich mag Literatur sehr.",//"literature",
				"Nicht oft lese ich Magazine.",//"magazine",
				"Was ist dein Hauptfach?",//"major",
				"Ein Mann und eine Frau",//"man",

				"Mathematik ist schwierig.",//"mathematics",
				"Ich habe eine Prüfung am Montag.",//"Monday",
				"Affen sind schlau.",//"monkey",
				"Der Mond ist schön, nicht war?",//"moon",
				"Ich dusche morgens.",//"morning",

				"Meine Mutter arbeitet in einer Bank.",//"mother",
				"Japan hat viele Berge.",//"mountain",
				"Öffnen sie den Mund bitte.",//"mouth",
				"Ich habe im Kino einen Film gesehen.",//"movie theater",
				////"在我家附近有一家书店。",//"near",

				"Ich lese die Zeitung jeden Tag.",//"newspaper",
				////"就在我家隔壁。",//"next door",
				"Es gibt neun Studenten.",//"nine",
				"Wo können wir heute Mittag essen?",//"noon",
				"Die Universität liegt im Norden Deutschlands.",//"north",
				"Die Nase meines älteren Bruders ist groß.",//"nose",

				"Ich habe fünf Schreibhefte gekauft.",//"notebook",
				"Mein älterer Bruder ist im letzten Jahr an seiner Universität.",//"older brother",
				"Meine ältere Schwester wohnt in New York.",//"older sister",
				"Das ist die Nummer eins.",//"one",

				"Orangen und Kiwis sind Früchte.",//"orange",
				"Ich bin eine Stunde lang im Park gelaufen.",//"park",
				"Wo ist der Parkplatz?",//"parking lot",
				"Ich habe es mit Bleistift geschrieben.",//"pencil",
				"Ich habe ein Foto von meinen Eltern geschossen.",//"photograph",

				"Ich habe in der Post Briefmarken gekauft.",//"post office",
				"Die Blumen sind hübsch.",//"pretty",
				"Hast du eine Frage?",//"question",
				"Hasen sind süß.",//"rabbit",
				"Manchmal höre ich Radio.",//"radio",

				"Im Juni regnet es oft.",//"rain",
				"Der Pullover ist rot.",//"red",
				"Ich habe einen großen Kühlschrank gekauft.",//"refrigerator",
				"Ich gehe nicht oft ins Restaurant.",//"restaurant",
				"Ich esse Reis.",//"rice",

				"Bitte biegen sie rechts ab.",//"right",
				"Ich gehe im Fluss angeln.",//"river",
				"Am Samstag muss ich nicht arbeiten.",//"Saturday",
				"Ich gehe in die Schule.",//"school",
				"Ich schwimme im Meer.",//"sea",
				"Dort sind sieben Hunde.",//"seven",

				"Ich habe im Kaufhaus Schuhe gekauft.",//"shoes",
				"Ich habe immer einen Ball an meiner Seite.",//"side",
				"Meine jüngere Schwester ist sechs Jahre alt.",//"six",
				"Des Schnee ist weiß.",//"snow",
				"Soziologie ist interessant.",//"sociology",
				"Wir brauchen Erde und Wasser.",//"soil",

				"Die Universität liegt im Süden Deutschlands.",//"south",
				"Wirst du mit einem Löffel essen?",//"spoon",
				"Ich habe 20 Briefmarken gekauft.",//"stamp",
				"Ich mag Erdbeeren sehr.",//"strawberry",
				"Ein Mathematikschüler.",//"student",

				"Ich nehme die U-Bahn oft.",//"subway",
				"Die Sonne geht jeden Tag auf.",//"sun",
				"Ich ruhe mich am Sonntag daheim aus.",//"Sunday",
				"Möchtest du eine Tasse Tee?",//"tea",
				"Meine Lehrer sind nett.",//"teacher",
				"Ich benutze das Telefon nicht.",//"telephone",

				"Da sind zehn Autos.",//"ten",
				"Das Buch kostet eintausend Euro.",//"thousand",
				"Ich aß drei Äpfel.",//"three",

				////"我们今天干什么？",//"today",
				"Ich habe keine Zeit am Donnerstag.",//"Thursday",
				"Ich habe einen Apfel gekauft.",//"to buy",
				"Jemand ist gekommen.",//"to come",
				"Morgens trinke ich Milch.",//"to drink",

				"Ich esse ein Brot zu Mittag.",//"to eat",
				"Sie ging zur Schule.",//"to go",
				"Bitte schauen Sie es sich genau an.",//"to look",
				////"我明天得去工作。",//"tomorrow",

				"Ich lese gerne Bücher.",//"to read",
				"Ich habe einen Äpfel verkauft.",//"to sell",
				"Lasst uns ein Lied singen.",//"to sing",
				"Ich lerne Mathe.",//"to study",
				"Ich bin gestern früh schlafen gegangen.",//"to sleep",
				"Ich schwimme gerne.",//"to swim",

				"Ich schreibe oft Briefe.",//"to write",
				"Wir nehmen den Zug in die Stadt.",//"train",
				"Lasst uns am Bahnhof treffen.",//"train station",
				"Dort ist ein Kirschbaum.",//"tree",
				"Hast du am Dienstag Zeit?",//"Tuesday",

				"Schaust du Fernsehen?",//"TV",
				"Ich kaufte zwei Notizbücher.",//"two",
				"Ich bringe meinen Regenschirm mit.",//"umbrella",
				////"请向上看。",//"up",
				"Ich habe meine Geldbörse verloren.",//"wallet",
				"Das Wasser ist heiß.",//"water",

				"Ich habe ein Vorstellungsgespräch am Mittwoch.",//"Wednesday",
				"Was willst du am Wochenende machen?",//"weekend",
				"Die Universität liegt im Westen Deutschlands.",//"west",
				"Das Auto ist weiß",//"white",
				"Starker Wind",//"wind",
				"Lasst uns das Fenster öffnen.",//"window",

				"Eine Frau und ein Mann",//"woman",
				////"你昨天干什么了？",//"yesterday",
				"Mein jüngerer Bruder ist in der High School.",//"younger brother",

				"Meine jüngere Schwester spielt Klavier.",//"younger sister",
				"Ich habe null Punkte bekommen.",//"zero",
				"Warum gehen wir nicht in den Zoo?",//"zoo",
				"Ich nehme mir übermorgen frei.",//	"the day after tomorrow"
				];

//get rid of 13 words
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
	
	tempVar = wordList.indexOf("front");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("front");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("clothes");
	wordList.splice(tempVar,1);
	tempVar = things.indexOf("clothes");
	things.splice(tempVar,1);

	tempVar = wordList.indexOf("chopsticks");
	wordList.splice(tempVar,1);
	tempVar = things.indexOf("chopsticks");
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
	