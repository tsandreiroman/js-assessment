exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),

  sum: (arr) => arr.reduce((a, b) => a + b, 0),
  // sum: (arr) => {
  //   let sum = 0;
  //   arr.forEach((item) => (sum += item));
  //   return sum;
  // },

  // RETURN ANOTHER ARRAY
  remove: (arr, item) => arr.filter((element) => element !== item),
  // every element of the array is compared to the "item", if it is NOT equal to it, it is pushed to the returned array.
  // filter returneaza un array, continand elementele care respecta conditia impusa

  // RETURN THE ORIGINAL ARRAY
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

  append: (arr, item) => [...arr, item],

  truncate: (arr) => {
    const truncatedArr = [];

    // dau push in truncatedArr la fiecare element din arr, mai putin cel de pe ultima pozitie
    arr.forEach((element, index) =>
      index < arr.length - 1 ? truncatedArr.push(element) : null
    );
    return truncatedArr;
  },

  prepend: (arr, item) => [item, ...arr],

  curtail: (arr) => {
    const curtailedArr = [];

    // dau push in curtailedArr la fiecare element din arr, mai putin cel de pe prima pozitie
    arr.forEach((element, index) =>
      index > 0 ? curtailedArr.push(element) : null
    );
    return curtailedArr;
  },

  concat: (arr1, arr2) => arr1.concat(arr2),

  // returnez un array avand toate elementele array-ului primit inainte si dupa index-ul specificat
  // iar pe pozitia indicata, pun elementul cerut
  insert: (arr, item, index) => [
    ...arr.slice(0, index),
    item,
    ...arr.slice(index),
  ],

  count: (arr, item) => {
    let count = 0;
    arr.forEach((element) => (item === element ? count++ : null));
    return count;
  },

  duplicates: (arr) => {
    const sortedArr = arr.slice().sort(); // sorted copy of the given array
    const duplicates = [];

    sortedArr.forEach((element, index) => {
      // 1. index < sortedArr.length -> pentru a ma asigura ca sortedArr[index+1] nu returneaza undefined
      // 2. duplicates.indexOf(element) === -1 -> verific daca elementul exista deja in "duplicates" array
      // *** ternary -> daca elementul curent === elementul de pe pozitia urmatoare, dau push in "duplicates" array
      if (index < sortedArr.length && duplicates.indexOf(element) === -1) {
        element === sortedArr[index + 1] ? duplicates.push(element) : null;
      }
    });
    return duplicates;
  },

  square: (arr) => arr.map((element) => (element = element * element)),

  findAllOccurrences: (arr, target) => {
    let occurences = [];

    // de fiecare data cand elementul cerut este gasit in arr, dau push index-ului sau in "occurences"
    arr.forEach((element, index) =>
      element === target ? occurences.push(index) : null
    );

    return occurences;
  },
};
