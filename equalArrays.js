const testArrayOne = [1, 2, 3];
const testArrayTwo = [1, 2, 3];

const equalArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true
  }
  return false;
};

console.log(equalArrays(testArrayOne, testArrayTwo));
