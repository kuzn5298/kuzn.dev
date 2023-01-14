import styled, { css } from 'styled-components';

const sizeBlock = css`
    ${({ size }) => {
        switch (size) {
            case 'inherit':
                return css`
                    font-size: inherit;
                `;
            case 'small':
                return css`
                    font-size: 1rem;
                `;
            case 'medium':
                return css`
                    font-size: 1.5rem;
                `;
            case 'large':
                return css`
                    font-size: 2rem;
                `;
            default:
                return css`
                    font-size: ${size};
                `;
        }
    }}
`;

const colorBlock = css`
    ${({ color }) => {
        switch (color) {
            case 'inherit':
                return css`
                    color: inherit;
                `;
            case 'primary':
                return css`
                    color: ${({ theme }) => theme.palette.primary.main};
                `;
            default:
                return css`
                    color: ${color};
                `;
        }
    }}
`;

const hoverColorBlock = css`
    &:hover {
        ${({ hoverColor }) => {
            switch (hoverColor) {
                case 'inherit':
                    return css`
                        color: inherit;
                    `;
                case 'primary':
                    return css`
                        color: ${({ theme }) => theme.palette.primary.main};
                    `;
                default:
                    return css`
                        color: ${hoverColor};
                    `;
            }
        }}
    }
`;

export const IconButtonContainer = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    flex: 0 0 auto;
    overflow: hidden;

    ${sizeBlock}
    ${colorBlock}
    ${hoverColorBlock}
`;
