/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fontSizeBlock = css`
    ${({ $fontSize }) => {
        switch ($fontSize) {
            case 'inherit':
                return css`
                    font-size: inherit;
                `;
            case 'small':
                return css`
                    font-size: 0.75rem;
                `;
            case 'medium':
                return css`
                    font-size: 1rem;
                `;
            case 'large':
                return css`
                    font-size: 1.25rem;
                `;
            default:
                return css`
                    font-size: ${$fontSize};
                `;
        }
    }}
`;

const colorBlock = css`
    ${({ color, theme }) => {
        switch (color) {
            case 'inherit':
                return css`
                    color: inherit;
                `;
            case 'primary':
                return css`
                    color: ${theme.palette.primary.main};
                `;
            default:
                return css`
                    color: ${color};
                `;
        }
    }}
`;

const SvgIconStyled = styled.svg`
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;

    ${fontSizeBlock}
    ${colorBlock}
`;

const SvgIcon = ({
    children = null,
    color = 'inherit',
    fontSize = 'inherit',
    viewBox = '0 0 24 24',
    ...props
}) => (
    <SvgIconStyled color={color} $fontSize={fontSize} viewBox={viewBox} {...props}>
        {children}
    </SvgIconStyled>
);

SvgIcon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.oneOf(['inherit', 'primary']), PropTypes.string]),
    fontSize: PropTypes.oneOfType([
        PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),
        PropTypes.string,
    ]),
    viewBox: PropTypes.string,
};

export default SvgIcon;
