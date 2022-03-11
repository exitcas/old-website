---
title: script
---
var num="";
var last=num;
var v1="<video autoplay loop muted><source src='";
var v2="' type='video/";
var v3="' /></video>";
var i1="<img src='";var i2="' alt='IMG' />";
/*var x=setInterval(function(){[lo de abajo]}, 1000);*/
function setBkg() {
	num=Math.floor(Math.random()*5);
	if(num==0){
		if(num!=last){
			document.getElementById("link").href="https://pixabay.com/videos/id-19308/";
			document.getElementById("bkg").innerHTML=v1+"/imgs/rio.mp4"+v2+"mp4"+v3;
			last=num;
		}else{
			setBkg();
		}
	}else if(num==1){
		if(num!=last){
			document.getElementById("link").href="https://youtu.be/bJPX5DPsRck";
			document.getElementById("bkg").innerHTML=v1+"/imgs/shroomjak.mp4' type='video/mp4' /></video>";
			last=num;
		}else{
			setBkg();
		}
	}else if(num==2){
		if(num!=last){
			document.getElementById("link").href="https://pixabay.com/photos/clouds-sky-atmosphere-blue-sky-7050884/";
			document.getElementById("bkg").innerHTML=i1+"https://pixabay.com/images/download/clouds-7050884_640.jpg"+i2;
			last=num;
		}else{
			setBkg();
		}
	}else if(num==3){
		if(num!=last){
			document.getElementById("link").href="https://pixabay.com/photos/id-2528359/";
			document.getElementById("bkg").innerHTML=i1+"/imgs/carpincho.jpg"+i2;
			last=num;
		}else{
			setBkg();
		}
	}else if(num==4){
		if(num!=last){
			document.getElementById("link").href="https://www.redbubble.com/es/people/triinamariia/works/15636707-graphic-design-is-my-passion-rainbow-comic-sans";
			document.getElementById("bkg").innerHTML=i1+"https://ih0.redbubble.net/image.82233968.6707/flat,800x800,075,f.jpg"+i2;
			last=num;
		}else{
			setBkg();
		}
	}
}
setBkg();
document.getElementById("sBtxt").innerHTML="Otro fondo";
