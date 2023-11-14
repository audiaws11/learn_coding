// // loop sederhana

// for (let i = 0; i <= 10; i++){
//     // console.log("Angka " + (i + 1));
// };

// // while loop
// // let i = 1;
// // while (i <= 10){
// //     // console.log("Perulangan ke-" + i);
// //     i++;
// // };

// // do while loop

// // let i = 1;
// // do {
// //     console.log("lili");
// //     i++;
// // } while (i <= 10);


// //for in perulangan

// let siswa = {
//     nama: "Roy",
//     jurusan: "Teknik Informatika",
//     alamat: "Jakarta",
// }

// for (let key in siswa) {
//     console.log(  key + " saya adalah " + siswa[key]);
// };

// // forEach perulangan

// const fruits = ["Apple", "Banana", "Orange"];
// fruits.forEach(function(element, index) {
//     console.log("element : ", element)
//     console.log("index   : ", index)
// });

// *
// **
// ***
// ****
// *****

// let num = 5;

// for (let i = 1; i <= num; i++) {
//     let bintang = ""   
//     for (let j = 0; j <i; j++) {
//         bintang = bintang + "*";
//     }
//     console.log(bintang);
// }

let vocal = ["A", "I", "U", "E", "O"];
let kata = "LAPAR";
let result = "";
let count = 0;

for (let x = 0; x < kata.length; x++) {
    for (let y = 0; y < vocal.length; y++) {
       if(kata[x] === vocal[y]){
        result = result + vocal[y];
        count++;
       }
    }
    }

    console.log(result);
    console.log(count);