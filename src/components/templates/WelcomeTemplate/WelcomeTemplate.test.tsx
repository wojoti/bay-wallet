import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {primary, secondary} from 'theme/colors';
import WelcomeTemplate, {WelcomeTemplateProps} from './WelcomeTemplate';

const handlePress = jest.fn();
const props: WelcomeTemplateProps = {
  onButtonPress: handlePress,
  testId: 'test-welcometemplate-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<WelcomeTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render welcometemplate', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
});

test('should render welcometemplate with welcomemain', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
});

test('should render welcomemain with img', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainImgElement =
    within(welcomemainElement).getByTestId('welcomemain-img');
  expect(welcomemainImgElement).toBeOnTheScreen();
});

test('should render welcomemain with label - welcome', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainLabelElement =
    within(welcomemainElement).getByTestId('welcomemain-label');
  expect(welcomemainLabelElement).toBeOnTheScreen();
  expect(welcomemainLabelElement).toHaveTextContent('Welcome to,');
});

test('should render welcomemain with header', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainHeaderElement =
    within(welcomemainElement).getByTestId('welcomemain-header');
  expect(welcomemainHeaderElement).toBeOnTheScreen();
  expect(welcomemainHeaderElement).toHaveTextContent('BayWallet');
});

test('should render welcomemain with description', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainLabelElement = within(welcomemainElement).getByTestId(
    'welcomemain-description',
  );
  expect(welcomemainLabelElement).toBeOnTheScreen();
  expect(welcomemainLabelElement).toHaveTextContent(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  );
});

test('should render welcomemain with button and correct button style', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainButtonElement =
    within(welcomemainElement).getByTestId('welcomemain-button');
  expect(welcomemainButtonElement).toBeOnTheScreen();
  expect(welcomemainButtonElement).toHaveStyle({backgroundColor: secondary});
  const textElement = within(welcomemainButtonElement).getByTestId(
    'button-text',
  );
  expect(textElement).toBeOnTheScreen();
  expect(textElement).toHaveStyle({color: 'black'});
});

test('should render welcomemain with button - handle onPress', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainButtonElement =
    within(welcomemainElement).getByTestId('welcomemain-button');
  expect(welcomemainButtonElement).toBeOnTheScreen();
  expect(handlePress).toBeCalledTimes(0);
  fireEvent.press(welcomemainButtonElement);
  expect(handlePress).toBeCalledTimes(1);
});
test('should render welcomecards', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
});

test('should render welcomecards with img', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsImgElement =
    within(welcomecardsElement).getByTestId('welcomecards-img');
  expect(welcomeCardsImgElement).toBeOnTheScreen();
});

test('should render welcomecards with 2 x welcomecardsarea ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement1 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea1',
  );
  expect(welcomeCardsWCAElement1).toBeOnTheScreen();
  const welcomeCardsWCAElement2 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea2',
  );
  expect(welcomeCardsWCAElement2).toBeOnTheScreen();
});

test('should render first welcomecardsarea: correct header ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement1 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea1',
  );
  expect(welcomeCardsWCAElement1).toBeOnTheScreen();
  const welcomecardsareaHeaderElement = within(
    welcomeCardsWCAElement1,
  ).getByTestId('welcomecardsarea-header');
  expect(welcomecardsareaHeaderElement).toBeOnTheScreen();
  const textElement = within(welcomecardsareaHeaderElement).getByText(
    'New cards in few clicks',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render first welcomecardsarea: correct label ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement1 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea1',
  );
  expect(welcomeCardsWCAElement1).toBeOnTheScreen();
  const welcomecardsareaLabelElement = within(
    welcomeCardsWCAElement1,
  ).getByTestId('welcomecardsarea-label');
  expect(welcomecardsareaLabelElement).toBeOnTheScreen();
  const textElement = within(welcomecardsareaLabelElement).getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render first welcomecardsarea: logo ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement1 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea1',
  );
  expect(welcomeCardsWCAElement1).toBeOnTheScreen();
  const welcomecardsareaImgElement = within(
    welcomeCardsWCAElement1,
  ).getByTestId('welcomecardsarea-logo');
  expect(welcomecardsareaImgElement).toBeOnTheScreen();
});

