// Goal : Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let jarakBilangan = 100;
let val1 = 0;
let val2 = 0;
let rentangHasil = 0;

for (let i = 1; i <= jarakBilangan; i++) {
  val1 = val1 + i * i;
}
console.log(val1);

for (let i = 1; i <= jarakBilangan; i++) {
  val2 += i;
}
val2 = val2 * val2;
console.log(val2);

rentangHasil = val1 - val2;
console.log(Math.abs(rentangHasil));
