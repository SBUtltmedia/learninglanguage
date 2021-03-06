var nativeWords = [
				"비행기",//"airplane",
				"사과",//"apple",
				"가방", //"bag",
				"바나나",//"banana",
				"은행", //"bank",
				"침대",//"bed",
				"뒤",//"behind",
				"아래,밑",//"below",
				"사이,가운데,중간",//"between",
				"자전거",//"bicycle",

				"생물학",//"biology",
				"검다・(검은)・검어요",//"black",
				"파랗다・(파란)・파래요",//"blue",
				"책",//"book",
				"책장",//"bookshelf",

				"빵",//"bread",
				"버스",//"bus",
				"카메라",//"camera",
				"차,자동차",//"car",
				"당근",//"carrot",
				"고양이",//"cat",

				"휴대전화,핸드폰",//"cell phone",
				"의자",//"chair",
				"싸다・싸요",//"cheap",
				"화학",//"chemistry",

				"젓가락",//"chopsticks",
				"수업",//class",
				"시계",//"clock",
				"옷",//"clothes",

				"컴퓨터과학",//"computer science",
				"소",//"cow",
				"귀엽다・귀여워요",//"cute",
				"백화점",//"department store",

				"책상",//"desk",
				"사전",//"dictionary",
				"어렵다・어려워요",//"difficult",
				"개(강아지)",//"dog",
				"기숙사",//"dormitory",

				"서랍",//"drawer",
				"귀",//"ear",
				"동(쪽)",//"east",
				"간단하다・간단해요",//"easy",
				"경제학",//"economics",
				"팔,여덟",//"eight",

				"지우개",//"eraser",
				"저녁",//"evening",
				"시험",//"exam",
				"비싸다・비싸요",//"expensive",
				"눈",//"eye",
				"아빠,아버지",//"father",

				"불",//"fire",
				"다섯",//"five",
				"꽃",//"flower",
				"발",//"foot",
				"넷",//"four",
				"금요일",//"Friday",

				"친구",//"friend",
				"앞",//"front",
				"피망",//"green pepper",
				"손",//"hand",
				"모자",//"hat",

				"(자기가 사는곳)집",//"home",
				"숙제",//"homework",
				"말",//"horse",
				"병원",//"hospital",
				"백",//"hundred",

				"안",//"inside",
				"사거리",//"intersection",
				"키",//"key",
				"왼쪽",//"left",
				"편지",//"letter",

				"도서관",//"library",
				"문학",//"literature",
				"잡지",//"magazine",
				"전공",//"major",
				"남자",//"man",

				"수학",//"mathematics",
				"월요일",//"Monday",
				"원숭이",//"monkey",
				"달",//"moon",
				"아침",//"morning",

				"엄마,어머니",//"mother",
				"산",//"mountain",
				"입",//"mouth",
				"영화관",//"movie theater",
				"근처,가까이",//"near",

				"신문",//"newspaper",
				"이웃",//"next door",
				"아홉",//"nine",
				"낮,정오,점심",//"noon",
				"북(쪽)",//"north",
				"코",//"nose",

				"공책",//"notebook",
				"형,형님",//"older brother",
				"누나,누님",//"older sister",
				"하나",//"one",

				"오렌지",//"orange",
				"공원",//"park",
				"주차장",//"parking lot",
				"연필",//"pencil",
				"사진",//"photograph",

				"우체국",//"post office",
				"예쁘다・예뻐요",//"pretty",
				"질문",//"question",
				"토끼",//"rabbit",
				"라디오",//"radio",

				"비",//"rain",
				"빨갛다・(빨간)・빨개요",//"red",
				"냉장고",//"refrigerator",
				"음식점・레스토랑",//"restaurant",
				"밥",//"rice",

				"오른쪽",//"right",
				"강",//"river",
				"토요일",//"Saturday",
				"학교",//"school",
				"바다",//"sea",
				"일곱",//"seven",

				"신발",//"shoes",
				"옆",//"side",
				"여섯",//"six",
				"눈",//"snow",
				"사회학",//"sociology",
				"흙",//"soil",

				"남(쪽)",//"south",
				"스푼",//"spoon",
				"우표",//"stamp",
				"딸기",//"strawberry",
				"학생",//"student",

				"지하철",//"subway",
				"해",//"sun",
				"일요일",//"Sunday",
				"홍차",//"tea",
				"선생(님)",//"teacher",
				"전화기",//"telephone",

				"열",//"ten",
				"천",//"thousand",
				"삼,셋",//"three",

				"오늘",//"today",
				"목요일",//"Thursday",
				"사다・사요",//"to buy",
				"오다・와요",//"to come",
				"마시다・마셔요",//"to drink",

				"먹다・먹어요",//"to eat",
				"가다・가요",//"to go",
				"보다・봐요",//"to look",
				"내일",//"tomorrow",

				"읽다・읽어요",//"to read",
				"팔다・팔아요",//"to sell",
				"부르다・불러요",//"to sing",
				"공부하다・공부해요",//"to study",
				"자다・자요",//"to sleep",
				"수영하다・수영해요",//"to swim",

				"쓰다・써요",//"to write",
				"기차",//"train",
				"기차역",//"train station",
				"나무",//"tree",
				"화요일",//"Tuesday",

				"텔레비전,티비",//"TV",
				"두울",//"two",
				"우산",//"umbrella",
				"위",//"up",
				"지갑",//"wallet",
				"물",//"water",

				"수요일",//"Wednesday",
				"주말",//"weekend",
				"서(쪽)",//"west",
				"하얗다・(하얀)・하얘요",//"white",
				"바람",//"wind",
				"창문",//"window",

				"여자",//"woman",
				"어제",//"yesterday",
				"남동생",//"younger brother",

				"여동생",//"younger sister",
				"영",//"zero",
				"동물원",//"zoo",
				"내일모레",//"the day after tomorrow"
				];

