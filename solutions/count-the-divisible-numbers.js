function divisibleCount(x, y, k) {
  let numbers = [];

  //if (Math.min(x, y) === Math.max(x, y)) return 0;

  for (i = Math.floor(x); i <= Math.floor(y); i++) {
    if (i % k === 0) {
      numbers.push(i);
    }
  }

  return numbers.length;
}

function divisibleCount(x, y, k) {
  let count = 0;
  for (let i = x; i <= y; ) {
    if (i % k == 0) return (count = ++count + Math.floor((y - i) / k));
    else i++;
  }
  return count;
}

// function divisibleCount(x, y, k) {
//   return Math.floor(y / k) - Math.floor((x - 1) / k);
// }

console.log(divisibleCount(1.54, 6.442, 2), 3);
