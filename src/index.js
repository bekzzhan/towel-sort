/* jshint esversion: 6 */
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (Array.isArray(matrix[i])) {
      if (i % 2 === 0) {
        for (const item of matrix[i]) {
            result.push(item);
        }
      } else {
        const arr = matrix[i].reverse();
        for (const item of arr) {
          result.push(item);
        }
      }
    } else {
        result.push(matrix[i]);
    }
  }
  return result;
};
