
// Contoh objek "person"
const person = {
  name: "John Doe",
  age: 30,
  address: "123 Main Street",
  hobbies: ["reading", "playing guitar", "cooking"],
  isStudent: true
};

console.log(person);

const student = new Object();
student.name = "Jane Doe";
student.age = 25;
student.address = "123 Main Street";
student.hobbies = ["writing", "playing piano", "drawing"];
student.isStudent = true;
student.gender = "Male";
student.family = {
    father: "John Doe",
    mother: "Jane Doe",
    sister: "Alice Doe"
};
console.log(student);


const keys = Object.keys(person);

const test = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
    hobbies: ["reading", "playing guitar", "cooking"],
    isStudent: true
};

Object.keys(test).forEach(function(key) {
    console.log(test[key]);
});

// Object merupakan tipe data yang sangat penting dalam JavaScript.
//  Hampir semua hal dalam JavaScript adalah objek,
//  termasuk function, array, dan bahkan prototype.
//  Objek dapat dibuat dengan menggunakan literal atau fungsi konstruktor.
//  Untuk mengakses properti objek, kita dapat menggunakan dot notation atau bracket notation.
//  Untuk menghapus properti objek, kita dapat menggunakan operator delete.
//  Untuk menggabungkan dua objek, kita dapat menggunakan fungsi Object.assign().
//  Untuk membuat objek baru dari objek yang sudah ada, kita dapat menggunakan fungsi Object.create().
//  Untuk mengubah properti objek menjadi enumerable atau configurable, kita dapat menggunakan fungsi Object.defineProperty().
//  Untuk mengubah properti objek menjadi writable, kita dapat menggunakan fungsi Object.freeze().

// Object Method dapat dibuat atau di deklarasikan di dalam objek itu sendiri.
//  Object Method dapat diakses dengan menggunakan dot notation atau bracket notation.
//  Object Method dapat mengakses properti objek menggunakan this.
// Untuk mengakses method yang ada di dalam objek, kita dapat menggunakan dot notation atau bracket notation.
