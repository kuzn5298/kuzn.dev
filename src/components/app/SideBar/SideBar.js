import React from 'react';
import ActionBar from '../ActionBar';
import SocialBar from '../SocialBar';
import SideBarContainer from './SideBar.styled';

const SideBar = () => (
    <SideBarContainer>
        <ActionBar />
        <SocialBar />
    </SideBarContainer>
);

export default SideBar;
