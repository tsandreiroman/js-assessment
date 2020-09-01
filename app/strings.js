const { reduce } = require("underscore");

exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: (str, amount) => {
    let reducedString = "";
    [...str].forEach((letter, index) =>
      letter === [...str][index + 1] ? console.log(letter) : null
    );
    console.log(reducedString);
  },

  wordWrap: function (str, cols) {},

  reverseString: function (str) {},
};
