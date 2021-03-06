// karma configuration
var karma_conf = {
  basePath: '../../',
  browserify: {
    debug: true,
    paths: ['src'],
    transform: ['browserify-istanbul']
  },
  browserNoActivityTimeout: 1000000,
  browsers: [ 'Chrome', 'Firefox' ],
  client: {
    captureConsole: true,
    mocha: {'ui': 'tdd', timeout: 3000}
  },
  envPreprocessor: [
    'TEST_ENV'
  ],
  files: [
    // Define test files.
    // {pattern: './tests/unit/**/*.test.js'},
    {pattern: './tests/unit/NafInterface.test.js'},
    {pattern: './tests/unit/NafLogger.test.js'},
    {pattern: './tests/unit/utils.test.js'},
    {pattern: './tests/unit/NetworkConnection.test.js'},
    {pattern: './tests/unit/networked.test.js'},
    {pattern: './tests/unit/networked_withParent.test.js'},
    {pattern: './tests/unit/networked_remote.test.js'},
    {pattern: './tests/unit/NetworkEntities.test.js'},
    {pattern: './tests/unit/Schemas.test.js'},
    {pattern: './tests/unit/ChildEntityCache.test.js'},
    {pattern: './tests/unit/Compressor.test.js'},
    {pattern: './tests/unit/ComponentHelper.test.js'},
    {pattern: './tests/unit/NafPhysics.test.js'},

    {pattern: './src/**/*.js', included: false}
    // Serve test assets.
    // {pattern: 'tests/assets/**/*', included: false, served: true}
  ],
  frameworks: ['mocha', 'sinon-chai', 'chai-shallow-deep-equal', 'browserify'],
  preprocessors: {
    'tests/unit/**/*.js': ['browserify', 'env'],
    'src/**/*.js': 'coverage'
  },
  reporters: ['mocha', 'coverage']
  // restartOnFileChange: true
};

// Apply configuration
module.exports = function (config) {
  config.set(karma_conf);
};
