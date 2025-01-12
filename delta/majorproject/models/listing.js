const mongoose = require('mongoose') //npm i mongoose
const listingschema = new  mongoose.Schema({
    title:{
        type:String,
        
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        // default: 'hello',
        // set:(v)=> v === ""?"default link":v
    },
    price: Number,
    location:String,
    country: String
});

const listing = mongoose.model("listing", listingschema)
module.exports = listing    