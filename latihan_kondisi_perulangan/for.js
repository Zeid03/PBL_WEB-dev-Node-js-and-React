let jumlah = 5;

console.log("bilangan genap dari 1 sampai 20");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
    jumlah += i;
  }
}

console.log("Jumlah bilangan genap tersebut adalah:", jumlah);