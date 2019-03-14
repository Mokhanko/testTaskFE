import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './pages/App';
import configureStore from './store';

const store = configureStore();

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: purple[300],
//       main: purple[500],
//       dark: purple[700],
//     },
//     secondary: {
//       light: green[300],
//       main: green[500],
//       dark: green[700],
//     },
//   },
//   typography: {
//     useNextVariants: true,
//   },
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);