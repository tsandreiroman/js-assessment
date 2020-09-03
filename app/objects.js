exports = typeof window === "undefined" ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => fn.bind(obj)(),
  //fn.apply(obj)

  alterObjects: (constructor, greeting) =>
    (constructor.prototype.greeting = greeting),

  iterate: (obj) => Object.keys(obj).map((key) => `${key}: ${obj[key]}`),
  // {
  // let answers = [];
  // for (property in obj) {
  //   if (obj.hasOwnProperty(property)) {
  //     answers.push(`${property}: ${obj[property]}`);
  //   }
  // }
};
