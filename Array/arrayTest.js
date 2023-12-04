
arrayTest = ['mangga', 'jeruk', 'anggur', 'melon'] 
test = arrayTest;
testbuah = test.push('manggis');
console.log(arrayTest);
console.log(testbuah);

const array = ['mangga', 'jeruk', 'anggur', 'melon'];
const newArray = array.map((item, index) => {
  return `${item} ${index}`;
}
);