import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, LeetCodeIcon } from '@components/icons';

export const EMAIL_LINK = 'mailto:hi@kuzn.dev';

export const SOCIAL = {
    GITHUB: 'github',
    LEET_CODE: 'leetcode',
    LINKEDIN: 'linkedin',
    // TWITTER: 'twitter',
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
        id: SOCIAL.LEET_CODE,
        name: 'LeetCode',
        icon: LeetCodeIcon,
        link: 'https://leetcode.com/kuzn5298/',
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
    // {
    //     id: SOCIAL.TWITTER,
    //     name: 'Twitter',
    //     icon: TwitterIcon,
    //     link: 'https://twitter.com/kuzn5298',
    // },
    {
        id: SOCIAL.EMAIL,
        name: 'Email',
        icon: MailIcon,
        link: EMAIL_LINK,
    },
];
