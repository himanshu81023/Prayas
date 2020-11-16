
//const login = document.querySelector('login_form')
const signup = document.getElementById('signup_form')
// checking wether i acna access token from here or not
console.log(localStorage.getItem("Token"))
console.log(" this is also happening ")


signup.addEventListener('submit',(event)=>{
    const name=document.getElementById("name")
    const email = document.getElementById('exampleInputEmail1')
    const password = document.getElementById('exampleInputPassword1')
    const info = {
        name:name.value,
        email: email.value,
        password:password.value
    }
    event.preventDefault()
    // console.log("hi",info, "hello")
    // console.log("hiiiii ")
    fetch('/signup',{method:'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
         },
         body:JSON.stringify(info)}).then((response)=>{
         response.json().then(async (data) => {
             //await window.open('/',"_self") // ise hojaye to dekhna
             console.log(data)
             localStorage.setItem("Token",data.token)
         }).catch((error)=>{console.log("Unable to signup! Again check out yout credentials")
        console.log(error)})
    })// fetching only get option
})