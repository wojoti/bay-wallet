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
      "^\\.[\\\\/](?:src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",
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
    "./src/components/atoms/Background/Background.stories.tsx": require("../src/components/atoms/Background/Background.stories.tsx"),
    "./src/components/atoms/Button/Button.stories.tsx": require("../src/components/atoms/Button/Button.stories.tsx"),
    "./src/components/atoms/ComposableButton/ComposableButton.stories.tsx": require("../src/components/atoms/ComposableButton/ComposableButton.stories.tsx"),
    "./src/components/atoms/Container/Container.stories.tsx": require("../src/components/atoms/Container/Container.stories.tsx"),
    "./src/components/atoms/Header/Header.stories.tsx": require("../src/components/atoms/Header/Header.stories.tsx"),
    "./src/components/atoms/Img/Img.stories.tsx": require("../src/components/atoms/Img/Img.stories.tsx"),
    "./src/components/atoms/Input/Input.stories.tsx": require("../src/components/atoms/Input/Input.stories.tsx"),
    "./src/components/atoms/Label/Label.stories.tsx": require("../src/components/atoms/Label/Label.stories.tsx"),
    "./src/components/atoms/Link/Link.stories.tsx": require("../src/components/atoms/Link/Link.stories.tsx"),
    "./src/components/atoms/ScrollContainer/ScrollContainer.stories.tsx": require("../src/components/atoms/ScrollContainer/ScrollContainer.stories.tsx"),
    "./src/components/molecules/BalanceBox/BalanceBox.stories.tsx": require("../src/components/molecules/BalanceBox/BalanceBox.stories.tsx"),
    "./src/components/molecules/Breakline/Breakline.stories.tsx": require("../src/components/molecules/Breakline/Breakline.stories.tsx"),
    "./src/components/molecules/InputArea/InputArea.stories.tsx": require("../src/components/molecules/InputArea/InputArea.stories.tsx"),
    "./src/components/molecules/MarketHeader/MarketHeader.stories.tsx": require("../src/components/molecules/MarketHeader/MarketHeader.stories.tsx"),
    "./src/components/molecules/MarketItem/MarketItem.stories.tsx": require("../src/components/molecules/MarketItem/MarketItem.stories.tsx"),
    "./src/components/molecules/OperationBottomBar/OperationBottomBar.stories.tsx": require("../src/components/molecules/OperationBottomBar/OperationBottomBar.stories.tsx"),
    "./src/components/molecules/SocialLoginButtons/SocialLoginButtons.stories.tsx": require("../src/components/molecules/SocialLoginButtons/SocialLoginButtons.stories.tsx"),
    "./src/components/molecules/TransferAndWithdraw/TransferAndWithdraw.stories.tsx": require("../src/components/molecules/TransferAndWithdraw/TransferAndWithdraw.stories.tsx"),
    "./src/components/molecules/UserBar/UserBar.stories.tsx": require("../src/components/molecules/UserBar/UserBar.stories.tsx"),
    "./src/components/molecules/WelcomeCardsArea/WelcomeCardsArea.stories.tsx": require("../src/components/molecules/WelcomeCardsArea/WelcomeCardsArea.stories.tsx"),
    "./src/components/organisms/LoginForm/LoginForm.stories.tsx": require("../src/components/organisms/LoginForm/LoginForm.stories.tsx"),
    "./src/components/organisms/MarketList/MarketList.stories.tsx": require("../src/components/organisms/MarketList/MarketList.stories.tsx"),
    "./src/components/organisms/UserArea/UserArea.stories.tsx": require("../src/components/organisms/UserArea/UserArea.stories.tsx"),
    "./src/components/organisms/WelcomeCards/WelcomeCards.stories.tsx": require("../src/components/organisms/WelcomeCards/WelcomeCards.stories.tsx"),
    "./src/components/organisms/WelcomeMain/WelcomeMain.stories.tsx": require("../src/components/organisms/WelcomeMain/WelcomeMain.stories.tsx"),
    "./src/components/templates/LoginTemplate/LoginTemplate.stories.tsx": require("../src/components/templates/LoginTemplate/LoginTemplate.stories.tsx"),
    "./src/components/templates/MainTemplate/MainTemplate.stories.tsx": require("../src/components/templates/MainTemplate/MainTemplate.stories.tsx"),
    "./src/components/templates/WelcomeTemplate/WelcomeTemplate.stories.tsx": require("../src/components/templates/WelcomeTemplate/WelcomeTemplate.stories.tsx"),
  };
};

configure(getStories, module, false);
