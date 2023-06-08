import React from 'react';
import { SectionContainer } from '@components/app';

const AboutSection = ({ title, html, ...props }) => <SectionContainer title={title} {...props} />;

export default AboutSection;
