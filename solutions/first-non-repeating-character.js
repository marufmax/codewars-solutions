// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript

// problem: Write a function named first_non_repeating_letter that takes a string input, 
// and returns the first character that is not repeated anywhere in the string

// without case handling
function firstNonRepeatingLetter(str) {
    const stringWithCount = []

    for (const element of str) {
        if(stringWithCount[element]) {
            stringWithCount[element] = stringWithCount[element] + 1
        }
    }

    console.log(stringWithCount);
    for (const key in stringWithCount) {
        if(stringWithCount[key] === 1) {
            return key;
        }
    }


     return '';
  }


// solution 2
function firstNonRepeatingLetter(str) {
    const repeatObj = {};
    let foundIndex;

    str.split('').find((element, index, arr) => {
        
    })
}

// console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('TsTareSS'), 'a');
// console.log(firstNonRepeatingLetter('moonmen'), 'e');