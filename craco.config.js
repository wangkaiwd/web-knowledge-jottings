const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
const absPath = dir => path.resolve(__dirname, `./${dir}`);
module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  eslint: {
    enable: false
  },
  webpack: {
    alias: {
      '@': absPath('src')
    }
  }
};
