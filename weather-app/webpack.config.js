const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  // If you are using webpack 5, add the following line
  externalsPresets: { node: true },

  // Excludes node_modules from bundling for the browser
  externals: [
    nodeExternals({
      allowlist: ['stream-browserify'], // Allowlist necessary modules
    }),
  ],
};
