import styled from 'styled-components';

export const CardListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .separator {
        border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
        margin: 0 20%;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        .separator {
            border-width: 1px;
        }
    }
`;
