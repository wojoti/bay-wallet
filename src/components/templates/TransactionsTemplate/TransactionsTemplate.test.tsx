import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
import TransactionsTemplate, {
  TransactionsTemplateProps,
} from './TransactionsTemplate';

const props: TransactionsTemplateProps = {
  testId: 'test-transactionstemplate-id',
};

test('should match snapshot', () => {
  const tree = TestRenderer.create(
    <TransactionsTemplate {...props} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should render transactionstemplate', () => {
  render(<TransactionsTemplate {...props} />);
  const transactionstemplateElement = screen.getByTestId(
    'test-transactionstemplate-id',
  );
  expect(transactionstemplateElement).toBeOnTheScreen();
});
