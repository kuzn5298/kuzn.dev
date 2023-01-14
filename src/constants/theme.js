import { MoonIcon, SunIcon } from '@components/icons';

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
};

export const NEXT_THEME = {
    [THEME.DARK]: {
        id: THEME.LIGHT,
        name: 'Light',
        icon: SunIcon,
    },
    [THEME.LIGHT]: {
        id: THEME.DARK,
        name: 'Dark',
        icon: MoonIcon,
    },
};

export const DEFAULT_THEME_ID = THEME.DARK;

export const THEME_LOCAL_STORAGE = 'theme';
