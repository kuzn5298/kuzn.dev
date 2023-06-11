import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import NormalizeStyles from './NormalizeStyles';
import CustomStyles from './CustomStyles';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables}
    ${NormalizeStyles};
    ${CustomStyles};

    :root {
        background-color: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize}px;
    }

    .elevation-2 {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    }
`;

export default GlobalStyle;
