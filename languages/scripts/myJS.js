
const THEME_BUTTON_NUMBER =15;
var previousWord =0;
var currentWord = 0;
//const TOTAL_WORDS_NUMBER = wordList.length;
var blinkItrvl = 0;
var btnStatus = new Array(THEME_BUTTON_NUMBER);
var wordStatus = new Array(wordList.length);
var categoryStatus=[true,true,true];
for(var i = 0; i< THEME_BUTTON_NUMBER; i++){
	btnStatus[i]=true;
}
for(var i = 0; i< wordStatus.length; i++){
	wordStatus[i]=true;
}


function init(){
	//flip ready
	$("#main").flip();
	blinkItrvl = setInterval(blinkIcon,500);
	$("#main").click(function(){$(".turn_over_prompt_img").fadeIn(0);clearInterval(blinkItrvl);});
	
	//table ready
    $("#alphabet_icon").click(function(){
   		$("#table_div").css("height",$(document).height());
    	$("#table_div").show();

	});
	$("#table_div").click(
		function(){$("#table_div").hide();
	});

	//word area ready
    $("#listIcon").click(function(){
        $("#wordArea").toggle(500);
    });
	$("#wordArea").hide();
	$(window).resize(function(){
		$('#table_div').width(
			($('body').width())>($('#botDeclare').width())? ($('body').width()):($('#botDeclare').width())
		 );
	});

	$("#table_div").hide();


	//theme btn ready
	var themeBtns = document.getElementsByClassName('theme_btn')
	for(var i = 0; i<themeBtns.length; i++){
		themeBtns[i].setAttribute('onmousedown','javascript: downThemeBtn(this)');
		themeBtns[i].setAttribute('onmouseover','javascript: onThemeBtn(this)');
		themeBtns[i].setAttribute('onmouseout','javascript: outThemeBtn(this,'+ i +')');
		themeBtns[i].setAttribute('onmouseup','javascript: upThemeBtn(this,'+ i +')');
	}
	
	//category btn ready.............my poor skill
	var categoryBtns = document.getElementsByClassName('category_btn')
	for(var i = 0; i<categoryBtns.length; i++){
		categoryBtns[i].setAttribute('onclick','javascript: categoryBtnClick(this,'+ i +')');
	}
	
	//change language button ready
	$("#language_switch_btn").mousedown(function(){
		$("#language_switch_btn").fadeTo(0,0.35 );
    });
	$("#language_switch_btn").mouseup(function(){
		$("#language_switch_btn").fadeTo(0,1 );
    });

	//
    $("#main").mouseover(function(){
		$(".turn_over_prompt_img").fadeTo(0,1 );
    });
	$("#main").mouseout(function(){
		$(".turn_over_prompt_img").fadeTo(0,0.5 );
    });

   //generate word list
   for(var i = 1; i<=wordList.length; i++){
   		$("#wordArea").append( "<div style ='width:100px; text-align:center; margin-right:10px; margin-top:5px;"+
   			" float:left;' class = 'wordBtn' id ='w"+(i-1)+"'>"+wordList[i-1]+"</div>" );
   		if(i % 9 == 0 ){
   			$("#wordArea").append( "<br style='clear:both;'/>" );
   		}
   }
   var wordBtns = document.getElementsByClassName('wordBtn');
   for(var i = 0 ; i<wordList.length; i++){
   		wordBtns[i].setAttribute('onclick','javascript: wordOnClick('+i+')');
   }
   
   //set up sentence translation herf
   $("#sentTransIcon").click(function(){window.open(lang_hrefs[LANGUAGE],"_blank" );});


   //make menu btn clickable
    $("#menu-home-btn").click(function(){ location.href="../index.html"; });
    $("#menu-features-btn").click(function(){location.href="../features.html"; });
    $("#menu-contributors-btn").click(function(){ location.href="../contributors.html"; });
    $("#menu-contactus-btn").click(function(){ location.href="../contactus.html"; });
    $("#menu-aboutus-btn").click(function(){window.open("http://www.stonybrook.edu/commcms/llrc/" , '_blank');});
   //make sure that the top menu' size is correct regardless of 
   menuBarResize();
   $(window).resize(function(){ 
   		menuBarResize();
    });


   
	refreshDisplay(); 
}

