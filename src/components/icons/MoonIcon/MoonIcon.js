import React from 'react';
import SvgIcon from '../SvgIcon';

const MoonIcon = (props) => (
    <SvgIcon {...props}>
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M7.633 3.067A3.001 3.001 0 1 1 4.017 6.32M22 13.05a3.5 3.5 0 1 0-3 5.914" />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.5 8.51l.01-.011M10 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
            />
        </g>
    </SvgIcon>
);

export default MoonIcon;
