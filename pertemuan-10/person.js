// Export digunakan agar bisa di akses di file lain
const fullName = "John Doe";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
};

const display = ({firstName, lastName}) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

// export { fullName, person, display};
export { fullName as namaLengkap, person, display};

// Export Default itu akan lebih spesial, hanya blh terdapat 1 buah export default. 