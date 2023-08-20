import styled from 'styled-components';

export const SkillSectionContainer = styled.div`
    display: flex;
    column-gap: 5rem;
    row-gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;

    ${({ theme }) => theme.breakpoints.down('sm')} {
        gap: 1rem 2rem;
        padding: 1rem;
    }
`;
