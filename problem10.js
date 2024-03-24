// Goal : The sum of the primes below 10 is 2+3+5+7= 17. Find the sum of all the primes below two million.

function bilanganPrima(bilMax) {
  const arrPrima = Array(bilMax + 1).fill(true);
  arrPrima[0] = arrPrima[1] = false;

  for (let i = 2; i <= Math.sqrt(bilMax); i++) {
    if (arrPrima[i]) {
      for (let j = i * i; j <= bilMax; j += i) {
        arrPrima[j] = false;
      }
    }
  }

  return arrPrima;
}

function totalPrima(bilMax) {
  const primes = bilanganPrima(bilMax);
  let sum = 0;

  for (let i = 2; i <= bilMax; i++) {
    if (primes[i]) {
      sum += i;
    }
  }

  return sum;
}

console.log(totalPrima(2000000));
