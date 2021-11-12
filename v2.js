var num="";
var last=num;
var v1="<video autoplay loop muted><source src='";
var v2="' type='video/";
var v3="' /></video>";
var i1="<img src='";var i2="' alt='IMG' />";
/*var x=setInterval(function(){[lo de abajo]}, 1000);*/

/* Background setters */
function setA(){
	document.getElementById("link").href="https://pixabay.com/videos/id-19308/";
	document.getElementById("bkg").innerHTML=v1+"imgs/rio.mp4"+v2+"mp4"+v3;
	last=num;
	document.cookie="bkg=A";
}
function setB(){
	document.getElementById("link").href="https://youtu.be/bJPX5DPsRck";
	document.getElementById("bkg").innerHTML=v1+"imgs/shroomjak.mp4' type='video/mp4' /></video>";
	last=num;
	document.cookie="bkg=B";
}
function setC(){
	document.getElementById("link").href="https://twitter.com/XEEKAP/status/1326928987206131713";
	document.getElementById("bkg").innerHTML=i1+"https://pbs.twimg.com/media/Emoy4WDXEAAg8-n.jpg"+i2;
	last=num;
	document.cookie="bkg=C";
}

/* Random background */
function setBkg() {
	num=Math.floor(Math.random()*3);
	if(num==0){
		if(num!=last){
			setA();
		}else{
			setBkg();
		}
	}else if(num==1){
		if(num!=last){
			setB();
		}else{
			setBkg();
		}
	}else if(num==2){
		if(num!=last){
			setC();
		}else{
			setBkg();
		}
	}
}

/* Cookie reader */
if(typeof getCookie("bkg")!=="undefined") {
	setBkg();
}else{
	if(getCookie("bkg")=="A"){
		setA();
	}else if(getCookie("bkg")=="B"){
		setB();
	}else if(getCookie("bkg")=="C"){
		setC();
	}
}
