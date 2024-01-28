import styled from 'styled-components';

export const PreviewDeviceContainer = styled.div`
    position: relative;
    overflow: hidden;

    .preview {
        position: absolute;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    .laptopPreview {
        top: 3%;
        left: 9%;
        right: 9%;
        bottom: 10%;
    }

    .phonePreview {
        top: 1.5%;
        bottom: 2%;
        left: 4%;
        right: 4%;
        border-radius: 10%/5%;
    }

    .tabletPreview {
        top: 4%;
        bottom: 5%;
        right: 6%;
        left: 6%;
    }

    .previewMockup {
        position: relative;
        width: 100%;
    }
`;

export const PreviewContainer = styled.div`
    position: relative;
    width: 100%;

    .phone-preview {
        z-index: 2;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 15%;
    }

    .tablet-preview {
        z-index: 1;
        position: absolute;
        right: 5%;
        bottom: 0;
        width: 30%;
    }

    .laptop-preview {
        left: 0;
        bottom: 0;
        width: 90%;
    }
`;
