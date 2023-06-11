import React, { useRef } from 'react';
import { useMedia, usePage, useScrollPosition } from '@hooks';
import Main from '../Main';
import Header from '../Header';
import SideBar from '../SideBar';
import SectionNav from '../SectionNav';
import { LayoutContainer } from './Layout.styled';

const MAIN_CONTAINER_ID = 'mainContainer';

const Layout = ({ children }) => {
    const mainRef = useRef(null);
    const scrollPosition = useScrollPosition(mainRef);
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));
    const { sections } = usePage();

    return (
        <LayoutContainer>
            <Header elevation={scrollPosition > 0} />
            <Main ref={mainRef} id={MAIN_CONTAINER_ID}>
                {children}
            </Main>
            {!isMobile && <SideBar />}
            {!isMobile && sections && (
                <SectionNav sections={sections} containerId={MAIN_CONTAINER_ID} />
            )}
        </LayoutContainer>
    );
};

export default Layout;
