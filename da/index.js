// function penjumlahan(a,b){
//     console.log(a+b);
// }

// function pengurangan(a,b){
//     console.log(a-b);}

// penjumlahan(2,3);
// pengurangan(2,4);

// //sequance--> 

// function displayer(content){
//     console.log(content);
// }

// function plus(a,b){
//     return a + b;
// }

// let result = plus(2,3);
// displayer(result);

// //callback --. fungsi yang kita kirimkan dr paramater

// function myDisplayer(content){
//     console.log(content);
// }

// function text(hasil){
//     console.log('hasil dari penjumlahan tersebut adalah '+ hasil);
// }

// function minus(a,b, callback){
//     const result=a - b;
//     callback(result);
// }

// minus(7,3, displayer);
// minus(7,3, text);

// //callback pada array

// const hobbies = ["Coding", "Drawing"];
// function showHobby(hoby){
//     console.log(hoby);
// }

// function displayHobby(hoby){
//     console.log('Hobby saya adalah ' + hoby); 
// }

// hobbies.forEach(showHobby);
// hobbies.forEach(displayHobby);

//promise

const statusAmbilData = false;

let promise = new Promise((resolve, reject) => {
    let data;
    setTimeout(() => {
        data=[1,2,3,4];
        if(statusAmbilData) {
            resolve(data);}
        else {
        reject('Failed')}
    },1000)
})

console.log(promise);
promise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)}
)

