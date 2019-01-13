// @flow
import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import Config from 'react-native-config';

import configureStore from './store/ConfigureStore';

import styles from './App.styles';

import PrimaryStackNavigationComponent from './navigations/primaryStackNavigator/index';

let reactotronStoreAction = null;

if (Config.DEV && Config.DEV == 'true') {
  reactotronStoreAction = require('../config/reactotron/reactotron.config').default;
}

const store = configureStore(reactotronStoreAction);

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <PrimaryStackNavigationComponent />
    </SafeAreaView>
  </Provider>
);

export default App;
