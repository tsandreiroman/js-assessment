exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: (str, amount) => {
    let output = "";
    const strArray = str.split("");
    const charsEvidence = {};

    // strArray.slice().forEach((char, index) => {
    //   if (index > 1) {
    //     if (strArray[index - amount] === char) {
    //       strArray.splice(index, 1);
    //     }
    //   } else return;
    // });
    // console.log(strArray);

    strArray.forEach((char, index) => {
      if (!charsEvidence[char]) {
        charsEvidence[char] = 1; // daca nu exista character-ul deja in obiect, il creeaza avand valoarea "1"
      } else {
        charsEvidence[char] += 1; // daca deja exista, il itereaza cu 1
      }

      if (charsEvidence[char] <= amount) {
        console.log(charsEvidence);
        output += char; // daca valoarea din obiect a character-ului e mai mica de "amount"-ul primit, il adauga in string-ul "output"
      }
    });

    return output;
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

  reverseString: (str) => str.slice().split("").reverse().join(""),
};
