import React from 'react';
import { Button } from '@components/core';
import { DownloadIcon } from '@components/icons';
import { goResumeFile } from '@utils';

const ResumeButton = (props) => (
    <Button endIcon={<DownloadIcon />} onClick={goResumeFile} {...props}>
        Resume
    </Button>
);

export default ResumeButton;
