
$( document ).ready(function() {
    //make menu btn clickable
    $("#menu-home-btn").click(function(){ location.href="./index.html"; });
    $("#menu-features-btn").click(function(){location.href="./features.html"; });
    $("#menu-contributors-btn").click(function(){ location.href="./contributors.html"; });
    $("#menu-contactus-btn").click(function(){ location.href="./contactus.html"; });
    $("#menu-aboutus-btn").click(function(){window.open("http://www.stonybrook.edu/commcms/llrc/" , '_blank');});
    //make sure that the top menu' size is correct regardless of 
   menuBarResize();
   $(window).resize(function(){ 
        menuBarResize();
    });
});

function menuBarResize(){
    var page_tab_wdith = 1101;
    if($(window).width()>page_tab_wdith){
        page_tab_wdith = $(window).width();
    }
    $(".page-tab").css("width",page_tab_wdith);
}

    //obfuscate algorithm, for moving around the map
function shift(e,ele){
    var x = e.clientX - ele.offsetLeft;
    var y = e.clientY - ele.offsetTop;
    var coor = "Coordinates: (" + x + "," + y + ")";
    var eleWidth =ele.offsetWidth;
    var eleHeight = ele.offsetHeight;
    var centerX = eleWidth / 2;
    var centerY =  eleHeight  / 2;
    var oriLeft = -35;
    var oriTop = -15;
    var dx = centerX - x;
    var dy = centerY - y;
    dx = dx / centerX * oriLeft * -0.6 -29;
    dy = dy / centerY * oriTop * -1  -15;
    var mapDiv = document.getElementById("worldmap");
	mapDiv.style.left= dx+"px";
    mapDiv.style.top=dy+"px";
}

function cLangBtn(lang){
	var flagImg = document.getElementById(lang+"Flag");
	flagImg.style.border = "1px solid #ffffff";
	flagImg.style.boxShadow = "1px 1px 20px #ffffff";
}
function oLangBtn(lang){
	var flagImg = document.getElementById(lang+"Flag");
	flagImg.style.border = "";
	flagImg.style.boxShadow = ""; 
}
