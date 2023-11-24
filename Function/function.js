// function fx(x) {
//     const hasil = x + (x*3)
//     return hasil
// }

const { Console } = require("console");

// console.log(fx(5))  
// console.log(fx(10))

// function diskon(x) {
//     let musimPandemik = (x*30)/100
//     return musimPandemik
// }

// let sale = diskon(20000)
// console.log(sale)


// function sayHito(name) {
//     let halo = `Hai ${name.toUpperCase()}!`
//     return halo
// } 

// let test1 = sayHito("everithing")
// console.log(test1)
// let test2 = sayHito(100)
// console.log(test2)


//const dataString ='Berapa total character string';
// const dataString ='Hallo nama saya zainal, saya ingi belajar javascript'
// function cobaSoal(str, nama) {
//     dataString = str + nama
     
// }

// console.log(contohSoal(dataString,'Zainal'))




function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
      return 'Genap';
    } else {
      return 'Ganjil';
    }
  }
  
 
  console.log(cekGenapGanjil(4));  
  console.log(cekGenapGanjil(7));  
  