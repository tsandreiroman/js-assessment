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

  concat: (arr1, arr2) => arr1.concat(arr2),

  insert: (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
  },

  count: (arr, item) => {
    let count = 0;
    arr.forEach((element) => (item === element ? count++ : null));
    return count;
  },

  duplicates: (arr) => {
    // created a sorted copy of the giver array
    const sortedArr = arr.slice().sort();
    let duplicates = [];
    sortedArr.forEach((element, index) => {
      // verify if index is lower than sorted array length & if that element isn't already pushed to the duplicates array
      if (index < sortedArr.length && duplicates.indexOf(element) === -1) {
        element === sortedArr[index + 1] ? duplicates.push(element) : null;
      }
    });
    return duplicates;
  },

  square: (arr) => arr.map((element) => (element = element * element)),

  findAllOccurrences: (arr, target) => {
    let occurences = [];
    arr.forEach((element, index) =>
      element === target ? occurences.push(index) : null
    );
    return occurences;
  },
};
