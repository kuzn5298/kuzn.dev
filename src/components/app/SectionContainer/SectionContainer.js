import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--header-height));
    width: 100%;
    box-sizing: border-box;
    padding-bottom: var(--header-height);
    scroll-snap-align: start;
    gap: 1rem;
    padding-top: 20%;

    &.align-center {
        padding-top: 5%;
        justify-content: center;
    }

    &.justify-center {
        align-items: center;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        padding-top: 5%;
        min-height: initial;
        scroll-snap-align: initial;

        &.align-center {
            justify-content: initial;
        }

        &.mobile-align-center {
            min-height: calc(100vh - var(--header-height));
            justify-content: center;
        }
    }
`;

const Title = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    text-transform: uppercase;
`;

const Section = ({
    title,
    children,
    alignCenter,
    justifyCenter,
    mobileAlignCenter,
    className,
    ...props
}) => (
    <SectionContainer
        className={clsx(
            alignCenter && 'align-center',
            justifyCenter && 'justify-center',
            mobileAlignCenter && 'mobile-align-center',
            className
        )}
        {...props}
    >
        {title && <Title>{title}</Title>}
        {children}
    </SectionContainer>
);

export default Section;
