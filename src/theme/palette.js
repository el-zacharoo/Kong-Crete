
// https://material.io/resources/color/
export const color = {
    white: '#FFFFFF',
    black: '#000000',
    darkGrey: '#454545',
    lightGrey: '#E5E5E5',
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
        main: color.orange,
    },
    text: {
        primary: color.black,
        secondary: color.darkText,
        contrastText: color.white,
    },
    background: {
        default: color.white,
        paper: color.lightGrey,
        features: color.smoke,
        social: color.blue,
        input: color.fog
    },
    contrastThreshold: 2,
    tonalOffset: 0.2,
}