import React from 'react';
import { SectionContainer } from '@components/app';
import { ExperienceSectionContainer } from './ExperienceSection.styled';

const ExperienceSection = ({ title, items, ...props }) => (
    <SectionContainer title={title} {...props}>
        <ExperienceSectionContainer>Experience</ExperienceSectionContainer>
    </SectionContainer>
);

export default ExperienceSection;
