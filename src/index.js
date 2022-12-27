
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
        const arr = [];
        for (i = 0; i < matrix.length; i++) {
            if ((i % 2 === 0) || (i === 0)) {
                let even = matrix[i];
                arr.push(...even);
            } else {
                let odd = [...matrix[i]].reverse();
                arr.push(...odd);
            }
        }

        if (matrix.length !== 0) {
            return arr;
        } else {
            return [];
        }
}
