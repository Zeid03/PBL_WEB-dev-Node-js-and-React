//aritmatika
let a = 150;
let b = 40;

console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", a / b);
console.log("Sisa bagi:", a % b);

//assignment
let x = 35;

x += 5;
console.log("x += 5 =", x);
x -= 2;
console.log("x -= 2 =", x);
x *= 3;
console.log("x *= 3 =", x);
x /= 2;
console.log("x /= 2 =", x);

//Perbandingan
let c = 10;
let d = "10";

console.log("c == d:", c == d); // true, karena nilai sama
console.log("c === d:", c === d); // false, karena tipe data berbeda
console.log("c != d:", c != d); // false, karena nilai sama
console.log("c !== d:", c !== d); // true, karena tipe data berbeda
console.log("c > d:", c > d); // false
console.log("c < d:", c < d); // false
console.log("c >= d:", c >= d); // true
console.log("c <= d:", c <= d); // true

//kondisional
let umur = 20;
let punyaKTP = true;

console.log("Boleh Buat SIM?:", umur >= 17 && punyaKTP); // true
console.log("Remaja atau Dewasa?:", umur >= 13 || umur >= 20); // true
console.log("Bukan anak-anak?:", !(umur < 13)); // true
