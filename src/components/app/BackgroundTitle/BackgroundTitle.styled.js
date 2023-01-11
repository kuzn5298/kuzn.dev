import styled from 'styled-components';

const BackgroundTitleContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    user-select: none;
    z-index: -1;

    .title {
        position: absolute;
        right: 2rem;
        bottom: -5%;
        white-space: nowrap;
        text-transform: uppercase;
        transform-origin: bottom right;
        transform: rotate(-90deg) translateX(100%);
        font-weight: 900;
        opacity: 0.05;

        line-height: 0.75;
    }
`;

export default BackgroundTitleContainer;
