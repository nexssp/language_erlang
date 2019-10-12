let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Erlang";
languageConfig.description =
  "Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. ";
languageConfig.url = "https://www.erlang.org";
languageConfig.extensions = [".erl"];
languageConfig.builders = {};
languageConfig.compilers = {
  erl: {
    install: "scoop install erlang",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "escript",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.erlang.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "wget https://s3.amazonaws.com/rebar3/rebar3 && chmod +x rebar3 && ./rebar3 local install",
    messageAfterInstallation:
      "", //this message will be displayed after this package manager installation, maybe some action needed etc.
	newproject: "rebar3 new app <args>",
    installed: "rebar3 deps <args>",
    search: "",
    install: "",
    uninstall: "",
    help: `repo: https://github.com/erlang/rebar3
url: https://www.rebar3.org/docs`,
    version: "composer version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;
