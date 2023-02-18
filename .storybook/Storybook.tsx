import {getStorybookUI} from '@storybook/react-native';
import {AppRegistry} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {name as appName} from '../app.json';
import './storybook.requires';

const StorybookUIRoot = getStorybookUI({});
const Storybook = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StorybookUIRoot />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(appName, () => Storybook);
export default Storybook;
