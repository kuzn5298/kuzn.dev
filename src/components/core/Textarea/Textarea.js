import React from 'react';
import clsx from 'clsx';

import { TextareaContainer } from './Textarea.styled';

const Textarea = ({ errorMessage, error, className, ...inputProps }, ref) => (
    <TextareaContainer className={className}>
        <textarea
            className={clsx('textarea', error && 'error-container')}
            ref={ref}
            {...inputProps}
        />
        {error && errorMessage && <div className="error">{errorMessage}</div>}
    </TextareaContainer>
);

export default React.forwardRef(Textarea);
