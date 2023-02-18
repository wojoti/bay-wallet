module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/all',
    'prettier',
    'plugin:react/jsx-runtime',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['unused-imports', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
    },
    {
      files: [
        '*.stories.tsx',
        'setupTests.ts',
        'test-utils.tsx',
        'metro.config.js',
      ],
      rules: {
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
