import React, { createContext, useState, useCallback, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyle, darkTheme, lightTheme } from '@styles';
import { THEME } from '@constants';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState(THEME.DARK);

    const theme = useMemo(() => {
        switch (themeName) {
            case THEME.DARK:
                return darkTheme;
            default:
                return lightTheme;
        }
    }, [themeName]);

    const setThemeByName = useCallback((newThemeName) => {
        setThemeName(newThemeName);
    }, []);

    const contextValue = useMemo(
        () => ({
            theme,
            themeName,
            setThemeByName,
        }),
        [theme, themeName, setThemeByName]
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
