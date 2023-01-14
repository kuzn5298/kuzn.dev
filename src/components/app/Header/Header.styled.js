import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: var(--header-height-padding)
        calc(var(--app-width-padding) + var(--header-width-padding));

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
`;

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;
