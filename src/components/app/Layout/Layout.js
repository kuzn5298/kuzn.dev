import React from 'react';
import { useMedia, usePage } from '@hooks';
import Main from '../Main';
import Header from '../Header';
import SideBar from '../SideBar';
import SectionNav from '../SectionNav';
import { LayoutContainer } from './Layout.styled';

const MAIN_CONTAINER_ID = 'mainContainer';

const Layout = ({ children }) => {
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));
    const { sections } = usePage();

    return (
        <LayoutContainer>
            <Header />
            <Main id={MAIN_CONTAINER_ID}>{children}</Main>
            {!isMobile && <SideBar />}
            {!isMobile && sections && (
                <SectionNav sections={sections} containerId={MAIN_CONTAINER_ID} />
            )}
        </LayoutContainer>
    );
};

export default Layout;
