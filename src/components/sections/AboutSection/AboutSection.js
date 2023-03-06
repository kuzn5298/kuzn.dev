import React from 'react';
import { SectionContainer } from '@components/app';
import { useMedia } from '@hooks/useMedia';
import { Avatar } from './components';
import { AboutSectionContainer, AboutSectionHtml } from './AboutSection.styled';

const AboutSection = ({ title, html, ...props }) => {
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));

    return (
        <SectionContainer title={title} {...props}>
            <AboutSectionContainer>
                <AboutSectionHtml className="content" dangerouslySetInnerHTML={{ __html: html }} />
                {!isMobile && (
                    <div className="avatar">
                        <Avatar />
                    </div>
                )}
            </AboutSectionContainer>
        </SectionContainer>
    );
};

export default AboutSection;
