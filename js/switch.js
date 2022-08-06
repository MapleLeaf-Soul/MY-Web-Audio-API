$("#fileMusicbutton").click(function () {
$("#fileMusic").click();
})

//音量控制
function changeVolume(percent){
	gainNode.gain.value = percent * percent;
}

//$需要引入jquery.js库
$("#volume")[0].onchange = function(){
	changeVolume(this.value/this.max);
	document.getElementById("volumeshow").innerHTML = this.value + "%";
}
$("#volume")[0].onchange();

//数量控制

$("#size")[0].onchange = function(){
	size = this.value ;
	document.getElementById("sizeshow").innerHTML = this.value;
}
$("#size")[0].onchange();

//下落速度
var snowxdownspeed;
$("#snowxdownspeed")[0].onchange = function(){
	snowxdownspeed = this.value ;
	document.getElementById("snowxdownspeedshow").innerHTML = this.value + "%";
}
$("#snowxdownspeed")[0].onchange();

var snowydownspeed;
$("#snowydownspeed")[0].onchange = function(){
	snowydownspeed = this.value ;
	document.getElementById("snowydownspeedshow").innerHTML = this.value + "%";
}
$("#snowydownspeed")[0].onchange();

var powerWidth;
$("#powerWidth")[0].onchange = function(){
	powerWidth = this.value ;
	document.getElementById("powerWidthshow").innerHTML = this.value/10;
}
$("#powerWidth")[0].onchange();

var circlechange;
$("#circle")[0].onchange = function(){
	circlechange = this.value ;
	document.getElementById("circleshow").innerHTML = this.value;
}
$("#circle")[0].onchange();

var snowalpha;
$("#snowalpha")[0].onchange = function(){
	snowalpha = this.checked ;
}
$("#snowalpha")[0].onchange();

var snowtail;
$("#snowtail")[0].onchange = function(){
	snowtail = this.checked ;
}
$("#snowtail")[0].onchange();

var poweralpha;
$("#poweralpha")[0].onchange = function(){
	poweralpha = this.checked ;
}
$("#poweralpha")[0].onchange();

var powersymmetry;
$("#powersymmetry")[0].onchange = function(){
	powersymmetry = this.checked ;
}
$("#powersymmetry")[0].onchange();

var canvasbottomalpha;
$("#canvasbottomalpha")[0].onchange = function(){
	canvasbottomalpha = this.checked ;
	if(canvasbottomalpha == true){
		ctb.globalAlpha = 1;
		document.getElementById("bottomswitch").style.display = "inline-block";
	}else{
		ctb.globalAlpha = 0;
		document.getElementById("bottomswitch").style.display = "none";
	}
}
$("#canvasbottomalpha")[0].onchange();

var canvassnowalpha;
$("#canvassnowalpha")[0].onchange = function(){
	canvassnowalpha = this.checked ;
	if(canvassnowalpha == true){
		document.getElementById("snowswitch").style.display = "inline-block";
	}else{
		document.getElementById("snowswitch").style.display = "none";
	}
}
$("#canvassnowalpha")[0].onchange();

var canvascirclealpha;
$("#canvascirclealpha")[0].onchange = function(){
	canvascirclealpha = this.checked ;
	if(canvascirclealpha == true){
		document.getElementById("circleswitch").style.display = "inline-block";
	}else{
		document.getElementById("circleswitch").style.display = "none";
	}
}
$("#canvascirclealpha")[0].onchange();

var canvaspoweralpha;
$("#canvaspoweralpha")[0].onchange = function(){
	canvaspoweralpha = this.checked ;
	if(canvaspoweralpha == true){
		canvaspower.globalAlpha = 1;
		document.getElementById("powerswitch").style.display = "inline-block";
	}else{
		canvaspower.globalAlpha = 0;
		document.getElementById("powerswitch").style.display = "none";
	}
}
$("#canvaspoweralpha")[0].onchange();


//样式设定
var bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
var bottomcolor = 1 ;

bottomcolor1div.onclick = function(){
	bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
	bottomline.addColorStop(0,"#00FFFF");
	bottomline.addColorStop(1,"#FF80FF");
	ctb.fillStyle = bottomline;
	bottomcolor = 1 ;
}
bottomcolor2div.onclick = function(){
	bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
	bottomline.addColorStop(0,"#ffff3c");
	bottomline.addColorStop(1,"#a94aff");
	ctb.fillStyle = bottomline;
	bottomcolor = 2 ;
}
bottomcolor3div.onclick = function(){
	bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
	bottomline.addColorStop(0,"#ffcaff");
	bottomline.addColorStop(1,"#ff5c99");
	ctb.fillStyle = bottomline;
	bottomcolor = 3 ;
}

