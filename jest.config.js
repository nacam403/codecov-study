module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageReporters: ["json", "text"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
};
