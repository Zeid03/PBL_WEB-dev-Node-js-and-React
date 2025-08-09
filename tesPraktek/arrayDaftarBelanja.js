let daftarBelanja = [];
daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Gula");

daftarBelanja.splice(1,1);


daftarBelanja.push("Telur");
daftarBelanja.push("Sayur");
daftarBelanja.push("Buah");

daftarBelanja.sort();


for(let i = 1; i <= daftarBelanja.length; i++){
    console.log(i + ". " + daftarBelanja[i-1]);
}
