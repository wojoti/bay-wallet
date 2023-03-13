import {Container} from 'components/atoms';
import {ModalContainer, SelectedWalletArea} from 'components/molecules';
import {TransferForm} from 'components/organisms';
import {Receiver} from 'components/organisms/TransferForm/TransferForm';
import {PropsWithChildren} from 'react';
import {Modal} from 'react-native';
import style from './TransferTemplate.style';

export type TransferTemplateProps = PropsWithChildren<{
  onChangePress: () => void;
  walletValue: string;
  walletName: string;
  testId?: string;
  transferValue: string;
  onValuePress: (value: string, id: number) => void;
  onReceiverPress: (id: string) => void;
  selectedButton: number;
  selectedReceiver: string;
  onMorePress: () => void;
  receiverData: Receiver[];
  onSendPress: () => void;
  modalVisible: boolean;
  onModalPress: () => void;
}>;

const TransferTemplate = ({
  onChangePress,
  walletValue,
  walletName,
  testId,
  transferValue,
  onValuePress,
  selectedButton,
  onReceiverPress,
  selectedReceiver,
  onMorePress,
  receiverData,
  onSendPress,
  modalVisible,
  onModalPress,
}: TransferTemplateProps) => {
  return (
    <Container align="center" customStyle={style.wrapper} testId={testId}>
      <Modal
        testID="transfertemplate-modal"
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <ModalContainer
          onPress={onModalPress}
          header="Success!"
          description="Your payment has been procceded!"
          buttonText="DONE"
          testId="transfertemplate-transfermodal"
        />
      </Modal>
      <SelectedWalletArea
        onChangePress={onChangePress}
        walletValue={walletValue}
        walletName={walletName}
      />
      <TransferForm
        transferValue={transferValue}
        onValuePress={onValuePress}
        selectedButton={selectedButton}
        selectedReceiver={selectedReceiver}
        onMorePress={onMorePress}
        receiverData={receiverData}
        description={'Transfer Amount'}
        onReceiverPress={onReceiverPress}
        onSendPress={onSendPress}
      />
    </Container>
  );
};

export default TransferTemplate;
