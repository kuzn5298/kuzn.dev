import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
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

    const isMounted = useRef(false);

    useLayoutEffect(() => {
        setTimeout(() => {
            handleResize();
            isMounted.current = true;
        }, 500);
    }, [handleResize]);

    useLayoutEffect(() => {
        if (isMounted.current) {
            handleResize();
        }
    }, [title, handleResize]);

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
