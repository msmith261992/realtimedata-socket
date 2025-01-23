//React
import React from 'react';
// RN
import {AppRegistry} from 'react-native';
// Components
import App from './src/App';
// App info
import {name as appName} from './app.json';
//Store
import { store } from './src/store';
// Redux
import { Provider } from 'react-redux';

AppRegistry.registerComponent(appName, () => () => (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
));
