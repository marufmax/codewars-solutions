// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// brute force 
// function solution(str){
//     let finalArr = [];
//     if(!str.length) {
//         return finalArr;
//     }

    
//     for (let firstIndex = 0; firstIndex < str.length; firstIndex+=2) {
//         let stringToConcact = str[firstIndex + 1];
//         if(!str.hasOwnProperty(firstIndex + 1 )) {
//              stringToConcact = '_';
//         }
//         const splitedString = str[firstIndex] + stringToConcact;
//         finalArr.push(splitedString); 
    
        
//     }

//     return finalArr;
// }


// Regex
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }

// console.log(solution("abcdef"), ["ab", "cd", "ef"]);
 console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// console.log(solution(""), []);