/*
  Pada array, dapat dilakukan pengambilan sebagian data dari index tertentu sampai index tertentu
  Terdapat fungsi bawaan javascript "slice" untuk melakukan hal tersebut

  cobalah untuk membuat custom function yang seperti slice

*/
let data = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
  
const customSlice = (data, start, end) => {
  // tulis code di sini
  

// pakai cara loop for 
 

//validasi star and end
  start = start < 0? 0 : start;
  end = end > data.length? data.length-1 : end;

  let hasil = []

  for (let i = start; i <= end; i++) {
    hasil.push(data[i]);
  }
  return hasil;
}


console.log(customSlice(data, 1, 5)); // [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]
console.log(customSlice(data, 3, 20)); // [ 'tiga', 'empat', 'lima' , 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh' ]
console.log(customSlice(data, 0, 3)); // [ 'nol', 'satu', 'dua', 'tiga' ]
