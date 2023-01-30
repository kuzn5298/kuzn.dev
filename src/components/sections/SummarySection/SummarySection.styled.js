import styled from 'styled-components';

export const SummarySectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 4rem;
`;

export const SummarySectionHtml = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
        font-size: 1em;
        text-transform: uppercase;
        margin: 0;
    }

    h1 {
        font-size: 3.75em;
        color: ${({ theme }) => theme.palette.primary.main};
        text-transform: uppercase;
        margin: 0;
    }
`;
