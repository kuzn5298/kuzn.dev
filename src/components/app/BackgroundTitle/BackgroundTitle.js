import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useIsMounted } from '@hooks';
import {
    BackgroundTitleContainer,
    BackgroundTitle as BackgroundTitleStyle,
} from './BackgroundTitle.styled';

const BackgroundTitle = ({ title }) => {
    const [fontSize, setFontSize] = useState();
    const containerRef = useRef();
    const titleRef = useRef();

    const handleResize = useCallback(() => {
        if (containerRef.current && titleRef.current) {
            const parentContainerHeight = containerRef.current.clientHeight * 1.1;
            const currentTextWidth = titleRef.current.scrollWidth;

            const currentFontSize = parseInt(getComputedStyle(titleRef.current).fontSize, 10);
            const newFontSize = Math.round(
                (parentContainerHeight / currentTextWidth) * currentFontSize
            );

            setFontSize(newFontSize);
        }
    }, []);

    useLayoutEffect(() => {
        const id = setTimeout(() => {
            handleResize();
        }, 500);

        return () => {
            clearTimeout(id);
        };
    }, [handleResize]);

    const isMounted = useIsMounted();

    useLayoutEffect(() => {
        if (isMounted) {
            handleResize();
        }
    }, [title, handleResize, isMounted]);

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    if (!title) {
        return null;
    }

    return (
        <BackgroundTitleContainer ref={containerRef}>
            <BackgroundTitleStyle
                ref={titleRef}
                className="title"
                style={{ fontSize, opacity: fontSize ? 1 : 0 }}
            >
                {title}
            </BackgroundTitleStyle>
        </BackgroundTitleContainer>
    );
};

export default BackgroundTitle;
