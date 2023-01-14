import React from 'react';
import PropTypes from 'prop-types';

import { IconButtonContainer } from './IconButton.styled';

const IconButton = (props) => <IconButtonContainer {...props} />;

IconButton.propTypes = {
    color: PropTypes.oneOfType([PropTypes.oneOf(['inherit', 'primary']), PropTypes.string]),
    hoverColor: PropTypes.oneOfType([PropTypes.oneOf(['inherit', 'primary']), PropTypes.string]),
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),
        PropTypes.string,
    ]),
};

IconButton.defaultProps = {
    color: 'inherit',
    hoverColor: 'inherit',
    size: 'inherit',
};

export default IconButton;
