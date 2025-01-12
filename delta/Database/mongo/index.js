// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose")

main()
.then(()=>{
    console.log('connection successfull');

}).catch((err)=> console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})


const user = mongoose.model('user', userSchema)


// here we are inserting one data
// const user2 = new user ({
//     name : 'eve',
//     email: "eve@321",
//     age :19
// });

// user2.save().then(
//     (res)=>{
//         console.log(res);
//     }
// ).catch((err)=>console.log(err))

// user.insertMany([
//     {name:'tony', email:'millionaireplayboy@yahoo.in', age: 50},
//     {name:'peter', email:'naieve@yahoo.in', age: 28},
//     {name:'tony', email:'alwaysangry@yahoo.in', age: 47}
// ]).then((res)=>{
//     console.log(res);
// })


// user.find({age: {$gt: 40}})

// user.find({})
// .then((res)=>{
//     for (let i = 0; i< res.length; i++) {
//         console.log(res[i].name)
//     }})
// .catch((err)=> console.log(err))


//update using mongoose 

// user.updateOne({age:47},{name:'bruce'}).then((res)=>{
//     console.log(res);
// })

user.findOneAndUpdate({name: 'bruce'}, {email: 'evergreenhulk@gmail.com'}, {new:true}).then((res)=>{console.log(res);})
// options here is 'new' and returns ths updated document

//eaxctly same functin findById is used to find on the basis of id