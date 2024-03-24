// Goal : Evaluate the sum of all the amicable numbers under 10000.

function pembagi(n) {
  let kondisi = true;
  let jumlahBil = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      jumlahBil += i;
    }

    if (i == n - 1) {
      kondisi = false;
      break;
    }
  }
  return jumlahBil;
}

let jumlahAmicable = 0;
for (let i = 1; i < 100000; i++) {
  const bil1 = pembagi(i);
  const bil2 = pembagi(bil1);
  if (i == bil2 && i !== bil1) {
    // console.log(i);
    jumlahAmicable += i;
  }
}

console.log(jumlahAmicable);
