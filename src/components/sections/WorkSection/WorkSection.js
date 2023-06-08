import React from 'react';
import { SectionContainer } from '@components/app';

const WorkSection = ({ title, html, ...props }) => <SectionContainer title={title} {...props} />;

export default WorkSection;
