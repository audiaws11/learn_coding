let object = {
    a:7,
    b:8,
    c:9
}


//loop object cara: for in
let prop = "a";
for (const prop in object) {
    console.log(prop);
}

//loop array cara: for of

let arr = ["value1", "value2", "value3", "value4"];
for (const iterator of arr) {
    console.log(iterator);
    
}


