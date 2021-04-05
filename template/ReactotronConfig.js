import Reactotron, { asyncStorage } from 'reactotron-react-native';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'Aizen Agent',
    createSocket: (path) => new ReactotronFlipper(path),
  }) // controls connection & communication settings
  .useReactNative({
    asyncStorage: [],
  }) // add all built-in react native plugins
  .use(asyncStorage())
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect(); // let's connect!

export default reactotron;
