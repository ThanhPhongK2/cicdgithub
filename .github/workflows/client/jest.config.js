module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)" // 👈 ép Jest transpile axios
  ]
};
