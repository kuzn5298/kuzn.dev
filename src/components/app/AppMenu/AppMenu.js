import React, { useState } from 'react';
import { IconButton, Link } from '@components/core';
import { Logo, ResumeButton, ToggleTheme } from '@components/custom';
import { CloseIcon } from '@components/icons';
import { NAVIGATION, SOCIAL_LIST } from '@constants';
import { openURL, goHome } from '@utils';
import { useTheme } from '@hooks';
import {
    AppMenuActions,
    AppMenuContainer,
    AppMenuContent,
    AppMenuFooter,
    AppMenuHeader,
    AppMenuNavigation,
    AppMenuResume,
    AppMenuSocial,
} from './AppMenu.styled';

const AppMenu = ({ children }) => {
    const [open, setOpen] = useState(false);

    const { theme } = useTheme();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogoClick = () => {
        goHome();
        handleClose();
    };

    return (
        <>
            {React.cloneElement(children, { onClick: handleOpen })}
            {open && (
                <AppMenuContainer>
                    <AppMenuHeader>
                        <Logo onClick={handleLogoClick} />
                        <IconButton onClick={handleClose} size="large">
                            <CloseIcon />
                        </IconButton>
                    </AppMenuHeader>
                    <AppMenuContent>
                        <AppMenuActions>
                            <ToggleTheme size="large" />
                        </AppMenuActions>
                        <AppMenuNavigation>
                            {NAVIGATION.map((nav) => (
                                <Link key={nav.to} to={nav.to} onClick={handleClose} size="large">
                                    {nav.name}
                                </Link>
                            ))}
                        </AppMenuNavigation>
                    </AppMenuContent>
                    <AppMenuFooter>
                        <AppMenuResume>
                            <ResumeButton size="large" />
                        </AppMenuResume>
                        <AppMenuSocial>
                            {SOCIAL_LIST.map(({ id, link, icon: Icon }) => (
                                <IconButton
                                    key={id}
                                    size="large"
                                    hoverColor={theme.palette.icon.social[id]}
                                    onClick={() => openURL(link)}
                                >
                                    <Icon />
                                </IconButton>
                            ))}
                        </AppMenuSocial>
                    </AppMenuFooter>
                </AppMenuContainer>
            )}
        </>
    );
};

export default AppMenu;
