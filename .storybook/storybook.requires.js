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
    "./srccomponentsatomsBackgroundBackground.stories.tsx": require("../src/components/atoms/Background/Background.stories.tsx"),
    "./srccomponentsatomsButtonButton.stories.tsx": require("../src/components/atoms/Button/Button.stories.tsx"),
    "./srccomponentsatomsComposableButtonComposableButton.stories.tsx": require("../src/components/atoms/ComposableButton/ComposableButton.stories.tsx"),
    "./srccomponentsatomsContainerContainer.stories.tsx": require("../src/components/atoms/Container/Container.stories.tsx"),
    "./srccomponentsatomsHeaderHeader.stories.tsx": require("../src/components/atoms/Header/Header.stories.tsx"),
    "./srccomponentsatomsImgImg.stories.tsx": require("../src/components/atoms/Img/Img.stories.tsx"),
    "./srccomponentsatomsInputInput.stories.tsx": require("../src/components/atoms/Input/Input.stories.tsx"),
    "./srccomponentsatomsLabelLabel.stories.tsx": require("../src/components/atoms/Label/Label.stories.tsx"),
    "./srccomponentsatomsLinkLink.stories.tsx": require("../src/components/atoms/Link/Link.stories.tsx"),
    "./srccomponentsatomsScrollContainerScrollContainer.stories.tsx": require("../src/components/atoms/ScrollContainer/ScrollContainer.stories.tsx"),
    "./srccomponentsmoleculesBalanceBoxBalanceBox.stories.tsx": require("../src/components/molecules/BalanceBox/BalanceBox.stories.tsx"),
    "./srccomponentsmoleculesBreaklineBreakline.stories.tsx": require("../src/components/molecules/Breakline/Breakline.stories.tsx"),
    "./srccomponentsmoleculesInputAreaInputArea.stories.tsx": require("../src/components/molecules/InputArea/InputArea.stories.tsx"),
    "./srccomponentsmoleculesMarketItemMarketItem.stories.tsx": require("../src/components/molecules/MarketItem/MarketItem.stories.tsx"),
    "./srccomponentsmoleculesOperationBottomBarOperationBottomBar.stories.tsx": require("../src/components/molecules/OperationBottomBar/OperationBottomBar.stories.tsx"),
    "./srccomponentsmoleculesSocialLoginButtonsSocialLoginButtons.stories.tsx": require("../src/components/molecules/SocialLoginButtons/SocialLoginButtons.stories.tsx"),
    "./srccomponentsmoleculesTransferAndWithdrawTransferAndWithdraw.stories.tsx": require("../src/components/molecules/TransferAndWithdraw/TransferAndWithdraw.stories.tsx"),
    "./srccomponentsmoleculesUserBarUserBar.stories.tsx": require("../src/components/molecules/UserBar/UserBar.stories.tsx"),
    "./srccomponentsmoleculesWelcomeCardsAreaWelcomeCardsArea.stories.tsx": require("../src/components/molecules/WelcomeCardsArea/WelcomeCardsArea.stories.tsx"),
    "./srccomponentsorganismsLoginFormLoginForm.stories.tsx": require("../src/components/organisms/LoginForm/LoginForm.stories.tsx"),
    "./srccomponentsorganismsMarketListMarketList.stories.tsx": require("../src/components/organisms/MarketList/MarketList.stories.tsx"),
    "./srccomponentsorganismsUserAreaUserArea.stories.tsx": require("../src/components/organisms/UserArea/UserArea.stories.tsx"),
    "./srccomponentsorganismsWelcomeCardsWelcomeCards.stories.tsx": require("../src/components/organisms/WelcomeCards/WelcomeCards.stories.tsx"),
    "./srccomponentsorganismsWelcomeMainWelcomeMain.stories.tsx": require("../src/components/organisms/WelcomeMain/WelcomeMain.stories.tsx"),
    "./srccomponents\templatesLoginTemplateLoginTemplate.stories.tsx": require("../src/components/templates/LoginTemplate/LoginTemplate.stories.tsx"),
    "./srccomponents\templatesMainTemplateMainTemplate.stories.tsx": require("../src/components/templates/MainTemplate/MainTemplate.stories.tsx"),
    "./srccomponents\templatesWelcomeTemplateWelcomeTemplate.stories.tsx": require("../src/components/templates/WelcomeTemplate/WelcomeTemplate.stories.tsx"),
  };
};

configure(getStories, module, false);
