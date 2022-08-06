var minimenu = document.getElementById('minimenu');
window.document.getElementById("switch").style.display = "none";
var alp = 2500;
var backtime = false ;
var menu = true ;
var switchon = false ;
var switchsize = 0 ;


minimenu.onclick = function(){
	if(menu == true){
		menu = false;
		document.getElementById("switch").style.display = "inline-block";
		alp = 1500;
		switchon = true;
	}else{
		menu = true;
		//document.getElementById("switch").style.display = "none";
		alp = 1500;
		switchon = false;
		}
}
minimenu.onmouseover = function() {
	backtime = true;
}
minimenu.onmouseout = function() {
	backtime = false;
}
//选项控制

var time = setInterval(myTimer, 50);
var time2 = setInterval(myTimer2, 20);

function myTimer() {
	if(backtime == true || switchon == true){
		if(alp<1500)alp = alp + 150;
	}else{
		if(alp>400)alp = alp - 10;
	}
	document.getElementById("minimenu").style.opacity = alp/1000;
	if(alp>1300){
		document.getElementById("minimenu").style.left = 0;
	}else if(alp>600){
		document.getElementById("minimenu").style.left = (alp - 1300)/20 + "px";
	}else{
		document.getElementById("minimenu").style.left = - 35 + "px";
	}
	// -35
	
	if(alp>1600){
		document.getElementById("minimenu").style.transform = "rotate(" + (alp-1600) + "deg)";
		//transform:rotate(50deg)
		document.getElementById("minimenu").style.borderRadius = 10 + (alp-1600)/10 + "px";
		//border-radius: 10px
	}else{
		document.getElementById("minimenu").style.transform = "rotate(" + 0 + "deg)";
		document.getElementById("minimenu").style.borderRadius = 10 + "px";
	}
	//console.log(alp);
	
	document.getElementById("clickhere").style.opacity = (alp-1600)/500;
}
function myTimer2() {
if(switchon == true){
		if(switchsize < 50)switchsize = switchsize+10;
	}else{
		if(switchsize > 0)switchsize = switchsize-10;
		if(switchsize < 1)document.getElementById("switch").style.display = "none";
	}
	var switchsizeheight = Math.pow(switchsize, 1.588591910067779);
	document.getElementById("switch").style.height = Math.trunc(switchsizeheight) + "px";
	document.getElementById("switch").style.width = switchsize*4.72 + "px";
	//选项控制
}