module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
        'react-native-gesture-handler',
        'react-native-vector-icons',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
        },
      ],
    },
  },
};
