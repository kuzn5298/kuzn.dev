import React from 'react';
import { ThemeProvider } from '@contexts';

const RootWrapper = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;

export default RootWrapper;
