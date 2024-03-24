// Goal : What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

let kondisi = true;
let i = 1;
while (kondisi == true) {
  for (let j = 1; j <= 20; j++) {
    if (i % j !== 0) {
      break;
    }
    if (j == 20) {
      console.log(i);
      kondisi = false;
    }
  }
  i++;
}
