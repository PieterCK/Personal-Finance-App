const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: 'ExpenseTracker/static/src/vue/dist/', // Should be STATIC_URL + path/to/build
  outputDir: '../ExpenseTracker/static/src/vue/dist/', // Output to a directory in STATICFILES_DIRS
  filenameHashing: false, // Django will hash file names, not webpack
  runtimeCompiler: true,
  devServer: {
    devMiddleware: {
      // see https://github.com/webpack/webpack-dev-server/issues/2958
      writeToDisk: true, 
    }
  },
})
