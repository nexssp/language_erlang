let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Erlang";
languageConfig.description =
  "Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. ";
languageConfig.url = "https://www.erlang.org";
languageConfig.extensions = [".erl"];
languageConfig.builders = {};
languageConfig.compilers = {
  // https://erlangcentral.org/wiki/Running_Erlang_Code_From_The_Command_Line
  // erl: {
  //   install: "scoop install erlang",
  //   // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
  //   command: "erl",
  //   args: " erl -pa -run <file> main -noshell",
  //   help: ``
  // },
  escript: {
    install: "scoop install erlang",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "escript",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.erlang.errors");
languageConfig.languagePackageManagers = {
  rebar: {
    installation: `Powershell -File ${__dirname}/install/installRebar3.ps1`,
    rebar3: `Powershell -File ${__dirname}/install/installRebar3.ps1`,
    // installation: `powershell -Command "Invoke-WebRequest -Uri https://s3.amazonaws.com/rebar3/rebar3 -OutFile rebar3"`,
    // "rm -rf rebar3 && git clone https://github.com/erlang/rebar3.git && cd rebar3 && bootstrap.bat && rebar3 local install",
    messageAfterInstallation:
      "Rebar3 has been compiled. Please copy rebar3 file to your PATH folder.", //this message will be displayed after this package manager installation, maybe some action needed etc.
    newapp: "rebar3 new app",
    new: "rebar3 new",
    installed: "rebar3 deps",
    shell: "rebar3 shell",
    // install: "rebar3 install",
    // uninstall: "",
    help: `repo: https://github.com/erlang/rebar3
url: https://www.rebar3.org/docs`,
    version: "rebar3 --version",
    init: () => {},
    else: "rebar3"
  }
};

module.exports = languageConfig;
