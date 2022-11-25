const testString = 'What is the average airspeed velocity of an unladen swallow';

const findLongWord = (value) => {
  return value.split(' ').reduce((acc, item) => acc.length > item.length ? acc : item);
};

console.log(findLongWord(testString));
