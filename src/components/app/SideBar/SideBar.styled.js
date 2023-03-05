import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: var(--header-height);
    bottom: 0;
    left: var(--app-width-padding);
`;

export const SideBarSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SideBarActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
