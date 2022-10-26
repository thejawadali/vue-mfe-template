const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require("./package.json").dependencies;

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.js',
    },
  },
  publicPath: "auto",
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "vue_mfe_template",
        filename: 'remoteEntry.js',
        exposes: {},
        remotes: {},
        shared: {
          ...deps,
          vue: {
            singleton: true,
          },
        },
      }),
    ],
    
  },
})
