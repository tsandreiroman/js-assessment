exports = typeof window === "undefined" ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => fn.bind(obj)(),
  //fn.apply(obj)

  alterObjects: (constructor, greeting) =>
    (constructor.prototype.greeting = greeting),

  iterate: (obj) => {
    let keysValues = [];
    Object.keys(obj).forEach((key) => keysValues.push(`${key}: ${obj[key]}`));
    return keysValues;
  },
};
