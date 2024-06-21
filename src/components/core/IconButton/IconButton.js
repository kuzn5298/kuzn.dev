/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { IconButtonContainer } from './IconButton.styled';

const IconButton = ({ color = 'inherit', hoverColor = 'inherit', size = 'inherit', ...props }) => (
    <IconButtonContainer $color={color} $hoverColor={hoverColor} $size={size} {...props} />
);

IconButton.propTypes = {
    color: PropTypes.oneOfType([PropTypes.oneOf(['inherit', 'primary']), PropTypes.string]),
    hoverColor: PropTypes.oneOfType([PropTypes.oneOf(['inherit', 'primary']), PropTypes.string]),
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),
        PropTypes.string,
    ]),
};

export default IconButton;
