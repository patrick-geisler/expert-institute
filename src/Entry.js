import React from 'react';
import { Provider} from 'react-redux'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'


const Entry = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

export default Entry;