test('should render first welcomecardsarea: button and correct style', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement1 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea1',
  );
  expect(welcomeCardsWCAElement1).toBeOnTheScreen();
  const welcomecardsareaButtonElement = within(
    welcomeCardsWCAElement1,
  ).getByTestId('welcomecardsarea-button');
  expect(welcomecardsareaButtonElement).toBeOnTheScreen();
  expect(welcomecardsareaButtonElement).toHaveStyle({
    backgroundColor: secondary,
  });
  const buttonText = within(welcomecardsareaButtonElement).getByTestId(
    'button-text',
  );
  expect(buttonText).toHaveStyle({
    color: primary,
  });
});

test('should render first welcomecardsarea: should handle onButtonPress ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement1 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea1',
  );
  expect(welcomeCardsWCAElement1).toBeOnTheScreen();
  const welcomecardsareaButtonElement = within(
    welcomeCardsWCAElement1,
  ).getByTestId('welcomecardsarea-button');
  expect(welcomecardsareaButtonElement).toBeOnTheScreen();
  expect(handlePress).toBeCalledTimes(1);
  fireEvent.press(welcomecardsareaButtonElement);
  expect(handlePress).toBeCalledTimes(2);
});

test('should render second welcomecardsarea: correct header ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement2 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea2',
  );
  expect(welcomeCardsWCAElement2).toBeOnTheScreen();
  const welcomecardsareaHeaderElement = within(
    welcomeCardsWCAElement2,
  ).getByTestId('welcomecardsarea-header');
  expect(welcomecardsareaHeaderElement).toBeOnTheScreen();
  const textElement = within(welcomecardsareaHeaderElement).getByText(
    'Easy payments',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render second welcomecardsarea: correct label ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement2 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea2',
  );
  expect(welcomeCardsWCAElement2).toBeOnTheScreen();
  const welcomecardsareaLabelElement = within(
    welcomeCardsWCAElement2,
  ).getByTestId('welcomecardsarea-label');
  expect(welcomecardsareaLabelElement).toBeOnTheScreen();
  const textElement = within(welcomecardsareaLabelElement).getByText(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render second welcomecardsarea: logo ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement2 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea2',
  );
  expect(welcomeCardsWCAElement2).toBeOnTheScreen();
  const welcomecardsareaImgElement = within(
    welcomeCardsWCAElement2,
  ).getByTestId('welcomecardsarea-logo');
  expect(welcomecardsareaImgElement).toBeOnTheScreen();
});

test('should render second welcomecardsarea: button with correct style ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement2 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea2',
  );
  expect(welcomeCardsWCAElement2).toBeOnTheScreen();
  const welcomecardsareaButtonElement = within(
    welcomeCardsWCAElement2,
  ).getByTestId('welcomecardsarea-button');
  expect(welcomecardsareaButtonElement).toBeOnTheScreen();
  expect(welcomecardsareaButtonElement).toHaveStyle({
    backgroundColor: secondary,
  });
  const buttonText = within(welcomecardsareaButtonElement).getByTestId(
    'button-text',
  );
  expect(buttonText).toHaveStyle({
    color: primary,
  });
});

test('should render second welcomecardsarea: should handle onButtonPress ', () => {
  render(<WelcomeTemplate {...props} />);
  const welcometemplateElement = screen.getByTestId('test-welcometemplate-id');
  expect(welcometemplateElement).toBeOnTheScreen();
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsWCAElement2 = within(welcomecardsElement).getByTestId(
    'welcomecards-welcomecardsarea2',
  );
  expect(welcomeCardsWCAElement2).toBeOnTheScreen();
  const welcomecardsareaButtonElement = within(
    welcomeCardsWCAElement2,
  ).getByTestId('welcomecardsarea-button');
  expect(welcomecardsareaButtonElement).toBeOnTheScreen();
  expect(handlePress).toBeCalledTimes(2);
  fireEvent.press(welcomecardsareaButtonElement);
  expect(handlePress).toBeCalledTimes(3);
});
