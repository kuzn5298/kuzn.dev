import React from 'react';
import Content from '../Content';
import Header from '../Header';
import SideBar from '../SideBar';
import LayoutContainer from './Layout.styled';

const Layout = ({ children }) => (
    <LayoutContainer>
        <Header />
        <Content>{children}</Content>
        <SideBar />
    </LayoutContainer>
);

export default Layout;
