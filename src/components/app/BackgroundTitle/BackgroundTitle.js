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

    // FIXME: calculate correct fontSize
    useLayoutEffect(() => {
        handleResize();
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
            <BackgroundTitleStyle ref={titleRef} className="title" style={{ fontSize }}>
                {title}
            </BackgroundTitleStyle>
        </BackgroundTitleContainer>
    );
};

export default BackgroundTitle;
