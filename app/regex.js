exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
  // \d = digit
  containsNumber: (str) => /\d/.test(str),

  // \1 - it finds a repeat of the first matched character. (works for match of 2 elements)
  // \1\1 - works for match of 3 elements
  containsRepeatingLetter: (str) => /([a-z])\1/i.test(str),

  // $ = end of the string
  endsWithVowel: (str) => /[aeiou]$/i.test(str),

  // {n} = searches for n occurrences of the given condition
  captureThreeNumbers: (str) => {
    const matches = /\d{3}/.exec(str);
    return matches === null ? false : matches[0];
  },

  // ^ = start of the string
  matchesPattern: (str) => /^\d{3}-\d{3}-\d{4}$/.test(str),

  // * = repeats the sequence
  // ? = the sequence is optional
  // {n,m} = works like an interval, m > n
  isUSD: (str) => /^\$\d{1,3},?(\d{3},?)*(\.\d{2})?$/.test(str),
};
