//ejs is used for making templates, used to make our page dynamic

const express = require ('express')
const app = express()
const port = 3000
const path = require('path')


// app.get('/roll', (req,res)=>{
    
//     let rolldice = Math.floor(Math.random()*6+1)        //we assume this Value is returned from the database, lets pass it 
//     // res.render('roll.ejs',{num: rolldice})          // we can pass an object it as key ...for our ejs page to use
//     res.render('roll.ejs',{rolldice})          // we can pass single key if we want to name them same
// })

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/public/js')))
app.use(express.static(path.join(__dirname, '/public/css')))
app.set ('views', path.join(__dirname,'/views'))        //used for setting path and joining

app.get('/id/:username',(req,res)=>{
    let {username} = req.params
    console.log(req.params);
    const instaData = require('./data.json')
    const data = instaData[username]
    if (data) {
        res.render('instagram.ejs', {data})
    }
    else{
        res.render('error.ejs')

    }
})







app.listen(port, ()=>{
    console.log(`port is listening at ${port}`);
})