import {Container, Input, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {primary} from 'theme/colors';
import style from './InputArea.style';

export type InputAreaProps = PropsWithChildren<{
  label: string;
  onChange: (value: string) => void;
  value: string;
  testId?: string;
  safe?: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
}>;

const InputArea = ({
  label,
  accessibilityLabel,
  accessibilityHint,
  onChange,
  value,
  safe,
  testId,
}: InputAreaProps) => {
  return (
    <Container testId={testId} align="flex-start">
      <Container customStyle={style.fixedLabel}>
        <Label color={primary} testId="inputarea-label">
          {label}
        </Label>
      </Container>
      <Input
        onChange={onChange}
        testId="inputarea-input"
        value={value}
        safe={safe}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      />
    </Container>
  );
};

export default InputArea;
