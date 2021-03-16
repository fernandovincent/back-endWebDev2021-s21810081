// - Asynchronous JavaScript -

// console.log("satu");
// console.log("dua");
// console.log("tiga");

// Diatas ini contoh synchronous (blocking)
// Sebelum menjalankan baris dua, dia harus dijalankan yang satu (antri), secara berurutan

// Asynchronous -> Kita bisa menjalankan proses yang lain terlebih dahulu tanpa menunggu satu proses itu selesai

// - Callback - Fungsi yang ada dalam parameter dari fungsi yang lainnya
// function greetings(fullName) {
//   console.log(`Hi ${fullName}`);
// }
// BISA PAKAI CARA DIATAS

// function introduction(firstName, lastName, callback) {
//   const fullName = `${firstName} ${lastName}`;
//   callback(fullName);
// }

// introduction("John", "Doe", greetings);

// introduction("John", "Doe", (fullName) => {
//   console.log(`HI ${fullName}`);
// });
// BISA JUGA PAKAI CARA INI

// Asyn
  // console.log("satu");
  // setTimeout(() => {
  //   console.log("dua");
  // }, 2000)
  // console.log("tiga");

// Penerapan Asynchronous JavaScript ada 3 yaitu callback, promise, async a wait

  // function proses1() {
  //   console.log("Proses 1 selesai dijalankan");
  // }

  // function proses2(callback) {
  //   setTimeout(() => {
  //     console.log("Proses 2 selesai dijalankan");
  //     callback();
  //   }, 2000);
  // }

  // function proses3() {
  //   console.log("Proses 3 selesai dijalankan");
  // }

  // proses1();
  // proses2(proses3);

  // setTimeout(() => {
  //   console.log("Proses 1");
  //   setTimeout(() => {
  //     console.log("Proses 2");
  //     setTimeout(()=> {
  //       console.log("Proses 3");
  //       setTimeout(()=> {
  //         console.log("Proses 4");
  //       }, 2000);
  //     }, 2000);
  //   }, 2000);
  // }, 2000);
  // Callback hell, model yang membuat code susah dibaca

  //Promise -> Digunakan untuk mengatasi callback hell
  //Promise, sebuah objek di JS yang mana output dari promise ada 3 yaitu pending, fulfilled, dan rejected

  // let condition = true;

  // *function newPromise () {
  //   return newPromise = new Promise((resolve, reject)=> {
  //     if(condition){
  //       resolve("Berhasil");
  //     } else {
  //       reject("Error");
  //     }
  //   });
  // }

  // let newPromise = new Promise((resolve, reject)=> {
  //   if(condition){
  //     resolve("Berhasil");
  //   } else {
  //     reject("Error");
  //   }
  // });

  // newPromise.then((result)=> {
  //   console.log("result");
  // }).catch(error => {
  //   console.log(error);
  // });

  // *newPromise().then((result)=> {
  //   return result;
  // }).then((result2) => {
  //   console.log(`${result2} !!!` );
  // }).catch(error => {
  //   console.log(error);
  // });

  function getIdStudent() {
    return new Promise((resolve, reject) => {
      resolve("12345");
    });
  }

  function getNameByID(id) {
    return new Promise((resolve, reject) => {
      if (id === "12345") {
        resolve("John Doe");
      } else {
        reject("Unknown ID Student");
      }
    });
  }

  // CARA PERTAMA
  // getIdStudent().then((id) => {    DENGAN CHAINING
  //   return getNameByID(id);
  // }).then(name => {
  //   console.log(name);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // getIdStudent().then((id) => {     TANPA CHAINING
  //   getNameByID(id).then((name) => {
  //     console.log(name);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // });

  // getIdStudent().then((id) => {
  //   return getNameByID(id)
  // }).then((name) => {
  //   console.log(name);
  // }).catch((error) => {
  //   console.log(error);
  // });

  // CARA KEDUA
  // const getNameByIdAsync = async () => {
  //   const id = await getIdStudent();
  //   const name = await getNameByID(id);
  //   console.log(name);
  // };

  // getNameByIdAsync();

  // Menangkap errornya
  const getNameByIdAsync = async () => {
    try {
      const id = await getIdStudent();
      const name = await getNameByID(id);
      console.log(name);
    } catch (error) {
      console.log(error);
    }
  };

  getNameByIdAsync();