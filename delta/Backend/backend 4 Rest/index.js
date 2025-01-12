const express = require("express")
const app = express()
const port = 3000
const path = require ('path')

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')))  //Serve the static files from the public directory

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



let posts = [
    {
        username: 'uday',
        content : 'hello this is uday',
        like : 54
    },
    {
        username: 'pranjal',
        content : 'hello this is pranjals lobby',
        like : 29
    }
]
app.get('/',(req,res)=>{
    res.send('working fine')
})
app.get('/posts',(req,res)=>{
    res.render('index.ejs', {posts})
})
app.get('/posts/new',(req,res)=>{
    res.render('addPost.ejs')
})
app.post('/posts',(req,res)=>{
    let {username, content} = req.body
    // res.render('index.ejs', {posts})
    posts.push({username,content})
    res.redirect('/posts')
})

app.listen(port, ()=>{
    console.log(`the server is running at port ${port} `);
})





