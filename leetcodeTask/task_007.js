// const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] // true
const coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]] // false

var checkStraightLine = function(coordinates) {
    let xa = coordinates[0][0]
    let ya = coordinates[0][1]
    let xb = coordinates[1][0]
    let yb = coordinates[1][1]

    let rightValue = xa*(yb-ya) - ya*(xb-xa);

    for (let i = 2; i < coordinates.length; i++) {
        if (coordinates[i][0] * (yb-ya) - coordinates[i][1]* (xb-xa) !== rightValue)
            return false
    }

    return true;
};

module.exports = () => {
    return checkStraightLine(coordinates)
}