exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: (fn, arr) => fn.apply(null, arr),

  speak: (fn, obj) => fn.call(obj),

  functionFunction: (str) => (next) => `${str}, ${next}`,

  // the arrow function taking "element" as arg = callback
  // the arrow function returned by the callback, together with the function that it is returning, forms a closure
  makeClosures: (arr, fn) => arr.map((element) => () => fn(element)),

  // nu inteleg conceptul de "partial" function
  // m-am uitat la test sa vad ce asteapta si am inteles ce trebuie facut
  // nu gasesc resurse pe net despre "partial" function, probabil nu caut ce trebuie
  partial: (fn, str1, str2) => (str3) => fn.call(this, str1, str2, str3),

  useArguments: function () {},

  callIt: function (fn) {},

  partialUsingArguments: function (fn) {},

  curryIt: function (fn) {},
};
