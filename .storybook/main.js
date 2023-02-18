module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-controls',
  ],
  framework: '@storybook/react-native',
};
