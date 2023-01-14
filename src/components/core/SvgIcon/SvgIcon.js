import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fontSizeBlock = css`
    ${({ size }) => {
        switch (size) {
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
                    font-size: ${size};
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

const SvgIcon = styled.svg`
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;

    ${fontSizeBlock}
    ${colorBlock}
`;

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

SvgIcon.defaultProps = {
    children: null,
    color: 'inherit',
    fontSize: 'inherit',
    viewBox: '0 0 24 24',
};

export default SvgIcon;
