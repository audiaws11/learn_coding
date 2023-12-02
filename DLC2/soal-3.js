
function tukar_besar_kecil(text) {
  let convertedText = "";
// for lebih jelasnya
  for (let i = 0; i < text.length; i++) {
  //   if (text[i] === text[i].toLowerCase()) {
  //     convertedText = convertedText + text[i].toUpperCase();;
  //   } else {
  //     convertedText = convertedText + text[i].toLowerCase();;
  //   }
  // } 
  // return convertedText;

// cara tenary operator elegant
    convertedText += text[i] === text[i].toLowerCase()? text[i].toUpperCase(): text[i].toLowerCase();
  }
  return convertedText;
}

console.log(tukar_besar_kecil('Hello World')); // "hELLO wORLD"
console.log(tukar_besar_kecil('I aM aLAY')); // "i Am Alay"
console.log(tukar_besar_kecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukar_besar_kecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukar_besar_kecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
