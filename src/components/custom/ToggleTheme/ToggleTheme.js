import React from 'react';
import { IconButton } from '@components/core';
import { useTheme } from '@hooks';
import { NEXT_THEME } from '@constants';

const ToggleTheme = (props) => {
    const { themeId, setThemeById, theme } = useTheme();
    const { id, icon: Icon } = NEXT_THEME[themeId];

    const handleTheme = () => {
        setThemeById(id);
    };

    return (
        <IconButton
            onClick={handleTheme}
            size="medium"
            hoverColor={theme.palette.icon.theme[id]}
            {...props}
        >
            <Icon />
        </IconButton>
    );
};

export default ToggleTheme;
