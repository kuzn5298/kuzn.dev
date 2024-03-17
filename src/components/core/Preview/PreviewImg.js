import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import clsx from 'clsx';
import { THEME } from '@constants';
import { getPreviewURL } from '@utils';

const PreviewImg = ({ previews, className, sliderRef, onSlide, ...props }) => {
    const lightPreviewUrl = getPreviewURL(previews, THEME.LIGHT);
    const darkPreviewUrl = getPreviewURL(previews, THEME.DARK);

    return (
        <div className={clsx('preview', className)} {...props}>
            {previews?.length > 1 ? (
                <ImgComparisonSlider ref={sliderRef} onSlide={onSlide} class="slider">
                    <img slot="first" width="100%" alt="light preview" src={lightPreviewUrl} />
                    <img slot="second" width="100%" alt="dark preview" src={darkPreviewUrl} />
                </ImgComparisonSlider>
            ) : (
                <img className="previewImg" src={lightPreviewUrl} alt="preview" />
            )}
        </div>
    );
};

export default PreviewImg;
