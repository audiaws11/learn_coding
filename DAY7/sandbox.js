
// TEST CASE

function cariMean(array) { 
// loop for
    // let sum = 0;
//     for ( i = 0; i <array.length; i++ ) {
//         sum = sum + array[i];
//         }
//     let mean = sum / array.length;
//     return mean;

// while loop
    let i = 0;
    let sum = 0;

    while (i < array.length) {
        sum += array[i];
        i++; // Increment i in each iteration atau stopper
    }
    let mean = sum / array.length;
    let newHasil = Math.round(mean) // pembulatan
    return newHasil;
 }

//task case

console.log(cariMean([1, 2, 3, 4]));
console.log(cariMean([5, 8, 10, 15]));