var ex1 = [
				"플로리다에 비행기로 갔어요",//"airplane",
				"사과하고 바나나",//"apple",
				"큰 가방이네요.",//"bag",
				"매일 바나나를 먹어요",//"banana",
				"어제 은행에 갔어요",//"bank",

				"침대에서 자요?",//"bed",
				"상자뒤에 공이 있어요",//"behind",
				"아래(밑)를 보세요",//"below",
				"은행과 서점의 사이에 있어요",//"between",
				"자전거를 타요",//"bicycle",

				"생물학은 재미있어요",//"biology",
				"검은새",//"black",
				"파란 하늘",//"blue",
				"이 책은 제 거에요",//"book",
				"책장에 책 백 권이 있어요",//"bookshelf",

				"빵하고 커피",//"bread",
				"버스로 대학교에 가요",//"bus",
				"좋은 카메라네요.",//"camera",
				"차로 학교에 가요",//"car",
				"당근은 싫어해요",//"carrot",
				"고양이가 의자 위에 있어요",//"cat",

				"새 휴대전화를 가지고 싶어요",//"cell phone",
				"거기 의자에 앉으세요",//"chair",
				"싼 가방",//"cheap",
				"형의 전공은 화학이에요",//"chemistry",

				"젓가락을 써요",//"chopsticks",
				"오늘은 수업이 3개 있어요",//"class",
				"저 시계는 정확해요?",//"clock",
				"옷을 샀어요",//"clothes",

				"컴퓨터공학 수업을 들어요",//"computer science",
				"소가 커요",//"cow",
				"귀여운 개(강아지)",//"cute",
				"백화점에 갈래요?",//"department store",

				"방에 책상이 있어요",//"desk",
				"사전을 써도 돼요.",//"dictionary",
				"어려운 시험",//"difficult",
				"개가 잘 놀아요",//"dog",
				"기숙사에 살아요",//"dormitory",

				"책상 서랍",//"drawer",
				"귀가 아파요",//"ear",
				"기차역의 동쪽에 서점이 있어요",//"east",
				"간단한 시험",//"easy",
				"경제학은 재미있어요",//"economics",
				"팔월에는 하와이에 가요",//"eight",

				"지우개를 빌려 주세요.",//"eraser",
				"내일저녁은 영화를 볼 거예요",//"evening",
				"수학시험을 봤어요",//"exam",
				"비싼 가방",//"expensive",
				"사라씨는 눈이 예뻐요",//"eye",
				"제 아버지는 수학 선생님이세요",//"father",

				"촛불",//"fire",
				"다섯명이 노래를 불렀어요",//"five",
				"꽃이 피었습니다.",//"flower",
				"발이 아파요",//"foot",
				"펜이 네 자루 있어요",//"four",
				"금요일은 수업이 없어요",//"Friday",

				"친구하고 같이 걸었어요",//"friend",
				"상자 앞에 공이 있어요",//"front",
				"피망은 잘 안 먹어요",//"green pepper",
				"손을 씻었어요?",//"hand",
				"귀여운 모자네요!",//"hat",

				"집에서 쉬세요",//"home",
				"숙제가 많이 있어요",//"homework",
				"말이 달려요",//"horse",
				"병원에 갈 거예요",//"hospital",
				"모두 100원이에요.",//"hundred",

				"상자 안에 공이 있어요",//"inside",
				"사거리에서 기다려 주세요.",//"intersection",
				"이것은 저희 집 열쇠예요",//"key",
				"저기서 왼쪽으로 도세요",//"left",
				"할머니께 편지를 쓸 거예요",//"letter",

				"도서관에서 공부해요",//"library",
				"문학을 아주 좋아해요",//"literature",
				"잡지는 자주 안 읽어요",//"magazine",
				"전공은 뭐예요?",//"major",
				"남자와 여자",//"man",

				"수학은 조금 어려워요",//"mathematics",
				"월요일은 시험이 있어요",//"Monday",
				"원숭이는 똑똑해요",//"monkey",
				"달이 예쁘네요",//"moon",
				"아침에 샤워를 해요",//"morning",

				"제 어머니는 은행에서 일하세요",//"mother",
				"한국은 산이 많아요",//"mountain",
				"입에 음식이 있어요.",//"mouth",
				"극장에서 영화를 봤어요",//"movie theater",
				"집 근처에 서점이 있어요",//"near",

				"매일 신문을 읽어요",//"newspaper",
				"저희 집 옆에 있어요",//"next door",
				"학생이 아홉 명 있어요",//"nine",
				"점심 어디서 먹어요?",//"noon",
				"대학교 북쪽에 기차역이 있어요",//"north",
				"형은 코가 커요",//"nose",

				"공책을 다섯 권 샀어요",//"notebook",
				"제 형은 대학교 4학년이에요",//"older brother",
				"제 누나는 뉴욕에 살아요",//"older sister",
				"사과 하나를 먹었어요",//"one",

				"오렌지와 키위",//"orange",
				"공원에서 한시간 걸었어요",//"park",
				"주차장은 어디예요?",//"parking lot",
				"연필로 썼어요",//"pencil",
				"아빠와 엄마의 사진을 찍었어요.",//"photograph",

				"우체국에서 우표를 샀어요.",//"post office",
				"예쁜 꽃",//"pretty",
				"질문이 있어요?",//"question",
				"토끼는 귀여워요",//"rabbit",
				"가끔 라디오를 들어요",//"radio",

				"유월은 자주 비가 내려요",//"rain",
				"빨간 스웨터",//"red",
				"큰 냉장고를 샀어요",//"refrigerator",
				"음식점에는 잘 안 가요.",//"restaurant",
				"밥을 먹어요",//"rice",

				"저기서 오른쪽으로 도세요",//"right",
				"강에서 낚시를 해요",//"river",
				"토요일에 일하지 않아요",//"Saturday",
				"학교에 가요",//"school",
				"바다에서 수영해요",//"sea",
				"개가 일곱 마리 있어요",//"seven",

				"쇼핑몰에서 신발을 샀어요",//"shoes",
				"상자 옆에 공이 있어요",//"side",
				"여동생은 여섯살이에요",//"six",
				"내일은 눈이 올 거예요",//"snow",
				"사회학은 재미있어요",//"sociology",
				"흙과 물이 필요해요.",//"soil",

				"기차역의 남쪽에 대학교가 있어요",//"south",
				"숟가락으로 먹어요?",//"spoon",
				"우표를 스무장 샀어요",//"stamp",
				"딸기를 매우 좋아해요",//"strawberry",
				"저는 학생이에요",//"student",

				"지하철을 자주 타요",//"subway",
				"해가 구름 뒤에 있어요",//"sun",
				"일요일은 집에서 쉬어요",//"Sunday",
				"홍차를 마실래요?",//"tea",
				"선생님은 친절해요",//"teacher",
				"전화기를 안 써요",//"telephone",

				"자동차가 열 대 있어요",//"ten",
				"이 책은 1000원이었어요.",//"thousand",
				"여동생은 3학년이에요",//"three",

				"오늘은 뭐 할까요?",//"today",
				"목요일은 바빠요",//"Thursday",
				"사과를 샀어요",//"to buy",
				"누가 왔어요",//"to come",
				"아침에 우유를 마셔요",//"to drink",

				"점심에 샌드위치를 먹어요",//"to eat",
				"영수 씨가 수업에 갔어요",//"to go",
				"잘 보세요",//"to look",
				"내일 일해요",//"tomorrow",

				"책 읽기가 좋아요",//"to read",
				"사과를 팔았어요",//"to sell",
				"노래를 불러요",//"to sing",
				"수학을 공부해요",//"to study",
				"어제밤에 일찍 잤어요",//"to sleep",
				"수영하기 좋아해요",//"to swim",

				"자주 편지를 써요",//"to write",
				"기차로 가요",//"train",
				"기차역에서 만나요",//"train station",
				"벗꽃 나무 한 그루가 있어요",//"tree",
				"화요일에 시간 있어요?",//"Tuesday",

				"텔레비전을 봐요?",//"TV",
				"공책을 두권 샀어요",//"two",
				"우산을 가지고 갈 거예요",//"umbrella",
				"위를 보세요",//"up",
				"지갑을 잃어 버렸어요.",//"wallet",
				"물이 모자라요",//"water",

				"수요일에 면접이 있어요",//"Wednesday",
				"주말에 뭐 해요?",//"weekend",
				"스페인은 프랑스의 서쪽에 있어요",//"west",
				"하얀 자동차",//"white",
				"오늘은 바람이 강해요",//"wind",
				"창문을 열어요",//"window",

				"여자와 남자",//"woman",
				"어제 뭐 했어요?",//"yesterday",
				"제 남동생은 고등학생이에요",//"younger brother",

				"제 여동생은 피아노를 쳐요",//"younger sister",
				"시험에서 영점(빵점)을 받았어요",//"zero",
				"동물원에 가지 않을래요?",//"zoo",
				"내일모레는 쉴 거예요",//	"the day after tomorrow"
				];
