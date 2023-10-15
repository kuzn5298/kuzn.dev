import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.styled';

const Button = ({
    startIcon: StartIcon,
    endIcon: EndIcon,
    children,
    size,
    border,
    className,
    ...props
}) => (
    <ButtonContainer size={size} className={clsx(border && 'border', className)} {...props}>
        {StartIcon}
        <span>{children}</span>
        {EndIcon}
    </ButtonContainer>
);

Button.propTypes = {
    startIcon: PropTypes.element,
    endIcon: PropTypes.element,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    border: PropTypes.bool,
};

Button.defaultProps = {
    startIcon: null,
    endIcon: null,
    size: 'medium',
    border: false,
};

export default Button;
