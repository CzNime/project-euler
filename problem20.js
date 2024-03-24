// Goal : Find the sum of the digits in the number 100!.

function faktorial(bilFaktorial) {
  let bilHasil = 1n;
  for (i = 1n; i <= bilFaktorial; i++) {
    bilHasil *= i;
  }
  return bilHasil;
}

function sumOfDigits(bilLength) {
  let hasil = 0;
  for (let i = 0; i < bilLength.length; i++) {
    hasil += parseInt(bilLength[i]);
  }
  return hasil;
}

console.log(sumOfDigits(faktorial(100n).toString()));