/**
var ex2 = [
				"フロリダにひこうきでいきました。",//"airplane",
				"りんごとバナナ",//"apple",
				"おおきいかばんですね。",//"bag",
				"まいちにバナナをたべます。",//"banana",
				"きのうぎんこうにいきました。",//"bank",

				"へやにベッドがあります。",//"bed",
				"はこのうしろにボールがあります。",//"behind",
				"したをみてください。",//"below",
				"ぎんこうとほんやのあいだです。",//"between",
				"じてんしゃにのります。",//"bicycle",

				"せいぶつがくはおもしろいです。",//"biology",
				"くろいとり",//"black",
				"あおいそら",//"blue",
				"このほんはわたしのです。",//"book",
				"ほんだなはつくえのよこにあります。",//"bookshelf",

				"パンとコーヒー",//"bread",
				"バスでだいがくにいきます。",//"bus",
				"いいカメラですね。",//"camera",
				"だいがくにはくるまでいきます。",//"car",
				"にんじんはきらいです。",//"carrot",
				"ねこはかわいいです。",//"cat",

				"あたらしいけいたいがほしいです。",//"cell phone",
				"そのいすにすわってください。",//"chair",
				"やすいかばん",//"cheap",
				"あにのせんこうはかがくです。",//"chemistry",

				"はしでたべます。",//"chopsticks",
				"きょうはクラスがみっつあります。",//"class",
				"あのとけいはただしいですか。",//"clock",
				"ようふくをかいました。",//"clothes",

				"コンピューターかがくをとります。",//"computer science",
				"あのうしはおおきいです。",//"cow",
				"かわいいいぬ",//"cute",
				"デパートにいきませんか。",//"department store",

				"へやにつくえがあります。",//"desk",
				"じしょをつかってもいいですよ。",//"dictionary",
				"むずかしいしけん",//"difficult",
				"いぬはよくあそびます。",//"dog",
				"りょうにすんでいます。",//"dormitory",

				"つくえのひきだし",//"drawer",
				"みみがいたいです。",//"ear",
				"えきのひがしにほんやがあります。",//"east",
				"かんたんなしけん",//"easy",
				"けいざいがくはおもしろいです。",//"economics",
				"はちがつにハワイにいきます。",//"eight",

				"けしゴムをかしてくれませんか。",//"eraser",
				"あしたのばんはえいがをみます。",//"evening",
				"すうがくのしけんをうけました。",//"exam",
				"たかいかばん",//"expensive",
				"ようこさんはめがきれいです。",//"eye",
				"わたしのちちとトムさんのおとうさん",//"father",

				"ろうそくのひ",//"fire",
				"ごにんでうたいました。",//"five",
				"はながさきました。",//"flower",
				"あしがいたいです。",//"foot",
				"ペンがよんほんあります。",//"four",
				"きんようびはクラスがありません。",//"Friday",

				"ともだちとあるきました。",//"friend",
				"はこのまえにボールがあります。",//"front",
				"ピーマンはあまりたべません。",//"green pepper",
				"てをあらいましたか。",//"hand",
				"かわいいぼうしですね。",//"hat",

				"うちでやすんでください。",//"home",
				"しゅくだいがたくさんあります。",//"homework",
				"うまにのります。",//"horse",
				"びょういんにいきます。",//"hospital",
				"なんでもひゃくえんです。",//"hundred",

				"はこのなかにボールがあります。",//"inside",
				"こうさてんでとまってください。",//"intersection",
				"これはわたしのうちのかぎです。",//"key",
				"あそこをひだりにまがってください。",//"left",
				"そぼにてがみをかきます。",//"letter",

				"としょかんでべんきょうします。",//"library",
				"ぶんがくがだいすきです。",//"literature",
				"ざっしはあまりよみません。",//"magazine",
				"せんこうはなんですか。",//"major",
				"おとこのひととおんなのひと",//"man",

				"すうがくはちょっとむずかしいです。",//"mathematics",
				"げつようびにはしけんがあります。",//"Monday",
				"さるはあたまがいいです。",//"monkey",
				"つきがきれいですね。",//"moon",
				"あさ、シャワーをあびます。",//"morning",

				"わたしのははとトムさんのおかあさん",//"mother",
				"にほんはやまがおおいです。",//"mountain",
				"くちをあけてください。",//"mouth",
				"えいがかんでえいがをみました。",//"movie theater",
				"うちのちかくにほんやがあります。",//"near",

				"まいにちしんぶんをよみます。",//"newspaper",
				"うちのとなりです。",//"next door",
				"がくせいがきゅうにんいます。",//"nine",
				"ひるはそとにいます。",//"noon",
				"だいがくのきたにえきがあります。",//"north",
				"あにははながおおきいです。",//"nose",

				"ノートをごさつかいました。",//"notebook",
				"わたしのあにとトムさんのおにいさん",//"older brother",
				"わたしのあねとトムさんのおねえさん",//"older sister",
				"トムさんはクラスでいちばんです。",//"one",

				"オレンジとキウイ",//"orange",
				"こうえんでいちじかんあるきました。",//"park",
				"ちゅうしゃじょうはどこですか。",//"parking lot",
				"えんぴつでかきました。",//"pencil",
				"ちちとははのしゃしんをとりました。",//"photograph",

				"ゆうびんきょくできってをかいました。",//"post office",
				"きれいなはな",//"pretty",
				"しつもんがあります。",//"question",
				"うさぎはかわいいです。",//"rabbit",
				"ときどきラジオをききます。",//"radio",

				"ろくがつはよくあめがふります。",//"rain",
				"あかいセーター",//"red",
				"おおきいれいぞうこをかいました。",//"refrigerator",
				"レストランにはあまりいきません。。",//"restaurant",
				"ごはんをたべます。",//"rice",

				"あそこをみぎにまがってください。",//"right",
				"かわでつりをします。",//"river",
				"どようびはしごとをしません。",//"Saturday",
				"がっこうにいきます。",//"school",
				"うみでおよぎます。",//"sea",
				"いぬがななひきいます。",//"seven",

				"モールでくつをかいました。",//"shoes",
				"はこのよこにボールがあります。",//"side",
				"いもうとはろくさいです。",//"six",
				"あすはゆきでしょう。",//"snow",
				"しゃかいがくはおもしろいです。",//"sociology",
				"つちとみずがいります。",//"soil",

				"えきのみなみにだいがくがあります。",//"south",
				"スプーンでたべるんですか。",//"spoon",
				"きってを２０まいかいました。",//"stamp",
				"いちごがだいすきです。",//"strawberry",
				"すうがくのがくせい",//"student",

				"よくちかてつにのります。",//"subway",
				"まいにち、ひがのぼります。",//"sun",
				"にちようびはうちでゆっくりします。",//"Sunday",
				"こうちゃをのみませんか。",//"tea",
				"せんせいはやさしいです。",//"teacher",
				"でんわはあまりつかいません。",//"telephone",

				"くるまがじゅうだいあります。",//"ten",
				"このほんはせんえんでした。",//"thousand",
				"もうさんねんせいです。",//"three",

				"きょうはなにをしましょうか。",//"today",
				"もくようびはいそがしいです。",//"Thursday",
				"りんごをかいました。",//"to buy",
				"だれかきましたよ。",//"to come",
				"あさ、ぎゅうにゅうをのみます。",//"to drink",

				"ひるはサンドイッチをたべます。",//"to eat",
				"ようこさんはクラスにいきました。",//"to go",
				"よくみてください。",//"to look",
				"あしたはしごとです。",//"tomorrow",

				"ほんをよむのがすきです。",//"to read",
				"りんごをうりました。",//"to sell",
				"うたをうたいましょう。",//"to sing",
				"すうがくをべんきょうします。",//"to study",
				"きのうのばんははやくねました。",//"to sleep",
				"およぐのがすきです。",//"to swim",

				"よくてがみをかきます。",//"to write",
				"でんしゃでいきましょう。",//"train",
				"えきであいましょう。",//"train station",
				"あそこにさくらのきがあります。",//"tree",
				"かようびはひまですか。",//"Tuesday",

				"テレビをみますか。",//"TV",
				"ノートをにさつかいました。",//"two",
				"かさをもっていきます。",//"umbrella",
				"うえをみてください。",//"up",
				"さいふをなくしました。",//"wallet",
				"みずがたりません。",//"water",

				"すいようびはめんせつがあります。",//"Wednesday",
				"しゅうまはなにをしますか。",//"weekend",
				"スペインはフランスのにしにあります。",//"west",
				"しろいくるま",//"white",
				"きょうはかぜがつよいです。",//"wind",
				"まどをあけましょう。",//"window",

				"おんなのひととおとこのひと",//"woman",
				"きのうはなにをしましたか。",//"yesterday",
				"おとうとはこうこうせいです。",//"younger brother",

				"いもうとはピアノをひきます。",//"younger sister",
				"テストでゼロてんをとりました。",//"zero",
				"どうぶつえんにいきませんか。",//"zoo",
				"あさってはやすみます。",//"the day after tomorrow"
				];


**/

