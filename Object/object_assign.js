// const student = Object.assign({
//     name : "viona",
//     age : 20,
// }, person);

// console.log(student);

const person = {
    name: "John",
    age: 30,
};

const student2 = Object.assign({}, person, {
    name: "Viona",
    age: 20,
});

console.log(student2);
console.log(person);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);
console.log(person1.name); 
console.log(person2.age);


class Student {
    constructor(name, age, address, hobbies) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.hobbies = hobbies;
        
    }
}

const student = new Student("Viona", 20, "Borneo", ["reading", "playing guitar", "cooking"]);
console.log(student);