function menuBarResize(){
    var page_tab_wdith = 1101;
    if($(window).width()>page_tab_wdith){
    	page_tab_wdith = $(window).width();
    }
    $(".page-tab").css("width",page_tab_wdith);
}

function flip(){

}

function downThemeBtn( btn){
	/*
	btn.style.opacity ='0.35';
	btn.style.filter ='alpha(opacity=35)';
	*/
}

function onThemeBtn( btn){
	btn.style.opacity ='1';
	btn.style.filter ='alpha(opacity=100)';
}
function outThemeBtn( btn,btnNum){
	if(!btnStatus[btnNum]){		 
		btn.style.opacity ='0.35';
		btn.style.filter ='alpha(opacity=35)';
	}else{
		
	}
}

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function upThemeBtn( btn,btnNum){
	if(!btnStatus[btnNum]){		//raise btn
		changeTheme(btn.innerHTML,btnNum,true);
	}else{			
		changeTheme(btn.innerHTML,btnNum,false);
	}
}

function categoryBtnClick(btn,btnNum){
	if(!categoryStatus[btnNum]){
		changeTheme(btn.innerHTML,btnNum,true);
	}else{
		changeTheme(btn.innerHTML,btnNum,false);
	}
}

function uplbtn(btn){
	btn.style.opacity ='1';
	btn.style.filter ='alpha(opacity=100)';
	var wordAvailable =searchAvailableWord(currentWord, -1);//prev
	if(wordAvailable != -1){
		changeWord(wordAvailable);
	}
}

function downlbtn(btn){
	btn.style.opacity ='0.5';
	btn.style.filter ='alpha(opacity=50)';
}
function uprbtn(btn){
	btn.style.opacity ='1';
	btn.style.filter ='alpha(opacity=100)';
	var wordAvailable =searchAvailableWord(currentWord, 1); //next
	if(wordAvailable != -1){
		changeWord(wordAvailable);
	}
}

function downrbtn(btn){
	btn.style.opacity ='0.5';
	btn.style.filter ='alpha(opacity=50)';
}

