const path = require('path');

export default {
    "extraBabelPlugins": [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      routes: path.resolve(__dirname, './src/routes'),
      utils: path.resolve(__dirname, './src/utils'),
    }
}
