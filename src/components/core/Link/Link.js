import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
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
                    font-size: 1.5rem;
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

const Link = styled(GatsbyLink)`
    ${fontSizeBlock}
    ${colorBlock}

    text-transform: uppercase;
`;

Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.oneOf(['inherit', 'primary']), PropTypes.string]),
    fontSize: PropTypes.oneOfType([
        PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),
        PropTypes.string,
    ]),
    to: PropTypes.string,
};

Link.defaultProps = {
    children: null,
    color: 'inherit',
    fontSize: 'medium',
};

export default Link;
