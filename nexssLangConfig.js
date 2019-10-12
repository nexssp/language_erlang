const { ProgrammingLanguage } = require("../../lib/programmingLanguage");
const pl = new ProgrammingLanguage(".erl");

pl.add("title", "Erlang");
pl.add("description", `Erlang`);
// nexss-start.js
// Compiler
// If in the folder there is below files it will be run.
// First looking in the 1!project folder, then in the 2!language folder
// then 3!standard compiler
// Standard will be run: g++ myfile.cpp myarg1 myarg2..
pl.add("compiler", "escript"); // clang++
// Custom compiler gets file as first parameter
// eg customCompiler.darwin.cpp.bat myfile.cpp myarg1 myarg2..

// warning: no 'all' option available! only win32, linux, darwin
pl.add("customCompiler", {
  win32: "customCompiler.win32.cpp.cmd",
  linux: "customCompiler.linux.cpp.sh",
  darwin: "customCompiler.darwin.cpp.sh"
});

pl.add("compilerInstallation", {
  win32: "scoop install rebar3",
  linux: "install/installCLang.sh",
  darwin: "brew install <package>"
});

pl.add("packageManagerInstallation", {
  win32: "PowerShell.exe -File installRebar3.bat",
  linux: "bash install/installVCPKG.sh",
  darwin: "bash install/installVCPKG.sh"
});

pl.add("packageManagerUpdate", {
  win32: "PowerShell.exe -File updateVCPKG.bat",
  linux: "bash install/updateVCPKG.sh",
  darwin: "bash install/updateVCPKG.sh"
});

// nexss-install.js
pl.add("packageManager", { all: "rebar3 install <package>" });
// pl.add("afterPackageInstallMessage", {
//   all:
//     "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';"
// });

// nexss-search.js
pl.add("packagaManagerFunctions", {
  all: {
    search: "vcpkg search <args>",
    installed: "vcpkg list",
    uninstall: "vcpkg remove <args>",
    help: "vcpkg help <args>",
    version: "vcpkg help <args>"
  }
});

pl.addError("Uncaught Error: Class '(.*?)'", {
  win32: "nexss install php <package>",
  darwin: "nexss install php <package>",
  linux: "nexss install php <package>"
});

pl.addHelp("executeCommandLine", "");
pl.addHelp("InteractiveShell", "");

pl.add("url", "https://php.net");

module.exports = pl.data;
