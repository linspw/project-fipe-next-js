module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["config/tests.setup.js"],
  moduleNameMapper: {
    "^@(.*)$": "<rootDir>$1",
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@assets(.*)$": "<rootDir>/assets$1",
    "^@layouts(.*)$": "<rootDir>/layouts$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@modules(.*)$": "<rootDir>/modules$1",
    "^@stores(.*)$": "<rootDir>/stores$1",
    "^@services(.*)$": "<rootDir>/services$1",
    "^@stores(.*)$": "<rootDir>/stores$1",
    "^@app-types(.*)$": "<rootDir>/types$1",
    "^@api(.*)$": "<rootDir>/api$1",
  },
  rootDir: "src",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
  ],
};
