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
