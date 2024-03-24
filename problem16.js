// Goal : What is the sum of the digits of the number 2^1000?

let bilPangkat = BigInt(Math.pow(2, 1000));
let stringPangkat = bilPangkat.toString();

let hasil = 0;
for (let i = 0; i < stringPangkat.length; i++) {
  hasil += parseInt(stringPangkat[i]);
}

console.log(hasil);
