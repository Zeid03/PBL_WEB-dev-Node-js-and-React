// Array satu dimensi
let kumpulanAngka = [10,20,30,40];
console.log("array satu dimensi:", kumpulanAngka);

// Array dua dimensi
let matriks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("array dua dimensi:", matriks);

// tipe data homogen
let kumpulanString = ["apel", "jeruk", "pisang"];
console.log("tipe data homogen:", kumpulanString);

// tipe data heterogen
let campuran = [10, "apel", true, null];
console.log("tipe data heterogen:", campuran);

// array of objects
let orang = [
    { nama: "Alice", umur: 25 },
    { nama: "Bob", umur: 30 },
    { nama: "Charlie", umur: 35 }
];
console.log("array of objects:", orang[0].umur);

// panjang array
console.log("panjang array satu dimensi:", kumpulanAngka.length);
console.log("panjang array dua dimensi:", matriks.length);
console.log("panjang array of objects:", orang.length);