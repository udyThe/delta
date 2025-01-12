let a = [2,3,4,5,6]
let n = 3
console.log(a.slice(0,n));
console.log(a.slice(-n));
console.log(a.length);


ab = 'aMan'
b= ab.length
if (b>0) {
    console.log('the string is not empty');
    
} else {
    console.log("the string is empty");
}
m=1
if (ab[m]==ab[m].toLowerCase()) {
    console.log('the letter is lower case');
} else {
    console.log('the letter is upper case');
}

console.log(ab.trim());


let arrays = ['uday','ayush','namit bhadwa']
input = 'ayush'
b = arrays.indexOf(input)
if (b== -1) {
    console.log('element not found in the array');
} else {
    console.log('element found at',b);
    
}
