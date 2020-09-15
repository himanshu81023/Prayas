const express =  require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const dirPath = __dirname
const filePath = __filename 
const port = process.env.PORT||2000

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



app.listen(port,()=>{
    console.log('server is up on the' + 2000 )
    
})