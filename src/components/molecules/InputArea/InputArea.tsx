import {Container, Input, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import {primary} from 'theme/colors';
import style from './InputArea.style';

export type InputAreaProps = PropsWithChildren<{
  type: 'username' | 'password' | 'phone' | 'password-confirm';
  onChange: (value: string) => void;
  value: string;
  testId?: string;
}>;

const InputArea = ({type, onChange, value, testId}: InputAreaProps) => {
  switch (type) {
    case 'username':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label color={primary} testId="inputarea-label">
              Username
            </Label>
          </Container>
          <Input
            type={'username'}
            onChange={onChange}
            testId="inputarea-input"
            value={value}
          />
        </Container>
      );
    case 'password':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label color={primary} testId="inputarea-label">
              Password
            </Label>
          </Container>
          <Input
            type={'password'}
            onChange={onChange}
            testId="inputarea-input"
            value={value}
          />
        </Container>
      );
    case 'phone':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label color={primary} testId="inputarea-label">
              Phone
            </Label>
          </Container>
          <Input
            type={'phone'}
            onChange={onChange}
            testId="inputarea-input"
            value={value}
          />
        </Container>
      );
    case 'password-confirm':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label color={primary} testId="inputarea-label">
              Confirm{' '}
            </Label>
          </Container>
          <Input
            type={'password-confirm'}
            onChange={onChange}
            testId="inputarea-input"
            value={value}
          />
        </Container>
      );
  }
};

export default InputArea;
