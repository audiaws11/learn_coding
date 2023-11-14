// // array - push - menambahkan diakhir index

let buah = ["nanas", "pisang", "mangga"];

buah.push("alpukat"); 

// // pop - mengurangi diakhir index

buah.pop();

// //  unshift - menambahkan diawal index

buah.unshift("rambutan");

// // shift - mengurangi diawal index

buah.shift()

// // jika ingin menambahkan ditengah-tengah pakai splice

buah.splice(2,0,"jambu")

console.log(buah);

// // kalau pakai loop


let result = []
for (let i = 0; i < buah.length; i++){
    result.push(buah[i]);
    if (buah[i] === "pisang") {
        result.push("ginger")
    }
}
console.log(result);

// array multidimensi 
// contoh 2 dimensi

const matrix = [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 80],
];

// console.log(matrix[0][0]);

let angkaTerbesar = matrix[0][0];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > angkaTerbesar) {
            angkaTerbesar = matrix[i][j]
            
        }
    }
    
}      
    
console.log(angkaTerbesar);