import { color } from './palette';
import { Roboto, RobotoReg, Robot0Bold, RobotoItalics, RobotoBoldItalics } from './typography';

export default {
    MuiCssBaseline: {
        '@global': {
            '@font-face': [Roboto, RobotoReg, Robot0Bold, RobotoItalics, RobotoBoldItalics],
        }
    },
    MuiAppBar: {
        colorDefault: {
            backgroundColor: color.white,
        }
    },
    MuiLink: {
        root: {
            fontWeight: 700,
        },
    },
    MuiPaper: {
        root: {
            backgroundColor: color.white,
        },
        elevation1: {
            boxShadow: `-8px 8px 6px -6px ${color.lightGrey}`
        },
    },
    MuiCardActionArea: {
        root: {
            height: '100%'
        },
    },
    MuiButton: {
        root: {
            fontSize: '1rem',
            fontWeight: 700,
        },
        contained: {
            boxShadow: 'none',
            paddingLeft: '2rem',
            paddingRight: '2rem'
        },
    },
    MuiTypography: {
        gutterBottom: {
            marginBottom: '1rem',
        },
    },
    MuiOutlinedInput: {
        root: {
            background: color.fog,
            color
        }
    }
}