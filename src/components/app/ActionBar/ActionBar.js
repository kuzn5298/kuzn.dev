import React from 'react';
import { ToggleTheme } from '@components/custom';
import ActionBarContainer from './ActionBar.styled';

const ActionBar = () => (
    <ActionBarContainer>
        <ToggleTheme />
    </ActionBarContainer>
);

export default ActionBar;
