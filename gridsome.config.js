// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/sass/_globals.scss'),
          path.resolve(__dirname, './src/assets/sass/*.scss'),
        ],
      })
}
module.exports = {
  siteName: 'Xrom IT',
  siteDescription: '',
  titleTemplate: 'Xrom IT',
  icon: {
    favicon: {
      src: './src/assets/img/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/assets/img/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [],
  chainWebpack: config => {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}
