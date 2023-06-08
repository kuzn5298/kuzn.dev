import { Link } from 'react-scroll';
import styled from 'styled-components';

export const SectionNavContainer = styled.aside`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: var(--header-height);
    bottom: var(--header-height);
    right: var(--app-width-padding);
    list-style-type: none;
    gap: 1rem;
    margin: 0;
    padding: 0;
    line-height: 0;
`;

export const SectionItem = styled(Link)`
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    border: 0.125rem solid ${({ theme }) => theme.palette.primary.main};
    box-sizing: border-box;
    background-color: transparent;
    transition: all 0.5s ease;

    cursor: pointer;
    transform: rotate(45deg);

    &::before {
        content: none;
    }

    &:hover {
        border-width: 0.25rem;
    }

    &.active {
        background-color: ${({ theme }) => theme.palette.primary.main};
    }
`;
