exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: (str, amount) => {
    const arrayToReturn = [];
    let strArray = str.split("");

    strArray.forEach((char, index) => {
      if (index > 0) {
        if (char === strArray[index - amount]) {
          return;
        } else arrayToReturn.push(char);
      } else arrayToReturn.push(char);
    });
    return arrayToReturn.join("");
  },

  wordWrap: (str, cols) => {
    let words = str.split(" ");
    let outputString = "";
    let currentStringLength = 0;
    let separator;

    words.forEach((word, index) => {
      currentStringLength += word.length; // accumulator pentru length-ul fiecarui cuvant din array
      index === 0
        ? (separator = "") // daca e primul cuvant, nu am nevoie de separator in fata
        : currentStringLength > cols // daca accumulator-ul > "cols"-ul primit ca argument
        ? ((currentStringLength = word.length), (separator = "\n")) // resetez valoarea accumulator-ului pentru a introduc un line break
        : (separator = " "); // daca accumulator-ul < "cols"-ul primit ca argument, adaug doar un spatiu
      outputString += separator + word;
    });
    return outputString;
  },

  reverseString: (str) => str.split("").reverse().join(""),
};
