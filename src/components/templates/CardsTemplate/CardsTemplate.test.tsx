import '@testing-library/jest-native/extend-expect';
import {render, screen, within} from '@testing-library/react-native';
import {CardsData} from 'data/index';
import TestRenderer from 'react-test-renderer';
import CardsTemplate, {CardsTemplateProps} from './CardsTemplate';

const props: CardsTemplateProps = {
  data: CardsData,
  testId: 'test-cardstemplate-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(<CardsTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render cardstemplate', () => {
  render(<CardsTemplate {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardstemplate-id');
  expect(cardstemplateElement).toBeOnTheScreen();
});

test('should render cardstemplate - flatlist', () => {
  render(<CardsTemplate {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardstemplate-id');
  expect(cardstemplateElement).toBeOnTheScreen();
  const flatlistElement = within(cardstemplateElement).getByTestId(
    'cardstemplate-flatlist',
  );
  expect(flatlistElement).toBeOnTheScreen();
});

test('should render cardstemplate - flatlist - example bankcard', () => {
  render(<CardsTemplate {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardstemplate-id');
  expect(cardstemplateElement).toBeOnTheScreen();
  const flatlistElement = within(cardstemplateElement).getByTestId(
    'cardstemplate-flatlist',
  );
  expect(flatlistElement).toBeOnTheScreen();

  const BankCardElement = within(flatlistElement).getByTestId(
    'cardstemplate-bankcard-1',
  );
  expect(BankCardElement).toBeOnTheScreen();
});

test('should render cardstemplate - flatlist - example bankcard - name', () => {
  render(<CardsTemplate {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardstemplate-id');
  expect(cardstemplateElement).toBeOnTheScreen();
  const flatlistElement = within(cardstemplateElement).getByTestId(
    'cardstemplate-flatlist',
  );
  expect(flatlistElement).toBeOnTheScreen();

  const BankCardElement = within(flatlistElement).getByTestId(
    'cardstemplate-bankcard-1',
  );
  expect(BankCardElement).toBeOnTheScreen();
  const labelElement = within(BankCardElement).getByTestId('bankcard-name');
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Main Wallet');
});

test('should render cardstemplate - flatlist - example bankcard - value', () => {
  render(<CardsTemplate {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardstemplate-id');
  expect(cardstemplateElement).toBeOnTheScreen();
  const flatlistElement = within(cardstemplateElement).getByTestId(
    'cardstemplate-flatlist',
  );
  expect(flatlistElement).toBeOnTheScreen();

  const BankCardElement = within(flatlistElement).getByTestId(
    'cardstemplate-bankcard-1',
  );
  expect(BankCardElement).toBeOnTheScreen();
  const headerElement = within(BankCardElement).getByTestId('bankcard-value');
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('$45.500,12');
});

test('should render cardstemplate - flatlist - example bankcard - modified card number', () => {
  render(<CardsTemplate {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardstemplate-id');
  expect(cardstemplateElement).toBeOnTheScreen();
  const flatlistElement = within(cardstemplateElement).getByTestId(
    'cardstemplate-flatlist',
  );
  expect(flatlistElement).toBeOnTheScreen();

  const BankCardElement = within(flatlistElement).getByTestId(
    'cardstemplate-bankcard-1',
  );
  expect(BankCardElement).toBeOnTheScreen();
  const headerElement = within(BankCardElement).getByTestId(
    'bankcard-cardnumber',
  );
  expect(headerElement).toBeOnTheScreen();
  expect(headerElement).toHaveTextContent('444 221 224 ***');
});
