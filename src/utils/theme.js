import { THEME, DEFAULT_THEME_ID, THEME_LOCAL_STORAGE } from '@constants';

export const isValidThemeId = (themeId) => Object.values(THEME).includes(themeId);

export const setThemeIdToLocalStorages = (themeId) => {
    window.localStorage.setItem(THEME_LOCAL_STORAGE, themeId);
};

export const getThemeIdFromLocalStorages = () => {
    const themeId = window.localStorage.getItem(THEME_LOCAL_STORAGE);
    return isValidThemeId(themeId) ? themeId : null;
};

export const getSystemTheme = () => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches;
    return isDarkTheme ? THEME.DARK : null;
};

export const getUsedThemeId = () => {
    const localTheme = getThemeIdFromLocalStorages();
    const systemTheme = getSystemTheme();
    return localTheme ?? systemTheme ?? DEFAULT_THEME_ID;
};
