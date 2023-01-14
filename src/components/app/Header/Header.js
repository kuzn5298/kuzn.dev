import React from 'react';
import { Logo, ResumeButton } from '@components/custom';
import { IconButton } from '@components/core';
import { MenuIcon } from '@components/icons';
import { useMedia } from '@hooks';
import { goHome } from '@utils';
import Navigation from '../Navigation';
import AppMenu from '../AppMenu';
import { HeaderContainer, HeaderActions } from './Header.styled';

const Header = ({ className }) => {
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));

    return (
        <HeaderContainer className={className}>
            <Logo onClick={goHome} />
            {!isMobile && (
                <HeaderActions>
                    <Navigation />
                    <ResumeButton />
                </HeaderActions>
            )}
            {isMobile && (
                <AppMenu>
                    <IconButton size="large">
                        <MenuIcon />
                    </IconButton>
                </AppMenu>
            )}
        </HeaderContainer>
    );
};

export default Header;
