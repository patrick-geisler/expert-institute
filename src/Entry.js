import React from 'react';
import './App.css';
import { Provider} from 'react-redux'
import App from './App'

import configureStore from './store/configureStore'

const store = configureStore()

const Entry = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Entry;
