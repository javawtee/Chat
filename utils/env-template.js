// Remame this to env.js
// Replace real url in SERVER_ENDPOINT with 'url-to-*' string template
import Constants from 'expo-constants';
import { Platform } from 'react-native';

console.log('argv', process.argv);

const currentPlatform = Platform.OS;

const SERVER_ENDPOINT = 'url-to-server';

const ENV = {
  dev: {
    MODE: 'development',
    SERVER_ENDPOINT: 'url-to-local-server'
  },
  device: {
    MODE: 'development',
    SERVER_ENDPOINT
  },
  staging: {
    MODE: 'staging',
    SERVER_ENDPOINT
  },
  prod: {
    MODE: 'production',
    SERVER_ENDPOINT
  }
};

function getEnvVars(env = '') {
  let newEnv = ENV.dev;
  if (currentPlatform !== 'web') newEnv = ENV.device;
  else if (env.indexOf('staging') !== -1) newEnv = ENV.staging;
  else if (env.indexOf('prod') !== -1) newEnv = ENV.prod;

  console.log('currentPlatform ', currentPlatform);
  console.log('processEnv ', process.env || 'N/A');
  console.log('releaseEnv ', env || 'N/A');
  console.log('localEnv ', newEnv);
  return newEnv;
}

export default getEnvVars(Constants.manifest.releaseChannel);