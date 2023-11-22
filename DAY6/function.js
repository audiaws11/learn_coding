// function biasa

function sayHello(){
    console.log('Hello');
}

sayHello();

// function anonymous

const coba = function(){
    return 'lala';
}
console.log(coba()); // lala

// function arrow

const coba2 = () => {
    return 'arrow function';
}
console.log(coba2()); // arrow function

//case arrow function

const obj = {
    fn: () => {             // penggunaan arrow function pada obj bisa tetepi lebih baik pake fungsi biasa saja
        console.log('hello');
    }
}
obj.fn(); // hello 

// constructor function

var namaFungsi = new Function(console.log('ayooo'));
console.log(namaFungsi); // hello

const date = new Date().getDate();
console.log('tanggal: ',date); // 

// note function: jangan lupa untuk menambahkan invoked function


// function parameter

function penjumlahan(bil1, bil2){
    return bil1 * bil2;
}

console.log('hasil: ',penjumlahan(3,2)) 

// function paramater rekursi

function ujiCoba(bil1, bil2, aksi){
    if(aksi === 'pengurangan'){
        hasil = pengurangan = bil1 - bil2;
    }else if(aksi ==='penjumlahan'){
        hasil = 
        penjumlahan = bil1 + bil2;
    }
    console.log(hasil);
}
ujiCoba(3,6, 'penjumlahan'); 

// function parameter menggunakan object

function setRupiah({param1, param2}){ /// parameter menggunakan object
    console.log(param1, param2);
}

setRupiah({
    param1: 1000,           // argumen harus sama dengan parameter pada function setRupiah
    test: 2000              // jika berbeda argumennya maka menjadi undefined parameter
});

// function - Immediately Invoked Function Expression

(function (var1, var2) {
    console.log("hasil = " + (var1 + var2));
}) (10, 20);
