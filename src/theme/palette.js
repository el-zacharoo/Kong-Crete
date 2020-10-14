
// https://material.io/resources/color/
export const color = {
    white: '#FFFFFF',
    black: '#333333',
    darkGrey: '#454545',
    lightGrey: '#f8fafd',
    fog: '#FBFBFB',
    smoke: '#f6f6f6',
    orange: '#ED8001',
    blue: '#29669F',
    darkText: '#858585'
};

export default {
    primary: {
        main: color.black,
    },
    secondary: {
        main: color.blue,
    },
    text: {
        primary: color.black,
        secondary: color.darkText,
        contrastText: color.white,
    },
    background: {
        default: color.white,
        paper: color.lightGrey,
        // features: color.smoke,
        // social: color.blue,
        // input: color.fog
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
}