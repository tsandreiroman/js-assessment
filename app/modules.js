exports = typeof window === "undefined" ? global : window;

exports.modulesAnswers = {
  createModule: (str1, str2) => ({
    greeting: str1,
    name: str2,
    sayIt: function () {
      return `${this.greeting}, ${this.name}`;
    },
  }),
};
