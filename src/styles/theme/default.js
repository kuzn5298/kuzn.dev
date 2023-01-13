import { createBreakpoints } from './helpers';

const defaultTheme = {
    typography: {
        fontFamily: 'Lexend, Arial, Helvetica, sans-serif;',
        fontSize: 16,
    },
    zIndex: {
        backgroundTitle: -1,
    },
    breakpoints: createBreakpoints({
        xs: 320,
        sm: 640,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920,
    }),
};

export default defaultTheme;
