import styled from 'styled-components';

export const PreviewDeviceContainer = styled.div`
    position: relative;
    overflow: hidden;

    .preview {
        position: absolute;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        background-color: black;
    }

    .laptopPreviewImgContainer {
        top: 3.6%;
        bottom: 10.5%;
        left: 9%;
        right: 9%;
    }

    .phonePreviewImgContainer {
        top: 7%;
        left: 5.3%;
        right: 5.7%;
        bottom: 4%;
        border-radius: 0 0 5% 5%;
    }

    .tabletPreviewImgContainer {
        top: 4.2%;
        bottom: 5.5%;
        left: 5%;
        right: 5.5%;
    }

    .previewMockup {
        position: relative;
        width: 100%;
        pointer-events: none;
    }

    .previewImg {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    .slider {
        --divider-color: ${({ theme }) => theme.palette.primary.main};
        --default-handle-color: ${({ theme }) => theme.palette.primary.main};
        --handle-position-start: 25%;
    }
`;

export const PreviewContainer = styled.div`
    position: relative;
    width: 100%;

    .phonePreview {
        z-index: 2;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 15%;
    }

    .tabletPreview {
        z-index: 1;
        position: absolute;
        right: 5%;
        bottom: 0;
        width: 30%;
    }

    .laptopPreview {
        left: 0;
        bottom: 0;
        width: 90%;
    }
`;