//////////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
function changeTheme(str,btnNum, stat){
	if(str == "Action" || str == "Verb"){  //down verb category btn
		for(var i = 0 ; i< actions.length; i++){
			wordStatus[wordList.indexOf(actions[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_action"),0,stat);
		altCategoryBtn(document.getElementById("category_verb"),2,stat);
		//alert("them: "+btnStatus[0]+"cat:"+categoryStatus[2]);
	}
	if(str == "Animal"){
		for(var i = 0 ; i< animals.length; i++){
			wordStatus[wordList.indexOf(animals[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_animal"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}
	if(str == "Body"){
		for(var i = 0 ; i< body.length; i++){
			wordStatus[wordList.indexOf(body[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_body"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}
	if(str == "Color"){
		for(var i = 0 ; i< colors.length; i++){
			wordStatus[wordList.indexOf(colors[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_color"),3,stat);
		altCategoryBtn(document.getElementById("category_adjective"),0,checkAllAdjective(stat));	
	}
	if(str == "Food/Drink"){
		for(var i = 0 ; i< food.length; i++){
			wordStatus[wordList.indexOf(food[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_food/drink"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}
	if(str == "Nature"){
		for(var i = 0 ; i< nature.length; i++){
			wordStatus[wordList.indexOf(nature[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_nature"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}
	if(str == "Number"){
		for(var i = 0 ; i< numbers.length; i++){
			wordStatus[wordList.indexOf(numbers[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_number"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}
	if(str == "People"){
		for(var i = 0 ; i< people.length; i++){
			wordStatus[wordList.indexOf(people[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_people"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
	}
	if(str == "Place"){
		for(var i = 0 ; i< places.length; i++){
			wordStatus[wordList.indexOf(places[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_place"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
	}
	if(str == "Property"){
		for(var i = 0 ; i< properties.length; i++){
			wordStatus[wordList.indexOf(properties[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_property"),9,stat);
		altCategoryBtn(document.getElementById("category_adjective"),0,checkAllAdjective(stat));	
	}
	if(str == "Study"){
		for(var i = 0 ; i< study.length; i++){
			wordStatus[wordList.indexOf(study[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_study"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
	}
	if(str == "Things"){
		for(var i = 0 ; i< things.length; i++){
			wordStatus[wordList.indexOf(things[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_things"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}
	if(str == "Time"){
		for(var i = 0 ; i< time.length; i++){
			wordStatus[wordList.indexOf(time[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_time"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}

	if(str == "Transportation"){
		for(var i = 0 ; i< transportations.length; i++){
			wordStatus[wordList.indexOf(transportations[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_transportation"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
		
	}
	if(str == "Location"){
		for(var i = 0 ; i< relativeLocations.length; i++){
			wordStatus[wordList.indexOf(relativeLocations[i])] = stat;
		}
		altThemeBtn(document.getElementById("theme_location"),btnNum,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
	}
	if(str == "Adjective"){
		for(var i = 0 ; i< adjective.length; i++){
			wordStatus[wordList.indexOf(adjective[i])] = stat;
		}
		altAllTheme(0,stat);
		altCategoryBtn(document.getElementById("category_adjective"),0,checkAllAdjective(stat));	
	}
	if(str == "Noun"){
		for(var i = 0 ; i< nouns.length; i++){
			wordStatus[wordList.indexOf(nouns[i])] = stat;
		}
		altAllTheme(1,stat);
		altCategoryBtn(document.getElementById("category_noun"),1,checkAllNouns(stat));	
	}
	if(wordStatus[currentWord]==false){
		var wordAvailable = searchAvailableWord(currentWord,1);
		if(wordAvailable != -1){
			changeWord(wordAvailable);
		}else {
			wordAvailable = searchAvailableWord(currentWord,-1);
			if(wordAvailable != -1){
				changeWord(wordAvailable);
			}else{
				alert("No More Words!");
			}
		}
	}

	refreshDisplay();
}

function whichTheme(){
	if(-1<$.inArray(wordList[currentWord],actions)){
		return "Action";
	}
	if(-1<$.inArray(wordList[currentWord],animals)){
		return "Animal";
	}
	if(-1<$.inArray(wordList[currentWord],body)){
		return "Body";
	}
	if(-1<$.inArray(wordList[currentWord],colors)){
		return "Color";
	}
	if(-1<$.inArray(wordList[currentWord],food)){
		return "Food/Drink";
	}
	if(-1<$.inArray(wordList[currentWord],nature)){
		return "Nature";
	}
	if(-1<$.inArray(wordList[currentWord],numbers)){
		return "Number";
	}
	if(-1<$.inArray(wordList[currentWord],people)){
		return "People";
	}
	if(-1<$.inArray(wordList[currentWord],places)){
		return "Place";
	}
	if(-1<$.inArray(wordList[currentWord],properties)){
		return "Property";
	}
	if(-1<$.inArray(wordList[currentWord],relativeLocations)){
		return "Relative Location";
	}
	if(-1<$.inArray(wordList[currentWord],study)){
		return "Study";
	}
	if(-1<$.inArray(wordList[currentWord],things)){
		return "Things";
	}
	if(-1<$.inArray(wordList[currentWord],time)){
		return "Time";
	}
	if(-1<$.inArray(wordList[currentWord],transportations)){
		return "Transportation";
	}
	return "NULL";
}

function whichCategory(){
	if(-1<$.inArray(wordList[currentWord],nouns)){
		return "Noun";
	}
	if(-1<$.inArray(wordList[currentWord],adjective)){
		return "Adjective";
	}
	if(-1<$.inArray(wordList[currentWord],verb)){
		return "Verb";
	}
	return "NULL";
}



function refreshDisplay(){
	//reset previous word
	//if(wordStatus[previousWord]==true){
	//	$('#w' + previousWord).css('background-color','lightgreen');
	//}
	//change current word 
	for(var i = 0 ; i< wordList.length; i++){
		if(wordStatus[i] == true){
			$('#w'+i).css({'background-color':'lightgreen', 'cursor':'pointer'});
		}else if(wordStatus[i] ==false){
			$('#w'+i).css({'background-color':'lightgrey', 'cursor':'default'});
		}
	}
	$('#w' + currentWord).css('background-color','pink');

	$('#flash_card').attr("src",CARD_PATH+wordList[currentWord]+CARD_ENDING);
	$('#card_name').html(wordList[currentWord]);
	//$('#flash_card_back').attr("src",CARD_BACK_PATH+wordList[currentWord]+CARD_BACK_ENDING);
	$('#audio').attr("src",AUDIO_PATH+wordList[currentWord]+AUDIO_ENDING);
	$('#flash_card_back_word').html('<b style="font-size:18px;">'+nativeWords[currentWord]+'</b>');
	$('#flash_card_back_ex1').html(ex1[currentWord]);
	if(LANGUAGE=="japanese"){
		$('#flash_card_back_ex2').html(ex2[currentWord]);
	}else{
		$('#flash_card_back_ex1').css("margin-top",'65px')
	}
	$('#flash_card_back_theme').html(whichTheme());
	$('#flash_card_back_category').html(whichCategory);
}

function changeWord(wordToChange){
	currentWord = wordToChange;
	refreshDisplay();
}

//search available word. k=-1 pre, k=1 next
function searchAvailableWord(current,k){
	var availableWorld = -1;
	while(current < wordList.length && current > -1){
		current += k;
		if(current > wordList.length - 1 || current < 0){
			break;
		}
		if(wordStatus[current] == true){
			availableWorld = current;
			break;
		}
		if(k==0){
			break;
		}
	}
	return availableWorld;
}

function wordOnClick(wordID){
	if(wordStatus[wordID]==true){
		changeWord(wordID);
	}
}


function altThemeBtn(btn,btnNum,stat){
	if(stat){
		btn.style.backgroundImage ='url("img/check_mark.png")';
		btn.style.opacity ='1';
		btn.style.filter ='alpha(opacity=100)';
		btnStatus[btnNum]=true;
	}else{
		btn.style.backgroundImage ='url()';
		btn.style.opacity ='0.35';
		btn.style.filter ='alpha(opacity=35)';
		btnStatus[btnNum]=false;
	}
}

function altCategoryBtn(btn,btnNum,stat){
	if(stat){
		btn.style.opacity ='1';
		btn.style.filter ='alpha(opacity=100)';
		categoryStatus[btnNum]=true;
	}else{
		btn.style.opacity ='0.35';
		btn.style.filter ='alpha(opacity=35)';
		categoryStatus[btnNum]=false;
	}
}

function altAllTheme(catNum,stat){
	if(catNum == 1){
		altThemeBtn(document.getElementById("theme_animal"),1,stat);
		altThemeBtn(document.getElementById("theme_body"),2,stat);
		altThemeBtn(document.getElementById("theme_food/drink"),4,stat);
		altThemeBtn(document.getElementById("theme_nature"),5,stat);
		altThemeBtn(document.getElementById("theme_number"),6,stat);
		altThemeBtn(document.getElementById("theme_people"),7,stat);
		altThemeBtn(document.getElementById("theme_place"),8,stat);
		altThemeBtn(document.getElementById("theme_location"),10,stat);
		altThemeBtn(document.getElementById("theme_study"),11,stat);
		altThemeBtn(document.getElementById("theme_things"),12,stat);
		altThemeBtn(document.getElementById("theme_time"),13,stat);
		altThemeBtn(document.getElementById("theme_transportation"),14,stat);
	}else if(catNum == 0){
		altThemeBtn(document.getElementById("theme_property"),9,stat);
		altThemeBtn(document.getElementById("theme_color"),3,stat);
	}
}

function checkAllNouns(stat){
	return (btnStatus[1]==btnStatus[2] 
		    && btnStatus[2]==btnStatus[4] 
		    && btnStatus[4]== btnStatus[5]
		    && btnStatus[5]== btnStatus[6]  
			&& btnStatus[6]== btnStatus[7]
			&& btnStatus[7]==btnStatus[8]
			&& btnStatus[8]==btnStatus[10] 
			&& btnStatus[10]==btnStatus[11] 
		    && btnStatus[11]==btnStatus[12] 
		    && btnStatus[12]==btnStatus[13] 
		    && btnStatus[13]==btnStatus[14] 
			&& btnStatus[14]==true);
}
function checkAllAdjective(stat){
	return (btnStatus[3]==btnStatus[9] 
			&& btnStatus[9]==true);
}

function backToMap(){
	window.location.href = "../index.html";
}

function blinkIcon(){
	$(".turn_over_prompt_img").fadeOut(200).fadeIn(200);
}

/*
*if(categoryStatus[i]){
*		btn.style.opacity ='0.35';
*		btn.style.filter ='alpha(opacity=35)';
*		categoryStatus[btnNum]=false;
*	}else{
*		btn.style.opacity ='1';
*		btn.style.filter ='alpha(opacity=100)';
*		categoryStatus[btnNum]=true;
*	}
*	
*
*
*/



