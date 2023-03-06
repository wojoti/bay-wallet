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
          theme: './src/theme',
          img: './src/img',
          store: './src/store',
          storybook: './.storybook',
          data: './src/data',
          navigation: './src/navigation',
          root: './',
        },
      },
    ],

    'react-native-reanimated/plugin',
  ],
};
