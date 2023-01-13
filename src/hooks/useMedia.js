import { useLayoutEffect, useState } from 'react';
import { useTheme } from './useTheme';

export const useMedia = (queryInput) => {
    const [match, setMatch] = useState();
    const { theme } = useTheme();

    const mediaQuery = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
    const query = mediaQuery.replace(/^@media( ?)/m, '');
    const matchMedia = window.matchMedia ?? null;

    query.replace(/^@media( ?)/m, '');

    useLayoutEffect(() => {
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
