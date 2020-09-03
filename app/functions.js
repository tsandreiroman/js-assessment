exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: (fn, arr) => fn.apply(null, arr),

  speak: (fn, obj) => fn.call(obj),

  functionFunction: (str) => (next) => `${str}, ${next}`,

  // the arrow function taking "element" as arg = callback
  // the arrow function returned by the callback, together with the function that it is returning, forms a closure
  makeClosures: (arr, fn) => arr.map((element) => () => fn(element)),

  partial: (fn, str1, str2) => (str3) => fn.call(this, str1, str2, str3),

  useArguments: (...arguments) => {
    let sum = 0;
    arguments.forEach((arg) => (sum += arg));
    return sum;
  },

  callIt: (fn, ...arguments) => fn.apply(null, [...arguments]),

  // O functie e "partially" aplicata atunci cand primeste
  // mai putine argumente decat asteapta,
  // urmand sa returneze o noua functie care asteapta argumentele ramase
  partialUsingArguments: function (fn) {
    // storing the upcoming arguments, "1" is for skipping the function from positon 0
    let initialArgs = [].slice.call(arguments, 1, arguments.length);

    return function () {
      return fn.apply(null, [...initialArgs, ...arguments]);
    };
  },

  // O functie e "curried" atunci primeste, pe rand, cate un argument
  // si returneaza o noua functie care asteapta urmatorul argument
  curryIt: (fn) => {
    const args = [];
    let fnLength = fn.length;

    return function makeCurry(arg) {
      args.push(arg);
      if (args.length < fnLength) {
        return makeCurry;
      } else return fn.apply(null, args);
    };
  },
};
