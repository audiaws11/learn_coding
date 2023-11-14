// CONTOH ARRAY DAN OBJECT
let warna = ["kuning", "merah", "hijau", "ungu"]  
console.log(warna[2]);

let siswa = {                                      
    nama: "Rahul",
    jurusan: "Teknik Informatika",
    usia: 20,
}
console.log("===>", siswa['nama']);

// non primitive data types

let obj = {
    hitung: function (angka1, angka2) {
        console.log(angka1 * angka2);

},
};

obj.hitung(10, 20);

// case

let siswa2 = {
    nama: "Lili",
    kelas: "1A",
    nilai: 86
};

console.log("halo nama saya " + siswa2.nama + " kelas saya " + siswa2.kelas + " nilai " + siswa2.nilai);