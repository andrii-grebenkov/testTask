require("ts-node").register();
process.env.TS_NODE_FILES = 'true';

const protractorConfig = {
  directConnect: true,
  specs: ["../specs/*.spec.ts"],
  baseUrl: "https://rozetka.com.ua/",
  framework: "mocha",
  mochaOpts: {
    timeout: 60000,
  }
};
exports.config = protractorConfig;
