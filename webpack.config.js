const path = require('path');

module.exports = {
  entry: './src/forecast.js',
  output: {
    filename: 'forecast_main.js',
    path: path.resolve(__dirname, 'public'),
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
};