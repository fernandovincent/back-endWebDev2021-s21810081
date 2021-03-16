// Module
// Tujuannya yaitu untuk memecah kode program kita ke dalam bagian" yang lebih kecil.
/* Alsan menggunakan module ? 
  - Maintainability, kita bisa dengan mudah apabila ada kesalahan dalam kdoe program,
  karena sudah dipisah dengan bag" kecil akan lebih mudah.
  - Penggunaan Nama Variabel, dapat dengan mudah memberi nama variabel
  atau alias
  - Reusable Code, DRY (Don't Repeat Yourself). 
  Untuk membuat code yang baik kita sebaiknaya tidak menggunakan variable atau function yang sama
*/

import { namaLengkap, person as orang, display } from './person.js';
import Input, { color } from "./TextInput/index.js";

console.log(namaLengkap, orang);
display(orang);
Input();
console.log(color);