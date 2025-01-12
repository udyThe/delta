const express = require('express') //npm i express ejs
const app = express()
const port = 3000
const mongoose = require('mongoose') //npm i mongoose
const path = require ('path')
const chat = require('./models/chat.js')
const methodOverride = require ("method-override") //npm i methodoverride
//allows data parsing
app.use(express.urlencoded({extended: true}));
//Serve the static files from the public directory
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride("_method"))
//Set up EJS view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))




main()
.then(()=>{
    console.log('connection successfull');

}).catch((err)=> console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}




//Index Route
app.get("/chats", async (req,res)=>{
    let chats = await chat.find();
    res.render('index.ejs', {chats})
})

//new chat route
app.get("/chats/new", (req,res)=>{
    res.render('new.ejs')
})


//create in db route
app.post("/chats",(req,res)=>{
    let{from, msg, to} =req.body;
    let newChat = new chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date()
    });
    // console.log(newChat);
    newChat.save().then((res)=>{console.log("the chat was saved");}).catch((err)=>{console.log("some error -> ", err);})
    res.redirect("/chats")
})
 
// EDIT THE EXISTING CHAT

//post method wala tareeka
app.post("/chats/edit",  async (req,res)=>{
    let {id} = req.body;
    let editchat =  await chat.findOne({_id: id})
    // console.log(editchat);
    

    res.render('edit.ejs', {editchat})
    // res.send("working")
})


// // get method wala tareeka
// app.get("/chats/:id/edit", async (req,res)=>{
//     let {id} = req.params;
//     // let editchat =  await chat.findOne({_id: id})    //passed ID as parameter to search 
//     let editchat =  await chat.findById(id)
//     res.render('edit.ejs', {editchat})
// })

// UPDATING IN DB
app.patch("/chats", async (req,res)=>{
    let {id, msg} = req.body;
    // await chat.updateOne({_id: id}, {msg:msg} )
    try{

        let updatedchat =  await chat.findByIdAndUpdate(id,{msg:msg},{runValidators: true, new:true}) //this allows to check for valid input only earlier we could update and violate the model or schema, new returns the new updated chat
        console.log("the chat was edited");
        console.log(updatedchat.msg);
    } catch(err){console.log(err)}
    res.redirect('/chats')
})


//DELETE CHAT

app.delete("/chats/:id/delete", async (req,res)=>{
    let {id} = req.params;
    await chat.findByIdAndDelete(id).then((res)=>{console.log("the chat was deleted")});
    res.redirect('/chats')
})






app.listen(port, ()=>{
console.log('the server is running at port 3000 ')
} )
 
