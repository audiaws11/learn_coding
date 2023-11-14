// object

const person = {
    name: " John", // property = nilai yg dimasukan dalam object
    age: 18,
    city: "New York",
    hello: function (){
        console.log ('hello nama saya' + this.name)
    }
};

// console.log(person.name);

// person.age = 31 // untuk mengupdate value

// delete person.age // untuk menghapus

// person.status = "Married" // menambahkan property

person.hello();

// object class

// const siswa1 = {  // kalau gini kan harus nulis satu2
//     nama: "Lala",
//     kelas: "2c"
// },
// const siswa2 = {
//     nama: "Lili",
//     kelas: "2d"
// };

function Siswa(param1, param2){ //karena class object penamaannya pakai huruf besar diawak
    this.name = param1;
    this.kelas = param2;
}

let siswa1 = new Siswa('Dona', '3d')   // harus masukkin new kalau untuk ngeluarin object class
let siswa2 = new Siswa ('Wonjun', '3f')

console.log(siswa1,siswa2);


let tanggal = new Date().getDate() // contoh pada date

console.log(tanggal)

//getter setter


