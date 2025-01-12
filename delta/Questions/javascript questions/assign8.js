//q1


let arr= [1,2,3,4,5]

let square = arr.map((el)=> el*el )
let sqSum = square.reduce((acc,el)=>acc+el)

let avg = (arr.reduce((acc,el)=>acc+el)/arr.length)


//q2 

let arrQ2 = [1,2,3,4,5]
let plus5 = arrQ2.map((el)=>el+5)

//q3

let arrQ3 = ['a','b','c','d']
let upper = arrQ3.map((el)=> el.toUpperCase())

// q4
 let arrQ4 = [1,2,3,4,5]
 function doubleAndReturnArgs(arrQ4, ...others){
    let accumlatedarray = [arrQ4,others.map((el)=>el*2)]
    console.log(accumlatedarray);
}
doubleAndReturnArgs(arrQ4,9,9,9,9,9)


const ac = (arrQ4, ...args) => [
    ...arrQ4,
    ...args.map((v) => v * 2),
];

// Call the function and print the result
console.log(ac([1, 2, 3], 4, 4));
