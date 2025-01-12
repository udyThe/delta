const express = require('express') //npm i express ejs
const app = express()
const port = 3000;
const mongoose = require('mongoose') //npm i mongoose
const path = require('path')
const methodOverride = require('method-override') //npm i methodoverride
const listing = require("./models/listing")
const ejsMate = require("ejs-mate")
const wrapAsync = require('./utils/wrapAsync.js')
const ExpressError = require('./utils/ExpressErrors.js')
app.use(express.urlencoded({ extended: true }));     //allows data parsing

app.use(express.static(path.join(__dirname, 'public')))     //Serve the static files from the public directory
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')    //Set up EJS view engine
app.set('views', path.join(__dirname, 'views'))
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname, "/public")))






main()
    .then(() => {
        console.log('connection successfull');
    }).catch((err) => console.log(err))
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
}


//start your api's here

//index route
app.get('/listings', wrapAsync(async (req, res) => {
    let alllisting = await listing.find()
    res.render('listings/index.ejs', { alllisting })
}))

//new listing
app.get('/listings/new', (req, res) => {
    res.render('listings/new.ejs')
    // res.send('hello')
    // res.send("work")
})

// adding new in db
app.post('/listings', wrapAsync (async(req, res,next) => {
    // if (!req.body.listing) {
        //     throw new ExpressError(400, 'send valid data for listing')
        
        // }
        const newlisting = new listing(req.body)
        await newlisting.save()
        res.redirect("/listings")
}))

//view route
app.get('/listings/:id', wrapAsync(async (req, res) => {
    let showlisting = await listing.findById(req.params.id)
    res.render('listings/show.ejs', { showlisting })
}))


//edit route
app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
    let editlisting = await listing.findById(req.params.id)
    res.render('listings/edit.ejs', { editlisting })
}))

//editlisting in DB
app.put('/listing/:id', wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, 'send valid data for listing')
    }
    let editlisting = await listing.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/listings/${editlisting._id}`)
}))

//delete
app.delete('/listing/:id', wrapAsync(async (req, res) => {
    // let deletee =  await listing.findById(req.params.id) 
    await listing.findByIdAndDelete(req.params.id)
    res.redirect('/listings')
}))


app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"page not found sucker!!! ... sikeeee"))
})
 

app.use((err, req, res, next) => {
    let {statusCode=500, message='something went wrong'}=err;
    // res.status(statusCode).send(message)
    res.status(statusCode).render('error.ejs', {err})
    console.log(statusCode);
    console.log(message);
    
    // res.send('something went wrong!!!')
})



app.listen(port, () => {
    console.log('the server is running at port 3000 ')
})   