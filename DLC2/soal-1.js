/**
 * Anagram : Membandingkan 2 buah string apakah tersusun/dibentuk dari huruf yang sama atau tidak
 */

let kata_1 = "kamu";
let kata_2 = "muka";
let kata_3 = "maka";
let kata_4 = "kaum";

const checkAnagram = (kata1, kata2) => {
  // // lengkapi code dengan cara sederhana
  //  const kata1Array = kata1.split("").sort().join("");
  //  const kata2Array = kata2.split("").sort().join("");
   
  //  return kata1Array === kata2Array;
   
  
  // // lengkapi code dengan cara perbandingan object
  let chars = "abcdefghijklmnopqrstuvwxyz"
  let charCount = {};
  for (let i = 0; i < chars.length; i++) {
    charCount[chars[i]] = 0;
    }

  kata1 = kata1.toLowerCase();
  kata2 = kata2.toLowerCase();
  
  // loop huruf2 kata1 ke charCount
  for (let i = 0; i < kata1.length; i++) {
    charCount[kata1[i]]++;
  }

  // loop huruf2 kata2 ke charCount
  for (let i = 0; i < kata2.length; i++) {
    charCount[kata2[i]]--;
  }

  // check anagram = semua value 0

  let anagram = true;
  for (const key in charCount) {
    if (charCount[key]!== 0) {
      anagram = false;
      break;
    }
  }
  return anagram;
}





console.log(checkAnagram(kata_1, kata_2)); // "kamu" & "muka" => true
console.log(checkAnagram(kata_1, kata_3)); // "kamu" & "maka" => false
console.log(checkAnagram(kata_2, kata_3)); // "muka" & "maka" => false
console.log(checkAnagram(kata_1, kata_4)); // "kamu" & "kaum" => true