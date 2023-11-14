// // cabang if dalam if

let pass = "1234";
let user = "RPY BAYU";

if (user && pass) {
    if (pass.length < 5){
        console.log("periksa kembali password minimal 5 karakter")}
    else if (user === "Roy bayu"){
        console.log("maaf anda tidak dapat login");
    }
    else {
        console.log("Login berhasil")}
}
else {
    console.log("periksa kembali username dan password");
};

// regex --> regular expression, bisa nambahin ketentuan katanya

if (user.match("[a-z]")){
    console.log("username valid");
}
else {
    console.log("username tidak valid");
};