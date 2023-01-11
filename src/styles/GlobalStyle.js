import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import NormalizeStyles from './NormalizeStyles';
import CustomStyles from './CustomStyles';

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${NormalizeStyles};
    ${CustomStyles};


    :root {
        background-color: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize}px;
    }
`;

export default GlobalStyle;
