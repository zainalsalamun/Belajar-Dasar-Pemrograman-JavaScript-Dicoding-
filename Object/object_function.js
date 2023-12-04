function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Membuat instance dari Person
var person1 = new Person("John Doe", 25);
var person2 = new Person("Jane Smith", 30);

console.log(person1.name); // Output: John Doe
console.log(person2.age); // Output: 30


function User (name, age) {
    this.name = name;
    this.age = age;
}
const user = new User ('viona', 20);
console.log(user);
