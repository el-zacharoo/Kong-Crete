import { color } from './palette';
import { Roboto, RobotoReg, Robot0Bold, RobotoItalics, RobotoBoldItalics } from './typography';

export default {
    MuiCssBaseline: {
        '@global': {
            '@font-face': [Roboto, RobotoReg, Robot0Bold, RobotoItalics, RobotoBoldItalics],
        }
    },
    MuiCard: {
        root: {
            backgroundColor: color.white,
        }
    },
    MuiPaper: {
        root: {
            backgroundColor: color.white,
        },
        elevation1: {
            boxShadow: `0px 3px 20px ${'rgba(106, 137, 193, 0.2)'}`
        },
        elevation2: {
            boxShadow: `0px 30px 200px ${'rgba(106, 137, 193, 0.2)'}`
        },
    },

    MuiButton: {
        root: {
            fontSize: '1.125rem',
            lineHeight: '1.3125rem',
        },
        contained: {
            boxShadow: 'none',
            borderRadius: '0.25rem',
            lineHeight: '2rem',
            fontSize: '1.125rem',
            paddingLeft: '2.25rem',
            paddingRight: '2.25rem',
        },
    },

    MuiOutlinedInput: {
        root: {
            borderRadius: '0.25rem',
            background: color.white,
            color: color.grey,
        }
    },
    MuiInputLabel: {
        root: {
            color: color.grey,
            fontSize: '0.9rem',

        }
    },

}
