import React from 'react';
import { ArrowButtonContainer } from './ArrowButton.styled';

const ArrowButton = ({ children, ...props }) => (
    <ArrowButtonContainer {...props}>
        <span>{children}</span>
        <div className="arrow" />
    </ArrowButtonContainer>
);

export default ArrowButton;
