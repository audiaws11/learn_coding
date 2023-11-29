class Animal {
    constructor(nama) {
        this.nama = nama;
    }

    bersuara() {
        return "suara " + this.nama + " adalah guguk";
    }
}

class Katak extends Animal{                 // mengambil sifat dari class Animal
    bersuara() {
        return "suara " + this.nama + " adalah tung kek tung kek";
    }
}


const animal = new Animal('anjing').bersuara();
const animal1 = new Katak('katak').bersuara();

console.log(animal);
console.log(animal1)


//case 1:
class Bapak {
    constructor(name, karakter, pendidikan) {
        this.name = name;
        this.karakterName = karakter;
        this.pendidikanName = pendidikan;
    }
    karakter() {
        return `karakternya adalah ${this.karakterName}`;
    }
    pendidikan() {
        return `pendidikan bapak adalah ${this.pendidikanName}`;
}
}

class Anak extends Bapak{                 // mengambil sifat dari class Bapak
    constructor(name, karakter, pendidikan, usia) {
        super(name, karakter, pendidikan); // penulisan super
        this.usia = usia;
    }
    
    newkarakter() {
        return `${this.name} ${super.karakter()} usianya adalah ${this.usia}`; // mengambil sifat dari class Bapak menggunakan super
    }
    pendidikan() {
        return `pendidikan anaknya adalah ${this.pendidikanName}`;
}
}

// const manusia = new Bapak("", "lucu").karakter();
const anakManusia = new Anak("jamal","dermawan","","18").newkarakter();
// console.log(manusia);
console.log(anakManusia);

//case 2:

//kalkulator : input 2 argumen
// - return hasil
// - kali
// - bagi

class Kalkulator {
    constructor(a, b) {
        this.bil1 = a;
        this.bil2 = b;
    }
    hasil() {
        return `hasil dari ${this.bil1} + ${this.bil2} = ${this.bil1 + this.bil2}`;
    }
}

class Kali extends Kalkulator {
    kali() {
        return `hasil dari ${this.bil1} x ${this.bil2} = ${this.bil1 * this.bil2}`;
    }
}

class Bagi extends Kalkulator {
    bagi() {
        return `hasil dari ${this.bil1} / ${this.bil2} = ${this.bil1 / this.bil2}`;
    }
}

const kalkulator = new Kalkulator(10, 2);
const kali = new Kali(10, 2);
const bagi = new Bagi(10, 2);
console.log(kalkulator.hasil());
console.log(kali.kali());
console.log(bagi.bagi());