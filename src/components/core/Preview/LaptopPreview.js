import React from 'react';
import LaptopMockup from '@images/laptop.png';

import { PreviewDeviceContainer } from './Preview.styled';

const LaptopPreview = ({ preview, ...props }) => (
    <PreviewDeviceContainer {...props}>
        <div className="preview laptopPreview" style={{ backgroundImage: `url(${preview})` }} />
        <img className="previewMockup" src={LaptopMockup} alt="laptop mockup" />
    </PreviewDeviceContainer>
);

export default LaptopPreview;
