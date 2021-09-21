// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
// write a function that returns the positions 
// and the values of the "peaks" (or local maxima) of a numeric array.

// simplest solution for pick of two
function pickPeaks(arr){
    const result = {
      pos: [],
      peaks: []
    }

    for (let i = 0; i < arr.length - 1; i++) {
      let leftNum  = arr[i-1]
      let rightNum = arr[i+1]

      if(leftNum < arr[i] && rightNum < arr[i]) {
        result.pos.push(i)
        result.peaks.push(arr[i])
      } else {
        console.log(arr[i]);
      }
      
    }

     return result
  }

// console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1], {pos:[3,7], peaks:[6,3]}));
// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});