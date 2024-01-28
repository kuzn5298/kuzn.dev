import React from 'react';
import TabletMockup from '@images/tablet.png';

import { PreviewDeviceContainer } from './Preview.styled';

const TabletPreview = ({ preview, ...props }) => (
    <PreviewDeviceContainer {...props}>
        <div className="preview tabletPreview" style={{ backgroundImage: `url(${preview})` }} />
        <img className="previewMockup" src={TabletMockup} alt="tablet mockup" />
    </PreviewDeviceContainer>
);

export default TabletPreview;
