import React from 'react';
import PhonePreview from './PhonePreview';
import TabletPreview from './TabletPreview';
import LaptopPreview from './LaptopPreview';
import { PreviewContainer } from './Preview.styled';

const Preview = ({ phonePreview, tabletPreview, laptopPreview }) => (
    <PreviewContainer>
        <PhonePreview preview={phonePreview} className="phone-preview" />
        <TabletPreview preview={tabletPreview} className="tablet-preview" />
        <LaptopPreview preview={laptopPreview} className="laptop-preview" />
    </PreviewContainer>
);

export default Preview;
