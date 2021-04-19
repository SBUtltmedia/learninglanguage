var nativeWords = [
				"un aereo",//"airplane",
				"una mela",//"apple",
				"una borsa", //"bag",
				"una banana",//"banana",
				"una banca", //"bank",
				"un letto",//"bed",
				////"دراجة",//"behind",
				////"علم الأحياء",//"below",
				////"أسود/سوداء",//"between",
				"una bicicletta",//"bicycle",

				"la biologia",//"biology",
				"Nero/nera",//"black",
				"Blu/blu",//"blue",
				"un libro",//"book",
				"uno scaffale",//"bookshelf",

				"il pane",//"bread",
				"un autobus",//"bus",
				"una macchina fotografica",//"camera",
				"macchina",//"car",
				"una carota",//"carrot",
				"un gatto/una gatta",//"cat",

				"un cellulare",//"cell phone",
				"una sedia",//"chair",
				"economico/economica",//"cheap",
				"la Chimica",//"chemistry",

				////"عيدان الطعام",//"chopsticks",
				"un corso",//class",
				"un orologio",//"clock",
				////"衣服",//"clothes",

				"l'Informatica (f.s.)",//"computer science",
				"una mucca",//"cow",
				"grazioso/graziosa",//"cute",
				"un grande magazzino",//"department store",

				"una scrivania",//"desk",
				"un dizionario",//"dictionary",
				"difficile/difficile",//"difficult",
				"un cane/una cagna",//"dog",
				"una casa dello studente",//"dormitory",

				"un cassetto",//"drawer",
				"un orecchio",//"ear",
				"l'est (m.s)",//"east",
				"facile/facile",//"easy",
				"l'economia (f.s.)",//"economics",
				"l'otto",//"eight",

				"una gomma",//"eraser",
				"una sera",//"evening",
				"un esame",//"exam",
				"costoso/costosa",//"expensive",
				"un occhio",//"eye",
				"un padre",//"father",

				"un fuoco",//"fire",
				"il cinque",//"five",
				"un fiore",//"flower",
				"un piede",//"foot",
				"il quattro",//"four",
				"il venerdì",//"Friday",

				"un amico/una amica",//"friend",
				"davanti",//"front",
				"un peperone verde",//"green pepper",
				"una mano",//"hand",
				"un cappello",//"hat",

				"una casa",//"home",
				"I compiti per casa",//"homework",
				"un cavallo/una cavalla",//"horse",
				"un ospedale",//"hospital",
				"cento",//"hundred",

				////"تقاطع",//"inside",
				"un incrocio",//"intersection",
				"una chiave",//"key",
				"a sinistra",//"left",
				"una lettera",//"letter",

				"una biblioteca",//"library",
				"la Letteratura",//"literature",
				"una rivista",//"magazine",
				"la specializzazione",//"major",
				"un uomo",//"man",

				"la matematica",//"mathematics",
				"il Lunedì",//"Monday",
				"una scimmia",//"monkey",
				"la luna",//"moon",
				"una mattina",//"morning",

				"una madre",//"mother",
				"una montagna",//"mountain",
				"una bocca",//"mouth",
				"un cinema",//"movie theater",
				////"在附近",//"near",

				"un giornale",//"newspaper",
				////"隔壁",//"next door",
				"il nove ",//"nine",
				"mezzogiorno",//"noon",
				"il nord",//"north",
				"un naso",//"nose",

				"un quaderno",//"notebook",
				"il fratello maggiore",//"older brother",
				"la sorella maggiore",//"older sister",
				"l'uno",//"one",

				"una arancia",//"orange",
				"un parco",//"park",
				"un parcheggio",//"parking lot",
				"una matita",//"pencil",
				"una foto",//"photograph",

				"la posta",//"post office",
				"bello/bella",//"pretty",
				"una domanda",//"question",
				"un coniglio",//"rabbit",
				"una radio",//"radio",

				"la pioggia",//"rain",
				"rosso/rossa",//"red",
				"un frigorifero",//"refrigerator",
				"un ristorante",//"restaurant",
				"il riso",//"rice",

				"a destra",//"right",
				"un fiume",//"river",
				"il Sabato",//"Saturday",
				"una scuola",//"school",
				"un mare",//"sea",
				"il sette",//"seven",

				"una scarpa",//"shoes",
				"un lato",//"side",
				"il sei",//"six",
				"la neve",//"snow",
				"la Sociologia",//"sociology",
				"la terra",//"soil",

				"il Sud",//"south",
				"un cucchiaio",//"spoon",
				"un francobollo",//"stamp",
				"una fragola/le fragole",//"strawberry",
				"uno studente/una studentessa",//"student",

				"la metropolitana",//"subway",
				"il sole",//"sun",
				"la domenica",//"Sunday",
				"un tè (nero)",//"tea",
				"un insegnante",//"teacher",
				"un telefono",//"telephone",

				"il dieci",//"ten",
				"mille",//"thousand",
				"il tre",//"three",

				////"今天",//"today",
				"il giovedì",//"Thursday",
				"comprare",//"to buy",
				"venire",//"to come",
				"bere",//"to drink",

				"mangiare",//"to eat",
				"andare",//"to go",
				"guardare",//"to look",
				////"明天",//"tomorrow",

				"leggere",//"to read",
				"vendere",//"to sell",
				"cantare",//"to sing",
				"studiare",//"to study",
				"dormire",//"to sleep",
				"nuotare",//"to swim",

				"scrivere",//"to write",
				"un treno",//"train",
				"una stazione dei treni",//"train station",
				"un albero",//"tree",
				"il martedì",//"Tuesday",

				"una tv",//"TV",
				"il due",//"two",
				"un ombrello",//"umbrella",
				/////"上",//"up",
				"un portamonete",//"wallet",
				"l'acqua",//"water",

				"il Mercoledì",//"Wednesday",
				"il fine settimana",//"weekend",
				"l'ovest (m.s.)",//"west",
				"bianco/bianca",//"white",
				"un vento",//"wind",
				"una finestra",//"window",

				"una donna",//"woman",
				////"昨天",//"yesterday",
				"un fratello minore",//"younger brother",

				"una sorella minore",//"younger sister",
				"lo zero",//"zero",
				"uno zoo",//"zoo",
				"dopodomani",//"the day after tomorrow"
				];

