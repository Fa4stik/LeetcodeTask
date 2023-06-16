// const s = "III" // 3
// const s = "LVIII" // 58
const s = "MCMXCIV" // 1994

// first solve
// var romanToInt = function(s) {
//     const romanChar = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000,
//     }
//     let number = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'I' && s[i+1] === 'V') {
//             number+=4;
//             i++;
//             continue;
//         }
//         if (s[i] === 'I' && s[i+1] === 'X') {
//             number+=9;
//             i++;
//             continue;
//         }
//         if (s[i] === 'X' && s[i+1] === 'L') {
//             number+=40;
//             i++;
//             continue;
//         }
//         if (s[i] === 'X' && s[i+1] === 'C') {
//             number+=90;
//             i++;
//             continue;
//         }
//         if (s[i] === 'C' && s[i+1] === 'D') {
//             number+=400;
//             i++;
//             continue;
//         }
//         if (s[i] === 'C' && s[i+1] === 'M') {
//             number+=900;
//             i++;
//             continue;
//         }
//         number+=romanChar[s[i]];
//     }
//     return number;
// };

// second solve
var romanToInt = function(s) {
    const romanChar = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let number = 0;

    for (let i = s.length-1; i>=0; i--) {
        if (romanChar[s[i]] * 4 < number)
            number -= romanChar[s[i]]
        else
            number += romanChar[s[i]]
    }

    return number;
}


module.exports = () => {
    return romanToInt(s)
}