const path = require('path');

const nextConfig = {
  // your config

  // webpack config
  webpack(config, _options) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');

    return config;
  },
};

module.exports = nextConfig;
