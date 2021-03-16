//Syncronous Vs Asyncronous

//Syncrounous, Blocking, Single-Thread
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");

//Asyncronous, Non-blocking
//Multi-Thread : Parallel

// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2");
// }, 3000);
// console.log("Proses 3");

//Single-Thread : Concurent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//     }, 3000);
//   }, 3000);
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((item, index) => {
//   setTimeout(() => {
//     console.log(item);
//   }, index * 1000);
// });

// let condition = true;

// function newPromise() {
//   return new Promise((resolve, reject) => {
//     if (condition) {
//       resolve("Berhasil");
//     } else {
//       reject("Gagal");
//     }
//   });
// }

//Then - catch
// newPromise()
//   .then((res) => `${res} !!!`)
//   .then((res2) => {
//     console.log(res2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Async - await
// const getPromise = async () => {
//   try {
//     const res = await newPromise();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getPromise();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

const getJSONPlaceholder = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getJSONPlaceholder();