var ex1 = [
				"Ho preso l'aereo per la Florida.",//"airplane",
				"Io mangio una mela.",//"apple",
				"È una borsa grande, non è vero?",//"bag",
				"Io mangio una banana al giorno.",//"banana",
				"Ieri sono andato in banca ieri.",//"bank",

				"Dormi in un letto?",//"bed",
				////"有一个球在箱子后面。",//"behind",
				////"它就在你下面。",//"below",
				////"它在银行和书店中间。",//"between",
				"Ho comprato una bicicletta nuova.",//"bicycle",

				"La biologia è interessante.",//"biology",
				"Un uccello nero.",//"black",
				"Il cielo è blu.",//"blue",
				"Questo libro è mio.",//"book",
				"Ci sono 100 libri sullo scaffale.",//"bookshelf",

				"Mi piace il pane e anche il caffè.",//"bread",
				"Prendo l'autobus per l'Università.",//"bus",
				"È una bella macchina fotografica, non è vero?",//"camera",
				"Vado all'università in macchina.",//"car",
				"Io odio le carote.",//"carrot",
				"I gatti sono graziosi.",//"cat",

				"Voglio un cellulare nuovo.",//"cell phone",
				"Per favore, siedi su quella sedia.",//"chair",
				"È una borsa economica.",//"cheap",
				"Mio fratello maggiore ha la specializzazione in Chimica.",//"chemistry",

				////"أنا آكل بعيدان الطعام",//"chopsticks",
				"Io ho tre corsi oggi.",//"class",
				"È giusto quell'orologio?",//"clock",
				////"我买了些衣服。",//"clothes",

				"Seguirò un corso di Informatica.",//"computer science",
				"Quella mucca è grande.",//"cow",
				"Un cane grazioso.",//"cute",
				"Possiamo andare ai grandi magazzini?",//"department store",

				"C'è una scrivania nella stanza.",//"desk",
				"Tu puoi usare il tuo dizionario.",//"dictionary",
				"È un esame difficile.",//"difficult",
				"I cani giocano tanto.",//"dog",
				"Io vivo alla casa dello studente.",//"dormitory",

				"È nel cassetto della scrivania.",//"drawer",
				"Mi fa male l'orecchio.",//"ear",
				"C'è una libreria a est della stazione ferroviaria.",//"east",
				"È un esame facile.",//"easy",
				"L'economia è (una materia) interessante.",//"economics",
				"Andrò alle Hawaii l'otto di agosto.",//"eight",

				"Mi presteresti la tua gomma?",//"eraser",
				"Io guarderò un film domani sera.",//"evening",
				"Ho fatto un esame di matematica.",//"exam",
				"È una borsa costosa.",//"expensive",
				"Lucia ha dei begli occhi.",//"eye",
				"Mio padre e il padre di Tom sono amici.",//"father",

				"Il fuoco è acceso nel caminetto.",//"fire",
				"Noi abbiamo cantato in un gruppo di cinque.",//"five",
				"I fiori stanno sbocciando.",//"flower",
				"Mi fanno male i piedi.",//"foot",
				"Ci sono quattro penne.",//"four",
				"Non ho corsi di venerdì.",//"Friday",

				"Ho fatto una passeggiata con il mio amico.",//"friend",
				"C'è una palla davanti alla scatola.",//"front",
				"Non mangio tanti peperoni verdi.",//"green pepper",
				"Ti sei lavato le mani?",//"hand",
				"Quel cappello è carino!",//"hat",

				"Per favore, vai a casa a riposare.",//"home",
				"Ho tanti compiti per casa.",//"homework",
				"Io vado a cavallo.",//"horse",
				"Io andrò all'ospedale.",//"hospital",
				"Tutto costa cento euro.",//"hundred",

				////"",//"inside",
				"Per favore, fermati all'incrocio.",//"intersection",
				"Questa è la chiave di casa mia.",//"key",
				"Per favore, laggiù gira a sinistra.",//"left",
				"Scriverò una lettera alla mia nonna.",//"letter",

				"Io studio in biblioteca.",//"library",
				"Mi piace tanto la Letteratura.",//"literature",
				"Non leggo riviste molto spesso.",//"magazine",
				"Quale è la tua specializzazione?",//"major",
				"Ho visto un uomo e una donna.",//"man",

				"La matematica è un pò difficile.",//"mathematics",
				"Lunedì ho un esame.",//"Monday",
				"Le scimmie sono intelligenti.",//"monkey",
				"La luna è bella, non è vero?",//"moon",
				"Io faccio la doccia la mattina.",//"morning",

				"Mia madre e la madre di Tom.",//"mother",
				"l'Italia ha tante montagne.",//"mountain",
				"Apri la bocca, per piacere.",//"mouth",
				"Ho visto un film al cinema.",//"movie theater",
				////"أنا أقرأ جريدة كل يوم.",//"near",

				"Io leggo il giornale tutti i giorni.",//"newspaper",
				////"هناك تسعة طلاب.",//"next door",
				"Ci sono nove studenti.",//"nine",
				"Dove mangi a mezzogiorno?",//"noon",
				"La stazione dei treni è a nord dell'università.",//"north",
				"Mio fratello maggiore ha il naso grande.",//"nose",

				"Io ho comprato cinque quaderni.",//"notebook",
				"Mio fratello maggiore e il fratello maggiore di Tom.",//"older brother",
				"Mia sorella maggiore e la sorella maggiore di Tom sono amiche.",//"older sister",
				"Ho mangiato solo uno spuntino.",//"one",

				"Mangio una arancia.",//"orange",
				"Ho camminato per un'ora nel parco.",//"park",
				"Dove è il parcheggio?",//"parking lot",
				"Lo ho scritto a matita.",//"pencil",
				"Ho fatto una foto a mia madre e mio padre.",//"photograph",

				"Ho comprato dei francobolli alla posta.",//"post office",
				"Un mazzo di fiori bello",//"pretty",
				"Non hai qualche domanda?",//"question",
				"I conigli sono teneri.",//"rabbit",
				"A volte ascolto la radio.",//"radio",

				"Non mi piace la pioggia.",//"rain",
				"Ho comprato un maglione rosso.",//"red",
				"Ho comprato un frigo grande.",//"refrigerator",
				"Non vado al ristorante molto spesso.",//"restaurant",
				"Io mangio il riso.",//"rice",

				"Per favore, laggiù gira a destra.",//"right",
				"Vado al fiume a pescare.",//"river",
				"Io non lavoro di Sabato.",//"Saturday",
				"Io vado a scuola.",//"school",
				"Io nuoto nel mare.",//"sea",
				"Ci sono sette cani.",//"seven",

				"Io ho comprato le scarpe al centro commerciale.",//"shoes",
				"C'è una palla sul lato della scatola.",//"side",
				"Mia sorella più piccola ha sei anni.",//"six",
				"C'è tanta neve fuori.",//"snow",
				"La Sociologia è interessante.",//"sociology",
				"Abbiamo bisogno di terra e acqua.",//"soil",

				"C'è una università a sud della stazione ferroviaria.",//"south",
				"Lo mangi con il cucchiaio?",//"spoon",
				"Ho comprato 20 francobolli.",//"stamp",
				"Mi piacciono molto le fragole.",//"strawberry",
				"uno studente di Matematica",//"student",

				"Io prendo spesso la metropolitana.",//"subway",
				"Il sole sorge ogni giorno.",//"sun",
				"Di domenica sto a casa a riposare.",//"Sunday",
				"Vuoi una tazza di tè?",//"tea",
				"Il mio/La mia insegnante è gentile.",//"teacher",
				"Io non uso il telefono.",//"telephone",

				"Ci sono dieci macchine.",//"ten",
				"Questo libro costava mille euro.",//"thousand",
				"Io ho tre sorelle.",//"three",

				////"我们今天干什么？",//"today",
				"Di giovedì sono occupato/a.",//"Thursday",
				"Ho comprato una mela.",//"to buy",
				"Qualcuno è venuto.",//"to come",
				"Io bevo il latte la mattina.",//"to drink",

				"A mezzogiorno mangio un panino.",//"to eat",
				"Maria è andata in classe.",//"to go",
				"Per favore, guardalo attentamente.",//"to look",
				////"我明天得去工作。",//"tomorrow",

				"Mi piace leggere libri.",//"to read",
				"Ho venduto una mela.",//"to sell",
				"Cantiamo una canzone!",//"to sing",
				"Io studio Matematica.",//"to study",
				"Mi piace dormire",//"to sleep",
				"Mi piace nuotare.",//"to swim",

				"Io scrivo spesso delle lettere.",//"to write",
				"Andiamoci in treno.",//"train",
				"Incontriamoci alla stazione dei treni.",//"train station",
				"C'è un albero di ciliegio.",//"tree",
				"Sei libero martedì?",//"Tuesday",

				"Guardi la tv/televisione?",//"TV",
				"Io ho comprato due quaderni.",//"two",
				"Mi porterò l'ombrello.",//"umbrella",
				////"أنا فقدت محفظتي.",//"up",
				"Ho perso il mio portamonete.",//"wallet",
				"Abbiamo poca acqua.",//"water",

				"Mercoledì io ho un colloquio.",//"Wednesday",
				"Cosa fai nei fine settimana?",//"weekend",
				"La Spagna si trova a ovest della Francia.",//"west",
				"È una macchina bianca.",//"white",
				"Tira vento oggi.",//"wind",
				"Apri la finestra!",//"window",

				"Ho incontrato una donna e un uomo.",//"woman",
				////"أخي الأصغر طالب ثانوي.",//"yesterday",
				"Mio fratello minore è alle superiori.",//"younger brother",

				"Mia sorella minore suona il piano.",//"younger sister",
				"Ho preso zero nel compito in classe.",//"zero",
				"Perchè non andiamo allo zoo?",//"zoo",
				"Prenderò un giorno di ferie dopodomani",//	"the day after tomorrow"
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