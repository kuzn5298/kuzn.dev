import React from 'react';
import { Tooltip } from '@components/core';
import { SectionItem, SectionNavContainer } from './SectionNav.styled';

const SectionNav = ({ sections, containerId }) => (
    <SectionNavContainer>
        {sections?.map(({ id, name, to }) => (
            <Tooltip key={id ?? name} title={name} direction="left">
                <SectionItem containerId={containerId} activeClass="active" to={to} spy />
            </Tooltip>
        ))}
    </SectionNavContainer>
);

export default SectionNav;
