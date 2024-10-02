import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@styles/theme';

export const wrapWithTheme = (children, theme = lightTheme) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
