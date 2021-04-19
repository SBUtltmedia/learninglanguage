var nativeWords = [
				"un avion",//"airplane",
				"une pomme",//"apple",
				"un sac", //"bag",
				"une banane",//"banana",
				"une banque", //"bank",
				"un lit",//"bed",
				////"在后面",//"behind",
				////"在下面",//"below",
				////"在中间",//"between",
				"un vélo",//"bicycle",

				"la biologie",//"biology",
				"noir / noire",//"black",
				"bleu /bleue",//"blue",
				"un livre",//"book",
				"une étagère",//"bookshelf",

				"le pain",//"bread",
				"un autobus",//"bus",
				"un appareil photo",//"camera",
				"une voiture",//"car",
				"une carotte",//"carrot",
				"un chat",//"cat",

				"un téléphone portable",//"cell phone",
				"une chaise",//"chair",
				////"便宜",//"cheap",
				"la chimie",//"chemistry",

				"les baguettes (f.)",//"chopsticks",
				"une classe",//class",
				"une horloge",//"clock",
				"les vêtements (m.)",//"clothes",

				"l'informatique (f.)",//"computer science",
				"une vache",//"cow",
				"mignon / mignonne",//"cute",
				"un grand magasin (m.)",//"department store",

				"un bureau",//"desk",
				"un dictionnaire",//"dictionary",
				"difficile",//"difficult",
				"un chien",//"dog",
				"un dortoir",//"dormitory",

				"un tiroir",//"drawer",
				"une oreille",//"ear",
				"l'est",//"east",
				"facile",//"easy",
				"l'économie (f.)",//"economics",
				"huit",//"eight",

				"une gomme",//"eraser",
				"le soir",//"evening",
				"un examen",//"exam",
				"cher / chère",//"expensive",
				"les yeux (m.)",//"eye",
				"un père",//"father",

				"un feu",//"fire",
				"cinq",//"five",
				"une fleur",//"flower",
				"un pied",//"foot",
				"quatre",//"four",
				"le vendredi",//"Friday",

				"un ami / une amie",//"friend",
				////"在前面",//"front",
				"un poivron vert",//"green pepper",
				"une main",//"hand",
				"un chapeau",//"hat",

				"une maison",//"home",
				"les devoirs (m.)",//"homework",
				"un cheval",//"horse",
				"un hôpital",//"hospital",
				"cent",//"hundred",

				////"在里面",//"inside",
				"un carrefour",//"intersection",
				"une clé",//"key",
				"la gauche",//"left",
				"une lettre",//"letter",

				"une bibliothèque",//"library",
				"la littérature",//"literature",
				"un magazine",//"magazine",
				"une spécialisation",//"major",
				"un homme",//"man",

				"les mathématiques (m.)",//"mathematics",
				"le lundi",//"Monday",
				"un singe",//"monkey",
				"la lune",//"moon",
				"un matin",//"morning",

				"une mère",//"mother",
				"une montagne",//"mountain",
				"une bouche",//"mouth",
				"un cinéma",//"movie theater",
				////"在附近",//"near",

				"un journal",//"newspaper",
				////"隔壁",//"next door",
				"neuf",//"nine",
				"le midi",//"noon",
				"le nord",//"north",
				"un nez",//"nose",

				"un cahier",//"notebook",
				"un grand frère",//"older brother",
				"une grande soeur",//"older sister",
				"un / une",//"one",

				"une orange",//"orange",
				"un parc",//"park",
				"un parking",//"parking lot",
				"un crayon",//"pencil",
				"une photo",//"photograph",

				"la poste",//"post office",
				"beau / belle",//"pretty",
				"une question",//"question",
				"un lapin",//"rabbit",
				"une radio",//"radio",

				"la pluie",//"rain",
				"rouge",//"red",
				"un réfrigérateur",//"refrigerator",
				"un restaurant",//"restaurant",
				"le riz",//"rice",

				"la droite",//"right",
				"une rivière",//"river",
				"le samedi",//"Saturday",
				"une école",//"school",
				"la mer",//"sea",
				"sept",//"seven",

				"les chaussures (f.)",//"shoes",
				////"旁边",//"side",
				"six",//"six",
				"la neige",//"snow",
				"la sociologie",//"sociology",
				"la terre",//"soil",

				"le sud",//"south",
				"une cuillère",//"spoon",
				"un timbre",//"stamp",
				"une fraise",//"strawberry",
				"un élève / une élève",//"student",

				"un métro",//"subway",
				"le soleil",//"sun",
				"le dimanche",//"Sunday",
				"un thé",//"tea",
				"un professeur",//"teacher",
				"un téléphone",//"telephone",

				"dix",//"ten",
				"mille",//"thousand",
				"trois",//"three",

				"aujourd'hui",//"today",
				"le jeudi",//"Thursday",
				"acheter",//"to buy",
				"venir",//"to come",
				"boire",//"to drink",

				"manger",//"to eat",
				"aller",//"to go",
				"regarder",//"to look",
				"demain",//"tomorrow",

				"lire",//"to read",
				"vendre",//"to sell",
				"chanter",//"to sing",
				"étudier",//"to study",
				"dormir",//"to sleep",
				"nager",//"to swim",

				"écrire",//"to write",
				"un train ",//"train",
				"une gare",//"train station",
				"un arbre",//"tree",
				"le mardi",//"Tuesday",

				"une télévision",//"TV",
				"deux",//"two",
				"un parapluie",//"umbrella",
				////"上",//"up",
				"un parapluie",//"wallet",
				"l'eau (f.)",//"water",

				"le mercredi",//"Wednesday",
				"le week-end",//"weekend",
				"l'ouest",//"west",
				"blanc / blanche",//"white",
				"le vent",//"wind",
				"une fenêtre",//"window",

				"une femme",//"woman",
				"hier",//"yesterday",
				"un petit frère ",//"younger brother",

				"une petite soeur",//"younger sister",
				"un zéro",//"zero",
				"un zoo",//"zoo",
				////"后天",//"the day after tomorrow"
				];

