import { css } from 'styled-components';

// Lexend
import LexendRegularWoff from './Lexend/Lexend-Regular.woff';
import LexendRegularWoff2 from './Lexend/Lexend-Regular.woff2';
import LexendBoldWoff from './Lexend/Lexend-Bold.woff';
import LexendBoldWoff2 from './Lexend/Lexend-Bold.woff2';
import LexendBlackWoff from './Lexend/Lexend-Black.woff';
import LexendBlackWoff2 from './Lexend/Lexend-Black.woff2';

const Fonts = css`
    @font-face {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 400;
        src:
            local(''),
            url(${LexendRegularWoff2}) format('woff2'),
            url(${LexendRegularWoff}) format('woff');
    }

    @font-face {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 700;
        src:
            local(''),
            url(${LexendBoldWoff2}) format('woff2'),
            url(${LexendBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 900;
        src:
            local(''),
            url(${LexendBlackWoff2}) format('woff2'),
            url(${LexendBlackWoff}) format('woff');
    }
`;

export default Fonts;
