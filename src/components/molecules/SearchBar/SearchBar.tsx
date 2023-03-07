import {
  ComposableButton,
  Container,
  Img,
  ImgType,
  Input,
} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './SearchBar.style';

export type SearchBarProps = PropsWithChildren<{
  onChange: (value: string) => void;
  onPress: () => void;
  value: string;
  testId?: string;
}>;

const SearchBar = ({onChange, onPress, value, testId}: SearchBarProps) => {
  return (
    <Container
      testId={testId}
      customStyle={style.wrapper}
      direction="row"
      align="center"
      justify="space-between">
      <Input
        accessibilityLabel="Search bar"
        accessibilityHint="Type to filter transactions"
        onChange={onChange}
        value={value}
        testId="searchbar-input"
        placeholder="Search here"
        customStyle={style.searchInput}
      />
      <Container customStyle={style.searchButton}>
        <ComposableButton onPress={onPress} testId="searchbar-button">
          <Img src={ImgType.search} height="24" width={24} alt="" />
        </ComposableButton>
      </Container>
    </Container>
  );
};

export default SearchBar;
