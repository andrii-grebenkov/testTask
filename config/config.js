require("ts-node").register();

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
