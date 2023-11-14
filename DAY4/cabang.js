// // cabang if else

let pass = "123456";
let user = "";

if (pass && user){
    // if (pass.length < 5){
    //     console.log("periksa kembali password minimal 5 karakter")}
    // else if (user !== "Roy bayu"){
    //     console.log("maaf anda tidak dapat login");
    // }
    console.log("Login berhasil");
}
else {
    console.log("periksa kembali username dan password");
};

// // cabang switch

let inputHari = "Rabu";    
let jenisHari = "";

switch (inputHari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
        jenisHari = "Hari Kerja";
        break;
    case "Minggu":
    case "Sabtu":
        jenisHariHari = "Hari Libur";
        break;
    default:                                       // kalau diswitch harus ada default
        console.log("input hari tidak valid");
        break;
};

console.log(jenisHari);

//jika dikonversi dari switch ke if else

let inputHari1 = "Sabtu";    
let jenisHari1 = "";

if (inputHari1 === "Sabtu" || inputHari1 === "Minggu") {
    jenisHari1 = "Hari Libur"
}
else if (inputHari1 === "Senin") {
    jenisHari1 = "Hari Kerja"
}
else {
    console.log("input hari tidak valid")
}

console.log(jenisHari1);


// operator tenerary , dianjurkan untuk 2 kemungkinan saja

let password = "123456";
username = "Roy bayu";

let passValid = false  // harus ada variable tampungnya false

passValid = pass.length > 5 ? "benar" : "tidak benar";

console.log(passValid); // kemudian di console.log

