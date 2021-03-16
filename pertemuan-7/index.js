// const numbers = [1, 2, 3, 4, 5];

// numbers[4] = 6;
// numbers.push(7);
// console.log(numbers);

// const orang = {
//   nama: "John",
//   umur: 33,
// };

// const orang = {
//   alamat: "Manado",
// };

// orang.nama = "Doe";

// console.log(orang);

// const orang = {
//   nama: "John",
//   umur: 33,
//   alamat: "Manado"
// };

// Hello nama saua John, umur saya 33 tahun. Saya tinggal di Manado
//let kalimat = "Hallo nama saya "+ orang.nama + ", umur saya " + orang.umur + ". Saya tinggal di " + orang.alamat + ".";
// let kalimat = `Hallo nama saya ${orang.nama}, umur saya ${orang.umur} tahun. Saya tinggal di ${orang.alamat}`;

// console.log(kalimat);

// console.log(`Hasil penjumlahan 2 dan 3 adalah ${2 + 3}`);
// console.log(`10 === 10 hasilnya adalah ${10 === 10}`);

// let umur = 16;
// let kalimat2 = `Tahun depan saya ${
//   umur + 1 >= 17 ? "bisa" : "tidak bisa"
// } ikut pemilku`;

// console.log(kalimat2);

// Arrow Function
// const namaSaya = (nama) => =nama;

// let kalimat3 = `Halo nama saya ${namaSaya("Stenly")}`;
// console.log(kalimat3);

// Default Parameter
// const penjumlahan = (a = 1, b = 1) => a + b;

// console.log(penjumlahan(5));

// Rest Parameter & Spread Operator
// const penjumlahanEmpatAngka = (a, b, c, d, e, f, g) => {
//   let numbers = [a, b, c, d, e, f, g];
//   let result = 0;
//   numbers.forEach((element) => {
//     result = result + element;
//   });
//   return result;
// };

// const penjumlahanEmpatAngka = (param1, param2, ...numbers) => {
//   let result = 0;
//   numbers.forEach((element) => {
//     result = result + element;
//   });
//   return result;
// };
// console.log(penjumlahanEmpatAngka(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Spread Operator (Dibuka arraynya, sehingga menjadi variabel tunggal)
// const numbers = [1, 2, 3, 4, 5];
// const number2 = [...numbers];

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const numbers3 = [13, 14, 15];

const combineNumbers = numbers.concat(numbers2.concat(numbers3));
const combineNumbers2 = [...numbers, ...numbers2, 11, 12, ...numbers3];

console.log(combineNumbers2);

let orang = {
  nama: "Stenly",
  umur: 33,
};

// orang.pekerjaan = "Dosen";
// orang.pendidikan = "S2";

orang = {
  ...orang,
  pekerjaan: "Dosen",
  pendidikan: "S2",
};

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const combObj = {
  ...obj1,
  ...obj2,
};

console.log(orang);
console.log(combObj);