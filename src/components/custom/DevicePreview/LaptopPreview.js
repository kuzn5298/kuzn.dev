import React from 'react';
import LaptopMockup from '@images/laptop.png';
import PreviewImg from './PreviewImg';
import { useSlider } from './useSlider';

import { PreviewDeviceContainer } from './Preview.styled';

const LaptopPreview = ({ previews, theme, ...props }) => {
    const { laptopSliderRef, onSlide } = useSlider();

    return (
        <PreviewDeviceContainer {...props}>
            <PreviewImg
                className="laptopPreviewImgContainer"
                sliderRef={laptopSliderRef}
                onSlide={onSlide}
                previews={previews}
            />
            <img className="previewMockup" src={LaptopMockup} alt="laptop mockup" />
        </PreviewDeviceContainer>
    );
};

export default LaptopPreview;
