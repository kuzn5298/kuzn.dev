import React from 'react';
import { SOCIAL_LIST, SOCIAL } from '@constants';
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from '@components/icons';
import { IconButton } from '@components/core';
import SocialBarContainer from './SocialBar.styled';

const SOCIAL_ICON = {
    [SOCIAL.EMAIL]: <MailIcon />,
    [SOCIAL.GITHUB]: <GithubIcon />,
    [SOCIAL.INSTAGRAM]: <InstagramIcon />,
    [SOCIAL.TWITTER]: <TwitterIcon />,
    [SOCIAL.LINKEDIN]: <LinkedinIcon />,
};

const SocialBar = () => (
    <SocialBarContainer>
        {SOCIAL_LIST.map((social) => (
            <IconButton key={social.id} hover>
                {SOCIAL_ICON[social.id]}
            </IconButton>
        ))}
    </SocialBarContainer>
);

export default SocialBar;
