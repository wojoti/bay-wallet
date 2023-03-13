import {Button, Container, Header, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './OperationValueSelector.style';

export type OperationValueSelectorProps = PropsWithChildren<{
  value: string;
  onValuePress: (value: string, id: number) => void;
  description: string;
  selectedButton: number;
  testId?: string;
}>;

const OperationValueSelector = ({
  value,
  onValuePress,
  selectedButton,
  description,
  testId,
}: OperationValueSelectorProps) => {
  const onValuePress50 = () => {
    onValuePress('50', 0);
  };

  const onValuePress100 = () => {
    onValuePress('100', 1);
  };

  const onValuePress200 = () => {
    onValuePress('200', 2);
  };

  const onValuePress400 = () => {
    onValuePress('400', 3);
  };

  const onValuePress700 = () => {
    onValuePress('700', 4);
  };
  const onValuePress1000 = () => {
    onValuePress('1.000', 5);
  };

  return (
    <Container customStyle={style.wrapper} testId={testId} align="center">
      <Container align="center">
        <Container
          customStyle={style.top}
          align="center"
          justify="space-between">
          <Header testId="operationvalueselector-header" size={30}>
            {value}
          </Header>
          <Label testId="operationvalueselector-label" color="grey" size={15}>
            {description}
          </Label>
        </Container>

        <Container
          customStyle={style.topBtnRow}
          direction="row"
          justify="space-between">
          <Button
            onPress={onValuePress50}
            customStyle={
              selectedButton === 0 ? style.pressedButton : style.button
            }
            customFontStyle={
              selectedButton === 0 ? style.pressedButtonFont : style.buttonFont
            }
            testId={'operationvalueselector-button-50'}>
            50
          </Button>

          <Button
            onPress={onValuePress100}
            customStyle={
              selectedButton === 1 ? style.pressedButton : style.button
            }
            customFontStyle={
              selectedButton === 1 ? style.pressedButtonFont : style.buttonFont
            }
            testId={'operationvalueselector-button-100'}>
            100
          </Button>

          <Button
            onPress={onValuePress200}
            customStyle={
              selectedButton === 2 ? style.pressedButton : style.button
            }
            customFontStyle={
              selectedButton === 2 ? style.pressedButtonFont : style.buttonFont
            }
            testId={'operationvalueselector-button-200'}>
            200
          </Button>
        </Container>
        <Container direction="row" justify="space-between">
          <Button
            onPress={onValuePress400}
            customStyle={
              selectedButton === 3 ? style.pressedButton : style.button
            }
            customFontStyle={
              selectedButton === 3 ? style.pressedButtonFont : style.buttonFont
            }
            testId={'operationvalueselector-button-400'}>
            400
          </Button>

          <Button
            onPress={onValuePress700}
            customStyle={
              selectedButton === 4 ? style.pressedButton : style.button
            }
            customFontStyle={
              selectedButton === 4 ? style.pressedButtonFont : style.buttonFont
            }
            testId={'operationvalueselector-button-700'}>
            700
          </Button>

          <Button
            onPress={onValuePress1000}
            customStyle={
              selectedButton === 5 ? style.pressedButton : style.button
            }
            customFontStyle={
              selectedButton === 5 ? style.pressedButtonFont : style.buttonFont
            }
            testId={'operationvalueselector-button-1000'}>
            1.000
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default OperationValueSelector;
