let buah = [];
buah.push("Apel");
buah.push("Mangga");
buah.push("Jeruk");
buah.push("Semangka");
buah.push("Pisang");
buah.push("Anggur");
buah.push("Nanas");

buah.sort();

for(let i = 1; i <= buah.length; i++){
    console.log(i + ". " + buah[i-1]);
}
