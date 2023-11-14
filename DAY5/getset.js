// get set case dalam object

let siswa = {
    nama: "Lili",
    kelas: "2D",
    
    get getName() {            //sebagai pihak ke-3 saat mengambil nilai
        return this.nama},
    set setKelas(param){       // update nilai melalu perantara pihak ke - 3
        this.kelas = param
    }}

siswa.setKelas = "2A"
console.log(siswa.kelas);
console.log(siswa.getName);