var bottomcolor4left = "#000000"
var bottomcolor4right = "#000000"
var bottomcolor4div = document.getElementById("bottomcolor4div");//颜色预览条
var ctbb = bottomcolor4div.getContext("2d");
var bottomline4div = ctbb.createLinearGradient(18,0,251,0);
bottomline4div.addColorStop(0,bottomcolor4left);
bottomline4div.addColorStop(1,bottomcolor4right);
ctbb.fillStyle = bottomline4div;
ctbb.fillRect(0,0,1920,1080);
	
$("#bottomcolor4left")[0].onchange = function(){
	bottomcolor4left = this.value ;
	bottomline4div = ctbb.createLinearGradient(18,0,251,0);
	bottomline4div.addColorStop(0,bottomcolor4left);
	bottomline4div.addColorStop(1,bottomcolor4right);
	ctbb.fillStyle = bottomline4div;
	ctbb.fillRect(0,0,1920,1080);
	bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
	bottomline.addColorStop(0,bottomcolor4left);
	bottomline.addColorStop(1,bottomcolor4right);
	ctb.fillStyle = bottomline;
	bottomcolor = 4;
}
$("#bottomcolor4left")[0].onchange();


$("#bottomcolor4right")[0].onchange = function(){
	bottomcolor4right = this.value ;
	bottomline4div = ctbb.createLinearGradient(18,0,251,0);
	bottomline4div.addColorStop(0,bottomcolor4left);
	bottomline4div.addColorStop(1,bottomcolor4right);
	ctbb.fillStyle = bottomline4div;
	ctbb.fillRect(0,0,1920,1080);
	bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
	bottomline.addColorStop(0,bottomcolor4left);
	bottomline.addColorStop(1,bottomcolor4right);
	ctb.fillStyle = bottomline;
	bottomcolor = 4;
}
$("#bottomcolor4right")[0].onchange();

//default
bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
bottomline.addColorStop(0,"#00FFFF");
bottomline.addColorStop(1,"#FF80FF");
ctb.fillStyle = bottomline;
bottomcolor = 1 ;


var snow=document.getElementById("snow1pic");

snow1div.onclick = function(){
	snow=document.getElementById("snow1pic");
}
snow2div.onclick = function(){
	snow=document.getElementById("snow2pic");
}

$("#snow3div").click(function () {
$("#snow3picupload").click();
})

var snow3pic = document.getElementById("snow3pic"); 
var snow3picupload = document.getElementById("snow3picupload"); 
    snow3picupload.addEventListener('change',snow3picreadFile,false); 
function snow3picreadFile(){ 
    var file = this.files[0]; 
    var reader = new FileReader(); 
    reader.readAsDataURL(file); 
    reader.onload = function(e){ 
		document.getElementById("snow3pic").src = this.result;
		snow = document.getElementById("snow3pic");
    } 
}


var circle=document.getElementById("circle1pic");

circle1div.onclick = function(){
	circle=document.getElementById("circle1pic");
}
circle2div.onclick = function(){
	circle=document.getElementById("circle2pic");
}

$("#circle3div").click(function () {
$("#circle3picupload").click();
})
var circle3pic = document.getElementById("circle3pic"); 
var circle3picupload = document.getElementById("circle3picupload"); 
    circle3picupload.addEventListener('change',circle3picreadFile,false); 
function circle3picreadFile(){ 
    var file = this.files[0]; 
    var reader = new FileReader(); 
    reader.readAsDataURL(file); 
    reader.onload = function(e){ 
		document.getElementById("circle3pic").src = this.result;
		circle = document.getElementById("circle3pic");
    } 
}

var powercolor = 1;
powercolor1div.onclick = function(){
	powercolor = 1 ;
}
powercolor2div.onclick = function(){
	powercolor = 2 ;
}
powercolor3div.onclick = function(){
	powercolor = 3 ;
}
$("#powercolor4div")[0].onchange = function(){
	powercolor4div = this.value ;
	powercolor = 4;
}
$("#powercolor4div")[0].onchange();
powercolor = 1;

var backgroundcolor = "#110011"
$("#backgroundcolor")[0].onchange = function(){
	backgroundcolor = this.value;
	document.getElementById("box").style.backgroundColor = backgroundcolor;
}
$("#backgroundcolor")[0].onchange();