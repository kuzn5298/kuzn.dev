import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - var(--header-height));
    width: 100%;
    box-sizing: border-box;
    padding-bottom: var(--header-height);
    scroll-snap-align: start;
    gap: 1rem;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        padding-bottom: 2rem;
    }
`;

const SectionWrapper = styled.div`
    width: 100%;
`;

const Title = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
`;

const Section = ({ title, children, ...props }) => (
    <SectionContainer {...props}>
        {title && <Title>{title}</Title>}
        <SectionWrapper>{children}</SectionWrapper>
    </SectionContainer>
);

export default Section;
