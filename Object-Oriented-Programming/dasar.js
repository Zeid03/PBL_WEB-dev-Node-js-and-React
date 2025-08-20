// Object-Oriented Programming - Latihan 1

// Membuat class 
class Mahasiswa{
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
        
    }

    // Method atau Fungsi
    perkenalan(){
        return `Halo, saya ${this.nama}, umur saya ${this.umur} tahun.`;
    }
}

// Membuat objek dari class Mahasiswa
const mhs1 = new Mahasiswa('Budi',20);

console.log(mhs1.perkenalan());