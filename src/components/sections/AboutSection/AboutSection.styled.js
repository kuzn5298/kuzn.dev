import styled from 'styled-components';

export const AboutSectionContainer = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => theme.breakpoints.down('sm')} {
        flex-direction: column;
    }
    ${({ theme }) => theme.breakpoints.down('md')} {
        gap: 1rem;
    }

    .content {
        flex: 1;
        ${({ theme }) => theme.breakpoints.down('sm')} {
            order: 1;
        }
    }
    .avatar {
        min-width: 12rem;
        max-width: 16rem;
        flex: 1;
    }
`;

export const AboutSectionHtml = styled.div`
    p {
        margin: 0;
    }
`;
