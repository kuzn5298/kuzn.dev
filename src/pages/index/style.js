import styled from 'styled-components';

export const IndexContainer = styled.section`
    margin-top: 15vh;
    font-size: 1rem;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        margin-top: 5vh;
        font-size: 0.875rem;
    }
`;

export const SummarySection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 80%;
    margin-bottom: 4rem;

    ${({ theme }) => theme.breakpoints.down('md')} {
        max-width: 100%;
    }

    p {
        font-size: 1.25em;
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
