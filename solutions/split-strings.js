// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
    let finalArr = [];
    if(!str.length) {
        return finalArr;
    }

    // brute force 
    for (let firstIndex = 0; firstIndex < str.length; firstIndex+=2) {
        let stringToConcact = str[firstIndex + 1];
        if(!str.hasOwnProperty(firstIndex + 1 )) {
             stringToConcact = '_';
        }
        const splitedString = str[firstIndex] + stringToConcact;
        finalArr.push(splitedString); 
    
        
    }

    return finalArr;
}

// console.log(solution("abcdef"), ["ab", "cd", "ef"]);
 console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// console.log(solution(""), []);