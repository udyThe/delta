function hello() {
    console.log('hello');
}

hello()

function roll (){
    let result = Math.floor(Math.random()*6)+1
    console.log(result);
}

roll()
roll()

//function with parameter

function name1 (name, age){
    console.log(name,'is my name, my age is',age);
}

name1('uday',19)
name1(19,'name') //this will  still work ...but this is not correct
// order is necessary