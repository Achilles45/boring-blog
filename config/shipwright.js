const { pluginReact } = require('@rsbuild/plugin-react')
const { pluginSass } = require('@rsbuild/plugin-sass');

module.exports.shipwright = {
  build: {
    plugins: [pluginReact(), pluginSass()]
  }
}
