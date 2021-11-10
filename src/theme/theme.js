import * as React from 'react';
import { createTheme } from '@material-ui/core/styles';
import {Props} from './props'

//textColor='#392F5A' indicatorColor='#392F5A' 


export const theme = createTheme({
    palette: {
        primary: {
            main: '#9DD9D2'
        },
        secondary: {
            main: '#392F5A'
        },



    },

    props: Props

});
