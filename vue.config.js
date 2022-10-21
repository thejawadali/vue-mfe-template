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
        filename: 'remoteEntry.js',
        exposes: {
          // "./NavBar.vue": "./src/components/RealApp.vue"
        },
        remotes: {
          // remote_1: "remote_1@http://localhost:3000/remoteEntry.js",
        },
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
