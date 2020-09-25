
// https://material.io/resources/color/
export const color = {
    white: '#FFFFFF',
    black: '#000000',
    darkGrey: '#454545',
    lightGrey: '#E5E5E5',
    smoke: '#f6f6f6',
    orange: '#ED8001',
    blue: '#29669F',
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
        secondary: color.white,
    },
    background: {
        default: color.white,
        paper: color.lightGrey,
        features: color.smoke,
        social: color.blue,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
}