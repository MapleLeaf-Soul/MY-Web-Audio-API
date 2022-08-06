var box = $("#box")[0];

var height , width;

var canvassnow = document.createElement("canvas");//canvassnow是雪花飘落
var cts = canvassnow.getContext("2d");
box.appendChild(canvassnow);
var Dots = [];


var canvasbottom = document.createElement("canvas");//canvasbottom是底部频谱
var ctb = canvasbottom.getContext("2d");
box.appendChild(canvasbottom);


var canvaspower = document.createElement("canvas");//canvaspower是中间环绕频谱
var ctp = canvaspower.getContext("2d");
box.appendChild(canvaspower);



var canvascircle = document.createElement("canvas");//canvascircle是中间音量圆圈
var ctc = canvascircle.getContext("2d");
box.appendChild(canvascircle);


var bottomcolor1 = "#00FFFF";
var bottomcolor2 = "#FF80FF";
var bottomcolor = 1 ;


function resize(){//动态设置canvas宽高
	height = box.clientHeight;
	width = box.clientWidth;
	canvasbottom.height = height;
	canvasbottom.width = width;
	var bottomline = ctb.createLinearGradient(0,height,0,height*0.85);
	switch(bottomcolor){
		case 1:
		bottomcolor1 = "#00FFFF";
		bottomcolor2 = "#FF80FF";
		break;
		case 2:
		bottomcolor1 = "#ffff3c";
		bottomcolor2 = "#a94aff";
		break;
		case 3:
		bottomcolor1 = "#ffcaff";
		bottomcolor2 = "#ff5c99";
		break;
		case 4:
		bottomcolor1 = bottomcolor4left;
		bottomcolor2 = bottomcolor4right;
		break;
		
	}
	bottomline.addColorStop(0,bottomcolor1);
	bottomline.addColorStop(1,bottomcolor2);
	ctb.fillStyle = bottomline;
	//button部分
	
	canvassnow.height = height;
	canvassnow.width = width;


	//snow部分
	
	canvascircle.height = height;
	canvascircle.width = width;

	//circle部分
	
	canvaspower.height = height;
	canvaspower.width = width;
	var linepower = ctb.createLinearGradient(0,height,0,height*0.8);

	//power部分
	
	getDots();
	
}
resize();

window.onresize = resize;



