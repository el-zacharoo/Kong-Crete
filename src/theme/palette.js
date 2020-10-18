
// https://material.io/resources/color/
export const color = {
    white: '#FFFFFF',
    black: '#000000',
    darkGrey: '#454545',
    ghost: '#f8fafd',
    fog: '#FBFBFB',
    smoke: '#f6f6f6',
    lightBlue: '#4F5D75',
    blue: '#0E1D53',
    darkText: '#858585',
    orange: '#0098ff'
};

export default {
    primary: {
        main: color.blue,
    },
    secondary: {
        main: color.orange,
    },
    text: {
        primary: color.black,
        secondary: color.darkGrey,
        contrastText: color.white,
    },
    background: {
        default: color.white,
        paper: color.ghost,
        // features: color.smoke,
        // social: color.blue,
        // input: color.fog
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
}