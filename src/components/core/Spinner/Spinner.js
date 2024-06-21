/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerStyled } from './Spinner.styled';

const Spinner = ({ size = 'medium', ...props }) => <SpinnerStyled $size={size} {...props} />;

Spinner.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.oneOf(['large', 'medium', 'small']), PropTypes.string]),
};

export default Spinner;
