const nilai = 50;

if (nilai <= 100 && nilai >= 80) {
    console.log('Grade: A');

} else if (nilai <= 79 && nilai >= 70) {
    console.log('Grade: B');

}   else if (nilai <= 69 && nilai >= 60) {  
    console.log('Grade: C');
    
}  else if (nilai <= 59 && nilai >= 50) {
    console.log('Grade: D');

} else if (nilai <= 49 && nilai >= 0) {
    console.log('Grade: E');
} else {
    console.log('Nilai tidak valid');
}

if (hujan || sabrinaIkut) {
    console.log('Sabrina bawa payung');
}

if (hujan && sabrinaIkut) {
    console.log('Sabrina bawa payung');
}