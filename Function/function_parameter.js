// function kuadrat(x) {
//     return x ** 2;
//   }
  
//   // Contoh penggunaan
//   let nilai = 5;
//   let hasil = kuadrat(nilai);
//   console.log(`Kuadrat dari ${nilai} adalah ${hasil}`);


  function bandingkanBilangan(x, y) {
    if (x > y) {
      return `${x} lebih besar dari ${y}`;
    } else if (x < y) {
      return `${y} lebih besar dari ${x}`;
    } else {
      return `${x} sama dengan ${y}`;
    }
  }
  
  // Contoh penggunaan
  let bilangan1 = 8;
  let bilangan2 = 5;
  let hasilPerbandingan = bandingkanBilangan(bilangan1, bilangan2);
  console.log(hasilPerbandingan);