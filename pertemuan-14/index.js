//OOP in JavaScript
//Object Literal
// const mobil1 = {
//   merek: "Toyota",
//   warna: "Putih",
//   nyalakanMobil: function () {
//     console.log(`Mobil dengan merek ${this.mere} sudah dinyalakan`);
//   },
// };

// const mobil2 = {
//   merek: "Honda",
//   warna: "Merah",
//   nyalakanMobil: function () {
//     console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//   },
// };

// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Object Class
class Mobil {
  constructor(merek, warna) {
    this.merek = merek;
    this.warna = warna;
  }

  nyalakanMobil() {
    console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
  }
}

// const mobil1 = new Mobil("Toyota", "Putih");
// const mobil2 = new Mobil("Honda", "Merah");
// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Inheritance
class Toyota extends Mobil {
  constructor(merek, warna, mesin) {
    super(merek, warna);
    this.mesin = mesin;
  }
  //Overridding
  nyalakanMobil() {
    console.log(
      `Mobil dengan merek ${this.merek} dgn mesin ${this.mesin} sudah dinyalakan`
    );
  }
  matikanMesin() {
    console.log(`Mobil dengan merek ${this.merek} sudah dimatikan`);
  }
}

const agya = new Toyota("Agya", "Putih", "1000cc");
const avanza = new Toyota("Avanza", "Hitam", "1300cc");

agya.nyalakanMobil();
agya.matikanMesin();
avanza.nyalakanMobil();

// class Button extends Component {
//   componentDidMount() {}
//   constructor() {}
// }
