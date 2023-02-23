import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {primary, secondary} from 'theme/colors';
import WelcomeCardsArea, {WelcomeCardsAreaProps} from './WelcomeCardsArea';

const handlePress = jest.fn();
const props: WelcomeCardsAreaProps = {
  onButtonPress: handlePress,
  mainText: 'maintext',
  cardText: 'cardtext',
  testId: 'test-welcomecardsarea-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<WelcomeCardsArea {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render welcomecardsarea', () => {
  render(<WelcomeCardsArea {...props} />);
  const welcomecardsareaElement = screen.getByTestId(
    'test-welcomecardsarea-id',
  );
  expect(welcomecardsareaElement).toBeOnTheScreen();
});

test('should render welcomecardsarea with header and correct text', () => {
  render(<WelcomeCardsArea {...props} />);
  const welcomecardsareaElement = screen.getByTestId(
    'test-welcomecardsarea-id',
  );
  expect(welcomecardsareaElement).toBeOnTheScreen();
  const welcomecardsareaHeaderElement = within(
    welcomecardsareaElement,
  ).getByTestId('welcomecardsarea-header');
  expect(welcomecardsareaHeaderElement).toBeOnTheScreen();
  const textElement = within(welcomecardsareaHeaderElement).getByText(
    'maintext',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render welcomecardsarea with label and correct text', () => {
  render(<WelcomeCardsArea {...props} />);
  const welcomecardsareaElement = screen.getByTestId(
    'test-welcomecardsarea-id',
  );
  expect(welcomecardsareaElement).toBeOnTheScreen();
  const welcomecardsareaLabelElement = within(
    welcomecardsareaElement,
  ).getByTestId('welcomecardsarea-label');
  expect(welcomecardsareaLabelElement).toBeOnTheScreen();
  const textElement = within(welcomecardsareaLabelElement).getByText(
    'cardtext',
  );
  expect(textElement).toBeOnTheScreen();
});

test('should render welcomecardsarea with logo', () => {
  render(<WelcomeCardsArea {...props} />);
  const welcomecardsareaElement = screen.getByTestId(
    'test-welcomecardsarea-id',
  );
  expect(welcomecardsareaElement).toBeOnTheScreen();
  const welcomecardsareaImgElement = within(
    welcomecardsareaElement,
  ).getByTestId('welcomecardsarea-logo');
  expect(welcomecardsareaImgElement).toBeOnTheScreen();
});
test('should render welcomecardsarea with button and correct button style', () => {
  render(<WelcomeCardsArea {...props} />);
  const welcomecardsareaElement = screen.getByTestId(
    'test-welcomecardsarea-id',
  );
  expect(welcomecardsareaElement).toBeOnTheScreen();
  const welcomecardsareaButtonElement = within(
    welcomecardsareaElement,
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

test('should handle onButtonPress', () => {
  render(<WelcomeCardsArea {...props} />);
  const welcomecardsareaElement = screen.getByTestId(
    'test-welcomecardsarea-id',
  );
  expect(welcomecardsareaElement).toBeOnTheScreen();
  const welcomecardsareaButtonElement = within(
    welcomecardsareaElement,
  ).getByTestId('welcomecardsarea-button');
  expect(welcomecardsareaButtonElement).toBeOnTheScreen();
  expect(handlePress).toBeCalledTimes(0);
  fireEvent.press(welcomecardsareaButtonElement);
  expect(handlePress).toBeCalledTimes(1);
});
