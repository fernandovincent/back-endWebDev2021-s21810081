console.log("Hello World!!!");
console.log("Welcome to Web Development Class");

// 1. JavaScript Variable
/*
  Author : Fernando Vincent
  Version : 1.0.0
  Date : 21/01/2021
*/
// a) Konvensi camelCase (huruf kecil pada permulaan, setelahnya huruf besar)
// let dapat dirubah-rubah nilainya

// let namaDepan = "Vincent";
// let namaBelakang = "Fernando";

// // const hanya dapat di deklarasi 1x saja, harus ada dengan nilainya
// let usia = 20;
// usia += 2;
// // usia = "Tiga puluh tiga tahun";

// let apakahSudahMenikah = false;
// let alamat;

// const TAHUNLAHIR = 2000;

// console.log("Hallo nama saya " + namaDepan + " " + namaBelakang +". Usia saya adalah " + usia + " tahun");
// console.log(usia);
// console.log(apakahSudahMenikah);
// console.log(alamat);

// console.log(10 == "10"); //Loose equality
// console.log(10 === "10"); //Strict equality

// const hasil = 11 % 2 === 0 ? "Genap" : "Ganjil";

// console.log(hasil);



/* Tipe Data JavaScript
  string = "Stefanus";
  number (bilangan bulat, atau float)
  boolean (true, false)
  undifined
  null
*/

// 2. JavaScript Operators
/*
  Operasi Aritmatika + - * / **(pangkat) %(modulus) ++(increment) --(decrement)
  Relational Operators == (cek nilai) ===(cek nilai dan tipe data)
  ? :  ternary operator
 */


// 3. JavaScript Function
/*
  Fungsi dapat berdiri sendiri atau disimpan di dalam sebuah variabel.
*/

//Function Declaration 
  function ucapkanSalam() {
    return "Selamat Sore. Ini menggunakan function declaration.";
  }
  console.log(ucapkanSalam());

//Function Expression
  const ucapkanSalam2 = function(){
    console.log("Selamat Sore. Ini menggunakan funtion expression.")
  };
  ucapkanSalam2();

  //Parameter
  const menghitungLuasPersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
  };

  //Argument
  console.log(menghitungLuasPersegiPanjang(10, 5));


  // Function Hosting, hanya berlaku di funtion declaration. Taruh console lognya boleh diatas

  // Lingkup Global dan Lingkup Lokal
  