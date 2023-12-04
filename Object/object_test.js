
var anggota = [
    {
        nama: 'Budi',
        umur: 18,
    },
    {
        nama: 'Asri',
        umur: 17,
    },
    {
        nama: 'Choirul',
        umur: 19,
    },
    {
        nama: 'Deni',
        umur: 20,
    },
    {
        nama: 'Erna',
        umur: 15,
    }
]
// Menampilkan usia choirul
const choirul = anggota.find((anggota) => anggota.nama === 'Choirul');
console.log(choirul.umur);
//Tampilkan array yang berumur 17 tahun ke atas
console.log(anggota.filter((anggota) => anggota.umur >= 18));
// Tampilkan array apakah ada yang berumur 22 tahun 
const array = anggota.some((anggota) => anggota.umur > 22);
console.log(array);
// jumlah total usia dari array tersebut
const totalUmur = anggota.reduce((total, anggota) => total + anggota.umur, 0);
console.log(totalUmur);

