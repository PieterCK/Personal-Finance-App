const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/ExpenseTracker/static/src/vue/dist/', // Should be STATIC_URL + path/to/build
  outputDir: '../ExpenseTracker/static/src/vue/dist/', // Output to a directory in STATICFILES_DIRS
  filenameHashing: false, // Django will hash file names, not webpack
  runtimeCompiler: true,
  transpileDependencies: true,
  configureWebpack: {
    watch: true,
    devServer: {
      port: 8015,
      devMiddleware: {
        // see https://github.com/webpack/webpack-dev-server/issues/2958
        writeToDisk: true, 
      },
      liveReload: true,
      watchFiles: ['src/*'],
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
      ignored: /node_modules/
    }
  },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
