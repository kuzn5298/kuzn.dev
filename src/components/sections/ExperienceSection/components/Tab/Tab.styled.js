import styled from 'styled-components';

export const TabContainer = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 0;
    cursor: pointer;
    padding: 0.75rem 2rem;
    gap: 0.25rem;
    color: inherit;
    background-color: transparent;
    text-decoration: none;
    position: relative;
    text-align: left;
    white-space: nowrap;

    .title {
        font-size: 1.25rem;
    }

    .subtitle {
        font-size: 0.75rem;
    }

    &:hover {
        background-color: ${({ theme }) => theme.palette.common.lightGray};
    }

    &:hover,
    &.active {
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;
