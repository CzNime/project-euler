// Goal : What is the 10 001st prime number?

let kumpulanPrima = [];
let n = 2;

while (kumpulanPrima.length < 10000) {
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      if (i == n) {
        // console.log(kumpulanPrima.length + "=" + n + " bilangan prima");
        kumpulanPrima.push(n);
        break;
      }
      break;
    }
  }
  n++;
}
console.log(n);
