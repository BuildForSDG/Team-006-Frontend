// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html


// eslint-disable-next-line func-names
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      // eslint-disable-next-line global-require
      require('karma-jasmine'),
      // eslint-disable-next-line global-require
      require('karma-chrome-launcher'),
      // eslint-disable-next-line global-require
      require('karma-jasmine-html-reporter'),
      // eslint-disable-next-line global-require
      require('karma-coverage-istanbul-reporter'),
      // eslint-disable-next-line global-require
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      // eslint-disable-next-line global-require
      dir: require('path').join(__dirname, './coverage/login'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
