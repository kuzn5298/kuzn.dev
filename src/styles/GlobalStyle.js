import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
    ${fonts};

    body {
        margin: 0;
        overflow: hidden;
        background-color: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize};
    }
`;

export default GlobalStyle;
