import React from 'react';
import { SectionContainer } from '@components/app';
import { useMedia } from '@hooks/useMedia';
import { Avatar } from './components';
import { AboutSectionContainer, AboutSectionHtml, Title } from './AboutSection.styled';

const AboutSection = ({ title, html, ...props }) => {
    const isMobile = useMedia((theme) => theme.breakpoints.down('sm'));

    return (
        <SectionContainer {...props}>
            <AboutSectionContainer>
                <div className="content">
                    <Title className="title">About</Title>
                    <AboutSectionHtml
                        className="content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
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
