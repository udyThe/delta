const { faker } = require('@faker-js/faker');
const mysql = require('mysql2')
const express = require('express')
const app = express();
const port = 3000;
const path = require('path')
const methodoverride = require("method-override")


app.use(methodoverride('_method'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/views'));


let  getRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ]
}

// console.log(getRandomUser());



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '11998822',
});


// NOTE: to run mysql in the CLI (command line) we can run this command in the terminala and then we can use the mysql in the terminal
// the command is -    /usr/local/mysql/bin/mysql -u root -p.... (not wrking here though , but aisi hi kuch hoti h)

// well found another way for windows (that was for unix), edit the system variable in environment variables, and edit 'path' and create new and paste the bin location of mysql






// Inserting new data

// let q1 = 'insert into user (id, username, email, password) values (?,?,?,?)';
// can replace  multiple ? with single onse if the data that is needed to be stored is given in the form of array as below
// let q1 = 'insert into user (id, username, email, password) values ?';
// let users = [
//     ['123','john','doe"yahoo.com','111'],
//     ['123b','johnb','doe@yahoo.comb','111b'],
//     ['123c','johnc','doe@yahoo.comc','111c'],
//     ['123d','johnd','doe@yahoo.comd','111d']
// ]



// try {
//     connection.query(q1, [data], (err, result) => {
//         if (err) throw err
//         console.log(result);
//     })
// } catch (err) {
//     console.log('error wa this', err);
// }

// connection.end();



app.get('/', (req,res)=>{
    // res.send('welcome to home page');
    let q = 'select count(*) as userrr from user';
    try{
    connection.query(q, (err, result)=>{
        if (err) throw err
        console.log(result)
        res.render('home.ejs', {usercount: result[0].userrr}) 
    })
} catch (err){
    console.log(err);
    res.send('some trouble in DB')
}
})


app.get('/user', (req,res)=>{
    // res.send('welcome to home page');
    let q = 'select * from user';
    try{
    connection.query(q, (err, user)=>{
        if (err) throw err
        // console.log(result)
        res.render('user.ejs', {user})
        // res.render('home.ejs', {usercount: result[0].userrr}) 
    })
} catch (err){
    console.log(err);
    res.send('some trouble in DB')
}
})



//edit username
app.get('/user/:id/edit', (req,res)=>{
    let {id} = req.params
    console.log(req.params);
    let q = `select * from user where id ='${id}'`
    connection.query(q, (err, result) =>{
        if (err) throw err
        console.log(result);
        res.render('edit.ejs', {user: result[0]})
    })
})


//update the new username in db
app.patch('/user/:id', (req,res)=>{
    let {id} = req.params
    let {password: formPass , username: newusername} = req.body
    let q = `select * from user where id ='${id}'`
    connection.query(q, (err, result) =>{
        if (err) throw err
        let user = result[0]
        if (formPass != user.password){
            res.send('WRONG PASSWORD')
        }
        else{
            let q2 = `update user set username = '${newusername}' where  password = '${formPass}'`
            connection.query(q2, (err,result)=>{
                if (err) throw err
                console.log(result);
                res.send('username edited successfully')

            })
             
        } 
    })
})




app.listen(port, ()=> {
    console.log('server is listening at 3000');
})