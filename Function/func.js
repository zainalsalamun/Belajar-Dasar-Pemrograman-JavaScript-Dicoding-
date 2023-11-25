

function penjumlahan(a,b ) {
    return a + b;
}

function pengurangan(a,b ) {
    return a - b;
}

function perkalian(a,b ) {
    return a * b;
}

function pembagian(a,b ) {
    return a / b;


}

let hasilPenjumlahan = penjumlahan(10, 2);
let hasilPengurangan = pengurangan(10, 2);
let hasilPerkalian = perkalian(10, 2);
let hasilPembagian = pembagian(10, 2);

console.log(hasilPenjumlahan);
console.log(hasilPengurangan);
console.log(hasilPerkalian);
console.log(hasilPembagian);



function penjumlahan(a,b ) {
    var penjumlahan = a + b;
    var perkalian = a * b;
    var pengurangan = a - b;
    var pembagian = a / b;

    var hasil = [penjumlahan, perkalian, pengurangan, pembagian];
    
    return hasil;

}

let hasil = penjumlahan(10, 10);
console.log(hasil[0]);
console.log(hasil[1]);
console.log(hasil[2]);
console.log(hasil[3]);

function check (bilangan1, bilangan2, operator) {
    if (operator == "+") {
        return penjumlahan(bilangan1, bilangan2);
    } if (operator == "-") {
        return pengurangan(bilangan1, bilangan2);
    } if (operator == "*") {
        return perkalian(bilangan1, bilangan2);
    } if (operator == "/") {
        return pembagian(bilangan1, bilangan2);
    }
}

console.log(check(10, 2, "+"));
console.log(check(10, 2, "-"));
console.log(check(10, 2, "*"));
console.log(check(10, 2, "/"));



