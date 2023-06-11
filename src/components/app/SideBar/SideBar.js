import React from 'react';
import { ToggleTheme } from '@components/custom';
import { IconButton, Tooltip } from '@components/core';
import { useTheme } from '@hooks';
import { SOCIAL_LIST, NEXT_THEME } from '@constants';
import { openURL } from '@utils';
import { SideBarActions, SideBarContainer, SideBarSocial } from './SideBar.styled';

const SideBar = () => {
    const { theme, themeId } = useTheme();
    const { name: themeName } = NEXT_THEME[themeId];

    return (
        <SideBarContainer>
            <SideBarActions>
                <Tooltip title={themeName} direction="right">
                    <ToggleTheme />
                </Tooltip>
            </SideBarActions>
            <SideBarSocial>
                {SOCIAL_LIST.map(({ id, name, link, icon: Icon }) => (
                    <Tooltip key={id} title={name} direction="right">
                        <IconButton
                            size="medium"
                            hoverColor={theme.palette.icon.social[id]}
                            onClick={() => openURL(link)}
                        >
                            <Icon />
                        </IconButton>
                    </Tooltip>
                ))}
            </SideBarSocial>
        </SideBarContainer>
    );
};

export default React.memo(SideBar);
