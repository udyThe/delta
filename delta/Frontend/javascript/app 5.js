const object_literal = {
    name: 'uday',
    age: 19,
    cgpa:7.3
};

let object_literal1 = {
    price: 100.99,
    discount: 50,
    color: ['red','pink', 'white']
};

const post ={
    username: "@udaysurothiya",
    content: "this is my first post",
    like : 150,
    repost : 5 ,
    tags: ['@delta','apnacollege']

};

post["repost"]
post.repost
let prop = 'repost'
post[prop]

// we can use numbers also as key

object_literal1.price = 23;


let classinfo ={
    aman:{
        grade: 'a',
        city: 'delhi'

    },
    shraddha:{
        grade: 'a+',
        city: 'mumbai'
        
    },
    karan:{
        grade: 'o',
        city: 'pune'
        
    }
}


classinfo.aman.city ='gurgao';



let classinfo1 =[
    {
        name : 'aman',
        grade: 'a',
        city: 'delhi'

    },
    {
        name : 'shraddha',
        grade: 'a+',
        city: 'mumbai'
        
    },
    {
        name : 'karan',
        grade: 'o',
        city: 'pune'
        
    }
]


classinfo1[2].city = 'pilani';


//random integers

let step1 = Math.random()
step1 = step1*10
step1 = Math.floor(step1)
step1 = step1+1

let num = Math.floor(Math.random()*10)+1


//question
// to get the nubers from 0 to 100
Math.floor(Math.random()*100)+1

// to get the nubers from in the range of 5
Math.floor(Math.random()*5 )+1

// to get the nubers from in the range of 21 to 25

Math.floor(Math.random()*5)+21
// this will generate a number from 0 to 5 and 20 will be added to it ...so itll give 21,22,23,24,25



// guessing game
// include hints like smaller and bigger


let max = prompt("enter the max value")
let answer = Math.floor(Math.random()*max)+1

console.log('you have 10 tries');

for (let i= 0; i <10;i++){
    let guess = prompt('try number '+i)
    if (guess>answer){
        console.log('greater, try again');
        if (i ==9){
            console.log('the correct number was '+ answer);
        }
    }
    if (guess<answer){
        console.log('smaller, try again');
        if (i ==9){
            console.log('the correct number was '+ answer);
        }
    }
    if (guess == answer) {
        console.log('congrats u guessed it');
        break
    }
        // else{
        //     console.log('wrong');
        //     if (i ==9){
        //         console.log('the correct number was '+ answer);
        //     }
        // }
}

