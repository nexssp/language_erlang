// additional info for templates like copy extra libraries.
// in this case library needs JSON
const config = {
  files: ["mochijson2.erl"],
  // We copy to previous folder as didn't work from current folder (Only on Nexss Programmer Projects).
  commands: [
    "IF exist src (move src\\mochijson2.erl .)",
    "erlc mochijson2.erl"
  ],
  repos: ["https://github.com/mochi/mochiweb"],
  descriptions: [
    `It uses mochijson2.erl which is part of Mochiweb
More about MIT License here: https://github.com/mochi/mochiweb/blob/master/LICENSE`
  ]
};

module.exports = config;
