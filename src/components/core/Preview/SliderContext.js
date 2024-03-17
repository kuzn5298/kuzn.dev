import React, { createContext, useCallback, useLayoutEffect, useMemo, useRef } from 'react';

export const SliderContext = createContext({});

export const SliderProvider = ({ children }) => {
    const isAnimationRef = useRef(true);
    const phoneSliderRef = useRef(null);
    const tabletSliderRef = useRef(null);
    const laptopSliderRef = useRef(null);

    const onChangeValue = useCallback((action) => {
        const value =
            laptopSliderRef.current?.value ??
            tabletSliderRef.current?.value ??
            phoneSliderRef.current?.value;
        const newValue = typeof action === 'function' ? action(value) : action;
        if (newValue !== undefined) {
            if (phoneSliderRef.current) phoneSliderRef.current.value = newValue;
            if (tabletSliderRef.current) tabletSliderRef.current.value = newValue;
            if (laptopSliderRef.current) laptopSliderRef.current.value = newValue;
        }
    }, []);

    const onSlide = useCallback(
        (e) => {
            isAnimationRef.current = false;
            onChangeValue(e?.target?.value);
        },
        [onChangeValue]
    );

    useLayoutEffect(() => {
        onChangeValue(0);
        let animationId;

        const move = () => {
            onChangeValue((value) => {
                if (value >= 70) {
                    isAnimationRef.current = false;
                    return value;
                }
                return value + 0.7;
            });
        };

        const animate = () => {
            move();
            if (isAnimationRef.current) {
                animationId = requestAnimationFrame(animate);
            } else {
                cancelAnimationFrame(animationId);
            }
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [onChangeValue]);

    const value = useMemo(
        () => ({ phoneSliderRef, tabletSliderRef, laptopSliderRef, onSlide }),
        [phoneSliderRef, tabletSliderRef, laptopSliderRef, onSlide]
    );

    return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
};
