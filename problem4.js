// Find the largest palindrome made from the product of two 3-digit numbers.

//BruteForce
console.time("runtime");
let myArray = [];
function isPalindrome(num) {
  const strNum = String(num);
  return strNum === strNum.split("").reverse().join("");
}

for (let i = 999; i >= 100; i--) {
  for (let j = 999; j >= 100; j--) {
    let number = i * j;

    if (isPalindrome(number)) {
      myArray.push(number);
    }
  }
}

const largestPalindrome = Math.max(...myArray);
console.log("Largest Palindrome: " + largestPalindrome);

console.timeEnd("runtime");
