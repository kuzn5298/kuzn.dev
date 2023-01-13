import styled, { css } from 'styled-components';

const hoverBlock = css`
    ${({ hover }) =>
        hover &&
        css`
            &:hover {
                color: ${({ theme }) => theme.palette.primary.main};
            }
        `}
`;

const IconButtonContainer = styled.button`
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
    color: inherit;
    overflow: hidden;
    font-size: 1.5rem;

    ${hoverBlock}
`;

export default IconButtonContainer;
