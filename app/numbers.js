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
    // 2. return the character at specified index ( (bit - 1) bc. charAt starts counting at 0)
    // 3. convert result from string to number
    return parseInt(binaryOfNum.join("").charAt(bit - 1), 10);
  },

  base10: (str) => {
    const strToArray = str.split("");
    let decimal = 0;

    // pentru fiecare numar din array, adun la "decimal"
    // numarul respectiv * 2 la puterea array.length - (index+1)
    // (index+1) pentru ca index-ul incepe de la 0, dar pentru calcul e nevoie ca ordinea sa inceapa de la 1
    strToArray.forEach((number, index) => {
      decimal += number * Math.pow(2, strToArray.length - (index + 1));
    });
    return decimal;
  },
  // parseInt(str,2) -> functioneaza la fel

  convertToBinary: (num) => {
    const binaryOfNum = [];
    let currentValue = num;

    // atat timp cat currentValue e mai mare decat 0, verific daca currentValue este par
    // 1. daca este par, adaug in binaryOfNum -> 0
    // 2. daca este impan, adaug in bynaryOfNum -> 1
    while (currentValue > 0) {
      currentValue % 2 ? binaryOfNum.push(1) : binaryOfNum.push(0);
      currentValue = Math.floor(currentValue / 2);
    }

    return binaryOfNum.reverse().join("");
  },

  multiply: (a, b) => {
    let result = 0;
    const firstValue = levelUpValue(a);
    const secondValue = levelUpValue(b);

    // la rezultat basically verific atat firstValue cat si secondValue daca contine key-ul leveledUpNumber
    // 1. daca il contine, returnez valoarea pentru acel key
    // 2. daca nu il contine, inseamna ca nu e obiect, atunci returnez direct valoarea lui, in speta 3 pentru exemplul din test
    // *** la fel procedez si pentru divider, daca nu exista divider, returnez 1.
    // shorty, result looks like this: result = (multipliedNumber * multipliedNumber) / divider(multiplier)
    result =
      ((firstValue.leveledUpNumber ? firstValue.leveledUpNumber : firstValue) *
        (secondValue.leveledUpNumber
          ? secondValue.leveledUpNumber
          : secondValue)) /
      ((firstValue.divider ? firstValue.divider : 1) *
        (secondValue.divider ? secondValue.divider : 1));

    function levelUpValue(number) {
      let multiplier;

      if (number < 1) {
        let numberToString = number.toString(); // convertesc numarul in string
        let digitsAfterComma = numberToString
          .substring(2, numberToString.length)
          .split(""); // iau numarul de cifre care se afla dupa virgula
        multiplier = Math.pow(10, digitsAfterComma.length); // multiplier = 10 la puterea numarului de cifre de dupa virgula

        // returnez un obiect care tine
        // leveledUpNumber: numarul sub-unitar primit ca argument, inmultit cu multiplier pentru a fi echi-unitar
        // divider: same as multiplier, dar l-am numit asa pentru ca mai departe il folosesc pentru a imaprti rezultatul final
        return {
          leveledUpNumber: number * multiplier,
          divider: multiplier,
        };
      } else return number;
    }

    return result;
  },
};
