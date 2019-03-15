import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './pages/App';
import configureStore from './store';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#e89eef'
    },
    secondary: {
      main: '#336b87'
    }
  },
  typography: {
    useNextVariants: true,
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);