import React from 'react';
import { SectionContainer } from '@components/app';

const ExperienceSection = ({ title, items, ...props }) => (
    <SectionContainer title={title} {...props} />
);

export default ExperienceSection;
