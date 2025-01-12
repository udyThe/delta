const mongoose = require('mongoose')
const chat = require('./models/chat.js')

main()
    .then(() => {
        console.log('connection successfull');

    }).catch((err) => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}


let allChats = [
    {
        from: 'neha',
        to: 'priya',
        msg: 'what is up is the',
        created_at: new Date()
    },
    {
        from: 'raju',
        to: 'sanjay',
        msg: 'im always good is the',
        created_at: new Date()
    },
    {
        from: 'vinay',
        to: 'ravish',
        msg: 'tell me the best anime',
        created_at: new Date()
    },
    {
        from: 'parth',
        to: 'pandu',
        msg: 'dosent sound right with my name',
        created_at: new Date()
    },
    {
        from: 'gajini',
        to: 'bhai',
        msg: 'oye!! maar daalunga',
        created_at: new Date()
    },
    {
        from: 'voladki',
        to: 'gajhini',
        msg: 'tum jaise logo ki wajah se ladkiyan...',
        created_at: new Date()
    },
]

chat.insertMany(allChats)