function hapusSimbol(string) {
    let result = ''
    let simbol = '%@#$!~+-*=';
    for (let i = 0; i < string.length; i++) {
        let karakter = string[i];
        let isSimbol = false;
        for (let j = 0; j < simbol.length; j++) {
             if (karakter === simbol[j]) {   
                isSimbol = true;
                break;
            }
        }
        if (!isSimbol) {
            result += karakter;
            } 
        }
        return result;
}


// TEST CASE
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
