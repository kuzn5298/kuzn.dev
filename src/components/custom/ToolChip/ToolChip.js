import React from 'react';
import { Chip } from '../../core';

const ToolChip = ({ children, ...props }) => (
    <Chip size="small" color="secondary" borderColor="primary" {...props}>
        {children}
    </Chip>
);

export default ToolChip;
