/* Destructuring, untuk membongkar isi array atau objek
dan menyimpan hasilnya ke dalam variabel" lain*/

//Desktrukturisasi (dia akan melihat urutannya)

// Array (Caranya, Ambil sebagian item, Deklarasi & Assignment terpisah, Default value, Rest Operator)
//let age;
const arrPerson = ["John", "Doe", 33, true, "Minahasa Utara"];

// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];

// const [firstName, , age] = arrPerson;

// deklarasi dan assignment terpisah
// let [, , age, isMarried, address = "Manado"] = arrPerson;

// console.log(age, isMarried);

//Rest Operator
// let [firstName, lastName, ...rest] = arrPerson;

// console.log(firstName, lastName);
// console.log(rest);

// Object (Caranya, Ambil sebagian item, Deklarasi & Assignment terpisah, Default value, Rest Operator)
// let firstName, lastName;

const objPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  isMarried: true,
  address: "Minahasa Utara",
};

// const firstName = objPerson.firstName;
// const lastName = objPerson.lastName;
// const age = objPerson.age;
// const isMarried = objPerson.isMarried;


// Array gunakan kurung siku, Object gunakan kurung kurawal
// const { firstName, lastName } = objPerson;
// const { age: umur} = objPerson;

//console.log(umur);

// Deklarasi dan assignment terpisah
// ({ firstName, lastName, address = "Manado" } = objPerson);

// Rest Operator
// let { firstName, lastName, ...rest} = objPerson;

// console.log(firstName, lastName, rest);

// const display = (props) => 
// `Hallo nama saya ${props.firstName} ${props.lastName}`; 

const display = ({firstName, lastName }) => 
`Hallo nama saya ${firstName} ${lastName}`; 

console.log(display(objPerson));




