import styled, { css, keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const sizeBlock = css`
    ${({ $size }) => {
        switch ($size) {
            case 'small':
                return css`
                    width: 1rem;
                    height: 1rem;

                    &::after,
                    &::before {
                        width: 1rem;
                        height: 1rem;
                    }
                `;
            case 'medium':
                return css`
                    width: 2rem;
                    height: 2rem;

                    &::after,
                    &::before {
                        width: 2rem;
                        height: 2rem;
                    }
                `;
            case 'large':
                return css`
                    width: 3rem;
                    height: 3rem;

                    &::after,
                    &::before {
                        width: 3rem;
                        height: 3rem;
                    }
                `;
            default:
                return css`
                    width: ${$size};
                    height: ${$size};

                    &::after,
                    &::before {
                        width: ${$size};
                        height: ${$size};
                    }
                `;
        }
    }}
`;

export const SpinnerStyled = styled.span`
    display: inline-block;
    position: relative;

    &::after,
    &::before {
        content: '';
        border: 2px solid var(--text-color);
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        animation: ${animate} 2s ease-in-out infinite;
    }

    &:after {
        border-color: var(--primary-color);
        animation-delay: 1s;
    }

    ${sizeBlock}
`;
