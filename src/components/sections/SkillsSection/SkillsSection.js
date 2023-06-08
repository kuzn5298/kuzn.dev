import React from 'react';
import { SectionContainer } from '@components/app';

const SkillsSection = ({ title, html, ...props }) => <SectionContainer title={title} {...props} />;

export default SkillsSection;
