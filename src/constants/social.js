import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from '@components/icons';

export const SOCIAL = {
    GITHUB: 'github',
    LINKEDIN: 'linkedin',
    TWITTER: 'twitter',
    INSTAGRAM: 'instagram',
    EMAIL: 'email',
};

export const SOCIAL_LIST = [
    {
        id: SOCIAL.GITHUB,
        name: 'GitHub',
        icon: GithubIcon,
        link: 'https://github.com/kuzn5298',
    },
    {
        id: SOCIAL.LINKEDIN,
        name: 'Linkedin',
        icon: LinkedinIcon,
        link: 'https://www.linkedin.com/in/kuzn5298/',
    },
    {
        id: SOCIAL.INSTAGRAM,
        name: 'Instagram',
        icon: InstagramIcon,
        link: 'https://www.instagram.com/kuzn5298/',
    },
    {
        id: SOCIAL.TWITTER,
        name: 'Twitter',
        icon: TwitterIcon,
        link: 'https://twitter.com/kuzn5298',
    },
    {
        id: SOCIAL.EMAIL,
        name: 'Email',
        icon: MailIcon,
        link: 'mailto:kuzn5298@gmail.com',
    },
];
