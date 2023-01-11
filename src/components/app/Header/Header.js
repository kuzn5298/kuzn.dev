import React from 'react';
import { navigate } from 'gatsby';
import { Logo } from '@components/core';
import { ResumeButton } from '@components/custom';
import { APP_ROUTES } from '@constants/routes';
import Navigation from '../Navigation';
import HeaderContainer from './Header.styled';

const Header = ({ className }) => {
    const goHome = () => {
        navigate(APP_ROUTES.HOME);
    };

    return (
        <HeaderContainer className={className}>
            <Logo onClick={goHome} />
            <div className="actions">
                <Navigation />
                <ResumeButton />
            </div>
        </HeaderContainer>
    );
};

export default Header;