var ex1 = [
				"J'ai pris l'avion pour aller en Floride.",//"airplane",
				"Des pommes et des bananes",//"apple",
				"C'est un gros sac, n'est-ce pas?",//"bag",
				"Je mange des bananes chaque jour.",//"banana",
				"Je suis allé à la banque hier.",//"bank",

				"C'est un grand lit.",//"bed",
				////"有一个球在箱子后面。",//"behind",
				////"它就在你下面。",//"below",
				////"它在银行和书店中间。",//"between",
				"C'est un bon vélo.",//"bicycle",

				"La biologie est intéressante.",//"biology",
				"Un oiseau noir",//"black",
				"Le ciel bleu",//"blue",
				"Ce livre est le mien.",//"book",
				"Il y a 100 livres sur l'étagère.",//"bookshelf",

				"Le pain et le café",//"bread",
				"Je prends un autobus pour aller à l'université.",//"bus",
				"C'est un joli appareil photo, n'est-ce pas?",//"camera",
				"C'est une voiture chère.",//"car",
				"J'adore les carottes.",//"carrot",
				"Les chats sont mignons.",//"cat",

				"Je veux un nouveau téléphone portable.",//"cell phone",
				"S'il vous plaît, asseyez-vous sur cette chaise.",//"chair",
				////"一个便宜的包。",//"cheap",
				"Mon grand frère étudie la chimie.",//"chemistry",

				"Je mange avec les baguettes.",//"chopsticks",
				"J'ai trois classes aujourd'hui.",//"class",
				"Est-ce que cette horloge est exacte?",//"clock",
				"J'ai acheté des vêtements.",//"clothes",

				"J'apprendrai l'informatique.",//"computer science",
				"Cette vache est grosse.",//"cow",
				"Un chien mignon",//"cute",
				"Allons au grand magasin.",//"department store",

				"Il y a un bureau dans la salle.",//"desk",
				"Vous pouvez utiliser votre dictionnaire.",//"dictionary",
				"Un examen difficile",//"difficult",
				"Les chiens jouent beaucoup.",//"dog",
				"J'habite dans le dortoir.",//"dormitory",

				"Le tiroir du bureau",//"drawer",
				"Mes oreilles me font mal.",//"ear",
				"Il y a une librairie à l'est de la gare.",//"east",
				"Un examen facile",//"easy",
				"L'économie est intéressante.",//"economics",
				"J'irai à Hawaii dans huit jours.",//"eight",

				"Pourriez-vous me prêter votre gomme?",//"eraser",
				"Je regarderai un film ce soir.",//"evening",
				"J'ai pris un examen de maths.",//"exam",
				"Un sac cher",//"expensive",
				"Sarah a de beaux yeux.",//"eye",
				"Mon père est un professeur de maths.",//"father",

				"Il y a un feu dans la forêt.",//"fire",
				"Nous avons chanté dans un groupe de cinq personnes.",//"five",
				"Les fleurs fleurissent.",//"flower",
				"Mes pieds me font mal.",//"foot",
				"Il y a quatre stylos.",//"four",
				"Je n'ai pas de cour le vendredi.",//"Friday",

				"J'ai fait une promenade avec mon ami.",//"friend",
				////"有一个球在箱子前面。",//"front",
				"Je ne mange pas beaucoup de poivrons verts.",//"green pepper",
				"Tu t'es lavé les mains?",//"hand",
				"C'est un joli chapeau.",//"hat",

				"S'il vous plaît, reposez-vous à la maison.",//"home",
				"J'ai beaucoup de devoirs.",//"homework",
				"Le cheval court.",//"horse",
				"J'irai à l'hôpital.",//"hospital",
				"Tout est à cent euros.",//"hundred",

				////"有一个球在箱子里面。",//"inside",
				"S'il vous plaît, arrêtez-vous au carrefour.",//"intersection",
				"C'est la clé de ma maison.",//"key",
				"La boulangerie est sur ta gauche.",//"left",
				"J'écrirai une lettre à ma grand-mère.",//"letter",

				"J'étudie dans la bibliothèque.",//"library",
				"J'aime beaucoup la littérature.",//"literature",
				"Je ne lis pas souvent des magazines.",//"magazine",
				"Quelle est votre spécialisation?",//"major",
				"un homme et une femme",//"man",

				"Les mathématiques ne sont pas difficiles.",//"mathematics",
				"J'étudie le lundi.",//"Monday",
				"Les singes sont intelligents.",//"monkey",
				"La lune est belle, n'est-ce pas?",//"moon",
				"Je prends mon bain le matin.",//"morning",

				"Ma mère travaille à la banque.",//"mother",
				"Le Japon a beaucoup de montagnes.",//"mountain",
				"Ouvrez la bouche, s'il vous plaît.",//"mouth",
				"J'ai regardé un film au cinéma.",//"movie theater",
				////"在我家附近有一家书店。",//"near",

				"Je lis le journal chaque jour.",//"newspaper",
				////"就在我家隔壁。",//"next door",
				"Il y a neuf élèves.",//"nine",
				"Où voulez-vous manger à midi?",//"noon",
				"La gare est située au nord de l'université.",//"north",
				"Mon grand frère a un gros nez.",//"nose",

				"J'ai acheté cinq cahiers.",//"notebook",
				"Mon grand frère a dix-huit ans.",//"older brother",
				"Ma grande soeur habite dans l'état de New York.",//"older sister",
				"J'ai mangé une pomme.",//"one",

				"Les oranges et les kiwis sont des fruits.",//"orange",
				"J'ai marché dans le parc pendant une heure.",//"park",
				"Où est le parking?",//"parking lot",
				"Je l'ai écrit avec un crayon.",//"pencil",
				"J'ai pris une photo de ma mère et de mon père.",//"photograph",

				"J'ai acheté des timbres à la poste.",//"post office",
				"De belles fleurs",//"pretty",
				"N'avez-vous pas de question?",//"question",
				"Les lapins sont mignons.",//"rabbit",
				"J'écoute parfois la radio.",//"radio",

				"Il y a beaucoup de pluie au mois de juin.",//"rain",
				"un chandail rouge",//"red",
				"J'ai acheté un réfrigérateur.",//"refrigerator",
				"Je ne vais pas trop souvent au restaurant.",//"restaurant",
				"Je mange du riz.",//"rice",

				"La pâtisserie est sur ta droite.",//"right",
				"Je vais à la rivière pour pêcher.",//"river",
				"Je ne travaille pas le samedi.",//"Saturday",
				"Je vais à l'école.",//"school",
				"Je nage dans la mer.",//"sea",
				"Il y a sept chiens.",//"seven",

				"J'ai acheté des chaussures au centre commercial.",//"shoes",
				////"有一个球在箱子旁边",//"side",
				"Ma petite sœur a six ans.",//"six",
				"Il y aura de la neige demain.",//"snow",
				"La sociologie est intéressante.",//"sociology",
				"Nous avons besoin de la terre et de l'eau.",//"soil",

				"Il y a une université au sud de la gare.",//"south",
				"Allez-vous manger avec une cuillère?",//"spoon",
				"J'ai acheté vingt timbres.",//"stamp",
				"J'aime beaucoup les fraises.",//"strawberry",
				"Je suis un élève.",//"student",

				"Je prends souvent le métro.",//"subway",
				"Le soleil se lève chaque jour.",//"sun",
				"Je me détends à la maison le dimanche.",//"Sunday",
				"Aimeriez-vous avoir un thé?",//"tea",
				"Mon professeur est gentil.",//"teacher",
				"Je n'utilise pas de téléphone.",//"telephone",

				"Il y a dix voitures.",//"ten",
				"Ce livre coûtait 1000 euros!",//"thousand",
				"Elle a trois ans.",//"three",

				"Que ferons-nous aujourd'hui?",//"today",
				"Je suis occupé le jeudi.",//"Thursday",
				"J'ai acheté une pomme.",//"to buy",
				"Quelqu'un est venu.",//"to come",
				"Je bois du lait le matin.",//"to drink",

				"Je mange un sandwich à midi.",//"to eat",
				"Elle est allée en classe.",//"to go",
				"S'il vous plaît, regardez attentivement.",//"to look",
				"Je dois travailler demain.",//"tomorrow",

				"J'aime lire des livres.",//"to read",
				"J'ai vendu une pomme.",//"to sell",
				"Chantons une chanson.",//"to sing",
				"J'étudie les mathématiques.",//"to study",
				"Je suis allé au lit tôt hier.",//"to sleep",
				"J'aime nager.",//"to swim",

				"J'écris souvent des lettres.",//"to write",
				"Prenons le train.",//"train",
				"Rencontrons-nous à la gare.",//"train station",
				"Ceci est un grand arbre.",//"tree",
				"Etes-vous libre le mardi?",//"Tuesday",

				"Est-ce que vous regardez la télévision?",//"TV",
				"J'ai acheté deux cahiers.",//"two",
				"J'apporterai un parapluie.",//"umbrella",
				////"请向上看。",//"up",
				"J'ai perdu mon portefeuille.",//"wallet",
				"Nous manquons d'eau.",//"water",

				"J'ai des entretiens le mercredi.",//"Wednesday",
				"Qu'est ce que tu fais le week-end?",//"weekend",
				"L'Angleterre se trouve à l'ouest de la France.",//"west",
				"une voiture blanche",//"white",
				"Il y a du vent aujourd'hui.",//"wind",
				"Ouvrons la fenêtre.",//"window",

				"un homme et une femme",//"woman",
				"Qu'avez-vous fait hier?",//"yesterday",
				"Mon petit frère est au lycée.",//"younger brother",

				"Ma petite soeur joue du piano.",//"younger sister",
				"J'ai eu un zéro à mon examen.",//"zero",
				"Pouvons-nous aller au zoo?",//"zoo",
				////"我后天请假。",//	"the day after tomorrow"
				];

	//get rid of 11 words
	var tempVar = wordList.indexOf("the day after tomorrow");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("the day after tomorrow");
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

	tempVar = wordList.indexOf("cheap");
	wordList.splice(tempVar,1);
	tempVar = properties.indexOf("cheap");
	properties.splice(tempVar,1);
	tempVar = adjective.indexOf("cheap");
	adjective.splice(tempVar,1);

	tempVar = wordList.indexOf("inside");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("inside");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("side");
	wordList.splice(tempVar,1);
	tempVar = time.indexOf("side");
	time.splice(tempVar,1);

	tempVar = wordList.indexOf("near");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("near");
	relativeLocations.splice(tempVar,1);

	tempVar = wordList.indexOf("next door");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("next door");
	relativeLocations.splice(tempVar,1);


	tempVar = wordList.indexOf("up");
	wordList.splice(tempVar,1);
	tempVar = relativeLocations.indexOf("up");
	relativeLocations.splice(tempVar,1);
