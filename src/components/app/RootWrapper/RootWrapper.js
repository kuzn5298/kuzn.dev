import React from 'react';
import { ThemeProvider } from '@contexts';
import ClientLoading from '../ClientLoading';

const RootWrapper = ({ element }) => (
    <ThemeProvider>
        <ClientLoading>{element}</ClientLoading>
    </ThemeProvider>
);

export default RootWrapper;
