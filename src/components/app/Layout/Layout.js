import React from 'react';
import { useMedia } from '@hooks';
import Content from '../Content';
import Header from '../Header';
import SideBar from '../SideBar';
import { LayoutContainer } from './Layout.styled';

const Layout = ({ children }) => {
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));

    return (
        <LayoutContainer>
            <Header />
            <Content>{children}</Content>
            {!isMobile && <SideBar />}
        </LayoutContainer>
    );
};

export default Layout;
