import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
    display: flex;
    min-height: calc(100vh - var(--header-height));
    width: 100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: var(--header-height);
`;

const SectionWrapper = styled.div`
    width: 100%;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.primary.main};
`;

const Section = ({ title, children, ...props }) => (
    <SectionContainer {...props}>
        <SectionWrapper>
            {title && <Title>{title}</Title>}
            {children}
        </SectionWrapper>
    </SectionContainer>
);

export default Section;
