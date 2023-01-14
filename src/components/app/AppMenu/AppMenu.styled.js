import styled from 'styled-components';

export const AppMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.palette.background.default};
    z-index: ${({ theme }) => theme.zIndex.appMenu};
`;

export const AppMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
`;

export const AppMenuContent = styled.div`
    position: relative;
    overflow: auto;
    padding: 2rem 0;
    flex: 1;
`;

export const AppMenuFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
`;

export const AppMenuNavigation = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
    margin-top: 3rem;
`;

export const AppMenuActions = styled.div`
    position: absolute;
    right: 0;
    top: 4.5rem;
`;

export const AppMenuResume = styled.div`
    display: flex;
    justify-content: center;
`;

export const AppMenuSocial = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
`;
