import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};
    }
`;

export default GlobalStyle;
