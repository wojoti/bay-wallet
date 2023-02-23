import {Container, Input, Label} from 'components/atoms';
import {PropsWithChildren} from 'react';
import style from './InputArea.style';

export type InputAreaProps = PropsWithChildren<{
  type: 'username' | 'password' | 'phone' | 'password-confirm';
  onChange: (value: string) => void;
  testId?: string;
}>;

const InputArea = ({type, onChange, testId}: InputAreaProps) => {
  switch (type) {
    case 'username':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label testId="inputarea-label">Username</Label>
          </Container>
          <Input
            type={'username'}
            onChange={onChange}
            testId="inputarea-input"
          />
        </Container>
      );
    case 'password':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label testId="inputarea-label">Password</Label>
          </Container>
          <Input
            type={'password'}
            onChange={onChange}
            testId="inputarea-input"
          />
        </Container>
      );
    case 'phone':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label testId="inputarea-label">Phone</Label>
          </Container>
          <Input type={'phone'} onChange={onChange} testId="inputarea-input" />
        </Container>
      );
    case 'password-confirm':
      return (
        <Container testId={testId} align={'flex-start'}>
          <Container customStyle={style.fixedLabel}>
            <Label testId="inputarea-label">Confirm </Label>
          </Container>
          <Input
            type={'password-confirm'}
            onChange={onChange}
            testId="inputarea-input"
          />
        </Container>
      );
  }
};

export default InputArea;
