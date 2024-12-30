/*
Path: vue.config.js
Este script se utiliza para configurar el proyecto de Vue.js.
*/

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_PUBLIC_PATH
})