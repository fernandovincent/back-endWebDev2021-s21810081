// Array
// Array Literal menggunakan tanda []
let numbers = [1, 2, 3, 4, 5];
let john = ['John', 'Doe', 33, true];

// Array menggunakan New
// let numbers = new Array(1,2,3,4,5);
// let john = new Array("John", "Doe", 33, true);

john[3] = false;

console.log(numbers.length - 1);
console.log(john);

// Object
const john = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  isMarried: true,
  // Fungsi dalam Object disebut Method
  sayHello: function () {
    console.log("Hello");
  },
};

// const john = new Object();
// john.firstName = 'John';
// john.lastName = 'Doe';
// john.age = 33;
// john.isMarried = true;

console.log(john.lastName);
console.log(john["isMarried"]);

john.address = "Manado";
johon["nationality"] = "Indonesian";
console.log(john);

john.sayHello();

// Conditional





// Loop