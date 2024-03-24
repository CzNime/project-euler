// If we list all the natural numbers below
// that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

let lengthDivisor = 200;
let indexSetigita = 1;
let bilSegitiga = 0;
let indexDivisor = 0;
let kondisi = true;

while (indexDivisor < lengthDivisor) {
  indexDivisor = 0;
  bilSegitiga = (indexSetigita * (indexSetigita + 1)) / 2;
  for (let i = 1; i <= bilSegitiga; i++) {
    if (bilSegitiga % i == 0) {
      console.log(bilSegitiga, " ", indexSetigita, "  ", indexDivisor, i);
      if (i == bilSegitiga) {
        // faktorBilSegiitiga.push(i);
        indexDivisor += 1;
        break;
      }
      // faktorBilSegiitiga.push(i);
      indexDivisor += 1;
    }
  }
  // console.log(faktorBilSegiitiga);
  indexSetigita++;
}

console.log(indexDivisor);
// console.log(faktorBilSegiitiga);
// console.log(faktorBilSegiitiga.length);

// console.log("=====================+++++++========================");
// faktorBilSegiitiga.forEach((angka) => {
//   console.log(angka);
// });
