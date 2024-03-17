import { THEME } from '@constants';

const THEME_INDEX = {
    [THEME.LIGHT]: 0,
    [THEME.DARK]: 1,
};

export const getPreviewURL = (previews, theme = THEME.LIGHT) => {
    const previewIndex = THEME_INDEX[theme];
    const preview = previews?.[previewIndex] ?? previews?.[0];
    return preview?.publicURL;
};
