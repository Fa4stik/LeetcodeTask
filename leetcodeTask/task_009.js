// const s = "anagram", t = "nagaram"
// const s = "rat", t = "car"
const s = "ab", t = "a"

// first solve
// var isAnagram = function(s, t) {
//     if (s.length !== t.length)
//         return false;
//     let newS = s.split('').sort();
//     let newT = t.split('').sort();
//     for (let i = 0; i < newS.length; i++) {
//         if (newS[i] !== newT[i])
//             return false;
//     }
//     return true;
// };

// second solve
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    let abc = {};
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in abc))
            abc[s[i]] = 1;
        else
            abc[s[i]]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (!(t[i] in abc))
            return false;
        if (--abc[t[i]] < 0)
            return false;
    }
    return true;
};

module.exports = () => {
    return isAnagram(s, t);
}