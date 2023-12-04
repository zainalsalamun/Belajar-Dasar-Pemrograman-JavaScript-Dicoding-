

// const quanity = fruits.push('melon');
// console.log(fruits);
// console.log(quanity);
// const last = fruits.pop();
// console.log(fruits);
// console.log(last);
// const first = fruits.shift();
// console.log(fruits);
// console.log(first);

// const newLength = fruits.unshift('strawberry');
// console.log(fruits);
// console.log(newLength);

// const pos = fruits.indexOf('banana');
// const removedItem = fruits.splice(pos, 1);

//  const number = [1, 2, 3, 4, 5];
// const found = number.find((element) => element > 3);
// console.log(found);
// const foundIndex = number.findIndex((element) => element > 3);
// number.forEach((element) => console.log(element));
// console.log(foundIndex);
// console.log(number);
// number.splice(foundIndex, 1);
// number.indexOf(3);
// number.reduce((total, currentValue) => total + currentValue);
// number.find((element) => element > 3);
// number.flatMap((element) => [element * 2]);
// number.pop();
// number.push(6);

// arrayObject.forEach((element) => {
//     console.log(element);
// }   );


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, , 18, 19, 20];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, , 18, 19, 20];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, , 18, 19, 20];
//const fruits = ['apple', 'banana', 'orange'];

// const bilangan = array.filter((number) => number % 2 === 0);
// console.log(bilangan);
// const arrayBaru = array.concat(fruits);
// console.log(arrayBaru);
// const reduce = array.reduce((total, currentValue) => total + currentValue);
// console.log(reduce);

const reduce = array.reduce((total, currentValue) => total + currentValue);
const  genap= array2.filter((number) => number % 2 === 0);
const ganjil = array3.filter((number) => number % 2 !== 0);
const kombinasiArray = array.concat(array2, array3);

console.log(genap);
console.log(ganjil);
console.log(kombinasiArray);

