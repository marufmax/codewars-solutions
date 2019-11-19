function drawStairs(n) {
  if (n === 1) return "I";

  let stairs = [];
  for (let i = 0; i <= n; i++) {
    stairs += "I";
  }

  return stairs.split("").join("\n");
}

console.log(drawStairs(1), "I");
console.log(drawStairs(3), "I\n I\n  I");
console.log(drawStairs(5), "I\n I\n  I\n   I\n    I");
