import React from 'react';
import { SkillIconContainer } from './SkillIcon.styled';

const SkillIcon = ({ name, iconComponent: Icon, hoverColor, ...props }) => (
    <SkillIconContainer $hoverColor={hoverColor} {...props}>
        {Icon && React.cloneElement(Icon, { className: 'icon' })}
        <span className="name">{name}</span>
    </SkillIconContainer>
);

export default SkillIcon;
