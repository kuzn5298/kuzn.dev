import { createBreakpoints } from './helpers';

const defaultTheme = {
    palette: {
        common: {
            white: '#FFFFFF',
            black: '#000000',
            lightGray: 'rgba(158, 158, 158, 0.1)',
            darkGray: 'rgba(158, 158, 158, 0.2)',
        },
        icon: {
            theme: {
                light: '#F2C94C',
                dark: '#797979',
            },
            social: {
                twitter: '#66c5ff',
                github: '#809aa6',
                linkedin: '#0278b7',
                instagram: '#ff1f4c',
                email: '#a4a4a4',
            },
        },
    },
    typography: {
        fontFamily: 'Lexend, Arial, Helvetica, sans-serif;',
        fontSize: 16,
    },
    zIndex: {
        backgroundTitle: -1,
        tooltip: 1500,
        appMenu: 1000,
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
