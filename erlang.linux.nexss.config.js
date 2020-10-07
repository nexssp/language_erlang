let languageConfig = Object.assign({}, require("./erlang.win32.nexss.config"));
languageConfig.compilers = {
  erlang: {
    install: `apt install -y erlang`,
    command: "escript",
    args: "<file>",
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  // case "Alpine Linux":
  //   languageConfig.compilers.elixir.install = `apk add erlang`;
  //   break;
  default:
    languageConfig.compilers.erlang.install = replaceCommandByDist(
      "apt update && apt install -y erlang"
    );
    break;
}

module.exports = languageConfig;
