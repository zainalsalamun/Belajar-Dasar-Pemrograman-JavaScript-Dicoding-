// function hay(nama, jk) {
//     switch (jk) {
//         case 'L':
//             console.log('bro' + nama);
//             break;
//         case 'P':
//             console.log('sis' + nama);
//             break;
//         default:
//             console.log('halo,' +  nama);
//             break;
//     }

// }

// hay('Sabrina', 'P');

const tahunKelahiran = 2000;
let generasi;

if (tahunKelahiran >= 1946 && tahunKelahiran <= 1964) {
    generasi = "Baby Boomer";
} else if (tahunKelahiran >= 1965 && tahunKelahiran <= 1980) {
    generasi = "Generasi X";
} else if (tahunKelahiran >= 1981 && tahunKelahiran <= 1996) {
    generasi = "Generasi Y";
} else if (tahunKelahiran >= 1997 && tahunKelahiran <= 2012) {
    generasi = "Generasi Z";
} else {
    generasi = "Generasi lainnya";
}


console.log("Berdasarkan tahun lahir Anda (" + tahunKelahiran + "), Anda tergolong generasi " + generasi);