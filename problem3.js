// What is the largest prime factor of the number 600851475143 ?

let kondisi = true;
let bilanganFaktor = 600851475143;
let bilSementara;
let hasil;
while (kondisi == true) {
  for (let i = 2; i < 999999; i++) {
    if (bilanganFaktor % i == 0) {
      bilSementara = bilanganFaktor / i;
      bilanganFaktor = bilSementara;
      hasil = i;
      break;
    }
  }

  if (bilSementara === 1) {
    kondisi = false;
    console.log(hasil);
    break;
  }
}
