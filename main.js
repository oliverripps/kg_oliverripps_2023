const parseNumber = (num) => {
  let digitList = new Array();
  let firstDigit = true;
  while (num >= 1 || firstDigit) {
    if (num % 10 === 0) {
      digitList.push('Zero');
    } else if (num % 10 == 1) {
      digitList.push('One');
    } else if (num % 10 == 2) {
      digitList.push('Two');
    } else if (num % 10 == 3) {
      digitList.push('Three');
    } else if (num % 10 == 4) {
      digitList.push('Four');
    } else if (num % 10 == 5) {
      digitList.push('Five');
    } else if (num % 10 == 6) {
      digitList.push('Six');
    } else if (num % 10 == 7) {
      digitList.push('Seven');
    } else if (num % 10 == 8) {
      digitList.push('Eight');
    } else {
      digitList.push('Nine');
    }
    firstDigit = false;
    num = parseInt(num / 10);
  }
  let digitString = '';
  for (let i = digitList.length - 1; i >= 0; i--) {
    digitString += digitList[i];
  }
  return digitString;
};
const parseInput = (input) => {
  let numList = '';
  for (let i = 0; i < input.length; i++) {
    numList += parseNumber(input[i]);
    if (i != input.length - 1) {
      numList += ',';
    }
  }
  return numList;
};
const input = process.argv.slice(2);
const numberList = parseInput(input);
console.log(numberList);
