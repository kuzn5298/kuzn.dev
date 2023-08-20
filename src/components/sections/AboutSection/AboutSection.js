import React from 'react';
import { SectionContainer } from '@components/app';
import Avatar from './Avatar';
import { AboutSectionContainer, AboutSectionHtml } from './AboutSection.styled';

const AboutSection = ({ title, html, ...props }) => (
    <SectionContainer alignCenter title={title} {...props}>
        <AboutSectionContainer>
            <AboutSectionHtml className="content" dangerouslySetInnerHTML={{ __html: html }} />
            <Avatar className="avatar" />
        </AboutSectionContainer>
    </SectionContainer>
);

export default AboutSection;
