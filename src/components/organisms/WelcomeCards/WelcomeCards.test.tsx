import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {primary, secondary} from 'theme/colors';
import WelcomeCards, {WelcomeCardsProps} from './WelcomeCards';

const handlePress = jest.fn();
const props: WelcomeCardsProps = {
  onButtonPress: handlePress,
  mainColor: primary,
  cardColor: secondary,
  mainText1: 'maintext1',
  cardText1: 'cardtext1',
  mainText2: 'maintext2',
  cardText2: 'cardtext2',
  testId: 'test-welcomecards-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<WelcomeCards {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render welcomecards', () => {
  render(<WelcomeCards {...props} />);
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
});

test('should render welcomecards with img', () => {
  render(<WelcomeCards {...props} />);
  const welcomecardsElement = screen.getByTestId('test-welcomecards-id');
  expect(welcomecardsElement).toBeOnTheScreen();
  const welcomeCardsImgElement =
    within(welcomecardsElement).getByTestId('welcomecards-img');
  expect(welcomeCardsImgElement).toBeOnTheScreen();
});

test('should render welcomecards with 2 x welcomecardsarea ', () => {
  render(<WelcomeCards {...props} />);
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
  render(<WelcomeCards {...props} />);
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
    'maintext1',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render first welcomecardsarea: correct label ', () => {
  render(<WelcomeCards {...props} />);
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
    'cardtext1',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render first welcomecardsarea: logo ', () => {
  render(<WelcomeCards {...props} />);
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
  render(<WelcomeCards {...props} />);
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
  render(<WelcomeCards {...props} />);
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
  expect(handlePress).toBeCalledTimes(0);
  fireEvent.press(welcomecardsareaButtonElement);
  expect(handlePress).toBeCalledTimes(1);
});

test('should render second welcomecardsarea: correct header ', () => {
  render(<WelcomeCards {...props} />);
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
    'maintext2',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render second welcomecardsarea: correct label ', () => {
  render(<WelcomeCards {...props} />);
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
    'cardtext2',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render second welcomecardsarea: logo ', () => {
  render(<WelcomeCards {...props} />);
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
  render(<WelcomeCards {...props} />);
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
  render(<WelcomeCards {...props} />);
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
  expect(handlePress).toBeCalledTimes(1);
  fireEvent.press(welcomecardsareaButtonElement);
  expect(handlePress).toBeCalledTimes(2);
});
