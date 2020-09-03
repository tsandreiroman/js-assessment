exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
  async: (value) => Promise.resolve(value),

  manipulateRemoteData: async (url) => {
    let namesToSort = [];

    await fetch(url)
      .then((res) => res.json())
      .then((data) =>
        data.people.forEach((eachPeople) => namesToSort.push(eachPeople.name))
      );

    return namesToSort.sort();
  },
};
