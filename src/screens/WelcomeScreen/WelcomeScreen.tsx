import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import WelcomeTemplate from 'components/templates/WelcomeTemplate/WelcomeTemplate';

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <WelcomeTemplate
      onButtonPress={() => {
        navigation.navigate('Storybook');
      }}
    />
  );
};

export default WelcomeScreen;
