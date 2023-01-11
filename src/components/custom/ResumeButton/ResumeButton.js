import React from 'react';
import { Button } from '@components/core';
import { DownloadIcon } from '@components/icons';

const ResumeButton = (props) => (
    <Button endIcon={<DownloadIcon />} {...props}>
        Resume
    </Button>
);

export default ResumeButton;