function draw(arr){
	var brr = [];
	var ll = 0;
	for(var l = 0; l<300 ; l++){
		ll = parseInt(Math.pow(l,1.175));
		brr[l] = arr[ll];
	}
	var crr = [];
		var k1 = 0;
		var k2 = (300-size)/300;
		var kk = 0;
		for(var k = 0 ; k<300 ; k++){
			k1 = k1+k2;
			if(k1 > 1){
				k1--;
				continue;
			}
			crr[kk] = brr[k];
			kk++;
		}
		//crr
		
	ctb.clearRect(0,0,width,height);
	if(snowtail == false ){
		cts.clearRect(0,0,width,height);
	}else{
		cts.fillStyle="rgba(0,0,0,0.2)";
		cts.rect(0,0,width,height);
		cts.fill();
	}
	ctc.clearRect(0,0,width,height);
	ctp.clearRect(0,0,width,height);
	var w = width/size;
	var v = 0;
	
	var windowsize;
	if(width < height){
		windowsize = width;
	}else{
		windowsize = height;
	}
	var circlesize = windowsize*0.3+(circlechange*1);

	for(var i =0; i < size; i++){
		var o = Dots[i];
		
		var h = crr[i] * height/1000;
		var caph = w * 0.5;
		ctb.fillRect(w * i,height - h,w*0.9,h);
		ctb.fillRect(w * i,height - (o.cap + 1),w*0.9,caph);
		o.cap--;
		if(o.cap < 0){
			o.cap = 0;
		}
		if(h > 0 && o.cap < h + caph){
			o.cap = h + caph;
		}
		//button部分
		
		var r = crr[i] * width/ 8000;
		cts.drawImage(snow,o.x-r/2-10,o.y-r/2-10,r+20+o.alpha*0.05,r+20+o.alpha*0.05);
		if(canvassnowalpha == false){
			cts.globalAlpha = 0;
		}else if(snowalpha == true){
			cts.globalAlpha = o.alpha*0.01;
		}else{
			cts.globalAlpha = 1;
		}
		o.y += o.dy*(snowxdownspeed/1000);
		o.x += o.dx*(snowydownspeed/1000);
		o.y = o.y>height ? 0 : o.y;
		o.x = o.x>width ? 0 : o.x;
		//snow部分
		
		v = v + crr[i];
		//circle部分
		
		ctp.lineWidth = powerWidth/10;
		switch(powercolor){
			case 1:
			ctp.strokeStyle = "#ffffff";
			break;
			case 2:
			ctp.strokeStyle = "#ddb8ff";
			break;
			case 3:
			ctp.strokeStyle = "#ff93bb";
			break;
			case 4:
			ctp.strokeStyle = powercolor4div;
		}
		
		ctp.beginPath();
		ctp.moveTo(width/2, height/2);
		var pow = 360/size;
		if(powersymmetry == false){
			ctp.lineTo(Math.cos((i * pow) / 180 * Math.PI + 90/ 180 * Math.PI) * (circlesize * 0.4 + h) + width/2,
					(- Math.sin((i * pow) / 180 * Math.PI + 90/ 180 * Math.PI) * (circlesize * 0.4 + h) + height/2));
		}else{
			ctp.beginPath();
			ctp.moveTo(width/2, height/2);
			ctp.lineTo(Math.cos((i * pow *0.5) / 180 * Math.PI+ 90/ 180 * Math.PI) * (circlesize * 0.4 + h) + width/2, 
					(- Math.sin((i * pow *0.5) / 180 * Math.PI+ 90/ 180 * Math.PI) * (circlesize * 0.4 + h) + height/2));
			ctp.stroke();
			
			ctp.beginPath();
			ctp.moveTo(width/2, height/2);
			ctp.lineTo(Math.sin((i * pow *0.5) / 180 * Math.PI) * (circlesize * 0.4 + h) + width/2,
					(- Math.cos((i * pow *0.5) / 180 * Math.PI) * (circlesize * 0.4 + h) + height/2));
			ctp.stroke();
		}
		
		if(canvaspoweralpha == false){
			ctp.globalAlpha = 0;
		}else if(poweralpha == true){
			ctp.globalAlpha = o.alpha*0.009+0.1;
		}else{
			ctp.globalAlpha = 1;
		}
		ctp.stroke();

		
		//power部分
	}
	
	var vv = v / size;
	//console.log(v);
	
	ctc.drawImage(circle,width*0.5-circlesize*0.5-vv*0.5,height*0.5-circlesize*0.5-vv*0.5,circlesize+vv,circlesize+vv);
	if(canvascirclealpha == true){
		ctc.globalAlpha = 1;
	}else{
		ctc.globalAlpha = 0;
	}
	//circle部分
	
	/*中心频谱的遮挡圆，已废弃
	ctp.beginPath();
	ctp.lineWidth = 5;
	ctp.arc(width/2, height/2, circlesize*0.4, 0, 2 * Math.PI, false); 
	ctp.fillStyle = "#fff";
	ctp.globalAlpha = 1;
	ctp.stroke();
	ctp.fill();
	*/
}

function random(m,n){
	return Math.round(Math.random()*(n-m)+m);
}//随机数生成

function getDots(){//随机属性
	Dots = [];
	for(var o = 0; o < size; o++){
		var x = random(0,width*1);
		var y = random(0,height*1);
		var alpha = random(0,100);
		Dots.push({
			x:x,
			y:y,
			dy:random(20,100),
			dx:random(1,100),
			alpha:alpha,
			cap:0,//button 顶帽
		});
	}
}