module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/all',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['unused-imports'],
  overrides: [
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
    },
    {
      files: ['*.stories.tsx', 'setupTests.ts'],
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
