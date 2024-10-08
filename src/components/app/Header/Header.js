import React from 'react';
import clsx from 'clsx';
import { Logo, ResumeButton } from '@components/custom';
import { IconButton } from '@components/core';
import { MenuIcon } from '@components/icons';
import { useMedia } from '@hooks';
import { goHome } from '@utils';
import Navigation from '../Navigation';
import AppMenu from '../AppMenu';
import { HeaderContainer, HeaderActions } from './Header.styled';

const Header = ({ className, elevation }) => {
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));

    return (
        <HeaderContainer
            data-testid="header"
            className={clsx(elevation && 'elevation-2', className)}
        >
            <Logo onClick={goHome} />
            {!isMobile && (
                <HeaderActions>
                    <Navigation />
                    <ResumeButton />
                </HeaderActions>
            )}
            {isMobile && (
                <AppMenu>
                    <IconButton data-testid="menu-button" size="large">
                        <MenuIcon />
                    </IconButton>
                </AppMenu>
            )}
        </HeaderContainer>
    );
};

export default React.memo(Header);
