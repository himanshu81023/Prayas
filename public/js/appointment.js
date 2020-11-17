const appointmentForm = document.querySelector('form')
console.log("this is running")
// appointmentForm.addEventListener('submit',(event)=>{
//   const name=document.getElementById("name")
//   const email = document.getElementById('exampleInputEmail1')
//   const password = document.getElementById('exampleInputPassword1')
//   const info = {
//       name:name.value,
//       email: email.value,
//       password:password.value
//   }
//   event.preventDefault()
//   // console.log("hi",info, "hello")
//   // console.log("hiiiii ")
//   fetch('/patients',{method:'POST',
//       headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//        },
//        body:JSON.stringify(info)}).then((response)=>{
//        response.json().then(async (data) => {
//            //await window.open('/',"_self") // ise hojaye to dekhna
//            console.log(data)
//        }).catch((error)=>{console.log("Unable to signup! Again check out yout credentials")
//       console.log(error)})
//   })// fetching only get option
// })

appointmentForm.addEventListener('submit', async (event) => {

  console.log("this event is going on")
  const first_name = document.getElementById('first')
  const last_name = document.getElementById("last")
  const age = document.getElementById("ag")
  const parents_name = document.getElementById('guard')
  const relation = document.getElementById('relate')
  const phone_no = document.getElementById('mob')
  const address = document.getElementById('add')
  const disease = document.getElementById('dis')
  const doctor = document.getElementById('doc')
  const date = document.getElementById('dat')
  const hospital = document.getElementById('hosp')
  const info = {
    first_name: first_name.value,
    last_name: last_name.value,
    age: age.value,
    parents_name: parents_name.value,
    relation: relation.value,
    phone_no: phone_no.value,
    address: address.value,
    disease: disease.value,
    doctor: doctor.value,
    date: date.value,
    hospital: hospital.value
  }

  event.preventDefault()
  t = true
  //  window.history.go(-1)
  fetch('/patients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: "Bearer " + localStorage.getItem('Token')
    },
    body: JSON.stringify(info)
  }).then((response) => {
    response.json().then(async (data) => {
      if (data.error==":please athenticate") {
        t = false
        alert("You are not logged in.")
        location.href = '/'
      }
      //await window.open('/',"_self") // ise hojaye to dekhna
      console.log(data)
      alert("Form  is submitted succesfully! Check Appointment tab for verification!")
      location.href('/')
    }).catch((error) => {
      if (t) {
        alert("Unable to take appointment! Again check out your credential")
      }// console.log("Unable to take appointment! Again check out your credentials")
      // console.log(error)
    })
  })// fetching only get 


})