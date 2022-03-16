---
title: script
---
var num="";
var last=num;
/*var x=setInterval(function(){[lo de abajo]}, 1000);*/
function vid(src, format) {
	return "<video autoplay loop muted><source src='" + src + "' type='video/" + format + "' /></video>";
}
function img(src) {
	return "<img src='" + src + "' alt='IMG' />";
}
function bkg(source, code) {
	document.getElementById("link").href = source;
	document.getElementById("bkg").innerHTML = code;
}
function setBkg() {
	num=Math.floor(Math.random()*6);
	if(num==0){
		if(num!=last){
			bkg("https://pixabay.com/videos/id-19308/",
			vid("/imgs/rio.mp4", "mp4"));
			last=num;
		}else{
			setBkg();
		}
	}else if(num==1){
		if(num!=last){
			bkg("https://youtu.be/bJPX5DPsRck",
			vid("/imgs/shroomjak.mp4", "mp4"));
			last=num;
		}else{
			setBkg();
		}
	}else if(num==2){
		if(num!=last){
			bkg("https://pixabay.com/photos/clouds-sky-atmosphere-blue-sky-7050884/",
			img("https://pixabay.com/images/download/clouds-7050884_640.jpg"));
			last=num;
		}else{
			setBkg();
		}
	}else if(num==3){
		if(num!=last){
			bkg("https://pixabay.com/photos/id-2528359/",
			img("/imgs/carpincho.jpg"));
			last=num;
		}else{
			setBkg();
		}
	}else if(num==4){
		if(num!=last){
			bkg("https://www.redbubble.com/es/people/triinamariia/works/15636707-graphic-design-is-my-passion-rainbow-comic-sans",
			img("https://ih0.redbubble.net/image.82233968.6707/flat,800x800,075,f.jpg"));
			last=num;
		}else{
			setBkg();
		}
	}else if(num==5){
		if(num!=last){
			bkg("#",
			img("https://duckduckgo.com/i/136017b7.png"));
			last=num;
		}else{
			setBkg();
		}
	}
}
setBkg();
document.getElementById("sBtxt").innerHTML="Otro fondo";
