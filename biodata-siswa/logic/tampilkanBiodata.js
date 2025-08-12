const dataSiswa = require("../data/siswa");
const kategori = require("./logikaKategori");
const config = require("../config/aplikasi");

function tampilkanBiodata() {
    console.log("\n=== Biodata Siswa ===");
    dataSiswa.forEach(siswa => {
        console.log(`Nama: ${siswa.Nama}`);
        console.log(`Umur: ${siswa.Umur}`);
        console.log(`Asal: ${siswa.Asal}`);
        console.log(`Sekolah: ${siswa.Sekolah}`);
        console.log(`Tahun Lulus: ${siswa.Tahun_lulus}`);
        console.log(`kategori kondisi: ${kategori.logikaKategori()}`);
        
    });
    console.log("\n===Informasi Aplikasi===");
    console.log(`Aplikasi: ${config.APP_NAME}`);
    console.log(`Versi: ${config.APP_VERSION}`);
    console.log(`Pengembang: ${config.APP_AUTHOR}`);
}


module.exports = {
    tampilkanBiodata
};