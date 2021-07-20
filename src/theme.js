import { createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

export const theme = createMuiTheme({

  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      contrastText: '#fff',
    },

    secondary: {
      main: green[600],
      contrastText: '#fff'
    },

    success: {
      main: red.A400,
      contrastText: '#fff'
    }
  },
});

export default theme;
