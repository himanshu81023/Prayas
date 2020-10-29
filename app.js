const express =  require('express')
require('./src/db/mongodb')
//const userRouter = require('./src/routers/users.js')
const doctorsRouter = require('./src/routers/doctors')
const usersRouter = require('./src/routers/users')
const patientsRouter = require('./src/routers/patients')
const path = require('path')
const hbs = require('hbs')

const app = express()

const dirPath = __dirname
const filePath = __filename 
const port = process.env.PORT

const mainDirectoryPath = path.join(__dirname,'./public')
console.log(mainDirectoryPath)
console.log(dirPath)
console.log(filePath)



// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);
app.use(express.static(mainDirectoryPath))


// app.get('',(req,res)=>{
    
//    res.send("hello")

// })


app.use(express.json())
app.use(doctorsRouter)
app.use(usersRouter)
app.use(patientsRouter)
app.listen(port,()=>{
    console.log('server is up on the' + port )
    
})