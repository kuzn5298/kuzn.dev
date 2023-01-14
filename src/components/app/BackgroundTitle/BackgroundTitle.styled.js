import styled from 'styled-components';

export const BackgroundTitleContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    user-select: none;
    z-index: ${({ theme }) => theme.zIndex.backgroundTitle};
`;

export const BackgroundTitle = styled.span`
    position: absolute;
    right: var(--app-width-padding);
    bottom: -5%;
    white-space: nowrap;
    text-transform: uppercase;
    transform-origin: bottom right;
    transform: rotate(-90deg) translateX(100%);
    font-weight: 900;
    opacity: 0.05;
    line-height: 0.75;
`;
