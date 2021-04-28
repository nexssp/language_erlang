let languageConfig = Object.assign({}, require("./erlang.win32.nexss.config"));
const sudo = process.sudo;
languageConfig.compilers = {
  erlang: {
    install: `${sudo}apt install -y erlang`,
    command: "escript",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  // case "Alpine Linux":
  //   languageConfig.compilers.elixir.install = `apk add erlang`;
  //   break;
  case process.distros.UBUNTU:
    languageConfig.compilers.erlang.install = `${sudo}apt-get -y install wget
${sudo}wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && ${sudo} dpkg -i erlang-solutions_2.0_all.deb
${sudo}apt-get -y update
${sudo}apt-get -y install esl-erlang`;
    break;
  default:
    languageConfig.compilers.erlang.install = process.replacePMByDistro(
      `${sudo}apt update && ${sudo}apt install -y erlang`
    );
    break;
}

module.exports = languageConfig;
