import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import NormalizeStyles from './NormalizeStyles';
import CustomStyles from './CustomStyles';
import variables from './variables';
import shadows from './shadows';

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables}
    ${NormalizeStyles};
    ${CustomStyles};
    ${shadows};

    :root {
        background-color: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize}px;
        line-height: 1.4;
    }
`;

export default GlobalStyle;
