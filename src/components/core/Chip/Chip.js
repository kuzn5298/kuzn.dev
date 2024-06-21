/* eslint-disable react/require-default-props */
import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const sizeBlock = css`
    ${({ $size }) => {
        switch ($size) {
            case 'small':
                return css`
                    font-size: 0.75rem;
                    padding: 0.125rem 0.25rem;
                `;
            case 'medium':
                return css`
                    font-size: 1rem;
                    padding: 0.25rem 0.5rem;
                `;
            case 'large':
                return css`
                    font-size: 1.5rem;
                    padding: 0.5rem 1rem;
                `;
            default:
                return undefined;
        }
    }}
`;

const borderColorBlock = css`
    ${({ $borderColor, theme }) => {
        if ($borderColor) {
            switch ($borderColor) {
                case 'primary':
                    return css`
                        border-left: 3px solid ${theme.palette.primary.main};
                    `;
                default:
                    return css`
                        border-left: 3px solid ${$borderColor};
                    `;
            }
        }
        return undefined;
    }}
`;

const colorBlock = css`
    ${({ $color, theme }) => {
        switch ($color) {
            case 'primary':
                return css`
                    background-color: ${rgba(theme.palette.primary.main, 0.75)};
                `;
            case 'secondary':
                return css`
                    background-color: ${theme.palette.common.darkGray};
                `;
            default:
                return css`
                    background-color: ${$color};
                `;
        }
    }}
`;

const ChipStyled = styled.div`
    ${sizeBlock}
    ${colorBlock}
    ${borderColorBlock}

    text-transform: uppercase;
    white-space: nowrap;
`;

const Chip = ({ children = null, color = 'primary', size = 'medium', borderColor, ...props }) => (
    <ChipStyled $color={color} $size={size} $borderColor={borderColor} {...props}>
        {children}
    </ChipStyled>
);

Chip.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    borderColor: PropTypes.oneOfType([PropTypes.oneOf(['primary']), PropTypes.string]),
    color: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'secondary']), PropTypes.string]),
    size: PropTypes.oneOfType([PropTypes.oneOf(['inherit', 'large', 'medium', 'small'])]),
};

export default Chip;
