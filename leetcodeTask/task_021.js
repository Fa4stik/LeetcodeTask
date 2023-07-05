// const s = "ab", goal = "ba" // true
const s = "ab", goal = "ab" // false
// const s = "aa", goal = "aa" // true
// const s = "aaaaaaabc", goal = "aaaaaaacb" // true

var buddyStrings = function(s, goal) {
    if (s.length !== goal.length)
        return false;

    if (s === goal) {
        const unique = new Set(s.split(''))
        return unique.size < s.length;
    }

    let diffs = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i])
            diffs.push(i)
    }
    return diffs.length === 2 && s[diffs[0]] === goal[diffs[1]] && s[diffs[1]] === goal[diffs[0]];
};

module.exports = () => {
    return buddyStrings(s, goal);
}