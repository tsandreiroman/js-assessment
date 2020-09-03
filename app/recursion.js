exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: (data, dirName) => {
    const filesToReturn = [];

    function walkThroughFiles(givenData, givenDirName) {
      // DIRNAME IS GIVEN
      if (givenDirName !== undefined) {
        if (givenData.dir && givenData.dir === givenDirName) {
          givenData.files.forEach((content) =>
            typeof content === "string" ? filesToReturn.push(content) : null
          );
        } else if (givenData.dir && givenData.dir !== givenDirName) {
          givenData.files.forEach((content) => {
            if (content.dir && content.dir === givenDirName) {
              walkThroughFiles(content);
            }
          });
        }
        // DIRNAME ISN'T GIVEN
      } else {
        givenData.files.forEach((content) => {
          if (typeof content === "string") {
            filesToReturn.push(content);
          } else walkThroughFiles(content);
        });
      }
    }
    walkThroughFiles(data, dirName);

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
