const express = require("express")
const app = express()

let port = 3000;


// app.use((req, res)=>{
//     console.log('req recieved');
//     let responseee = 'yeeeloooo'
//     res.send(responseee)
// })


app.get('/', (req, res)=> {
    res.send('hello i am g - root')
    
})


app.post('/post', (req, res)=> {
    res.send('you made a post req')
    
})

// app.get('*',(req,res)=>{
//     res.send('link daalni ni aati kya')
// })                                          //link me or kuch aata h jo defined na ho to ye wala execute hojata h


app.get('/:username/:id', (req,res)=>{
    console.log(req.params);
     
    
    res.send('groot again')
})

app.get('/search',(req,res)=>{
    let { q, } = req.query
    res.send(`search resulit for ${q}`)                //the query string is passed    
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);    
})