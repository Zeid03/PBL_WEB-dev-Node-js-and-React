// let x = 10;
// x /= 4;
// console.log(x);

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;   
// }

// console.log(day);

console.log("------------------------------");
console.log("     Operasi Aritmatika");
console.log("------------------------------");

const a = 20;
const b = 3;

console.log("Penjumlahan",a + b);
console.log("Pengurangan",a - b);
console.log("Perkalian",a * b); 
console.log("Pembagian",a / b);
console.log("Sisa bagi",a % b);
console.log("Pangkat",a ** b); // Exponentiation operator


console.log("\n------------------------------");
console.log("     Operasi Assignment");
console.log("------------------------------");
let x = 10;
x += 5; // x = x + 5
console.log("Nilai x setelah penambahan 5:", x);
x -= 2; // x = x - 2
console.log("Nilai x setelah pengurangan 2:", x);
x *= 3; // x = x * 3
console.log("Nilai x setelah perkalian 3:", x);
x /= 4; // x = x / 4
console.log("Nilai x setelah pembagian 4:", x);
x %= 3; // x = x % 3
console.log("Nilai x setelah sisa bagi 3:", x);
x **= 2; // x = x ** 2
console.log("Nilai x setelah pangkat 2:", x);

console.log("\n------------------------------");
console.log("     Operasi Perbandingan");  
console.log("------------------------------");
console.log(false || false); // false