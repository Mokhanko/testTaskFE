import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1216e5'
    },
    secondary: {
      main: '#22bd2c'
    }
  },
  typography: {
    useNextVariants: true,
  }
});

export default theme;
