import React, { createContext, useState, useCallback, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyle, darkTheme, lightTheme } from '@styles';
import { THEME } from '@constants';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [themeId, setThemeId] = useState(THEME.DARK);

    const theme = useMemo(() => {
        switch (themeId) {
            case THEME.DARK:
                return darkTheme;
            default:
                return lightTheme;
        }
    }, [themeId]);

    const setThemeById = useCallback((newThemeId) => {
        setThemeId(newThemeId);
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
