const testArray = [0, 3, 4, 5, 1, 0, 2, 3, 5, 3];

const uniqueArray = (arr) => {
  return arr.reduce((acc, item) => acc.includes(item) ? [...acc] : [...acc, item], []);
};

console.log(uniqueArray(testArray));
