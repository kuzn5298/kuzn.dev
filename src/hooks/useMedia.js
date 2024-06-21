import { useEffect, useState } from 'react';
import { IS_BROWSER } from '@constants';
import { useTheme } from './useTheme';

export const useMedia = (queryInput) => {
    const [match, setMatch] = useState();
    const { theme } = useTheme();

    const mediaQuery = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
    const query = mediaQuery.replace(/^@media( ?)/m, '');
    const matchMedia = IS_BROWSER ? window.matchMedia : null;

    query.replace(/^@media( ?)/m, '');

    useEffect(() => {
        if (!matchMedia) {
            return undefined;
        }

        const q = matchMedia(query);

        const updateMatch = () => {
            setMatch(q.matches);
        };

        updateMatch();
        q.addListener(updateMatch);

        return () => {
            q.removeListener(updateMatch);
        };
    }, [query, matchMedia]);

    return match;
};
