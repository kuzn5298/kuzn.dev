import styled, { css } from 'styled-components';

const sizeBlock = css`
    ${({ size }) => {
        switch (size) {
            case 'small':
                return css`
                    gap: 0.5rem;
                    padding: 0.25rem 0.75rem;
                    font-size: 0.75rem;
                `;
            case 'large':
                return css`
                    gap: 1.5rem;
                    padding: 0.75rem 2.25rem;
                    font-size: 1rem;
                `;
            default:
                return css`
                    gap: 1rem;
                    padding: 0.5rem 1.5rem;
                    font-size: 1rem;
                `;
        }
    }}
`;

export const ButtonContainer = styled.button`
    ${sizeBlock}

    position: relative;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};
    text-transform: uppercase;
    line-height: 1;

    &::after,
    &:before {
        box-sizing: border-box;
        content: '';
        display: block;
        position: absolute;
        width: 30%;
        height: 50%;
        border: 0.125em solid;
        transition: all 0.6s ease;
    }

    &::after {
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: currentColor;
        border-right-color: currentColor;
    }

    &::before {
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: currentColor;
        border-left-color: currentColor;
    }

    &.border:after,
    &.border:before,
    &:hover:after,
    &:hover:before {
        width: 100%;
        height: 100%;
    }
`;
