import React from 'react';
import { navigate } from 'gatsby';
import { Logo, ResumeButton } from '@components/custom';
import { APP_ROUTES } from '@constants/routes';
import { useMedia } from '@hooks';
import Navigation from '../Navigation';
import HeaderContainer from './Header.styled';

const Header = ({ className }) => {
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));

    const goHome = () => {
        navigate(APP_ROUTES.HOME);
    };

    return (
        <HeaderContainer className={className}>
            <Logo onClick={goHome} />
            {!isMobile && (
                <div className="actions">
                    <Navigation />
                    <ResumeButton />
                </div>
            )}
        </HeaderContainer>
    );
};

export default Header;
