module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFilesAfterEnv: ["./jest.setup.js"],
  snapshotSerializers: ["jest-serializer-vue"],
};
