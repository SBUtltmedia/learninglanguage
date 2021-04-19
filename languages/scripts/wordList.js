	var lang_hrefs ={
					"arabic":"https://drive.google.com/file/d/0B6a_BA3h4cUtNnh1OUZMMnBlS3c/view?usp=sharing",
					"chinese":"https://drive.google.com/file/d/0B6a_BA3h4cUtaE82SW5May1JdWs/view?usp=sharing",
					"french":"https://drive.google.com/file/d/0B6a_BA3h4cUtUEQ2THhiT3NfajA/view?usp=sharing",
					"german":"https://drive.google.com/file/d/0B6a_BA3h4cUtcHpKYWdwcE5SekU/view?usp=sharing",
					"hindi":"https://drive.google.com/file/d/0B6a_BA3h4cUtUElNMEpEamZLSHc/view?usp=sharing",
					"italian":"https://drive.google.com/file/d/0B6a_BA3h4cUtSXVOd2pCTkJFR3c/view?usp=sharing",
					"japanese":"https://drive.google.com/file/d/0B6a_BA3h4cUtUVBHM2VwRFNVUFE/view?usp=sharing",
					"korean":"https://drive.google.com/file/d/0B6a_BA3h4cUtTDFOUkFIUnNmX2s/view?usp=sharing",
					"russian":"https://drive.google.com/file/d/0B6a_BA3h4cUtVVB5OXRZUWFvUWM/view?usp=sharing",
					"spanish":"https://drive.google.com/file/d/0B6a_BA3h4cUtRHNFSTRBVnZ1dTg/view?usp=sharing"};

	var wordList = ["airplane","apple","bag","banana","bank",
					"bed","behind","below","between","bicycle",
					"biology","black","blue","book","bookshelf",
					"bread","bus","camera","car","carrot","cat",
					"cell phone","chair","cheap","chemistry",
					"chopsticks","class","clock","clothes",
					"computer science","cow","cute","department store",
					"desk","dictionary","difficult","dog","dormitory",
					"drawer","ear","east","easy","economics","eight",
					"eraser","evening","exam","expensive","eye","father",
					"fire","five","flower","foot","four","Friday",
					"friend","front","green pepper","hand","hat",
					"home","homework","horse","hospital","hundred",
					"inside","intersection","key","left","letter",
					"library","literature","magazine","major","man",
					"mathematics","Monday","monkey","moon","morning",
					"mother","mountain","mouth","movie theater","near",
					"newspaper","next door","nine","noon","north","nose",
					"notebook","older brother","older sister","one",
					"orange","park","parking lot","pencil","photograph",
					"post office","pretty","question","rabbit","radio",
					"rain","red","refrigerator","restaurant","rice",
					"right","river","Saturday","school","sea","seven",
					"shoes","side","six","snow","sociology","soil",
					"south","spoon","stamp","strawberry","student",
					"subway","sun","Sunday","tea","teacher","telephone",
					"ten","thousand","three",
					"today","Thursday","to buy","to come","to drink",
					"to eat","to go","to look","tomorrow",
					"to read","to sell","to sing","to study","to sleep","to swim",
					"to write","train","train station","tree","Tuesday",
					"TV","two","umbrella","up","wallet","water",
					"Wednesday","weekend","west","white","wind","window",
					"woman","yesterday","younger brother",
					"younger sister","zero","zoo","the day after tomorrow"];
	var actions = ["to buy","to come","to drink","to eat","to go",
				   "to look","to read","to sell","to sing","to sleep",
				   "to study","to swim","to write"];
	var animals = ["cat","cow","dog","horse","monkey","rabbit"];
	var body = ["ear","eye","foot","hand","mouth","nose"];
	var colors = ["black","blue","red","white"];
	var food = ["apple","banana","bread","carrot","green pepper","orange","rice","strawberry","tea"];
	var nature = ["fire","moon","mountain","rain","river","sea","snow","soil","sun","tree","water","wind"];
	var numbers = ["eight","five","one","four","two","hundred","nine",
					"seven","six","ten","thousand","three","zero"];
	var people = ["father","friend","man","mother","older sister",
					"older brother","student","teacher","woman",
					"younger sister","younger brother"];
	var places = ["bank","department store","dormitory","home",
					"hospital","intersection","library","movie theater",
					"park","parking lot","post office","restaurant",
					"school","train station","zoo"];
	var properties = ["cheap","cute","difficult","easy","expensive",
					"pretty"];
	var relativeLocations = ["behind","below","between","east","front",
					"inside","left","near","next door","north","right",
					"side","south","up","west"];
	var study = ["biology","chemistry","class","computer science",
					"economics","exam","homework","literature",
					"major","mathematics","question","sociology"];
	var things = ["bag","bed","book","bookshelf","camera","cell phone",
				"chair","chopsticks","clock","clothes","desk","drawer",
				"dictionary","eraser","hat","key","flower","letter","magazine",
				"notebook","pencil","photograph","radio","refrigerator",
				"shoes","spoon","stamp","telephone","TV","umbrella",
				"wallet","window","newspaper"];
	var time = ["the day after tomorrow","evening","Friday","Monday",
				"morning","noon","Saturday","Sunday","Thursday",
				"today","tomorrow","Tuesday","Wednesday","weekend",
				"yesterday"];
	var transportations = ["airplane","bicycle","bus","car","subway",
				"train"];

	var adjective = ["black","blue","cheap","cute","difficult","easy",
				"expensive","pretty","red","white"];
	var verb = actions;
	var nouns = new Array();
	for (var i = 0; i<wordList.length; i++ ){
		if(adjective.indexOf(wordList[i])<0 && verb.indexOf(wordList[i])<0){
			nouns.push(wordList[i]) ;
		}
	}