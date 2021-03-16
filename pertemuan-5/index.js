let scores = [85, 90, 100];
let john = ["john", "doe", 33, true, [85, 90, 100]];

let users = [
  {
    fullName: 'John Doe',
    age: 33,
    isMarried: true, 
    scores: [85, 90, 100],
    address: {
      street: 'Jl. Arnold Mononutu',
      city: 'Minahasa Utara',
      province: 'Sulawesi Utara',
      postCode: '95371',
    },
  },
  {
    fullName: 'Stenly Adam',
    age: 35,
    isMarried: true,
    scores: [90, 100, 95],
    address: {
      street: 'Jl. Arnold Mononutu',
      city: 'Minahasa Utara',
      province: 'Sulawesi Utara',
      postCode: '95371',
    },
  },
  {
    fullName: "Jane Doe",
    age: 25,
    isMarried: true,
    scores: [85, 90, 95],
    address: {
      street: 'Jl. Arnold Mononutu',
      city: 'Manado',
      province: 'Sulawesi Utara',
      postCode: '95371',
    },
  }
];

// console.log(users[2].fullName);
// console.log(users[1]["scores"]);
// console.log(users[1].address.street);

let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);

// for (let i=0; i<numbers.length; i++) {
//   console.log(numbers[i]);
// }

// Value, Index, Array
// Value harus selalu ada, jika tidak ada index atau array tidak apa"
// forEach tidak mengembalikan apapun
// numbers.forEach(function(item, index, arr){
//   item *=2;
//   console.log(item, index, arr);
// });

// // numbers.forEach(function(item){
// //   if (item >=3 ) {
// //     console.log(item);
// //   }
// // });

// // map bisa me-return nilainya, jika forEach tidak.
// let output = numbers.map(function (item) {
//   item *=2;
//   return item;
// })

// console.log('output map, ', numbers);
// console.log('output map, ', output); 

// let userNames = users.map(function (item) {
//   return item.fullName;
// });

// console.log(userNames);

let filterUsers = users.filter(function (item) {
  return item.address.city === 'Minahasa Utara';
});

let findUsers = users.find(function (item) {
  return item.address.city === 'Minahasa Utara';
});

console.log(filterUsers);
console.log(findUsers);

// let filterNumbers = numbers.filter(function (item) {
//   return item >= 3;
// }); 

// //find hanya mengembalikan data tunggal saja, atau elemen pertamanya
// let findNumber = numbers.find(function (item) {
//   return item >= 3;
// });

// console.log(filterNumbers);
// console.log(findNumber);