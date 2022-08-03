const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve = {
        alias: {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, ''),
            "@flare-scss": path.resolve(__dirname, '/node_modules/@lkmx/flare/src'),
            "@flare-react": path.resolve(__dirname, '/node_modules/@lkmx/flare-react/components'),
            components: path.resolve(__dirname, 'components')
        }
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "style.scss";`
  }
}