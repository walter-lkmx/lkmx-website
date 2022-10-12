const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve = {
        alias: {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, 'src')
        }
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `
    @import "@lkmx/flare/mixins"; // Flare mixins
    @import "@lkmx/flare-react"; // Flare-react ui
    @import "main.scss";
    `
  }
}