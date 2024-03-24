// Goal : By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let val1 = 0;
let val2 = 1;
let kondisi = 0;
let jumlahGenap = 0;

for (let i = 0; kondisi < 4000000; i++) {
  let hasil = val1 + val2;
  kondisi = hasil;
  // console.log(hasil);
  val1 = val2;
  val2 = hasil;

  if (hasil % 2 == 0) {
    jumlahGenap += hasil;
  }
}

console.log(jumlahGenap);
