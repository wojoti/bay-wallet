import {Button, Container, Header} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './MarketHeader.style';

export type MarketHeaderProps = PropsWithChildren<{
  header: string;
  buttonLabel: string;
  onButtonPress: () => void;
  testId?: string;
}>;

const MarketHeader = ({
  header,
  buttonLabel,
  onButtonPress,
  testId,
}: MarketHeaderProps) => {
  return (
    <Container
      testId={testId}
      direction="row"
      align="center"
      justify="space-around"
      customStyle={style.wrapper}>
      <Header size={20} testId="marketheader-header">
        {header}
      </Header>
      <Button
        customStyle={style.btnStyle}
        customFontStyle={style.btnTextStyle}
        onPress={onButtonPress}
        testId="marketheader-button">
        {buttonLabel}
      </Button>
    </Container>
  );
};

export default MarketHeader;
