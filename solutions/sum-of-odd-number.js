function rowSumOddNumbers(n) {
  let firstDigit = n * n - (n - 1);
  let count = 0;
  let ans = 0;
  while (count < n) {
    if (firstDigit % 2 !== 0) {
      ans += firstDigit;
      count++;
    }
    firstDigit++;
  }

  return ans;
}

function rowSumOddNumbers(n) {
  return n * n * n;
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);
