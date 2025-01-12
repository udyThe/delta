for (let a = 1; a <= 10; a++) {
    console.log(a);    
}

// print odd till 15

for (let i = 1; i < 15; i=i+2) {
    console.log(i);
    
}


let fruits = ["mango","apple","banana","litchi"];

for (let i = fruits.length-1; i>0 ; i--) {
    const element = fruits[i];
    console.log(i,element);
}


let heroes = [["ironman","hulk","thor"],["superman","wonderwomen","flash"]]
 
for (let i = 0; i < heroes.length; i++) {
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);        
    }

}


for(i of fruits){
    console.log(i);
}

for(list of heroes){
    for(sname of heroes){
        console.log(sname);
    }
}