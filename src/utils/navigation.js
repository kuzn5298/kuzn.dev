import { navigate } from 'gatsby';
import { APP_ROUTES } from '@constants/routes';

export const openURL = (url, target = '_blank') => {
    if (url) {
        window.open(url, target).focus();
    }
};

export const goHome = () => {
    navigate(APP_ROUTES.HOME);
};

export const goAbout = () => {
    navigate(APP_ROUTES.ABOUT);
};

export const goProjectById = (id) => {
    navigate(`${APP_ROUTES.PROJECTS}/${id}`);
};

export const goResumeFile = () => {
    openURL('/resume.pdf');
};
