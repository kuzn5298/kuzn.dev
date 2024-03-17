import React from 'react';
import PhoneMockup from '@images/phone.png';
import PreviewImg from './PreviewImg';
import { useSlider } from './useSlider';

import { PreviewDeviceContainer } from './Preview.styled';

const PhonePreview = ({ previews, theme, ...props }) => {
    const { phoneSliderRef, onSlide } = useSlider();
    return (
        <PreviewDeviceContainer {...props}>
            <PreviewImg
                className="phonePreviewImgContainer"
                sliderRef={phoneSliderRef}
                onSlide={onSlide}
                previews={previews}
            />
            <img className="previewMockup" src={PhoneMockup} alt="phone mockup" />
        </PreviewDeviceContainer>
    );
};

export default PhonePreview;
