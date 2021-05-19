// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript


// Return the number (count) of vowels in the given string.
// solution 1 : O(1)
function getCount(str) {
    var vowelsCount = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    str.split('').forEach(element => {
      if(vowels.includes(element)) {
        ++vowelsCount;
      }
    });
    
    
    return vowelsCount;
  }

  // solution 2: O(n)
  function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length
  }

  // getCount('hello world');

  console.log(getCount('hello world'), 3)
  console.log(getCount('abracadabra'), 5)

