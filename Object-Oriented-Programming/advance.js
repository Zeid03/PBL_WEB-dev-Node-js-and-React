class Bentuk {
    luas() {
        throw new Error("Method 'luas()' harus diimplementasikan!");
    }
}

class Persegi extends Bentuk {
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }
    luas() {
        return this.sisi * this.sisi;
    }
}

let p = new Persegi(5);
console.log(p.luas()); // 25