const parseInput = (input) => {
  let numList = new Array();
  for (let i = 0; i < input.length; i++) {
    numList.push(input[i]);
  }
  return numList;
};
const input = process.argv.slice(2);
const numberList = parseInput(input);
console.log(numberList);
