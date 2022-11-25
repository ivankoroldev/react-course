let testArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

const spreadArray = (arr) => {
  let res = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      res.push(...spreadArray(elem));
    } else {
      res.push(elem);
    }
  })
  return res;
};

console.log(spreadArray(testArray));
