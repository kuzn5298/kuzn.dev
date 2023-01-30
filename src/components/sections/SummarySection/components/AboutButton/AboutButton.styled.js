import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        left: 20%;
    }
    50% {
        left: 50%;
    }
    100% {
        left: 20%;
    }
`;

export const AboutButtonContainer = styled.button`
    position: relative;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-flex;
    vertical-align: middle;
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary.main};
    text-transform: uppercase;
    line-height: 1;
    padding: 1em 0;
    font-size: 1em;

    .arrow {
        height: 0.125em;
        background-color: ${({ theme }) => theme.palette.primary.main};

        width: 100%;
        position: absolute;
        bottom: 0;
        animation: ${animate} 2s linear infinite;

        &::after,
        &::before {
            content: '';
            display: block;
            height: 0.125rem;
            position: absolute;
            right: 0;
            width: 1em;
            background-color: ${({ theme }) => theme.palette.primary.main};
        }

        &::after {
            transform: rotate(-40deg);
            transform-origin: bottom right;
        }

        &::before {
            transform: rotate(40deg);
            transform-origin: top right;
        }
    }
`;
