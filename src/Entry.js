import React from 'react';
import { Provider} from 'react-redux'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


const Entry = ({ store }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App/>
        </Router>
      </ThemeProvider> 
    </Provider>
  );
}

export default Entry;
