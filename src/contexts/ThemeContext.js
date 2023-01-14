import React, { createContext, useState, useCallback, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { THEME } from '@constants';
import { GlobalStyle, darkTheme, lightTheme } from '@styles';
import { getUsedThemeId, isValidThemeId, setThemeIdToLocalStorages } from '@utils';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [themeId, setThemeId] = useState(getUsedThemeId);

    const theme = useMemo(() => {
        switch (themeId) {
            case THEME.DARK:
                return darkTheme;
            default:
                return lightTheme;
        }
    }, [themeId]);

    const setThemeById = useCallback((newThemeId) => {
        if (isValidThemeId(newThemeId)) {
            setThemeIdToLocalStorages(newThemeId);
            setThemeId(newThemeId);
        }
    }, []);

    const contextValue = useMemo(
        () => ({
            theme,
            themeId,
            setThemeById,
        }),
        [theme, themeId, setThemeById]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <StyledThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
