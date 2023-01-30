import React from 'react';
import { goAbout } from '@utils/navigation';
import { AboutButtonContainer } from './AboutButton.styled';

const AboutButton = () => (
    <AboutButtonContainer onClick={goAbout}>
        <span>See more about me</span>
        <div className="arrow" />
    </AboutButtonContainer>
);

export default AboutButton;
