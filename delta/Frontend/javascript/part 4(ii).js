let todo = []
alert("welcome to todo list");
let out = 1
while (out != 2) {
    let userinput = prompt("enter your choice here")
    switch (userinput) {
        case 'list':
            if (todo.length == 0) {
                console.log('the todo list is empty');
            }
            else {
                console.log("here's the todo list");
                console.log('-------------------');
                for (let i = 0; i < todo.length; i++) {
                    console.log(`${i+1}. `+todo[i]);
                }
                console.log('-------------------');
                // console.log(todo);
                // lol i was stupid doing that 'for loop way ' for so long i just realised that this is possible too in js
                // but back to the oler version as this dosent give in a list format
            }
            break;
        case 'add':
            let toadd = prompt("what you wanna add")
            todo.push(toadd)
            console.log("task added successfully");
            console.log("updated todo list");
            console.log('-------------------');
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i+1}. `+todo[i]);
            }
            console.log('-------------------');
            // console.log(todo);
            
            break
            case 'delete':
                let todel = prompt("what you wanna delete")
                let delindex = todo.indexOf(todel)
                if (delindex == -1) {
                    console.log('task does not exist');
                }
                else {
                    d = todo.splice(delindex, 1)
                    console.log("task successfully deleted");
                    console.log(`element deleted :- '${d}'`);
                    console.log("updated todo list");
                    console.log('-------------------');
                    for (let i = 0; i < todo.length; i++) {
                        console.log(`${i+1}. `+todo[i]);
                    }
                    console.log('-------------------');
                // console.log(todo);
            }
            break
        case 'quit':
            out = 2
            break

        default:
            console.log("invalid input");
            break;
    }
    // break


    // if (userinput='list') {
    //     for (let i = 0; i < todo.length; i++) {
    //         console.log(i+1, todo[i]);
    //     }
    // }
    // else if ( userinput= 'add'){
    //     let toadd = prompt("what you wanna add")
    //     todo.push(toadd)
    //     console.log("task added successfully");
    //     console.log("updated todo list");
    //     for (let i = 0; i < todo.length; i++) {
    //         console.log(i+1, todo[i]);
    //     }

    // }
    // else if(userinput= 'delete'){
    //     let todel = prompt("what you wanna delete")
    //     let delindex =todo.indexOf(todel)
    //     todo.splice(delindex,1)
    //     console.log("task successfully deleted");
    //     console.log("updated todo list");
    //     for (let i = 0; i < todo.length; i++) {
    //         console.log(i+1, todo[i]);
    //     }
    // }
    // else if (userinput = 'quit'){
    //     out = 2
    //     break
    // }
    // else{
    //     console.log('please try again');
    // }

}




if (out = 2) {
    console.log("you successfully quit");
}

// console.log("hello");