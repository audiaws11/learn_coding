const num = [5, 2, 7, 4, 1, 6, 3, 8];
// ditampung dulu
const indexBaru = num.indexOf(7)
// console.log("no 7 ada di dalam index: ", indexBaru)

// untuk find punya function, hasilnya saty

const index = num.find((a) => a > 5)// cari value berdasarkan kondisi
const index2 = num.findIndex((a) => a > 5)   // cari nomer index berdasarkan kondisi
const index3 = num.includes(11); // yang termasuk hasilnya bolean
const index4 = num.filter((a) => a > 6) // output sesuai kondisi dan hasilnya lebih dari satu
// const index5 = num.reverse(); // diballik hanya untuk array dan num, tidak bisa untuk string

const index6 = num.map((item, index) => {
console.log("ini item ke: ", item, " index: ", index);
});
// console.log(index)
// console.log(index2)
// console.log(index3)
// console.log(index4)
// console.log(index5)
// console.log(index6)