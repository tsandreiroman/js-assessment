exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
  count: (start, end) => {
    let canceled = false;
    (function doTheCounting() {
      console.log(start++);
      start <= end && !canceled ? setTimeout(doTheCounting, 100) : null;
    })();

    return {
      cancel: () => (canceled = true),
    };
  },
};
