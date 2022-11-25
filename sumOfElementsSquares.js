const textArray = [1, 2, 3, 4, 5];

const sumOfElementsSquares = (arr) => {
  return arr.reduce((acc, item) => acc + Math.pow(item, 2));
};

console.log(sumOfElementsSquares(textArray));
