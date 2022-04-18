import { createTheme } from '@mui/material/styles';
import { vazir, vazirBold, vazirMedium } from './fonts'
import * as color from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            light: color.grayLable,
            main: color.primaryLable
        },
        secondary: {
            main: color.secondaryLable
        },
        contrastThreshold: 3
    },
    shape: {
        borderRadius: 10
    },
    direction: 'rtl',
    typography: {

        fontFamily: vazir.fontFamily,
        h1: {
            fontSize: '3rem'
        },
        h3: {
            fontSize: '1.5rem'
        },
        h4: {
            fontSize: '1.375rem',
            lineHeight: "1.45rem",
        },
        h5: {
            fontSize: '1.125rem'
        },
        h6: {
            fontSize: '1rem'
        },
        subtitle1: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '.875rem',
        },
    },


    props: {
        MuiButton: {
            color: 'primary',
            variant: 'contained',
        }
    },

    overrides: {
        MuiScopedCssBaseline: {
            root: {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
            }
        },
        MuiCssBaseline: {
            '@global': {
                '@font-face': [vazir, vazirMedium, vazirBold],

            },
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 665,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
})

