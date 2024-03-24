// Goal : How many such routes are there through a 20 x 20 grid?

function faktorial(bilFaktorial) {
  let bilHasil = 1;
  for (i = 1; i <= bilFaktorial; i++) {
    bilHasil *= i;
  }
  return bilHasil;
}

function jalur(besarGrid) {
  let hasil = 1;
  hasil =
    faktorial(besarGrid + besarGrid) /
    (faktorial(besarGrid) * faktorial(besarGrid));
  return hasil;
}

console.log(jalur(10));
