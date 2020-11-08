const path = require('path');

const nextConfig = {
  // your config
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },

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
