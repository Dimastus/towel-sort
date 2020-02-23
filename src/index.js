module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return result;
    } else {
        matrix.forEach((elem, index) =>
            !(index % 2) ? result.push(...elem) : result.push(...elem.reverse())
        );
        return result;
    }
};
