module.exports = {
  unmockedModulePathPatterns: ['node_modules/react/', 'node_modules/enzyme/'],
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/**.js',
    '<rootDir>/src/**/**.(spec|test|e2e).js'
  ],
  testEnvironment: 'jsdom'
};
