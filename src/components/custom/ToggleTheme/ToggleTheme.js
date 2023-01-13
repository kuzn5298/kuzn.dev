import React from 'react';
import { MoonIcon, SunIcon } from '@components/icons';
import { IconButton } from '@components/core';
import { useTheme } from '@hooks';
import { THEME } from '@constants';

const TOGGLE_THEME = {
    [THEME.LIGHT]: THEME.DARK,
    [THEME.DARK]: THEME.LIGHT,
};

const THEME_ICON = {
    [THEME.LIGHT]: <SunIcon />,
    [THEME.DARK]: <MoonIcon />,
};

const ToggleTheme = () => {
    const { themeName, setThemeByName } = useTheme();

    const handleTheme = () => {
        setThemeByName(TOGGLE_THEME[themeName]);
    };

    return (
        <IconButton onClick={handleTheme} hover>
            {THEME_ICON[TOGGLE_THEME[themeName]]}
        </IconButton>
    );
};

export default ToggleTheme;
