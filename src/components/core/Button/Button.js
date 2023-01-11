import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './Button.styled';

const Button = ({ startIcon: StartIcon, endIcon: EndIcon, children, size, ...props }) => (
    <ButtonContainer size={size} {...props}>
        {StartIcon}
        <span>{children}</span>
        {EndIcon}
    </ButtonContainer>
);

Button.propTypes = {
    startIcon: PropTypes.element,
    endIcon: PropTypes.element,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
    startIcon: null,
    endIcon: null,
    size: 'medium',
};

export default Button;
