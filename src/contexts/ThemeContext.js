import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { THEME } from '@constants';
import { GlobalStyle, darkTheme, lightTheme } from '@styles';
import { getUsedThemeId, isValidThemeId, setThemeIdToLocalStorages } from '@utils';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children, defaultTheme = THEME.DARK }) => {
    const [themeId, setThemeId] = useState(defaultTheme);

    useEffect(() => {
        const clientThemeId = getUsedThemeId();
        setThemeId(clientThemeId);
    }, []);

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
