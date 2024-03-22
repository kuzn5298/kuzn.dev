import React from 'react';
import PhonePreview from './PhonePreview';
import TabletPreview from './TabletPreview';
import LaptopPreview from './LaptopPreview';
import { SliderProvider } from './SliderContext';
import { PreviewContainer } from './Preview.styled';

const Preview = ({ phonePreviews, tabletPreviews, laptopPreviews }) => (
    <SliderProvider>
        <PreviewContainer>
            <PhonePreview previews={phonePreviews} className="phonePreview" />
            <TabletPreview previews={tabletPreviews} className="tabletPreview" />
            <LaptopPreview previews={laptopPreviews} className="laptopPreview" />
        </PreviewContainer>
    </SliderProvider>
);

export default Preview;
