// function:
//  suatu proses
// yang bisa memiliki hasil dari proses tersebut ==> return valu
//  bisa ada paramaeter function

// satu funtion cuma bisa satu return

function hitungLuasLingkaran(r) {

    if (r % 7 === 0) {
        return (22/7) * r * r;
    } else {
        return 3.14 * r * r;
    };
}

let hasil_1 = hitungLuasLingkaran(10);

console.log(hasil_1);