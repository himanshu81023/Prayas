const login = document.getElementById('login_form')
console.log("working fine   ")

login.addEventListener('submit',async (event)=>{
   
    const email = document.getElementById('exampleInputEmail1')
    const password = document.getElementById('exampleInputPassword1')
    const info = {
        email: email.value,
        password:password.value
    }
    event.preventDefault()
    // console.log("hi",info, "hello")
    // console.log("hiiiii ")
    fetch('/log',{method:'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
         },
         body:JSON.stringify(info)}).then((response)=>{
         response.json().then((data)=>{
        //    window.open('/',"_self") // ise hojaye to dekhna
        window.location.replace('/')   
        console.log(data)
        alert("YOU ARE LOGGED IN")
         }).catch((e)=>{
            console.log("unable to login")
             console.log(error)
         })
    })// fetching only get option
})