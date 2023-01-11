import React from 'react';
import Header from '../Header';
import LayoutContainer from './Layout.styled';

const Layout = ({ children }) => (
    <LayoutContainer>
        <Header className="header" />
        <main className="main">{children}</main>
    </LayoutContainer>
);

export default Layout;
