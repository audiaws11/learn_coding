// sort num tetapi hanya satu angka 
const num = [3, 6, 4 ,1 , 5, 7, 9]
const s1 = num.sort();
console.log(s1);

//sort untuk lebih dari 2 angka, menggunakan function sort
const num1 = [3, 6, 4 ,1 , 110, 5, 300, 7, 9, 10]

const s2 = num1.sort((a, b) => a-b);
console.log(s2);

// sort untuk string
const str = ["aa", "a", "pisang", "pusing", "pasang"]

const s3 = str.sort();
console.log(s3);

//sort object hanya untuk number
const obj = [
    {name: "lala", age: 20},
    {name: "lili", age: 9},
    {name: "lolo", age: 11} 
]

const s4 = obj.sort((a, b) => a.age-b.age); // yg tersorting hanya age saja

console.log(s4);