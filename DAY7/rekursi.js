// case dibuatkan pangkat

// fungsi perulangan
function hitung(x, n) {
    let hasil = 1;
    for (let i = 0; i < n; i++) {
        hasil = hasil * x;
    }
    return hasil;
}
console.log(hitung(2, 2));
console.log(hitung(2, 3));
console.log(hitung(2, 4));
// fungsi rekursi

function hitungRekursi(x, n) {
    if(n == 1) {
        return x;
    }else{
        return x * hitungRekursi(x, n-1);
    }
}

console.log(hitungRekursi(2, 2));
console.log(hitungRekursi(2, 3));
console.log(hitungRekursi(2, 4));

//case faktorial
// case fungsi biasa
function faktorial(num){
    let i = 0;
    let hasilKali = 1;
    while(i < num) {
        hasilKali = hasilKali * (num-i);
        i++
    }
    return hasilKali;
}

console.log("pakai fungsi biasa: ", faktorial(5));

// case fungsi rekursi

function rekursiFaktorial(value){
    if (value == 0 || value == 1){
        return 1;  // stopper
    }else {
        return value * rekursiFaktorial(value - 1) // rekursi fungsi
    }
}
console.log("pakai rekursi: ", rekursiFaktorial(5));