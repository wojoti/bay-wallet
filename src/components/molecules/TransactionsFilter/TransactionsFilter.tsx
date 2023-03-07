import {Button, Container} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './TransactionsFilter.style';

export type TransactionsFilterProps = PropsWithChildren<{
  onFilterPress: (id: number) => void;
  selectedId: number;
  testId?: string;
}>;

const TransactionsFilter = ({
  onFilterPress,
  selectedId,
  testId,
}: TransactionsFilterProps) => {
  const onAllPress = () => {
    onFilterPress(0);
  };
  const onExpensePress = () => {
    onFilterPress(1);
  };
  const onIncomePress = () => {
    onFilterPress(2);
  };
  return (
    <Container
      testId={testId}
      direction="row"
      align="center"
      justify="flex-start">
      <Button
        customStyle={style.button}
        customFontStyle={selectedId === 0 ? style.pressed : style.notPressed}
        onPress={onAllPress}
        testId="transactionsfilter-button-all">
        All
      </Button>
      <Button
        customStyle={style.button}
        customFontStyle={selectedId === 1 ? style.pressed : style.notPressed}
        onPress={onExpensePress}
        testId="transactionsfilter-button-expense">
        Expense
      </Button>
      <Button
        customStyle={style.button}
        customFontStyle={selectedId === 2 ? style.pressed : style.notPressed}
        onPress={onIncomePress}
        testId="transactionsfilter-button-income">
        Income
      </Button>
    </Container>
  );
};

export default TransactionsFilter;
