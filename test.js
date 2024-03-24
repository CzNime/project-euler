let bilSegitiga = 123710001000;
let n = 1;
console.log((500000 * (500000 + 1)) / 2);

// while (n + n * n !== bilSegitiga * 2) {
//   console.log(n);
//   n++;
// }

let indeks = 1;
let max = 500;
while (indeks <= 500)
  for (let i = 1; i <= 251695; i++) {
    if (i % 2 == 0) {
      indeks++;
      console.log(indeks, i);
    }
  }
