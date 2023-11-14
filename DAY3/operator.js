// operator matematika

// let nilai1 = 86;
// let nilai2 = 20;

// if (nilai1 > 75) {
//     console.log("Lulus");
// } else if (nilai > 65) {
//     console.log("Tidak Lulus");

// };

// operator matematika pembanding
// untuk

// let nilai1 = 2;
// let nilai2 = 2;

// // if (nilai1 == nilai2) {
// //     console.log("==> Benar");
// // } else {
// //     console.log("==> Salah");

// // };
//  console.log(nilai1 + nilai2);

//  konjungsi dan disjungsi

// let usernames = "Audia";
// let passwords = "123456";
// let status = "Premium";

// // login karena panjangan username dan password
// if (usernames.length >= 4 || passwords.length >= 8) {
//     console.log("Login Berhasil");
// } else {
//     console.log("Login Gagal");
// };

// login karena status akunya premium
const user = [{
    username: "Audia",
    password: "12345",
    status: "Premium"
},
{
    username: "Budi",
    password: "1234567",
    status: "Basic"
},
]

if (user[1].status == "Basic" && user[1].password.length >= 7) {
    console.log("Login Berhasil");
} else {
    console.log("Login Gagal");
};

// ++ / --

num = 1;
num = num + 1;
num++;

console.log(num + 2);



const array = ['pisang','mangga'];

console.log(...array + ',alpukat');