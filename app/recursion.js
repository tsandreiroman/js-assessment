exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: (data, dirName) => {
    const filesToReturn = [];
    // console.log(data);
    // console.log(dirName);

    // This function receives an array of files and checks if it contains files only on the top level
    // or it has more files nested in objects.
    // If it has nested files, same logic is applied.
    const bringNestedFile = (filesArray) => {
      filesArray.forEach((nestedFile) =>
        typeof nestedFile === "string"
          ? filesToReturn.push(nestedFile)
          : nestedFile.files.forEach((tooNestedFile) =>
              filesToReturn.push(tooNestedFile)
            )
      );
    };

    // DIRNAME IS GIVEN
    if (dirName !== undefined) {
      data.files.forEach((file) =>
        file.dir && file.dir === dirName ? bringNestedFile(file.files) : null
      );
      // DIRNAME ISN'T GIVEN
    } else {
      data.files.forEach((file) =>
        typeof file === "string"
          ? filesToReturn.push(file)
          : bringNestedFile(file.files)
      );
    }

    return filesToReturn;
  },

  permute: (arr) => {
    let output = [];

    const permute = (givenArray, m = []) => {
      if (givenArray.length === 0) {
        output.push(m);
      } else {
        givenArray.forEach((element, index) => {
          // console.log(`index: ${index}`);
          // console.log(`m: ${m}`);
          let currentArray = givenArray.slice();
          // console.log(`currArr: ${givenArray.slice()}`);
          let nextElement = currentArray.splice(index, 1)[0];
          // console.log(`nextElement: ${nextElement}`);
          // console.log("____________");
          permute(currentArray.slice(), [...m, nextElement]);
        });
      }
    };
    permute(arr);
    return output;
  },

  fibonacci: (n) => {
    let fib = [0, 1];
    for (let i = 1; i <= n; i++) {
      fib[i + 1] = fib[i] + fib[i - 1];
    }
    return fib[n];
  },

  validParentheses: (n) => {
    let output = [];
    const leftParantheses = (() => {
      let parantheses = [];
      for (let i = 0; i < n; i++) {
        parantheses = [...parantheses, "("];
      }
      return parantheses;
    })();
    const rightParantheses = (() => {
      let parantheses = [];
      for (let i = 0; i < n; i++) {
        parantheses = [...parantheses, ")"];
      }
      return parantheses;
    })();

    const createCombinations = (index) => {
      // console.log(leftParantheses, rightParantheses);
      // let combination = `${leftParantheses.pop()}${output.forEach(comb => )}${rightParantheses.pop()}`;
      // console.log(combination);
    };

    for (let index = 0; index < n; index++) {
      createCombinations(index);
    }

    return output;
  },
};
