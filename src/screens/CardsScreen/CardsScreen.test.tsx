import '@testing-library/jest-native/extend-expect';
import {screen, within} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import TestRenderer from 'react-test-renderer';
import renderWithProviders from 'root/test-utils';
import {store} from 'store/store';
import CardsScreen, {CardsScreenProps} from './CardsScreen';

const props: CardsScreenProps = {
  testId: 'test-cardsscreen-id',
};

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
  useIsFocused: jest.fn(),
}));

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <CardsScreen {...props} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render CardsScreen', () => {
  renderWithProviders(<CardsScreen {...props} />);
  const CardsScreenElement = screen.getByTestId('test-cardsscreen-id');
  expect(CardsScreenElement).toBeOnTheScreen();
});

test('should render cardstemplate', () => {
  renderWithProviders(<CardsScreen {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardsscreen-id');
  expect(cardstemplateElement).toBeOnTheScreen();
});

test('should render cardstemplate - flatlist', () => {
  renderWithProviders(<CardsScreen {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardsscreen-id');
  expect(cardstemplateElement).toBeOnTheScreen();
  const flatlistElement = within(cardstemplateElement).getByTestId(
    'cardstemplate-flatlist',
  );
  expect(flatlistElement).toBeOnTheScreen();
});

test('should render cardstemplate - flatlist - example bankcard', () => {
  renderWithProviders(<CardsScreen {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardsscreen-id');
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
  renderWithProviders(<CardsScreen {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardsscreen-id');
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
  renderWithProviders(<CardsScreen {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardsscreen-id');
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
  renderWithProviders(<CardsScreen {...props} />);
  const cardstemplateElement = screen.getByTestId('test-cardsscreen-id');
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
