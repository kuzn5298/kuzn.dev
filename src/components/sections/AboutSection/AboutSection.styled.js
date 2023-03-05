import styled from 'styled-components';

export const AboutSectionContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    .content {
        flex: 1;
    }

    .avatar {
        width: 25%;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.palette.primary.main};
`;

export const AboutSectionHtml = styled.div``;
