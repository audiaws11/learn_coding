// loop maju
const array = [1, 2, 3, 4, 5, 6, 7]

// function kelas(){
//     let kata = '';
//     for (let i=0; i<array.length; i++)
//     if ( array[i] === array[i]){
//         console.log('Kata ke:' + array[i]);
//     }
//     return kata ;
// }


// kelas();

// loop mundur

// for (let i = array.length - 1; i >= 0; i--){
//     console.log('data: '+ (array.length - i))
// }

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let hasil = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0 ; j < matrix[i].length; j++) {
       hasil += matrix[i][j]
        // console.log('matrix ke: ',i+1, ',value nya:', matrix[i][j]
    }
}

console.log(hasil);
