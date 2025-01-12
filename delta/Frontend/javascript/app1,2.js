let firstname = "uday";
if (firstname == "uday"){
    console.log(`welcome ${firstname}`);
}

let colour = "red";
if (colour== "red"){
    console.log("stop");
}
else if (colour== "yellow"){
    console.log("wait");
}
else if (colour== "green"){
    console.log("go");
}
else{
    console.log("Traffic light is broken");
    
}



let str ="abrakadabra"
if (str[0]==='a'&& str.length>3) {
    console.log("good string");
}
else{
    console.log("bad string");
}
    


let colour2 = "red";

switch (colour2) {
    case "red":
        console.log("stop");        
        break;
    case "yellow":
        console.log("wait");
    case "green":
        console.log("go");
    default:
        console.log("Traffic light is broken");
}

// alert("this is an alert");
// console.error("this is an error ");
// console.warn("this is a warn");

// let a = prompt("enter your name");
// let b = prompt("enter your age");
// let x =(`${a} is ${b} years old.`);
// alert(x)


let str2 = prompt("enter your string ");
if ((str2[0]==='a'|| 'A')&& str2.length>5) {
    console.log("golden string");
}
else{
    console.log("not golden string");
}