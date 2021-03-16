// 1. Callback
// a. Buatlah function JavaScript bernama mandi lalu lakukan console.log() yang berisi nilai string "Mandi"
function mandi() {
  console.log("Mandi");
}

// b. Buatlah function JavaScript bernama sarapan. Di dalam function tersebut gunakan setTimeout() dengan argumen pertama function yang mengembalikan console.log() berisi nilai string "Sarapan tertunda 3 detik" dan argumen kedua berupa durasi waktunya sebesar 3000 (milidetik).
// function sarapan() {
//   setTimeout(function () {
//     console.log("Sarapan tertunda 3 detik");
//   }, 3000);
// }

// c. Buatlah function JavaScript bernama berangkatSekolah lalu lakukan console.log() yang berisi nilai string "Berangkat Sekolah".
// d. Jika kita memanggil ketiga function dengan urutan mandi, sarapan dan berangkatSekolah maka sarapan menjadi paling terakhir dieksekusi.
function berangkatSekolah() {
  console.log("Berangkat Sekolah");
}

mandi();
sarapan();
berangkatSekolah();

// e. Ubahlah function sarapan menjadi selesai dieksekusi sebelum berangkatSekolah menggunakan callback.
function sarapan(callback) {
  setTimeout(function () {
    console.log("Sarapan tertunda 3 detik");
    callback();
  }, 3000);
}

// f. Panggillah kembali ketiga function di atas dengan urutan mandi, sarapan, lalu berangkatSekolah.  
mandi();
sarapan(berangkatSekolah);

// 2. Promise
// a. Buatlah sebuah function bernama helloWorld. Di dalam function, tambahkan return statement new Promise. Isi parameter Promise dengan callback function yang memiliki parameter resolve. Di dalam Promise, tambahkan method setTimeOut. Isi parameter pertama setTimeOut dengan callback function yang berisi resolve string "Hello World!". Argumen kedua berisi durasi time out sebesar 2000.
// b. Buatlah sebuah async function bernama messages. Di dalam function, buatlah sebuah variabel bernama msg dan isi dengan statement await helloWorld(). Lakukan console.log() variabel msg di dalam function messages.
// c. Panggil function messages di luar blok kode function messages yang sudah dibuat. Statement string Hello World! akan keluar setelah 2 detik. Cek pada tab Console untuk melihat data.

// function helloWorld() {
//     return helloWorld = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000); 
//     });
//   };
  
//   const messages = async () => {
//     try {
//       const msg = await helloWorld();
//       console.log(msg);
//     } catch(error) {
//       console.log(error);
//     }
//   }
//   messages()

// 3. Fetch
// a. Buatlah sebuah function bernama ambilDataUser()
// b. Gunakan fetch() untuk mengambil data dari end-point API berikut "https://jsonplaceholder.typicode.com/users"
// c. Gunakan promise untuk melakukan fetch(). Tambahkan .then() di bawah kode fetch(). Isi parameter .then() berupa callback function yang memiliki argumen bernama response.Di dalamnya lakukan return terhadap response dan gunakan method .json()
// const ambilDataUser = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   response = await response.json();
//   console.log(response);
// }
function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => console.log(json))
}
ambilDataUser();

/*
function ambilDataUSer(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((user) => console.log(user))
    
};
ambilDataUSer();
*/