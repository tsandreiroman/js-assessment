exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
  valueAtBit: (num, bit) => {
    const binaryOfNum = [];
    let currentValue = num;

    while (currentValue > 0) {
      currentValue % 2 ? binaryOfNum.push(1) : binaryOfNum.push(0);
      currentValue = Math.floor(currentValue / 2);
    }

    // 1. join array elements in a string
    // 2. return the character at specified index
    // 3. convert result from string to number
    return parseInt(binaryOfNum.join("").charAt(bit - 1), 10);
  },

  base10: (str) => {
    const strToArray = str.split("");
    let decimal = 0;

    strToArray.forEach((number, index) => {
      decimal += number * Math.pow(2, strToArray.length - (index + 1));
    });

    return decimal;
  },

  convertToBinary: (num) => {
    const binaryOfNum = [];
    let currentValue = num;

    while (currentValue > 0) {
      currentValue % 2 ? binaryOfNum.push(1) : binaryOfNum.push(0);
      currentValue = Math.floor(currentValue / 2);
    }

    return binaryOfNum.reverse().join("");
  },

  multiply: (a, b) => {},
};
