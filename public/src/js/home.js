function currentTime(){
	var date= new Date();
	var hour=date.getHours();
	var min=date.getMinutes();
	var sec=date.getSeconds();
	hour=updatetime(hour);
	min=updatetime(min);
	sec=updatetime(sec);
	document.getElementById("clock").innerHTML = hour + ":" + min +":" + sec;
	var t=setTimeout(function(){ currentTime() }, 1000);
}
function updatetime(k){
	if(k<10)
		return "0"+k;
	else
		return k;
}

//document.getElementById("clock").innerHTML="learn";
