import React from 'react';
import clsx from 'clsx';
import { TabContainer } from './Tab.styled';

const Tab = ({ title, subtitle, selected, value, onClick }) => (
    <TabContainer className={clsx({ active: selected })} onClick={(e) => onClick(e, value)}>
        <span className="title">{title}</span>
        {subtitle && <span className="subtitle">{subtitle}</span>}
    </TabContainer>
);

export default Tab;
