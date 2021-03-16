// 1. 
  class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
    bekerja() {
      console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
  }
  const user1 = new Orang("Fernando", "20 tahun");
  user1.bekerja();

// 2.
  class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
    tidur() {
      console.log(`${this.nama} sedang tidur`);
    }
    makan() {
      console.log(`${this.nama} sedang makan`);
    }
  }

  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur);
      this.namaSekolah = namaSekolah;
    }
    belajar() {
      console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
  }

  const user = new Pelajar ("John", 17, "Unklab");

  console.log(user);
  // user.belajar();