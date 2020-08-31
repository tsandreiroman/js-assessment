exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),

  sum: (arr) => arr.reduce((a, b) => a + b, 0),
  // sum: (arr) => {
  //   let sum = 0;
  //   arr.forEach((item) => (sum += item));
  //   return sum;
  // },

  remove: (arr, item) => arr.filter((element) => element !== item),
  // every element of the array is compared to the "item", if it is NOT equal to it, it is pushed to the returned array.

  removeWithoutCopy: (arr, item) => {
    const arrLength = arr.length;

    for (let index = 0; index <= arrLength; index++) {
      if (arr[index] === item) {
        arr.splice(index, 1);
        index--; // because once an item is removed, the array is re-indexed
      }
    }
    return arr;
  },
  append: (arr, item) => {
    arr.push(item);
    return arr;
  },

  truncate: (arr) => {
    arr.pop();
    return arr;
  },

  prepend: (arr, item) => {
    arr.unshift(item);
    return arr;
  },

  curtail: (arr) => {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {},

  insert: function (arr, item, index) {},

  count: function (arr, item) {},

  duplicates: function (arr) {},

  square: function (arr) {},

  findAllOccurrences: function (arr, target) {},
};
