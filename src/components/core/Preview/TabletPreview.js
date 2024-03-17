import React from 'react';
import TabletMockup from '@images/tablet.png';
import PreviewImg from './PreviewImg';
import { useSlider } from './useSlider';

import { PreviewDeviceContainer } from './Preview.styled';

const TabletPreview = ({ previews, theme, ...props }) => {
    const { tabletSliderRef, onSlide } = useSlider();

    return (
        <PreviewDeviceContainer {...props}>
            <PreviewImg
                className="tabletPreviewImgContainer"
                sliderRef={tabletSliderRef}
                onSlide={onSlide}
                previews={previews}
            />
            <img className="previewMockup" src={TabletMockup} alt="tablet mockup" />
        </PreviewDeviceContainer>
    );
};

export default TabletPreview;
