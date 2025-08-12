const dataSiswa = require("../data/siswa");

function logikaKategori() {
        if (dataSiswa.Tahun_lulus < 2019) {
            return "Lulus Sebelum 2019";
        } else if (dataSiswa.Tahun_lulus >= 2019 && dataSiswa.Tahun_lulus <= 2021) {
            return "Lulus Saat Covid";
        } else {
            return "Lulus Setelah covid";
    }
}

module.exports = {
    logikaKategori
};