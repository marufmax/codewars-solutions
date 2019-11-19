function twoSort(s) {
  const sorted = s.sort();
  const firstValue = sorted[0].split("");
  const untilLast = firstValue.slice(0, -1);

  const withoutLast = untilLast
    .map(word => {
      return word + "***";
    })
    .join("");

  return withoutLast + firstValue.slice(-1)[0];
}

function twoSort(s) {
  return s
    .sort()[0]
    .split("")
    .join("****");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ]),
  "b***i***t***c***o***i***n"
);
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ]),
  "a***r***e"
);
