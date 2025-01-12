// spread - used to make into seperate elemet for the iterable 

// char = 'hello'
// chars = [...char]
// console.log(chars);

// let odd = [1,3,5,7]
// let even = [2,4,6,8]
// let num = [...odd, ...even]
// console.log(num)


// // spread - used to make into seperate elemet for the iterable (object literal)

// const data = {
//     email: "udaysurothiya@gmail.com",
//     password: "uday"
// };
// let odd = [1,3,5,7]
// let char = 'hello'
// let datacopy = {...data, id: 123};
// let numObj = {...odd}; //as the object => key:val....here the value is taken from the array and index is given as key
// let charObj = {...char}; // same here
// console.log(datacopy);
// console.log(numObj);
// console.log(charObj);



//destructuring in array and object 

let names = ["harry","hermione", 'Ron','draco']
let [winner,runnerup, ...others] = names // in this we also applied spread or REST concept,here destructuring is done... variables are defined


const student = {
    name : "uday",
    age: 19,
    school : "bps",
    sub: ['hin','eng','maths','sci'],
    username: 'uday',
    password : 1234
    
};

let {username, password} = student // searches the key 
let {username: user, password:pass, city = 'pune'} = student // searches the key... here on the declaration of pune ... if it was defined in the object then the preference would be given to the object no this, this is usually used for setting default 

