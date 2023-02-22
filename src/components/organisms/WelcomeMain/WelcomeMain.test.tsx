import '@testing-library/jest-native/extend-expect';
import {fireEvent, render, screen, within} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import {primary, secondary} from 'theme/colors';
import WelcomeMain, {WelcomeMainProps} from './WelcomeMain';

const handleClick = jest.fn();
const props: WelcomeMainProps = {
  onButtonPress: handleClick,
  mainColor: primary,
  accentColor: secondary,
  testId: 'test-welcomemain-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<WelcomeMain {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render welcomemain', () => {
  render(<WelcomeMain {...props} />);
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
});

test('should render welcomemain with img', () => {
  render(<WelcomeMain {...props} />);
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainImgElement =
    within(welcomemainElement).getByTestId('welcomemain-img');
  expect(welcomemainImgElement).toBeOnTheScreen();
});

test('should render welcomemain with label - welcome', () => {
  render(<WelcomeMain {...props} />);
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainLabelElement =
    within(welcomemainElement).getByTestId('welcomemain-label');
  expect(welcomemainLabelElement).toBeOnTheScreen();
  expect(welcomemainLabelElement).toHaveTextContent('Welcome to,');
});

test('should render welcomemain with header', () => {
  render(<WelcomeMain {...props} />);
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainHeaderElement =
    within(welcomemainElement).getByTestId('welcomemain-header');
  expect(welcomemainHeaderElement).toBeOnTheScreen();
  expect(welcomemainHeaderElement).toHaveTextContent('BayWallet');
});

test('should render welcomemain with description', () => {
  render(<WelcomeMain {...props} />);
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
  render(<WelcomeMain {...props} />);
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
  render(<WelcomeMain {...props} />);
  const welcomemainElement = screen.getByTestId('test-welcomemain-id');
  expect(welcomemainElement).toBeOnTheScreen();
  const welcomemainButtonElement =
    within(welcomemainElement).getByTestId('welcomemain-button');
  expect(welcomemainButtonElement).toBeOnTheScreen();
  expect(handleClick).toBeCalledTimes(0);
  fireEvent.press(welcomemainButtonElement);
  expect(handleClick).toBeCalledTimes(1);
});
