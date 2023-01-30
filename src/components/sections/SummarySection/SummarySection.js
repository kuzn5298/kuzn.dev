import React from 'react';
import { SectionContainer } from '@components/app';
import { AboutButton } from './components';
import { SummarySectionContainer, SummarySectionHtml } from './SummarySection.styled';

const SummarySection = ({ html }) => (
    <SectionContainer>
        <SummarySectionContainer>
            <SummarySectionHtml dangerouslySetInnerHTML={{ __html: html }} />
            <AboutButton />
        </SummarySectionContainer>
    </SectionContainer>
);

export default SummarySection;
