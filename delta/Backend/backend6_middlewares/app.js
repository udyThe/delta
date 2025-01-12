const express = require('express') //npm i express ejs
const app = express()
const port = 3000





//defide middleware
app.use((req,res,next)=>{
    console.log('middleware')// middleware works on every request working or not, 
    next();//this is used to forward the execution because this will end after executing the middle.
    console.log('this is after next')// get executed even after the next but its not suggested to do so(not good practice), 
    
})








//start your api's here




app.listen(port, ()=>{
console.log('the server is running at port 3000 ')
})