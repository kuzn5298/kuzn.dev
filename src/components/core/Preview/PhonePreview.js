import React from 'react';
import PhoneMockup from '@images/phone.png';

import { PreviewDeviceContainer } from './Preview.styled';

const PhonePreview = ({ preview, ...props }) => (
    <PreviewDeviceContainer {...props}>
        <div className="preview phonePreview" style={{ backgroundImage: `url(${preview})` }} />
        <img className="previewMockup" src={PhoneMockup} alt="phone mockup" />
    </PreviewDeviceContainer>
);

export default PhonePreview;
