async function abc(){
    // throw 'abc'
    return "hello"
}

abc()
.then((result) => {
    console.log('success')
    
}).catch((err) => {
    console.log('bruh... error');
});






async function show() {
    await colorChange("violet",1000)
    await colorChange(" indigo",1000)
    await colorChange(" green",1000)
    await colorChange("yellow",1000)
    colorChange("orange",1000)

    return 'done';
}
