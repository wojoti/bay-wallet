import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {TransferTemplate} from 'components/templates';
import {ReceiverData} from 'data/index';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'store/store';
import {statusBarLightMode} from 'store/styleSlice';

export type TransferScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Transfer'
>;

export interface TransferScreenProps {
  testId?: string;
}

const TransferScreen = ({testId}: TransferScreenProps) => {
  // const navigation = useNavigation<TransferScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isFocused = useIsFocused();
  const [transferValue, setTransferValue] = useState('$ 50');
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedReceiver, setSelectedReceiver] = useState('');

  const onChangePress = () => {
    console.log('onChangePress');
  };

  const onValuePress = (value: string, id: number) => {
    setTransferValue('$ ' + value);
    setSelectedButton(id);
  };

  const onMorePress = () => {
    console.log('onMorePress');
  };

  const onReceiverPress = (id: string) => {
    setSelectedReceiver(id);
  };

  const onSendPress = () => {
    console.log('onSendPress');
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(statusBarLightMode());
    }
  }, [dispatch, isFocused]);

  return (
    <TransferTemplate
      testId={testId}
      onChangePress={onChangePress}
      walletValue={'$ 2137'}
      walletName={'Main Wallet'}
      transferValue={transferValue}
      onValuePress={onValuePress}
      selectedButton={selectedButton}
      selectedReceiver={selectedReceiver}
      onMorePress={onMorePress}
      receiverData={ReceiverData}
      onReceiverPress={onReceiverPress}
      onSendPress={onSendPress}
    />
  );
};

export default TransferScreen;
