import React from 'react';
import LaptopMockup from '@images/laptop.png';

import { PreviewContainer } from './Preview.styled';

const LaptopPreview = ({ preview }) => (
    <PreviewContainer>
        <div className="laptopPreview" style={{ backgroundImage: `url(${preview})` }} />
        <img className="previewMockup" src={LaptopMockup} alt="laptop mockup" />
    </PreviewContainer>
);

export default LaptopPreview;
