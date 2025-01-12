let msg ="   he l  lo    "
console.log(msg.trim())
console.log(msg)

str = "jsdfKMAIDNEndfvnNnnKkLadml"
console.log(str.toLowerCase())
console.log(str.toUpperCase())


// experiment
// alert("you need to login to access this page")
// let a = 1
// while (a<2) {
//     let username = prompt;("enter the username")
//     let password = prompt("the the password")
//     usr=username.trim()
//     pswd=password.trim()
    
//     if (usr.toLowerCase()== 'udythe'&& pswd == 'a8764266968a' ){
//         console.log("welcome master!");
//         a=a+1
//     }
//     else{
//         alert("sorry please try again");
//     }
    
// }

let msgg = 'ilovecoding'
console.log(msgg.charAt(0).toUpperCase()+msgg.slice(1));
console.log(msgg.indexOf("love"))
console.log(msgg.indexOf("Love"))
console.log(msgg.indexOf("o"))

console.log(msg.trim().toUpperCase())

console.log(msgg.slice(1,5));
console.log(msgg.slice(3));
console.log(msgg.slice(-6));

console.log(msgg.replace('love','do'));
console.log(msgg.replace(msgg.charAt(2),msgg.charAt(2).toUpperCase()));
console.log(msgg.repeat(5));



// ARRAY

let student1 = 'aman'
let student2 = 'shraddha'
let student3 = 'uday'
let student = ['aman','shraddha','uday']
let empty = []
console.log(student[0][1],student[1][5],student[2][3]);


let test = [[[2,3],4],[5,6,7],[8,9,0]]
console.log(test[0][0][1],test[2],test[1][2]); 

student.push('xyz')
student.shift()
student.unshift("abc")

console.log(student.concat(test));
console.log(student.reverse());    // makes changes in the roginal array ....no new array is made

//SPLICE
let splicearray = ['aryan','aman','kuku','popo']
splicearray.splice(1,0,'oppo','vivo')

splicearray.sort()      // this is used on strings only ....if appplied on numbers it converts them into strings and sorts according to it


