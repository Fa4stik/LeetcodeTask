// const s = "()"
// const s = "()[]{}"
// const s = "(]"

var isValid = function(s) {
    let brackets = []
    const openBrackets = ['(', '[', '{']
    const closeBrackets = [')', ']', '}']
    for (let i = 0; i < s.length; i++) {
        if (openBrackets.includes(s[i])) {
            brackets.push(s[i])
        } else {
            const lastBracket = brackets.pop()
            const indexLastBracket = openBrackets.lastIndexOf(lastBracket);
            if (closeBrackets[indexLastBracket] !== s[i]) {
                return false;
            }
        }
    }
    return brackets.length === 0;
};

console.log(isValid(s))