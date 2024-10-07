import React from 'react';
import { LogoContainer } from './Logo.styled';

const Logo = (props) => (
    <LogoContainer data-testid="logo" {...props}>
        kuzn<span className="dot">.</span>dev
    </LogoContainer>
);

export default Logo;
