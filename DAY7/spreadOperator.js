// spread operator adalah menggabungkan 2 array dan 2 object atau lebih menjadi satu

let number = [1, 2, 3];
let newNumber = [4, 5, 6];

//outputnya jadi [1, 2, 3, 4, 5, 6]

//pakai for loop
// for (let i = 0; i < newNumber.length; i++) {
//     number.push(newNumber[i]);
// }
// console.log("loop", number);

// pakai spread operator
console.log("rest operator: ", [...number,...newNumber]);

//contoh lain

const obj1 = { nama: "audia"};
const obj2 = { alamat: "jakarta" };

let newObj = {...obj1,...obj2}
console.log(newObj)
// {nama: "audia", alamat: "jakarta"}

// gabungin object dan array

let gabung = {...number, ...obj1}
//{ '0': 1, '1': 2, '2': 3, nama: 'audia' } // index akan menjad key

let join = [number, obj1]
// [ [ 1, 2, 3 ], { nama: 'audia' } ]
let join2 = [...number,...obj1]
// obj1 is not iterable


console.log(gabung)
console.log(join)