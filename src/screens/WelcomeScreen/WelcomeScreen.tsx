import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {WelcomeTemplate} from 'components/templates';

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

export interface WelcomeScreenProps {
  testId?: string;
}

const WelcomeScreen = ({testId}: WelcomeScreenProps) => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <WelcomeTemplate
      onButtonPress={() => {
        navigation.navigate('Storybook');
      }}
      testId={testId}
    />
  );
};

export default WelcomeScreen;
