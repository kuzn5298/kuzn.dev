import React from 'react';
import clsx from 'clsx';

import { InputContainer } from './Input.styled';

const Input = ({ errorMessage, error, className, ...inputProps }, ref) => (
    <InputContainer className={className}>
        <input className={clsx('input', error && 'error-container')} ref={ref} {...inputProps} />
        {error && errorMessage && <div className="error">{errorMessage}</div>}
    </InputContainer>
);

export default React.forwardRef(Input);
