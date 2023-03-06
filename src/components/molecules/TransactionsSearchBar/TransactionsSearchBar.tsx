import {
  ComposableButton,
  Container,
  Img,
  ImgType,
  Input,
} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './TransactionsSearchBar.style';

export type TransactionsSearchBarProps = PropsWithChildren<{
  onChange: (value: string) => void;
  onPress: () => void;
  value: string;
  testId?: string;
}>;

const TransactionsSearchBar = ({
  onChange,
  onPress,
  value,
  testId,
}: TransactionsSearchBarProps) => {
  return (
    <Container
      testId={testId}
      customStyle={style.wrapper}
      direction="row"
      align="center"
      justify="space-between">
      <Input
        accessibilityLabel={'Search bar'}
        accessibilityHint={'Type to filter transactions'}
        onChange={onChange}
        value={value}
        testId={''}
        placeholder={'Search here'}
        customStyle={style.searchInput}
      />
      <Container customStyle={style.searchButton}>
        <ComposableButton onPress={onPress} testId={''}>
          <Img src={ImgType.search} height={'24'} width={24} alt={''} />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default TransactionsSearchBar;
