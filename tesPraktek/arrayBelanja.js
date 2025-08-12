let daftarBelanja = [
    {nama : "New Balance NB530", harga : 390000},
    {nama : "Nike Vomero 5", harga : 350000},
    {nama : "Adidas Samba", harga : 180000},
    {nama : "Onitsuka Tiger Mexico", harga : 420000}
]
let diskon = 0;
let totalHarga = 0;
let modal = 1200000;

// Fungsi formatter untuk Rupiah
const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(angka);
};

console.log("==== Daftar Belanja ====");
let x = 1;
for(let i = 0; i < daftarBelanja.length; i++){
    console.log(`${x}. ${daftarBelanja[i].nama} - ${formatRupiah(daftarBelanja[i].harga)}`);   
    totalHarga += daftarBelanja[i].harga;
    x++;
}

console.log("");
console.log("Total Belanja = " + formatRupiah(totalHarga));

if (totalHarga<250000){
    diskon = totalHarga * 0;
    totalBayar = totalHarga - diskon;

    console.log("Diskon = 0%");
    console.log("Total Setelah Diskon = " + formatRupiah(totalBayar));

} else if (totalHarga >= 250000 && totalHarga < 500000) {
    diskon = totalHarga * 0.05;
    totalBayar = totalHarga - diskon;

    console.log("Diskon = 5%");
    console.log("Total Setelah Diskon = " + formatRupiah(totalBayar));

} else if (totalHarga >= 500000 && totalHarga < 800000) {
    diskon = totalHarga * 0.1;
    totalBayar = totalHarga - diskon;

    console.log("Diskon = 10%");
    console.log("Total Setelah Diskon = " + formatRupiah(totalBayar));

}else{
    diskon = totalHarga * 0.15;
    totalBayar = totalHarga - diskon;

    console.log("Diskon = 15%");
    console.log("Total Setelah Diskon = " + formatRupiah(totalBayar));
}

console.log("Pembayaran = " + formatRupiah(modal));
console.log("Kembalian = " + formatRupiah(modal - totalBayar));
