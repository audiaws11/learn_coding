import { setDolar, setRupiah } from "./common.js"; // perlu destructure

console.log(setRupiah(1000),',', setDolar(1000));

// import kata from "./common.js"; // tidak perlu destructure

// console.log(kata());

const siswa = {
    nama: "Lalan",
    kelas: "3A",
    showSiswa: function(){
        console.log(`Nama : ${this.nama}, Kelas : ${this.kelas}`); // class object
    }
}

siswa.showSiswa();

// metide instance menggunakan new

function siswa1(nama, kelas){
    this.nama = nama;
    this.kelas = kelas;
    this.showSiswa = function(){                // ini method
        console.log(`Nama : ${this.nama}, Kelas : ${this.kelas}`);
    }
}

const siswa2 = new siswa1("Jamet", "3C");

console.log(siswa2);

//get set

const myObject = {
    a:7,
    get b(){ // mengembalikan hasil
        return this.a + 1;
    },
    set c (x) {         // update set value
        this.a = x/2;
    },
}

console.log(myObject.a);
console.log(myObject.b);
myObject.c = 50;
console.log(myObject.a);


// test case
 // sfmbngkb


function gantiHuruf (str){
    let kata = '';
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if (str[i] ==='a'){
            kata = kata + 'b';
        }else if (str[i] === 'e'){
            kata = kata + 'f';
        } else{
            kata = kata + char;
        }
}
    return kata;
}
console.log(gantiHuruf('semangka')); //smfmbngkb

