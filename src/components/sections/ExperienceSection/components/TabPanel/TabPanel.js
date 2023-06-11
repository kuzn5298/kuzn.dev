import React from 'react';

const TabPanel = ({ children, value, selectedValue, ...props }) =>
    value === selectedValue && <div {...props}>{children}</div>;

export default TabPanel;
