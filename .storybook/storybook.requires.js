/* do not change this file, it is auto generated by storybook. */

import {
  addArgsEnhancer,
  addDecorator,
  addParameters,
  clearDecorators,
  configure,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-controls/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./srccomponentsatomsButtonButton.stories.tsx": require("../src/components/atoms/Button/Button.stories.tsx"),
    "./srccomponentsatomsColumnColumn.stories.tsx": require("../src/components/atoms/Column/Column.stories.tsx"),
    "./srccomponentsatomsContainerContainer.stories.tsx": require("../src/components/atoms/Container/Container.stories.tsx"),
    "./srccomponentsatomsHeaderHeader.stories.tsx": require("../src/components/atoms/Header/Header.stories.tsx"),
    "./srccomponentsatomsImgImg.stories.tsx": require("../src/components/atoms/Img/Img.stories.tsx"),
    "./srccomponentsatomsLabelLabel.stories.tsx": require("../src/components/atoms/Label/Label.stories.tsx"),
  };
};

configure(getStories, module, false);
