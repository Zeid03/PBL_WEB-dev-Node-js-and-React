// for each
console.log("Hasil dari fungsi for each:");
let angka = [10, 20, 30];
angka.forEach(function(nilai, Index) {
    console.log("Index ke-" + Index + ": " + nilai);
});
console.log(""); // baris kosong

// map
console.log("Hasil dari fungsi map:");
let angka1 = [1, 2, 3];
let kuadrat = angka1.map(function(nilai) {
    return nilai * nilai;
});
console.log("Hasil kuadrat:", kuadrat);
console.log(""); // baris kosong

// filter
console.log("Hasil dari fungsi filter:");
let angka2 = [5, 10, 15, 20];
let lebihDari10 = angka2.filter(function(nilai) {
    return nilai > 10;
});
console.log("Angka lebih dari 10:", lebihDari10);
console.log(""); // baris kosong

// Menambah/menghapus elemen
let angka3 = [1, 2, 3];
console.log("Sebelum menambah:", angka3);

// Menambah elemen
angka3.push(4);
console.log("Setelah menambah:", angka3);

// Menghapus elemen
angka3.pop();
console.log("Setelah menghapus:", angka3);

// shift
angka3.shift();
console.log("Setelah shift:", angka3);

// unshift
angka3.unshift(1);
console.log("Setelah unshift:", angka3);

// splice
angka3.splice(3, 0, 4);
console.log("Setelah splice:", angka3);

// slice
let angka4 = angka3.slice(1, 3);
console.log("Hasil slice:", angka4);


