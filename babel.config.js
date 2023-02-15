module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          screens: './src/screens',
          stories: './src/stories',
          img: './src/img',
          store: './src/store',
          storybook: './.storybook',
        },
      },
    ],
  ],
};
