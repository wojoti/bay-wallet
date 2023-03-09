import '@testing-library/jest-native/extend-expect';
import {fireEvent, screen, within} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import TestRenderer from 'react-test-renderer';
import renderWithProviders from 'root/test-utils';
import {store} from 'store/store';
import {iconGrey, primary, red} from 'theme/colors';
import TransactionsScreen, {
  TransactionsScreenProps,
} from './TransactionsScreen';

const props: TransactionsScreenProps = {
  testId: 'test-transactionsscreen-id',
};

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
  useIsFocused: jest.fn(),
}));

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <TransactionsScreen {...props} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render TransactionsScreen', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const TransactionsScreenElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(TransactionsScreenElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const TransactionsScreenElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(TransactionsScreenElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - searchbar', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - searchbar - input', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
  const inputElement = within(SearchBarElement).getByTestId('searchbar-input');
  expect(inputElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - searchbar - button', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const SearchBarElement = within(transactionstemplateElement).getByTestId(
    'transactionstemplate-searchbar',
  );
  expect(SearchBarElement).toBeOnTheScreen();
  const buttonElement =
    within(SearchBarElement).getByTestId('searchbar-button');
  expect(buttonElement).toBeOnTheScreen();
});
test('should render transactionsscreen - transactionstemplate - TransactionsFilter', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - TransactionsFilter - All button', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - TransactionsFilter - Expense button', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - TransactionsFilter - Income button', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const buttonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(buttonElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - TransactionsFilter - selected id', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const allButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(allButtonElement).toBeOnTheScreen();
  const allTextElement = within(allButtonElement).getByTestId('button-text');
  expect(allTextElement).toBeOnTheScreen();
  expect(allTextElement).toHaveStyle({color: primary});

  const expenseButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(expenseButtonElement).toBeOnTheScreen();
  const expenseTextElement =
    within(expenseButtonElement).getByTestId('button-text');
  expect(expenseTextElement).toBeOnTheScreen();
  expect(expenseTextElement).toHaveStyle({color: iconGrey});

  const incomeButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  expect(incomeButtonElement).toBeOnTheScreen();
  const incomeTextElement =
    within(incomeButtonElement).getByTestId('button-text');
  expect(incomeTextElement).toBeOnTheScreen();
  expect(incomeTextElement).toHaveStyle({color: iconGrey});
});

test('should render transactionsscreen - transactionstemplate - TransactionsFilter - different selected id', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const TransactionsFilterElement = screen.getByTestId(
    'transactionstemplate-transactionsfilter',
  );
  expect(TransactionsFilterElement).toBeOnTheScreen();
  const incomeButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-income',
  );
  fireEvent.press(incomeButtonElement);

  const allButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-all',
  );
  expect(allButtonElement).toBeOnTheScreen();
  const allTextElement = within(allButtonElement).getByTestId('button-text');
  expect(allTextElement).toBeOnTheScreen();
  expect(allTextElement).toHaveStyle({color: iconGrey});

  const expenseButtonElement = within(TransactionsFilterElement).getByTestId(
    'transactionsfilter-button-expense',
  );
  expect(expenseButtonElement).toBeOnTheScreen();
  const expenseTextElement =
    within(expenseButtonElement).getByTestId('button-text');
  expect(expenseTextElement).toBeOnTheScreen();
  expect(expenseTextElement).toHaveStyle({color: iconGrey});

  expect(incomeButtonElement).toBeOnTheScreen();
  const incomeTextElement =
    within(incomeButtonElement).getByTestId('button-text');
  expect(incomeTextElement).toBeOnTheScreen();
  expect(incomeTextElement).toHaveStyle({color: primary});
});

test('should render transactionsscreen - transactionstemplate - flatlist', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - TransactionsItem', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - TransactionsItem - logo', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const imgElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-img',
  );
  expect(imgElement).toBeOnTheScreen();
});

test('should render transactionsscreen - transactionstemplate - TransactionsItem - category', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-category',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('Withdraw');
});

test('should render transactionsscreen - transactionstemplate - TransactionsItem - client name', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-clientname',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('ATM');
});

test('should render transactionsscreen - transactionstemplate - TransactionsItem - value', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-value',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('-$1,000');
  expect(labelElement).toHaveStyle({color: red});
});

test('should render transactionsscreen - transactionstemplate - TransactionsItem - date', () => {
  renderWithProviders(<TransactionsScreen {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionsscreen-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
  const flatlistElement = screen.getByTestId('transactionstemplate-flatlist');
  expect(flatlistElement).toBeOnTheScreen();
  const TransactionsItemElement = within(flatlistElement).getByTestId(
    'transactionstemplate-transactionsitem-1',
  );
  expect(TransactionsItemElement).toBeOnTheScreen();
  const labelElement = within(TransactionsItemElement).getByTestId(
    'transactionsitem-date',
  );
  expect(labelElement).toBeOnTheScreen();
  expect(labelElement).toHaveTextContent('3d ago');
});
