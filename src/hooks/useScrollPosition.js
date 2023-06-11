import { useEffect, useState } from 'react';

export const useScrollPosition = (ref) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const container = ref?.current;
        const updatePosition = () => {
            const scroll = container?.scrollTop;
            setScrollPosition(scroll);
        };
        container?.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => container?.removeEventListener('scroll', updatePosition);
    }, [ref]);

    return scrollPosition;
};
