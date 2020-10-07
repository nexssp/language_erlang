// additional info for templates like copy extra libraries.
// in this case library needs JSON
let config;
if (process.platform === "win32") {
  config = {
    files: ["mochijson2.erl", "mix.exs"],
    // We copy to previous folder as didn't work from current folder (Only on Nexss Programmer Projects).
    commands: [
      process.platform === "win32"
        ? `Powershell -Command "if (Test-Path src ) { cd src ; mv src/mochijson2.erl . ; cd ..}"`
        : `if [ -d src ]; then cd src ; mv src/mochijson2.erl . ; cd ..; fi`,
    ],
    repos: ["https://github.com/mochi/mochiweb"],
    descriptions: [
      `It uses mochijson2.erl which is part of Mochiweb
More about MIT License here: https://github.com/mochi/mochiweb/blob/master/LICENSE`,
    ],
  };
} else {
  config = {
    files: ["mochijson2.erl"],
    // We copy to previous folder as didn't work from current folder (Only on Nexss Programmer Projects).
    commands: [
      "if ! command -v mix &> /dev/null; then nexss erl install; nexss exs install; fi",
      "erlc mochijson2.erl",
      // "mix local.hex --force",
      // "mix deps.get",
    ],
    repos: ["https://github.com/mochi/mochiweb"],
    descriptions: [
      `It uses mochijson2.erl which is part of Mochiweb
More about MIT License here: https://github.com/mochi/mochiweb/blob/master/LICENSE`,
    ],
  };
}

module.exports = config;
