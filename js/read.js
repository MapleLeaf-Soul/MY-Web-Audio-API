var ac = new(window.AudioContext||window.webkitAudioContext);//创建音频环境

var source = ac.createBufferSource();  //创建一个空的音源，一般使用该方式，后续将解码的缓冲数据放入source中，直接对source操作。
//var buffer = ac.createBuffer(2, 22050, 44100);  //创建一个双通道、22050帧，44.1k采样率的缓冲数据。


var gainNode = ac[ac.createGain?"createGain":"creatGainNode"]();
gainNode.connect(ac.destination);//控制音量变量

var analyser = ac.createAnalyser();//音频分析
var size = 300;
analyser.fftSize = 2048;
analyser.connect(gainNode);


//读取与播放
var audioInput = document.getElementById("fileMusic"); 
audioInput.onchange = function() {
	//文件长度不为0则真的选中了文件，因为用户点击取消也会触发onchange事件。
	sourcePaly && sourcePaly[sourcePaly.stop?"stop":"noteOff"]();
	if (audioInput.files.length !== 0) {
		source = ac.createBufferSource();
		files = audioInput.files[0]; //得到用户选取的文件
		//文件选定之后，马上用FileReader进行读入
		var fr = new FileReader();
		fr.onload = function(e) {
			fileResult = e.target.result;
			//文件读入完成，进行解码
			ac.decodeAudioData(fileResult, function(buffer) {
				source.buffer = buffer;//将解码出来的数据放入source中
				//转到播放和分析环节
				source.connect(analyser);//连接到分析节点
				//source.connect(gainNode);//连接到音量节点//分析节点已经连接到音量节点上了
				source[source.start?"start":"noteOn"](0);//如果存在则播放
				sourcePaly = source;
				source.loop = true;//循环播放
				//visualizer();//不能重复调用
			}, function(err) {
				alert("解码出现问题"); //解码出错
			});
		};
		fr.onerror = function(err) {
			alert("文件读入出错");    //文件读入出错
		};
		fr.readAsArrayBuffer(files); //同样的，ArrayBuffer方式读取
	}
}; 

var sourcePaly = null;//播放状态属性

//分析模块
function visualizer(){
	var arr = new Uint8Array(analyser.frequencyBinCount);
	requestAnimationFrame = window.requestAnimationFrame ||
							window.webkitRequestAnimationFrame||
							window.mozRequestAnimationFrame;//兼容性
	function v(){
		analyser.getByteFrequencyData(arr);//将分析到的数据导入arr变量
		//console.log(arr);//预览
		draw(arr);
		requestAnimationFrame(v);
	}
	requestAnimationFrame(v);
	
}

visualizer();