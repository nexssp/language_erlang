module.exports = {
  description: "Erlang",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "escript",
  extension: ".erl",
  errors: {
    "'erlang' is": {
      win32: "scoop install erlang",
      darwin: "brew install erlang",
      linux: "apt install erlang -y"
    },
    "you may need to install": {
      win32: "tocomplete <module>",
      darwin: "tocompletejuliainslta <module>",
      linux: "<module>"
    }
  },
  url: ""
};
