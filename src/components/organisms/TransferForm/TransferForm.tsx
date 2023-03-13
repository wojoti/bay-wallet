import {Button, Container, Header} from 'components/atoms';
import {OperationValueSelector, ReceiverItem} from 'components/molecules';
import {PropsWithChildren} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import style from './TransferForm.style';

export type Receiver = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
};
export type TransferFormProps = PropsWithChildren<{
  transferValue: string;
  onValuePress: (value: string, id: number) => void;
  onReceiverPress: (id: string) => void;
  selectedButton: number;
  onMorePress: () => void;
  receiverData: Receiver[];
  selectedReceiver: string;
  description: string;
  testId?: string;
  onSendPress: () => void;
}>;

const TransferForm = ({
  transferValue,
  onValuePress,
  onReceiverPress,
  selectedButton,
  onMorePress,
  receiverData,
  selectedReceiver,
  description,
  testId,
  onSendPress,
}: TransferFormProps) => (
  <Container
    flex={1}
    customStyle={style.contentWithRadius}
    align="center"
    testId={testId}>
    <Container align="center" customStyle={style.sizer}>
      <OperationValueSelector
        value={transferValue}
        onValuePress={onValuePress}
        selectedButton={selectedButton}
        description={description}
        testId="transferform-operationvalueselector"
      />
      <Container
        customStyle={style.receiverselector}
        direction="row"
        justify="space-between"
        align="center">
        <Header size={18}>Receiver</Header>
        <Button
          customFontStyle={style.buttonFont}
          customStyle={style.button}
          testId="transferform-more"
          onPress={onMorePress}>
          More
        </Button>
      </Container>
      <FlatList
        horizontal={true}
        data={receiverData}
        renderItem={({item}) => (
          <ReceiverItem
            id={item.id}
            firstname={item.firstName}
            selectedId={selectedReceiver}
            onPress={onReceiverPress}
            testId={'transferform-receiveritem-' + item.id}
          />
        )}
      />
      <Button
        customStyle={style.send}
        customFontStyle={style.sendFont}
        onPress={onSendPress}
        testId="transferform-send">
        SEND
      </Button>
    </Container>
  </Container>
);

export default TransferForm;
