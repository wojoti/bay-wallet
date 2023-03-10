import {Container} from 'components/atoms';
import {SelectedWalletArea} from 'components/molecules';
import {TransferForm} from 'components/organisms';
import {ReceiverData} from 'components/organisms/TransferForm/TransferForm';
import {PropsWithChildren} from 'react';
import style from './TransferTemplate.style';

export type TransferTemplateProps = PropsWithChildren<{
  onChangePress: () => void;
  walletValue: string;
  walletName: string;
  testId?: string;
  transferValue: string;
  onValuePress: (value: string, id: number) => void;
  selectedButton: number;
  onMorePress: () => void;
  receiverData: ReceiverData[];
}>;

const TransferTemplate = ({
  onChangePress,
  walletValue,
  walletName,
  testId,
  transferValue,
  onValuePress,
  selectedButton,
  onMorePress,
  receiverData,
}: TransferTemplateProps) => {
  return (
    <Container align="center" customStyle={style.wrapper} testId={testId}>
      <SelectedWalletArea
        onChangePress={onChangePress}
        walletValue={walletValue}
        walletName={walletName}
      />
      <TransferForm
        transferValue={transferValue}
        onValuePress={onValuePress}
        selectedButton={selectedButton}
        onMorePress={onMorePress}
        receiverData={receiverData}
        description={'Transfer Amount'}
      />
    </Container>
  );
};

export default TransferTemplate;
