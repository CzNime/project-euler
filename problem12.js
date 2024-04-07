// If we list all the natural numbers below
// that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

let lengthDivisor = 500;
let indexSetigita = 1;
let bilSegitiga = 0;
let indexDivisor = 0;
let kondisi = true;

while (true) {  
  indexDivisor = 0;
  bilSegitiga = (indexSetigita * (indexSetigita + 1)) / 2;
  for (let i = 1; i <= Math.sqrt(bilSegitiga); i++) {  
    if (bilSegitiga % i === 0) {
      if (i * i === bilSegitiga) {  
        indexDivisor += 1;
      } else {
        indexDivisor += 2; 
      }
    }
  }
  if (indexDivisor > lengthDivisor) {
    break;  
  }
  indexSetigita++;
}

console.log(bilSegitiga); 