const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve = {
        alias: {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, 'src'),
            "@flare-scss": path.resolve(__dirname, '/node_modules/@lkmx/flare/src'),
            "@flare-react": path.resolve(__dirname, '/node_modules/@lkmx/flare-react/components')
        }
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "style.scss";`
  }
}