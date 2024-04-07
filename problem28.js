// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

function kotak () {
    let jumlah = 1;
    let ukuranSaatIni = 1;
    let jarakSaatIni = 0;
    let bilSaatIni = 1;

    while(ukuranSaatIni < 1001) {
        ukuranSaatIni += 2
        jarakSaatIni += 2
        for(let i = 1; i<= 4; i++) {
            bilSaatIni += jarakSaatIni
            jumlah += bilSaatIni 
        } 
    }
    return jumlah
}


console.log(kotak())