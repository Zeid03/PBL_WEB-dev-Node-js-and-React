let dataTinggi = [
    {nama:"Rose",tinggi : 178},
    {nama:"Magnolia",tinggi : 153},
    {nama:"Daisy",tinggi : 165},
    {nama:"Jasmine",tinggi : 161},
    {nama:"Violet",tinggi : 159}
];



dataTinggi.sort(function(a, b) {
    return a.nama.localeCompare(b.nama);
});

for(let i in dataTinggi){
    console.log(dataTinggi[i].nama + ": " + dataTinggi[i].tinggi + " cm"); 
}
