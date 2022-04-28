import { createMuiTheme } from "@material-ui/core/styles";
// import palette from "./palette";
// import typography from "./typography";
import { colors } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.indigo['A700'],
            dark: colors.indigo['A700'],
            light: colors.indigo['A200']
        },

        secondary: {
            main: colors.orange['A400'],
            dark: colors.orange['A700'],
            light: colors.orange['A200']

        }
    },
    typography: {
        h1: {
            fontWeight: 500,
            fontSize: 35,
            letterSpacing: '-0.24px'
        },
        h2: {
            fontWeight: 500,
            fontSize: 29,
            letterSpacing: '-0.24px'
        },
        h3: {
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: '-0.06px'
        },
        h4: {
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: '-0.06px'
        },
        h5: {
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0.05px'
        },
        h6: {
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: '-0.05px'
        },
    }
})

export default theme