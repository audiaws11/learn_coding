// synchronously - berurutan
// console.log('callback 1')
// console.log('callback 2')

//asynchron - tidak berurutan sesuai kondisi

// setTimeout(() => {              //contoh dikasih timeout
//     console.log('callback 1');
// }, 200);
// setTimeout(() => {
//     console.log('callback 2');
// }, 100);

// //contoh callback

// function salam(name, callback) {
//     console.log('hi saya adalah ' + name);
//     callback(); // function bisa disimpan jadi callback
// }

// function sayHi() {
//     console.log('halo apakabar? ');
// }

// salam("lili", sayHi);

//contoh callback lainnya

// function greeting(name, age){
//     console.log('hi saya adalah '+ name );
//     (function sayHello(){
//         console.log('usia saya adalah '+ age);
//     })(age); // parameternya ditaruh disini jadi callback
// }

// greeting("lili", 20);

// // callback hell

// function asyn1(callback) {
//     setTimeout(() => {
//         console.log('callback 1');
//         callback();
//     }, 2000);
// }

// function asyn2(callback) {
//     setTimeout(() => {
//         console.log('callback 2');
//         callback();
//     }, 1000);
// }

// function asyn3(callback) {
//     setTimeout(() => {
//         console.log('callback 3');
//         callback();
//     }, 1000);
// }

// //callback hell 

// asyn1(() => {
//     asyn2(() => {
//         asyn3(() => {
//             console.log("ini callback hell");
//         });
//     });
// });

//promise

// asyn1()
//     .then(asyn2)
//     .then(asyn3)
//     .then(function(){
//      console.log("promise chain completed");
//     });

//contoh promise
// fetch('https://dummyjson.com/products') // fetch API 
// .then(res => res.json())
// .then(console.log);


//async await

async function getData(){
    try {
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json();  
    console.log(data.products.length);    
    return data;
    } catch (error) {
        console.log(error);
        
    }
}

getData();