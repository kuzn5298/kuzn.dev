import { THEME, DEFAULT_THEME_ID, THEME_LOCAL_STORAGE, IS_BROWSER } from '@constants';
import storage from '@libs/storage';

export const isValidThemeId = (themeId) => Object.values(THEME).includes(themeId);

export const setThemeIdToLocalStorages = (themeId) => {
    storage.set(THEME_LOCAL_STORAGE, themeId);
};

export const getThemeIdFromLocalStorages = () => {
    const themeId = storage.get(THEME_LOCAL_STORAGE);
    return isValidThemeId(themeId) ? themeId : null;
};

export const getSystemTheme = () => {
    const isDarkTheme = IS_BROWSER
        ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
        : false;
    return isDarkTheme ? THEME.DARK : null;
};

export const getUsedThemeId = () => {
    const localTheme = getThemeIdFromLocalStorages();
    const systemTheme = getSystemTheme();
    return localTheme ?? systemTheme ?? DEFAULT_THEME_ID;
};
