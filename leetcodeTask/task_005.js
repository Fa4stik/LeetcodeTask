const strs = ["flower","flow","flight"]
// const strs = ["dog","racecar","car"]
// const strs = ["flower","fkow"]
// const strs = ["a"]

// first solve

// var longestCommonPrefix = function(strs) {
//     let min = strs[0].length;
//     strs.map(str => {
//         if (min > str.length)
//             min = str.length;
//     })
//
//     let localPrefix = '';
//
//     for (let i = 0; i < min; i++) { // символ строки
//         let char = strs[0][i];
//         let count = 0;
//         for (let j = 0; j < strs.length; j++) { // перебор слов
//             if (strs[j][i] === char)
//                 count++;
//         }
//         if (strs.length === count) {
//             localPrefix += char
//         } else {
//             return localPrefix;
//         }
//     }
//
//     return localPrefix;
// };

// second solve

var longestCommonPrefix = function(strs) {
    strs.sort();
    let prefix = ''
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] === strs[strs.length - 1][i]) {
            prefix += strs[0][i];
        } else {
            return prefix;
        }
    }
    return prefix;
}

module.exports = () => {
    return longestCommonPrefix(strs);
}