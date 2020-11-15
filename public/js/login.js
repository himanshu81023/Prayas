const login = document.getElementById('login_form')
console.log("working fine   ")

login.addEventListener('submit',(event)=>{
   
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
           //await window.open('/',"_self") // ise hojaye to dekhna
            console.log(data)
         }).cathc((e)=>{
            console.log("unable to login")
             console.log(error)
         })
    })// fetching only get option
})