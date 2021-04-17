const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

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
    API_GOOGLE_ANALYTIC_KEY: process.env.API_GOOGLE_ANALYTIC_KEY,
  },

  // webpack config
  webpack(config, _options) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['@data'] = path.join(__dirname, 'data');
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');

    return config;
  },

  // PWA config
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },
};

module.exports = withPWA(nextConfig);
