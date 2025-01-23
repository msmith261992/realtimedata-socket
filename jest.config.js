module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-.*|%@react-native-community|@codler|@react-native|@react-navigation|uuid|react-redux|react-native-webrtc)/)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest-setup.ts',
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true, // Optimize for testing
    },
  },
};
