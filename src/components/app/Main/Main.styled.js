import styled from 'styled-components';

export const ContentContainer = styled.div`
    max-width: var(--max-content-width);
    width: 100%;
`;

export const MainContainer = styled.main`
    flex: 1;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    overflow: auto;
    scroll-behavior: smooth;
    padding: var(--content-height-padding) var(--content-width-padding);
    width: 100%;
    font-size: 1rem;
    ${({ theme }) => theme.breakpoints.down('sm')} {
        font-size: 0.75rem;
    }
`;
