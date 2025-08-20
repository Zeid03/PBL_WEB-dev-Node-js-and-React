// Encapsulation
class AkunBank{
    #saldo;

    constructor(nama, saldoAwal) {
        this.nama = nama;
        this.#saldo = saldoAwal;
    }

    setor(jumlah) {
        this.#saldo += jumlah;
    }

    lihatSaldo(){
        return `saldo ${this.nama}: Rp${this.#saldo}`
    }

}

const akun1 = new AkunBank('Budi', 100000);

console.log(akun1.lihatSaldo());

// inheritance
class Kendaraan {
    constructor(merk) {
        this.merk = merk;
    }
    
    info(){
        return `Kendaraan merk ${this.merk}`;
    }
}

class Mobil extends Kendaraan{
    constructor(merk, tipe){
        super(merk);
        this.tipe = tipe;
    }

    info(){
        return `Mobil ${this.merk} Tipe ${this.tipe}`;
    }
}

const avanza = new Mobil("Toyota", "Avanza");
console.log(avanza.info());

//Polymorphism (Banyak bentuk)
class Hewan {
    suara() {
        return "Suara hewan";
    }
}

class Kucing extends Hewan {
    suara() {
        return "Meow";
    }
}

class Anjing extends Hewan {
    suara() {
        return "Guk guk";
    }
}

const hewan1 = new Kucing();
const hewan2 = new Anjing();

console.log(hewan1.suara());
console.log(hewan2.suara());