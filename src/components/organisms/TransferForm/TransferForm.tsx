import {Container} from 'components/atoms';
import {OperationValueSelector} from 'components/molecules';
import {PropsWithChildren} from 'react';
import style from './TransferForm.style';

export type ReceiverData = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
};
export type TransferFormProps = PropsWithChildren<{
  transferValue: string;
  onValuePress: (value: string, id: number) => void;
  selectedButton: number;
  onMorePress: () => void;
  receiverData: ReceiverData[];
  description: string;
  testId?: string;
}>;

const TransferForm = ({
  transferValue,
  onValuePress,
  selectedButton,
  onMorePress,
  receiverData,
  description,
  testId,
}: TransferFormProps) => (
  <Container
    flex={1}
    customStyle={style.contentWithRadius}
    align="center"
    testId={testId}>
    <OperationValueSelector
      value={transferValue}
      onValuePress={onValuePress}
      selectedButton={selectedButton}
      description={description}
      testId="transferform-operationvalueselector"
    />
  </Container>
);

export default TransferForm;
