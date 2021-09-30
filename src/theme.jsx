import * as React from 'react';
import { createTheme } from '@mui/material/styles';

//textColor='#392F5A' indicatorColor='#392F5A' 


export const theme = createTheme({
    palette: {
        primary: {
            main: '#9DD9D2'
        },
        secondary: {
            main: '#392F5A'
        }

    },
  components: {
      MuiTabs: {
          styleOverrides: {
              
          }
      }
  }
});
