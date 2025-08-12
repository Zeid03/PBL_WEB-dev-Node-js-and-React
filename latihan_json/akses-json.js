const fs = require("fs");

const teks = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(teks);

console.log("isi awal :",data);

// data.push({id: 4, nama: "Jeremy", umur: 28});

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("\nData berhasil ditambahkan");

console.log("isi akhir :", data);

console.log("==== Seluruh Nama ====");
data.forEach(item => {
    console.log(item.nama);
});