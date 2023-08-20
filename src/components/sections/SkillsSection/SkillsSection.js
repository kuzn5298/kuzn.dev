import React from 'react';
import { SectionContainer } from '@components/app';
import { SKILLS } from '@constants/skills';
import { SkillIcon } from '@components/custom';
import { openURL } from '@utils/navigation';
import { SkillSectionContainer } from './SkillSection.styled';

const SkillsSection = ({ title, html, ...props }) => (
    <SectionContainer alignCenter title={title} {...props}>
        <SkillSectionContainer>
            {SKILLS.map((skill) => (
                <SkillIcon
                    key={skill.id}
                    hoverColor={skill.color}
                    name={skill.name}
                    iconComponent={skill.Icon}
                    onClick={() => openURL(skill.url)}
                />
            ))}
        </SkillSectionContainer>
    </SectionContainer>
);

export default SkillsSection;
