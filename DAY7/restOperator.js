// rest operator untuk menggabungkan 2 paramater atau lebih

// funcyion biasa
function tambah (x, y) {
    console.log( "penjumlhan biasa: ", x + y);

}

tambah(2, 3, 7); // yang terjumlah hanya x dan y

// pakai rest operator

function penjumlahan (...param){
    let result = 0;
    for (let i = 0; i < param.length; i++) {
        result += param[i];
    }
    return result;
}
console.log("rest operator: ", penjumlahan(10, 5, 3, 4)); // yang terjumlah semuanya // 22