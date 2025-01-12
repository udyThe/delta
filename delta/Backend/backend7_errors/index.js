const express = require('express');
const app = express()
const port = 3000

function asyncWrap(fn) {
    return function (req, res, next) {
    fn( req, res, next).catch((err)=>next(err));
    };
}
//     //NEW - Show Route
app.get('/chats/:id', asyncWrap(async (req,res,next)=>{
    let {id}= req.params;
    if(id==76){
        res.send('no chat found')
    }
    else{
        const error = new Error('something is wrong')
        throw error;

    }
}));
// usually this all is uses with async things but as do not have anything as such now so concept is just applied here for understanding


app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send("internal server erroooooooooooor")
})

app.listen(port, ()=>{
    console.log('aap started');
    
})