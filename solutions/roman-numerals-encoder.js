// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

/*------ PROBLEM -----
Create a function taking a positive integer as its parameter 
and returning a string containing the Roman Numeral representation of that integer.
solution(1000); // should return 'M'
*/





function solution(num){
    const valueMap = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    }
    
    let finalString = '';

    const numbers = Object.keys(valueMap);

    let count = 0;

    while(num > 0) {
        const substruct = numbers[count];
        if(substruct > num) {
            count++
        } else {
            num -= substruct;
            finalString += valueMap[substruct]
        }
    }

    return finalString;

  }


console.log(solution(5));
// console.log(solution(1000), 'M');