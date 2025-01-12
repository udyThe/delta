let a = [1,2,3,4,5,6,2,3]
console.log(a);
num = 2
for (let i = 0; i<a.length; i++){
    // let idx = a.indexOf(num)
    // a.splice(idx,1)
    if (a[i]== num) { 
        // why aint working on singe = 
        a.splice(i,1)

    } 
    // else {
        
    // }
}
console.log(a);

let b = 1234532
let count = 0;
let copy = b;
while (copy > 0) {
    count ++
    copy = Math.floor(copy/10);

}
console.log(count);


let c = 12345
let copy2 = c
let sum = 0

while (copy2>0) {
    remainder =  copy2 % 10;
    sum += remainder;
    copy2 = Math.floor(copy2/10)
}
console.log(sum);


let fac = 7
let factorial = 1
for(let i = fac; i>0;i--){
    factorial = factorial*fac
    fac--
}
console.log(factorial);


let d = [9,8,7,1,2,3,6,5,4]
let largest = 0
for(let i = 0; i<d.length;i++){
    if (d[i]>largest) {
        largest =d[i]
    }
}
console.log(largest);

