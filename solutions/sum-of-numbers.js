function getSum(a, b) {
  if (a === b) {
    return a;
  }

  x = a < b ? a : b;
  y = b > a ? b : a;

  console.log(x);
  console.log(y);

  let total = [];
  for (let i = x; i <= y; i++) {
    total.push(i);
  }

  return total.reduce((prev, next) => prev + next);
}

function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  return (max - min + 1) * (min + max) / 2;
}

// console.log(getSum(1, 0), 1);
// console.log(getSum(0, -1), -1);
// console.log(getSum(0, 1), 1);
// console.log(getSum(1, 1), 1);
console.log(getSum(-1, 2), 2);
