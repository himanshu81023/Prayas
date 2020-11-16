const button = document.getElementById("login")

button.addEventListener('click',async (event)=>{
	
	console.log("hello")
	event.preventDefault()
	const info = {
        email: 'complicatedstoryag@gmail.com',
        password:'81023m@@'
    }
	console.log("hi how are you")
    fetch('/users',{
		method='GET',
		headers:{
		  authorization:localStorage.getItem('Token')
		},
		body:JSON.stringify(info),
		
	}).then((response)=>{
		response.json().then((data)=>{
			console.log(data)
			console.log(data.error)
			if(data.error)
			{
				location.href = 'login.html'
			}
			else
			{
				alert("You have already logged in")
			}
		})
	})
})
 // y upar abhi add kiya hain


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
